const serviceLinks = [
  ["/managed-technology-services/", "Managed Technology Services"],
  ["/business-technology-assessment/", "Business Technology Assessment"],
  ["/estate-technology-management/", "Estate Technology Management"],
  ["/estate-assessment-remediation/", "Estate Assessment & Remediation"],
  ["/trade-partners-professionals/", "Trade Partners & Professionals"],
  ["/network-wireless/", "Network & Wireless"],
  ["/security-access/", "Security & Access"],
  ["/automation-lighting-experience/", "Automation, Lighting & Experience"],
  ["/infrastructure-systems-engineering/", "Infrastructure & Systems Engineering"],
  ["/technology-partners/", "Technology Partners"]
];

const pages = {
  "/business/": {
    parent: "Business",
    title: "IT Systems Your Business Can Depend On.",
    intro: "Colorado and Denver-area managed technology support for businesses that need stable networks, secure systems, useful documentation, and a partner who understands operations.",
    body: [
      "ThrillHouzz supports organizations that have outgrown informal IT help and want a calmer operating rhythm. We focus on managed continuity, structured improvements, vendor coordination, and practical technology leadership.",
      "We do not advertise new-client break/fix work as the primary relationship. The goal is to understand the environment, establish standards, and manage the systems that the business depends on."
    ],
    bullets: ["Managed business technology services", "Network, wireless, security, and endpoint coordination", "Documentation, standards, lifecycle planning, and vendor management", "Assessments for organizations that need a clear starting point"],
    cta: "Schedule a Business Assessment",
    ctaHref: "/business-technology-assessment/"
  },
  "/managed-technology-services/": {
    parent: "Business",
    title: "Managed Technology Services",
    intro: "A recurring technology relationship for Colorado businesses that want fewer surprises, better documentation, and a support partner who knows the environment.",
    body: ["We manage the practical layer between people, vendors, devices, connectivity, security, and change. The work is steady by design: monitor, maintain, improve, document, and support.", "For new clients, we begin with discovery or assessment so we can support the environment responsibly."],
    bullets: ["Help desk and staff support pathways", "Network, Wi-Fi, workstation, identity, and device coordination", "Vendor and ISP coordination", "Lifecycle planning and documentation updates"],
    cta: "Start the Managed Services Conversation",
    ctaHref: "/start-a-project/"
  },
  "/business-technology/": {
    parent: "Business",
    title: "Business Technology",
    intro: "Managed technology strategy, support, and infrastructure for Denver and Colorado organizations that need systems they can depend on.",
    body: ["This page introduces the business practice as a whole: recurring managed services, assessment-led onboarding, network and wireless planning, security coordination, documentation, and lifecycle stewardship.", "ThrillHouzz is positioned for ongoing technology responsibility, not one-off emergency work for unknown environments."],
    bullets: ["Colorado and Denver managed services positioning", "Assessment-led onboarding", "Documentation and support standards", "Infrastructure planning for offices and operating teams"],
    cta: "Explore Managed Services",
    ctaHref: "/managed-technology-services/"
  },
  "/business-technology-assessment/": {
    parent: "Business",
    title: "Business Technology Assessment",
    intro: "A clear starting point for organizations that need to understand what they have, what is fragile, and what should happen next.",
    body: ["The assessment maps systems, risks, ownership, documentation gaps, support patterns, vendor dependencies, and near-term priorities.", "It is especially useful before onboarding managed services, renovating an office, changing providers, or budgeting for the next technology cycle."],
    bullets: ["Environment review and stakeholder interviews", "Network, security, continuity, and documentation findings", "Prioritized remediation roadmap", "Plain-language executive summary"],
    cta: "Request an Assessment",
    ctaHref: "/start-a-project/"
  },
  "/estate/": {
    parent: "Estate",
    title: "Simplistic Connectivity for the Entire Portfolio.",
    intro: "Estate technology stewardship for Colorado properties and select national portfolios where continuity, documentation, and calm support matter.",
    body: ["Large residences and family portfolios accumulate layers of technology over time: networks, access, surveillance, lighting, shades, audio, climate, vendors, staff needs, guest expectations, and ownership transitions.", "ThrillHouzz brings structure to that complexity with recurring stewardship, vendor coordination, lifecycle planning, homeowner and staff support, and clear documentation."],
    bullets: ["Recurring estate technology management", "Portfolio documentation and continuity planning", "Homeowner, staff, and family office support", "Vendor coordination across residences and specialty systems"],
    cta: "Discuss Estate Stewardship",
    ctaHref: "/estate-technology-management/"
  },
  "/estate-technology-management/": {
    parent: "Estate",
    title: "Estate Technology Management",
    intro: "Ongoing stewardship for residences and portfolios where the technology should feel simple, documented, and professionally cared for.",
    body: ["We coordinate the ongoing technology picture so homeowners, estate managers, family offices, and staff are not left mediating every system or vendor alone.", "The relationship centers on continuity: knowing what exists, how it is connected, who supports it, and what should be improved before it becomes disruptive."],
    bullets: ["Recurring system reviews and maintenance coordination", "Support for homeowners, estate teams, and trusted representatives", "Vendor alignment for network, security, automation, AV, lighting, and access systems", "Lifecycle planning for upgrades and replacement windows"],
    cta: "Start Estate Management",
    ctaHref: "/start-a-project/"
  },
  "/estate-technology/": {
    parent: "Estate",
    title: "Estate Technology",
    intro: "Technology planning, remediation, and ongoing stewardship for private residences, estates, and select national portfolios.",
    body: ["Estate technology should feel simple to the people who rely on it, even when the systems behind it are complex. ThrillHouzz helps bring order to networks, security, access, automation, lighting, AV, vendors, and documentation.", "The emphasis is recurring stewardship, continuity, and owner/staff support rather than isolated product installation."],
    bullets: ["Colorado and select national estate support", "Portfolio documentation and vendor coordination", "Homeowner, staff, estate manager, and family office support", "Lifecycle planning for complex properties"],
    cta: "Explore Estate Management",
    ctaHref: "/estate-technology-management/"
  },
  "/estate-assessment-remediation/": {
    parent: "Estate",
    title: "Estate Assessment & Remediation",
    intro: "For properties where technology has become difficult to understand, unreliable, undocumented, or dependent on too many disconnected vendors.",
    body: ["We identify what is installed, what is fragile, what is missing, and what needs immediate attention. Then we create a staged remediation plan that protects the household experience while improving the technical foundation.", "This is a practical entry point before recurring estate management or a larger renovation."],
    bullets: ["System inventory and documentation recovery", "Network, Wi-Fi, security, access, and automation review", "Vendor and warranty status mapping", "Staged remediation plan with priorities"],
    cta: "Request Estate Assessment",
    ctaHref: "/start-a-project/"
  },
  "/design-engineering/": {
    parent: "Design & Engineering",
    title: "System Technology, Thoughtfully Designed.",
    intro: "Technology design and engineering for architects, GCs, interior designers, electrical contractors, integrators, developers, estate managers, and family offices.",
    body: ["ThrillHouzz can participate as a design-only partner, an engineering resource, or an implementation collaborator. The best result comes when technology is planned early enough to disappear into the architecture.", "We translate owner expectations, trade requirements, infrastructure needs, and support realities into a coordinated system plan."],
    bullets: ["Technology narratives, scopes, and design coordination", "Low-voltage, network, wireless, security, access, and automation planning", "Trade coordination and documentation", "Design-only support available"],
    cta: "Bring Us Into the Project",
    ctaHref: "/trade-partners-professionals/"
  },
  "/trade-partners-professionals/": {
    parent: "Design & Engineering",
    title: "Trade Partners & Professionals",
    intro: "A technology partner for the professionals responsible for making ambitious spaces work.",
    body: ["We welcome architects, general contractors, designers, electrical contractors, integrators, developers, estate managers, and family offices who need clear technology thinking before the field work becomes expensive.", "Our role is to reduce ambiguity, coordinate with the right parties, and protect the design intent while giving the final system a dependable foundation."],
    bullets: ["Design-phase collaboration", "Owner and stakeholder interviews", "Trade-ready documentation", "Commissioning and support handoff"],
    cta: "Coordinate a Project",
    ctaHref: "/start-a-project/"
  },
  "/network-wireless/": {
    parent: "Capabilities",
    title: "Network & Wireless",
    intro: "Connectivity designed for real buildings, real users, and real operating expectations.",
    body: ["Network and wireless systems are the foundation for almost every modern experience. We design and support them with attention to coverage, reliability, security, documentation, and future change.", "For estates, offices, hospitality spaces, and complex residences, the network should be planned as infrastructure rather than an accessory."],
    bullets: ["Network architecture and segmentation", "Wi-Fi planning and remediation", "ISP and carrier coordination", "Documentation and management standards"],
    cta: "Plan Connectivity",
    ctaHref: "/start-a-project/"
  },
  "/security-access/": {
    parent: "Capabilities",
    title: "Security & Access",
    intro: "Physical and digital access systems coordinated around people, property, privacy, and continuity.",
    body: ["We help shape security and access decisions so they are useful to the people who live with them. That means clear roles, reliable infrastructure, responsible vendor coordination, and documentation that survives turnover.", "Security work is planned with appropriate discretion and without public claims about client sites."],
    bullets: ["Access control planning", "Surveillance infrastructure coordination", "Credential and user workflow review", "Vendor and monitoring alignment"],
    cta: "Review Security Needs",
    ctaHref: "/start-a-project/"
  },
  "/automation-lighting-experience/": {
    parent: "Capabilities",
    title: "Automation, Lighting & Experience",
    intro: "Experience systems that feel refined because the infrastructure, controls, and support model were considered together.",
    body: ["Lighting, shades, audio, climate, and automation should support the architecture and the people using the space. We help coordinate the experience layer without losing sight of the infrastructure behind it.", "The result should be intuitive for homeowners, staff, guests, and facilities teams."],
    bullets: ["Control experience planning", "Lighting and shade technology coordination", "AV and automation infrastructure alignment", "Commissioning and documentation handoff"],
    cta: "Design the Experience",
    ctaHref: "/design-engineering/"
  },
  "/infrastructure-systems-engineering/": {
    parent: "Capabilities",
    title: "Infrastructure & Systems Engineering",
    intro: "The technical backbone behind extraordinary places: planned, documented, and ready to be supported.",
    body: ["Infrastructure decisions shape every future service call, renovation, ownership transition, and user experience. We engineer the backbone so the visible technology can stay quiet.", "This includes pathways, equipment locations, rack planning, power coordination, environmental needs, labeling standards, and long-term service access."],
    bullets: ["Low-voltage infrastructure planning", "Rack, room, pathway, and power coordination", "Standards for documentation and labeling", "Commissioning and lifecycle planning"],
    cta: "Engineer the Foundation",
    ctaHref: "/start-a-project/"
  },
  "/about/": {
    parent: "About",
    title: "Technology for Extraordinary Places.",
    intro: "ThrillHouzz exists for spaces where technology must be capable, discreet, documented, and cared for over time.",
    body: ["The work sits between architecture, operations, family life, business continuity, and engineering. We help clients and project teams make better technology decisions before, during, and after implementation.", "Our posture is steady and collaborative: understand the people, understand the place, design the right system, and keep it supportable."],
    bullets: ["Business technology management", "Estate technology stewardship", "Design and engineering collaboration", "Long-term documentation and support thinking"],
    cta: "See Our Approach",
    ctaHref: "/our-approach/"
  },
  "/our-approach/": {
    parent: "About",
    title: "We Don&rsquo;t Start With Equipment. We Start With You.",
    intro: "The right technology plan begins with people, place, expectations, constraints, and continuity.",
    body: ["Equipment matters, but it is never the first question. We begin by understanding who will rely on the system, who will support it, what the space requires, and what failure would interrupt.", "From there, we define the model, design the system, engineer the details, implement carefully, commission thoroughly, document clearly, and manage the lifecycle."],
    bullets: ["Discover", "Design", "Engineer", "Implement", "Commission", "Document", "Manage"],
    cta: "Start With Discovery",
    ctaHref: "/start-a-project/"
  },
  "/technology-partners/": {
    parent: "About",
    title: "Technology Partners",
    intro: "ThrillHouzz coordinates across product categories and specialist vendors without turning public pages into a brand list or procurement catalog.",
    body: ["The right partner mix depends on the property, business, budget, lifecycle expectations, and existing systems. We evaluate and coordinate technology partners around fit, supportability, documentation, and continuity.", "Specific recommendations belong inside the discovery and design process rather than on a public pricing or product page."],
    bullets: ["Network and wireless platforms", "Security and access providers", "Automation, lighting, AV, and environmental systems", "Carrier, ISP, cloud, and managed service vendors"],
    cta: "Discuss Partner Fit",
    ctaHref: "/start-a-project/"
  },
  "/insights/": {
    parent: "Insights",
    title: "Insights",
    intro: "Practical notes for owners, operators, estate teams, and design professionals planning technology for complex spaces.",
    body: ["These placeholder insight topics establish the content structure without pretending published articles already exist. They can become Odoo CMS articles later.", "Use this section for thoughtful guidance, not generic technology news."],
    bullets: ["Why documentation is the most overlooked luxury technology feature", "When to involve technology design on an architectural project", "How estate technology portfolios become fragile, and how to stabilize them", "What Denver businesses should expect from managed technology support"],
    cta: "Talk Through a Topic",
    ctaHref: "/contact/"
  },
  "/client-support/": {
    parent: "Support",
    title: "Client Support",
    intro: "Support pathways for existing ThrillHouzz clients and managed environments.",
    body: ["This page is intentionally framed for current clients. New-client emergency break/fix is not advertised as a primary service.", "Use the form below to describe the issue, affected location, urgency, and the best contact path. In a live implementation, this would connect to the chosen support workflow or Odoo helpdesk process."],
    bullets: ["Existing client support request", "Location and system details", "Urgency and preferred contact method", "Documentation-aware follow-up"],
    form: "support"
  },
  "/contact/": {
    parent: "Contact",
    title: "Contact",
    intro: "A simple way to begin a conversation with ThrillHouzz.",
    body: ["Tell us what kind of place, portfolio, business, or project you are working with. We will use that context to route the conversation appropriately.", "For active client support, use the Client Support page instead."],
    bullets: ["Business technology", "Estate technology", "Design and engineering", "General inquiry"],
    form: "contact"
  },
  "/start-a-project/": {
    parent: "Start",
    title: "Start a Project",
    intro: "Begin with the place, people, timeline, and desired outcome. The equipment conversation comes later.",
    body: ["This intake is designed to route business, estate, and design-phase opportunities without forcing public pricing or premature product choices.", "Share what you know. ThrillHouzz can help clarify the rest during discovery."],
    bullets: ["Business managed services or assessment", "Estate stewardship or remediation", "Design and engineering collaboration", "Technology infrastructure planning"],
    form: "project"
  }
};

