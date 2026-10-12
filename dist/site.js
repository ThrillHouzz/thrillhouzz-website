const bg = "url('/assets/thrillhouzz-architecture-technology.png')";
const estateMountain = "url('/assets/estate-mountain.png')";
const estateOcean = "url('/assets/estate-ocean.png')";
const estateLake = "url('/assets/estate-lake.png')";
const designFirstTabletop = "url('/assets/design-first-heatmap-tabletop.png')";
const businessOffice = "url('/assets/business-office.png')";
const automationLiving = "url('/assets/automation-living-room.png')";
const networkBuilding = "url('/assets/network-building.png')";

const method = [
  ["Discover", "Understand the client, environment, goals, and objectives."],
  ["Design", "Translate intent into a coordinated technology plan."],
  ["Engineer", "Define infrastructure, systems, integration, and documentation."],
  ["Implement", "Build with accountability and coordinated trades."],
  ["Commission", "Verify the result against the original design."],
  ["Document", "Preserve the knowledge for future support."],
  ["Manage", "Monitor, maintain, and evolve the environment."]
];

const serviceLinks = [
  ["/business-technology/", "Business Technology"],
  ["/estate-technology/", "Estate Technology"],
  ["/estate-technology-management/", "Estate Technology Management"],
  ["/design-engineering/", "Design & Engineering"],
  ["/trade-partners-professionals/", "Trade Partners & Professionals"],
  ["/network-wireless/", "Network & Wireless"],
  ["/security-access/", "Security & Access"],
  ["/automation-lighting-experience/", "Automation, Lighting & Experience"],
  ["/infrastructure-systems-engineering/", "Infrastructure & Systems Engineering"],
  ["/client-support/", "Client Support"]
];

const iconPaths = {
  business: '<path d="M4 19h16M6 19V7h8v12M14 11h4v8M8 10h2M8 14h2"/>',
  estate: '<path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/>',
  design: '<path d="M4 18L18 4M7 21l14-14M4 18l3 3M6 16l2 2M13 5l6 6"/>',
  network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M11 7l-5 9M13 7l5 9M7 18h10"/>',
  security: '<path d="M12 3l8 4v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7l8-4Z"/><path d="M9 12l2 2 4-5"/>',
  automation: '<path d="M4 12h4M16 12h4M12 4v4M12 16v4"/><circle cx="12" cy="12" r="4"/>',
  lighting: '<path d="M9 18h6M10 21h4M8 10a4 4 0 1 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5Z"/>',
  audio: '<path d="M4 15h4l5 4V5L8 9H4v6Z"/><path d="M17 9c1 1 1 5 0 6M20 7c2 3 2 7 0 10"/>',
  infrastructure: '<path d="M5 5h14v4H5zM5 10h14v4H5zM5 15h14v4H5z"/><path d="M8 7h.01M8 12h.01M8 17h.01"/>',
  support: '<path d="M5 12a7 7 0 0 1 14 0v4a3 3 0 0 1-3 3h-2"/><path d="M5 13H3v4h2v-4ZM19 13h2v4h-2v-4Z"/><path d="M11 19h3"/>',
  documentation: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M9 12h6M9 16h6"/>',
  monitoring: '<path d="M3 17h4l3-10 4 14 3-8h4"/><path d="M4 21h16"/>',
  people: '<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0"/>',
  roadmap: '<path d="M5 19V5l5 3 5-3 4 2v14l-4-2-5 3-5-3Z"/><path d="M10 8v14M15 5v14"/>',
  power: '<path d="M13 2L5 14h6l-1 8 8-12h-6l1-8Z"/>',
  privacy: '<path d="M6 10V8a6 6 0 0 1 12 0v2M5 10h14v11H5z"/><path d="M12 14v3"/>',
  secondHome: '<path d="M2 19l7-12 3 5 3-4 7 11H2Z"/><path d="M6 19v-5l3-3M16 19l-3-5"/>',
  privateEstate: '<path d="M3 20h18M5 20v-7l3-5 3 5v7M13 20v-9l3-7 3 7v9M4 16h8M13 15h7"/>',
  portfolio: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-4 4-4 14 0 18M12 3c4 4 4 14 0 18"/>',
  maintenance: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  vendor: '<path d="M3 9l5-3 4 2 4-2 5 3-2 8-5 3-2-2-2 2-5-3-2-8Z"/><path d="M8 12l4 3 4-3"/>',
  climate: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0Z"/><path d="M12 9v9"/>',
  architect: '<path d="M3 21L12 3l9 18H3Z"/><path d="M8 17h8M12 8v9"/>',
  builder: '<path d="M3 16a9 9 0 0 1 18 0M6 16V9M18 16V9M2 16h20v3H2z"/>',
  interiors: '<path d="M4 20h16M7 20v-8h10v8M8 12l3-7h2l3 7M12 5V3"/>',
  integrator: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 7l4 10M17 7l-4 10M7 6h10"/>',
  default: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/>'
};

function iconFor(label, extraClass = "") {
  const text = String(label).toLowerCase();
  let key = "default";
  if (/business|managed|endpoint|identity|communications|office|company/.test(text)) key = "business";
  if (/estate|home|residence|property|portfolio|famil/.test(text)) key = "estate";
  if (/design|engineer|architect|drawing|plan|representation|procurement|acceptance/.test(text)) key = "design";
  if (/network|wireless|wi-fi|connect|fiber|wan|switch|internet/.test(text)) key = "network";
  if (/security|access|surveillance|intrusion|privacy|credential|camera|intercom/.test(text)) key = "security";
  if (/automation|control|scene|shade|environment|climate/.test(text)) key = "automation";
  if (/lighting|light/.test(text)) key = "lighting";
  if (/audio|video|entertainment|av/.test(text)) key = "audio";
  if (/infrastructure|rack|cabling|pathway|power|ups|room|foundation/.test(text)) key = /power|ups/.test(text) ? "power" : "infrastructure";
  if (/support|help|service|maintenance|client/.test(text)) key = "support";
  if (/document|records|knowledge|continuity|schedules|reports/.test(text)) key = "documentation";
  if (/monitor|health|performance|reliability|status/.test(text)) key = "monitoring";
  if (/people|team|staff|owner|user|trade|partner|contractor|manager/.test(text)) key = "people";
  if (/roadmap|lifecycle|future|evolve|change/.test(text)) key = "roadmap";
  if (/privacy/.test(text)) key = "privacy";
  if (/second home/.test(text)) key = "secondHome";
  if (/private estate/.test(text)) key = "privateEstate";
  if (/multi-property|portfolio|famil/.test(text)) key = "portfolio";
  if (/maintenance|updates|care/.test(text)) key = "maintenance";
  if (/vendor|trade coordination/.test(text)) key = "vendor";
  if (/climate|environment/.test(text)) key = "climate";
  if (/architect/.test(text)) key = "architect";
  if (/builder|general contractor|construction/.test(text)) key = "builder";
  if (/interior designer/.test(text)) key = "interiors";
  if (/integrator/.test(text)) key = "integrator";
  return `<svg class="site-icon ${extraClass}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[key]}</svg>`;
}

function diagramFor(label) {
  const text = String(label).toLowerCase();
  if (/wireless|wi-fi|network|coverage/.test(text)) {
    return `<svg class="diagram-svg heatmap" viewBox="0 0 240 150" aria-hidden="true"><rect x="18" y="18" width="204" height="114"/><path d="M18 55h204M70 18v114M132 18v114M180 55v77"/><circle class="heat heat-a" cx="118" cy="76" r="42"/><circle class="heat heat-b" cx="118" cy="76" r="25"/><circle class="pin" cx="118" cy="76" r="6"/><path d="M35 36h42M88 102h32M150 35h52M160 95h38"/></svg>`;
  }
  if (/camera|surveillance|security/.test(text)) {
    return `<svg class="diagram-svg camera-map" viewBox="0 0 240 150" aria-hidden="true"><rect x="20" y="20" width="200" height="110"/><path d="M20 58h200M80 20v110M150 20v110"/><path class="fov" d="M52 48l76 38-76 38Z"/><path class="fov" d="M185 58l-64 25 64 25Z"/><circle class="pin" cx="52" cy="86" r="5"/><circle class="pin" cx="185" cy="83" r="5"/></svg>`;
  }
  if (/rack|infrastructure|equipment|server/.test(text)) {
    return `<svg class="diagram-svg rack" viewBox="0 0 240 150" aria-hidden="true"><rect x="76" y="14" width="88" height="122"/><path d="M86 28h68M86 42h68M86 58h68M86 76h68M86 94h68M86 112h68"/><circle cx="94" cy="35" r="2"/><circle cx="94" cy="65" r="2"/><circle cx="94" cy="101" r="2"/><path class="wire" d="M154 35c35 0 35 80 0 80"/></svg>`;
  }
  if (/control|automation|lighting|scene/.test(text)) {
    return `<svg class="diagram-svg control" viewBox="0 0 240 150" aria-hidden="true"><rect x="28" y="28" width="184" height="94" rx="6"/><path d="M48 52h48M48 76h32M48 100h58"/><circle cx="142" cy="58" r="13"/><circle cx="178" cy="58" r="13"/><rect x="132" y="88" width="58" height="16" rx="8"/></svg>`;
  }
  if (/audio|video|layout/.test(text)) {
    return `<svg class="diagram-svg audio" viewBox="0 0 240 150" aria-hidden="true"><rect x="28" y="26" width="184" height="98"/><path d="M58 58h50v36H58zM136 48h44v56h-44z"/><circle cx="64" cy="36" r="5"/><circle cx="176" cy="36" r="5"/><circle cx="64" cy="116" r="5"/><circle cx="176" cy="116" r="5"/><path class="wire" d="M69 36c44 22 68 22 102 0M69 116c44-22 68-22 102 0"/></svg>`;
  }
  if (/document|schedule|report|redline|plans|floor|riser|architecture/.test(text)) {
    return `<svg class="diagram-svg sheet" viewBox="0 0 240 150" aria-hidden="true"><rect x="46" y="18" width="148" height="114"/><path d="M66 42h70M66 58h108M66 76h45M66 94h108M66 112h76"/><path class="redline" d="M132 75l18 16 28-36"/><circle class="pin" cx="150" cy="91" r="4"/></svg>`;
  }
  if (/support|dashboard|client|visibility|status|monitor/.test(text)) {
    return `<svg class="diagram-svg dashboard" viewBox="0 0 240 150" aria-hidden="true"><rect x="30" y="24" width="180" height="102" rx="8"/><path d="M48 48h58M48 72h38M48 96h62"/><rect x="128" y="44" width="24" height="24"/><rect x="162" y="44" width="24" height="24"/><rect x="128" y="82" width="58" height="18" rx="4"/></svg>`;
  }
  return `<svg class="diagram-svg blueprint-card" viewBox="0 0 240 150" aria-hidden="true"><rect x="24" y="20" width="192" height="108"/><path d="M50 104V48h54v26h38V48h48v56H50Z"/><path d="M24 54h192M78 20v108M144 20v108"/><circle class="pin" cx="144" cy="74" r="5"/></svg>`;
}

function docTile(label, tone = "light") {
  return `<div class="system-doc ${tone}">${diagramFor(label)}<span>${label}</span></div>`;
}

function designDisciplineCard(title, text) {
  return `<div><div class="discipline-graphic">${diagramFor(title)}</div><h3>${title}</h3><p>${text}</p></div>`;
}

function proofQuote(context = "design") {
  const quotes = {
    estate: "ThrillHouzz gave us a technology environment that feels effortless. The home is easier to live in, easier to support, and beautifully integrated.",
    design: "ThrillHouzz brought clarity, structure, and exceptional technical judgment to the project. The design made the build smoother and the finished result stronger.",
    partner: "Their coordination and documentation made our job easier and the final experience better for the client.",
    support: "We finally have one team that understands the whole environment and keeps it running."
  };
  return quotes[context] || quotes.design;
}

