# THERMO — Experience Temperature Differently

An award-winning, futuristic temperature conversion web application designed at the intersection of premium SaaS dashboards, weather telemetry technology, and dark glassmorphism. Built with 100% pure HTML5, CSS3, and modern Vanilla JavaScript.

![THERMO Brand](https://img.shields.io/badge/Brand-THERMO-35D6F2?style=for-the-badge)
![Design System](https://img.shields.io/badge/Design-Dark%20Glassmorphism-818CF8?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-34D399?style=for-the-badge)

---

## 🌌 Overview

**THERMO** transforms mundane temperature math into an interactive, visually stunning telemetry experience. Featuring an aurora-inspired animated mesh canvas, glassmorphic cards with frosted backdrop blurs, real-time simultaneous tri-scale conversions, dynamic thermal spectrum tracking, and thermodynamic absolute zero validation.

---

## ✨ Key Features & Architectural Capabilities

### 1. Tri-Scale Simultaneous Computation
- Convert across **Celsius (°C)**, **Fahrenheit (°F)**, and **Kelvin (K)** simultaneously.
- Results update instantaneously across individual frosted glass cards without page reloads.
- The active input unit is highlighted with an **INPUT** gradient pill badge.

### 2. Environmental Thermal Spectrum
- An interactive horizontal perceptual scale dividing temperatures into 5 human sensation zones:
  - **Freezing** ($< 0^\circ\text{C}$) — Glacial Cyan
  - **Cool** ($0^\circ\text{C} - 15^\circ\text{C}$) — Sky Blue
  - **Comfortable** ($16^\circ\text{C} - 25^\circ\text{C}$) — Emerald Green
  - **Warm** ($26^\circ\text{C} - 35^\circ\text{C}$) — Amber Gold
  - **Hot** ($> 35^\circ\text{C}$) — Coral Red
- A dynamic indicator needle glides across the spectrum reflecting the exact converted temperature in real time.

### 3. Strict Physical Bounds & Thermodynamic Validation
- Enforces real-world physical limits based on **Absolute Zero**:
  - **Celsius**: $\ge -273.15^\circ\text{C}$
  - **Fahrenheit**: $\ge -459.67^\circ\text{F}$
  - **Kelvin**: $\ge 0\text{ K}$
- Elegant inline error alerts that prevent invalid calculations, `NaN`, or `Infinity`.
- Full support for negative values (`-`) and decimal numbers (`.`).

### 4. Adaptive 4-Decimal Precision
- Automatically rounds repeating values up to 4 decimal places while cleanly stripping trailing zeros (e.g. `32` instead of `32.0000`, `273.15` instead of `273.1500`, and `37.7778` for repeating fractions).

### 5. Desktop Hero HUD Gauge
- An interactive SVG telemetry gauge on the desktop hero section featuring orbital dashed rings, fluctuating progress gradients, and live floating thermal chips synchronized with user input.

### 6. Conversion Snapshot History
- Persists your last 5 calculations locally via `localStorage`.
- Click any historical snapshot to immediately reload the original input and recalculate the telemetry.
- Includes a dedicated "Clear History" option.

### 7. Micro-Interactions & Fluid Motion
- **Copy-to-Clipboard**: Dedicated glass buttons per card that copy formatted values with feedback and floating glass toast notifications.
- **Quick Benchmark Presets**: One-click thermal benchmarks (Absolute Zero, Water Freezing, Ambient Room Temp, Human Body Temp, Water Boiling).
- **Persistent Theme Toggle**: Seamless light/dark mode switcher with frosted glass aesthetics.
- **Keyboard Friendly**: Instant conversion upon pressing <kbd>Enter</kbd> or changing the scale selector.

---

## 🎨 Color System & Design Language

| Color Token | Hex / Value | Function |
| :--- | :--- | :--- |
| **Background Base** | `#080F1E` | Deep midnight navy backdrop |
| **Secondary Background**| `#101B30` | Elevated containers and surfaces |
| **Card Background** | `rgba(20, 34, 56, 0.72)` | Frosted dark glassmorphism (`backdrop-filter: blur(20px)`) |
| **Primary Accent** | `#35D6F2` | Electric cyan highlights, buttons, and gauges |
| **Secondary Accent** | `#818CF8` | Soft indigo/purple gradient endpoints |
| **Primary Text** | `#F8FAFC` | High-contrast editorial titles and values |
| **Secondary Text** | `#94A3B8` | Subtitles, labels, and metadata |
| **Border** | `rgba(148, 163, 184, 0.15)` | Subtle translucent glass boundaries |
| **Success Green** | `#34D399` | System online pulses, valid confirmations |
| **Error Red** | `#FB7185` | Thermodynamic boundary alerts |

---

## 📐 Scientific Conversion Formulas

| Conversion Path | Formula |
| :--- | :--- |
| **Celsius $\rightarrow$ Fahrenheit** | $$F = \left(C \times \frac{9}{5}\right) + 32$$ |
| **Celsius $\rightarrow$ Kelvin** | $$K = C + 273.15$$ |
| **Fahrenheit $\rightarrow$ Celsius** | $$C = (F - 32) \times \frac{5}{9}$$ |
| **Fahrenheit $\rightarrow$ Kelvin** | $$K = (F - 32) \times \frac{5}{9} + 273.15$$ |
| **Kelvin $\rightarrow$ Celsius** | $$C = K - 273.15$$ |
| **Kelvin $\rightarrow$ Fahrenheit** | $$F = (K - 273.15) \times \frac{9}{5} + 32$$ |

---

## 📂 Project Structure

```text
Task-3-Temperature-Converter/
│
├── index.html        # Semantic HTML5 layout, ARIA accessibility, hero HUD, spectrum track
├── style.css         # Dark glassmorphism, aurora keyframe animations, responsive grid
├── script.js         # Vanilla JS telemetry engine, spectrum mapper, history persistence
└── README.md         # Comprehensive project documentation
```

---

## 🚀 How to Run Locally

No compilers, build tools, or server configurations are needed.

### Direct Browser Execution
1. Navigate into `LEVEL 1/Task-3-Temperature-Converter`.
2. Double-click `index.html` or open it with Google Chrome, Firefox, Safari, or Microsoft Edge.

### Local Development Server (Optional)
```bash
# Python 3
python -m http.server 3000

# Node.js
npx serve .
```
Navigate to `http://localhost:3000` in your web browser.

---

## 🧪 Benchmark Verification Matrix

| Benchmark | Input Scale | Celsius (°C) | Fahrenheit (°F) | Kelvin (K) |
| :--- | :--- | :--- | :--- | :--- |
| **Absolute Zero** | `-273.15 °C` | `-273.15` | `-459.67` | `0` |
| **Parity Point** | `-40 °C` | `-40` | `-40` | `233.15` |
| **Water Freezing** | `0 °C` | `0` | `32` | `273.15` |
| **Room Temperature** | `21 °C` | `21` | `69.8` | `294.15` |
| **Human Body** | `37 °C` | `37` | `98.6` | `310.15` |
| **Water Boiling** | `100 °C` | `100` | `212` | `373.15` |

---

## 📄 License & Credits

Designed with precision. Built for simplicity.  
**© 2026 THERMO. All rights reserved.**
