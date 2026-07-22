import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

const { legal, brand } = site;

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `How ${legal.company} (trading as ${brand.name}) collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

const mailto = <a href={`mailto:${legal.email}`}>{legal.email}</a>;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    content: (
      <>
        <p>
          {brand.name} is a trading name of <strong>{legal.company}</strong>,{" "}
          {legal.address}. In this policy &ldquo;we&rdquo;, &ldquo;us&rdquo; and
          &ldquo;our&rdquo; mean {legal.company}.
        </p>
        <p>
          We are the <strong>data controller</strong> for the personal
          information you give us through this website and for the information
          we hold about our own clients. Where we run the {brand.name} platform
          on behalf of a salon or clinic, we act as a{" "}
          <strong>data processor</strong> for the client records that business
          stores in it — that business remains the controller of its own
          customer data.
        </p>
        <p>
          This policy explains what we collect, why, and what rights you have
          under the UK GDPR and the Data Protection Act 2018. Questions? Email{" "}
          {mailto}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "Information we collect",
    content: (
      <>
        <p>We collect only what we need to answer you and run our service.</p>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Demo and enquiry details</strong> — your name, email
            address, phone number, business name, the product you&apos;re
            interested in and anything you write in the message field.
          </li>
          <li>
            <strong>Correspondence</strong> — emails, calls and messages
            exchanged with our team.
          </li>
          <li>
            <strong>Account and billing details</strong> if you become a client,
            including the information needed to set up your services.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Technical data</strong> — IP address, browser and device
            type, and the pages you viewed, collected through server logs and
            analytics.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — see the cookies
            section below.
          </li>
        </ul>
        <p>
          We do not ask for special category data (such as health information)
          through this website. Please don&apos;t include it in the enquiry form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How and why we use it",
    content: (
      <>
        <p>
          We only use your personal information where the law allows. Our
          lawful bases are:
        </p>
        <ul>
          <li>
            <strong>To respond to your enquiry and arrange your demo</strong> —
            necessary to take steps at your request before entering a contract.
          </li>
          <li>
            <strong>To provide and support our services</strong>, including
            setup, onboarding, billing and support — performance of our contract
            with you.
          </li>
          <li>
            <strong>To send relevant updates about our services</strong> to
            existing and prospective business clients — our legitimate interest
            in promoting our business, or your consent where required. You can
            opt out at any time.
          </li>
          <li>
            <strong>To improve, secure and troubleshoot our website</strong> and
            protect against fraud and misuse — our legitimate interest in
            running a safe, effective service.
          </li>
          <li>
            <strong>To meet legal, accounting and regulatory obligations</strong>{" "}
            — compliance with a legal obligation.
          </li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it to make
          decisions that produce legal effects about you by automated means
          alone.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    content: (
      <>
        <p>
          Our website uses a small number of cookies and similar technologies.
          Strictly necessary cookies keep the site working and secure — these
          can&apos;t be switched off. Analytics cookies help us understand which
          pages are useful so we can improve them; we only set these where you
          have agreed, or where your browser settings allow it.
        </p>
        <p>
          You can block or delete cookies through your browser settings. If you
          do, parts of the site may not work as intended.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who we share it with",
    content: (
      <>
        <p>
          We share personal information only with trusted providers who help us
          run {brand.name}, and only as far as they need it. These include:
        </p>
        <ul>
          <li>
            <strong>Hosting and infrastructure providers</strong> who serve this
            website.
          </li>
          <li>
            <strong>CRM, telephony and messaging providers</strong> that store
            enquiries and power calls, texts and email follow-up.
          </li>
          <li>
            <strong>AI service providers</strong> that generate voice responses,
            review replies and message drafts. These providers process content
            on our instructions and are not permitted to use it to train their
            own models.
          </li>
          <li>
            <strong>Payment, accounting and professional advisers</strong>, and
            regulators or law enforcement where we are legally required to
            disclose.
          </li>
        </ul>
        <p>
          Every provider is bound by a written agreement requiring appropriate
          security and confidentiality. We never sell or rent your details to
          third parties for their own marketing.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    heading: "International transfers",
    content: (
      <p>
        Some of our providers are based outside the UK. Where personal
        information is transferred abroad, we rely on UK adequacy regulations or
        on approved safeguards such as the International Data Transfer Agreement
        or the UK Addendum to the EU Standard Contractual Clauses, so your
        information keeps an equivalent level of protection.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    content: (
      <>
        <p>
          We keep personal information only as long as we need it for the
          purpose we collected it, then delete or anonymise it. As a guide:
        </p>
        <ul>
          <li>
            <strong>Enquiries that don&apos;t become clients</strong> — up to 24
            months from your last contact with us.
          </li>
          <li>
            <strong>Client records</strong> — for the life of the contract and
            up to 6 years afterwards, to meet accounting and legal requirements.
          </li>
          <li>
            <strong>Call recordings and message logs</strong> — for the period
            agreed with the client business, and no longer than needed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    content: (
      <>
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li>Ask for a copy of the personal information we hold about you.</li>
          <li>Have inaccurate or incomplete information corrected.</li>
          <li>
            Ask us to delete your information where there&apos;s no good reason
            for us to keep it.
          </li>
          <li>
            Object to, or ask us to restrict, how we use it — including opting
            out of marketing at any time.
          </li>
          <li>Ask us to transfer your information to another provider.</li>
          <li>Withdraw consent where we rely on it, at any time.</li>
        </ul>
        <p>
          To exercise any of these, email {mailto}. We&apos;ll respond within one
          month. There&apos;s no charge, unless a request is clearly unfounded or
          excessive.
        </p>
        <p>
          If you&apos;re unhappy with how we&apos;ve handled your information,
          please tell us first so we can put it right. You also have the right to
          complain to the Information Commissioner&apos;s Office at{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "How we keep it safe",
    content: (
      <p>
        We use appropriate technical and organisational measures to protect your
        information, including encryption in transit, access controls, and
        limiting access to staff and providers who need it. No system is
        completely secure, but we have procedures in place to deal with any
        suspected breach and will notify you and the regulator where we are
        legally required to.
      </p>
    ),
  },
  {
    id: "children",
    heading: "Children",
    content: (
      <p>
        Our website and services are aimed at businesses and are not intended for
        anyone under 16. We don&apos;t knowingly collect information from
        children. If you believe a child has given us their details, contact{" "}
        {mailto} and we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time to reflect changes to our
        service or the law. The date at the top of this page shows when it was
        last revised. If the changes are significant, we&apos;ll let our clients
        know directly.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    content: (
      <>
        <p>
          For anything relating to privacy or your personal information, contact:
        </p>
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

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`How ${legal.company}, trading as ${brand.name}, collects, uses and protects personal information — written in plain English, not legalese.`}
      sections={sections}
    />
  );
}