const home = () => `
  <section class="hero">
    <div class="hero-inner">
      <div class="eyebrow">DESIGN &bull; INTEGRATE &bull; SUPPORT</div>
      <h1>Technology for Extraordinary Places.</h1>
      <p>ThrillHouzz designs, integrates, and supports dependable technology systems for Colorado businesses, private estates, and design-led projects where the experience must feel effortless.</p>
      <div class="hero-ctas">
        <a class="button bronze" href="/start-a-project/">Start a Project</a>
        <a class="button secondary" style="color:white;border-color:rgba(255,255,255,.42)" href="/our-approach/">Our Approach</a>
      </div>
    </div>
  </section>
  <div class="below-fold-hint">
    <a class="hint" href="/business/"><strong>Business</strong><span>IT Systems Your Business Can Depend On.</span></a>
    <a class="hint" href="/estate/"><strong>Estate</strong><span>Simplistic Connectivity for the Entire Portfolio.</span></a>
    <a class="hint" href="/design-engineering/"><strong>Design</strong><span>System Technology, Thoughtfully Designed.</span></a>
  </div>
  <section class="section">
    <div class="wrap split">
      <div>
        <div class="kicker">Where We Begin</div>
        <h2>We Don&rsquo;t Start With Equipment. We Start With You.</h2>
      </div>
      <div class="route-copy">
        <p class="lead">Technology should serve the place, the people, the operations, and the long-term support model. ThrillHouzz begins with those realities before choosing systems.</p>
        <p>That approach keeps the work grounded: fewer disconnected products, fewer undocumented decisions, and a clearer path from design through ongoing support.</p>
        <div class="pill-row">
          <span class="pill">Colorado businesses</span><span class="pill">Private estates</span><span class="pill">Architectural projects</span><span class="pill">Select national portfolios</span>
        </div>
      </div>
    </div>
  </section>
  <section class="section navy blueprint">
    <div class="wrap">
      <div class="kicker">Our Model</div>
      <h2>One accountable technology center between the trades and the client.</h2>
      <div class="model">
        <div class="model-node"><h3>Trades &amp; Industries</h3><p>Architects, GCs, designers, electrical contractors, integrators, ISPs, security, AV, lighting, cloud, and specialist vendors.</p></div>
        <div class="model-line"></div>
        <div class="model-node center"><h3>ThrillHouzz</h3><p>Design, integration, support, documentation, coordination, commissioning, and recurring stewardship.</p></div>
        <div class="model-line"></div>
        <div class="model-node"><h3>Client</h3><p>Owners, operators, estate managers, family offices, staff, executives, and the people who rely on the systems every day.</p></div>
      </div>
    </div>
  </section>
  <section class="section warm">
    <div class="wrap">
      <div class="kicker">The ThrillHouzz Method</div>
      <h2>Discover. Design. Engineer. Implement. Commission. Document. Manage.</h2>
      <div class="method">${["Discover","Design","Engineer","Implement","Commission","Document","Manage"].map((s,i)=>`<div class="step"><span>0${i+1}</span><strong>${s}</strong><p>${methodText[s]}</p></div>`).join("")}</div>
    </div>
  </section>
  <section class="section">
    <div class="wrap grid three">
      ${practiceCard("Business Technology", "Managed services, assessments, and dependable support for Denver and Colorado organizations.", "/business/")}
      ${practiceCard("Estate Technology", "Recurring stewardship, documentation, vendor coordination, and continuity for residences and portfolios.", "/estate/")}
      ${practiceCard("Design & Engineering", "Design-only or collaborative engineering support for professionals shaping extraordinary places.", "/design-engineering/")}
    </div>
  </section>
  <section class="section navy">
    <div class="wrap split">
      <div><div class="kicker">Next Step</div><h2>Bring clarity to the technology before it becomes expensive to change.</h2></div>
      <div><p class="lead">Start with a project, assessment, estate review, or design coordination conversation. Public pricing is intentionally absent because the right scope depends on the place and operating model.</p><a class="button bronze" href="/start-a-project/">Start a Project</a></div>
    </div>
  </section>`;

