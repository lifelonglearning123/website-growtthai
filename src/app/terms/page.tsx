import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

const { legal, brand } = site;

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `The terms on which ${legal.company} (trading as ${brand.name}) provides this website and its AI services.`,
  alternates: { canonical: "/terms" },
};

const mailto = <a href={`mailto:${legal.email}`}>{legal.email}</a>;

const sections: LegalSection[] = [
  {
    id: "about",
    heading: "About these terms",
    content: (
      <>
        <p>
          These terms govern your use of the {brand.domain} website and the{" "}
          {brand.name} services. {brand.name} is a trading name of{" "}
          <strong>{legal.company}</strong>, {legal.address}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
        </p>
        <p>
          By browsing this site or submitting an enquiry you accept these terms.
          If you don&apos;t accept them, please don&apos;t use the site. Where you
          sign a separate service agreement or order form with us, that agreement
          takes precedence over these terms if the two conflict.
        </p>
        <p>
          Our services are provided to businesses. Nothing here is intended to
          affect the statutory rights of a consumer.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    heading: "Using this website",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the site for anything unlawful, misleading or harmful, or in
            breach of anyone else&apos;s rights.
          </li>
          <li>
            Attempt to gain unauthorised access to the site, its servers or any
            connected system.
          </li>
          <li>
            Introduce viruses or malicious code, or place unreasonable load on
            the site through scraping, bots or automated tools.
          </li>
          <li>
            Submit false details, or someone else&apos;s contact details without
            their permission.
          </li>
        </ul>
        <p>
          We may suspend or withdraw access to the site at any time if we believe
          these terms have been breached.
        </p>
      </>
    ),
  },
  {
    id: "services",
    heading: "Our services and demos",
    content: (
      <>
        <p>
          {brand.name} provides AI tools for beauty and personal-care businesses,
          including an AI voice receptionist, a client CRM with automations, an
          AI Google reviews engine and AI lead follow-up. Exact scope, setup and
          support are set out in the plan or order form you agree with us.
        </p>
        <p>
          Booking a demo is free and places you under no obligation. A demo is
          not an offer of a contract — a contract forms only when we both agree a
          plan in writing.
        </p>
        <p>
          Descriptions, screenshots and figures on this website — including
          results, statistics and testimonials — are illustrative examples of
          typical outcomes. They are not a guarantee of the results your business
          will achieve.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    heading: "Plans, fees and payment",
    content: (
      <>
        <p>
          Prices shown on this website are in pounds sterling and exclude VAT
          unless stated otherwise. We may change our published prices at any
          time; changes to an existing subscription take effect only after we
          give you reasonable notice.
        </p>
        <ul>
          <li>Subscriptions are billed monthly in advance unless agreed otherwise.</li>
          <li>
            Usage-based costs — such as call minutes, messages or advertising
            spend — are charged in addition to the plan fee where they apply.
          </li>
          <li>
            We may suspend services if an invoice remains unpaid after we have
            asked you to settle it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    heading: "Your responsibilities as a client",
    content: (
      <>
        <p>
          To run {brand.name} on your behalf, we depend on you. You agree to:
        </p>
        <ul>
          <li>
            Give us accurate information about your business, services, prices
            and hours, and keep it up to date.
          </li>
          <li>
            Keep your account credentials secure and let us know promptly of any
            unauthorised use.
          </li>
          <li>
            Hold the necessary rights and consents for the client data you upload
            or ask us to contact, and comply with data protection and marketing
            law — including UK GDPR, PECR and the rules on calls, texts and
            emails.
          </li>
          <li>
            Ensure any call recording, review requests and automated messaging we
            configure for you are used lawfully and with proper notice to your
            customers.
          </li>
          <li>
            Review the AI-generated content, campaigns and pricing we set up
            before they go live.
          </li>
        </ul>
        <p>
          You remain the controller of your customers&apos; personal data. We
          process it on your instructions — see our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "ai-content",
    heading: "AI-generated content",
    content: (
      <>
        <p>
          Parts of our service use artificial intelligence to speak with callers,
          reply to reviews and draft messages. AI systems can occasionally
          produce inaccurate, incomplete or unexpected output.
        </p>
        <p>
          You are responsible for the content published or sent under your brand.
          We recommend you monitor conversations and review automated replies,
          particularly for pricing, availability, medical or aesthetic advice and
          anything else where an error could mislead a customer. AI output is not
          professional, legal, medical or financial advice.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-party services",
    content: (
      <p>
        Our services connect to platforms we don&apos;t control — including
        calendars, telephony and messaging networks, Google Business Profile and
        advertising platforms. Your use of those platforms is subject to their own
        terms, and their availability, policies and pricing can change. We are not
        responsible for a third-party platform&apos;s acts, outages or decisions,
        including any suspension of your account by them.
      </p>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property",
    content: (
      <>
        <p>
          The {brand.name} name, logo, software, website content and underlying
          systems belong to us or our licensors, and are protected by copyright,
          trade mark and other laws. Your plan grants you a non-exclusive,
          non-transferable right to use the services during your subscription —
          it does not transfer ownership.
        </p>
        <p>
          You keep ownership of your own content, brand assets and customer data.
          You grant us the licence needed to host and process them so we can
          deliver the service.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    heading: "Availability",
    content: (
      <p>
        We work hard to keep the service running, but we don&apos;t promise
        uninterrupted or error-free availability. We may carry out maintenance,
        updates or changes to features, and will aim to schedule anything
        disruptive outside peak hours where we can.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Liability",
    content: (
      <>
        <p>
          Nothing in these terms limits our liability for death or personal
          injury caused by our negligence, for fraud or fraudulent
          misrepresentation, or for anything else that cannot lawfully be
          limited.
        </p>
        <p>Subject to that, and to the extent permitted by law:</p>
        <ul>
          <li>
            We are not liable for loss of profit, revenue, business, goodwill,
            anticipated savings, or for indirect or consequential loss.
          </li>
          <li>
            We are not liable for missed bookings, lost leads or lost data caused
            by third-party platforms, network failures or inaccurate information
            supplied to us.
          </li>
          <li>
            Our total liability arising out of or in connection with the services
            in any 12-month period is limited to the fees you paid us in that
            period.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation",
    heading: "Cancellation and suspension",
    content: (
      <>
        <p>
          Subscriptions are month-to-month with no lock-in. You may cancel by
          giving us notice before your next billing date; your services continue
          until the end of the paid period, and fees already paid are
          non-refundable unless we agree otherwise.
        </p>
        <p>
          We may suspend or end your services if you materially breach these
          terms, fail to pay, or use the service in a way that is unlawful or
          risks harm to others. On termination we will, on request and within a
          reasonable period, provide an export of your client data before it is
          deleted.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    content: (
      <p>
        We may update these terms as our services evolve. The date at the top of
        this page shows the current version. Continued use of the website or
        services after an update means you accept the revised terms; for material
        changes affecting existing clients, we&apos;ll give reasonable notice.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing law",
    content: (
      <p>
        These terms and any dispute arising from them are governed by the law of{" "}
        {legal.jurisdiction}, and the courts of {legal.jurisdiction} have
        exclusive jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    content: (
      <>
        <p>Questions about these terms? Get in touch:</p>
        <p>
          <strong>{legal.company}</strong> (trading as {brand.name})
          <br />
          {legal.address}
          <br />
          {mailto}
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={`The terms on which ${legal.company}, trading as ${brand.name}, provides this website and its AI services to your business.`}
      sections={sections}
    />
  );
}
