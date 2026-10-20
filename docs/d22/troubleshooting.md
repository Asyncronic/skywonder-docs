---
id: troubleshooting
title: D22 — Troubleshooting
sidebar_label: "Troubleshooting"
description: Fixes for common D22 problems — Wi-Fi not showing, app login, device not online, no video, no GPS, and AI alarm issues.
sidebar_position: 7
keywords: [D22, WD02, troubleshooting, offline, no video, Wi-Fi, Traqcam Connect, demo mode, Device ID]
---

# D22 — Troubleshooting

## Quick reference

| Item | Value |
|------|-------|
| D22 Wi-Fi name | The device **IMEI** number |
| D22 Wi-Fi password | `88888888` |
| Traqcam Connect settings password | `111111` |
| Server IP / Port | `d4.traqcare.com` / `5101` |
| Protocol in the app | **JT808-2013** (`JT808-2013-M1`) |
| Protocol in Traqcare | **JT808 (5101)** |
| IMEI / Unique ID in Traqcare | Device ID **without** the leading 0 |
| DeviceId in Camera Settings | The same Device ID, **without** the leading 0 |

## The D22's Wi-Fi doesn't appear

- Check the power: **red** to +, **black** to −, and **yellow** (ACC) must have power too. On a desk, connect yellow to + as well.
- The supply must be **10–36 V**.
- Wait a minute after switching on, then refresh the Wi-Fi list on your phone.

## The app won't connect or log in

- Make sure your phone is still connected to the D22's Wi-Fi. Phones sometimes switch back to another network because the D22 has "no internet". Turn off mobile data while you set up the D22.
- The settings password is `111111`. The Wi-Fi password is `88888888`.

## D22 is not online on Traqcare

Check these in order:

1. **SIM card:** it has an active **data plan** and the **SIM PIN is turned off**. If your mobile operator needs an APN, set it in Traqcam Connect under **Network Settings → 3G/4G**.
2. **Server settings:** in Traqcam Connect, open **Center Server → Center Server1** again and confirm `d4.traqcare.com`, port `5101`, protocol **JT808-2013**. Make sure you tapped **Save**.
3. **Device ID:** in Traqcare, the **IMEI / Unique ID** must match the label **without the leading 0**.
4. **Protocol:** in Traqcare, the device must use **JT808 (5101)**.
5. **Activated:** the device must be activated. In **Settings → Devices**, if its row still shows an **Activate** link, click it and choose a plan. No coins? Ask your supplier (Skywonder or your reseller) to add coins or activate it for you.
6. **Power cycle:** turn the power off and on again, then wait 5 minutes.

## Online, but no live video

- In Traqcare **Device Sensors**, both **CAMERA** and **VIDEO CAMERA** must be on.
- In **Camera Settings**, **DeviceId** must be the same as the **IMEI / Unique ID** (Device ID **without** the leading 0), and **Video Platform** must be **Traqcare**.
- **Number of Channels** should be **2** for a standard D22, or **4** for versions with 3–4 cameras.
- Video needs a good 4G signal. Try again where the signal is stronger.

## The location is wrong or missing

- GPS needs a view of the sky. Indoors, the D22 can be online without a location. Move it outside or near a window.

## No AI alarms

- AI only works on a D22 ordered **with DMS + ADAS**.
- AI alarms only trigger while **driving**. To test while parked, use **demo mode**: see [AI Features](./ai-features.mdx#3-mode-settings--normal-and-demo).
- Check that the alarm is turned on in **AI → Alarm Settings**.
- The driver camera must see the driver's face clearly, and the road camera must see the road.

## AI alarms while the vehicle is parked

- The D22 is probably still in **demo mode**. Go to **AI → Mode Settings**, choose **normal mode** and tap **Save**.

## Video isn't being recorded

- Use a **Class 10 or faster** TF card, 16 GB or larger. Replace it if it's damaged.

Still stuck? Raise a ticket at [track.traqcare.com/ticket](https://track.traqcare.com/ticket) with your **Device ID** and a short description of the problem.