const methodText = {
  Discover: "People, place, systems, expectations, constraints.",
  Design: "Experience, infrastructure, coordination, and service model.",
  Engineer: "Details, pathways, standards, documentation, dependencies.",
  Implement: "Careful field work and vendor alignment.",
  Commission: "Test, tune, confirm, and hand over with confidence.",
  Document: "Create usable records for future support.",
  Manage: "Steward the system through its lifecycle."
};

function practiceCard(title, text, href) {
  return `<a class="card" href="${href}"><span class="label">Practice</span><h3>${title}</h3><p>${text}</p><span class="button secondary">Explore</span></a>`;
}

function pageTemplate(page) {
  return `
    <section class="route-hero blueprint">
      <div class="wrap">
        <div class="breadcrumb">${page.parent}</div>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap route-layout">
        <article class="route-copy">
          ${page.body.map(p => `<p class="lead">${p}</p>`).join("")}
          <ul class="list">${page.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
          ${page.form ? form(page.form) : `<div class="pill-row"><a class="button bronze" href="${page.ctaHref}">${page.cta}</a><a class="button secondary" href="/our-approach/">See the Method</a></div>`}
          ${relatedSection(page.parent)}
        </article>
        <aside class="sidebar">
          <div class="kicker">Related</div>
          ${serviceLinks.map(([href, label]) => `<a class="side-link" href="${href}">${label}</a>`).join("")}
        </aside>
      </div>
    </section>`;
}

