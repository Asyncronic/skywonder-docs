/**
 * Search and AI-answer extras, written into the built site after `docusaurus build`:
 *
 *  - TechArticle JSON-LD on every /docs/ page (headline, description, URL, publisher), so search engines and AI
 *    assistants know each guide is a technical article by the manufacturer.
 *  - FAQPage JSON-LD on the routes in `faqRoutes`, built from the questions that are visible on the page
 *    (h2/h3 headings ending in "?" and the text under them). Nothing is listed that a reader cannot see.
 *  - llms.txt: the hand-written header in static/llms.txt, followed by every docs page with its one-line description.
 *
 * It reads the built HTML (so it always matches the content) and only inserts a <script> before </head>; the page
 * markup itself is never rewritten. Shared with traqcare-docs (same file in both repos).
 */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const clean = (s) => s.replace(/[\u200b\u00a0]/g, ' ').replace(/\s+/g, ' ').trim();
const ldScript = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

module.exports = function seoPostBuild(context, options) {
  const { siteName, publisher, faqRoutes = [], sectionLabels = {} } = options;
  return {
    name: 'seo-postbuild',
    async postBuild({ outDir, routesPaths, siteConfig }) {
      const site = siteConfig.url.replace(/\/$/, '');
      const pages = [];
      for (const route of [...new Set(routesPaths)].sort()) {
        if (!route.startsWith('/docs/') || route.includes('/tags')) continue;
        const file = [path.join(outDir, route, 'index.html'), path.join(outDir, `${route.replace(/\/$/, '')}.html`)].find((f) => fs.existsSync(f));
        if (!file) continue;
        const html = fs.readFileSync(file, 'utf8');
        const $ = cheerio.load(html);
        const headline = clean($('article h1').first().text() || $('h1').first().text());
        const description = $('meta[name="description"]').attr('content') || '';
        const url = site + route;
        const graph = [
          {
            '@type': 'TechArticle',
            headline,
            description,
            url,
            inLanguage: 'en',
            isPartOf: { '@type': 'WebSite', name: siteName, url: `${site}/` },
            publisher,
            author: publisher,
          },
        ];
        if (faqRoutes.includes(route)) {
          const questions = [];
          $('.theme-doc-markdown')
            .find('h2, h3')
            .each((_, h) => {
              const q = clean($(h).text());
              if (!q.endsWith('?')) return;
              const parts = [];
              let n = $(h).next();
              while (n.length && !n.is('h2, h3')) {
                // Lists read as one sentence: "a; b; c."
                parts.push(n.is('ul, ol') ? `${n.find('li').map((_, li) => clean($(li).text())).get().join('; ')}.` : clean(n.text()));
                n = n.next();
              }
              const answer = parts.filter(Boolean).join(' ').slice(0, 1200);
              if (answer) questions.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: answer } });
            });
          if (questions.length) graph.push({ '@type': 'FAQPage', url, mainEntity: questions });
        }
        fs.writeFileSync(file, html.replace('</head>', `${ldScript({ '@context': 'https://schema.org', '@graph': graph })}</head>`));
        pages.push({ route, title: headline || clean($('title').text()), description, url });
      }

      // llms.txt: keep the hand-written header, then list every page by section.
      const llmsPath = path.join(outDir, 'llms.txt');
      const header = fs.existsSync(llmsPath) ? fs.readFileSync(llmsPath, 'utf8').trimEnd() : `# ${siteName}`;
      const bySection = new Map();
      for (const p of pages) {
        const key = p.route.split('/')[2] || 'docs';
        if (!bySection.has(key)) bySection.set(key, []);
        bySection.get(key).push(p);
      }
      // Sections in the order sectionLabels lists them, the rest alphabetically after.
      const order = Object.keys(sectionLabels);
      const rank = (k) => (order.includes(k) ? order.indexOf(k) : order.length);
      const body = [...bySection]
        .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
        .map(([key, list]) => `### ${sectionLabels[key] ?? key}\n\n${list.map((p) => `- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`).join('\n')}`)
        .join('\n\n');
      fs.writeFileSync(llmsPath, `${header}\n\n## All pages\n\n${body}\n`);
      console.log(`[seo-postbuild] ${pages.length} docs pages: TechArticle JSON-LD, ${faqRoutes.length} FAQ route(s), llms.txt`);
    },
  };
};
