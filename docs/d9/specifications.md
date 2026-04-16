---
id: specifications
title: D9 — Specifications
description: Full hardware specifications for the D9 Driving Assistance device.
sidebar_position: 2
keywords: [D9, specifications, hardware, camera, power, GPS, 4G]
---

# D9 — Specifications

## Host

| Item | Specification |
|------|---------------|
| CPU | ARM Cortex-A53 dual-core, up to 1.2 GHz |
| RAM | 2 GB 16-bit DDR3(L) |
| Wi-Fi | Supported |
| 4G | Supported |
| GPS | Supported |
| Operating system | Linux |
| G-Sensor | 3-axis accelerometer |
| Storage | TF card up to 256 GB, Class 10+, FAT32 |
| Power supply | 9–36 V DC |

## Video & Audio

| Item | Specification |
|------|---------------|
| Video codec | H.265 / H.264 |
| Audio codec | PCM, WAV |
| Built-in speaker | Yes, monaural |
| Built-in microphone | Yes, monaural |

## Front Camera

| Item | Specification |
|------|---------------|
| Sensor | 1/2.9", 2 MP CMOS |
| FOV | D: 125° / H: 105° / V: 58° |
| Resolution | 1920 × 1080 |
| Frame rate | 1080p @ 30 fps |

## Internal (Cabin) Camera

| Item | Specification |
|------|---------------|
| Sensor | 1/3", 2 MP CMOS |
| FOV | D: 120° / H: 100° / V: 45° |
| Resolution | 1920 × 1080 |
| Frame rate | 1080p @ 30 fps |

## Shell & Physical

| Item | Specification |
|------|---------------|
| Type | Independent |
| Color | Black |
| Weight | 198 g |
| Dimensions | 116 × 66 × 38 mm |

## Operating Environment

| Item | Specification |
|------|---------------|
| Operating temperature | −20 °C to +70 °C |
| Storage temperature | −30 °C to +80 °C |
| Relative humidity | 10 % – 90 %, non-condensing |
| Atmospheric pressure | 860 – 1060 mbar |

## LED Indicators

The D9 has three LEDs on its front face.

| LED | Colour | State | Meaning |
|-----|--------|-------|---------|
| Recording | Red / Blue | Off | Power disconnected |
| Recording | Blue | Solid | System running normally, not recording |
| Recording | Red | Solid | Video recording in progress |
| 4G | Yellow | Off | No 4G signal |
| 4G | Yellow | Blinking | 4G signal present, platform not yet connected |
| 4G | Yellow | Solid | 4G up and online on the platform |
| GPS | Green | Off | No GPS signal |
| GPS | Green | Blinking | GPS signal, not yet positioned |
| GPS | Green | Solid | GPS signal acquired and positioned |

## Wiring — Main Power Harness (PWR)

### Standard harness (bare wires)

| Pin | Wire colour | Signal | Description |
|-----|-------------|--------|-------------|
| 1 | Red | **B+** | Power input positive, 9–36 V, to car battery + |
| 2 | Black | **GND** | Ground, to car battery − |
| 3 | Yellow | **ACC** | Vehicle ACC / ignition detect |
| 4 | White | **SOS** | SOS emergency button (SM-A dock) |
| 5 | Blue | **SOS** | SOS emergency button (SM-A dock) |
| 5 | Orange | **RIGHT-IN** | Right turn-signal input |
| 6 | Green | **LEFT-IN** | Left turn-signal input |
| 7 | Black | **GPS** | 4-pin BMW head for external GPS module |
| 8 | Black | **AHD1** | Third AHD camera input (reserved, 4-pin BMW head) |

### Customised harness (4-pin Molex)

| Pin | Wire colour | Signal | Description |
|-----|-------------|--------|-------------|
| 9 | Purple | **TX** | RS-232 TX, signal output |
| 10 | Brown | **RX** | RS-232 RX, signal input |
| 11 | Pink | **5V** | 5 V output |
| 12 | Black | **GND** | RS-232 ground |

:::warning
Always verify wire colours against the harness label (**PWR**) before connecting. Reversed polarity on B+/GND can damage the unit.
:::