function relatedSection(parent) {
  if (parent === "Insights") return insightsList();
  if (parent === "Projects") return projectsList();
  return `<section class="section thin" style="padding-left:0;padding-right:0"><div class="grid two">${practiceCard("Our Approach", "How ThrillHouzz moves from discovery to management.", "/our-approach/")}${practiceCard("Projects", "A reusable case-study layout with clearly marked placeholders.", "/projects/")}</div></section>`;
}

function projectsList() {
  return `<section class="section thin" style="padding-left:0;padding-right:0"><div class="project-card"><div class="project-visual"></div><div class="project-copy"><span class="label">Placeholder Case Study</span><h3>Estate Technology Stabilization</h3><p>Generic example layout only. No client name, location, metric, testimonial, or project claim is implied.</p><ul class="list"><li>Discovery and documentation recovery</li><li>Network and vendor coordination</li><li>Lifecycle roadmap for recurring stewardship</li></ul></div></div></section>`;
}

function insightsList() {
  return `<section class="section thin" style="padding-left:0;padding-right:0"><div class="grid two">
    <div class="card"><span class="label">Insight Placeholder</span><h3>Documentation as a luxury feature</h3><p>Why extraordinary properties need records that can survive staff, vendor, and ownership changes.</p></div>
    <div class="card"><span class="label">Insight Placeholder</span><h3>Design technology early</h3><p>How early coordination protects architecture, budgets, and the eventual support experience.</p></div>
  </div></section>`;
}

