---
id: ai-features
title: D9 — AI Features (ADAS & DMS)
description: Full reference for every ADAS and DMS alarm on the D9 — trigger conditions, sensitivity levels, and voice prompts.
sidebar_position: 6
keywords: [D9, ADAS, DMS, fatigue, distraction, smoking, phone, seatbelt, lane departure, forward collision]
---

# D9 — AI Features (ADAS & DMS)

The D9 uses on-device machine vision to automatically identify road hazards and unsafe driver behaviours. Every detected event triggers a **local voice alarm** for the driver and is **synchronised to the Traqcare platform** as an alert.

:::note
**Global trigger condition.** All AI algorithms require vehicle speed > **30 km/h** by default. Outdoor testing uses GPS speed. For indoor / bench testing, use simulated-speed mode (see [Traqcam Connect Configuration](./configure-app#6-verify-ai-triggers)).
:::

:::warning
AI alerts **cannot replace the driver's judgement**. Recognition accuracy is not 100 % and varies with weather, lighting, and road conditions. The risk of using the device remains with the user.
:::

---

## ADAS — Advanced Driver Assistance

### Forward Collision Warning (FCW)

Real-time recognition of the relative speed between the ego vehicle and the vehicle ahead. Warns the driver when a collision is likely, giving enough time to brake.

- **Trigger:** speed above the minimum warning speed, a vehicle detected in the trajectory, estimated TTC below the safe threshold.
- **Minimum warning speed (km/h):** default **> 30**, adjustable 10–90.
- **Sensitivity:**
  - High: `TTC ≤ 3.5 s`
  - Medium *(default)*: `TTC ≤ 2.7 s`
  - Low: `TTC ≤ 1.8 s`
- **Voice:** *"Pay attention to the front vehicle."*

### Pedestrian Collision Warning (PCW)

Detects pedestrians, bicycles, and motorcycles in front of the vehicle and warns of potential collision.

- **Trigger:** speed within the warning range, front pedestrian within 5 m of the vehicle.
- **Minimum warning speed (km/h):** default **10–60**.
- **Sensitivity:**
  - High: `absTTC ≤ 1.6 s`, warning range 0.1 m outside the vehicle
  - Medium *(default)*: `absTTC ≤ 1.3 s`, warning range 0 m
  - Low: `absTTC ≤ 1.0 s`, warning range −0.1 m
- **Voice:** *"Watch out for pedestrians."*

### Lane Departure Warning (LDW)

Detects unconscious lane departure without turn-signal activation.

- **Trigger:** speed above the minimum, no turn signal, vehicle deviates from lane centre and touches a clearly visible lane line.
- **Minimum warning speed (km/h):** default **> 30**, adjustable 10–90.
- **Sensitivity (distance from outer wheel edge to lane line):**
  - High: `≤ 0.15 m`, cooldown 0.7 s
  - Medium: `≤ 0 m`, cooldown 1.0 s
  - Low: `≤ −0.15 m`, cooldown 1.5 s
- **Voice:** *"Lane departure."*

### Virtual Bumper

Low-speed collision avoidance with the vehicle ahead.

- **Minimum warning speed (km/h):** **1–30**.
- **Sensitivity:**
  - High: distance to front car ≤ 3–5 m and closing.
  - Medium: distance ≤ 2–4 m and closing.
  - Low: distance ≤ 1–3 m and closing.
- **Voice:** *"Keep a safe distance."*

### Start-the-Car Reminder

Reminds the driver to start moving when the vehicle in front has pulled away from a stop.

- **Sensitivity:**
  - High: ego stopped ≥ 4 s, distance to front ≤ 6.5 m, front vehicle moved ≥ 0.6 s and ≥ 0.6 m away.
  - Medium: ego stopped ≥ 5 s, distance ≤ 6 m, front moved ≥ 1 s and ≥ 1 m away.
  - Low: `speed ≤ 5` **and** `timeStopped ≥ 5` **and** `distanceToVehicleAhead ≤ 6` **and** `timeVehicleAheadAway ≥ 2.5` **and** `distanceVehicleAheadAway ≥ 2`.
- **Voice:** *"Please start."*

---

## DMS — Driver Monitoring

### Fatigue Driving Alarm

Detects eye closure and yawning.

- **Minimum warning speed (km/h):** default **> 30**, adjustable 10–90.
- **Sensitivity:**
  - High: eyes closed / mouth open ≥ **1 s**, lip height/width ratio ≥ **0.4**.
  - Medium *(default)*: ≥ **2 s**, ratio ≥ **0.5**.
  - Low: ≥ **3 s**, ratio ≥ **0.6**.
- **Voice:** *"Please remember to take a break."*

### Distracted Attention Warning

Detects the driver not looking at the road (looking around, searching inside the cabin).

- **Minimum warning speed (km/h):** default **> 30**.
- **Sensitivity:**
  - High: face pose ≥ 1 s with pitch ≥ 30° **or** yaw ≥ 30°.
  - Medium: ≥ 2 s with pitch / yaw ≥ 35°.
  - Low: ≥ 3 s with pitch / yaw ≥ 40°.
- **Voice:** *"Please focus on driving."*

### Smoke Alarm

Detects smoking in the cabin.

- **Minimum warning speed (km/h):** default **> 30**.
- **Sensitivity:**
  - High: smoking ≥ **1 s**.
  - Medium: smoking ≥ **2 s**.
  - Low: smoking ≥ **3 s**.
- **Voice:** *"No smoking."*

### Phone / Calling Warning

Detects phone use while driving.

- **Minimum warning speed (km/h):** default **> 30**.
- **Sensitivity:**
  - High: call duration ≥ **1 s**.
  - Medium: call duration ≥ **2 s**, phone held above the chin.
  - Low: call duration ≥ **3 s**, phone above the chin, mouth opening to speak.
- **Voice:** *"Please do not use your mobile phone."*

### Seatbelt Detection

Warns when the driver is not wearing a seatbelt.

- **Minimum warning speed (km/h):** default **> 30**, adjustable 10–90.
- **Sensitivity:**
  - High: no seatbelt ≥ **5 s**.
  - Medium: no seatbelt ≥ **10 s**.
  - Low: no seatbelt ≥ **15 s**.
- **Voice:** *"Please fasten your seatbelt."*

:::tip
For correct detection the seatbelt must be **unobstructed and clearly visible** to the cabin camera — large coats or cross-body bags will cause false negatives.
:::
