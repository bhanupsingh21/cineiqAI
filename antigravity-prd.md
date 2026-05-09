# Antigravity — AI Cinematic Video Creation Platform
### Product Requirements Document · v1.0
### Prepared for: Design & Engineering · Bhanu Pratap

---

## Table of Contents

1. [Product Vision](#1-product-vision)
2. [Core Philosophy](#2-core-philosophy)
3. [Target Audience](#3-target-audience)
4. [Platform Overview](#4-platform-overview)
5. [Brand Identity & Design Language](#5-brand-identity--design-language)
6. [Design System](#6-design-system)
7. [Application Architecture](#7-application-architecture)
8. [Page-by-Page Specifications](#8-page-by-page-specifications)
   - 8.1 [Landing Page](#81-landing-page)
   - 8.2 [Onboarding Flow](#82-onboarding-flow)
   - 8.3 [Dashboard Home](#83-dashboard-home)
   - 8.4 [Video Creation Workspace (Core)](#84-video-creation-workspace-core)
9. [Video Creation Workspace — Deep Specification](#9-video-creation-workspace--deep-specification)
   - 9.1 [Left Sidebar — AI Control Panel](#91-left-sidebar--ai-control-panel)
   - 9.2 [Center Canvas — Creation Studio](#92-center-canvas--creation-studio)
   - 9.3 [Right Sidebar — Properties & AI Assist](#93-right-sidebar--properties--ai-assist)
10. [AI Agent System](#10-ai-agent-system)
11. [Feature Specifications](#11-feature-specifications)
12. [Interaction & Animation System](#12-interaction--animation-system)
13. [Accessibility Standards](#13-accessibility-standards)
14. [Tech Stack](#14-tech-stack)
15. [Export & Delivery System](#15-export--delivery-system)
16. [Collaboration System](#16-collaboration-system)
17. [Pricing & Plans](#17-pricing--plans)
18. [Success Metrics](#18-success-metrics)

---

## 1. Product Vision

**Antigravity** is the world's first AI-native cinematic production studio built entirely inside a browser.

It removes every barrier between a human idea and a Hollywood-quality video. A creator, marketer, filmmaker, or storyteller opens Antigravity, types a single sentence, and receives a fully produced, scored, voiced, and edited cinematic video — ready to publish anywhere.

> **Tagline:** *"From Prompt to Picture."*

Antigravity is not a template tool. It is not a clip-stitcher. It is not a basic AI generator.

It is a **full-stack AI filmmaking system** — where multiple specialized AI agents collaborate as a digital production crew, guided by the user's creative direction, producing work at a quality level that previously required a 20-person team and weeks of post-production.

---

## 2. Core Philosophy

### 2.1 Principles

| Principle | Description |
|-----------|-------------|
| **Prompt-First** | Every creation begins with natural language. No technical skills required. |
| **AI as Crew** | Multiple AI agents behave like specialized human crew members working in parallel. |
| **Creative Control** | AI handles execution; humans retain full creative direction and override authority. |
| **Cinematic by Default** | Every output is treated as a film — with proper pacing, color, lighting, and emotion. |
| **Zero Friction** | Professional output must require zero learning curve for the core flow. |
| **Transparent Intelligence** | The AI shows its thinking in real-time. Users understand what's happening at every step. |

### 2.2 Design Philosophy

The Antigravity interface is built on the following visual principles:

- **Cinematic Minimalism** — Inspired by Hollywood editing suites, Apple-level precision, and the spatial clarity of Linear and Figma.
- **Dark-First** — The default theme is a deep, matte dark environment that lets video content breathe and command attention.
- **Depth Without Noise** — Glassmorphism, ambient glows, and soft gradients create depth without visual clutter.
- **Motion as Language** — Every animation communicates state, progress, or invitation. Motion is never decorative.
- **Trust Through Transparency** — AI status, progress, confidence levels, and reasoning are always surfaced.

---

## 3. Target Audience

### Primary Users

| Persona | Description | Key Need |
|---------|-------------|----------|
| **Solo Content Creator** | YouTubers, Instagram creators, TikTokers | Fast, viral-quality video from prompts |
| **Brand Marketer** | In-house or agency marketing teams | Cinematic ads, product videos, reels at scale |
| **Independent Filmmaker** | Short film directors, trailer editors | AI-assisted pre-viz, storytelling tools |
| **Startup Founder** | Non-technical founders building brand content | Professional brand videos without hiring agencies |
| **Educator / Course Creator** | Online educators building video curriculum | Explainer videos, animated walkthroughs |

### Secondary Users

- Podcast producers converting audio to video
- News and journalism studios (AI B-roll generation)
- Game developers creating cinematic cutscene previews
- Event production companies

---

## 4. Platform Overview

### 4.1 Core User Journey

```
User opens Antigravity
        ↓
Writes a cinematic prompt
        ↓
AI Agents activate and collaborate
        ↓
Screenplay → Shot Plan → Characters → Scenes → Voice → Music → Edit
        ↓
Live preview appears with timeline
        ↓
User reviews, refines, and adjusts
        ↓
One-click export to any platform
```

### 4.2 Core Features Summary

- **Prompt Studio** — Natural language video creation with smart enhancement
- **AI Agent Orchestra** — 10 specialized AI agents working in parallel
- **Cinematic Preview Player** — Real-time 21:9 video preview with ambient lighting effects
- **Professional Timeline Editor** — AI-assisted multi-track editing
- **Character Consistency Engine** — Characters maintained visually across all scenes
- **Emotion-Aware Voice & Music** — AI-generated voice and score tuned to scene emotion
- **One-Click Multi-Platform Export** — YouTube, Instagram, TikTok, LinkedIn, Cinema ready
- **Collaboration Workspace** — Real-time multi-user editing and review
- **Cloud Rendering Queue** — GPU-accelerated rendering at scale

---

## 5. Brand Identity & Design Language

### 5.1 Brand Name: Antigravity

The name expresses the platform's core promise: **lifting creative work beyond all previous limits** — where the weight of production complexity disappears, and the user floats freely in pure creative expression.

### 5.2 Logo Concept

- Wordmark: `ANTIGRAVITY` in wide-tracked, geometric sans-serif (Satoshi or Space Grotesk)
- Icon: An abstract **orbit ring** with an ascending arrow — suggesting lift, cinema, and planetary-scale ambition
- Color: White wordmark on dark backgrounds; gradient logo in purple-to-blue on feature surfaces

### 5.3 Color System

#### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ag-bg-base` | `#080A0F` | App background, deepest layer |
| `--ag-bg-surface` | `#0D1017` | Sidebar backgrounds, panels |
| `--ag-bg-elevated` | `#131820` | Cards, modals, elevated content |
| `--ag-bg-glass` | `rgba(255,255,255,0.04)` | Glassmorphism surfaces |
| `--ag-border-subtle` | `rgba(255,255,255,0.06)` | Thin borders, dividers |
| `--ag-border-active` | `rgba(130,80,255,0.5)` | Active state borders |
| `--ag-accent-primary` | `#7C3AED` | Primary purple — brand accent |
| `--ag-accent-secondary` | `#3B82F6` | Blue — secondary accent |
| `--ag-accent-glow` | `#9D5CFF` | Glow effects, highlight |
| `--ag-accent-gold` | `#F59E0B` | Premium indicators, export CTAs |
| `--ag-accent-green` | `#10B981` | Success states, active agents |
| `--ag-accent-red` | `#EF4444` | Error states, stop controls |
| `--ag-text-primary` | `#F1F5F9` | Primary text |
| `--ag-text-secondary` | `#94A3B8` | Secondary labels, metadata |
| `--ag-text-muted` | `#475569` | Placeholder text, disabled |
| `--ag-text-inverse` | `#0A0A0F` | Text on light backgrounds |

#### Gradient System

```css
/* Brand gradient — primary CTA, hero elements */
--ag-gradient-brand: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);

/* Cinematic glow — preview player border */
--ag-gradient-cinema: linear-gradient(180deg, rgba(124,58,237,0.3) 0%, rgba(59,130,246,0.1) 100%);

/* Surface shimmer — loading states */
--ag-gradient-shimmer: linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.08) 50%, transparent 100%);

/* Gold — premium, export */
--ag-gradient-gold: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
```

### 5.4 Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| **Display / Hero** | Satoshi or Clash Display | 800 | 48–72px | 1.1 |
| **Heading 1** | Satoshi | 700 | 32px | 1.2 |
| **Heading 2** | Satoshi | 600 | 24px | 1.3 |
| **Heading 3** | Satoshi | 600 | 18px | 1.4 |
| **Body** | Inter | 400 | 14px | 1.6 |
| **Body Strong** | Inter | 500 | 14px | 1.6 |
| **Caption / Meta** | Inter | 400 | 12px | 1.5 |
| **Code / Mono** | JetBrains Mono | 400 | 13px | 1.5 |
| **Button** | Inter | 600 | 14px | 1 |

---

## 6. Design System

### 6.1 Spacing Scale

All spacing must follow the 8dp base grid. The allowed values are:

```
4px · 8px · 12px · 16px · 20px · 24px · 32px · 40px · 48px · 64px · 80px · 96px
```

**Micro spacing** (4–8px): Icon-to-label gaps, input field inner padding, badge internal spacing  
**Component spacing** (12–24px): Card internal padding, form field gaps, button padding  
**Section spacing** (32–64px): Between major layout sections, between sidebar sections  
**Page spacing** (80–96px): Hero sections, page tops, major visual breaks

### 6.2 Border Radius Scale

| Size | Value | Usage |
|------|-------|-------|
| `xs` | 6px | Chips, tags, small badges |
| `sm` | 10px | Buttons, inputs, small cards |
| `md` | 14px | Standard cards, modals |
| `lg` | 18px | Sidebar sections, AI agent cards |
| `xl` | 24px | Prompt box, large containers |
| `2xl` | 28px | Preview player |
| `full` | 9999px | Pills, avatar rings |

### 6.3 Shadow System

```css
--ag-shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
--ag-shadow-md: 0 4px 16px rgba(0,0,0,0.5);
--ag-shadow-lg: 0 8px 32px rgba(0,0,0,0.6);
--ag-shadow-glow-purple: 0 0 24px rgba(124,58,237,0.25), 0 0 48px rgba(124,58,237,0.1);
--ag-shadow-glow-blue: 0 0 24px rgba(59,130,246,0.2);
--ag-shadow-cinema: 0 0 0 1px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.15);
```

### 6.4 Component Library

#### Buttons

```
Primary CTA    → bg: gradient-brand, text: white, radius: 10px, height: 44px
Secondary      → bg: bg-elevated, border: border-subtle, text: text-primary
Ghost          → bg: transparent, text: text-secondary, hover: bg-glass
Danger         → bg: accent-red/10, border: accent-red/30, text: accent-red
Icon Button    → 40×40px, bg: bg-glass, border: border-subtle
```

All interactive elements minimum touch target: **44×44px**

#### Input Fields

```
Background    : bg-elevated
Border        : 1px solid border-subtle
Active border : 1px solid accent-primary
Border radius : 12px
Height        : 44px (single line), auto (textarea)
Padding       : 12px 16px
Placeholder   : text-muted
Font          : Inter 14px / 400
Focus ring    : 0 0 0 3px rgba(124,58,237,0.2)
```

#### Cards

```
Background    : bg-elevated
Border        : 1px solid border-subtle
Radius        : 18px
Padding       : 20px 24px
Hover border  : border-active
Hover shadow  : shadow-glow-purple
Transition    : all 200ms ease
```

---

## 7. Application Architecture

### 7.1 Page Map

```
Antigravity
├── / Landing Page
├── /auth
│   ├── Login
│   └── Sign Up
├── /onboarding
│   ├── Step 1: Profile Setup
│   ├── Step 2: Use Case
│   └── Step 3: First Project
├── /dashboard
│   ├── Recent Projects
│   ├── Templates Gallery
│   └── Usage & Stats
├── /create (Video Creation Workspace)
│   └── /create/:projectId
├── /library
│   ├── Assets
│   ├── Characters
│   └── Music
├── /brand-kit
├── /settings
│   ├── Account
│   ├── Billing
│   └── API Keys
└── /export
```

### 7.2 State Architecture

- **Global State:** Authentication, user profile, active project, AI agent statuses
- **Project State:** Prompt, screenplay, scene list, character library, timeline, export queue
- **UI State:** Sidebar panels, active tool, selected scene, playhead position
- **Realtime State:** WebSocket channels for AI agent progress, collaboration cursors, render queue

---

## 8. Page-by-Page Specifications

### 8.1 Landing Page

**Purpose:** Convert visitors to sign-ups through an immersive, cinematic product demonstration.

**Key Sections:**

1. **Hero Section**
   - Full-viewport dark background with a looping cinematic video reel (muted, auto-play)
   - Overlaid: "From Prompt to Picture." headline in Clash Display 72px
   - Sub-headline: "The world's first AI cinematic studio. One sentence. One click. Hollywood quality."
   - Primary CTA: "Start Creating Free" → brand gradient button, 52px height
   - Prompt demo input that types itself (animated) with a "Generate" button
   - Ambient purple-blue glow emanating from below the hero

2. **Live Demo Strip**
   - Auto-scrolling horizontal ticker showing example prompts → generated thumbnails
   - "Try it free" tag on each card

3. **How It Works** (3-step visual flow)
   - Write Prompt → AI Agents Activate → Receive Cinema-Quality Video

4. **AI Agents Grid**
   - Animated cards for each AI agent with live pulse animations
   - Explains what each agent does

5. **Quality Showcase**
   - Before/After: User's prompt text on left, cinematic video still on right
   - Rotating examples across genres

6. **Platform Comparison Table**
   - Antigravity vs InVideo vs Runway vs Krea
   - Antigravity wins on every row

7. **Social Proof** — Creator testimonials with video thumbnails they generated

8. **Pricing Section** — 3-column pricing cards with feature lists

9. **Footer** — Minimal dark footer with logo, links, social icons

---

### 8.2 Onboarding Flow

**Purpose:** Personalize the AI agent behavior and default settings for each new user.

**Step 1 — Welcome & Name**
- Greeting: "Welcome to Antigravity. What should we call you?"
- Single full-name input, large centered layout, cinematic background animation

**Step 2 — Primary Use Case**
- "What will you create?"
- Icon grid selection: Films · Ads · Reels · YouTube · Trailers · Docs · Podcasts · Other
- Multi-select allowed

**Step 3 — Default Style**
- "Pick your default visual style"
- Visual grid of style previews: Cinematic · Anime · Documentary · Hyper-Realistic · Sci-Fi · Luxury
- AI will tune default prompts around this selection

**Step 4 — First Project**
- "Let's create your first video"
- Pre-filled example prompt matching their chosen style
- "Generate My First Video" CTA → routes to creation workspace

---

### 8.3 Dashboard Home

**Purpose:** Project library and quick-start hub.

**Layout:**
- Top navigation bar with Antigravity logo, search, notifications, profile avatar
- Left mini-sidebar: Dashboard, Create, Library, Brand Kit, Settings
- Main content area

**Content Sections:**
- **Quick Create Bar** — Persistent prompt input at the top, "Generate" CTA
- **Recent Projects** — 4-column responsive card grid with video thumbnails, titles, dates, status badges
- **Templates Spotlight** — Curated 6-card template row with genre labels
- **AI Insights Panel** — "Your AI crew completed 3 projects this week" — usage stats, tips
- **Trending Prompts** — Community-sourced prompts sorted by output quality rating

---

### 8.4 Video Creation Workspace (Core)

This is the product's beating heart. See full specification in **Section 9**.

---

## 9. Video Creation Workspace — Deep Specification

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    TOP NAV BAR (56px)                          │
├──────────────┬───────────────────────────────────┬─────────────┤
│              │                                   │             │
│  LEFT        │        CENTER CANVAS              │  RIGHT      │
│  SIDEBAR     │        (Fluid width)              │  SIDEBAR    │
│  (280px)     │                                   │  (340px)    │
│              │  Prompt Studio                    │             │
│              │  AI Generation Flow               │  Properties │
│              │  Live Preview Player              │  & AI Assist│
│              │  Scene Thumbnails                 │             │
│              │  Timeline Editor                  │             │
│              │                                   │             │
└──────────────┴───────────────────────────────────┴─────────────┘
```

### Top Navigation Bar

- **Height:** 56px
- **Background:** `bg-surface` with `1px solid border-subtle` bottom border
- **Left:** Antigravity logo wordmark + current project name (editable inline)
- **Center:** AI Pipeline status indicator (shows overall progress when generation is active)
- **Right:** Collaboration avatars · Auto-save indicator · Render button · Export button · Profile

---

### 9.1 Left Sidebar — AI Control Panel

**Width:** 280px fixed  
**Height:** 100% viewport  
**Background:** `bg-surface` with `1px solid border-subtle` right border  
**Padding:** 20px 16px  
**Overflow:** Scroll (hidden scrollbar)  

#### Section 1: New Project

```
[+ New Project]  ←  Full-width gradient button
                     Height: 44px, radius: 10px
                     Icon: FilmSlate on left
                     Text: "New Project"
                     Style: bg-gradient-brand
```

---

#### Section 2: Prompt History

- Label: "RECENT PROMPTS" (caption, text-muted, 11px, letter-spacing: 0.08em)
- Scrollable list of last 12 prompts
- Each item:
  - Single-line truncated prompt text (12px, text-secondary)
  - Timestamp (10px, text-muted)
  - Hover: background highlight + "Load" icon appears
  - Click: loads that prompt into the center prompt studio

---

#### Section 3: AI Agents Panel

Label: "AI CREW" (caption style, same as above)

**6 Agent Cards** displayed as a vertical list of expandable cards:

Each **AI Agent Card** contains:

```
┌─────────────────────────────────────┐
│  ●  [AGENT NAME]          [STATUS]  │
│     Current task text...            │
│     ████████░░  72%                 │
│                         [▼ Details] │
└─────────────────────────────────────┘
```

- **Status indicator dot:** green (active) / amber (queued) / grey (idle)
- **Agent Name:** 13px, Inter 600, text-primary
- **Current task:** 11px, Inter 400, text-secondary (e.g., "Generating Scene 3 of 8")
- **Progress bar:** thin 4px bar, gradient-brand fill, bg: bg-glass track
- **Expand:** reveals agent controls and override options

**6 Agent Cards:**

| Agent | Icon | Default Behavior |
|-------|------|------------------|
| Director Agent | 🎬 | Oversees narrative coherence, pacing, tone |
| Cinematographer Agent | 📷 | Camera movements, shot composition, lighting |
| Script Agent | 📝 | Generates and refines screenplay, dialogue |
| Voice Agent | 🎤 | Voice casting, lip sync, emotional delivery |
| Music Composer Agent | 🎵 | Score generation, sound FX, audio mix |
| Editing Agent | ✂️ | Cuts, transitions, pacing, final assembly |

> **Note:** Icons listed above are illustrative. Final implementation uses a consistent Phosphor or Lucide icon set — no emoji in UI.

---

#### Section 4: Story Settings

Label: "STORY"

- **Genre Selector:** Dropdown — Thriller / Drama / Sci-Fi / Horror / Romance / Documentary / Action / Comedy
- **Tone Selector:** Dropdown — Dark / Hopeful / Intense / Playful / Melancholic / Triumphant
- **Narrative Structure:** Selector — Three-Act / Hero's Journey / Non-Linear / Episodic
- **Target Duration:** Slider — 15s · 30s · 60s · 2m · 5m · 10m · Custom
- **Pacing:** Slider — Slow / Medium / Fast / Frantic

---

#### Section 5: Character Library

Label: "CHARACTERS"

- Lists all AI-generated characters for the current project
- Each character: avatar thumbnail, name, role label, consistency badge
- [+ Add Character] button at bottom
- Click to expand: character visual settings, voice settings, expression presets

---

#### Section 6: Style Presets

Label: "STYLE PRESETS"

- Grid of 2×N preset thumbnails
- Categories: Visual Style · Lighting · Color Grade · Film Look
- Active preset shows gradient border
- Custom preset creation option

---

#### Section 7: Assets

Label: "ASSETS"

- Tabs: Uploads · Stock · AI Generated
- Search input
- Thumbnail grid with drag-to-canvas support
- Supported types: Images · Videos · Audio · SVG

---

#### Section 8: Music Library

Label: "MUSIC"

- Search by mood, genre, tempo, BPM
- Track list with waveform preview
- Click to audition (plays without leaving workspace)
- Drag to timeline Music Layer

---

#### Section 9: Brand Kit

Label: "BRAND KIT"

- Brand colors (swatches)
- Logos (with variants: full, icon, light, dark)
- Typography settings
- Brand voice profile (formal / casual / cinematic)

---

#### Section 10: Export Settings

Label: "EXPORT"

- Platform presets: YouTube · Instagram Reel · TikTok · LinkedIn · Cinema DCP · Custom
- Resolution: 720p · 1080p · 4K · 8K
- Format: MP4 · MOV · ProRes · WebM
- Subtitles: Embedded / SRT / VTT
- Watermark toggle (Free plan)

---

### 9.2 Center Canvas — Creation Studio

**Width:** Fluid (viewport minus 280px left + 340px right sidebars)  
**Background:** `bg-base`  
**Padding:** 32px horizontal, 24px vertical  
**Scroll:** Full vertical scroll on the center column  

---

#### 9.2.1 Prompt Input Studio

This is the user's entry point into every creation.

**Outer Container:**
```
Background  : rgba(255,255,255,0.03) with backdrop-blur(24px)
Border      : 1.5px solid rgba(124,58,237,0.2)
Border-radius: 24px
Padding     : 28px 32px
Glow        : box-shadow: 0 0 60px rgba(124,58,237,0.08)
```

**Floating Label:** "Your cinematic vision..." — 11px, text-muted, positioned inside top-left of textarea

**Main Textarea:**
```
Min-height  : 120px
Font        : Inter 16px / 400
Color       : text-primary
Placeholder : "Describe your video... e.g. A dark emotional trailer about a lost astronaut surviving on Mars, dramatic orchestral score, 60 seconds."
Background  : transparent
Border      : none
Resize      : none (auto-grow)
```

**Below Textarea — Controls Row:**

Left-aligned group:
- **Voice Input Button** — microphone icon, 40×40px, bg-glass
- **Prompt Templates** — "Templates" text + icon, opens template picker overlay
- **AI Enhance** — "✨ Enhance Prompt" button — applies AI rewriting to expand and improve the prompt

Right-aligned group:
- **Style Selector** — compact dropdown showing current visual style
- **Duration Selector** — pill selector: 15s / 30s / 60s / 2m / 5m / Custom
- **Generate Button** — "Generate Video" — full gradient CTA, height 48px, radius 12px, icon: play

**Genre / Style Quick Chips (below controls, full width):**

Horizontally scrollable row of chips, 12px gap between each:

```
Cinematic   Anime   Hyper-Realistic   Documentary   Horror
Sci-Fi   Action   Luxury Ad   Viral Reel   YouTube Short   
Music Video   Corporate   News Segment   Fashion   Travel
```

Chip design:
```
Height      : 32px
Padding     : 0 14px
Radius      : 9999px (pill)
Border      : 1px solid border-subtle
Background  : bg-elevated
Text        : 13px, Inter 500, text-secondary
Active      : border-active, gradient text, bg-glass
Hover       : border: rgba(124,58,237,0.3), text-primary
```

---

#### 9.2.2 Advanced Prompt Controls (Expandable)

A collapsible section below the chips labeled "Advanced Options →"

When expanded, reveals a clean 2-column grid of control tiles:

| Control | Options |
|---------|---------|
| **Camera Style** | Handheld · Steadicam · Dolly · Drone · Static · POV |
| **Aspect Ratio** | 16:9 · 9:16 · 21:9 · 1:1 · 4:5 |
| **Film Look** | Kodak 5219 · Fuji 500T · Digital Clean · Film Grain · Bleach Bypass |
| **Lighting Style** | Natural · Golden Hour · Low-key Noir · Neon Night · Studio |
| **Color Grade** | Teal & Orange · Monochrome · Warm Vintage · Cold Sci-Fi · Desaturated |
| **Voiceover Language** | 30+ languages |
| **Voice Gender & Tone** | Male / Female / Neutral · Cinematic / Casual / News |
| **Music Mood** | Orchestral · Ambient · Hip-Hop · Electronic · None |

---

#### 9.2.3 AI Generation Flow Section

Displayed below the prompt area once the user clicks "Generate Video".

**Top label:** "AI PRODUCTION PIPELINE" — caption style

**Layout:** Horizontal stepper, 9 stages, scrollable horizontally on small viewports

```
Stage Card Design:
  Width         : ~120px
  Height        : ~80px
  Background    : bg-elevated
  Border        : 1px solid border-subtle
  Radius        : 14px
  Active border : gradient-brand (animated rotating gradient)
  Connector     : thin dashed line between cards
```

**9 Pipeline Stages:**

```
1. Story Analysis      → Analysing prompt, extracting intent
2. Screenplay          → Writing scenes, dialogue, descriptions  
3. Shot Planning       → Storyboard, camera angles, lens choices
4. Character Creation  → Generating consistent character visuals
5. Scene Generation    → Rendering all visual scenes with AI
6. Voice Generation    → Recording AI voiceovers with emotion
7. Music & FX          → Composing score, layering sound effects
8. Editing             → Cutting, timing, transitions, pacing
9. Rendering           → Final output, quality check, encoding
```

Each stage card shows:
- Stage icon (Phosphor icon)
- Stage name
- Status: Pending / In Progress / Complete / Error
- If active: animated loading dot + current micro-task text (e.g., "Writing Act 2 dialogue...")
- If complete: green checkmark

**Expandable Logs Panel:**
Clicking any active stage reveals a dark terminal-style log panel showing real-time AI reasoning steps. This builds trust and feels professional.

---

#### 9.2.4 Live Video Preview Area

The cinematic preview player — the most visually prominent element on the page.

**Container:**
```
Aspect ratio  : 21:9 (cinematic widescreen)
               (switchable to 16:9, 9:16 via control)
Border-radius : 28px
Border        : 1.5px solid rgba(124,58,237,0.3)
Box-shadow    : var(--ag-shadow-cinema)
Background    : #000000 (black letterbox)
Overflow      : hidden
Margin top    : 32px
```

**Ambient Glow Effect:**
A soft radial gradient glow pulses beneath the preview container, reacting to the dominant color of the currently displayed frame. This is the "ambient cinema" effect — subtle but deeply immersive.

**Player Controls (appear on hover, floating over bottom of video):**
```
Background  : rgba(0,0,0,0.7) with backdrop-blur
Radius      : 0 0 28px 28px (matches container)
Height      : 56px
Padding     : 0 20px
```

Control elements from left to right:
- ⏮ Previous Scene
- ⏯ Play / Pause (spacebar shortcut)
- ⏭ Next Scene
- 🔊 Volume slider
- Scene counter: "Scene 3 of 8"
- Resolution switcher: 720p / 1080p / 4K
- 🔁 Regenerate this scene (triggers AI to re-render just this scene)
- ⛶ Fullscreen

**Progress / Scrubber Bar:**
```
Position    : above controls, full width
Height      : 4px (expands to 8px on hover)
Track bg    : rgba(255,255,255,0.1)
Fill        : gradient-brand
Thumb       : 12px circle, white, appears on hover
Scene marks : small vertical ticks showing scene boundaries
```

---

#### 9.2.5 Scene Thumbnails Strip

Below the preview player.

**Layout:**
- Horizontally scrollable row
- Each thumbnail: fixed 160×90px (16:9 ratio), 12px gap between items
- Smooth snap scrolling (scroll-snap-type: x mandatory)
- Scroll indicator (subtle fade on right edge)

**Thumbnail Card:**
```
Border-radius : 10px
Border        : 1px solid border-subtle
Overflow      : hidden
```

**Thumbnail states:**
- Default: dim (70% opacity)
- Active (currently in player): full opacity + 2px gradient border + soft glow
- Hover: full opacity + "Regenerate" icon overlay appears

**Below each thumbnail:**
- Scene number: "Scene 1" (11px, text-muted)
- Duration: "0:00 – 0:08" (11px, text-muted)

---

#### 9.2.6 Timeline Editor

Professional multi-track AI-powered timeline.

**Container:**
```
Background  : bg-surface
Border      : 1px solid border-subtle at top
Radius      : 18px 18px 0 0
Padding     : 0 24px
Margin-top  : 24px
```

**Timeline Header Row:**
- Left: Track labels column (120px)
- Right: Time ruler (flexible width, zoom-adjustable)
- Controls: Zoom in / Zoom out / Fit to screen / Snap toggle / AI assist

**5 Timeline Layers:**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 Video Layer   │ [Scene1]──[Scene2]────[Scene3]──[Scene4]     │
├──────────────────┼─────────────────────────────────────────────┤
│ 🎤 Voice Layer   │ [VO Segment 1]────────────[VO Segment 2]     │
├──────────────────┼─────────────────────────────────────────────┤
│ 🎵 Music Layer   │ [Music Track 1 ─ ambient rise ────────────]  │
├──────────────────┼─────────────────────────────────────────────┤
│ 🔊 Sound FX      │    [impact]    [swoosh]      [ambience ────] │
├──────────────────┼─────────────────────────────────────────────┤
│ 💬 Subtitles     │ [Sub 1]  [Sub 2]   [Sub 3]    [Sub 4]        │
└─────────────────────────────────────────────────────────────────┘
```

**Clip Design:**
```
Height      : 36px per track
Radius      : 6px
Padding     : 0 10px
Text        : 11px, Inter 500, white/70
Video clips : bg: rgba(124,58,237,0.4), border: rgba(124,58,237,0.6)
Voice clips : bg: rgba(59,130,246,0.4), border: rgba(59,130,246,0.6)
Music clips : bg: rgba(16,185,129,0.3), border: rgba(16,185,129,0.5)
SFX clips   : bg: rgba(251,191,36,0.3), border: rgba(251,191,36,0.5)
Subtitle    : bg: rgba(255,255,255,0.1), border: rgba(255,255,255,0.2)
```

**Playhead:**
```
Color   : #FFFFFF
Width   : 2px
Top cap : 8px circle marker
```

**Timeline Interactions:**
- Drag clips to reorder
- Drag clip edges to trim
- Ctrl+Z / Ctrl+Y undo/redo
- Right-click clip → context menu (Split, Delete, Regenerate, Properties)
- Double-click clip → opens in right sidebar properties
- Scroll to zoom timeline (Ctrl + scroll)
- Magnetic snapping between clip edges
- AI Assist button opens floating popup with suggestions: "Trim Scene 3 by 2s — pacing feels slow"

---

### 9.3 Right Sidebar — Properties & AI Assist

**Width:** 340px fixed  
**Background:** `bg-surface` with `1px solid border-subtle` left border  
**Padding:** 20px  
**Overflow:** Scroll  

Content renders contextually based on what is selected in the center canvas. The sidebar intelligently switches between Scene, Character, Audio, and Export modes.

---

#### Scene Settings (active when a scene is selected)

```
Section: SCENE
───────────────────────────────────────
Scene Name      [Edit inline input]
Duration        [Numeric input + stepper]
Start Time      [Numeric input]
Transition In   [Selector: Cut / Fade / Dissolve / Wipe / AI Auto]
Transition Out  [Selector]
Scene Notes     [Small textarea for director notes]
[Regenerate Scene]  ←  CTA button
```

---

#### Camera Controls

```
Section: CAMERA
───────────────────────────────────────
Camera Style    [Dropdown]
Movement        [Dropdown: Static / Pan / Tilt / Dolly / Zoom / Orbit]
Speed           [Slider: Slow → Fast]
Focal Length    [Slider: 16mm → 200mm]
Depth of Field  [Toggle + Slider: Shallow → Deep]
Camera Angle    [Visual selector: Eye-level / Low / High / Dutch]
```

---

#### Motion Controls

```
Section: MOTION
───────────────────────────────────────
Scene Pacing    [Slider: 1 → 10]
Cut Frequency   [Slider: Slow → Rapid]
B-Roll Toggle   [Toggle]
B-Roll Amount   [Slider]
AI Motion FX    [Multi-select chips: Slow-Mo / Speed Ramp / Freeze / Reverse]
```

---

#### Character Settings (active when a character is selected)

```
Section: CHARACTER
───────────────────────────────────────
Name            [Editable]
Age             [Input]
Ethnicity       [Selector]
Costume         [Text description input]
Expression      [Visual emotion selector: Neutral / Sad / Intense / Joy / Fear]
Voice           [Selector + Preview play]
Lip Sync        [Toggle: Auto / Manual]
Consistency     [Consistency score badge + "Fix" button]
```

---

#### Lighting Controls

```
Section: LIGHTING
───────────────────────────────────────
Preset          [Dropdown: Natural / Studio / Noir / Golden Hour / Neon]
Intensity       [Slider]
Color Temp      [Slider: Warm 2700K → Cool 10000K, with preview]
Shadow          [Slider: Soft → Hard]
Rim Light       [Toggle + Color picker]
Practical Lights [Multi-select: Screen glow / Candle / Fluorescent / Practical]
```

---

#### Color Grading

```
Section: GRADE
───────────────────────────────────────
LUT Preset      [Visual LUT picker with preview thumbnails]
Exposure        [Slider: -3 → +3]
Contrast        [Slider]
Saturation      [Slider]
Highlights      [Slider]
Shadows         [Slider]
Color Balance   [3-way color wheel: Shadows / Midtones / Highlights]
```

---

#### Voice & Subtitle Settings

```
Section: VOICE
───────────────────────────────────────
Voice Model     [Selector + Preview]
Emotion         [Slider: Calm → Intense]
Speed           [Slider]
Pitch           [Slider]
Volume          [Slider]
Background FX   [Toggle]

Section: SUBTITLES
───────────────────────────────────────
Font            [Selector]
Size            [Slider]
Position        [Grid selector: Bottom / Center / Top]
Animation       [Selector: Fade / Typewriter / Bounce / None]
Outline         [Toggle + Thickness slider]
Background Box  [Toggle + Opacity slider]
Language        [Selector]
Auto-Translate  [Toggle]
```

---

#### AI Assist Panel

Always visible at the bottom of the right sidebar.

```
Section: AI ASSIST
───────────────────────────────────────
[Chat input with microphone toggle]
"Ask anything about your project..."

Below input: Suggested actions as chips:
  "Fix pacing"  "Improve dialogue"  "Change genre"
  "Make it shorter"  "Add tension"  "Regenerate opening"
```

The AI Assist chat is project-aware — it understands the full screenplay, character list, scene structure, and current selections. It can modify the project based on natural language commands typed here.

---

## 10. AI Agent System

### 10.1 Agent Architecture

All AI agents run in parallel where possible, with the **Director Agent** serving as orchestrator. Agents communicate through an internal event bus. Users see the output of this collaboration in real-time.

```
                    ┌──────────────────┐
                    │  Director Agent  │  ← Orchestrates all agents
                    └────────┬─────────┘
           ┌─────────────────┼───────────────────┐
           ↓                 ↓                   ↓
   ┌──────────────┐  ┌──────────────┐   ┌──────────────────┐
   │ Script Agent │  │ Cinematog.   │   │ Character Agent  │
   │              │  │ Agent        │   │ (Consistency)    │
   └──────┬───────┘  └──────┬───────┘   └────────┬─────────┘
          ↓                 ↓                     ↓
   ┌──────────────┐  ┌──────────────┐   ┌──────────────────┐
   │ Voice Agent  │  │ Music Agent  │   │ Environment Agent│
   └──────┬───────┘  └──────┬───────┘   └────────┬─────────┘
          └─────────────────┼──────────────────────┘
                            ↓
                   ┌──────────────────┐
                   │  Editing Agent   │  ← Assembles final cut
                   └──────────────────┘
```

### 10.2 Agent Specifications

#### Director Agent
- Parses user prompt for intent, tone, genre, and narrative structure
- Creates a project brief passed to all other agents
- Monitors output coherence and flags inconsistencies
- Has authority to request re-generation from any agent

#### Cinematographer Agent
- Designs shot list for each scene
- Selects camera movements, angles, focal lengths
- Specifies lighting setups
- Generates storyboard thumbnails

#### Script Agent
- Writes full screenplay from the prompt
- Generates dialogue, scene descriptions, action lines
- Maintains character voice consistency across scenes
- Supports scene-level rewriting on request

#### Character Consistency Agent
- Maintains visual identity of characters across all scenes
- Uses embeddings to ensure same face, body, costume in different contexts
- Generates character reference sheets
- Monitors and flags drifts in character appearance

#### Voice Agent
- Casts appropriate AI voice for each character and narrator
- Applies emotion mapping based on scene content
- Generates lip-sync data
- Handles multilingual voice with accent consistency

#### Music Composer Agent
- Generates original score based on genre, tone, pacing
- Creates stems (melody, harmony, percussion, FX) for flexible mixing
- Adapts music to scene cuts automatically
- Selects and layers sound effects

#### Environment Agent
- Generates consistent environments and backgrounds
- Maintains spatial and lighting consistency within scenes
- Generates B-roll footage suggestions and visuals

#### Editing Agent
- Assembles final video cut based on all generated assets
- Applies transitions, pacing adjustments
- Creates subtitle files
- Runs quality check before rendering

#### Rendering Agent
- Manages GPU rendering queue
- Handles upscaling (via Real-ESRGAN or equivalent)
- Generates multiple export formats simultaneously
- Sends completion notification

---

## 11. Feature Specifications

### 11.1 Prompt Studio Features

| Feature | Description |
|---------|-------------|
| **Smart Autocomplete** | AI suggests completions as user types, based on genre patterns |
| **Prompt Enhancement** | One-click AI expansion of short prompts into rich, detailed cinematic briefs |
| **Voice Prompt** | Speak your idea — STT converts to text, AI refines for optimal output |
| **Prompt Templates** | 100+ categorized templates (Trailers, Ads, Reels, Films, Docs, etc.) |
| **Prompt History** | All previous prompts saved and searchable |
| **Prompt Versioning** | Track how your prompt evolved across iterations |

### 11.2 Generation Features

| Feature | Description |
|---------|-------------|
| **Multi-Scene Memory** | Narrative and character context shared across all scenes |
| **Character Consistency Engine** | Visual identity maintained through all scenes |
| **AI Camera Planning** | Dynamic shot lists with varied angles for cinematic interest |
| **AI Lip Sync** | Frame-accurate lip movement for all dialogue lines |
| **Emotion-Aware Voice** | Voice delivery adapts to scene emotion score |
| **AI B-Roll Generation** | Supplemental footage generated to fill visual gaps |
| **AI VFX** | Basic visual effects (particles, light leaks, weather) applied contextually |

### 11.3 Editing Features

| Feature | Description |
|---------|-------------|
| **Smart Subtitle Animations** | Subtitles animate contextually (typewriter for dramatic, bounce for energetic) |
| **Auto Pacing Optimization** | AI analyzes cut timing and suggests improvements |
| **Magnetic Snap Timeline** | Clips snap to scene boundaries, beats, and other clips automatically |
| **AI Edit Suggestions** | Real-time suggestions overlay on timeline ("This cut feels early") |
| **Version History** | Full project history with branching — restore any version |
| **Multi-Track Audio Mixing** | Professional-grade audio mixer with EQ, compression, reverb |

---

## 12. Interaction & Animation System

### 12.1 Animation Principles

- **Duration:** 150ms for micro-interactions, 250ms for transitions, 400ms for page-level
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — snappy ease-out for all interactive elements
- **No linear animations** — all motion should feel physical and alive

### 12.2 Key Interactions

| Interaction | Animation |
|-------------|-----------|
| Agent Card expand | Height animates from 0, opacity fades in — 250ms ease |
| Generate button click | Brief scale pulse (1 → 0.97 → 1.02 → 1), then button transforms to progress state |
| Pipeline stage activating | Card border animates from border-subtle to rotating gradient border |
| Scene thumbnail select | Scale 1 → 1.02, border transitions to gradient-brand — 200ms |
| Sidebar section open | Smooth height transition with staggered children fade-in |
| AI Assist response | Text streams in character-by-character (typewriter) |
| Preview player ambient glow | Slow pulse, synced to video audio amplitude |
| Timeline clip hover | Slight lift (translateY -2px) + shadow increase |
| Clip drag | Ghost clone follows cursor with slight trail, target zones highlight |

### 12.3 Loading & Generation States

| State | Animation |
|-------|-----------|
| Generating | Shimmer gradient sweeps across pipeline cards left to right |
| AI thinking | Three animated dots with staggered bounce |
| Rendering | Progress bar with animated gradient fill |
| Agent active | Pulsing glow border (box-shadow animation, 1.5s loop) |
| Scene loading | Placeholder blocks with shimmer until image loads |

---

## 13. Accessibility Standards

Antigravity follows WCAG 2.1 AA standards throughout.

| Requirement | Implementation |
|-------------|----------------|
| **Contrast ratio** | All text ≥ 4.5:1 against background. UI text-secondary on bg-elevated: verified ≥ 4.5:1 |
| **Touch targets** | All interactive elements ≥ 44×44px |
| **Focus indicators** | 3px purple focus ring on all focusable elements |
| **ARIA labels** | All icon-only buttons carry descriptive aria-label attributes |
| **Keyboard nav** | Full keyboard navigation: Tab, Shift+Tab, Enter, Space, Arrow keys |
| **Screen reader** | Semantic HTML — headings, roles, live regions for AI status updates |
| **Reduced motion** | All animations respect `prefers-reduced-motion` media query |
| **Color independence** | Status never conveyed through color alone — always paired with icon + text |

---

## 14. Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **Next.js 14** (App Router) | Core framework, SSR, routing |
| **React 18** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations and transitions |
| **Zustand** | Lightweight state management |
| **React Query** | Server state, caching, WebSocket integration |
| **Radix UI** | Accessible base components |
| **Video.js** | Custom cinematic video player |
| **WaveSurfer.js** | Audio waveform display in timeline |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | API gateway, auth, project management |
| **FastAPI** (Python) | AI agent orchestration, model inference |
| **WebSockets** | Real-time agent status, collaboration |
| **BullMQ** | Job queue for rendering pipeline |
| **PostgreSQL** | Primary database (projects, users, assets) |
| **Redis** | Queue, caching, real-time data |
| **Supabase** | Auth, storage, real-time subscriptions |

### AI & ML

| Model / Service | Usage |
|-----------------|-------|
| **OpenAI GPT-4o** | Screenplay, dialogue, prompt enhancement |
| **Flux.1 / Stable Diffusion 3** | Scene image generation |
| **Kling / Veo / Runway Gen-3** | Video generation from images/text |
| **ElevenLabs** | AI voice synthesis, emotion tuning |
| **Whisper** | Speech-to-text for voice prompts |
| **AudioCraft (Meta)** | Music generation |
| **Real-ESRGAN** | Video upscaling |
| **Wav2Lip** | AI lip sync |
| **IP-Adapter / InstantID** | Character visual consistency |

### Infrastructure

| Service | Purpose |
|---------|---------|
| **AWS / GCP** | Compute, storage, CDN |
| **AWS EC2 G5 / A100** | GPU rendering nodes |
| **Cloudflare** | CDN, DDoS protection |
| **S3 / GCS** | Asset and video storage |
| **Vercel** | Frontend deployment |

---

## 15. Export & Delivery System

### 15.1 Export Presets

| Platform | Resolution | Aspect | Format |
|----------|------------|--------|--------|
| YouTube | 4K / 1080p | 16:9 | MP4 H.264 |
| Instagram Reel | 1080p | 9:16 | MP4 H.264 |
| TikTok | 1080p | 9:16 | MP4 H.264 |
| LinkedIn | 1080p | 16:9 | MP4 H.264 |
| Twitter/X | 1080p | 16:9 / 1:1 | MP4 |
| Cinema DCP | 4K | 21:9 | MXF / ProRes |
| Custom | User-defined | User-defined | MP4 / MOV / WebM |

### 15.2 Subtitle Export

- Embedded (burned-in subtitles)
- SRT file
- VTT file
- Auto-translated to selected target language before export

### 15.3 Asset Export

- Individual scene video files
- Full screenplay as PDF or FDOC
- Storyboard as PDF
- Character reference sheet as PNG/PDF
- Music stems as WAV/MP3
- Full project archive (ZIP)

---

## 16. Collaboration System

### 16.1 Real-Time Collaboration

- Multiple users can view and edit the same project simultaneously
- Live cursors visible across the workspace
- User presence avatars in the top nav
- Named color-coded user indicators

### 16.2 Review & Approval Workflow

- Shareable review link (view-only, no account required)
- Timestamped comments on scenes or timeline positions
- Approval / Request Changes status per scene
- Email notifications for comments and approvals

### 16.3 Version History

- Automatic checkpoint saves every 2 minutes
- Named versions (e.g., "v2 — with corrected voiceover")
- Full project diff view between versions
- Restore any past version with one click
- Branching — create alternate version from any checkpoint

---

## 17. Pricing & Plans

| Feature | Free | Creator | Pro | Studio |
|---------|------|---------|-----|--------|
| Videos/month | 3 | 20 | 100 | Unlimited |
| Max duration | 30s | 3m | 10m | Unlimited |
| Resolution | 720p | 1080p | 4K | 8K |
| AI Agents | 3 | All 6 | All 10 | All 10 + Custom |
| Character slots | 2 | 10 | 50 | Unlimited |
| Collaboration | ✗ | 2 users | 10 users | Unlimited |
| Watermark | Yes | No | No | No |
| Brand Kit | ✗ | 1 | 5 | Unlimited |
| Export formats | MP4 | All | All | All + DCP |
| Cloud storage | 2GB | 50GB | 500GB | Unlimited |
| Price (monthly) | Free | ₹999 | ₹3,999 | ₹14,999 |

---

## 18. Success Metrics

### 18.1 Product KPIs

| Metric | Target (3 months) | Target (12 months) |
|--------|-------------------|---------------------|
| Monthly Active Creators | 10,000 | 500,000 |
| Videos Generated / Month | 50,000 | 5,000,000 |
| Avg. Time: Prompt → Preview | < 90 seconds | < 45 seconds |
| User-rated Quality Score | > 4.2 / 5 | > 4.5 / 5 |
| Prompt → Publish Completion | 35% | 60% |
| Creator Retention (Day 30) | 25% | 45% |

### 18.2 Design Quality KPIs

| Metric | Standard |
|--------|----------|
| WCAG Contrast Compliance | 100% AA across all text |
| Touch Target Compliance | 100% ≥ 44×44px |
| Page Load (LCP) | < 2.5 seconds |
| Interaction Responsiveness | < 100ms for all UI actions |
| Animation Performance | 60fps minimum on all interactions |

---

## Appendix A — Antigravity Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Play / Pause |
| `←` / `→` | Step back / forward 1 frame |
| `Shift + ←/→` | Jump to previous / next scene |
| `Ctrl + Z` | Undo |
| `Ctrl + Shift + Z` | Redo |
| `Ctrl + S` | Manual save |
| `Ctrl + Enter` | Generate / Regenerate |
| `Ctrl + E` | Open export panel |
| `Ctrl + K` | Open command palette |
| `Ctrl + /` | Open AI Assist panel |
| `R` | Regenerate current scene |
| `F` | Fullscreen preview |
| `+` / `-` | Zoom timeline in / out |
| `\` | Fit timeline to screen |

---

## Appendix B — Folder Structure (Frontend)

```
antigravity/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   ├── create/
│   │   └── [projectId]/
│   ├── library/
│   └── settings/
├── components/
│   ├── ui/              ← Base design system components
│   ├── workspace/       ← Creation workspace components
│   │   ├── LeftSidebar/
│   │   ├── PromptStudio/
│   │   ├── AIGenerationFlow/
│   │   ├── PreviewPlayer/
│   │   ├── SceneThumbnails/
│   │   ├── TimelineEditor/
│   │   └── RightSidebar/
│   ├── agents/          ← AI Agent card components
│   └── shared/          ← Navigation, layout shells
├── lib/
│   ├── agents/          ← Agent orchestration logic
│   ├── api/             ← API clients
│   ├── stores/          ← Zustand state stores
│   └── utils/
├── styles/
│   └── globals.css      ← CSS custom properties (design tokens)
└── public/
    └── assets/
```

---

*Document version 1.0 — Antigravity Product & Design Team*  
*For questions or updates, raise a design issue in the project Figma or Notion.*
