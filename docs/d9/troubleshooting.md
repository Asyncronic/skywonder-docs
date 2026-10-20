---
id: troubleshooting
title: D9 — Troubleshooting & Maintenance
sidebar_label: "Troubleshooting & Maintenance"
description: Common D9 problems and fixes — recording errors, video issues, heat, and device-offline checks. Includes maintenance precautions.
sidebar_position: 9
keywords: [D9, troubleshooting, recording invalid, no audio, blurry, heat, offline, maintenance]
---

# D9 — Troubleshooting & Maintenance

## Quick Health Check

Run through these in order before deeper debugging:

1. **LEDs** — see the LED table in [Specifications](./specifications.md#led-indicators).
2. **Power** — multimeter on B+/GND at the device plug. Expect **9–36 V**.
3. **SIM** — insert in a phone, verify data works, check PIN is disabled.
4. **SD card** — genuine Class 10+, FAT32, < 256 GB.
5. **Traqcam Connect → Platform** — confirm main server is `d4.traqcare.com : 5101` with protocol `2013`.
6. **Traqcare → Settings → Devices** — confirm the IMEI / Device ID **exactly** matches what Traqcam Connect shows.

## Common Problems

| Problem | Solution |
|---------|----------|
| **Recording invalid** | Use **FAT32** and a storage card with **read/write speed Class 10 or higher**. |
| **Loop recording invalid** | Check free space on the SD card. If full, format the card. |
| **Video is blurry** | Remove the lens protective film. Clean the lens and the windshield. |
| **No audio in recording** | Make sure the **recording function is enabled** in the app. |
| **Device temperature is too high** | Expected — AI runs heavy computation. Do not touch the heat sink while in operation to avoid burns. Ensure airflow is not blocked. |
| **Files cannot be opened on a computer** | Try a different video player. If still unreadable, the card may be damaged — reformat or replace it. |
| **Device never comes online on Traqcare** | Check **4G LED** (should be solid yellow), SIM data plan, platform settings in Traqcam Connect, and that the Device ID in Traqcare matches. |
| **GPS LED never goes solid** | Move the vehicle outside with a clear sky view. Verify the external GPS antenna is seated on the 4-pin BMW head. |
| **Wi-Fi cannot connect from phone** | Press the device Wi-Fi button again. Default password `12345678`. Forget and rejoin the network on the phone. |
| **Calibration stuck at a percentage** | Drive above **20 km/h** — calibration pauses at lower speeds. |
| **Other** | Restore to factory settings, or contact local technical support. |

## Maintenance Precautions

1. **Keep the device dry.** Do not let the device or cables stay in a damp environment. Do not operate with wet hands — short circuits, corrosion, or shock may result.
2. **Avoid strong impacts or vibrations** to prevent equipment malfunction.
3. **Do not store in extreme temperatures** — outside the operating range can cause malfunctions.
4. **Do not hit, throw, or puncture** the unit; avoid drops and squeezing.
5. **Use only officially approved power and data cables.**
6. **Do not disassemble the unit or accessories** without authorisation — doing so voids the warranty.

## Safety Warnings

- Alerts from active-safety AI **cannot replace the driver's decisions and operations**.
- Recognition accuracy varies with road and weather conditions and is **not 100 %**.
- Do **not** attempt to view stored data or change device settings **while driving**. Operate the device only when the vehicle is stationary and parked safely.
- Do **not** install the device where it blocks the driver's view or interferes with the steering wheel, pedals, or gear lever.
- Do **not** place the device in front of or on top of any safety airbag.
- Some countries or regions prohibit or restrict drivers from playing videos on devices — comply with local law.
