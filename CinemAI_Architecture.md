# CINEIQ — Phase 3 Architecture
### Format Expansion | 22-Language Stack | IP Archive

**Format Expansion:** Music Videos, YouTube Pilots, Long-form Shows, Feature Films  
**Language Stack:** 17 Indian Languages + 5 Global Languages  
**IP Archive:** Creative Intelligence, Reference Library, Rights and Commercial Tracking

*Hungama Digital Media Entertainment | CineIQ Creative AI Studio | Phase 3 Blueprint*  
**STRICTLY CONFIDENTIAL | Document Owner: Neeraj Roy**

---

## Executive Summary

> *CineIQ Phase 2 proved the pipeline for Micro Drama at production scale. Phase 3 is not an extension of that pipeline. It is the architecture of a complete creative AI studio — one that can originate, develop and produce any content format, in any of 22 languages, and remember everything it has ever created.*

Phase 3 has three parallel workstreams that must be designed together but can be built in sequence:

### Workstream 1: Format Grammar Expansion
Adding four new content format categories to the CineIQ pipeline, each with its own distinct creative grammar, document sequence and production logic. Formats are built in priority order: Music Videos first, YouTube Pilots second, Long-form Original Shows third, Feature Films fourth. The key architectural principle: each format is a first-class pipeline citizen, not a parameter variation of the Micro Drama pipeline.

### Workstream 2: 22-Language Generation Stack
Simultaneous deployment of 17 Indian languages and 5 global languages across every pipeline stage. The core principle from WAVE's language-native work applies here without exception: CineIQ generates natively in each language, not translated from English. Each language gets a dedicated generation profile covering terminology, cultural reference frames, naming conventions and script-specific formatting rules.

### Workstream 3: IP Archive as CIG Extension
The IP Archive is not a filing system. It is the Creative Intelligence Graph made queryable across three simultaneous use cases: creative intelligence for discovery and connection, reference library for production teams, and rights and commercial tracking for legal and business. A single data architecture serves all three views. The CIG already holds the semantic understanding of every HCU IP created in Phase 2. Phase 3 formalises that as a persistent, searchable, cross-referenced archive.

### Phase 3 Build Sequence

- **Month 1–2:** Music Video pipeline grammar and first language profiles (Hindi, Tamil, Telugu, English, Spanish)
- **Month 2–3:** YouTube Pilot pipeline grammar and remaining Indian language profiles
- **Month 3–4:** Long-form Show pipeline grammar and global language profiles (French, Arabic, Mandarin, Bengali, Malayalam)
- **Month 4–6:** Feature Film pipeline grammar and remaining language profiles
- **Month 2–4 parallel:** IP Archive architecture, data model and first three query interfaces
- **Month 5–6:** Full integration testing across all formats, all languages and archive connections

---

## Workstream 1: Format Grammar Expansion

Each content format has a distinct creative grammar: a specific sequence of documents, each with its own structural rules, that CineIQ must generate in order. The format grammar is set at project creation — the system knows from the first input whether it is building a 3-minute music video or a 90-minute feature film, and every subsequent generation decision is made within that grammar's rules.

> **Architecture principle: Format as first-class pipeline citizen**
>
> *A music video treatment and a feature film treatment are not the same document at different lengths. They are structurally different objects with different creative logic, different audience contracts and different production constraints. CineIQ must know which grammar it is operating in from the moment a project is created — not at the script stage.*

---

## FORMAT A — Music Video
*3 to 5 minutes | Visual storytelling locked to song structure | Lyric-native generation*

### Format Definition
A music video is the only CineIQ format where the audio is fixed before the visual pipeline begins. The song, its structure, its emotional arc and its lyrical content are the creative brief. Every stage of the CineIQ pipeline must be generated in relationship to the song — not independently and then matched to it. This makes the music video the most constrained and most specific of all four formats.

