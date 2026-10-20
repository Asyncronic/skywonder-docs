---
id: troubleshooting
title: A6 — Troubleshooting
sidebar_label: "Troubleshooting"
description: Fixes for common A6 dashcam problems — Wi-Fi not showing, app can't connect, not online on Traqcare, no video, no GPS and parking recording.
sidebar_position: 4
keywords: [A6, dashcam, troubleshooting, offline, no video, Wi-Fi, Cloud Spirit, Device ID, Sentry Mode]
---

# A6 — Troubleshooting

## Quick reference

| Item | Value |
|------|-------|
| Turn on the A6's Wi-Fi | Press the power button (⏻) **twice quickly** |
| A6 Wi-Fi name | **A6-xxxx** |
| A6 Wi-Fi password | `12345678` |
| Setup app | **Cloud Spirit** (Google Play / App Store) |
| Main IP / Main port (主IP / 主端口) | `d4.traqcare.com` / `5101` |
| Device ID | **Settings → JT808 → Phone Number** in Cloud Spirit, no leading 0 |
| Protocol in Traqcare | **JT808 (5101)** |
| Number of Channels | **2** |

## The A6's Wi-Fi doesn't appear

- Make sure the A6 is switched on and powered.
- Press the power button (⏻) **twice quickly** and listen for the sound.
- Refresh the Wi-Fi list on your phone.

## The app won't connect

- Make sure your phone is still connected to the A6's Wi-Fi. Phones sometimes switch back to another network because the A6 has "no internet". Turn off mobile data while you set up the A6.
- The Wi-Fi password is `12345678`.

## A6 is not online on Traqcare

Check these in order:

1. **SIM card:** it has an active **data plan** and the **SIM PIN is turned off**.
2. **Server settings:** in Cloud Spirit, open **Settings → JT808** again and confirm **主IP** is `d4.traqcare.com` and **主端口** is `5101`. Make sure you tapped **Save**.
3. **Device ID:** in Traqcare, **IMEI / Unique ID** must be the **Phone Number** from **Settings → JT808**, without a leading 0.
4. **Protocol:** in Traqcare, the device must use **JT808 (5101)**.
5. **Activated:** in **Settings → Devices**, if the A6's row still shows an **Activate** link, click it and choose a plan. No coins? Ask your supplier (Skywonder or your reseller) to add coins or activate it for you.
6. **Restart:** in Cloud Spirit, tap **Settings → Restart Device**, or switch the power off and on. Then wait 5 minutes.

## Online, but no live video

- In Traqcare **Device Sensors**, **IGNITION** (`acc`), **POWER** (`power`), **CAMERA** and **VIDEO CAMERA** must all be on.
- In **Camera Settings**, **DeviceId** must be the same as the **IMEI / Unique ID**, and **Video Platform** must be **Traqcare**.
- **Number of Channels** must be **2**.
- Video needs a good 4G signal. Try again where the signal is stronger.

## The location is wrong or missing

- GPS needs a view of the sky. Indoors, the A6 can be online without a location. Move it outside or near a window.

## Nothing is recorded while parked

- Check that **Sentry Mode** is on and **TLR** is set to **24H** in **Settings → General**.
- Parking recording needs power while the ignition is off. Use the **hardwire kit** with the **red** wire on constant power.

## Video isn't being recorded at all

- Use a **Class 10 or faster** TF card. In Cloud Spirit, check **Settings → SD Card**. Replace the card if it's damaged.

Still stuck? Raise a ticket at [track.traqcare.com/ticket](https://track.traqcare.com/ticket) with your **Device ID** and a short description of the problem.
