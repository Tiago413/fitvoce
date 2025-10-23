import { CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OfferProps {
  title: string;
  subtitle: string;
  price: {
    currency: string;
    amount: string;
    installments: string;
  };
  included: string[];
  guarantee: {
    title: string;
    description: string;
  };
  cta: string;
  checkoutUrl: string;
  urgency: string;
}

export default function Offer({
  title,
  subtitle,
  price,
  included,
  guarantee,
  cta,
  checkoutUrl,
  urgency,
}: OfferProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-12 sm:py-20 bg-gradient-to-br from-white via-[#F8F9FB] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC93C] text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse shadow-lg">
            <Sparkles className="w-4 h-4" />
            Oferta de Lançamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E]">
            {subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#F15A24] to-[#d94d1a] rounded-3xl p-1 shadow-2xl mb-6">
          <div className="bg-white rounded-[1.4rem] p-6 sm:p-10">
            <div className="flex items-center justify-center gap-4 mb-8 bg-[#1A1A1A] text-white px-6 py-4 rounded-xl">
              <Clock className="w-5 h-5 text-[#FFC93C]" />
              <span className="text-sm font-semibold">{urgency}</span>
              <div className="flex gap-2 ml-2">
                <div className="bg-white/10 px-3 py-1 rounded-lg text-center min-w-[3rem]">
                  <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-[10px] text-white/70">horas</div>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-lg text-center min-w-[3rem]">
                  <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-[10px] text-white/70">min</div>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-lg text-center min-w-[3rem]">
                  <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-[10px] text-white/70">seg</div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-sm text-[#2E2E2E] mb-2">de <span className="line-through">R$ 197,00</span> por apenas</div>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-2xl text-[#2E2E2E] font-semibold">{price.currency}</span>
                <span className="text-5xl sm:text-7xl font-bold text-[#F15A24]">{price.amount}</span>
              </div>
              <div className="text-lg text-[#2E2E2E] font-semibold">
                ou {price.installments}
              </div>
            </div>

            <div className="bg-[#F8F9FB] rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
                Você recebe acesso completo a:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#F15A24] rounded-full p-1 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-[#2E2E2E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={checkoutUrl}
              className="block w-full bg-[#F15A24] text-white py-5 sm:py-6 rounded-xl font-bold text-lg sm:text-xl text-center hover:bg-[#d94d1a] transition-all hover:scale-105 shadow-2xl hover:shadow-[#F15A24]/50 mb-6"
              data-event="checkout-click"
            >
              {cta}
            </a>

            <div className="bg-gradient-to-r from-[#F15A24]/10 via-[#FFC93C]/10 to-[#F15A24]/10 border-2 border-[#F15A24]/20 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-6 h-6 text-[#F15A24]" />
                <span className="text-lg sm:text-xl font-bold text-[#1A1A1A]">
                  {guarantee.title}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#2E2E2E]">
                {guarantee.description}
              </p>
            </div>

            <div className="mt-6 text-center text-sm text-[#2E2E2E]">
              <CheckCircle2 className="w-4 h-4 inline text-green-600 mr-1" />
              Compra 100% segura e criptografada
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-[#2E2E2E]">
          Acesso liberado imediatamente após a confirmação do pagamento
        </div>
      </div>
    </section>
  );
}