### Unique Pipeline Requirements
- Song Brief must be the first input — not a logline or concept note
- Lyric-to-Visual Map is a format-exclusive document: it maps every section of the song (verse, chorus, bridge, outro) to a visual treatment, mood, colour palette and shot type
- Beat Sheet in music video context maps to song structure (bars and sections), not narrative acts
- Director's Treatment replaces the Script — music videos do not have dialogue scripts
- GenAI prompt set is generated directly from the Director's Treatment, formatted for Kling and Runway Gen-4

### Pipeline Stages

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| 1 | **Song Brief Intake** | Song Brief | CineIQ ingests song: title, artist, language, genre, tempo BPM, duration, mood, key lyrical themes. Generates a Song Intelligence summary. | 1 hr |
| 2 | **Concept Note** | Creative Concept | One-page visual concept anchored to the song's emotional arc. Three concept directions generated, creator selects one. | 2 hrs |
| 3 | **Lyric-to-Visual Map** | L2V Map | Section-by-section mapping of the song to visual language: each verse, chorus, pre-chorus, bridge and outro gets: scene description, dominant emotion, colour palette, shot type, character or world element. | 3 hrs |
| 4 | **Mood Board Brief** | Visual Reference Brief | Aesthetic direction document: colour grade, cinematography style, costume direction, location typology, reference films and videos. Formatted as GenAI image prompt set. | 2 hrs |
| 5 | **Director's Treatment** | Treatment | Full written treatment of the video: every scene described in production-ready language, tied to specific song moments. No dialogue. Pure visual storytelling. | 4 hrs |
| 6 | **Shot List** | Shot List | Complete shot-by-shot breakdown with: shot type, camera movement, character action, lyric sync point, duration, GenAI platform recommendation. | 3 hrs |
| 7 | **GenAI Prompt Set** | Prompt Document | Ready-to-paste prompts for every shot: Kling video, Runway Gen-4 atmospheric, Ideogram character and world reference. Formatted by platform. | 2 hrs |
| 8 | **Production Brief** | Production Bible | Single document consolidating all above for production team. Includes: timeline, shot count, platform allocation, estimated credit cost. | 1 hr |

**Total pipeline cycle:** 18 to 24 hours from song brief to production-ready package  
**Languages:** Generation in song's native language throughout. Lyric-to-Visual Map generated in same language as lyrics.  
**Hungama advantage:** WAVE platform intelligence feeds Song Brief Intake: artist data, raga/genre classification, language identification and mood profiling pre-populated from WAVE.

---

## FORMAT B — YouTube Pilot
*10 to 25 minutes | Single self-contained episode | Series-scalable world*

### Format Definition
The YouTube Pilot is a single episode designed to be complete and satisfying on its own while establishing a world, characters and story engine capable of sustaining a series. It is the most commercially testable format in the CineIQ suite: production cost is low, audience feedback is rapid and the data directly informs whether to greenlight a full series. Every YouTube Pilot generated by CineIQ must simultaneously function as a standalone story and as a series bible proof of concept.

### Unique Pipeline Requirements
- Character Bible is generated before world building — characters drive the YouTube Pilot format
- The Episode Bible covers only the single pilot episode but includes a Series Horizon section: 3-line descriptions of 6 potential future episodes, generated to prove the world's scalability
- Beat Sheet follows a modified three-act structure compressed into pilot format: hook in first 90 seconds is mandatory
- Script is generated in production format with scene headings, action lines and dialogue — suitable for direct use by a director
- Live Action vs GenAI split recommendation is generated as part of the Production Brief

