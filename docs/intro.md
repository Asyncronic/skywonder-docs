---
id: intro
title: Supported Devices
description: Catalogue of dashcams and GPS trackers supported by the Traqcare platform.
sidebar_position: 1
keywords: [devices, GPS tracker, dashcam, ADAS, JT808, GT06, Traqcare devices]
slug: /intro
---

# Supported Devices

This site is the official reference for installing, configuring, and activating every device supported by the **Traqcare** platform, split into two families:

- 🎥 **Dashcams** — AI cameras with ADAS and DMS for driver-behaviour monitoring and video evidence.
- 📡 **GPS Trackers** — Wired and wireless trackers for real-time location, geofencing, and vehicle control.

Each device guide covers the same things in the same order, so the flow is always predictable:

1. **Overview** — what the device is and when to use it
2. **Specifications** — hardware, ports, protocols, power
3. **Installation** — physical mounting, wiring, SIM / SD card
4. **Configuration** — on-device or in-app settings
5. **Make It Online on Traqcare** — platform onboarding and activation
6. **Commands** — common manual commands
7. **Troubleshooting** — LEDs, errors, recovery

## 🎥 Dashcams

| Device | Category | Protocol | Status |
|--------|----------|----------|--------|
| [**D9 Driving Assistance**](./d9/overview) | Dual-camera ADAS + DMS dashcam | JT/T808, JT/T1078 | ✅ Available |

## 📡 GPS Trackers

| Device | Category | Protocol | Status |
|--------|----------|----------|--------|
| GT06 / GT06N | Wired GPS tracker | GT06 | 🕗 Coming soon |
| JT/T808 Devices | Generic JT808 trackers | JT808 2013 / 2019 | 🕗 Coming soon |

## Before You Start

Before onboarding any device on Traqcare you will need:

- An **active Traqcare account** ([track.traqcare.com](https://track.traqcare.com)) with enough coins to activate the device.
- The **device IMEI / Device ID** (printed on the device or the box).
- A **working SIM card** with an active mobile data plan (for cellular devices).
- The platform server details:
  - **Main server:** `d4.traqcare.com`
  - **Main port:** `5101`
  - **Main protocol:** `JT808 (2013)` for JT808 devices
- Access to the appropriate configuration app / tool for that device family — for D9, the **Traqcam Connect** mobile app.

:::tip
If your device isn't listed yet, check back soon — we are rolling out one device family at a time. The fastest way to confirm support is to check whether a matching protocol adapter exists in the Traqcare gateway.
:::