function form(type) {
  const support = type === "support";
  const project = type === "project";
  return `<form class="form" data-form>
    <div class="success" data-success>${support ? "Support request captured for this prototype. Connect this form to Odoo Helpdesk or your preferred support workflow before production use." : "Inquiry captured for this prototype. Connect this form to Odoo CRM or your preferred intake workflow before production use."}</div>
    <label>Name<input required name="name" autocomplete="name"></label>
    <label>Email<input required type="email" name="email" autocomplete="email"></label>
    <label>${support ? "Client / Location" : "Company, property, or project"}<input name="context"></label>
    <label>Inquiry type<select name="type"><option>${project ? "Business technology" : "General inquiry"}</option><option>Estate technology</option><option>Design & engineering</option><option>Client support</option><option>Assessment</option></select></label>
    <label>${support ? "Issue or request" : "What should ThrillHouzz know?"}<textarea required name="message"></textarea></label>
    <button class="button bronze" type="submit">${support ? "Submit Support Request" : "Send Inquiry"}</button>
  </form>`;
}

function projectsPage() {
  return `
    <section class="route-hero blueprint"><div class="wrap"><div class="breadcrumb">Projects</div><h1>Projects</h1><p>A case-study framework for future proof. Placeholder content is clearly marked because real client names, metrics, testimonials, and claims are not being invented.</p></div></section>
    <section class="section"><div class="wrap">
      <div class="grid two">
        ${caseStudy("Private Estate Technology Stewardship", "Placeholder layout for a residence or portfolio engagement.", ["Discovery and documentation", "Network and system stabilization", "Recurring management model"])}
        ${caseStudy("Design-Phase Infrastructure Coordination", "Placeholder layout for architect, GC, designer, and electrical collaboration.", ["Owner expectation mapping", "Infrastructure planning", "Commissioning and handoff documentation"])}
      </div>
    </div></section>`;
}