### Pipeline Stages

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| 1 | **Concept Brief** | Concept Note | Logline, genre, primary audience, cultural context, language. CineIQ generates: story premise, protagonist archetype, central conflict and world type. | 1 hr |
| 2 | **Character Bible** | Character Bible | Primary character: psychology, motivation, backstory, voice, visual description, superpower or distinguishing ability. Supporting characters: 3 to 5. Each as a one-page profile. | 4 hrs |
| 3 | **World Brief** | World Bible (Pilot) | The world the pilot inhabits: geography, rules, tone, aesthetics, cultural specificity. Includes: visual palette, location typology, costume direction. | 3 hrs |
| 4 | **Episode Bible** | Episode Bible | Full document: episode title, logline, themes, character arcs for this episode, opening scene description, act breakdown, closing image. Plus Series Horizon: 6 future episode seeds. | 4 hrs |
| 5 | **Beat Sheet** | Beat Sheet | Scene-by-scene narrative beats. Hook beat mandatory within first 3 scenes. Act 1, Act 2 and Act 3 structure compressed to pilot length. Each beat: what happens, who changes, why it matters. | 3 hrs |
| 6 | **Script** | Pilot Script | Full production script in standard format. Scene headings, action lines, dialogue. Formatted for the episode's language. Approximate length: 10 to 25 pages. | 6 hrs |
| 7 | **Production Brief** | Production Brief | Live action vs GenAI split recommendation by scene. Shot complexity assessment. Platform recommendations for GenAI scenes. Estimated production timeline. | 2 hrs |

**Total pipeline cycle:** 23 to 30 hours from concept brief to production-ready script  
**Series pathway:** Every YouTube Pilot automatically generates a Series Greenlight Package on request: adds full series bible, season arc and episode outline set for 8 episodes.  
**Hungama advantage:** SocioDoor distribution intelligence pre-informs audience targeting for the Concept Brief: which communities on the 190M user platform have the highest affinity for this genre and language.

---

## FORMAT C — Long-form Original Show
*6 to 13 episodes | Season arc structure | OTT co-production ready*

### Format Definition
The Long-form Original Show is CineIQ's most complex single format: a full season of television requires a series bible, a season-level arc, individual episode bibles, beat sheets and scripts for each episode, plus a writers' room consistency layer that ensures character voice and world rules remain consistent across all episodes. CineIQ approaches this through a hierarchical generation architecture: series-level documents are generated and locked before episode-level documents begin, ensuring every episode is generated within the rules established at the series level.

### Unique Pipeline Requirements
- **Hierarchical lock:** Series Bible and Season Arc are approved and locked before any Episode Bible is generated — prevents character and world inconsistency across episodes
- **Consistency Engine:** a dedicated CineIQ layer that checks every episode-level generation against the locked series-level documents and flags any contradiction before the document is delivered
- **Writers' Room Mode:** multiple episodes can be generated in parallel by different CrewAI agent threads, all operating from the same locked series documents
- **Character Voice Profiles:** generated as part of the Character Bible, these are dialogue-level specifications that CineIQ uses to ensure each character sounds distinctively consistent across every episode's script
- **OTT Package:** a pitch-ready document set formatted for OTT platform submissions is generated on request alongside the production documents

### Pipeline Stages — Series Level
*(Generated once, locked before episode work begins)*

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| S1 | **Series Concept** | Series Concept Note | Premise, genre, tone, world type, primary characters, central conflict engine, target audience and platform. Three concept directions, creator selects one. | 2 hrs |
| S2 | **Series Bible** | Series Bible | Master document: world rules, character roster and full bibles for primary cast, tone and voice, recurring locations, thematic framework, franchise potential. | 8 hrs |
| S3 | **Character Voice Profiles** | Voice Profiles | Dialogue specifications for each primary character: vocabulary range, speech patterns, what they never say, how they respond under pressure. Used by script generation as a hard constraint. | 3 hrs |
| S4 | **Season Arc** | Season Arc Document | The complete narrative arc of the season: episode-by-episode story progression, character arc milestones, mid-season pivot point, finale setup. Every episode's position in the arc defined. | 4 hrs |
| S5 | **Episode Outline Set** | Episode Outline Set | One-page outline for every episode in the season: title, logline, which character arc advances, which series-level mystery develops, closing image. All generated simultaneously. | 4 hrs |

