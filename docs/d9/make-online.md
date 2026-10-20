---
id: make-online
title: D9 — Make It Online on Traqcare
sidebar_label: "Make It Online on Traqcare"
description: Step-by-step guide to point a D9 at the Traqcare platform and activate it in your account.
sidebar_position: 5
keywords: [D9, Traqcare, Traqcam Connect, onboarding, activation, JT808, 5101, platform settings]
---

# D9 — Make It Online on Traqcare

This is the primary onboarding flow. By the end of this page the D9 will appear **online** on Traqcare and be ready to stream video.

You need:

- A powered and installed D9 (see [Installation](./installation.md)).
- An active Traqcare account with enough **coins** to activate a device.
- The **Device ID** (printed on the device / box).
- The **Traqcam Connect** mobile app installed.

## 1. Power the Device

Connect the power harness:

- **Red** and **Yellow** → positive terminal of the power supply
- **Black** → negative terminal

Wait for the device to boot (LEDs come alive).

## 2. Connect to the Device Wi-Fi

1. Press the **Wi-Fi button** on the side of the D9.
2. On your phone, enable Wi-Fi and connect to the D9's network.
   - **SSID:** the **device IMEI / Device ID** (printed on the device or the box)
   - **Password:** `12345678`

## 3. Open Traqcam Connect

Once Wi-Fi is connected, open the **Traqcam Connect** app. It will automatically pair with the device and show the main dashboard:

> Status Info · AI · System · **Platform** · Wlan · Dial · Real-time monitoring · Video download · Log download · Export Configuration

## 4. Set the Platform Parameters

Tap **Platform** and change the following fields:

| Field | Value |
|-------|-------|
| **Main Server Address** | `d4.traqcare.com` |
| **Main Port Number** | `5101` |
| **Main Protocol Type** | `2013` |

Tap **Save**.

:::tip
You can optionally configure a **Sub Server** (secondary endpoint) for failover — Traqcare will accept dual-platform uplinks. Leave it untouched if you do not have a specific fallback requirement.
:::

## 5. Add the Device in Traqcare

1. Log in at [track.traqcare.com](https://track.traqcare.com).
2. Go to **Settings → Devices**.
3. Click **Add Device**.

Fill in the **Device Details** tab:

| Field | Value |
|-------|-------|
| **Client** | Select the account that owns the device |
| **IMEI / Unique ID** | The D9's **Device ID** (must match the value set in Traqcam Connect) |
| **Protocol / Port** | **JT808 (5101)** |
| **Model Name** | `D9` |
| **Device Type** | Wired |
| **Device Timezone** | Match the vehicle's timezone |
| **Object Name** | Vehicle name — any label you like |
| **Object Type** | `Car` (or the matching asset type) |
| **Subscription Term** | Pick a plan — coins will be deducted to activate |

Click **Submit** to proceed.

## 6. Enable the Camera Sensors

Open the **Device Sensors** tab of the Add Device dialog and toggle **ON**:

- **IGNITION** — parameter: `acc`, reading: `Direct`
- **POWER** — parameter: `power`, reading: `Direct`
- **CAMERA**
- **VIDEO CAMERA**

Leave the rest off unless the vehicle has that hardware.

## 7. Configure Camera Settings

After **VIDEO CAMERA** is enabled, a new **Camera Settings** tab appears. Fill in:

| Field | Value |
|-------|-------|
| **Number of Channels** | `4` (D9 supports up to 4 channels incl. optional 3rd AHD camera) |
| **Device ID** | The same D9 Device ID used in step 5 |
| **Video Platform** | `Traqcare` |

Click **Submit** to finish registration.

:::info
Video Platform options:
- **Traqcare** — watch inside Traqcare (simplest, recommended).
- **Traqcare Embedded** — watch on another platform using Traqcare's server credentials.
- **Other Platform** — watch on a third-party platform with your own credentials (requires Account, Password, Video IP, Video Port).
:::

## 8. Verify the Device Is Online

1. Go to the **Map View** in Traqcare.
2. Find the newly added object in the tree. When the D9 reports in, it turns **online** (green/coloured icon instead of grey).
3. Click the **camera icon** on the object to open the live video feed.

If the device does not come online within a few minutes, check:

- **4G LED** on the D9 — should be **solid yellow**.
- **GPS LED** — should be **solid green** (blinking is fine indoors).
- **SIM card** — data plan active, not PIN-locked.
- **Device ID** in Traqcare **matches exactly** what Traqcam Connect shows.
- **Platform settings** were **saved** in Traqcam Connect (re-open Platform to confirm).

See [Troubleshooting](./troubleshooting.md) for the full checklist.

## Done

The device is now online on Traqcare. You can:

- Stream live video from Map View.
- Pull back recorded footage from **Video Playback**.
- Receive AI alarms (ADAS / DMS) on the **Alerts** page.
- Send remote commands — see [Commands](./commands.md).
