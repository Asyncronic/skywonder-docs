---
id: commands
title: D9 — Commands & Manual Operations
sidebar_label: "Commands & Manual Operations"
description: Common manual commands for the D9 — via Traqcam Connect and the Traqcare platform.
sidebar_position: 7
keywords: [D9, commands, Traqcam Connect, GPRS, remote command, intercom, video playback, remote photo]
---

# D9 — Commands & Manual Operations

The D9 can be driven manually from two places:

1. **Traqcam Connect** — while connected to the device Wi-Fi (local).
2. **Traqcare platform** — remote commands over 4G once the device is online.

## 1. Local Commands — Traqcam Connect

After pairing to the device Wi-Fi (SSID = **device IMEI / Device ID**, password `12345678`), the Traqcam Connect dashboard exposes:

| Action | Purpose |
|--------|---------|
| **Status Info** | Current device state (firmware, GPS, 4G, storage) |
| **AI** | Toggle ADAS / DMS rendering, per-warning sensitivity, speed thresholds, and vehicle-geometry fields (Car Type, Camera Height, lens → bumper / wheels) |
| **System** | System info, reboot, factory reset, format SD card, firmware version (tap once to toggle simulated speed for indoor testing) |
| **Platform** | Change main/sub server address, port, protocol — used for [onboarding to Traqcare](./make-online.md) |
| **Wlan** | Manage the device Wi-Fi hotspot (SSID / password) |
| **Dial** | 4G dial-up / APN configuration |
| **Real-time monitoring** | Live preview of front / cabin / rear cameras |
| **Video download** | Pull recorded clips from the TF card |
| **Log download** | Pull device logs for support |
| **Export Configuration** | Save the full device config to share with support |

### Quick reference — Platform settings for Traqcare

| Field | Value |
|-------|-------|
| Main Server Address | `d4.traqcare.com` |
| Main Port Number | `5101` |
| Main Protocol Type | `2013` |

## 2. Remote Commands — Traqcare Platform

Once the device is online on Traqcare, supported remote commands include:

| Command | What it does |
|---------|--------------|
| **Query terminal properties** | Read online IP, port, firmware version, and other terminal parameters |
| **Set terminal parameters** | Update terminal type, model, and configuration fields |
| **Remote photo capture** | Snap a still image on demand and upload it to the platform |
| **Multimedia upload** | Push pending multimedia files to the server |
| **Multimedia retrieval** | Pull media from the device by index / time |
| **Real-time video** | Start a live stream from any camera channel |
| **Video playback** | Replay historical footage by channel / time range |
| **Audio & video download** | Download recorded clips to the platform |
| **Intercom** | Two-way voice conversation with the driver |
| **Monitor** | One-way listening (driver cannot hear) |
| **Route area settings** | Push geofence / route boundaries to the device |
| **Text message distribution** | Send TTS broadcast or custom text to the device |
| **Remote upgrade (JT808 cmd 8108)** | Trigger an OTA firmware upgrade, incl. FTP upgrade |

### How to send a command from Traqcare

1. Log in to [track.traqcare.com](https://track.traqcare.com).
2. Open the vehicle from the **Map View** or object list.
3. Use the action menu to select the command (e.g. **Video Control**, **Send GPRS Command**, **Remote Photo**).
4. The response appears in the command history once acknowledged by the device.

### Alarm & event reporting

The following events are raised automatically and appear in the Traqcare **Alerts** module:

| Event | Trigger |
|-------|---------|
| **Speeding warning** | Speed below max but above the warning threshold |
| **Speeding alarm** | Speed exceeds the maximum speed |
| **Fatigue driving** | Continuous driving exceeds the specified time |
| **Daily driving total** | Total driving time for the day exceeds the threshold |
| **Parking timeout** | Parking duration exceeds the specified time |
| **Emergency alarm** | SOS button pressed |
| **ADAS / DMS alarms** | Any of the AI events in [AI Features](./ai-features.md) |

:::tip
Use **Manual alarm confirmation** to acknowledge an alarm from the platform — this is useful for dispatchers reviewing driver behaviour events.
:::

## SOS / Emergency Button

Pressing the wired alarm button raises an **Emergency alarm** on Traqcare. It is a momentary switch — no hold time is required.