### Pipeline Stages — Episode Level
*(Repeated per episode, in parallel where possible)*

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| E1 | **Episode Bible** | Episode Bible | Full episode document: themes, character arcs this episode, A-story and B-story, key scenes, tone notes. Consistency Engine validates against Series Bible. | 3 hrs |
| E2 | **Beat Sheet** | Beat Sheet | Scene-by-scene beats. Teaser hook, act breaks, character turning points, episode climax and tag scene. Mapped against season arc position. | 2 hrs |
| E3 | **Script** | Episode Script | Full production script. Character Voice Profiles applied as generation constraint. Standard format. Consistency Engine validates character voice across all dialogue. | 6 hrs |
| E4 | **Production Brief** | Episode Production Brief | Live action vs GenAI scene split. New location requirements. Special effects and GenAI complexity assessment. Running time estimate. | 1 hr |

**Series-level cycle:** 21 hours from concept to locked series documents  
**Per-episode cycle:** 12 hours per episode in parallel generation mode  
**Full 8-episode season:** Series level 21 hours plus 8 episodes at 12 hours parallel: approximately 33 to 40 hours total  
**OTT Package:** Generated on request: pitch deck, series bible summary, episode synopses, character one-pagers, visual tone document. Formatted for Netflix, Prime, Disney Hotstar and Hungama platform submissions.

---

## FORMAT D — Feature Film
*80 to 130 minutes | Three-act structure | Complete production package*

### Format Definition
The Feature Film is the most structurally demanding format in CineIQ and the one with the highest production stakes. A feature script is typically 90 to 120 pages — a document that must sustain coherent character arcs, thematic depth, structural integrity and dramatic momentum across its full length while maintaining consistency in world, voice and tone. CineIQ approaches feature film generation through a staged development architecture modelled on industry standard development practice: Treatment before Structure, Structure before Scene Outline, Scene Outline before Script. No stage is skipped.

### Unique Pipeline Requirements
- **Three-stage structural validation** before script generation begins: Treatment, Three-Act Structure and Scene Outline are each reviewed and approved before the next stage generates
- The **Scene Outline** (one paragraph per scene for the full film) is a feature-exclusive document that ensures the full script does not generate scenes that contradict the approved structural logic
- **Character emotional arc mapping:** a beat-by-beat tracking of each primary character's internal state across the entire film, generated before the script and used as a constraint on every scene
- **Dialogue voice profiles** as in Long-form but with additional feature-specific constraint: subtext level, what each character wants vs what they say, and their character arc's effect on how they speak in Act 3 vs Act 1
- **Production Package includes:** budget tier assessment, VFX and GenAI scene classification, location count and complexity, cast size requirements

### Pipeline Stages

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| 1 | **Concept Brief** | Concept Note | Logline, genre, theme, world, protagonist and central conflict. CineIQ generates: emotional premise, thematic question, genre conventions being honoured and subverted. | 2 hrs |
| 2 | **Treatment** | Feature Treatment | 8 to 12 page prose treatment: the full film in narrative form. Beginning, middle and end. Character arcs sketched. Central set pieces identified. Approved before structure stage. | 6 hrs |
| 3 | **Character Bible** | Character Bible | Primary and secondary characters. Psychology, motivation, backstory, voice profile, visual description, emotional arc across the three acts. Character arc mapped beat by beat. | 5 hrs |
| 4 | **Three-Act Structure** | Structure Document | Act 1: setup and inciting incident. Act 2a: rising action and midpoint. Act 2b: dark night of the soul and climax setup. Act 3: climax and resolution. Each act: major beats, turning points, character decisions. | 4 hrs |
| 5 | **Beat Sheet** | Beat Sheet | Scene-level beats across the full film. 40 to 60 beats for a standard feature. Each beat: what happens, whose scene it is, what changes, what the audience feels. | 5 hrs |
| 6 | **Scene Outline** | Scene Outline | One paragraph per scene for the entire film. Scene heading, location, characters present, action summary, dramatic function, emotional register. Full film: 40 to 60 scenes. | 6 hrs |
| 7 | **Script** | Feature Script | Full production script. 90 to 120 pages. Scene headings, action lines, dialogue. All character voice profiles applied as generation constraints. Consistency Engine validates throughout. | 12 hrs |
| 8 | **Production Package** | Production Package | Budget tier assessment: micro, low, mid or high budget. GenAI and VFX scene classification. Location and cast complexity. OTT pitch package on request. | 3 hrs |

