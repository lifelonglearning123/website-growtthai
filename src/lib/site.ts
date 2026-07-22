/**
 * Central site content & configuration.
 * Everything visitor-facing lives here so the brand, copy, pricing and
 * contact details can be changed in one place without touching components.
 */

export const site = {
  brand: {
    name: "Growtth",
    // Lowercase logotype base + gold TLD accent, rendered as "growtth.ai".
    wordmark: "growtth",
    tld: ".ai",
    // Used in the <title>, footer legal line, etc.
    legalName: "Shreeji Graphics Ltd",
    tagline: "AI that grows your beauty business.",
    domain: "growtth.ai",
    email: "support@growtth.ai",
    phone: "+44 (0)141 000 0000",
    location: "Renfrew · United Kingdom",
  },

  nav: [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
  ],

  hero: {
    eyebrow: "AI for the beauty industry",
    title: "Fully booked,",
    titleAccent: "effortlessly.",
    subtitle:
      "Growtth is the AI growth platform built for salons, studios and solo beauty pros. It answers every call, wins 5-star reviews, follows up with new leads in seconds, and keeps your clients rebooking — so you can stay behind the chair, not the screen.",
    primaryCta: { label: "Book a demo", href: "#contact" },
    secondaryCta: { label: "See how it works", href: "#how" },
    note: "No card required · Done-for-you setup · Live in under a week",
  },

  trust: {
    line: "Trusted by beauty studios across the UK",
    logos: ["Blink Beauty", "The Brow Room", "Lash & Co.", "Studio Noir", "Gilded"],
  },

  products: {
    eyebrow: "One platform",
    title: "Four AI tools. One beautifully simple system.",
    subtitle:
      "Every part of Growtth works together on autopilot — capturing the enquiry, booking the appointment, and turning one visit into a lifetime of loyalty.",
    items: [
      {
        id: "voice",
        tag: "Growtth Voice",
        name: "AI Voice Receptionist",
        headline: "Never miss another booking.",
        body:
          "A warm, on-brand AI voice answers every call 24/7 — even when you're mid-treatment. It books appointments straight into your calendar, answers your most-asked questions, and fills last-minute cancellations automatically.",
        bullets: [
          "Answers instantly, day or night",
          "Books & reschedules into your calendar",
          "Sounds human — in your salon's tone",
        ],
      },
      {
        id: "crm",
        tag: "Growtth CRM",
        name: "Client CRM & Automations",
        headline: "One home for every client.",
        body:
          "Every client, message and appointment in one place. Automated reminders slash no-shows, smart rebooking nudges keep chairs full, and birthday offers bring clients back — all sent for you, in your voice.",
        bullets: [
          "Automated reminders cut no-shows",
          "Two-way texting from one inbox",
          "Rebooking & win-back on autopilot",
        ],
      },
      {
        id: "reviews",
        tag: "Growtth Reviews",
        name: "AI Google Reviews",
        headline: "Rise to the top of local search.",
        body:
          "Growtth asks your happiest clients for a review at exactly the right moment, then replies to every review in your voice. More 5-star ratings means more visibility — and more walk-ins from Google.",
        bullets: [
          "Perfectly-timed review requests",
          "AI replies to every review for you",
          "Climb the local Google rankings",
        ],
      },
      {
        id: "leads",
        tag: "Growtth Leads",
        name: "AI Lead Generation",
        headline: "A steady stream of new clients.",
        body:
          "AI-run ads and landing pages bring new clients in — then Growtth calls and texts every lead within 60 seconds while they're still interested. No more leads going cold in a busy inbox.",
        bullets: [
          "Instant call + text in 60 seconds",
          "Done-for-you ads & landing pages",
          "Turns clicks into booked chairs",
        ],
      },
    ],
  },

  how: {
    eyebrow: "How it works",
    title: "Live in under a week. Done for you.",
    subtitle:
      "No tech headaches. We build, connect and launch everything — you just watch your calendar fill up.",
    steps: [
      {
        n: "01",
        title: "We map your salon",
        body:
          "A quick call to understand your services, prices, hours and voice. We tailor Growtth around exactly how you work.",
      },
      {
        n: "02",
        title: "We set everything up",
        body:
          "We connect your calendar, phone number and Google profile, and configure your AI in your brand's tone — completely done-for-you.",
      },
      {
        n: "03",
        title: "You go live",
        body:
          "Growtth starts answering calls, requesting reviews and following up with leads. You get your evenings back.",
      },
    ],
  },

  results: {
    eyebrow: "The results",
    title: "Less admin. More clients. Fuller chairs.",
    subtitle:
      "Figures are illustrative of typical outcomes for beauty businesses running the full Growtth suite.",
    stats: [
      { value: "24/7", label: "Calls answered — never miss a booking" },
      { value: "+38%", label: "More 5-star Google reviews" },
      { value: "60s", label: "Average new-lead response time" },
      { value: "9 hrs", label: "Admin saved every week" },
    ],
  },

  testimonials: {
    eyebrow: "Loved by beauty pros",
    title: "Salon owners are getting their time back.",
    items: [
      {
        quote:
          "Growtth answers the phone while I'm with a client and books them straight in. I've stopped losing bookings to voicemail completely.",
        name: "Sophie R.",
        role: "Brow & Lash Studio, Glasgow",
      },
      {
        quote:
          "We went from 40 to over 120 Google reviews in three months. New clients now find us first when they search.",
        name: "Amara K.",
        role: "Aesthetics Clinic, Manchester",
      },
      {
        quote:
          "The instant text-back is a game changer. Leads that used to go cold are now booked before they've closed the ad.",
        name: "Chloe M.",
        role: "Nail & Beauty Bar, Leeds",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Simple plans that pay for themselves.",
    subtitle:
      "One recovered no-show or booked lead can cover your whole month. Cancel anytime.",
    note: "All plans include done-for-you setup and UK-based support. Prices exclude VAT.",
    tiers: [
      {
        name: "Essentials",
        price: "£99",
        cadence: "/month",
        tagline: "For solo pros getting organised.",
        featured: false,
        cta: { label: "Start with Essentials", href: "#contact" },
        features: [
          "Growtth CRM & client inbox",
          "AI Google Reviews engine",
          "Automated reminders & rebooking",
          "Two-way SMS with clients",
          "Up to 500 contacts",
        ],
      },
      {
        name: "Growth",
        price: "£199",
        cadence: "/month",
        tagline: "Our most popular plan.",
        featured: true,
        cta: { label: "Choose Growth", href: "#contact" },
        features: [
          "Everything in Essentials",
          "Growtth Leads — ads + instant follow-up",
          "Missed-call text-back",
          "Landing pages & booking forms",
          "Up to 2,500 contacts",
          "Priority support",
        ],
      },
      {
        name: "Salon Suite",
        price: "£349",
        cadence: "/month",
        tagline: "Full automation, everything on.",
        featured: false,
        cta: { label: "Go all-in", href: "#contact" },
        features: [
          "Everything in Growth",
          "Growtth Voice — 24/7 AI receptionist",
          "Unlimited contacts",
          "Multi-location ready",
          "Dedicated onboarding manager",
          "Done-for-you campaign builds",
        ],
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Everything you need to know.",
    items: [
      {
        q: "Do I need to be technical to use Growtth?",
        a: "Not at all. Setup is completely done-for-you — we connect your calendar, phone and Google profile and configure everything. You simply approve it and go live.",
      },
      {
        q: "Will the AI sound like a robot to my clients?",
        a: "No. The AI voice is warm and natural, and it's trained on your services, prices and tone of voice so it sounds like a friendly member of your team.",
      },
      {
        q: "Can I keep my existing phone number and calendar?",
        a: "Yes. Growtth works alongside your current number and connects to the calendar tools you already use, so nothing gets disrupted.",
      },
      {
        q: "How quickly will I see results?",
        a: "Most salons are live within a week and see recovered bookings and new reviews within the first month.",
      },
      {
        q: "Is there a long contract?",
        a: "No lock-in. All plans are month-to-month and you can cancel anytime.",
      },
    ],
  },

  contact: {
    eyebrow: "Book a demo",
    title: "See Growtth working on your salon.",
    subtitle:
      "Book a free 15-minute demo. We'll show you exactly how Growtth fills your calendar — no pressure, no jargon.",
    // The interest options shown in the form dropdown.
    interests: [
      "The full Growtth suite",
      "Growtth Voice (AI receptionist)",
      "Growtth CRM & automations",
      "Growtth Reviews (Google)",
      "Growtth Leads (new clients)",
      "Just exploring",
    ],
    success: {
      title: "You're all set.",
      body:
        "Thanks — we've received your details and a member of the Growtth team will be in touch shortly to arrange your demo.",
    },
  },

  /**
   * Legal / policy details used by the Privacy and Terms pages and the footer
   * legal line. Growtth is the trading brand; Shreeji Graphics Ltd is the
   * company behind it and the data controller.
   */
  legal: {
    company: "Shreeji Graphics Ltd",
    tradingAs: "Growtth",
    email: "support@growtth.ai",
    address: "Renfrew, United Kingdom",
    // Shown as "Last updated" on both policy pages.
    updated: "22 July 2026",
    // Courts / law that govern the Terms.
    jurisdiction: "Scotland",
    pages: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  footer: {
    blurb:
      "The AI growth platform built exclusively for the beauty industry. More bookings, more reviews, more loyal clients — on autopilot.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "AI Voice", href: "#product" },
          { label: "Client CRM", href: "#product" },
          { label: "AI Reviews", href: "#product" },
          { label: "AI Leads", href: "#product" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "How it works", href: "#how" },
          { label: "Results", href: "#results" },
          { label: "Pricing", href: "#pricing" },
          { label: "Book a demo", href: "#contact" },
        ],
      },
    ],
  },
} as const;

export type Site = typeof site;
