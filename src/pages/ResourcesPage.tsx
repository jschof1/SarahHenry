import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ParallaxBackdrop } from '../components/ParallaxBackdrop';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ResourceLink = {
  name: string;
  description: string;
  href: string;
};

type ResourceGroup = {
  kicker: string;
  title: string;
  intro: string;
  links: ResourceLink[];
};

const groups: ResourceGroup[] = [
  {
    kicker: 'Bereavement & Grief Support',
    title: 'Support after loss',
    intro:
      'If you or someone close to you is struggling with grief, the organisations below offer free, confidential\u00a0help.',
    links: [
      {
        name: 'Cruse Bereavement Support Scotland',
        description:
          'Free bereavement support, advice and information by phone, email and local groups across Scotland.',
        href: 'https://www.crusescotland.org.uk',
      },
      {
        name: 'Samaritans',
        description:
          'Round-the-clock listening service for anyone who is struggling to cope. Call 116 123, free from any phone.',
        href: 'https://www.samaritans.org',
      },
      {
        name: 'Marie Curie',
        description:
          'End-of-life and bereavement support, information for families, and a free support line.',
        href: 'https://www.mariecurie.org.uk',
      },
      {
        name: 'Child Bereavement UK',
        description:
          'Support for families when a baby or child of any age dies, and when a child is facing bereavement.',
        href: 'https://www.childbereavementuk.org',
      },
      {
        name: 'The Good Funeral Guide',
        description:
          'Independent, not-for-profit guidance on planning a funeral and understanding your options.',
        href: 'https://www.goodfuneralguide.co.uk',
      },
    ],
  },
  {
    kicker: 'Weddings & Civil Ceremonies',
    title: 'Planning the legal side of your wedding',
    intro:
      'A celebrant-led ceremony in Scotland is fully legal when conducted by an authorised celebrant. If you are choosing a celebrant who is not authorised to register your marriage, you will complete the legal paperwork separately — these links are a helpful starting point.',
    links: [
      {
        name: 'National Records of Scotland — Getting Married',
        description:
          'Official guidance on giving notice, required documents, and registering your marriage in Scotland.',
        href: 'https://www.nrscotland.gov.uk/registration/getting-married-in-scotland',
      },
      {
        name: 'mygov.scot — Marriage & Civil Partnership',
        description:
          'Step-by-step overview of the legal marriage process in Scotland, including fees and notice periods.',
        href: 'https://www.mygov.scot/browse/birth-death-family/marriage-civil-partnership',
      },
      {
        name: 'South Lanarkshire Council — Marriages',
        description:
          'Local marriage information for East Kilbride and the surrounding area — booking appointments and giving notice.',
        href: 'https://www.southlanarkshire.gov.uk/info/200208/marriages',
      },
    ],
  },
];

export default function ResourcesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero page-hero-has-parallax relative overflow-hidden pt-32 pb-20">
        <ParallaxBackdrop variant="about" overlay={false} />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold">
              Support &amp; Information
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              Helpful Links
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto mb-6" />
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
              A small, carefully chosen collection of UK organisations and resources
              that may be useful alongside the ceremonies I offer &mdash; whether you
              are grieving, planning a wedding, or simply looking for trusted
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell has-parallax text-brand-dark parallax-on-light">
        <ParallaxBackdrop variant="faq" />
        <div className="section-inner max-w-5xl">
          <div className="space-y-16">
            {groups.map((group) => (
              <div key={group.title} className="reveal">
                <div className="mb-8 max-w-3xl">
                  <span className="section-kicker text-lilac-500">{group.kicker}</span>
                  <h2 className="mt-3 font-serif text-3xl text-brand-dark sm:text-4xl">
                    {group.title}
                  </h2>
                  <div className="mt-4 w-12 h-0.5 bg-lilac-brand" />
                  <p className="mt-5 text-gray-600 leading-relaxed text-balance">{group.intro}</p>
                </div>

                <ul className="grid gap-5 md:grid-cols-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full rounded-brand border-2 border-lilac-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-lilac-brand hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-serif text-xl text-brand-dark group-hover:text-lilac-700 transition-colors">
                            {link.name}
                          </h3>
                          <ExternalLink
                            size={16}
                            className="mt-1 flex-shrink-0 text-lilac-400 transition-colors group-hover:text-lilac-600"
                          />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                          {link.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-brand-lg border-[4px] border-lilac-brand bg-lilac-50 p-8 reveal">
            <p className="text-sm leading-relaxed text-gray-700">
              These links are shared for information only and do not imply endorsement.
              The organisations listed are run independently of Sarah&apos;s Signature
              Ceremonies. If you come across a link that is no longer working, please
              let me know and I&apos;ll update it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell has-parallax text-brand-dark parallax-on-light">
        <ParallaxBackdrop variant="contact" />
        <div className="section-inner text-center reveal">
          <div className="mx-auto max-w-2xl rounded-brand-lg border-2 border-lilac-300/90 bg-white px-8 py-10 shadow-[0_20px_50px_rgba(26,26,26,0.12)] ring-1 ring-black/5 sm:px-12">
            <h2 className="font-serif text-4xl text-brand-dark mb-4">
              Anything you&apos;d like to talk through?
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              If you would prefer a conversation rather than a link, I&apos;m only a
              phone call or message away.
            </p>
            <Link to="/contact" className="button-lift button-primary">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