**Total pipeline cycle:** 43 to 55 hours from concept to production-ready script  
**HCU feature pathway:** Any HCU IP with an existing IP Bible bypasses stages 1 to 3: the Series Bible serves as the Character Bible and Treatment foundation, reducing the cycle to 28 to 35 hours.  
**Co-production ready:** Production Package formatted for international co-production discussions: includes genre comparables, target market analysis and streaming platform fit assessment.

---

## Workstream 2: 22-Language Generation Stack

CineIQ generates natively in 22 languages from day one of Phase 3. Native generation means the creative output — concept notes, character bibles, beat sheets, scripts — is written in the target language by a model that understands the cultural frame, naming conventions, dramatic conventions and tonal register of that language. It is not translation from English. This is the WAVE principle applied to the full creative pipeline.

> *The test for whether language generation is working: a writer fluent in Tamil should read a CineIQ Tamil script and find it reads like it was conceived in Tamil, not translated into it. If it reads like a translation, the language generation has failed, regardless of linguistic accuracy.*

### Architecture: Language Generation Profile

Each language gets a dedicated Language Generation Profile, a specification document that CineIQ's language model layer references for every generation in that language. The profile contains:

- Script and writing system specifications (Devanagari, Tamil script, Latin, Arabic, Simplified Chinese etc.)
- Cultural reference frame: which mythological, historical and contemporary references are active in this language community
- Naming conventions: character naming patterns, location naming, title conventions
- Dramatic conventions: storytelling structures and audience expectations specific to this language community
- Tonal register: formal vs informal spectrum, how dialogue sounds at different social levels, genre-specific registers
- Format-specific rules: how script format conventions differ (e.g. Bollywood script conventions vs Tamil film conventions vs global standard format)

### 17 Indian Languages

| Language | Script | Family / Region | Generation Model / Approach | Priority |
|---|---|---|---|---|
| **Hindi** | Devanagari | Indo-Aryan / North India | Claude API + Hindi-trained LLM layer. Dominant pipeline language. Highest generation confidence. | Tier 1 |
| **Tamil** | Tamil script | Dravidian / Tamil Nadu, Sri Lanka | Claude API + Tamil language profile. WAVE infrastructure leveraged. Classical and modern Tamil register distinction. | Tier 1 |
| **Telugu** | Telugu script | Dravidian / Andhra, Telangana | Claude API + Telugu language profile. WAVE infrastructure leveraged. High commercial priority. | Tier 1 |
| **Bengali** | Bengali script | Indo-Aryan / West Bengal, Bangladesh | Claude API + Bengali language profile. Literary tradition integration for drama and feature formats. | Tier 1 |
| **Malayalam** | Malayalam script | Dravidian / Kerala | Claude API + Malayalam profile. Cinema tradition strong. High diaspora digital audience. | Tier 1 |
| **Marathi** | Devanagari | Indo-Aryan / Maharashtra | Claude API + Marathi profile. Shivaji Mavle and HCU Maharashtra IPs in Marathi natively. | Tier 1 |
| **Kannada** | Kannada script | Dravidian / Karnataka | Claude API + Kannada profile. WAVE infrastructure leveraged. | Tier 2 |
| **Gujarati** | Gujarati script | Indo-Aryan / Gujarat, diaspora | Claude API + Gujarati profile. High diaspora priority: UK, USA, East Africa. | Tier 2 |
| **Punjabi** | Gurmukhi | Indo-Aryan / Punjab, diaspora | Claude API + Punjabi profile. Music Video format priority given Punjabi music market. | Tier 2 |
| **Odia** | Odia script | Indo-Aryan / Odisha | Claude API + Odia profile. Tribal and regional IP priority. | Tier 2 |
| **Assamese** | Bengali script variant | Indo-Aryan / Assam | Claude API + Assamese profile. Lachit IP natively in Assamese. | Tier 2 |
| **Urdu** | Nastaliq (Arabic) | Indo-Aryan / Pan-India, Pakistan | Claude API + Urdu profile. Nastaliq script rendering requirement. Poetry and ghazal register. | Tier 2 |
| **Bhojpuri** | Devanagari | Indo-Aryan / Bihar, UP | Claude API + Bhojpuri profile. Lorik IP and music video market priority. | Tier 2 |
| **Rajasthani** | Devanagari | Indo-Aryan / Rajasthan | Claude API + Rajasthani profile. Pabbuji and folklore IP native language. | Tier 2 |
| **Maithili** | Tirhuta / Devanagari | Indo-Aryan / Bihar, Nepal | Claude API + Maithili profile. Bihar regional IP priority. | Tier 3 |
| **Konkani** | Devanagari / Latin | Indo-Aryan / Goa, Konkan | Claude API + Konkani profile. Coastal IP and Goa market. | Tier 3 |
| **Sanskrit** | Devanagari | Classical / Pan-India | Claude API + Sanskrit profile. Limited to specific use cases: HCU mythological scripts, title cards, sacred texts within stories. | Tier 3 |

