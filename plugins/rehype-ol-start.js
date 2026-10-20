/**
 * Rehype plugin: an ordered list that resumes after a screenshot ("4. ..." after an image) gets `start="4"`.
 * The step markers in src/css/docs-ui.css are drawn with a CSS counter, which ignores `start`, so this sets the
 * counter's first value on the list itself. Shared with skywonder-devices-docs (same file in both repos).
 */
module.exports = function rehypeOlStart() {
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'ol') {
      const start = Number(node.properties && node.properties.start);
      if (Number.isFinite(start) && start > 1) {
        node.properties.style = `counter-reset: dx-step ${start - 1}`;
      }
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
};
