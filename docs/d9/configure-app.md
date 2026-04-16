---
id: configure-app
title: D9 — Traqcam Connect Configuration
description: Pair the D9 with the Traqcam Connect mobile app, enable ADAS/DMS rendering, and run ADAS & DMS calibration.
sidebar_position: 4
keywords: [D9, Traqcam Connect, ADAS calibration, DMS calibration, AI settings, device Wi-Fi]
---

# D9 — Traqcam Connect Configuration

**Traqcam Connect** is the official mobile app for configuring every camera device supported by Traqcare, including the D9. Use it to preview the cameras, tune the AI algorithms, calibrate ADAS / DMS, and point the device at the Traqcare platform.

:::info
Traqcam Connect handles **both** local device configuration and Traqcare platform onboarding. For the step-by-step onboarding flow, see [Make It Online on Traqcare](./make-online).
:::

## Video Walkthrough

Watch the short video below for a hands-on walkthrough of using Traqcam Connect with a D9 device.

<div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
  <iframe
    width="315"
    height="560"
    src="https://www.youtube.com/embed/w476VHJvnk4"
    title="How to use Traqcam Connect"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

## 1. Install & Prepare the App

1. Download **Traqcam Connect** from the App Store (iOS) or Google Play (Android).
2. Open the app and accept the permissions prompt — allow **Location** and **Wi-Fi** access so the app can reach the device network.

## 2. Connect to the Device's Wi-Fi

1. Install the D9 and power it on according to the [Installation guide](./installation).
2. Press the **Wi-Fi button** on the side of the D9 to enable its Wi-Fi hotspot.
3. On your phone, open Wi-Fi settings and connect to the D9 hotspot.
   - **SSID:** the **device IMEI / Device ID** (printed on the device or the box).
   - **Password:** `12345678`
4. Return to Traqcam Connect — it will automatically pair with the device and show the main dashboard.

:::warning
A D9 can only be connected to **one mobile phone at a time**. Make sure no other phone is connected to its Wi-Fi or the pairing will fail.
:::

## 3. Turn On ADAS & DMS Rendering

From the Traqcam Connect dashboard:

1. Open the **AI** section.
2. Turn on:
   - **ADAS Render** — draws lane / vehicle overlays on the front camera.
   - **DMS Render** — draws face / seatbelt boxes on the cabin camera.
3. Review and optionally adjust each sub-warning (Fatigue, Distraction, Smoking, Calling, Seatbelt Detection, etc.) — see [AI Features](./ai-features) for the default thresholds.
4. Set the **Steering Wheel Direction** to **Left** or **Right** to match your vehicle.

## 4. Enter Vehicle Geometry (Advanced)

Accurate geometry lets ADAS estimate distances correctly.

Open **AI → Advanced** and fill in:

| Field | What to enter |
|-------|---------------|
| **Car Type** | Small / Medium / Large (per the app presets) |
| **Camera Height** | Height of the D9 from the ground, in cm |
| **Lens → front bumper** | Distance from the lens to the front of the vehicle, in cm |
| **Lens → left wheel** | Lateral distance from the lens to the left wheel, in cm |
| **Lens → right wheel** | Lateral distance from the lens to the right wheel, in cm |

:::tip
These values are optional, but filling them in markedly improves ADAS accuracy — especially Lane Departure and Virtual Bumper.
:::

## 5. ADAS & DMS Calibration

After rendering is enabled, calibration runs automatically while driving.

:::note
ADAS and DMS calibration only progresses when vehicle speed is **> 20 km/h**. At lower speeds the calibration percentage (0–100 %) will pause.
:::

### DMS calibration

1. In **Real-time monitoring**, switch to the **cabin (internal) channel**.
2. Adjust the mounting angle so the app **clearly captures the face and chest** of the driver.
3. You should see a **green face box** and a **blue seatbelt box** appear.

### ADAS calibration

1. Switch back to the **front camera** channel.
2. Adjust the camera angle so the **vanishing point of the road is as close to the middle of the image as possible**.
3. Drive above 20 km/h until calibration reaches 100 %.

## 6. Verify AI Triggers

For initial testing you have two options:

- **Outdoor test.** Drive the vehicle above the trigger speed (default 30 km/h). AI alarms and voice prompts should fire normally.
- **Indoor test (simulated speed).** In Traqcam Connect, open the system / firmware info panel and tap the firmware version once — a prompt confirms simulated speed is enabled. The device restarts; simulated speed is cleared after the next restart.

## Next Step

Proceed to [Make It Online on Traqcare](./make-online) to point the device at the Traqcare platform and register it in your account.