### 5 Global Languages

| Language | Script | Family / Region | Generation Model / Approach | Priority |
|---|---|---|---|---|
| **English** | Latin | Global / South Asian diaspora primary | Claude API native. Highest generation confidence across all formats. Default fallback language. | Tier 1 |
| **Spanish** | Latin | Global / LATAM, USA Hispanic | Claude API + Spanish profile. Second largest global streaming market. LATAM HCU expansion. | Tier 1 |
| **Arabic** | Arabic script | Global / Middle East, North Africa | Claude API + Arabic profile. Right-to-left script rendering. Gulf and MENA streaming market. | Tier 1 |
| **Mandarin Chinese** | Simplified Chinese | Global / China, diaspora | Claude API + Mandarin profile. Simplified Chinese script. Largest streaming market by user volume. | Tier 1 |
| **French** | Latin | Global / Europe, Africa, diaspora | Claude API + French profile. West African market inclusion. European streaming co-production. | Tier 2 |

### Language × Format Matrix — Generation Priority

- **Month 1–2:** Hindi, Tamil, Telugu, English, Spanish across Music Video and YouTube Pilot formats
- **Month 2–3:** Bengali, Malayalam, Marathi, Punjabi, Arabic, Mandarin across all four formats
- **Month 3–4:** Kannada, Gujarati, Urdu, Odia, Assamese, French across all four formats
- **Month 4–6:** Bhojpuri, Rajasthani, Maithili, Konkani, Sanskrit across relevant formats only

### Quality Gate: Language Validation Protocol

Before any language profile is activated in production, it passes a three-stage validation:

- **Stage 1 — Linguistic accuracy:** a native speaker reviewer checks a sample concept note, character brief and 5 pages of script for linguistic correctness
- **Stage 2 — Cultural authenticity:** a cultural consultant from the relevant community reviews the same samples for cultural register, reference accuracy and tonal appropriateness
- **Stage 3 — Format convention check:** a professional writer or script editor from that language's industry reviews the script sample for format convention compliance

Only after all three stages pass does the language profile go live in production. Languages that fail any stage are returned for prompt-layer revision before re-testing.

---

## Workstream 3: IP Archive as CIG Extension

The IP Archive is the Creative Intelligence Graph made permanently queryable. Every IP developed in CineIQ, every character created, every world built, every script generated, every legal filing made and every commercial discussion recorded is archived in a single structured system with three distinct query interfaces: Creative Intelligence, Reference Library and Rights and Commercial Tracking. These are three views on one data architecture — not three separate systems.

> *The archive's primary value is not what it stores. It is what it can surface. An archive that can answer 'which existing HCU character has thematic DNA closest to this new brief' is a creative accelerator. An archive that can only answer 'show me the files for Karna' is an expensive hard drive.*

### Core Architecture: The IP Entity Model

Every archived item is an IP Entity — a structured data object with a defined schema. The schema is consistent across all formats, all languages and all project stages. The three query interfaces all operate on the same IP Entity objects.

