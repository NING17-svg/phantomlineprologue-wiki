import type { PageContent } from "@/types/content";

/**
 * Every `seoTitle` / `metaDescription` / `h1` below is a verbatim copy of the
 * matching Guide Editor file: frontmatter `title`, frontmatter `description`,
 * and the body `# H1`. The markdown under each module is the authored section
 * body, and every `next_steps` link stays inside the `.content-module` section
 * whose `<h2>` matches that step's `after_heading`.
 */
export const guidePages: PageContent[] = [
  {
    id: "husk-system",
    translationKey: "husk-system",
    locale: "en-US",
    routeKind: "fixed",
    slug: "husk-system",
    url: "/guides/husk-system",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue husk system guide and solo husk tactics",
    seoTitle: "Phantom Line: Prologue husk system guide for solo and co-op",
    metaDescription:
      "H.U.S.K. lets an Operator move between grown bodies. How many husks you get by squad size, what each body is for, and how to use the AI-held husk alone.",
    summary:
      "What H.U.S.K. is, how many bodies you get by squad size, and what the AI-held second husk is actually for when you play alone.",
    hero: {
      eyebrow: "H.U.S.K. system",
      subtitle:
        "Every body you fight in is a husk. How many you get, what they are for, and what to do with the one the AI holds.",
      ctas: [
        { label: "Contain an anomaly", href: "/guides/containing-anomalies" },
        { label: "Keep it fed", href: "/guides/survival-and-hazards" },
      ],
    },
    quickAnswer:
      "H.U.S.K. — the Human Uplink Simulation Kernel, the Mortfield Industries program behind Phantom Line: Prologue — means that every body you fight in is a husk, including the one you start in, and your consciousness moves between them at will. Playing alone you get two husks: you control one directly and the AI runs the other.",
    quickAnswerContext:
      "That second body is the whole solo toolkit, because it lets you hold an angle you cannot watch and still be somewhere else.",
    keyFacts: [
      { label: "Program", value: "H.U.S.K. (Human Uplink Simulation Kernel)" },
      { label: "Bodies, solo", value: "2 — one yours, one AI-held" },
      { label: "Bodies, two players", value: "2 — you shift between both" },
      { label: "Bodies, four players", value: "1 each — no AI body to hand" },
    ],
    modules: [
      {
        id: "what-it-is",
        type: "prose",
        heading: "What the husk system actually is",
        body:
          "Husks are artificially grown human bodies that Operators act through in the field. They are grown rather than manufactured, and the fiction treats them as biologically human, which is why the survival numbers on a husk behave the way they do. Your starting body is a husk too, so there is no \"real\" Operator body waiting for you to go back to.\n\nBecause a husk is a body and not a suit, the H.U.S.K. system's fiction is that death in the face of the unknown is a setback rather than the end of a run. Losing the body you are standing in does not end the operation; it costs you the body you were wearing and leaves you in another one. The switching is surfaced through mOS, the Mortfield Operating System, whose boot-up sequence was reworked for the Prologue so the idea of jumping bodies reads clearly the first time you see it.",
      },
      {
        id: "how-many-husks",
        type: "data-table",
        heading: "How many husks you control",
        intro:
          "Body count scales with squad size, and it is the single structural difference between playing alone and playing with friends:",
        columns: [
          { key: "size", label: "Squad size" },
          { key: "count", label: "Husks you get" },
          { key: "use", label: "How they are used" },
        ],
        rows: [
          {
            size: "Solo",
            count: "2",
            use: "You control one directly; the AI controls the other",
          },
          {
            size: "Two players",
            count: "2",
            use: "You shift your own consciousness between both of them",
          },
          {
            size: "Four players",
            count: "1 each",
            use: "One husk per Operator, no AI body to hand",
          },
        ],
        outro:
          "If you drop into a session that is already running, you take over an available additional husk rather than waiting for the next deployment. The full squad breakdown, including how equipment gets divided when other people are in the session, is on the [co-op guide](/guides/co-op-play).",
      },
      {
        id: "what-they-are-for",
        type: "prose",
        heading: "What husks are for",
        body:
          "The point of carrying a second body is that you are never pinned to one position. Moving between husks lets you look at a situation from a second angle, scout ahead before you commit, or set up a distraction on the other side of a fight while your controlled body waits.\n\nThe uses the game puts forward are concrete:\n\n- Scouting a high-threat anomalous zone before the rest of the squad goes in.\n- Flanking grotesque entities rather than meeting them head-on.\n- Setting up a decoy so a target commits to the wrong place.\n- Sacrificing a body to secure a supernatural target, then continuing from another.\n\nNotice that three of those four end with a body you are willing to lose. That is the design intent rather than an accident: a husk is replaceable, so spending one to protect the information or the position the rest of your work depends on is a legitimate trade.",
      },
      {
        id: "solo-tactics",
        type: "prose",
        heading: "Solo play husk tactics",
        body:
          "Alone, the AI-held husk is the tool that keeps your options open without a squadmate. The useful discipline is to treat it as a resource with a job, not as a spare life.\n\n**Give it a job before you need it.** A husk parked across a doorway doing nothing is a husk you cannot use; one already watching the approach you have not taken yet is a second pair of eyes you do not have to pay for.\n\n**Move it, do not just watch it.** The system is built for repositioning. The advantage comes from looking at a fight from an angle your controlled body cannot reach, so if you are holding the same spot in both husks you are running one Operator twice instead of two.\n\n**Know when you are spending it.** When a target has to be secured and the only way through is exposed, committing the AI body first and keeping your controlled one alive is the intended play. The same instinct stops working the moment you spend the AI body early and then need a second angle for the fight you already started.\n\n**Do not treat the AI body as your health bar.** It does not respawn on demand and it does not replace the body you are standing in when that body goes down. It is a separate position on the board, and the board only works if you use it as one.\n\nUpgrades are spent on the husk itself rather than on a general character sheet, so the body you are investing in is a body you can point at. What those investments actually buy is covered in [quintessence upgrades](/guides/quintessence-upgrades).",
      },
      {
        id: "keeping-it-effective",
        type: "prose",
        heading: "Keeping a husk effective",
        body:
          "Husks are grown bodies, not machines, and they need food and water to stay effective in the field. That means health, hunger, hydration and stamina apply to whichever husk you are currently in — the body you switch away from does not get to rest while you work.\n\nThis is the part of the husk system that quietly affects everything else you do. A husk that is running low on energy is a husk with less stamina, less strength and slower movement, and the second husk you parked across the doorway is consuming supplies on exactly the same budget as the one you are fighting in.\n\nRunning a husk well means treating the condition numbers as per-body bookkeeping, not as one global bar you top up between missions. The [survival and hazards guide](/guides/survival-and-hazards) covers how the four states feed each other, what to decide before you deploy, and how radiation and toxic zones spend the same budget you are already managing.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["co-op-play", "quintessence-upgrades", "survival-and-hazards"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "fire-modes",
    translationKey: "fire-modes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "fire-modes",
    url: "/guides/fire-modes",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue fire modes and how the gunplay changed",
    seoTitle: "Phantom Line: Prologue fire modes and how gunplay changed",
    metaDescription:
      "New fire modes, tactical reloads, magazine malfunctions and better ballistics: what they mean in a firefight, and why ammunition is tracked so harshly.",
    summary:
      "The four weapon changes in the Prologue build, why ammunition is tracked harshly, and how a squad divides the gear that pays for it.",
    hero: {
      eyebrow: "Weapon work",
      subtitle:
        "Four changes shipped together, and a loadout system built around ammunition you cannot easily replace.",
      ctas: [
        { label: "Survival and hazards", href: "/guides/survival-and-hazards" },
        { label: "Co-op guide", href: "/guides/co-op-play" },
      ],
    },
    quickAnswer:
      "Phantom Line: Prologue's gunplay was rebuilt around four things: new fire modes, tactical reloads, magazine malfunctions and improved ballistics. They all point the same direction — how much you commit per trigger pull is now a decision you make, and the cost of getting it wrong is paid in the magazine you were already short on.",
    quickAnswerContext:
      "Around that sits a loadout system where ammunition and health are tracked hard enough that fire discipline is not optional.",
    keyFacts: [
      { label: "Weapon changes", value: "Fire modes, reloads, malfunctions, ballistics" },
      { label: "Ammunition", value: "Tracked deliberately harshly" },
      { label: "Loadouts", value: "Built before a deployment" },
      { label: "Modifications", value: "Aboard Hestia, between deployments" },
    ],
    modules: [
      {
        id: "what-changed",
        type: "prose",
        heading: "Fire modes, reloads and ballistics: what changed",
        body:
          "The Prologue build's weapon work came out of player feedback from the March playtest, and the changes are grouped as one package:\n\n- **Fire modes.** Weapons no longer resolve every engagement the same way. Choosing how a weapon dumps its rounds is part of the fight instead of a setting you ignore.\n- **Tactical reloads.** Reloading is no longer one fixed animation you commit to blind. The cost of putting rounds back in is something you weigh against the seconds you are giving up.\n- **Magazine malfunctions.** A magazine can let you down mid-fight. A jam is now something the fight can hand you rather than something that only happens when you did everything right.\n- **Improved ballistics.** Hits land where you expect them to more reliably, which is what makes the other three changes matter — if you cannot trust the shot, choosing a fire mode is guessing.\n\nThe same pass reworked the humanoid AI and did general quality-of-life and performance work, so the enemies you are shooting at behave differently than they did in the earlier build too.",
      },
      {
        id: "fire-discipline",
        type: "prose",
        heading: "Fire discipline when ammo is scarce",
        body:
          "Ammunition supply and health are tracked deliberately harshly. That is a design choice rather than an oversight, and it is the reason the fire mode decision is worth making deliberately: an empty magazine costs you far more than the seconds the reload takes.\n\nTwo things make the choice more than a preference. Some ammunition types are effective against targets that have no solid body, so the round you load is sometimes a question about what is shooting at you rather than about what you prefer to use. And with magazine malfunctions in the mix, the discipline that pays is not trigger control — it is knowing when to disengage and reload before a jam can land in the middle of a push.\n\nOperators carry rifles, and night vision is available as gear, so visibility is something you configure rather than something you are stuck with.",
      },
      {
        id: "loadout",
        type: "prose",
        heading: "Building a loadout before you deploy",
        body:
          "Loadouts are assembled before a deployment, not scavenged during one. Weapons and attachments can be modified, and additional equipment is crafted from resources you scavenge in the open world, which means the kit you take out is shaped by what you managed to pick up on previous runs.\n\nThe design intends two broadly different kits:\n\n- **Stealth-tuned.** Less firepower, more of the gear that lets a squad avoid being seen, which fits runs where contact is expensive.\n- **Heavy assault.** More firepower and protection for a squad that intends to go through the objective rather than around it.\n\nThe trade-off between those two is the trade-off the whole system is built on, and it gets sharper the more space you give away. The [survival and hazards guide](/guides/survival-and-hazards) covers that space budget, including the food, water and consumables that have to come out of the same allowance.",
      },
      {
        id: "squad-equipment",
        type: "prose",
        heading: "Dividing the squad's equipment",
        body:
          "Equipment in Phantom Line: Prologue is meant to be divided across the squad rather than duplicated, so that four Operators are not all carrying four of everything. The working split looks like this:\n\n- A **dedicated detector** — the Ectometer — held by one Operator.\n- **Scanners** that pick up heat signs from spirits, carried by the team.\n- A **motion tracker** assigned to a single squad member.\n- A **heavy shield** carried by another.\n\nThe reason it is divided rather than shared out freely is the failure case. If the scanner fails while the team is depending on it, the team is blind — and nobody else was carrying a second one. Who holds what is therefore a squad decision made before you deploy, and the [co-op guide](/guides/co-op-play) covers how that decision interacts with husk allocation and the rest of a four-person operation.",
      },
      {
        id: "where-weapon-work",
        type: "prose",
        heading: "Where weapon work happens",
        body:
          "Weapon and body customization and modification happen aboard Hestia, the icebreaker that serves as your base of operations. That means a weapon you want to change is a weapon you bring back to the ship to change — the modification happens between deployments, not in the middle of a fight.\n\nHestia is also where the rest of the progression loop closes. If you are wondering whether a modification is something you craft yourself or something you buy with the resources you pull out of anomalies, the [quintessence upgrades guide](/guides/quintessence-upgrades) covers where that resource comes from and what it pays for.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["co-op-play", "quintessence-upgrades", "survival-and-hazards"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "survival-and-hazards",
    translationKey: "survival-and-hazards",
    locale: "en-US",
    routeKind: "fixed",
    slug: "survival-and-hazards",
    url: "/guides/survival-and-hazards",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue hunger, hazards and inventory space",
    seoTitle: "Phantom Line: Prologue hunger, hazards and inventory space",
    metaDescription:
      "Health, hunger, hydration and stamina run off one energy system. What to take before a deployment, how hazard zones stack, and why pack space is the budget.",
    summary:
      "The four survival states feed one energy system, hazard zones stack, and pack space is the budget every other decision spends from.",
    hero: {
      eyebrow: "Island survival",
      subtitle:
        "Four states on one energy meter, hazard zones that stack, and a pack that has to hold all of it.",
      ctas: [
        { label: "Prologue walkthrough", href: "/guides/prologue-walkthrough" },
        { label: "Contain an anomaly", href: "/guides/containing-anomalies" },
      ],
      assetId: "hunting-wildlife-forest",
    },
    quickAnswer:
      "Hunger management, radiation and inventory space are one decision in Phantom Line: Prologue, not three. Hunger and hydration do not trigger an alarm — they feed an energy system, and energy runs your stamina, strength and movement speed.",
    quickAnswerContext:
      "Nothing about that is urgent until it has been dropping for a while, which is why the survival layer is built to be managed before a deployment rather than patched up during one. Radiation, toxic gas and pack space all run against the same budget.",
    keyFacts: [
      { label: "Survival states", value: "Health, hunger, hydration, stamina" },
      { label: "Underlying system", value: "Energy drives stamina, strength, speed" },
      { label: "Hazard zones", value: "Radiation and toxic gas, stackable" },
      { label: "Real budget", value: "Inventory space" },
    ],
    modules: [
      {
        id: "four-states",
        type: "data-table",
        heading: "The four states your Operator runs on",
        intro:
          "Survival runs on four states: health, hunger, hydration and stamina. Hunger and hydration feed an underlying energy system, and it is that energy — not hunger on its own — that decides how well the rest of your condition holds up.\n\nThe degradation is progressive, which is the important part:",
        columns: [
          { key: "drops", label: "What drops" },
          { key: "costs", label: "What it costs you" },
        ],
        rows: [
          { drops: "Energy", costs: "Stamina" },
          { drops: "Energy", costs: "Physical strength" },
          { drops: "Energy", costs: "Movement speed" },
        ],
        outro:
          "There is no sudden penalty for letting it slip. A husk that is running low does not announce itself; it just stops doing what you asked it to, a little at a time. The first thing you actually notice is usually that you cannot hold the sprint you were counting on, and by then the cause has been building for a while.\n\nBecause the husks are grown rather than mechanical, this applies to every body you inhabit. The husk you parked across a doorway is spending the same energy budget as the one you are fighting in.",
      },
      {
        id: "before-you-deploy",
        type: "steps",
        heading: "Before you deploy",
        intro:
          "The intended approach is advance planning rather than constant micromanagement. In a warzone with limited supplies, what you take in is decided before you leave:",
        items: [
          {
            title: "Fix the route first.",
            body:
              "Decide where you are going — open-world sweep, a portal, a specific site — because that decides how long you are out and therefore how much you need to carry.",
          },
          {
            title: "Set the food and water for that time, not for a comfortable margin.",
            body:
              "Provisions are the one line item that cannot be recovered from a scavenged pile if you run it out in the wrong place.",
          },
          {
            title: "Choose the kit profile and accept what it costs you.",
            body:
              "A stealth-tuned loadout protects the run; a heavy assault loadout fights through it. Neither is free in space.",
          },
          {
            title: "Reserve the room you intend to loot in before you leave.",
            body:
              "Inventory space you did not plan for is loot you cannot carry back.",
          },
          {
            title: "Count the hazard gear into the same budget.",
            body:
              "Protective equipment competes with provisions for the same allowance rather than sitting in a separate category.",
          },
          {
            title: "Re-check the assignment across the squad, not just for yourself.",
            body:
              "Gear that one person is carrying is gear the whole operation is relying on.",
          },
        ],
        outro:
          "Food, water and consumables sit inside the same rebuilt, modular system as damage types and character perks, so what you consume interacts with the rest of your condition instead of operating as a separate overlay. That is why \"I ate, so I am fine\" is not a complete read on a deployment.\n\nFor what the first deployment actually asks of you, in what order, see the [Prologue walkthrough](/guides/prologue-walkthrough).",
      },
      {
        id: "hunger-on-island",
        type: "prose",
        heading: "Hunger management once you are on the island",
        body:
          "You are not limited to what you scavenge. Wild animals on the island can be hunted and cooked to maintain optimal health, which makes hunting a real second supply line rather than a flavor activity. Cooking matters more than raw catches because the goal is optimal health, not simply calories.\n\nScavenging still does the rest of the work: resources found in the open world are what you craft and upgrade gear with, and the same sites tend to carry records of what happened on them. The practical split is that animals keep your current body running, and scavenged resources are what fund the next one.\n\nThe team has also been testing a heart rate monitor element that gives you feedback on your condition while keeping the on-screen display minimal, so you are being asked to read your own state rather than stare at a bar.",
      },
      {
        id: "hazard-zones",
        type: "prose",
        heading: "Radiation and toxic gas hazard zones",
        body:
          "Radiation and toxic gas exist as hazard zones in the world, and both run through the same rebuilt survival system as hunger and stamina rather than being bolted on as a separate damage overlay. Two things follow from that, and both matter in play.\n\n**They stack.** Radiation and toxic gas can be layered in the same place, so a zone that looks like one hazard can be two. The condition effects interact with each other, and with your equipment, rather than resolving one at a time.\n\n**You will be told through the body, not a meter.** Hazard zones deliver their effect through the game's camera system, and the audio reacts to your state — breathing and coughing change according to injuries, stamina, radiation and toxic exposure. When your breathing changes in a place you thought was clear, that is the exposure telling you, not an alarm you can mute.\n\nProtection from a hazard zone is equipment, not a stance. That means the gear that keeps you functional in a toxic or irradiated area is weighed against food, water and the rest of your loadout in the same space budget, and against whatever your squadmates are already carrying.\n\nThis modular setup is the framework the hazards were built on, and it leaves room for further hazard types later — biochemical weapons and anomaly-related effects use the same underlying system rather than requiring a new one.",
      },
      {
        id: "inventory-space",
        type: "data-table",
        heading: "Inventory space as the real budget",
        intro:
          "Inventory space is one of the explicit constraints on a deployment, and it is the constraint that ties the other two subjects on this page together. The provisions you carry and the room left for what you find are both decided on the same deployment, against each other.",
        columns: [
          { key: "give", label: "Space you give" },
          { key: "get", label: "Space you get" },
        ],
        rows: [
          {
            give: "Food, water, consumables",
            get: "Nothing left over — you survive the trip and bring back less",
          },
          {
            give: "Room for scavenged loot",
            get: "Finding something you cannot carry is the same as not finding it",
          },
          {
            give: "Hazard gear",
            get: "Protection that only applies when you actually enter the zone",
          },
          {
            give: "A heavy assault kit",
            get: "The capability to go through an objective instead of around it",
          },
        ],
        outro:
          "The practical consequence is that the kit you choose decides what a run is worth as well as how it goes. A heavier loadout suits taking an objective head-on but leaves less room for what you find out there, and resources found in the open world are what you craft and upgrade gear with afterwards. How that spending works is covered in [quintessence upgrades](/guides/quintessence-upgrades), and the loadout-versus-armor trade-off in a squad context is in the [co-op guide](/guides/co-op-play).",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "prologue-walkthrough",
      "quintessence-upgrades",
      "co-op-play",
      "husk-system",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "anomaly-pockets",
    translationKey: "anomaly-pockets",
    locale: "en-US",
    routeKind: "fixed",
    slug: "anomaly-pockets",
    url: "/guides/anomaly-pockets",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue anomaly pockets, and what is behind the portals",
    seoTitle: "Phantom Line: Prologue anomaly pockets behind the portals",
    metaDescription:
      "Anomaly Pockets are generated realities behind unstable portals on the island. What is inside one, why the layouts change each run, and what it costs you.",
    summary:
      "Anomaly Pockets are procedurally generated realities behind unstable portals on the introductory island, and they are where containment work actually happens.",
    hero: {
      eyebrow: "Behind the portals",
      subtitle:
        "Generated realities bleeding through unstable portals on the island. They are not a late-game unlock.",
      ctas: [
        { label: "How to contain anomalies", href: "/guides/containing-anomalies" },
        { label: "Dynamic events", href: "/guides/dynamic-events" },
      ],
      assetId: "anomaly-pocket-liminal-curtains",
    },
    quickAnswer:
      "Anomaly Pockets are procedurally generated realities bleeding into the world through unstable portals, and the Prologue's introductory island has those portals on it from your first deployment. They are not a late-game unlock.",
    quickAnswerContext:
      "Crossing a threshold takes you into strange dimensions inspired by liminal spaces, where the anomalies you are sent to contain are actually found — which is what makes entry a decision about a husk body and your provisions rather than a detour.",
    keyFacts: [
      { label: "What they are", value: "Procedurally generated realities" },
      { label: "Where", value: "Unstable portals on the introductory island" },
      { label: "Availability", value: "From your first deployment" },
      { label: "Variation", value: "Layouts and challenges change between runs" },
    ],
    modules: [
      {
        id: "what-they-are",
        type: "prose",
        heading: "What anomaly pockets are",
        body:
          "A Pocket is a generated pocket of reality, not a hand-built dungeon. It exists because something tore open in the fabric of space-time, and what you walk into is the inside of that tear: spaces inspired by liminal spaces, the in-between places people describe when they feel somewhere is wrong without being able to say why.\n\nThree things follow from that framing, and they change how you read a run once you are inside:\n\n- Familiar surroundings stop being a comfort. The sense of place you navigate by outside does not apply here.\n- The rules of reality change. What you learned about the island does not transfer.\n- Your job is observation. The anomalies, puzzles and challenges inside need careful observation, not a route you can run from memory.",
      },
      {
        id: "where-portals",
        type: "prose",
        heading: "Where the portals are",
        body:
          "The portals sit on the introductory island itself. That placement is deliberate for a prologue: the Anomaly Pocket content is reachable from the first deployment rather than gated behind progress you do not have yet.\n\nPractically, that means the threshold is an island destination you decide to travel to. You are not waiting for it to unlock, and you are not carrying a special item to open it. What you do need is a body and enough supplies to survive whatever is on the other side, because the island does not stay stocked once you leave it.",
      },
      {
        id: "whats-inside",
        type: "prose",
        heading: "What you find inside",
        body:
          "Inside a Pocket you encounter anomalies, puzzles and challenges, and the layouts and challenges vary between playthroughs. Investigation and discovery are part of every return rather than something you clear once and tick off.\n\nFor the Prologue specifically, these procedurally generated spaces were expanded with new layouts and challenges, so the Pocket content is larger than it was in the previous playtest.\n\nThat variation is the reason a Pocket is worth a commitment rather than a quick look. If a run gives you an anomaly you have already handled somewhere else, you will still be reading a layout you have not seen, and the same is true in reverse — a layout that gave you nothing last time is not evidence that it gives nothing this time.",
      },
      {
        id: "entry-cost",
        type: "steps",
        heading: "Why entering one costs you",
        intro:
          "A Pocket is the setting in which containment work happens. The anomalies you are sent to contain are found inside these generated spaces, so the portal is not a side activity branching off the real job — it is the job.\n\nThat is what makes entry a real decision. You are committing:",
        items: [
          {
            title: "A husk.",
            body:
              "The body you take through the threshold is the body that has to come back out working, and it is one of the husks described in the [husk system guide](/guides/husk-system).",
          },
          {
            title: "Provisions.",
            body:
              "Food, water and consumables for however long you are in there, competing with the room you wanted for loot.",
          },
          {
            title: "Detection gear.",
            body:
              "You need to find the anomaly before it becomes a problem, and finding it is equipment-driven.",
          },
        ],
        outro:
          "Once you are inside, the work itself has a shape: secure the perimeter, watch for enemies that phase through solid matter, cover the angles, and get out. The [how to contain anomalies guide](/guides/containing-anomalies) covers that run step by step.",
      },
      {
        id: "generation",
        type: "prose",
        heading: "Where generation shows up",
        body:
          "The island's events are generated rather than placed, and Anomaly Pockets are the clearest case. The same consequence shows up everywhere on the map: returning to a location you know does not guarantee a familiar encounter.\n\nIf you are trying to plan a route across the island rather than into one portal, that broader picture — what else on the map changes without warning, and how to read a situation on the fly — is in the [dynamic events guide](/guides/dynamic-events).",
      },
    ],
    faqIds: [],
    relatedPageIds: ["containing-anomalies", "dynamic-events", "husk-system"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "containing-anomalies",
    translationKey: "containing-anomalies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "containing-anomalies",
    url: "/guides/containing-anomalies",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to contain anomalies in Phantom Line: Prologue",
    seoTitle: "How to contain anomalies in Phantom Line: Prologue guide",
    metaDescription:
      "A containment run is squad work: secure the perimeter, find the anomaly with detection gear, hold the angles while you work, and get everyone back out alive.",
    summary:
      "The order of operations inside a containment zone, from securing the perimeter to finding the anomaly with detection gear and pulling out alive.",
    hero: {
      eyebrow: "Containment runs",
      subtitle:
        "Four-person squad operations against a hostile zone. The same order of operations every run, whatever is inside.",
      ctas: [
        { label: "Anomaly pockets", href: "/guides/anomaly-pockets" },
        { label: "Co-op guide", href: "/guides/co-op-play" },
      ],
    },
    quickAnswer:
      "To contain anomalies in Phantom Line: Prologue, you run a four-person squad operation against a hostile zone: secure the perimeter, find the anomaly with equipment rather than by luck, hold the angles while you work, and get everyone out.",
    quickAnswerContext:
      "The anomalies themselves change between runs and they are found inside procedurally generated Anomaly Pockets, so the run is something you prepare for and execute — not a sequence you can memorise.",
    keyFacts: [
      { label: "Run shape", value: "Four-person squad operation" },
      { label: "Order", value: "Perimeter first, execution last" },
      { label: "Detection", value: "Equipment-driven, not observation" },
      { label: "Payout", value: "Loot and Quintessence, in that order" },
    ],
    modules: [
      {
        id: "what-is-anomaly",
        type: "prose",
        heading: "What an anomaly is",
        body:
          "An anomaly is a paranormal event or activity hidden from the public. They enter the world through tears in the fabric of space-time, and they manifest in two broad ways: as monstrous entities, and as reality-warping hazards that attack the area itself.\n\nThat is why containment is the task the whole game is built around. You are a paranormal SWAT unit working for Mortfield Industries, sent out to locate and contain them — and containment is what earns you the resource that pays for everything else you build.\n\nOn the island you will also meet hostile human factions and wild animals. They are threats, but they are not anomalies, and clearing them does not advance the job the way containment does.",
      },
      {
        id: "where-it-happens",
        type: "prose",
        heading: "Where containment happens",
        body:
          "Anomalies are encountered inside Anomaly Pockets — procedurally generated realities entered through unstable portals on the island. The puzzles and challenges inside require careful observation, and layouts and challenges change between runs, so the same anomaly can present differently when you come back to it.\n\nBecause the anomaly is found inside the generated space rather than in a fixed building, the run is a commitment of resources: a husk body, provisions for the time you will spend inside, and detection gear. The [anomaly pockets guide](/guides/anomaly-pockets) covers what is on the other side of the portal and how much it costs to enter.",
      },
      {
        id: "containment-run",
        type: "steps",
        heading: "How to contain anomalies in a run",
        intro:
          "A containment run is squad work against a hostile zone, not a duel with a single target. Missions are described as four-person squad operations, and the work they call for is the same every time regardless of which anomaly is inside:",
        items: [
          {
            title: "Secure the perimeter before you advance.",
            body:
              "A containment operation that has not been held from the outside is an operation you will have to fight twice.",
          },
          {
            title: "Watch for enemies that phase through solid matter.",
            body:
              "Cover is not permanent against these, so the positions you pick are positions you have to keep checking.",
          },
          {
            title: "Check corners and hold angles.",
            body:
              "The angle you are covering is the one that gets tested, and inside a generated layout you cannot assume which corner that will be.",
          },
          {
            title: "Cover doors.",
            body:
              "Anything that opens in a hostile zone is a way in, and it is the one you will be glad you watched when you needed to leave quickly.",
          },
          {
            title: "Revive each other.",
            body:
              "A downed Operator is the difference between a contained anomaly and an abandoned site, and reviving costs time the zone keeps charging interest on.",
          },
          {
            title: "Find and contain the anomaly.",
            body:
              "This is where the detection gear earns its place in the loadout.",
          },
          {
            title: "Loot, then pull out.",
            body:
              "Clearing a site surfaces audio logs and strange relics as well as supplies, and all of it is worth more if you get back with it.",
          },
        ],
        outro:
          "The reason to plan rather than improvise is that steps one through five are preparation and steps six and seven are execution. You get one shot at the execution, and it goes badly if the preparation was skipped.",
      },
      {
        id: "detection",
        type: "prose",
        heading: "Detection is equipment",
        body:
          "Detection in Phantom Line: Prologue is equipment-driven. You do not locate an anomaly by looking hard enough; you locate it with gear that someone is carrying.\n\n- The **Ectometer** is the dedicated paranormal detector.\n- **Scanners** pick up heat signs from spirits.\n- A **motion tracker** can be assigned to one squad member.\n\nThis gear is deliberately divided across the squad rather than duplicated, which produces the failure case that makes containment a planning problem: if the scanner fails while the team is depending on it, the team is blind. Nobody else was carrying a second scanner to fall back on.\n\nThat is the practical reason to agree the detection loadout before you deploy rather than sorting it out at the threshold. Who holds the Ectometer, who carries the tracker, and what you do when the scanner is the thing that breaks is part of the wider squad arrangement — the [co-op guide](/guides/co-op-play) covers how that assignment interacts with body count and the rest of a four-person operation.",
      },
      {
        id: "cleared-site",
        type: "prose",
        heading: "What a cleared site gives you",
        body:
          "Two things come out of a cleared site, and they are different currencies.\n\nThe first is loot — supplies and equipment, plus the audio logs and strange relics that carry the site's lore. Looting is part of the run rather than something you do after it, which is why step seven above is part of the operation and not an epilogue.\n\nThe second is Quintessence. Containment is what produces it: the resource is obtained after containing anomalies, so no containment means no Quintessence regardless of how well you looted the rest of the site.\n\nIt also means the order you secure sites in changes what a run is worth, since progression can vary with the order in which sites are secured. Where the resource goes once you have it — supernatural resistance, abilities and tactical gear, all applied to the husk body — is covered in [quintessence upgrades](/guides/quintessence-upgrades).",
      },
    ],
    faqIds: [],
    relatedPageIds: ["anomaly-pockets", "co-op-play", "quintessence-upgrades"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "quintessence-upgrades",
    translationKey: "quintessence-upgrades",
    locale: "en-US",
    routeKind: "fixed",
    slug: "quintessence-upgrades",
    url: "/guides/quintessence-upgrades",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue quintessence upgrades and what they pay for",
    seoTitle: "Phantom Line: Prologue quintessence upgrades and spending",
    metaDescription:
      "Quintessence comes from containing anomalies and pays for supernatural resistance, abilities and tactical gear, all spent aboard the ship base Hestia.",
    summary:
      "Where the progression resource comes from, the three things it pays for, and why every upgrade lands on the husk you are wearing.",
    hero: {
      eyebrow: "Progression",
      subtitle:
        "Containment first, upgrade second, in that order, every time. All of it spent aboard the icebreaker Hestia.",
      ctas: [
        { label: "How to contain anomalies", href: "/guides/containing-anomalies" },
        { label: "Husk system guide", href: "/guides/husk-system" },
      ],
    },
    quickAnswer:
      "Quintessence upgrades are what your containment runs pay for. The resource comes from containing anomalies and it goes into three things — your supernatural resistance, your abilities and your tactical gear — and all three are applied to the husk body you are wearing, at the ship base Hestia.",
    quickAnswerContext:
      "The loop is containment first and upgrade second, in that order, every time.",
    keyFacts: [
      { label: "Source", value: "Contained anomalies, exclusively" },
      { label: "Pays for", value: "Resistance, abilities, tactical gear" },
      { label: "Applied to", value: "The husk body you are wearing" },
      { label: "Spent", value: "Aboard Hestia, between deployments" },
    ],
    modules: [
      {
        id: "where-it-comes-from",
        type: "prose",
        heading: "Where Quintessence comes from",
        body:
          "Containment is the only source. The resource is obtained after you contain an anomaly, which makes the dependency absolute: no anomaly contained, no Quintessence, whatever else the run produced.\n\nThat is worth being blunt about, because it changes what a good run looks like. Looting a site well and containing an anomaly are different scores, and only one of them opens the upgrade menu. A run where the squad came back with a full pack and nothing contained is a run that has to be repeated before it has paid for anything.\n\nIf you want the containment side of this written out — the squad shape, the detection loadout, the order of operations inside the zone — it is in the [how to contain anomalies guide](/guides/containing-anomalies).",
      },
      {
        id: "what-it-pays-for",
        type: "comparison",
        heading: "What quintessence upgrades pay for",
        intro: "Quintessence is spent on three targets:",
        options: [
          {
            name: "Supernatural resistance",
            summary: "How your body handles what is on the other side of a portal.",
            badge: "Survive the rift",
          },
          {
            name: "Abilities",
            summary: "What the Operator can do that is not covered by a weapon.",
            badge: "Act outside the gun",
          },
          {
            name: "Tactical gear",
            summary: "The equipment you take out with you.",
            badge: "Prepare the deployment",
          },
        ],
        outro:
          "The thing to understand about all three is that the body being upgraded is the husk. An investment here is an investment in a specific husk body rather than in a generic character sheet, so your upgrade decisions and your husk decisions are the same decision. Which husk you are going to be wearing for a run determines whether the resource you spent on it was well spent.\n\nThat coupling is why managing husks matters alongside gathering resources. A run that fills your upgrade budget but leaves you managing badly will not feel like progress. The [husk system guide](/guides/husk-system) covers how many bodies you have, which of them the AI is running, and how to point the resource at one that matters.",
      },
      {
        id: "where-you-spend-it",
        type: "prose",
        heading: "Where you spend it",
        body:
          "Upgrades are performed aboard Hestia, the icebreaker that serves as your base of operations. It is not something you can do in the field, which is what gives the return-to-ship leg of the loop its weight — the resource is only useful once you are back.\n\nFrom Hestia you:\n\n- Customize your H.U.S.K.\n- Modify your gear and body\n- Customize your cabin\n- Get briefed on the main deck before the next anomaly hunt\n\nThe briefing is the part that closes the loop rather than opening a menu: Hestia is where the run you just finished gets turned into the run you are about to start.",
      },
      {
        id: "the-loop",
        type: "steps",
        heading: "The loop around it",
        intro: "The cycle the resource sits in is short and entirely deliberate:",
        items: [
          {
            title: "Deploy to the island",
            body: "With a husk and provisions you chose in advance.",
          },
          {
            title: "Contain an anomaly.",
            body: "This is the step that produces anything worth upgrading.",
          },
          {
            title: "Return to Hestia",
            body: "With the Quintessence and whatever else you cleared out of the site.",
          },
          {
            title: "Spend the Quintessence",
            body: "On resistance, abilities and tactical gear for the husk you are building.",
          },
          {
            title: "Modify gear and body",
            body: "With what you scavenged, alongside the Quintessence spend.",
          },
          {
            title: "Take the briefing on the main deck",
            body: "And go back out.",
          },
        ],
        outro:
          "Steps one to three are the run, steps four to six are the ship, and the only step that grows your power is step two. Everything else moves the resource around.\n\nThe wider base loop around Hestia also covers recruiting crew, upgrading quarters, crafting gear and managing supplies. Those fuller base-management features belong to the complete game beyond the Prologue, so the island slice you are playing centres on the anomaly hunt, the modification bench and the briefing.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["containing-anomalies", "husk-system", "anomaly-pockets"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "prologue-walkthrough",
    translationKey: "prologue-walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "prologue-walkthrough",
    url: "/guides/prologue-walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue walkthrough, from training to Hestia",
    seoTitle: "Phantom Line: Prologue walkthrough from training to Hestia",
    metaDescription:
      "Your first deployment runs in a fixed order: operator training, a first story mission, then reaching Hestia and unlocking part of the island's open world.",
    summary:
      "The four stages of the first deployment in order: operator training, the first story mission, Hestia, and the island's limited open world.",
    hero: {
      eyebrow: "Chapter walkthrough",
      subtitle:
        "Operator training, a first story mission, Hestia, and then the island's open-world systems — in that order, every time.",
      ctas: [
        { label: "Survival and hazards", href: "/guides/survival-and-hazards" },
        { label: "Anomaly pockets", href: "/guides/anomaly-pockets" },
      ],
    },
    quickAnswer:
      "Your first deployment in Phantom Line: Prologue runs in a fixed order: operator training, then a first story mission, then reaching Hestia, and only after that do you get access to some of the island's open-world features.",
    quickAnswerContext:
      "This walkthrough follows that order and what each stage actually gives you.",
    keyFacts: [
      { label: "Stage 1", value: "Operator training" },
      { label: "Stage 2", value: "A first story mission" },
      { label: "Stage 3", value: "Reaching Hestia" },
      { label: "Stage 4", value: "Part of the island's open world" },
    ],
    modules: [
      {
        id: "scope",
        type: "steps",
        heading: "What this walkthrough covers",
        intro: "The four stages, in the order you meet them:",
        items: [
          {
            title: "Operator training.",
            body: "Where the core combat and survival mechanics are taught.",
          },
          {
            title: "A first story mission.",
            body: "The story beat that takes you toward the ship.",
          },
          {
            title: "Reaching Hestia.",
            body:
              "The icebreaker becomes your base of operations, and the bench, the cabin and the briefing deck open up.",
          },
          {
            title: "Part of the island's open world.",
            body:
              "A limited slice of the map, with the survival states, the supply loop and the unstable portals all live.",
          },
        ],
        outro:
          "Stages one to three are the spine of the Prologue and they run in that sequence every time. Stage four is where the chapter stops being a corridor and becomes an island you operate on.",
      },
      {
        id: "operator-training",
        type: "prose",
        heading: "What operator training covers",
        body:
          "Training is where Phantom Line: Prologue teaches you its core combat and survival mechanics, and it is deliberately short. The tutorial was shortened since the last playtest specifically so you get more room to discover and experiment with the mechanics on your own rather than watching a long scripted stretch.\n\nIn practice, that means training is a compressed introduction rather than a section you sit through. It establishes the four survival states — health, hunger, hydration and stamina — and the combat basics, and then hands you the rest.\n\nThe wider game also has Mortfield's training facility for H.U.S.K. Operators, which is where the March 2026 playtest ran and where the mechanics were tested in the first place. The facility is not part of the Prologue island; it is the place the systems behind your deployment were worked out.\n\nBecause the tutorial stops early, the survival numbers it introduces are yours to manage from that point on. What each state does to the others, and what you decide before leaving, is in the [survival and hazards guide](/guides/survival-and-hazards).",
      },
      {
        id: "after-hestia",
        type: "prose",
        heading: "What the island gives you after Hestia",
        body:
          "Once you have the ship, the island opens up as a limited slice of the open world. This is where the systems actually live:\n\n- **Hunting wild animals and cooking them**, which keeps your health optimal without relying entirely on scavenged supplies.\n- **Scavenging resources** in the open world, used for crafting and upgrading gear.\n- **Working through the survival states** — health, hunger, hydration and stamina — on a body that needs all four.\n- **Reaching the unstable portals** that lead into Anomaly Pockets, which is where the anomalies you are sent to contain are found.\n\nThe portals are the destination the island is built around. What is on the other side of them, and what entering one costs you in husks and provisions, is covered in the [anomaly pockets guide](/guides/anomaly-pockets).\n\nThe last item is not the only moving part. The island is an unscripted open world, so what you run into between the portals is generated rather than placed — that is in the [dynamic events guide](/guides/dynamic-events).",
      },
      {
        id: "chapter-scope",
        type: "prose",
        heading: "How much the Prologue covers",
        body:
          "The Prologue is explicitly smaller than the full game. The larger world, more anomalies and further systems are still in development for Phantom Line proper, so the island you are operating on is a slice rather than the map.\n\nThat is also why this walkthrough follows the structure of the first deployment rather than a mission-by-mission objective list. What exists to play on the island is the training, the first story mission, the ship, and the open-world systems those unlock — hunting, cooking, scavenging, the survival states, and the portals into Anomaly Pockets. Treat the sequence above as the chapter's shape, and the run itself as where you make the decisions.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "survival-and-hazards",
      "anomaly-pockets",
      "dynamic-events",
      "co-op-play",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "dynamic-events",
    translationKey: "dynamic-events",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dynamic-events",
    url: "/guides/dynamic-events",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue dynamic events on the island",
    seoTitle: "Phantom Line: Prologue dynamic events and shifting threats",
    metaDescription:
      "Anomalies, hostile factions, wild animals and changing weather move across an unscripted island. How to read a situation when a known location never repeats.",
    summary:
      "The island's events are generated rather than placed, so a known location does not guarantee a familiar encounter.",
    hero: {
      eyebrow: "Open world",
      subtitle:
        "Anomalies, factions, animals and weather all moving at once, on a map that does not hold still between runs.",
      ctas: [
        { label: "Anomaly pockets", href: "/guides/anomaly-pockets" },
        { label: "Prologue walkthrough", href: "/guides/prologue-walkthrough" },
      ],
      assetId: "squad-firefight-burning-rift",
    },
    quickAnswer:
      "The island in Phantom Line: Prologue is an unscripted open world, and its dynamic events are generated rather than placed. That means anomalies appear across the map as new threats alongside hostile human factions and wild animals, weather changes as part of the presentation, biomes get refreshed, and returning to a location you know does not guarantee a familiar encounter.",
    quickAnswerContext:
      "The useful skill is not memorising the map. It is noticing what has changed since you last looked and deciding what it means before committing.",
    keyFacts: [
      { label: "Map", value: "Unscripted open world" },
      { label: "Events", value: "Generated, not placed" },
      { label: "Moving at once", value: "Anomalies, factions, animals, weather" },
      { label: "Prologue scope", value: "Part of the planned event content" },
    ],
    modules: [
      {
        id: "not-a-mission-list",
        type: "prose",
        heading: "The island is not a mission list",
        body:
          "What you run into on the map is not limited to a fixed list of missions. Four things are moving on it at once:\n\n- **Anomalies**, appearing across the open-world map as new threats.\n- **Hostile human factions**, who are dangerous for their own reasons and are not anomalies.\n- **Wild animals**, which are both a threat and a supply line if you can hunt them.\n- **The environment itself** — weather is a dynamic part of the presentation, and biomes get refreshed rather than staying as you left them.\n\nDynamic events and evolving battles are what make the warzone feel active, and they produce situations that call for observation, tactical decisions and coordination rather than a prepared solution. You face threats the game controls in a world that continues to change around you, and those are the conditions the squad has to read on the fly.",
      },
      {
        id: "reading-situations",
        type: "prose",
        heading: "Reading a situation on the fly",
        body:
          "Because events are generated, the useful skill is not memorising the map. It is noticing what has changed since you last looked and deciding what it means before committing.\n\nTwo habits follow from that:\n\n- **Re-scan before you commit.** A route you cleared last run may have something new on it, and the thing you are walking toward is not necessarily the thing you planned against.\n- **Treat a location you know as a location, not as an encounter.** Nothing about generation guarantees that the second visit matches the first.\n\nAnomaly Pockets are the clearest case of all of this. They are procedurally generated realities whose layouts and challenges vary between playthroughs, and the team expanded these spaces with new layouts and challenges for the Prologue — so even the destination you chose deliberately can present differently each time you reach it. What is inside one, and how the generated layouts work, is in the [anomaly pockets guide](/guides/anomaly-pockets).\n\nThe island available in the Prologue exposes only part of the event content planned for the full open world, so the range of things that can happen here is narrower than where the map is headed.",
      },
      {
        id: "where-events-sit",
        type: "prose",
        heading: "Where dynamic events sit",
        body:
          "These events are the texture of the open-world slice, not a stage in the story. They sit alongside the fixed spine of your first deployment — training, the first story mission, then Hestia — and they are what you are doing once the island unlocks, rather than something that interrupts the sequence.\n\nThat distinction matters when you are deciding where to spend a run: the story missions are a fixed order, and the island around them is generated. If you want the order the chapter actually runs in, it is written out in the [Prologue walkthrough](/guides/prologue-walkthrough).",
      },
    ],
    faqIds: [],
    relatedPageIds: ["anomaly-pockets", "prologue-walkthrough", "co-op-play"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "co-op-play",
    translationKey: "co-op-play",
    locale: "en-US",
    routeKind: "fixed",
    slug: "co-op-play",
    url: "/guides/co-op-play",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Phantom Line: Prologue co-op guide for solo, duos and squads",
    seoTitle: "Phantom Line: Prologue co-op guide for solo play and squads",
    metaDescription:
      "PvE only, one to four players, with single-player, online and LAN co-op. How husk counts scale by squad size and how the team divides its detector and scanners.",
    summary:
      "What changes when other people are in the session: husk counts scale down as the squad grows, equipment is divided rather than duplicated.",
    hero: {
      eyebrow: "Co-op",
      subtitle:
        "PvE throughout. One to four players, single-player, online and LAN, and what a squad changes about the systems underneath.",
      ctas: [
        { label: "Husk system guide", href: "/guides/husk-system" },
        { label: "How to contain anomalies", href: "/guides/containing-anomalies" },
      ],
    },
    quickAnswer:
      "Phantom Line: Prologue is a dedicated PvE co-op shooter for one to four players — single-player, online co-op and LAN co-op are all supported, and there is no PvP.",
    quickAnswerContext:
      "This co-op guide covers what actually changes when other people are in the session: husk allocation scales with squad size, equipment gets divided instead of duplicated, and a four-person operation has its own list of jobs to do.",
    keyFacts: [
      { label: "Modes", value: "PvE only — no PvP" },
      { label: "Players", value: "1–4" },
      { label: "Sessions", value: "Single-player, online, LAN" },
      { label: "Equipment", value: "Divided across the squad" },
    ],
    modules: [
      {
        id: "scope",
        type: "prose",
        heading: "What this co-op guide covers",
        body:
          "The game is built for one to four players working together, and it never pits you against other players. It is PvE throughout.\n\nSolo play is treated as a core design case rather than a concession — the goal is to preserve the strategic depth of a full squad when you are alone. That is why the systems are arranged the way they are: a second body and an AI holding it can stand in for the squad you do not have.\n\nThe intended shape of a good session is making a plan together, adapting when it falls apart, and finding a way through as a squad.",
      },
      {
        id: "husks-split",
        type: "data-table",
        heading: "How husks split by squad size",
        intro:
          "Body count is the main structural difference between playing alone and playing with friends:",
        columns: [
          { key: "size", label: "Squad size" },
          { key: "count", label: "Husks you get" },
          { key: "meaning", label: "What that means for you" },
        ],
        rows: [
          {
            size: "Solo",
            count: "2",
            meaning: "You control one, the AI controls the other",
          },
          {
            size: "Two players",
            count: "2 each",
            meaning: "You switch between your own two",
          },
          {
            size: "Four players",
            count: "1 each",
            meaning: "One husk per Operator, no AI body in reserve",
          },
        ],
        outro:
          "Players joining mid-session take over an available additional husk rather than waiting for the next deployment.\n\nThe practical reading is that body count shrinks as the squad grows, which is exactly right: the strategic depth of a full squad is meant to come from the people, not from each person carrying extra bodies. The full husk system — what a husk is, what the AI body is good for, and how to use a second body alone — is in the [husk system guide](/guides/husk-system).",
      },
      {
        id: "squad-equipment",
        type: "prose",
        heading: "Dividing the squad's equipment",
        body:
          "In a full squad the tactical layer is coordination and shared equipment. Gear is deliberately divided rather than duplicated, so four Operators are not all carrying four of everything:\n\n- One player carries the **motion tracker**.\n- Another carries a **heavy shield**.\n- Another relies on the **Ectometer** and the **spirit-heat scanners**.\n\nThat division is what produces the failure mode. If the scanner fails while the team is depending on it, the team is blind, and nobody else was carrying a spare. Deciding the assignment before you deploy is therefore a squad decision, not a personal one.",
      },
      {
        id: "four-person-op",
        type: "prose",
        heading: "Running a four-person operation",
        body:
          "Missions run as four-person operations, and voice communication matters. The work they call for is the same list every time, whichever anomaly is inside:\n\n- Watch for enemies that phase through solid matter.\n- Check corners.\n- Hold angles.\n- Cover doors.\n- Revive teammates.\n\nThis is the same squad shape that a containment run needs, and it is where the divided equipment above gets used. The full breakdown of a containment run — the order of operations, how detection actually works, and what a cleared site pays out — is in the [how to contain anomalies guide](/guides/containing-anomalies).",
      },
      {
        id: "shared-base",
        type: "prose",
        heading: "Hestia as a shared base",
        body:
          "Beyond the squad itself, Hestia acts as a shared base of operations. It is where the session ends up as often as the operation does, and what you do there is visible to the rest of the group:\n\n- Customize your H.U.S.K. and your cabin.\n- Showcase your weapons and armor to other players.\n- Modify your gear and body.\n- Get briefed on the main deck before the next anomaly hunt.\n\nThe modification bench is the important part for a squad, because gear is a shared dependency rather than a private one. How the resources that pay for modifications are earned, and what they actually upgrade, is covered in [quintessence upgrades](/guides/quintessence-upgrades).\n\nThe full Phantom Line is planned for Early Access with additional playtests before release. The Prologue is the free introductory chapter that leads into it, so what you are playing is the opening slice of a system that is still being built out.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["husk-system", "containing-anomalies", "quintessence-upgrades"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
];