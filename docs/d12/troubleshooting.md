---
id: troubleshooting
title: D12 — Troubleshooting
description: Fixes for common D12 problems — no picture, not online, no video in Traqcare, no GPS, SD card, and AI alarm issues.
sidebar_position: 7
keywords: [D12, troubleshooting, offline, no video, camera, SD card, GPS, simulated speed, Device ID, IMEI]
---

# D12 — Troubleshooting

## Quick reference

| Item | Value |
|------|-------|
| Settings password (if asked) | `00000000` |
| Server (Center 1) | `d4.traqcare.com` |
| Port (Center 1) | `5101` |
| Protocol (Center 1) | `2013` |
| Protocol in Traqcare | **JT808 (5101)** |
| Device ID | **Last 12 digits** of the IMEI on the label, no leading 0 |
| DeviceId in Camera Settings | Same Device ID, no leading 0 |
| Simulated speed for AI testing | `60`, then set back to `0` |

## The screen stays off

- Check the power: **B+** to +, **GND** to −, and **ACC** must have power too. On a desk, connect ACC to + as well.
- The supply must be **9–36 V**.

## A camera shows no picture

- Check that the camera connector is screwed on firmly at the right channel (**CH1–CH5**).
- Try the camera on a different channel to see whether the camera or the channel is the problem.

## D12 is not online on Traqcare

Check the **status icons** at the top right of the D12 screen first (see [status icons](./specifications.md#screen-status-icons)).

1. **4G icon grey:** check that the **4G antenna** is connected, the **SIM** has an active data plan and the SIM PIN is off. If your mobile operator needs an APN, set it in **Settings → APN**.
2. **4G icon bright but platform icon grey:** open **Settings → Platform → Server** and confirm **Center 1** is `d4.traqcare.com`, port `5101`, protocol `2013`. Tap **Confirm**.
3. **Device ID:** in Traqcare, **IMEI / Unique ID** must be the **last 12 digits of the IMEI**, without a leading 0.
4. **Protocol:** in Traqcare, the device must use **JT808 (5101)**.
5. **Activated:** in **Settings → Devices**, if the D12's row still shows an **Activate** link, click it and choose a plan. No coins? Ask your supplier (Skywonder or your reseller) to add coins or activate it for you.
6. **Restart:** switch the power off and on, then wait 5 minutes.

## Online, but no live video

- In Traqcare **Device Sensors**, both **CAMERA** and **VIDEO CAMERA** must be on.
- In **Camera Settings**, **DeviceId** must be the same as the **IMEI / Unique ID**, and **Video Platform** must be **Traqcare**.
- **Number of Channels** must be at least the number of cameras: `6` for 5 cameras, `4` for 3–4 cameras.
- Video needs a good 4G signal. Try again where the signal is stronger.

## No location (GPS icon grey)

- Check that the **GPS antenna** is connected to the **GPS** connector.
- GPS needs a view of the sky. Move the antenna outside or near a window.

## Nothing recorded / SD card icon grey

- Use a good-quality SD card (Class 10 or faster, up to 512 GB) and check that it's inserted in the **SD** slot.
- If it still isn't detected, format the card in **Settings → Format** (this erases the card), or try another card.

## No AI alarms

- AI alarms only trigger above **30 km/h**. To test while parked, set **Simulated speed** to `60`. See [Test the AI alarms](./test-device.mdx#test-the-ai-alarms).
- In **Settings → AI**, check that each camera has the right job (**CH4 = DMS**, blind-spot cameras on CH1, CH2, CH3 and CH5).
- The driver camera must see the driver's face clearly.

## AI alarms while the vehicle is parked

- The **simulated speed** is probably still set. Go to **Settings → System**, set **Simulated speed** to `0` and tap **Confirm**, or restart the D12.

Still stuck? Raise a ticket at [track.traqcare.com/ticket](https://track.traqcare.com/ticket) with your **IMEI** and a short description of the problem.
