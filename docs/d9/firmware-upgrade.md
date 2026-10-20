---
id: firmware-upgrade
title: D9 — Firmware Upgrade
sidebar_label: "Firmware Upgrade"
description: Upgrade the D9 firmware via the Traqcam Connect app, and recover a bricked unit using forced SD-card flashing.
sidebar_position: 8
keywords: [D9, firmware, upgrade, OTA, SigmastarUpgradeSD, forced flash, recovery]
---

# D9 — Firmware Upgrade

There are **two** ways to flash the D9 — the normal in-app upgrade, and a forced SD-card reflash used to recover a bricked device.

:::warning
**Do not cut power, remove the SD card, or operate the device during any firmware upgrade.** Interrupting the flash can brick the unit.
:::

## Method 1 — In-App Upgrade (Traqcam Connect)

Use this whenever the device is working normally.

1. Prepare a **16 GB – 128 GB** storage card.
2. Insert it into the D9 and **format** it through the Traqcam Connect app (System → Format SD Card).
3. On a computer, copy `SigmastarUpgradeSD.bin` into the **root directory** of the storage card.
4. Insert the prepared card back into the device.
5. Power on the device.
6. Connect the device in Traqcam Connect → **System → Firmware Version**.
7. Wait **1–3 minutes** — the device will restart and emit a **beep** when done.

### LED sequence (normal upgrade)

| Step | LED state |
|------|-----------|
| 1. Prepare for upgrade | Blue · Yellow · Green |
| 2. Tap **Firmware Version** | Close · Close · Close |
| 3. Upgrade in progress | Purple · Yellow · Green |
| 4. Device startup & configuration | Blue · Yellow (or off) · Green (or off) — then power-on sound |
| 5. Upgrade complete, recording starts | Red · Yellow (or off) · Green (or off) |

## Method 2 — Forced SD-Card Flash (Recovery)

Use this when the firmware is damaged and the device will not boot normally.

1. Prepare a storage card **smaller than 32 GB**.
2. On a computer, **format it as FAT32**.
3. Copy **all** upgrade files into the root directory:
   - `IPL`
   - `IPL_CUST`
   - `UBOOT`
   - `SigmastarUpgradeSD.bin`
4. Insert the prepared card into the device.
5. Power on the device — it may appear unresponsive at first.
6. Wait **1–3 minutes** — the device will power on and emit a **beep** when the flash completes.

### LED sequence (forced flash)

| Step | LED state |
|------|-----------|
| 1. Insert prepared SD card | Close · Close · Close |
| 2. Power on, upgrade in progress | Close · Close · Green |
| 3. Device startup & configuration | Blue · Yellow (or off) · Green (or off) — then power-on sound |
| 4. Upgrade complete, recording starts | Red · Yellow (or off) · Green (or off) |

## After the Upgrade

- Re-open **Traqcam Connect** and verify **Platform** settings are still `d4.traqcare.com : 5101 / 2013`.
- In **Traqcam Connect → AI**, verify ADAS Render and DMS Render are still on. Re-run calibration if the camera has been re-aimed.
- Confirm the device is back online on Traqcare.