const pages = {
  "/business/": {
    eyebrow: "Business Technology",
    title: "IT Systems Your Business Can Depend On.",
    intro: "Managed IT, cybersecurity, networking, communications, and physical security for Colorado organizations that depend on their technology.",
    tags: ["Denver", "Colorado", "Managed services", "Assessment-led"],
    strip: ["Managed IT", "Cybersecurity", "Networking", "Communications", "Physical Security", "Documentation"],
    heading: "Built for businesses seeking an ongoing technology partner.",
    copy: "ThrillHouzz helps organizations move beyond informal support and reactive problem solving. We focus on recurring management, documentation, infrastructure, security, vendor coordination, and a calmer technology operating rhythm.",
    cards: [
      ["Managed Technology Services", "Infrastructure, users, communications, security, monitoring, support, documentation, and lifecycle planning.", "/managed-technology-services/"],
      ["Technology Assessment", "A clear review of systems, risks, ownership, documentation gaps, and near-term priorities.", "/business-technology-assessment/"],
      ["Connectivity & Security", "Network, wireless, access, surveillance, and support pathways aligned with business operations.", "/network-wireless/"]
    ]
  },
  "/business-technology/": null,
  "/managed-technology-services/": {
    eyebrow: "Managed Business Services",
    title: "An Ongoing Technology Relationship.",
    intro: "Managed technology services for Colorado businesses that need dependable systems, responsive support, and documentation that survives change.",
    tags: ["Support", "Monitoring", "Security", "Lifecycle planning"],
    strip: ["Help Desk", "Endpoints", "Identity", "Network", "Vendors", "Documentation"],
    heading: "Beyond someone to call when something breaks.",
    copy: "We manage the practical layer between people, vendors, devices, connectivity, security, and change. For new clients, we begin with discovery or assessment so support starts with context.",
    cards: [
      ["Business Continuity", "Support models, standards, and documentation that reduce operational fragility.", "/business-technology-assessment/"],
      ["Vendor Coordination", "ISP, communications, security, and platform coordination through one technology relationship.", "/start-a-project/"],
      ["Lifecycle Management", "Replacement planning, system standards, and ongoing improvement roadmaps.", "/our-approach/"]
    ]
  },
  "/business-technology-assessment/": {
    eyebrow: "Technology Assessment",
    title: "Understand Your Environment Before You Change It.",
    intro: "A comprehensive assessment of your IT, security, communications, and physical technology, identifying risks, blind spots, and clear next steps.",
    tags: ["Infrastructure", "Security", "Endpoints", "Documentation"],
    strip: ["Infrastructure", "Security", "Endpoints", "Communications", "Documentation", "Roadmap"],
    heading: "Designed for your business.",
    copy: "The assessment maps systems, risks, ownership, documentation gaps, vendor dependencies, and near-term priorities before managed services, office changes, provider transitions, or budget planning.",
    cards: [
      ["What You Receive", "System review, documentation findings, risk notes, and a prioritized roadmap.", "/start-a-project/"],
      ["Where It Helps", "New offices, provider changes, unmanaged environments, leadership transitions, and growth.", "/managed-technology-services/"],
      ["Next Step", "Use the assessment to decide what should be remediated, managed, replaced, or left alone.", "/start-a-project/"]
    ]
  },
  "/estate/": {
    eyebrow: "Estate Technology",
    title: "Extraordinary Homes Deserve Extraordinary Technology.",
    intro: "Networking, security, automation, lighting, entertainment, and infrastructure designed around the way you live and managed as one connected environment.",
    tags: ["Primary residences", "Second homes", "Private estates", "Multi-property families"],
    strip: ["Network", "Security", "Automation", "Lighting", "Audio & Video", "Infrastructure"],
    heading: "For the Entire Portfolio.",
    copy: "A single, knowledgeable technology partner for every property, on site or across the country. ThrillHouzz brings structure to networks, access, surveillance, lighting, AV, vendors, documentation, and owner or staff support.",
    cards: [
      ["New Construction", "Bring technology into planning early to avoid compromises and limitations underway.", "/design-engineering/"],
      ["Existing Residences", "Assessment, remediation, and upgrades that simplify current environments.", "/estate-assessment-remediation/"],
      ["Multi-Property", "Consistent technology standards and ongoing management across a portfolio.", "/estate-technology-management/"]
    ]
  },
  "/estate-technology/": null,
  "/estate-technology-management/": {
    eyebrow: "Estate Technology Management",
    title: "You Shouldn&rsquo;t Have to Know Who to Call.",
    intro: "Proactive management, ongoing support, and vendor coordination to keep your technology performing, secure, and effortless across your entire portfolio.",
    tags: ["Monitoring", "Maintenance", "Vendor management", "Documentation"],
    strip: ["Network & Wi-Fi", "Security & Access", "Automation", "Climate", "Infrastructure", "Support"],
    heading: "A smarter way to manage your home.",
    copy: "The gate is not opening. The internet is down. A camera went offline. The lighting is not behaving correctly. That should not become the homeowner's problem to diagnose. ThrillHouzz investigates and coordinates the right resource when another trade is responsible.",
    cards: [
      ["System Health & Reliability", "Continuous monitoring, alerts, preventative maintenance, and performance optimization.", "/client-support/"],
      ["Vendor Coordination", "One point of contact across builders, electricians, AV, security, landscape, ISP, and specialty trades.", "/trade-partners-professionals/"],
      ["Documentation & Continuity", "Clear records for homeowners, staff, property managers, and future service providers.", "/our-approach/"]
    ]
  },
  "/estate-assessment-remediation/": {
    eyebrow: "Estate Technology Assessment",
    title: "Clarity for the Home You Love.",
    intro: "A comprehensive evaluation of your home's technology systems, reliability gaps, vendor dependencies, and documentation before remediation begins.",
    tags: ["Network", "Security", "Automation", "Support"],
    strip: ["Network & Wi-Fi", "Security", "Access", "Lighting", "Audio & Video", "Infrastructure"],
    heading: "Existing system remediation.",
    copy: "When the technology is already there but is not working together, we assess what exists, recover documentation where possible, identify risks, and create a staged plan that improves reliability without turning the home into a construction project.",
    cards: [
      ["System Inventory", "Understand what is installed, connected, supported, unsupported, or unknown.", "/start-a-project/"],
      ["Remediation Plan", "Prioritize fixes by reliability, safety, security, usability, and lifecycle impact.", "/estate-technology-management/"],
      ["Support Handoff", "Create documentation and standards that make future service more efficient.", "/client-support/"]
    ]
  },
  "/design-engineering/": {
    eyebrow: "Design & Engineering",
    title: "System Technology, Thoughtfully Designed.",
    intro: "Independent technology design and engineering that translates your vision into coordinated, buildable systems.",
    tags: ["Network", "Wireless", "Security", "Automation", "Lighting", "Audio / Video", "Infrastructure"],
    strip: ["Network Design", "Security Engineering", "Infrastructure", "Automation", "Audio & Video", "Commissioning"],
    heading: "Design first. Products second.",
    copy: "The right technology starts with understanding the space, the people, and the desired experience, then engineering a system that works now and for the future. ThrillHouzz can design the environment whether we install it or another qualified contractor does.",
    cards: [
      ["Detailed Documentation", "Plans, risers, schedules, rack elevations, wireless designs, control narratives, redlines, and commissioning records.", "/our-approach/"],
      ["Independent Representation", "We can protect the owner's technology interests even when another contractor installs the system.", "/trade-partners-professionals/"],
      ["Built for Professionals", "Architects, builders, designers, electrical contractors, integrators, developers, estate managers, and family offices.", "/trade-partners-professionals/"]
    ]
  },
  "/trade-partners-professionals/": {
    eyebrow: "Trade Partners & Professionals",
    title: "Better Technology Starts With Better Collaboration.",
    intro: "We work alongside architects, builders, designers, and trade partners to translate client expectations into coordinated, documented, and buildable technology systems.",
    tags: ["Architects", "General contractors", "Interior designers", "Electrical contractors", "Integrators"],
    strip: ["Design Intent", "Change Orders", "Coordination", "Infrastructure", "Security", "Results"],
    heading: "Exceptional projects demand a coordinated approach.",
    copy: "Great technology does not happen by chance. We bring clarity, coordination, and technical expertise so systems integrate with the design intent, construction process, and client expectations.",
    cards: [
      ["Architects", "Preserve architectural intent while integrating technology early in the design process.", "/design-engineering/"],
      ["General Contractors", "Define technology scope, coordination requirements, and construction support.", "/start-a-project/"],
      ["Estate Managers & Family Offices", "Create continuity across vendors, properties, staff, and ongoing operations.", "/estate-technology-management/"]
    ]
  },
  "/owners-technology-representation/": {
    eyebrow: "Owner's Technology Representation",
    title: "Your Vision. Our Representation.",
    intro: "We represent your technology interests from concept to completion, ensuring every system, trade, and vendor is aligned, coordinated, and accountable.",
    tags: ["New construction", "Renovations", "Estates", "Multi-property"],
    strip: ["Owner Representation", "System Coordination", "Trade Alignment", "Budget Oversight", "Schedule Support", "Final Acceptance"],
    heading: "Who represents your technology?",
    copy: "Your architect represents the architecture. Your engineers represent their disciplines. Your GC manages construction. ThrillHouzz represents your technology from early planning and contractor selection through construction, commissioning, documentation, and long-term management.",
    cards: [
      ["Design Oversight", "Ensure approved designs are maintained through construction.", "/design-engineering/"],
      ["Trade Coordination", "Align architects, GCs, electrical contractors, integrators, and specialty vendors.", "/trade-partners-professionals/"],
      ["Final Acceptance", "Verify system performance, documentation, and training before handover.", "/our-approach/"]
    ]
  },
  "/network-wireless/": {
    eyebrow: "Network & Wireless",
    title: "Connectivity Is Infrastructure, Not an Accessory.",
    intro: "Engineered networks and Wi-Fi environments for high-performance homes, businesses, and complex properties.",
    tags: ["Network design", "Wireless engineering", "Fiber", "Monitoring"],
    strip: ["Network Design", "Wi-Fi Engineering", "Fiber & Cabling", "Switching", "Redundancy", "Monitoring"],
    heading: "Engineered for performance.",
    copy: "The network is the foundation for almost every modern experience. We design and support it with coverage, reliability, segmentation, remote access, documentation, and future change in mind.",
    cards: [
      ["Coverage & Capacity", "Wireless planning for real buildings, real materials, and real usage patterns.", "/start-a-project/"],
      ["Structured Infrastructure", "Fiber, cabling, racks, pathways, and equipment spaces planned together.", "/infrastructure-systems-engineering/"],
      ["Management", "Monitoring, documentation, support access, and lifecycle standards.", "/managed-technology-services/"]
    ]
  },
  "/security-access/": {
    eyebrow: "Security & Access",
    title: "People, Property, and Privacy Protected.",
    intro: "Enterprise security and access control systems designed for reliability, situational awareness, and peace of mind.",
    tags: ["Video", "Access", "Intrusion", "Intercom"],
    strip: ["Video Surveillance", "Access Control", "Intrusion", "Intercom", "Monitoring", "Vendor Coordination"],
    heading: "Security that works together.",
    copy: "We design and integrate security systems that serve the environment without becoming intrusive. Cameras, analytics, access control, intrusion, monitoring, and remote access are coordinated around the people who use the property.",
    cards: [
      ["Physical Security", "Surveillance, entry, credentials, monitoring, and response pathways.", "/start-a-project/"],
      ["Privacy & Access", "Clear roles, responsible access, and supportable credential workflows.", "/client-support/"],
      ["Documentation", "Records that help owners, staff, and future providers understand the system.", "/our-approach/"]
    ]
  },
  "/automation-lighting-experience/": {
    eyebrow: "Automation, Lighting & Experience",
    title: "Technology That Enhances How You Live and Work.",
    intro: "Whether you are growing your home automation office or refining a complex property experience, the system should feel natural.",
    tags: ["Lighting", "Shading", "Audio & Video", "Unified Control"],
    strip: ["Lighting Control", "Shading", "Audio & Video", "Environmental", "Unified Control", "Scene Automation"],
    heading: "A more connected experience.",
    copy: "We design technology that supports the way people actually use a space. Lighting, shades, audio, climate, controls, and automation are integrated so the experience feels refined instead of complicated.",
    cards: [
      ["Experience Design", "Translate desired moods, scenes, and routines into buildable control logic.", "/design-engineering/"],
      ["Integration", "Coordinate automation with network, security, lighting, audio, climate, and infrastructure.", "/infrastructure-systems-engineering/"],
      ["Supportability", "Commission, document, and manage the system so it remains understandable.", "/our-approach/"]
    ]
  },
  "/infrastructure-systems-engineering/": {
    eyebrow: "Infrastructure & Systems Engineering",
    title: "The Foundation for Everything.",
    intro: "Structured, documented, and scalable infrastructure designed to support today's needs and tomorrow's possibilities.",
    tags: ["Cabling", "Racks", "Power", "Documentation"],
    strip: ["Cabling", "Pathways", "Racks", "Power & UPS", "Documentation", "Lifecycle"],
    heading: "Engineered behind the scenes.",
    copy: "Infrastructure decisions shape every future service call, renovation, ownership transition, and user experience. We plan pathways, equipment spaces, rack elevations, labeling, environmental needs, power, and service access.",
    cards: [
      ["Rack & Room Planning", "Equipment rooms, thermal considerations, power, distribution, and service access.", "/design-engineering/"],
      ["Pathway Coordination", "Low-voltage pathways, conduit, sleeves, and construction coordination.", "/trade-partners-professionals/"],
      ["Future Operations", "Documentation and standards that make future work less disruptive.", "/our-approach/"]
    ]
  },
  "/about/": {
    eyebrow: "About ThrillHouzz",
    title: "Technology Is Complicated. Working With Us Shouldn&rsquo;t Be.",
    intro: "We design, integrate, and support technology environments for businesses, estates, and complex properties, making them secure, reliable, and accountable.",
    tags: ["Expertise", "Accountability", "Partnership", "Documentation"],
    strip: ["Independent Expertise", "Cross-Discipline Knowledge", "Accountability", "Long-Term Partnership", "Documentation", "Management"],
    heading: "Built on real-world experience.",
    copy: "ThrillHouzz was founded on decades of experience designing environments for homeowners, business leaders, and professional organizations. Our role is to bring clarity between the client's objectives and the systems that support them.",
    cards: [
      ["Our Approach", "Start with outcomes, engineer the system, document the knowledge, and manage the lifecycle.", "/our-approach/"],
      ["Professional Collaboration", "Work with architects, GCs, designers, integrators, estate managers, and family offices.", "/trade-partners-professionals/"],
      ["Support", "Preserve continuity through clear documentation and accountable management.", "/client-support/"]
    ]
  },
  "/our-approach/": {
    eyebrow: "Our Approach",
    title: "Start With the Outcome.",
    intro: "A structured process that turns your vision into a coordinated, well-documented, and high-performing technology environment.",
    tags: ["Discover", "Design", "Engineer", "Implement", "Commission", "Document", "Manage"],
    strip: ["Discover", "Design", "Engineer", "Implement", "Commission", "Document"],
    heading: "More than installation. A better process.",
    copy: "Our approach reduces risk, improves communication, and ensures your technology works together now and for the future. We do not start with equipment. We start with you.",
    cards: [
      ["Conversation", "Understand the people, property, business, budget, risks, and desired experience.", "/start-a-project/"],
      ["Engineering", "Convert intent into infrastructure, system architecture, coordination, and documentation.", "/design-engineering/"],
      ["Management", "Protect the investment with monitoring, maintenance, support, and lifecycle planning.", "/estate-technology-management/"]
    ]
  },
  "/projects/": "projects",
  "/case-study/": "case",
  "/technology-partners/": {
    eyebrow: "Technology Partners",
    title: "Technology Selected for the Environment.",
    intro: "Manufacturer relationships do not define our designs. Requirements do.",
    tags: ["Networking", "Security", "Automation", "Communications"],
    strip: ["Networking", "Security", "Communications", "Automation", "Lighting", "Entertainment"],
    heading: "Selected for reliability, supportability, and fit.",
    copy: "ThrillHouzz works across networking, security, communications, automation, lighting, and entertainment ecosystems. We select technologies based on the environment, integration requirements, reliability, supportability, and long-term objectives.",
    cards: [
      ["Fit First", "Systems are selected around requirements, not public partner lists.", "/our-approach/"],
      ["Integration", "The important question is how the technologies interact.", "/design-engineering/"],
      ["Lifecycle", "Supportability and documentation matter as much as feature lists.", "/client-support/"]
    ]
  },
  "/insights/": {
    eyebrow: "Insights",
    title: "Guidance for Complex Technology Environments.",
    intro: "Practical thinking for owners, estate teams, business leaders, and professionals planning technology for extraordinary places.",
    tags: ["Documentation", "Design", "Operations", "Continuity"],
    strip: ["Planning", "Design", "Support", "Documentation", "Security", "Lifecycle"],
    heading: "Editorial guidance for owners and project teams.",
    copy: "Perspective on design timing, documentation, stewardship, security, and the decisions that make complex technology environments easier to own.",
    cards: [
      ["Documentation Is a Luxury Feature", "Why complex properties need knowledge that outlives vendors and staff.", "/our-approach/"],
      ["Technology Design Belongs Early", "How early coordination protects architecture, budgets, and user experience.", "/design-engineering/"],
      ["Estate Technology Becomes Fragile", "How portfolios drift over time and how stewardship restores continuity.", "/estate-technology-management/"]
    ]
  },
  "/client-support/": {
    eyebrow: "Client Support",
    title: "Already a ThrillHouzz Client?",
    intro: "Access support, resources, and help to keep your technology running smoothly.",
    tags: ["Request support", "Remote support", "Emergency assistance", "Client portal"],
    strip: ["Schedule Service", "Client Portal", "Remote Support", "System Resources", "Training", "Service Guide"],
    heading: "We are here to keep you running.",
    copy: "Existing clients can use this prototype support intake to describe the affected location, system, urgency, and best contact path. In production, this should connect to Odoo Helpdesk or the selected support workflow.",
    form: "support"
  },
  "/contact/": {
    eyebrow: "Contact",
    title: "Tell Us What You&rsquo;re Trying to Accomplish.",
    intro: "You do not need to know the equipment, system, or contractor. Start with the outcome.",
    tags: ["Business", "Estate", "Design", "Support"],
    strip: ["Business", "Estate", "Design", "Assessment", "Support", "General"],
    heading: "Begin with context.",
    copy: "Tell us about the property, business, portfolio, or project. We will route the conversation from there.",
    form: "contact"
  },
  "/start-a-project/": {
    eyebrow: "Start a Project",
    title: "Tell Us What You&rsquo;re Trying to Accomplish.",
    intro: "Every great project starts with a conversation. Share a few details and we will guide you to the right next step.",
    tags: ["Business technology", "Residence or estate", "Design & engineering", "Assessment"],
    strip: ["Business Discovery", "Residence / Estate", "Design & Engineering", "Assessment", "Support", "Next Step"],
    heading: "Start with the outcome.",
    copy: "You do not need to know which equipment you need. You do not need to know which contractor you need. You do not even need to know exactly which system is causing the problem.",
    form: "project"
  }
};
pages["/business-technology/"] = pages["/business/"];
pages["/estate-technology/"] = pages["/estate/"];