| Field Name | Data Type | Description | Used By |
|---|---|---|---|
| IP ID | Unique key | Auto-generated UUID. Every IP, character, world and document gets a unique ID that never changes. | All three interfaces |
| IP Name | Text | Primary title of the IP, character or world. All language variants stored as aliases. | All three |
| Format Type | Enum | Music Video, YouTube Pilot, Long-form Show, Feature Film, Micro Drama, HCU World. | All three |
| Language | Array | All languages in which this IP has been developed. Primary language flagged. | Creative, Reference |
| Category Tags | Array | Mythological, Folklore, Historical, Tribal, Cosmic, Maritime, Contemporary, Crossover. From HCU taxonomy. | Creative Intelligence |
| Cultural Region | Array | State, language community, cultural tradition. Enables regional gap analysis. | Creative Intelligence |
| Character DNA | Vector | Semantic embedding of character psychology, powers and arc. Enables similarity search. | Creative Intelligence |
| World DNA | Vector | Semantic embedding of world rules, aesthetic and tone. Enables similarity and conflict detection. | Creative Intelligence |
| Source Mythology | Text | Origin text, tradition or historical source. With confidence score. | Creative, Reference |
| Development Stage | Enum | Concept, Bible, Beat Sheet, Script, Production, Archive. Current stage of the IP. | Reference, Commercial |
| Documents | Array of refs | All documents generated for this IP: linked by document ID, type, language, version and date. | Reference Library |
| Legal Status | Enum | Unregistered, Provisional Filed, PCT Filed, National Phase, Granted, Licensed, Lapsed. | Rights Tracking |
| Patent References | Array | Trilegal filing references, application numbers, territories, filing dates. | Rights Tracking |
| Commercial Status | Enum | Internal Development, Partner Discussion, Term Sheet, Contracted, Released, Shelved. | Commercial Tracking |
| Revenue Records | Array | License fees, co-production terms, streaming deals. Linked to contract documents. | Commercial Tracking |
| Related IPs | Array of refs | IPs this entity shares characters, worlds or story elements with. Crossover potential. | Creative Intelligence |
| CIG Connections | Graph edges | Semantic relationships to other IPs: thematic, character, cultural, narrative. | Creative Intelligence |

### Interface 1: Creative Intelligence

The Creative Intelligence interface is the CIG query layer. It answers questions that no conventional search can answer:

- *'Which existing HCU character is thematically closest to this new brief?'* — uses Character DNA vector similarity search
- *'Is there a world in the archive that would conflict with this new world's rules?'* — uses World DNA similarity and rule contradiction detection
- *'Which unarchived cultural regions in India have no IP coverage yet?'* — uses Cultural Region gap analysis against the full HCU taxonomy
- *'What is the crossover potential between Karna and Chola Sea Raiders?'* — uses Related IPs and CIG graph traversal
- *'Which IPs in the archive have similar audience demographics to this new concept?'* — uses Format Type, Language and Category Tags in combination

The Creative Intelligence interface is the primary tool for the HCU creative team: it prevents duplication, surfaces unexpected connections and identifies white space in the universe before new development begins.

### Interface 2: Reference Library

The Reference Library interface serves production teams. It provides direct access to every document generated for any IP, with version history, language variants and format-specific document sets. Key capabilities:

- Full-text search across all archived documents in all languages
- Document comparison: compare the beat sheet for Episode 3 against Episode 7 to check for structural consistency
- Version history: every document version retained, with the generation parameters that produced it
- Export packages: download the complete document set for any IP in any language as a formatted ZIP
- Cross-IP reference: when developing a new IP, surface all documents from related IPs as a research starting point

### Interface 3: Rights and Commercial Tracking

The Rights and Commercial Tracking interface serves Neeraj, the legal team at Trilegal and business development. It provides a real-time status view of every IP's legal and commercial position:

