"""Build the public ThrillHouzz estate readiness worksheet."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "assets" / "estate-technology-readiness-checklist.pdf"
LOGO = ROOT / "dist" / "assets" / "thrillhouzz-logo.png"

W, H = 612, 792
NAVY = colors.HexColor("#071a2b")
INK = colors.HexColor("#152638")
BRONZE = colors.HexColor("#a58143")
CREAM = colors.HexColor("#f7f5f0")
PALE = colors.HexColor("#e7e8e6")
MUTED = colors.HexColor("#52616e")

DOMAINS = [
    ("01", "System knowledge & documentation", [
        "We have a current inventory of network, security, controls, AV, and critical equipment.",
        "A readable system diagram shows key dependencies, locations, and service providers.",
        "Configuration changes and service history are recorded for future support.",
        "An authorized person can find the right documents without relying on one vendor.",
    ]),
    ("02", "Connectivity & resilience", [
        "Wireless coverage has been checked in the spaces people actually use.",
        "Critical systems have a documented response plan for an internet or power outage.",
        "Backup connectivity and power are tested where the property's needs justify them.",
        "Remote access is controlled, documented, and reviewed when roles change.",
    ]),
    ("03", "Access & privacy", [
        "There is a current list of who can access systems, apps, and property technology.",
        "Former staff and vendors lose access promptly when their work ends.",
        "Shared or default accounts are identified and reduced where practical.",
        "Sensitive security details are stored separately from ordinary operating notes.",
    ]),
    ("04", "Security & response", [
        "Camera, intrusion, access, and intercom systems have clear operational owners.",
        "Alerts reach the right people, and those people know what action to take.",
        "System updates and security reviews have a defined cadence and owner.",
        "There is a documented escalation path for an outage or suspected compromise.",
    ]),
    ("05", "Maintenance & lifecycle", [
        "Critical devices and software have a preventive maintenance schedule.",
        "Warranties, subscriptions, licensing, and support renewals are tracked.",
        "A replacement plan exists for equipment near end of support or useful life.",
        "Recent maintenance work is recorded and checked for the intended result.",
    ]),
    ("06", "Vendor accountability", [
        "Each provider's scope and point of contact are documented.",
        "Someone coordinates issues that cross network, security, electrical, and AV trades.",
        "Open issues have an owner, next action, and follow-up date.",
        "Vendors can receive the information they need without broad permanent access.",
    ]),
    ("07", "People & portfolio continuity", [
        "Homeowners and staff know one clear path for requesting technology help.",
        "A new manager or support provider can take over from current records.",
        "Where there are multiple properties, core standards and support paths are consistent.",
        "Arrival, departure, seasonal, and turnover routines include technology checks.",
    ]),
]


def wrap(text, font, size, width):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            line = candidate
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def paragraph(c, text, x, top, width, size=10, leading=15, color=INK, font="Helvetica"):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, top, line)
        top -= leading
    return top


def page_base(c, number, title):
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, H - 72, W, 72, fill=1, stroke=0)
    c.setFillColor(BRONZE)
    c.rect(40, H - 72, 70, 2, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(colors.white)
    c.drawString(40, H - 30, "THRILLHOUZZ  /  ESTATE TECHNOLOGY")
    c.setFont("Helvetica", 8)
    c.drawRightString(W - 40, H - 30, "DESIGN  •  INTEGRATE  •  SUPPORT")
    c.setFillColor(INK)
    c.setFont("Helvetica", 20)
    c.drawString(40, H - 108, title)
    c.setStrokeColor(PALE)
    c.line(40, 42, W - 40, 42)
    c.setFont("Helvetica", 8)
    c.setFillColor(MUTED)
    c.drawString(40, 26, "Technology for Extraordinary Places.  |  thrillhouzz.com")
    c.drawRightString(W - 40, 26, f"{number} / 4")


def domain(c, number, title, prompts, top):
    c.setFillColor(NAVY)
    c.roundRect(40, top - 26, W - 80, 30, 3, fill=1, stroke=0)
    c.setFillColor(BRONZE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(51, top - 15, number)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(79, top - 15, title.upper())
    top -= 34
    for prompt in prompts:
        lines = wrap(prompt, "Helvetica", 9, 372)
        c.setFillColor(INK)
        c.setFont("Helvetica", 9)
        for line in lines:
            c.drawString(46, top, line)
            top -= 10
        c.setStrokeColor(BRONZE)
        for x in (444, 480, 516):
            c.rect(x, top + 3, 10, 10, fill=0, stroke=1)
        top -= 8
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Bold", 8)
    c.drawRightString(W - 44, top + 2, "DOMAIN SCORE  ____ / 8")
    return top - 14


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=(W, H), pageCompression=1)
    c.setTitle("Estate Technology Readiness Checklist | ThrillHouzz")
    c.setAuthor("ThrillHouzz")

    # Cover and instructions.
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 318, W, 474, fill=1, stroke=0)
    c.setFillColor(BRONZE)
    c.rect(40, 715, 110, 3, fill=1, stroke=0)
    if LOGO.exists():
        c.setFillColor(colors.white)
        c.roundRect(40, 634, 175, 60, 3, fill=1, stroke=0)
        c.drawImage(ImageReader(str(LOGO)), 51, 644, width=153, height=41, preserveAspectRatio=True, anchor="c", mask="auto")
    c.setFillColor(colors.white)
    c.setFont("Helvetica", 13)
    c.drawString(40, 590, "A practical worksheet for homes and property portfolios")
    c.setFont("Helvetica-Bold", 32)
    c.drawString(40, 535, "ESTATE TECHNOLOGY")
    c.drawString(40, 494, "READINESS CHECKLIST")
    c.setStrokeColor(BRONZE)
    c.setLineWidth(2)
    c.line(40, 467, 152, 467)
    paragraph(c, "See where documentation, connectivity, security, vendors, maintenance, and staff support are strong - and where the next failure may become a discovery project.", 40, 438, 500, 12, 19, colors.white)
    c.setFillColor(BRONZE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(40, 351, "7 DOMAINS  /  28 CHECKS  /  ONE CLEARER NEXT STEP")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(40, 281, "How to use this checklist")
    paragraph(c, "For each statement, mark 0 if the answer is no or unknown, 1 if it is partly true, or 2 if it is current and verified. Add each domain's four scores, then use the final page to identify three practical next actions.", 40, 256, 515, 10, 15)
    paragraph(c, "Use this with the people responsible for technology, the property, and the vendors. Do not write passwords, alarm codes, floor plans, camera locations, private addresses, or sensitive household details on this worksheet.", 40, 175, 515, 10, 15, MUTED)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(40, 30, "A planning aid, not a security audit or guarantee of performance.")
    c.drawRightString(W - 40, 30, "1 / 4")
    c.showPage()

    page_base(c, 2, "Assess the environment")
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(MUTED)
    c.drawRightString(W - 43, 651, "NO / UNKNOWN     PARTIAL      VERIFIED")
    top = 640
    for number, title, prompts in DOMAINS[:4]:
        top = domain(c, number, title, prompts, top)
    c.showPage()

    page_base(c, 3, "Assess the operating model")
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(MUTED)
    c.drawRightString(W - 43, 651, "NO / UNKNOWN     PARTIAL      VERIFIED")
    top = 640
    for number, title, prompts in DOMAINS[4:]:
        top = domain(c, number, title, prompts, top)
    c.showPage()

    page_base(c, 4, "Turn findings into a plan")
    paragraph(c, "A low score is a useful starting point, not a verdict. Prioritize gaps that affect security, outages, access, and the ability to support the property when people or vendors change.", 40, 649, 520, 10, 15)
    c.setFillColor(NAVY)
    c.roundRect(40, 410, W - 80, 170, 4, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(55, 554, "YOUR DOMAIN SCORES")
    c.setFont("Helvetica", 8)
    short_titles = ["System knowledge & docs", "Connectivity & resilience", "Access & privacy", "Security & response", "Maintenance & lifecycle", "Vendor accountability", "People & portfolio"]
    for i, title in enumerate(short_titles):
        col = 0 if i < 4 else 1
        row = i if i < 4 else i - 4
        x = 55 + col * 263
        y = 528 - row * 22
        c.drawString(x, y, title)
        c.drawRightString(x + 232, y, "____ / 8")
    c.setFillColor(BRONZE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(55, 428, "TOTAL")
    c.drawRightString(W - 55, 428, "____ / 56")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(40, 390, "Three actions to take in the next 30 days")
    for i in range(3):
        y = 352 - i * 77
        c.setFillColor(BRONZE)
        c.circle(53, y, 12, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 9)
        c.drawCentredString(53, y - 3, str(i + 1))
        c.setStrokeColor(PALE)
        c.line(75, y - 17, W - 40, y - 17)
        c.line(75, y - 41, W - 40, y - 41)
    c.setFillColor(NAVY)
    c.roundRect(40, 66, W - 80, 52, 4, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(55, 95, "Want help connecting the findings across every property?")
    c.setFont("Helvetica", 9)
    c.drawString(55, 78, "Start with the outcome: thrillhouzz-website-7bdz.vercel.app/start-a-project/")
    c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
