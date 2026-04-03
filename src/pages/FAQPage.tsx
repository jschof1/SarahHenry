import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What is a Celebrant?',
    a: 'A funeral celebrant is someone qualified to host and officiate funeral services. As well as conducting the funeral itself (non-religious and semi religious), celebrants are involved in planning the order of service, music, writing the eulogy and creating a meaningful service for the person who has died.',
  },
  {
    q: 'What are the benefits of having a celebrant led funeral?',
    a: 'One of the biggest benefits of a celebrant led funeral is their openness and inclusivity. They allow you to create a ceremony that is a true reflection of the deceased. Many feel that typical funerals do not offer any kind of emotional weight or psychological transformation, despite this being a huge part of the grieving process. However, a funeral celebrant will try to bring a sense of light to the ceremony, reminding the mourners that the individual lived a beautiful, meaningful life. It also gives you the flexibility to factor in different beliefs and wishes, without being tied to a specific structure.',
  },
  {
    q: 'How do I pay for a funeral celebrant?',
    a: 'This will be included as part of the costs you pay to the funeral director.',
  },
  {
    q: 'What should I consider for the content of the funeral service?',
    a: 'As part of the service I will carry out a home visit where I will ask questions to obtain information, stories and memories. Some ideas you may wish to think about include: where the deceased was born and grew up, siblings and family members, school days and childhood stories, partners, children grandchildren and other family members, closest friends, armed forces or national service, career plans and places of work, groups and societies they may have belonged to, interests and achievements, favourite memories, musical tastes, significant events, sayings and stories, what will you most remember them for, did they make any personal requests about their own funeral, will anybody else be speaking at or participating in the service.',
  },
  {
    q: 'Who should speak at the funeral?',
    a: 'It\'s entirely your choice. Many people will choose to have the celebrant do the bulk of the service, which is perfectly normal and understandable given the circumstances. However, should you wish a family member or close friend to speak about your loved one, conduct a reading or recite a poem, that is absolutely fine and we can discuss as part of my home visit and our working time together. Hymns & prayers can also be included should you wish.',
  },
  {
    q: 'Do I need an order of service?',
    a: 'There is a natural order on the day of the service, however it is entirely your decision if you wish to have a printed order of service that mourners can follow along and participate. Your Funeral Director will be happy to help arrange this for you should you wish.',
  },
  {
    q: 'Can I have a ceremony without going to the crematorium?',
    a: 'Yes, I can hold a service or celebration of life wherever you wish it to be.',
  },
  {
    q: 'Can a Celebrant legally marry you?',
    a: 'Choosing a civil celebrant to conduct your wedding means that you will have a much more personalised and bespoke ceremony. It does, however, mean that you will need to complete the legal paperwork separately at the registry office to make the marriage legally binding. This is relatively easy to do and I can talk you through the process in our "getting to know you" meeting or your local registry office for guidance.',
  },
  {
    q: 'Where can I get married?',
    a: 'Absolutely anywhere! That is the beauty of a celebrant led service. What you do need to consider though is the practicalities of your selected location, such as how do you get your guests there, is there a landowner that you need to seek permission from? You may already have selected your venue and engaged a wedding planner, but if not I will help and advise as much as you need.',
  },
  {
    q: 'Are there any rituals available that we should consider for our wedding?',
    a: 'There are so many rituals that can be used to make your wedding day special that it isn\'t possible to list them all here. Some of the more well known ones are Celtic Hand Fasting, Drinking from the Quaich (loving cup), Christian tradition of lighting a unity candle. Whatever you want we can include (as long as it is legal).',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="page-hero-floral page-hero-floral--photo page-hero-floral--faq" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold">
              Common Questions
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-50 text-brand-dark">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-[4px] border-lilac-brand bg-white rounded-brand shadow-lg overflow-hidden reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-lilac-50/50 transition-colors"
                  >
                    <span className="font-serif text-xl text-brand-dark pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-lilac-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-brand-dark">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-serif text-4xl text-brand-dark mb-4">
            What&apos;s next?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            If I have piqued your interest, I would love to have a proper chat with you over the phone or video call. This is a free, no obligation chat and I can tailor packages to fit your specific requirements.
          </p>
          <Link
            to="/contact"
            className="button-lift button-primary"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