function caseStudy(title, text, bullets) {
  return `<article class="project-card"><div class="project-visual"></div><div class="project-copy"><span class="label">Generic Placeholder</span><h3>${title}</h3><p>${text}</p><ul class="list">${bullets.map(b=>`<li>${b}</li>`).join("")}</ul><a class="button secondary" href="/start-a-project/">Discuss Similar Work</a></div></article>`;
}

function render() {
  const path = normalize(location.pathname);
  let html;
  if (path === "/") html = home();
  else if (path === "/projects/" || path === "/case-study/") html = projectsPage();
  else html = pageTemplate(pages[path] || pages["/contact/"]);
  document.getElementById("app").innerHTML = html;
  document.querySelectorAll("[data-form]").forEach(formEl => {
    formEl.addEventListener("submit", event => {
      event.preventDefault();
      formEl.querySelector("[data-success]").style.display = "block";
      formEl.reset();
    });
  });
  document.title = `${(pages[path]?.title || (path === "/" ? "Technology for Extraordinary Places" : "Projects")) .replace(/&rsquo;/g, "'")} | ThrillHouzz`;
}

function normalize(path) {
  if (!path.endsWith("/")) path += "/";
  return path;
}

document.getElementById("menu").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu").setAttribute("aria-expanded", open ? "true" : "false");
});

render();
