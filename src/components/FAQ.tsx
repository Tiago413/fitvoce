import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faq: FAQItem[];
}

export default function FAQ({ faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F9FB] text-[#2E2E2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Dúvidas frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E]">
            Ainda tem dúvidas? A gente te ajuda.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FB] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#F15A24]/20 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
              >
                <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#F15A24] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-base sm:text-lg text-[#2E2E2E] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#F15A24]/10 to-[#FFC93C]/10 rounded-2xl p-8 border border-[#F15A24]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-base sm:text-lg text-[#2E2E2E] mb-4">
              Nossa equipe está pronta para te ajudar!
            </p>
            <a
              href="#suporte"
              className="inline-block bg-[#F15A24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-all hover:scale-105 shadow-lg"
            >
              Falar com Suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