- **Patent and IP protection status:** filing stage, territory coverage, renewal dates, Trilegal reference numbers
- **Commercial pipeline:** which IPs are in active partner discussion, which have term sheets, which are contracted
- **Revenue tracking:** licensing income, co-production fees, streaming deal values linked to IP entities
- **Alerts:** renewal deadlines, lapse risks, contractual milestone dates
- **Territory map:** visual display of which territories each IP is protected and commercialised in

### Archive Integration with CineIQ Pipeline

The Archive is not a separate step after CineIQ production. It is integrated into the pipeline: every document generated by CineIQ is automatically archived at the moment of delivery, with its IP Entity record updated. No manual archiving step is required. The pipeline creates, the archive stores, the three interfaces surface.

- **At project creation:** a new IP Entity is created with Format Type, Language and initial tags populated from the project brief
- **At each pipeline stage:** the generated document is added to the IP Entity's document array automatically
- **At legal filing:** Trilegal reference numbers are added to the Legal Status fields by the legal team through the Rights interface
- **At commercial discussion:** Business development team updates Commercial Status through the Commercial interface
- **At project completion or archival:** Development Stage is set to Archive and the IP Entity is closed for new pipeline generation but remains fully queryable

---

## Phase 3 Roadmap and Decisions Required

### 6-Month Build Roadmap

| # | Stage | Output Document | What CineIQ Generates | Cycle |
|---|---|---|---|---|
| M1 | **Music Video Pipeline** | Format Grammar A | Music Video pipeline grammar complete. Song Brief Intake with WAVE integration. Lyric-to-Visual Map generator. Hindi, Tamil, Telugu, English, Spanish language profiles activated. | Months 1–2 |
| M2 | **YouTube Pilot Pipeline** | Format Grammar B | YouTube Pilot pipeline grammar complete. Series Horizon generator. Hook enforcement in Beat Sheet. Bengali, Malayalam, Marathi, Punjabi language profiles activated. | Months 2–3 |
| M3 | **IP Archive Foundation** | Archive v1 | IP Entity data model. Reference Library interface. Basic Rights Tracking. Integration with CineIQ pipeline for automatic archiving. Kannada, Gujarati, Urdu, Odia, Assamese language profiles. | Months 2–4 |
| M4 | **Long-form Show Pipeline** | Format Grammar C | Series Bible generator. Consistency Engine. Writers Room parallel generation mode. Arabic, Mandarin, French language profiles. OTT Package generator. | Months 3–4 |
| M5 | **Feature Film Pipeline** | Format Grammar D | Three-stage structural validation. Scene Outline generator. Character Emotional Arc mapping. Budget tier assessment. HCU fast-track pathway for existing IP Bibles. | Months 4–6 |
| M6 | **Creative Intelligence Interface** | Archive v2 | CIG query interface. Character DNA and World DNA vector embeddings. Similarity search. Regional gap analysis. Crossover potential detection. Remaining language profiles. | Months 5–6 |

### Decisions Required from Neeraj

- **WAVE integration for Music Video Song Brief Intake:** confirm which WAVE data fields are available for API pull into CineIQ at project creation
- **Language validation consultants:** identify the cultural and industry reviewers for the 17 Indian language quality gates — this is the long-lead item and must begin in Month 1
- **Trilegal interface for Rights Tracking:** confirm whether the rights interface connects directly to Trilegal's case management system or operates as a manual update layer
- **Archive access levels:** define who has access to which interface — Creative Intelligence for creative team, Reference Library for production teams, Rights and Commercial for legal and business development and Neeraj
- **HCU IP Entity migration:** the 60 HCU IPs developed in Phase 2 need to be migrated into the Archive as founding IP Entities at the start of Phase 3 — this should be Week 1 activity
- **OTT Platform formatting:** confirm which OTT platforms the Production Package should be formatted for in the initial build — Hungama platform, Netflix India, Prime Video India and Disney Hotstar as a starting set

---

*STRICTLY CONFIDENTIAL | Hungama Digital Media Entertainment | CineIQ Creative AI Studio | Phase 3 Architecture*  
*Document Owner: Neeraj Roy*