function home() {
  return `
    <div class="home-page">
    <section class="hero">
      <div class="blueprint-labels"><span>Networking</span><span>Automation</span><span>Security</span><span>Lighting</span><span>Audio / Video</span><span>Infrastructure</span></div>
      <div class="hero-inner">
        <div class="eyebrow">Design &bull; Integration &bull; Management</div>
        <h1>Technology for <strong>Extraordinary Places.</strong></h1>
        <p>Technology design, integration, and management for businesses, private residences, and complex environments.</p>
        <div class="motif">DESIGN &bull; INTEGRATE &bull; SUPPORT</div>
        <div class="hero-ctas"><a class="button" href="/our-approach/">Explore Our Practices</a><a class="button secondary" href="/start-a-project/">Start a Project</a></div>
        <div class="geo-line">DENVER &bull; COLORADO &bull; SELECT PROJECTS NATIONWIDE</div>
      </div>
    </section>
    <section class="practice-tiles">
      ${practiceTile("B", "Business Technology", "IT Systems Your Business Can Depend On.", "Managed IT, cybersecurity, networking, communications, and physical security for Colorado organizations.", "/business/", "center left")}
      ${practiceTile("E", "Estate Technology", "Simplistic Connectivity for the Entire Portfolio.", "Networking, security, automation, lighting, entertainment, and infrastructure for luxury residences and sophisticated homes.", "/estate/", "center")}
      ${practiceTile("D", "Design & Engineering", "System Technology, Thoughtfully Designed.", "Independent technology engineering, documentation, programming, and owner's representation for projects nationwide.", "/design-engineering/", "center right")}
    </section>
    <section class="section light">
      <div class="wrap split">
        <div><div class="kicker">Our Philosophy</div><h2>We Don&rsquo;t Start With Equipment. <strong>We Start With You.</strong></h2></div>
        <div>
          <p class="lead">Before selecting a platform, device, or manufacturer, we need to understand the environment it is supposed to serve.</p>
          <div class="question-grid">
            ${["How do you live or work here?","What should happen automatically?","What needs to remain secure?","How should this environment evolve?","Who will understand it five years from now?"].map(item => `<div class="q-item">${iconFor(item)}<strong>${item}</strong></div>`).join("")}
          </div>
          <p class="pull">Technology should adapt to the people using it, not require people to adapt to the technology.</p>
        </div>
      </div>
    </section>
    <section class="section navy">
      <div class="wrap model-comparison">
        <div><div class="kicker">The Problem</div><h2>Complex Technology Needs Clear Accountability.</h2><p>Modern environments depend on dozens of interconnected systems, yet those systems are often designed, installed, and maintained by completely different companies.</p></div>
        ${modelPanel("Traditional Model", "Client")}
        ${modelPanel("Our Model", "ThrillHouzz  |  Client")}
      </div>
    </section>
    <section class="section light">
      <div class="wrap">
        <div class="split"><div><div class="kicker">The ThrillHouzz Method</div><h2>From Conversation to Continuous Management.</h2></div><p class="lead">A successful technology environment is not created during installation. It begins before equipment is selected and continues long after commissioning.</p></div>
        ${methodHtml()}
      </div>
    </section>
    <section class="capability-band">
      <div class="wrap"><div class="kicker">One Environment. Multiple Disciplines.</div><div class="capability-grid">${capabilities().map(capCard).join("")}</div></div>
    </section>
    <section class="section light">
      <div class="wrap feature-row"><div class="copy-panel"><div class="kicker">Beyond Installation</div><h2>Installation Is the Beginning. Not the End.</h2><p class="lead">ThrillHouzz provides ongoing management designed to preserve system performance, documentation, security, and continuity over time.</p><a class="button secondary" href="/managed-technology-services/">Explore Managed Business Services</a></div><div class="copy-panel"><div class="kicker">Estate Management</div><h2>You Shouldn&rsquo;t Have to Know Who to Call.</h2><p class="lead">We investigate the issue and, when another trade is responsible, help coordinate the appropriate resource.</p><a class="button secondary" href="/estate-technology-management/">Discover Estate Management</a></div></div>
    </section>
    <section class="section cream">
      <div class="wrap split">
        <div><div class="kicker">Continuity</div><h2>Your Technology Shouldn&rsquo;t Depend on Someone&rsquo;s Memory.</h2></div>
        <div><p class="lead">Complex technology environments often outlive the people who originally designed them. Technicians change. Employees change. Contractors change. Equipment changes. The property changes.</p><p>Without proper documentation and ongoing management, every service call risks becoming another discovery project.</p><p class="pull">The goal is not simply to make technology work today. It is to keep it understandable tomorrow.</p></div>
      </div>
    </section>
    <section class="section navy">
      <div class="wrap management-feature">
        <div>
          <div class="kicker">Estate Technology Management</div>
          <h2>You Shouldn&rsquo;t Have to Know Who to Call.</h2>
          <p class="lead">The gate is not opening. The internet is down. A camera went offline. The lighting is not behaving correctly. The television stopped working. A new device needs to be connected.</p>
          <p>The problem may involve networking, electrical, automation, an ISP, security, AV, or another contractor. That should not become the homeowner&rsquo;s problem to diagnose.</p>
          <a class="button bronze" href="/estate-technology-management/">Explore Estate Management</a>
        </div>
        <div class="support-points">
          ${["One call for any technology issue.","We diagnose, resolve, or coordinate.","Your systems remain documented and understood."].map(item => `<div>${iconFor(item)}<span>${item}</span></div>`).join("")}
        </div>
      </div>
    </section>
    <section class="section light">
      <div class="wrap feature-row">
        <div class="copy-panel">
          <div class="kicker">Design & Engineering</div>
          <h2>Good Technology Starts Before Installation.</h2>
          <p class="lead">Technology decisions made late in a project often create unnecessary compromises, change orders, aesthetic conflicts, and infrastructure limitations.</p>
          <p>ThrillHouzz develops technology architecture, coordinates requirements between disciplines, creates documentation, assists with contractor selection, reviews implementation, and commissions the finished environment.</p>
          <a class="button secondary" href="/design-engineering/">Explore Design Services</a>
        </div>
        <div class="photo-panel"></div>
      </div>
    </section>
    <section class="section navy">
      <div class="wrap split">
        <div><div class="kicker">Owner's Technology Representation</div><h2>Someone Should Represent the Owner&rsquo;s Technology Interests.</h2><p class="lead">Architects protect the architectural vision. Interior designers protect the aesthetic. Engineers protect their disciplines. General contractors manage construction. ThrillHouzz can represent the technology.</p><a class="button bronze" href="/owners-technology-representation/">Owner's Technology Representation</a></div>
        <div class="timeline-row">${["Planning","Design","Procurement","Construction","Commissioning","Acceptance","Management"].map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${iconFor(item)}<strong>${item}</strong></div>`).join("")}</div>
      </div>
    </section>
    <section class="section light">
      <div class="wrap">
        <div class="split"><div><div class="kicker">For Professionals</div><h2>Built to Work With Your Team.</h2></div><p class="lead">ThrillHouzz collaborates with architects, general contractors, interior designers, electrical contractors, technology integrators, developers, estate managers, and family offices.</p></div>
        <div class="partner-grid">${partners().map(([title, text]) => `<div>${iconFor(title)}<h3>${title}</h3><p>${text}</p></div>`).join("")}</div>
        <a class="button secondary" href="/trade-partners-professionals/">Work With ThrillHouzz</a>
      </div>
    </section>
    <section class="section light">
      <div class="wrap">
        <div class="kicker">Selected Work</div>
        <h2>Designed Around the Environment.</h2>
        <div class="selected-grid">${[
          ["Professional Technology Environment", "Business", "A coordinated technology environment for a growing organization, combining managed systems, network reliability, communications, cybersecurity, and physical security.", businessOffice],
          ["Private Estate Technology", "Estate", "A fully integrated private estate environment designed around privacy, performance, simplicity, and long-term support.", estateMountain],
          ["Whole-Property Technology Engineering", "Design", "A design-first engagement aligning architecture, infrastructure, wireless, security, controls, and documentation before construction.", estateOcean]
        ].map(([title, label, text, image]) => `<a class="project-card" href="/case-study/?project=${label === "Business" ? "peak-law-firm" : label === "Estate" ? "north-lake-tahoe-estate" : "ocean-bluff-estate-design"}"><div class="project-visual" style="--photo:${image}"></div><div class="project-copy">${iconFor(title)}<div class="label">${label}</div><h3>${title}</h3><p>${text}</p><span class="text-link">View Project</span></div></a>`).join("")}</div>
      </div>
    </section>
    <section class="section cream">
      <div class="wrap split">
        <div><div class="kicker">Technology</div><h2>Technology Selected for the Environment.</h2></div>
        <div><p class="lead">ThrillHouzz works with leading technology manufacturers across networking, security, communications, automation, lighting, and entertainment. But manufacturer relationships do not define our designs. Requirements do.</p><a class="button secondary" href="/technology-partners/">Explore Technology Partners</a></div>
      </div>
    </section>
    <section class="section light">
      <div class="wrap">
        <div class="kicker">Geography</div>
        <h2>Colorado Based. Project Driven.</h2>
        <div class="geo-grid">
          <div>${iconFor("Business Technology")}<h3>Business Technology</h3><p>Primarily serving businesses throughout Denver and Colorado&rsquo;s Front Range.</p></div>
          <div>${iconFor("Estate Technology")}<h3>Estate Technology</h3><p>Serving Colorado residences and select private estate projects throughout the United States.</p></div>
          <div>${iconFor("Design Engineering")}<h3>Design & Engineering</h3><p>Available nationally for qualified residential, commercial, and professional design engagements.</p></div>
        </div>
      </div>
    </section>
    <section class="section navy"><div class="wrap split"><div><div class="kicker">Start With the Outcome</div><h2>What Are You Trying to Accomplish?</h2></div><div><p class="lead">Start by telling us what you are trying to accomplish. We will begin there.</p><a class="button bronze" href="/start-a-project/">Start a Project</a><a class="button bronze" href="/client-support/" style="margin-left:12px">Request Support</a></div></div></section>
    </div>`;
}

function practiceTile(icon, label, title, text, href, pos) {
  const photo = label.startsWith("Estate") ? estateMountain : label.startsWith("Design") ? designFirstTabletop : businessOffice;
  return `<a class="practice-tile" style="--bg:${photo};background-position:${pos}" href="${href}"><div><div class="mini-icon">${iconFor(label)}</div><div class="label">${label}</div><h3>${title}</h3><p>${text}</p><span class="text-link">Explore ${label.split(" ")[0]}</span></div></a>`;
}

function modelPanel(title, target) {
  const trades = ["Internet Provider", "IT Company", "Security Contractor", "AV Integrator", "Electrician", "Automation Specialist", "Lighting Contractor", "HVAC Contractor", "Gate Company"];
  return `<div class="model-panel"><div class="kicker">${title}</div><div class="trade-list">${trades.map(t => `<span>${iconFor(t)}<em>${t}</em></span>`).join("")}</div><div class="model-target">${target}</div></div>`;
}

function methodHtml() {
  return `<div class="method">${method.map((m, i) => `<div class="step"><span>${String(i + 1).padStart(2, "0")}</span>${iconFor(m[0])}<strong>${m[0]}</strong><p>${m[1]}</p></div>`).join("")}</div>`;
}

function capabilities() {
  return [
    ["Connectivity", "Network architecture, wireless engineering, fiber, WAN, redundancy, and remote access."],
    ["Security", "Video surveillance, access control, intrusion, monitoring, intercom, and perimeter systems."],
    ["Experience", "Automation, lighting control, shading, audio, video, environment, and unified control."],
    ["Business Technology", "Managed IT, cybersecurity, endpoint management, communications, identity, and support."],
    ["Infrastructure", "Equipment rooms, racks, distribution, power, UPS, pathways, and documentation."],
    ["Engineering", "Technology planning, system design, programming, construction coordination, and commissioning."]
  ];
}

function partners() {
  return [
    ["Architects", "Integrate technology requirements before they compromise architectural intent."],
    ["General Contractors", "Create a coordinated technology scope that can be planned, scheduled, and executed."],
    ["Interior Designers", "Integrate controls, speakers, displays, security devices, and technology without sacrificing design."],
    ["Electrical Contractors", "Coordinate pathways, power, controls, low-voltage systems, equipment locations, and infrastructure."],
    ["Technology Integrators", "Add engineering, documentation, programming, or specialized capabilities to complex projects."],
    ["Estate Managers & Family Offices", "Create continuity across technology, vendors, properties, staff, and ongoing operations."]
  ];
}

function capCard([title, text]) {
  return `<div class="cap-card">${iconFor(title)}<h3>${title}</h3><p>${text}</p></div>`;
}

function routePage(page, path) {
  if (path === "/design-engineering/") return designEngineeringPage(page, path);
  if (path === "/estate-technology-management/") return estateManagementPage(page);
  if (path === "/owners-technology-representation/") return ownersRepresentationPage(page);
  if (path === "/estate/" || path === "/estate-technology/") return estateTechnologyPage(page);
  if (path === "/trade-partners-professionals/") return tradePartnersPage(page);
  if (path === "/about/") return aboutPage();
  if (path === "/our-approach/") return approachPage();
  if (path === "/start-a-project/") return startProjectPage();
  if (path === "/client-support/") return clientSupportPage();
  return `
    <div class="route-page route-${path.replaceAll("/", "")}">
      <section class="route-hero ${heroClass(path)}" style="--route-photo:${routePhoto(path)}">
        <div class="blueprint-labels">${(page.strip || []).slice(0,6).map(s => `<span>${s}</span>`).join("")}</div>
        <div class="hero-line-art">${diagramFor(page.title + " " + page.strip.join(" "))}</div>
        <div class="wrap">
          <div class="eyebrow">${page.eyebrow}</div>
          <h1>${emphasis(page.title)}</h1>
          <p>${page.intro}</p>
          <div class="route-tags">${page.tags.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="hero-ctas"><a class="button" href="/start-a-project/">Start a Conversation</a><a class="button secondary" href="/our-approach/">Explore Our Process</a></div>
        </div>
      </section>
      <section class="service-strip">${page.strip.map(s => `<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</section>
      <section class="section light">
        <div class="wrap route-layout">
          <article>
            <div class="split"><div><div class="kicker">Overview</div><h2>${page.heading}</h2></div><div><p class="lead">${page.copy}</p>${page.form ? form(page.form) : ""}</div></div>
            ${page.form ? "" : `<div class="thumb-grid">${page.cards.map(([title, text, href]) => thumb(title, text, href)).join("")}</div>`}
            ${pageSpecific(path, page)}
          </article>
        </div>
      </section>
    </div>`;
}

function aboutPage() {
  const values = [
    ["Independent Expertise", "Technology recommendations start with requirements."],
    ["Cross-Discipline Knowledge", "Systems are considered as one environment."],
    ["Accountability", "Clear ownership through every phase."],
    ["Long-Term Partnership", "Documentation and stewardship preserve continuity."]
  ];
  return `<div class="route-page editorial-page about-page">
    <section class="route-hero editorial-hero" style="--route-photo:${estateOcean}"><div class="wrap"><div class="eyebrow">About ThrillHouzz</div><h1>Technology Is Complicated.<br><strong>Working With Us Shouldn&rsquo;t Be.</strong></h1><p>We design, integrate, and support technology environments for businesses, residences, estates, and complex projects nationwide.</p><div class="hero-ctas"><a class="button" href="/our-approach/">Our Story &amp; Approach</a><a class="button secondary" href="/start-a-project/">Start a Conversation</a></div></div></section>
    <section class="editorial-values">${values.map(([title,copy])=>`<div>${iconFor(title)}<strong>${title}</strong><p>${copy}</p></div>`).join("")}</section>
    <section class="editorial-split"><div class="editorial-photo" style="--photo:${estateLake}"></div><div><div class="kicker">Built on Real-World Experience</div><h2>Technology Should Feel Clear, Accountable, and Supportable.</h2><p>ThrillHouzz connects the design vision, the systems, the trades, and the people who depend on the environment every day. We start by understanding the outcome, then engineer a coordinated path toward it.</p><a class="button secondary" href="/our-approach/">Explore Our Approach</a></div></section>
    <section class="editorial-close"><div class="kicker">Design &bull; Integrate &bull; Support</div><h2>One Relationship Across the Entire Environment.</h2><p>From early design through commissioning and long-term management, we keep technology understandable and accountable.</p><a class="button bronze" href="/start-a-project/">Start a Conversation</a></section>
  </div>`;
}

function approachPage() {
  return `<div class="route-page editorial-page approach-page">
    <section class="route-hero editorial-hero" style="--route-photo:${designFirstTabletop}"><div class="wrap"><div class="eyebrow">Our Approach</div><h1>Start With the Outcome.</h1><p>A structured, proven process that turns your vision into a coordinated, well-documented, and high-performing technology environment.</p><div class="hero-ctas"><a class="button" href="#method">Explore the Process</a></div></div></section>
    <section class="approach-method" id="method">${method.map(([title,copy],i)=>`<div><span>${String(i+1).padStart(2,"0")}</span>${iconFor(title)}<strong>${title}</strong><p>${copy}</p></div>`).join("")}</section>
    <section class="editorial-split"><div class="editorial-photo" style="--photo:${estateLake}"></div><div><div class="kicker">Beyond Installation</div><h2>More Than Installation. A Better Process.</h2><p>Technology should remain coherent long after the installation team leaves. Our process protects design intent, creates clear documentation, and keeps support and lifecycle planning in view from the beginning.</p><a class="button secondary" href="/start-a-project/">See How We Begin</a></div></section>
    <section class="editorial-close"><div class="kicker">Continuity by Design</div><h2>Discover. Design. Engineer. Implement. Commission. Document. Manage.</h2><a class="button bronze" href="/design-engineering/">Explore Design &amp; Engineering</a></section>
  </div>`;
}

function startProjectPage() {
  const paths = [
    ["Business Technology", "IT, security, communications, support, and documentation.", businessOffice],
    ["Residence / Estate", "Networking, control, security, and long-term stewardship.", estateMountain],
    ["Design & Engineering", "Technology planning, documentation, and representation.", designFirstTabletop]
  ];
  return `<div class="route-page editorial-page start-page">
    <section class="route-hero editorial-hero" style="--route-photo:${estateOcean}"><div class="wrap"><div class="eyebrow">Start a Project</div><h1>Tell Us What You&rsquo;re<br><strong>Trying to Accomplish.</strong></h1><p>Every great project starts with a conversation. Share a few details and we will guide you to the right next step.</p><div class="hero-ctas"><a class="button" href="#project-inquiry">Start the Conversation</a></div></div></section>
    <section class="start-paths">${paths.map(([title,copy,photo])=>`<a href="#project-inquiry"><div style="--photo:${photo}"></div>${iconFor(title)}<h2>${title}</h2><p>${copy}</p><span class="text-link">Discuss This Path</span></a>`).join("")}</section>
    <section class="start-backdrop" style="--photo:${businessOffice}"><div><div class="kicker">Start With the Outcome</div><h2>You Don&rsquo;t Need to Know Which Equipment You Need.</h2><p>Tell us about the business, property, portfolio, or project, and the experience you want to create.</p></div></section>
    <section class="start-inquiry" id="project-inquiry"><div><div class="kicker">Begin Here</div><h2>What Are You Trying to Accomplish?</h2><p>Include the location, stage of the project, and what would make the outcome successful.</p></div>${form("project")}</section>
  </div>`;
}

function clientSupportPage() {
  const supportItems = ["Request Support", "Emergency Assistance", "Remote Support", "Schedule Service", "System Resources", "Training", "Contact Us", "Service Guides"];
  return `<div class="route-page editorial-page support-page">
    <section class="route-hero editorial-hero" style="--route-photo:${bg}"><div class="wrap"><div class="eyebrow">Client Support</div><h1>Already a ThrillHouzz<br><strong>Client?</strong></h1><p>Access support, resources, and tools to help your systems run smoothly.</p><div class="hero-ctas"><a class="button" href="#support-request">Request Support</a><a class="button secondary" href="#support-request">Emergency Assistance</a><a class="button secondary" href="#support-resources">Remote Support</a></div></div></section>
    <section class="support-options" id="support-resources">${supportItems.map(s=>`<a href="#support-request">${iconFor(s)}<strong>${s}</strong></a>`).join("")}</section>
    <section class="editorial-split"><div class="editorial-photo" style="--photo:${estateLake}"></div><div><div class="kicker">We're Here to Keep You Running</div><h2>One Team That Knows the Environment.</h2><p>Describe what is happening and where. We will use the system documentation and support history to help find the right next step.</p><a class="button secondary" href="#support-request">Go to Support Request</a></div></section>
    <section class="start-inquiry" id="support-request"><div><div class="kicker">Existing Clients</div><h2>How Can We Help?</h2><p>For immediate concerns, use the support channel already provided in your service agreement.</p></div>${form("support")}</section>
  </div>`;
}

function estateTechnologyPage(page) {
  const systems = ["Network", "Security", "Automation", "Lighting", "Audio & Video", "Environment", "Access", "Infrastructure"];
  const settings = [
    ["New Construction", "Get It Right From the Start.", "Technology belongs in the planning process early, before compromises and change orders.", estateMountain, "/design-engineering/"],
    ["Existing Residences", "Modernize and Simplify.", "Assessment, remediation, and upgrades that improve reliability and simplicity.", estateOcean, "/estate-assessment-remediation/"],
    ["Multi-Property", "Consistent Technology. Everywhere.", "A unified strategy and ongoing management for multiple homes and properties.", estateLake, "/estate-technology-management/"]
  ];
  return `<div class="route-page estate-technology-page">
    <section class="route-hero estate-hero" style="--route-photo:${estateMountain}"><div class="blueprint-labels">${["Networking","Security","Automation","Lighting","Audio / Video","Infrastructure"].map(s=>`<span>${s}</span>`).join("")}</div><div class="wrap"><div class="eyebrow">Estate Technology</div><h1>Extraordinary Homes<br>Deserve <strong>Extraordinary<br>Technology.</strong></h1><p>Networking, security, automation, lighting, entertainment, and infrastructure designed around the way you live and managed as one connected environment.</p><div class="route-tags">${["Primary Residences","Second Homes","Private Estates","Multi-Property Families"].map(s=>`<span>${s}</span>`).join("")}</div><div class="hero-ctas"><a class="button" href="/start-a-project/">Start a Conversation</a><a class="button secondary" href="#estate-services">Explore Estate Services</a></div></div></section>
    <section class="estate-portfolio-intro"><div><div class="kicker">Simplistic Connectivity</div><h2>For the Entire Portfolio.</h2><p>A single, knowledgeable technology partner for every property, on site or across the country.</p></div><div class="portfolio-intro-icons">${["Primary Residences","Second Homes","Private Estates","Multi-Property Families"].map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div></section>
    <section class="estate-systems" id="estate-services"><div class="kicker">One Environment. Everything Works Together.</div><div class="system-icons">${systems.map(s=>`<a href="${/network/i.test(s)?"/network-wireless/":/security|access/i.test(s)?"/security-access/":/infrastructure/i.test(s)?"/infrastructure-systems-engineering/":"/automation-lighting-experience/"}">${iconFor(s)}<span>${s}</span></a>`).join("")}</div><a class="button bronze" href="/start-a-project/">Explore Estate Technology</a></section>
    <section class="estate-approach"><div class="estate-approach-photo" style="--photo:${estateLake}"></div><div><div class="kicker">Our Approach</div><h2>Designed Around<br>How You Live.</h2><p>We begin by understanding your lifestyle, the property, and what you want to happen effortlessly, then engineer the technology to support it.</p></div><ul class="check-list">${["Discreet and intuitive","Reliable and secure","Integrated across systems","Designed for long-term management","Documented for the future"].map(s=>`<li>${s}</li>`).join("")}</ul></section>
    <section class="estate-settings">${settings.map(([label,title,text,photo,href])=>`<a href="${href}"><div class="setting-photo" style="--photo:${photo}"></div>${iconFor(label)}<div class="kicker">${label}</div><h3>${title}</h3><p>${text}</p><span class="text-link">Learn More</span></a>`).join("")}</section>
    <section class="estate-management-feature"><div><div class="kicker">Estate Technology Management</div><h2>You Shouldn&rsquo;t Have to Know Who to Call.</h2><p>From daily support to vendor coordination, system updates, documentation, and long-term planning, we provide ongoing management to keep your technology performing.</p><a class="button bronze" href="/estate-technology-management/">Explore Estate Management</a></div><div class="management-feature-points">${["One call for any technology issue.","We diagnose, resolve, or coordinate.","Your systems remain documented and understood."].map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div><div class="feature-image" style="--photo:${bg}"></div></section>
    <section class="estate-featured"><div class="featured-photo" style="--photo:${estateMountain}"></div><div><div class="kicker">Featured Estate Project</div><h2>Privacy. Performance. Simplicity.</h2><p>A design illustration of integrated networking, security, automation, lighting, audio/video, and infrastructure across a private mountain property.</p><a class="button secondary" href="/case-study/">View Project</a></div><blockquote>Technology designed around the home and the people who live in it.<cite>Estate Technology</cite></blockquote></section>
  </div>`;
}

function tradePartnersPage(page) {
  const teams = [
    ["Architects", "Preserve architectural intent while integrating technology early.", designFirstTabletop],
    ["General Contractors", "Defined scopes and documentation for a smoother build.", estateMountain],
    ["Interior Designers", "Technology integrated without compromising aesthetics.", estateOcean],
    ["Electrical Contractors", "Coordinate power, pathways, controls, and infrastructure.", bg],
    ["Technology Integrators", "Engineering, programming, and documentation support.", designFirstTabletop],
    ["Developers & Estate Managers", "Consistent standards across properties and teams.", estateLake]
  ];
  return `<div class="route-page trade-partners-page">
    <section class="route-hero trade-hero" style="--route-photo:url('/assets/design-hero-wireframe.png')"><div class="blueprint-labels">${["Coordination","Infrastructure","Security","Automation","Lighting","Audio / Video","Networking"].map(s=>`<span>${s}</span>`).join("")}</div><div class="wrap"><div class="eyebrow">Trade Partners &amp; Professionals</div><h1>Better Technology<br>Starts With <strong>Better<br>Collaboration.</strong></h1><p>We work alongside architects, builders, designers, and trade partners to translate client expectations into coordinated, documented, and buildable technology systems.</p><div class="route-tags">${["Architects","General Contractors","Interior Designers","Electrical Contractors","Technology Integrators","Developers"].map(s=>`<span>${s}</span>`).join("")}</div><div class="hero-ctas"><a class="button" href="/start-a-project/">Partner With ThrillHouzz</a><a class="button secondary" href="/our-approach/">Explore Our Process</a></div></div></section>
    <section class="trade-vision"><div><div class="kicker">A Shared Vision</div><h2>Exceptional Projects<br>Demand a Coordinated Approach.</h2><p>We bring clarity, coordination, and technical expertise to align technology with design intent, construction, and client expectations.</p></div><div class="vision-icons">${["Preserve Design Intent","Reduce Change Orders","Streamline Coordination","Deliver Exceptional Results"].map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div></section>
    <section class="trade-team"><div class="kicker">Tailored Support for Every Partner</div><div class="trade-team-grid">${teams.map(([title,text,photo])=>`<a href="/start-a-project/"><div class="team-photo" style="--photo:${photo}"></div>${iconFor(title)}<h3>${title}</h3><p>${text}</p><span class="text-link">Learn More</span></a>`).join("")}</div></section>
    <section class="trade-process"><div><div class="kicker">Our Collaborative Process</div><h2>From Design Intent<br>to Final Acceptance.</h2><p>We integrate with your team at every phase so technology is designed, coordinated, and delivered to a high standard.</p></div><div class="trade-process-grid">${["Design & Planning","Documentation","Trade Coordination","Construction Support","Commissioning","Final Acceptance"].map((s,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><div class="mini-photo" style="--photo:${teams[i][2]}"></div><strong>${s}</strong><p>${partnerStepText(s)}</p></div>`).join("")}</div></section>
    <section class="trade-why"><div><div class="kicker">Why Partner With ThrillHouzz</div><h2>Expertise That Strengthens Your Project.</h2><p>Cross-discipline knowledge, real-world experience, and a commitment to your success help deliver spaces with technology that simply works.</p><a class="button bronze" href="/start-a-project/">Discuss Your Project</a></div><div class="why-photo" style="--photo:${estateOcean}"></div><ul class="check-list">${["Independent, objective expertise","Clear and buildable documentation","Reduced risk and costly rework","Responsive, solutions-focused support","A true partner from concept to completion"].map(s=>`<li>${s}</li>`).join("")}</ul></section>
    <section class="trade-featured"><div class="featured-photo" style="--photo:${estateMountain}"></div><div><div class="kicker">Featured Collaborative Project</div><h2>Coordinated by Design.</h2><p>A concept example showing how architecture, construction, and technology teams can align from design through final commissioning.</p><a class="button secondary" href="/case-study/">View Project</a></div></section>
  </div>`;
}

function routePhoto(path) {
  if (/estate|case|project/.test(path)) return estateMountain;
  if (/design|representation|trade/.test(path)) return "url('/assets/design-hero-wireframe.png')";
  if (/security/.test(path)) return "url('/assets/security-camera.png')";
  if (/infrastructure/.test(path)) return "url('/assets/infrastructure-rack.png')";
  if (/network/.test(path)) return networkBuilding;
  if (/automation/.test(path)) return automationLiving;
  if (/business|managed/.test(path)) return businessOffice;
  if (/automation|about|approach|support/.test(path)) return estateLake;
  return estateOcean;
}

function estateManagementPage(page) {
  const management = [
    ["Proactive Monitoring", "Identify and resolve issues before they affect the home."],
    ["Preventative Maintenance", "Keep systems performing at the highest level."],
    ["Vendor Coordination", "One point of contact for all technology partners."],
    ["Complete Documentation", "Accurate records for owners, staff, and future care."]
  ];
  const services = ["Network & Wi-Fi", "Security & Access", "Automation & Control", "Lighting", "Audio & Video", "Climate & Environment", "Infrastructure", "Cybersecurity", "Support & Coordination"];
  return `<div class="route-page estate-management-page">
    <section class="route-hero management-hero" style="--route-photo:${estateMountain}"><div class="blueprint-labels">${["Monitoring", "Maintenance", "Updates", "Security", "Vendor Management", "Documentation", "Owner & Staff Support"].map(s=>`<span>${s}</span>`).join("")}</div><div class="wrap"><div class="eyebrow">Estate Technology Management</div><h1>You Shouldn&rsquo;t Have<br><strong>to Know Who to Call.</strong></h1><p>Proactive management, ongoing support, and vendor coordination to keep your technology performing, secure, and effortless across your entire portfolio.</p><div class="route-tags">${["Primary Residences", "Second Homes", "Private Estates", "Multi-Property Families"].map(s=>`<span>${s}</span>`).join("")}</div><div class="hero-ctas"><a class="button" href="#management-services">Explore Management</a><a class="button secondary" href="/start-a-project/">Start a Conversation</a></div></div></section>
    <section class="management-promise"><div><div class="kicker">Peace of Mind. Every Day.</div><h2>A Smarter Way to<br>Manage Your Home.</h2><p>We take a proactive, concierge-style approach to keep your systems running, secure, and ready so you can focus on what matters most.</p></div><div class="promise-grid">${management.map(([title,text])=>`<div>${iconFor(title)}<strong>${title}</strong><p>${text}</p></div>`).join("")}</div></section>
    <section class="management-service-band" id="management-services"><div class="kicker">A Complete, Integrated Management Service.</div><div class="service-icons">${services.map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div><a class="button bronze" href="/start-a-project/">Discuss Management</a></section>
    <section class="management-approach"><div class="approach-photo" style="--photo:${estateLake}"></div><div><div class="kicker">Our Approach</div><h2>Proactive.<br>Personal. Accountable.</h2><p>We continuously monitor, maintain, and optimize your technology environment, coordinating with trusted trade partners so everything works together now and for years to come.</p></div><ul class="check-list">${["System monitoring", "Proactive issue resolution", "Firmware and security updates", "Performance optimization", "Vendor and warranty management", "Detailed system documentation", "Dedicated client support"].map(s=>`<li>${s}</li>`).join("")}</ul></section>
    <section class="management-visuals">${[
      ["System Health & Reliability", "Continuous monitoring, alerts, and preventative maintenance.", estateMountain],
      ["Ongoing Updates & Care", "Firmware, software, and security updates with minimal disruption.", bg],
      ["Vendor Coordination", "We coordinate the trades so you do not have to.", estateLake],
      ["Documentation & Continuity", "Clear records for your home, staff, and future property managers.", designFirstTabletop]
    ].map(([title,text,photo])=>`<div><div class="mini-photo" style="--photo:${photo}"></div>${iconFor(title)}<h3>${title}</h3><p>${text}</p><a class="text-link" href="/start-a-project/">Learn More</a></div>`).join("")}</section>
    <section class="management-portfolio"><div><div class="kicker">Multi-Property Management</div><h2>Consistent Technology. Everywhere.</h2><p>A unified management strategy, consistent standards, and one knowledgeable team across your entire portfolio.</p><a class="button bronze" href="/start-a-project/">Explore Portfolio Management</a></div><div class="portfolio-icons">${["Primary Residence","Second Homes","Private Estates","Multi-Property Families"].map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div></section>
    <section class="management-device"><div class="dashboard-device"><div class="dashboard-top">THRILLHOUZZ <span>HOME</span></div><div class="dashboard-grid">${["Network","Security","Lighting","Climate","Audio","Support"].map(s=>`<div>${iconFor(s)}<span>${s}</span></div>`).join("")}</div></div><div><div class="kicker">At Your Fingertips</div><h2>Visibility Without the Complexity.</h2><p>Access key system information, status updates, and support through a simple, secure interface for your team.</p><a class="button secondary" href="/client-support/">See the Client Experience</a></div><blockquote>One knowledgeable technology relationship across every property.<cite>Estate Technology Management</cite></blockquote></section>
  </div>`;
}

function ownersRepresentationPage(page) {
  const roles = [["Architect", "Represents the architecture.", designFirstTabletop], ["Engineers", "Represent their disciplines.", bg], ["General Contractor", "Manages construction.", estateOcean], ["ThrillHouzz", "Represents your technology.", estateMountain]];
  const leadership = [["Design Oversight","Protect approved design intent."],["Trade Coordination","Align architects, GCs, and trades."],["RFI & Submittal Review","Review drawings and product options."],["Schedule & Milestone Support","Track technology through closeout."],["Budget Guidance","Bring cost clarity and value engineering."],["Site Inspections","Validate installation quality."],["Change Management","Evaluate scope changes and impacts."],["Final Acceptance","Verify performance and documentation."]];
  const steps = ["Discovery & Vision","Design & Planning","Bid & Contractor Selection","Construction Support","Commissioning & Training","Ongoing Support"];
  return `<div class="route-page representation-page">
    <section class="route-hero representation-hero" style="--route-photo:url('/assets/design-hero-wireframe.png')"><div class="blueprint-labels">${["Owner Representation","System Coordination","Trade Alignment","Budget Oversight","Schedule Support","Final Acceptance"].map(s=>`<span>${s}</span>`).join("")}</div><div class="wrap"><div class="eyebrow">Owner&rsquo;s Technology Representation</div><h1>Your Vision. <strong>Our<br>Representation.</strong></h1><p>We represent your technology interests from concept to completion, ensuring every system, trade, and vendor is aligned, coordinated, and accountable.</p><div class="route-tags">${["New Construction","Renovations","Estates","Multi-Property"].map(s=>`<span>${s}</span>`).join("")}</div><div class="hero-ctas"><a class="button" href="/start-a-project/">Start a Conversation</a><a class="button secondary" href="/our-approach/">Explore Our Approach</a></div></div></section>
    <section class="representation-roles"><div><div class="kicker">The Missing Piece</div><h2>Who Represents<br>Your Technology?</h2><p>Your architect represents the architecture. Your engineers represent their disciplines. Your GC manages construction. <strong>ThrillHouzz represents your technology.</strong></p></div>${roles.map(([title,text,photo])=>`<div class="role-tile" style="--photo:${photo}">${iconFor(title)}<strong>${title}</strong><p>${text}</p></div>`).join("")}</section>
    <section class="representation-leadership"><div><div class="kicker">What We Do for You</div><h2>Technology Leadership for a Successful Outcome.</h2><p>Independent representation that coordinates technical disciplines and advocates for your interests through every phase.</p><a class="button bronze" href="/start-a-project/">Explore Our Services</a></div><div class="leadership-grid">${leadership.map(([title,text])=>`<div>${iconFor(title)}<strong>${title}</strong><p>${text}</p></div>`).join("")}</div></section>
    <section class="representation-process"><div><div class="kicker">Our Process</div><h2>From Concept<br>to Completion.</h2><p>Continuous representation through every phase of your project.</p></div><div class="process-track">${steps.map((s,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><strong>${s}</strong><p>${partnerStepText(s)}</p></div>`).join("")}</div></section>
    <section class="representation-independent"><div><div class="kicker">Independent. Client-Focused.</div><h2>We Work for You.</h2><p>ThrillHouzz does not need to install the systems we design or represent. Our role is to help you receive the right solution, from the right partners, executed to the highest standard.</p><a class="button bronze" href="/design-engineering/">Learn More About Representation</a></div><div class="independent-photo" style="--photo:${designFirstTabletop}"></div><blockquote>Clear technology leadership from concept through final acceptance.<cite>Owner Representation</cite></blockquote></section>
    <section class="representation-example"><div><div class="kicker">Project Example</div><h2>Estate Technology Representation</h2><p>A design illustration of coordinated network, security, automation, lighting, audio/video, and infrastructure across multiple trades.</p><a class="button secondary" href="/case-study/">View Project</a></div><div style="--photo:${estateLake}"></div><div style="--photo:${estateOcean}"></div></section>
  </div>`;
}

function designEngineeringPage(page, path) {
  return `
    <div class="route-page design-functional-page">
      <section class="route-hero ${heroClass(path)}">
        <div class="blueprint-labels">${["Network Design", "Lighting Control", "Camera Coverage", "Automation", "Audio / Video", "Infrastructure"].map(s => `<span>${s}</span>`).join("")}</div>
        <div class="wrap">
          <div class="eyebrow">${page.eyebrow}</div>
          <h1>${emphasis(page.title)}</h1>
          <p>${page.intro}</p>
          <div class="route-tags">${page.tags.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="hero-ctas"><a class="button" href="/start-a-project/">Start a Design Project</a><a class="button secondary" href="/our-approach/">Explore Our Process</a></div>
        </div>
      </section>
      ${designFirstBand()}
      <section class="section light design-render-order">
        <div class="wrap route-layout">
          <article>
            ${designEngineeringSpecific()}
          </article>
        </div>
      </section>
    </div>`;
}

function designFirstBand() {
  return `<section class="design-first-band" style="--photo:${designFirstTabletop}">
    <div class="wrap">
      <div class="kicker">Design First.</div>
      <h2>Design First.<br>Products Second.</h2>
      <p>The right technology starts with understanding the space, the people, and the desired experience, then engineering a system that works now and for the future.</p>
    </div>
  </section>`;
}

function designEngineeringSpecific() {
  return `
    <section class="design-disciplines" aria-labelledby="design-disciplines-title">
      <div class="kicker" id="design-disciplines-title">Our Engineering Disciplines</div>
      <div class="discipline-board design-doc-board">
      ${[
        ["Network & Wireless Engineering", "Architecture, topology, RF planning, coverage, redundancy, and infrastructure.", "Wireless Design"],
        ["Security Engineering", "Surveillance, camera coverage, intrusion, access control, gates, intercom, and monitoring.", "Camera Coverage"],
        ["Infrastructure Design", "Structured cabling, fiber, pathways, racks, equipment rooms, power, and coordination.", "Rack Elevations"],
        ["Automation & Controls", "Lighting, shading, environmental integration, control logic, and programming.", "Control Systems"],
        ["Audio & Video", "System architecture, speaker layouts, amplification, video, and distribution.", "Audio Layouts"],
        ["Programming & Commissioning", "Integration logic, programming, testing, performance verification, and acceptance.", "System Integration"]
      ].map(([title, text, graphic]) => `<div class="discipline-cell">${iconFor(title)}<h3>${title}</h3><p>${text}</p><div class="discipline-sample">${diagramFor(graphic)}</div><span class="sample-label">${graphic}</span></div>`).join("")}
      </div>
    </section>
    <section class="design-deliverables" aria-labelledby="design-deliverables-title">
      <div class="kicker">Tangible Deliverables</div>
      <h2 id="design-deliverables-title">Detailed Documentation for a Successful Build.</h2>
      <p>We deliver clear, professional documentation that aligns your team, reduces risk, and supports installation and long-term operation.</p>
      <div class="doc-gallery">${["Floor Plans", "Riser Diagrams", "Device Schedules", "Rack Elevations", "Wireless Heatmaps", "Camera Coverage", "Cable Schedules", "Control Narratives", "Redlines", "Commissioning Reports"].map(item => `<div class="system-doc light">${designDocumentGraphic(item)}<span>${item}</span></div>`).join("")}</div>
    </section>
    <section class="design-representation">
      <div class="representation-intro"><div class="kicker">Independent Design. Continuous Representation.</div><p>ThrillHouzz does not need to install the system we design. We act as your independent technology partner, representing your interests through every phase, from concept to construction to final acceptance.</p><a class="button bronze" href="/owners-technology-representation/">Learn More About Representation</a></div>
      <div class="design-process">${[
        ["Design", "Define needs, develop plans and specifications.", estateMountain],
        ["Bid", "Prepare bid packages and evaluate proposals.", designFirstTabletop],
        ["Contractor Selection", "Support selection and scope clarification.", estateOcean],
        ["Construction", "Coordinate trades and protect design intent.", estateLake],
        ["Commissioning", "Verify installation, testing, and performance.", bg],
        ["Acceptance", "Confirm documentation and a successful handover.", designFirstTabletop]
      ].map(([item, text, photo], i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><div class="mini-photo" style="--photo:${photo}">${diagramFor(item)}</div><strong>${item}</strong><p>${text}</p></div>`).join("")}</div>
    </section>
    <section class="design-closing"><div class="closing-photo" style="--photo:${estateMountain}"></div><div class="closing-copy"><div class="kicker">Built for Extraordinary Places</div><h2>From Concept to Reality.</h2><p>We collaborate with homeowners, architects, builders, designers, and trade partners to create intelligent, reliable, and beautifully integrated technology environments.</p><a class="button secondary" href="/start-a-project/">Start a Design Project</a></div><blockquote>Independent expertise from first concept through final acceptance.<cite>Design & Engineering</cite></blockquote></section>
  `;
}

function designDocumentGraphic(label) {
  const floor = '<rect x="12" y="12" width="116" height="84"/><path d="M12 44h116M48 12v84M88 44v52M12 70h76M48 30h28M108 62h20"/>';
  const table = '<rect x="10" y="14" width="120" height="82"/><path d="M10 32h120M10 48h120M10 64h120M10 80h120M45 14v82M94 14v82"/>';
  const shapes = {
    'Floor Plans': floor + '<path class="accent" d="M47 44v14m40 12v13"/>',
    'Riser Diagrams': '<path d="M70 8v88M24 22h92M24 48h92M24 74h92M34 22v18h72V22M44 48v17h52V48"/><circle cx="70" cy="22" r="5"/><circle cx="70" cy="48" r="5"/><circle cx="70" cy="74" r="5"/>',
    'Device Schedules': table + '<path class="accent" d="M18 40h18M18 56h18M18 72h18"/>',
    'Rack Elevations': '<rect x="42" y="8" width="56" height="92"/><path d="M49 22h42M49 35h42M49 48h42M49 61h42M49 74h42M49 87h42"/><circle cx="54" cy="28" r="2"/><circle cx="54" cy="54" r="2"/><circle cx="54" cy="80" r="2"/><path class="accent" d="M88 28c30 12 30 40 0 51"/>',
    'Wireless Heatmaps': floor + '<circle class="heat-one" cx="55" cy="50" r="30"/><circle class="heat-two" cx="55" cy="50" r="16"/><circle class="heat-one" cx="100" cy="72" r="24"/><circle class="heat-two" cx="100" cy="72" r="12"/>',
    'Camera Coverage': floor + '<path class="coverage" d="M24 25l48 20-48 22ZM112 32L76 58l36 20Z"/><circle cx="24" cy="25" r="4"/><circle cx="112" cy="32" r="4"/>',
    'Cable Schedules': table + '<path class="accent" d="M17 40h20m18 0h30M17 56h20m18 0h30M17 72h20m18 0h30"/>',
    'Control Narratives': '<rect x="12" y="12" width="116" height="84"/><path d="M25 27h56M25 43h37M25 59h43M25 75h55"/><circle cx="104" cy="42" r="10"/><path class="accent" d="M96 42h16M104 34v16"/>',
    'Redlines': floor + '<path class="redline" d="M30 70l21-15 17 9 31-29M85 28l14 7-4 14"/>',
    'Commissioning Reports': '<rect x="18" y="10" width="104" height="88"/><path d="M32 25h54M32 42h54M32 59h54M32 76h54"/><path class="accent" d="M95 38l5 5 11-12M95 55l5 5 11-12M95 72l5 5 11-12"/>'
  };
  return `<svg class="design-document-svg" viewBox="0 0 140 108" aria-hidden="true">${shapes[label]}</svg>`;
}

function heroClass(path) {
  if (/design|representation|trade/.test(path)) return "hero-design";
  if (/estate/.test(path)) return "hero-estate";
  if (/business|managed/.test(path)) return "hero-business";
  if (/network|security|automation|infrastructure/.test(path)) return "hero-capability";
  return "hero-general";
}

function pageSpecific(path, page) {
  if (path === "/business-technology-assessment/") {
    return `
      <section class="assessment-board">
        <div class="copy-panel compact"><div class="kicker">What You Receive</div><h2>Clarity before commitment.</h2><ul class="check-list">${["Complete environment review", "Documentation and mapping", "Risk and gap analysis", "Prioritized recommendations", "Technology roadmap"].map(item => `<li>${item}</li>`).join("")}</ul></div>
        <div class="dark-visual"><div class="diagram-tile">${diagramFor("network dashboard documentation")}</div><h3>Designed for Your Business</h3><p>Whether you are preparing support, professionalizing an informal setup, or planning a transition, the assessment gives leadership a clear operating picture.</p></div>
      </section>
      <section class="outcome-grid">${["Infrastructure Review", "Security Posture", "Endpoint & User Access", "Communications", "Documentation", "Roadmap"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Assessment category</p></div>`).join("")}</section>
      ${blueprintFeature("Technology Assessment", "Understand before you change.", ["Asset inventory", "Ownership map", "Risk register", "Support roadmap"])}
    `;
  }
  if (path === "/estate-assessment-remediation/") {
    return `
      <section class="assessment-board">
        <div class="photo-panel"><div class="tech-overlay">${diagramFor("control documentation")}</div></div>
        <div class="copy-panel compact"><div class="kicker">Existing System Remediation</div><h2>When the technology is already there but is not working together.</h2><p class="lead">We document what exists, separate symptoms from root causes, and build a staged path toward stability, simplicity, and long-term manageability.</p><ul class="check-list">${["Recover missing system knowledge", "Prioritize reliability and security issues", "Coordinate vendors and trades", "Prepare the home for ongoing management"].map(item => `<li>${item}</li>`).join("")}</ul></div>
      </section>
      <section class="outcome-grid">${["Network & Wi-Fi", "Security & Cameras", "Access & Entry", "Automation & Control", "Lighting", "Infrastructure Documentation"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Assessment focus</p></div>`).join("")}</section>
      ${blueprintFeature("Remediation", "Stabilize without turning the home into a construction project.", ["Existing conditions", "Root cause review", "Vendor coordination", "Long-term management"])}
    `;
  }
  if (path === "/estate/" || path === "/estate-technology/") {
    return `
      <section class="folio-row">
        ${["Primary Residences", "Second Homes", "Private Estates", "Multi-Property Families"].map(item => `<div>${iconFor(item)}<strong>${item}</strong></div>`).join("")}
      </section>
      ${imageCopy("Our Approach", "Designed Around How You Live.", "We begin by understanding your lifestyle, the property, and what you want to happen effortlessly, then engineer the technology to support it.", ["Discreet and intuitive", "Reliable and secure", "Integrated across systems", "Designed for long-term management", "Documented for the future"])}
      ${projectQuote("Featured Estate Project", "Privacy. Performance. Simplicity.", "A private mountain estate featuring integrated networking, security, automation, lighting, audio/video, and infrastructure, designed for reliability, operational simplicity, and long-term management.", estateMountain, "estate")}
    `;
  }
  if (path === "/estate-technology-management/") {
    return `
      <section class="folio-row">
        ${["Proactive Monitoring", "Preventative Maintenance", "Vendor Coordination", "Complete Documentation"].map(item => `<div>${iconFor(item)}<strong>${item}</strong></div>`).join("")}
      </section>
      ${imageCopy("Our Approach", "Proactive. Personal. Accountable.", "We continuously monitor, maintain, and optimize your technology environment, coordinating with trusted trade partners and manufacturers so everything works together now and for years to come.", ["24/7 system monitoring", "Firmware and security updates", "Performance optimization", "Vendor and warranty management", "Dedicated client support"])}
      <section class="visual-card-row">${["System Health & Reliability", "Ongoing Updates & Care", "Vendor Coordination", "Documentation & Continuity"].map(item => `<div><div class="mini-photo"><div class="tech-overlay">${diagramFor(item)}</div></div>${iconFor(item)}<h3>${item}</h3><p>${managementText(item)}</p><span class="text-link">Learn More</span></div>`).join("")}</section>
      <section class="section-card navy-card"><div><div class="kicker">Multi-Property Management</div><h2>Consistent Technology. Everywhere.</h2><p>Whether it is your primary residence, second home, or multiple estates, ThrillHouzz provides a unified management strategy, consistent standards, and a single knowledgeable team across your portfolio.</p></div><div class="mini-folio">${["Primary Residence", "Second Homes", "Private Estates", "Multi-Property Families"].map(item => `<span>${iconFor(item)}${item}</span>`).join("")}</div></section>
      ${devicePanel("At Your Fingertips", "Visibility Without the Complexity.", "Access key system information, status updates, and support through a simple, secure interface when the production support workflow is connected.")}
    `;
  }
  if (path === "/design-engineering/") {
    return `
      ${imageCopy("Design First", "Design First. Products Second.", "The right technology starts with understanding the space, the people, and the desired experience, then engineering a system that works now and for the future.", ["Network and wireless engineering", "Security engineering", "Infrastructure design", "Automation and controls", "Programming and commissioning"], designFirstTabletop)}
      <section class="discipline-board design-doc-board">
        ${[
          ["Network & Wireless Engineering", "Architecture, topology, RF planning, coverage, redundancy, and infrastructure."],
          ["Security Engineering", "Surveillance, camera coverage, intrusion, access control, gates, intercom, and monitoring."],
          ["Infrastructure Design", "Structured cabling, fiber, pathways, racks, equipment rooms, power, and coordination."],
          ["Automation & Controls", "Lighting, shading, environmental integration, control logic, and programming."],
          ["Audio & Video", "System architecture, speaker layouts, amplification, video, and distribution."],
          ["Programming & Commissioning", "Integration logic, programming, testing, performance verification, and acceptance."]
        ].map(([title, text]) => designDisciplineCard(title, text)).join("")}
      </section>
      <section class="deliverables-showcase">
        <div><div class="kicker">Tangible Deliverables</div><h2>Detailed Documentation for a Successful Build.</h2><p>Clear drawings, schedules, plans, redlines, and reports give the project team something buildable and give the owner something supportable.</p></div>
        <div class="deliverables-row docs-dark">
          ${["Wireless Design", "Camera Coverage", "Rack Elevations", "Control Systems", "Audio Layouts", "System Integration"].map(item => docTile(item, "dark")).join("")}
        </div>
      </section>
      <section class="doc-gallery">${["Floor Plans", "Riser Diagrams", "Device Schedules", "Rack Elevations", "Wireless Heatmaps", "Camera Coverage", "Cable Schedules", "Control Narratives", "Redlines", "Commissioning Reports"].map(item => docTile(item, "light")).join("")}</section>
      <section class="section-card navy-card"><div><div class="kicker">Independent Design</div><h2>Continuous Representation.</h2><p>ThrillHouzz does not need to install the system we design. We can act as your independent technology partner from concept to final acceptance.</p></div><a class="button bronze" href="/owners-technology-representation/">Learn More About Representation</a></section>
      ${processImageBand(["Design", "Bid", "Contractor Selection", "Construction", "Commissioning", "Acceptance"])}
      ${projectQuote("Built for Extraordinary Places", "From Concept to Reality.", "A coordinated design engagement for a complex private residence, aligning architecture, infrastructure, controls, security, audio/video, and documentation before installation began.", estateOcean, "design")}
    `;
  }
  if (path === "/owners-technology-representation/") {
    return `
      <section class="missing-piece"><div><div class="kicker">The Missing Piece</div><h2>Who Represents Your Technology?</h2><p>Your architect represents the architecture. Your engineers represent their disciplines. Your GC manages construction. <strong>ThrillHouzz represents your technology.</strong></p></div>
      ${[["Architect","Represents the architecture."],["Engineers","Represent their disciplines."],["General Contractor","Manages construction."],["ThrillHouzz","Represents your technology."]].map(([title,text]) => `<div>${iconFor(title)}<strong>${title}</strong><p>${text}</p></div>`).join("")}</section>
      <section class="representation-strip">
        ${[
          ["Architect", "Represents the architecture."],
          ["Engineers", "Represent their disciplines."],
          ["General Contractor", "Manages construction."],
          ["ThrillHouzz", "Represents your technology."]
        ].map(([title, text]) => `<div>${iconFor(title)}<strong>${title}</strong><p>${text}</p></div>`).join("")}
      </section>
      <section class="leadership-board"><div><div class="kicker">What We Do for You</div><h2>Technology Leadership for a Successful Outcome.</h2><p>We serve as your independent technology representative, advocating for your best interests and coordinating technical disciplines.</p><a class="button bronze" href="/start-a-project/">Explore Our Services</a></div><div class="outcome-grid dark-grid">${["Design Oversight", "Trade Coordination", "RFI & Submittal Review", "Schedule Support", "Budget Guidance", "Site Inspections", "Change Management", "Final Acceptance"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Owner advocacy</p></div>`).join("")}</div></section>
      <section class="outcome-grid">${["Design Oversight", "Trade Coordination", "RFI & Submittal Review", "Schedule Support", "Budget Guidance", "Site Inspections", "Change Management", "Final Acceptance"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Owner advocacy</p></div>`).join("")}</section>
      <section class="process-cards">${["Discovery & Vision", "Design & Planning", "Bid & Contractor Selection", "Construction Support", "Commissioning & Training", "Ongoing Support"].map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${iconFor(item)}<strong>${item}</strong><p>${partnerStepText(item)}</p></div>`).join("")}</section>
      ${blueprintFeature("Independent, Client-Focused", "We Work for You.", ["Objective design input", "Trade alignment", "Budget awareness", "Final acceptance"])}
      ${projectQuote("Project Example", "Lake Tahoe Estate", "Independent technology representation for a new-construction estate, coordinating network, security, automation, lighting, audio/video, and infrastructure across multiple trades.", estateLake, "design")}
    `;
  }
  if (path === "/trade-partners-professionals/") {
    return `
      <section class="folio-row">
        ${["Preserve Design Intent", "Reduce Change Orders", "Streamline Coordination", "Deliver Exceptional Results"].map(item => `<div>${iconFor(item)}<strong>${item}</strong></div>`).join("")}
      </section>
      <section class="partner-grid page-partners">${partners().map(([title, text]) => `<div>${iconFor(title)}<h3>${title}</h3><p>${text}</p></div>`).join("")}</section>
      <section class="process-cards">${["Design & Planning", "Documentation", "Trade Coordination", "Construction Support", "Commissioning", "Final Acceptance"].map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${iconFor(item)}<strong>${item}</strong><p>${partnerStepText(item)}</p></div>`).join("")}</section>
      ${projectQuote("Featured Collaborative Project", "North Lake Tahoe Estate", "Collaborated with the architect, general contractor, and design team to deliver a fully integrated technology environment from design coordination through final commissioning.", estateMountain, "partner")}
    `;
  }
  if (path === "/managed-technology-services/") {
    return `
      <section class="outcome-grid">${["Monitoring", "Support Desk", "Cybersecurity", "Identity & Access", "Communications", "Vendor Coordination", "Documentation", "Lifecycle Planning"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Managed service discipline</p></div>`).join("")}</section>
      ${imageCopy("Management Rhythm", "Stable systems come from steady attention.", "Managed service is not advertised as new-client break/fix. ThrillHouzz builds an ongoing relationship around standards, support, documentation, and accountable ownership.", ["Assessment-led onboarding", "Recurring support relationship", "Documented systems and users", "Planning for change before it becomes urgent"])}
    `;
  }
  if (path === "/about/") {
    return `
      <section class="about-proof">
        ${["Independent Expertise", "Cross-Discipline Knowledge", "Accountability", "Long-Term Partnership"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>${aboutProofText(item)}</p></div>`).join("")}
      </section>
      ${imageCopy("Built on Real-World Experience", "Technology should feel clear, accountable, and supportable.", "ThrillHouzz sits between the design vision, the systems, the trades, and the people who depend on the environment every day.", ["Technology recommendations without guesswork", "System knowledge preserved through documentation", "Clear ownership across disciplines", "Long-term support after installation"])}
    `;
  }
  if (path === "/our-approach/") {
    return `
      <section class="method-panel">${method.map((m, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${iconFor(m[0])}<strong>${m[0]}</strong><p>${m[1]}</p></div>`).join("")}</section>
      ${processImageBand(["Discover", "Design", "Engineer", "Implement", "Commission", "Document", "Manage"])}
      <section class="section-card navy-card"><div><div class="kicker">More Than Installation</div><h2>A Better Process.</h2><p>Our approach reduces risk, improves communication, and ensures your technology works together now and for the future.</p></div><a class="button bronze" href="/start-a-project/">See How We Begin</a></section>
    `;
  }
  if (path === "/start-a-project/") {
    return `
      <section class="intake-grid">
        ${[
          ["Business Discovery", "IT, security, communications, support, and documentation needs.", "/business/"],
          ["Residence / Estate", "Home, estate, portfolio, automation, security, and lifecycle needs.", "/estate/"],
          ["Design & Engineering", "Architecture, construction, documentation, coordination, and representation.", "/design-engineering/"]
        ].map(([title, text, href]) => `<a href="${href}">${iconFor(title)}<strong>${title}</strong><p>${text}</p><span class="text-link">Explore path</span></a>`).join("")}
      </section>
      <section class="start-mosaic">${["Business Discovery", "Residence / Estate", "Design & Engineering", "Assessment", "Support", "Next Step"].map(item => `<div><div class="tech-overlay">${diagramFor(item)}</div><span>${item}</span></div>`).join("")}</section>
    `;
  }
  if (path === "/client-support/") {
    return `
      <section class="support-action-grid">
        ${["Request Support", "Emergency Assistance", "Remote Support", "Schedule Service", "System Resources", "Training"].map(item => `<a href="/client-support/">${iconFor(item)}<strong>${item}</strong><span>Existing client pathway</span></a>`).join("")}
      </section>
      ${imageCopy("Client Support", "We&rsquo;re Here to Keep You Running.", "Our support team is ready to help with questions, troubleshooting, system requests, and ongoing support for managed environments.", ["Schedule service", "Open a support request", "Coordinate remote support", "Access system resources"])}
    `;
  }
  if (path === "/technology-partners/") {
    return `
      <section class="partner-matrix">
        ${["Networking", "Security", "Communications", "Automation", "Lighting", "Entertainment", "Infrastructure", "Support"].map(item => `<div>${iconFor(item)}<strong>${item}</strong><p>Selected when the environment calls for it.</p></div>`).join("")}
      </section>
      <section class="section-card"><div><div class="kicker">Requirements First</div><h2>Manufacturer lists do not define the design.</h2><p>Public partner logos can be added later after approval. For now, this page keeps the positioning clear without implying unauthorized relationships.</p></div></section>
    `;
  }
  if (path === "/insights/") {
    return `
      <section class="insight-grid">
        ${page.cards.map(([title, text, href]) => `<a href="${href}">${iconFor(title)}<div class="label">Insight</div><h3>${title}</h3><p>${text}</p><span class="text-link">Read Insight</span></a>`).join("")}
      </section>
    `;
  }
  if (path === "/network-wireless/" || path === "/security-access/" || path === "/automation-lighting-experience/" || path === "/infrastructure-systems-engineering/") {
    return `
      ${imageCopy("Engineered for Performance", page.heading, page.copy, page.strip, routePhoto(path))}
      ${blueprintFeature(page.eyebrow, page.title, page.strip)}
      <section class="discipline-board">
        ${page.strip.map(item => `<div><div class="diagram-tile">${diagramFor(item)}</div><strong>${item}</strong></div>`).join("")}
      </section>
    `;
  }
  return `<section class="feature-row" style="margin-top:34px"><div class="photo-panel"></div><div class="copy-panel"><div class="kicker">Our Approach</div><h2>Designed Around the Environment.</h2><ul class="check-list"><li>Discreet and intuitive</li><li>Reliable and secure</li><li>Integrated across systems</li><li>Designed for long-term management</li><li>Documented for the future</li></ul></div></section>`;
}

function imageCopy(kicker, title, text, bullets, image = bg) {
  return `<section class="feature-row specific-row"><div class="photo-panel" style="--photo:${image}"><div class="tech-overlay">${diagramFor(`${kicker} ${title}`)}</div></div><div class="copy-panel"><div class="kicker">${kicker}</div><h2>${title}</h2><p class="lead">${text}</p><ul class="check-list">${bullets.map(item => `<li>${item}</li>`).join("")}</ul></div></section>`;
}

function projectQuote(kicker, title, text, image = bg, quoteType = "design") {
  return `<section class="project-quote"><div class="project-visual" style="--photo:${image}"><div class="tech-overlay">${diagramFor(title)}</div></div><div><div class="kicker">${kicker}</div><h2>${title}</h2><p>${text}</p><a class="button secondary" href="/case-study/">View Project</a></div><blockquote>&ldquo;${proofQuote(quoteType)}&rdquo;<cite>Private client</cite></blockquote></section>`;
}

function blueprintFeature(kicker, title, items) {
  return `<section class="blueprint-feature"><div><div class="kicker">${kicker}</div><h2>${title}</h2><p>System diagrams, planning documents, coverage studies, schedules, and commissioning records create a buildable path from design intent to final acceptance.</p><a class="button secondary" href="/start-a-project/">Start a Conversation</a></div><div class="blueprint-sheets">${items.slice(0, 6).map(item => `<div><div class="diagram-tile">${diagramFor(item)}</div><span>${item}</span></div>`).join("")}</div></section>`;
}

function processImageBand(items) {
  return `<section class="process-image-band">${items.map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><div class="mini-photo"><div class="tech-overlay">${diagramFor(item)}</div></div><strong>${item}</strong><p>${partnerStepText(item)}</p></div>`).join("")}</section>`;
}

function devicePanel(kicker, title, text) {
  return `<section class="device-panel"><div class="device-mock">${diagramFor("dashboard support visibility")}</div><div><div class="kicker">${kicker}</div><h2>${title}</h2><p>${text}</p><a class="button secondary" href="/client-support/">See the Client Experience</a></div><blockquote>&ldquo;${proofQuote("support")}&rdquo;<cite>Private estate client</cite></blockquote></section>`;
}

function managementText(item) {
  return {
    "System Health & Reliability": "Continuous monitoring, alerts, and preventative maintenance to keep systems performing.",
    "Ongoing Updates & Care": "Firmware, software, and security updates managed with minimal disruption.",
    "Vendor Coordination": "Coordination with trusted trades so you do not have to diagnose ownership.",
    "Documentation & Continuity": "Clear records for owners, staff, property managers, and future service."
  }[item] || "Ongoing stewardship for complex environments.";
}

function partnerStepText(item) {
  return {
    "Design & Planning": "Align on goals, design intent, and technology requirements.",
    Documentation: "Provide detailed plans, specifications, and coordination documents.",
    "Trade Coordination": "Collaborate with all trades to ensure seamless integration.",
    "Construction Support": "Answer questions, review installation, and resolve issues.",
    Commissioning: "Test and verify systems perform as designed.",
    "Final Acceptance": "Deliver documentation, training, and ongoing support options.",
    "Discovery & Vision": "Understand goals, lifestyle, project scope, risks, and priorities.",
    "Bid & Contractor Selection": "Support proposal review, scope clarity, and trade partner selection.",
    "Commissioning & Training": "Verify performance and ensure the owner or team is trained.",
    "Ongoing Support": "Remain an ongoing resource for future projects and expansions."
  }[item] || "Coordinate the next step.";
}

function aboutProofText(item) {
  return {
    "Independent Expertise": "Technology recommendations start with requirements, not a default product stack.",
    "Cross-Discipline Knowledge": "Network, security, automation, lighting, AV, infrastructure, and support are considered together.",
    Accountability: "One partner keeps responsibility visible when many systems and vendors are involved.",
    "Long-Term Partnership": "Documentation and management help the environment remain understandable over time."
  }[item] || "A practical standard for complex environments.";
}

function emphasis(title) {
  return title
    .replace("Extraordinary Technology.", "<strong>Extraordinary Technology.</strong>")
    .replace("Depend On.", "<strong>Depend On.</strong>")
    .replace("Thoughtfully Designed.", "<strong>Thoughtfully Designed.</strong>")
    .replace("Who to Call.", "<strong>Who to Call.</strong>")
    .replace("Better Collaboration.", "<strong>Better Collaboration.</strong>")
    .replace("Everything.", "<strong>Everything.</strong>");
}

function thumb(title, text, href) {
  const image = /estate|residence|home|portfolio|property/i.test(title) ? estateMountain : /design|engineer|assessment|plan/i.test(title) ? designFirstTabletop : /security/i.test(title) ? "url('/assets/security-camera.png')" : /infrastructure/i.test(title) ? "url('/assets/infrastructure-rack.png')" : /network/i.test(title) ? networkBuilding : /business|managed/i.test(title) ? businessOffice : /automation|lighting/i.test(title) ? automationLiving : estateOcean;
  return `<a class="thumb-card" href="${href}"><div class="thumb-img" style="--bg:${image}"></div><div class="thumb-copy">${iconFor(title)}<h3>${title}</h3><p>${text}</p><span class="text-link">Learn More</span></div></a>`;
}

function projectsPage() {
  return `
    <section class="route-hero project-hero"><div class="wrap"><div class="eyebrow">Projects / Selected Work</div><h1>Complex Environments. <strong>Proven Results.</strong></h1><p>A collection of signature project stories across residential, commercial, and design-engineering work.</p></div></section>
    <section class="section light"><div class="wrap">
      <div class="project-filter" role="group" aria-label="Filter projects">${["All", "Business", "Estate", "Design & Engineering"].map((item,i) => `<button type="button" data-project-filter="${item}" aria-pressed="${i===0}">${item}</button>`).join("")}</div>
      <div class="project-grid">
        ${projectListing("Estate", "North Lake Tahoe Estate", "Network, surveillance, access, automation, lighting, audio/video, infrastructure", "Privacy, performance, and simplicity across a fully integrated private estate.", estateMountain)}
        ${projectListing("Business", "Peak Law Firm", "Managed technology, network, cybersecurity, communications, physical security", "A polished professional environment designed for reliability, privacy, and support.", businessOffice)}
        ${projectListing("Business", "Colorado Voice Clinic", "Security, network reliability, communications, user support", "Secure connectivity, access control, and communications for a client-facing practice.", networkBuilding)}
        ${projectListing("Estate", "Forest Lake Residence", "Standards, documentation, vendor coordination, ongoing support", "Consistent technology stewardship for a lakefront home with long-term support needs.", estateLake)}
        ${projectListing("Business", "Granite Realty", "Connectivity, identity, collaboration, documentation, support", "A connected operations environment for a growing Colorado real estate team.", businessOffice)}
        ${projectListing("Design & Engineering", "Ocean Bluff Estate Design", "Infrastructure, wireless, security, controls, documentation", "Independent design and documentation before construction and integration.", estateOcean)}
      </div>
    </div></section>`;
}

function casePage() {
  const examples = {
    "north-lake-tahoe-estate": ["North Lake Tahoe Estate", "Estate Technology", "A fully integrated technology environment designed for privacy, performance, simplicity, and long-term estate management.", estateMountain, ["Network", "Security", "Automation", "Lighting", "Audio / Video", "Infrastructure"]],
    "peak-law-firm": ["Peak Law Firm", "Business Technology", "A coordinated professional environment focused on reliable systems, cybersecurity, communications, and continuity.", businessOffice, ["Managed IT", "Network", "Cybersecurity", "Communications", "Access", "Documentation"]],
    "colorado-voice-clinic": ["Colorado Voice Clinic", "Business Technology", "An illustrative healthcare technology environment with secure connectivity, communications, and clear support paths.", networkBuilding, ["Network", "Security", "Communications", "Access", "Support", "Documentation"]],
    "forest-lake-residence": ["Forest Lake Residence", "Estate Technology", "A lakefront technology environment designed for a quiet experience, property-wide connectivity, and long-term stewardship.", estateLake, ["Wireless", "Security", "Lighting", "Audio / Video", "Management", "Documentation"]],
    "granite-realty": ["Granite Realty", "Business Technology", "A connected operations environment for a growing Colorado professional team.", businessOffice, ["Connectivity", "Identity", "Collaboration", "Support", "Security", "Documentation"]],
    "ocean-bluff-estate-design": ["Ocean Bluff Estate Design", "Design & Engineering", "Independent technology planning and documentation before construction and integration.", estateOcean, ["Infrastructure", "Wireless", "Security", "Controls", "Commissioning", "Documentation"]]
  };
  const [name, practice, intro, photo, systems] = examples[new URLSearchParams(location.search).get("project")] || examples["north-lake-tahoe-estate"];
  return `
    <section class="route-hero case-hero" style="--case-photo:${photo}"><div class="wrap"><div class="eyebrow">Projects / ${practice}</div><h1>${name}</h1><p>${intro}</p><div class="route-tags">${systems.map(t => `<span>${t}</span>`).join("")}</div></div></section>
    <section class="case-stats">${systems.slice(0,4).map(item => `<div>${iconFor(item)}<strong>${item}</strong><span>Design discipline</span></div>`).join("")}</section>
    <section class="section light"><div class="wrap case-shell">
      <aside class="case-nav"><div class="kicker">Project Overview</div>${["Property Type", "Project Scope", "Design & Engineering", "Systems", "Result", "Ongoing Support"].map(item => `<span>${item}</span>`).join("")}</aside>
      <article>
        <div class="case-section"><div class="kicker">The Challenge</div><h2>Clarity Across the Whole Environment.</h2><p class="lead">${intro} The design brief called for technology that works together, remains understandable, and can be supported as needs evolve.</p></div>
        <div class="gallery-strip">${systems.slice(0,4).map(item => `<div><div class="diagram-tile">${diagramFor(item)}</div><span>${item}</span></div>`).join("")}</div>
        <div class="case-two">
          <div class="copy-panel compact"><div class="kicker">The Solution</div><h3>One documented environment.</h3><ul class="check-list"><li>Discovery and existing condition review</li><li>System architecture and infrastructure planning</li><li>Vendor coordination and commissioning pathway</li><li>Support handoff and lifecycle documentation</li></ul></div>
          <div class="dark-visual"><div class="diagram-tile">${diagramFor("dashboard support")}</div><h3>Result</h3><p>A single documented technology environment with coordinated systems, simplified control, clear support paths, and long-term stewardship.</p></div>
        </div>
        <blockquote class="quote">Illustrative design concept for the ThrillHouzz website. Project details will be replaced with approved portfolio material.</blockquote>
      </article>
    </div></section>`;
}

function projectListing(category, title, scope, text, image = bg) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,'');
  return `<a class="project-listing" data-project-category="${category}" href="/case-study/?project=${slug}"><div class="project-listing-visual" style="--photo:${image}"><div class="tech-overlay">${diagramFor(scope)}</div></div><div><div class="label">${category}</div><h3>${title}</h3><p>${scope}</p><span>${text}</span><b>View Project</b></div></a>`;
}

function form(type) {
  const support = type === "support";
  return `<form class="form" data-form>
    <div class="success" data-success>This is a design preview. Your information was not sent.</div>
    <label>Name<input required name="name" autocomplete="name"></label>
    <label>Email<input required type="email" name="email" autocomplete="email"></label>
    <label>${support ? "Client / Location" : "Company, property, or project"}<input name="context"></label>
    <label>Inquiry type<select name="type"><option>Business technology</option><option>Estate technology</option><option>Design & engineering</option><option>Client support</option><option>Assessment</option></select></label>
    <label>${support ? "Issue or request" : "What should ThrillHouzz know?"}<textarea required name="message"></textarea></label>
    <button class="button" type="submit">${support ? "Review Support Request" : "Review Inquiry"}</button>
    <p class="form-disclosure">Design preview only. This form is not connected to a submission service.</p>
  </form>`;
}

function render() {
  const path = normalize(location.pathname);
  const brand = document.querySelector('.site-header .brand-image');
  if (brand) brand.innerHTML = '<span class="brand-mark" aria-hidden="true"></span><span class="brand-word"><strong>THRILL</strong>HOUZZ</span>';
  let html;
  const page = pages[path];
  if (path === "/") html = home();
  else if (page === "projects") html = projectsPage();
  else if (page === "case") html = casePage();
  else html = routePage(page || pages["/contact/"], path);
  document.getElementById("app").innerHTML = html;
  document.querySelectorAll('[data-project-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.projectFilter;
      document.querySelectorAll('[data-project-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('[data-project-category]').forEach(item => {
        item.hidden = selected !== 'All' && item.dataset.projectCategory !== selected;
      });
    });
  });
  document.querySelectorAll("[data-form]").forEach(formEl => {
    formEl.addEventListener("submit", event => {
      event.preventDefault();
      formEl.querySelector("[data-success]").style.display = "block";
    });
  });
  const title = path === "/projects/" ? "Complex Environments. Proven Results." : path === "/case-study/" ? (document.querySelector('.case-hero h1')?.textContent || "Project Case Study") : page?.title || "Technology Design, Integration & Management";
  document.title = `${strip(title)} | ThrillHouzz`;
}

function strip(value) {
  return String(value).replace(/&rsquo;/g, "'").replace(/<[^>]*>/g, "");
}

function normalize(path) {
  return path.endsWith("/") ? path : `${path}/`;
}

document.getElementById("menu").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu").setAttribute("aria-expanded", open ? "true" : "false");
});

render();
