const bg = 'url("assets/thrillhouzz-architecture-technology.png")';

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
    tags: ["Network", "Wireless", "Security", "Automation", "Lighting", "Infrastructure"],
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
    heading: "Insight topics ready for the Odoo CMS.",
    copy: "These are structured placeholders for future articles, without implying already-published claims or invented proof.",
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
    <section class="hero">
      <div class="blueprint-labels"><span>Networking</span><span>Automation</span><span>Security</span><span>Lighting</span><span>Audio / Video</span><span>Infrastructure</span></div>
      <div class="hero-inner">
        <div class="eyebrow">Design Integration Management</div>
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
            ${["How do you live or work here?","What should happen automatically?","What needs to remain secure?","How should this environment evolve?","Who will understand it five years from now?"].map(item => `<div class="q-item"><strong>${item}</strong></div>`).join("")}
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
    <section class="section navy"><div class="wrap split"><div><div class="kicker">Start With the Outcome</div><h2>What Are You Trying to Accomplish?</h2></div><div><p class="lead">Start by telling us what you are trying to accomplish. We will begin there.</p><a class="button bronze" href="/start-a-project/">Start a Project</a><a class="button bronze" href="/client-support/" style="margin-left:12px">Request Support</a></div></div></section>`;
}

function practiceTile(icon, label, title, text, href, pos) {
  return `<a class="practice-tile" style="--bg:${bg};background-position:${pos}" href="${href}"><div><div class="mini-icon">${icon}</div><div class="label">${label}</div><h3>${title}</h3><p>${text}</p><span class="text-link">Explore ${label.split(" ")[0]}</span></div></a>`;
}

function modelPanel(title, target) {
  const trades = ["Internet Provider", "IT Company", "Security Contractor", "AV Integrator", "Electrician", "Automation Specialist", "Lighting Contractor", "HVAC Contractor", "Gate Company"];
  return `<div class="model-panel"><div class="kicker">${title}</div><div class="trade-list">${trades.map(t => `<span>${t}</span>`).join("")}</div><div class="model-target">${target}</div></div>`;
}

function methodHtml() {
  return `<div class="method">${method.map((m, i) => `<div class="step"><span>${String(i + 1).padStart(2, "0")}</span><strong>${m[0]}</strong><p>${m[1]}</p></div>`).join("")}</div>`;
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

function capCard([title, text]) {
  return `<div class="cap-card"><h3>${title}</h3><p>${text}</p></div>`;
}

function routePage(page) {
  return `
    <div class="route-page">
      <section class="route-hero">
        <div class="blueprint-labels">${(page.strip || []).slice(0,6).map(s => `<span>${s}</span>`).join("")}</div>
        <div class="wrap">
          <div class="eyebrow">${page.eyebrow}</div>
          <h1>${emphasis(page.title)}</h1>
          <p>${page.intro}</p>
          <div class="route-tags">${page.tags.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="hero-ctas"><a class="button" href="/start-a-project/">Start a Conversation</a><a class="button secondary" href="/our-approach/">Explore Our Process</a></div>
        </div>
      </section>
      <section class="service-strip">${page.strip.map(s => `<div>${s}</div>`).join("")}</section>
      <section class="section light">
        <div class="wrap route-layout">
          <article>
            <div class="split"><div><div class="kicker">Overview</div><h2>${page.heading}</h2></div><div><p class="lead">${page.copy}</p>${page.form ? form(page.form) : ""}</div></div>
            ${page.form ? "" : `<div class="thumb-grid">${page.cards.map(([title, text, href]) => thumb(title, text, href)).join("")}</div>`}
            <section class="feature-row" style="margin-top:34px"><div class="photo-panel"></div><div class="copy-panel"><div class="kicker">Our Approach</div><h2>Designed Around the Environment.</h2><ul class="check-list"><li>Discreet and intuitive</li><li>Reliable and secure</li><li>Integrated across systems</li><li>Designed for long-term management</li><li>Documented for the future</li></ul></div></section>
          </article>
          <aside class="sidebar"><div class="kicker">Related</div>${serviceLinks.map(([href, label]) => `<a class="side-link" href="${href}">${label}</a>`).join("")}</aside>
        </div>
      </section>
    </div>`;
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
  return `<a class="thumb-card" href="${href}"><div class="thumb-img" style="--bg:${bg}"></div><h3>${title}</h3><p>${text}</p><span class="text-link">Learn More</span></a>`;
}

function projectsPage() {
  return `
    <section class="route-hero"><div class="wrap"><div class="eyebrow">Projects / Selected Work</div><h1>Complex Environments. <strong>Proven Results.</strong></h1><p>A collection of project-style frameworks for residential, commercial, and design-engineering work. Placeholder content is marked where proof is unavailable.</p></div></section>
    <section class="section light"><div class="wrap thumb-grid">
      ${thumb("North Lake Tahoe Estate", "Placeholder estate technology case-study layout.", "/case-study/")}
      ${thumb("PK Law Firm", "Placeholder business technology environment.", "/case-study/")}
      ${thumb("Colorado Voice Clinic", "Placeholder healthcare technology environment.", "/case-study/")}
      ${thumb("13 Village Estate", "Placeholder estate technology example.", "/case-study/")}
      ${thumb("Granite Realty", "Placeholder business networking example.", "/case-study/")}
      ${thumb("Barley Wealth Management", "Placeholder secure office technology example.", "/case-study/")}
    </div></section>`;
}

function casePage() {
  return `
    <section class="route-hero"><div class="wrap"><div class="eyebrow">Project Case Study Template</div><h1>North Lake Tahoe Estate</h1><p>A fully integrated technology environment designed for privacy, performance, and exceptional living experience. Generic placeholder only.</p></div></section>
    <section class="service-strip"><div>Network</div><div>Security</div><div>Automation</div><div>Lighting</div><div>Audio / Video</div><div>Infrastructure</div></section>
    <section class="section light"><div class="wrap feature-row"><div class="copy-panel"><div class="kicker">The Challenge</div><h2>Privacy. Performance. Simplicity.</h2><p class="lead">The property had multiple technology systems, vendors, and long-term support needs. This template shows how a real case study would be structured without inventing a client claim.</p><ul class="check-list"><li>Discovery and documentation</li><li>System architecture and coordination</li><li>Commissioning and support handoff</li></ul></div><div class="photo-panel"></div></div></section>`;
}

function form(type) {
  const support = type === "support";
  return `<form class="form" data-form>
    <div class="success" data-success>${support ? "Support request captured for this prototype. Connect this to Odoo Helpdesk before production use." : "Inquiry captured for this prototype. Connect this to Odoo CRM before production use."}</div>
    <label>Name<input required name="name" autocomplete="name"></label>
    <label>Email<input required type="email" name="email" autocomplete="email"></label>
    <label>${support ? "Client / Location" : "Company, property, or project"}<input name="context"></label>
    <label>Inquiry type<select name="type"><option>Business technology</option><option>Estate technology</option><option>Design & engineering</option><option>Client support</option><option>Assessment</option></select></label>
    <label>${support ? "Issue or request" : "What should ThrillHouzz know?"}<textarea required name="message"></textarea></label>
    <button class="button" type="submit">${support ? "Go to Client Support" : "Send Inquiry"}</button>
  </form>`;
}

function render() {
  const path = normalize(location.pathname);
  let html;
  const page = pages[path];
  if (path === "/") html = home();
  else if (page === "projects") html = projectsPage();
  else if (page === "case") html = casePage();
  else html = routePage(page || pages["/contact/"]);
  document.getElementById("app").innerHTML = html;
  document.querySelectorAll("[data-form]").forEach(formEl => {
    formEl.addEventListener("submit", event => {
      event.preventDefault();
      formEl.querySelector("[data-success]").style.display = "block";
      formEl.reset();
    });
  });
  document.title = `${strip(page?.title || "Technology Design, Integration & Management")} | ThrillHouzz`;
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
