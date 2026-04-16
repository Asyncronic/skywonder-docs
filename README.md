# Skywonder Devices Documentation

Docusaurus site for installation, configuration, and activation guides for every device supported by the Traqcare platform. Devices are organised into two families:

- **🎥 Dashcams** — AI cameras with ADAS and DMS
- **📡 GPS Trackers** — wired / wireless trackers

## Local Development

```bash
npm install
npm run start
```

Opens at http://localhost:3000

## Build

```bash
npm run build
```

Static site is emitted to `build/`.

## Structure

```
docs/
  intro.md                 # Device catalogue landing page
  d9/                      # D9 Driving Assistance Equipment
    overview.md
    specifications.md
    installation.md
    configure-app.md       # Traqcam Connect — AI calibration
    make-online.md         # Traqcam Connect → onboard on Traqcare
    ai-features.md         # ADAS + DMS reference
    commands.md            # Local + remote commands
    firmware-upgrade.md
    troubleshooting.md
src/pages/index.tsx        # Devices landing / grid
sidebars.ts                # Sidebar configuration
docusaurus.config.ts       # Site config
```

## Adding a New Device

1. Create `docs/<device-id>/` with, at minimum:
   - `overview.md`
   - `installation.md`
   - `make-online.md`
   - `commands.md`
   - `troubleshooting.md`
2. Register the device in `sidebars.ts` under the correct family — **Dashcams** or **GPS Trackers**. Add the device as a sub-category with its doc ids.
3. Add a card in `src/pages/index.tsx` to either the `dashcams` or `gpsTrackers` array. Flip `status` to `available` when the guide is published.
4. Update `docs/intro.md` with a new row in the matching family's table.
