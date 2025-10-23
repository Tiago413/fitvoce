import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  headlineA: string;
  headlineB: string;
  subheadline: string;
  ctaPrimary: string;
  badge: string;
}

export default function Hero({ headlineA, headlineB, subheadline, ctaPrimary, badge }: HeroProps) {
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const savedVariant = sessionStorage.getItem('headline-variant');
    if (savedVariant === 'B') {
      setVariant('B');
    } else if (!savedVariant) {
      const randomVariant = Math.random() < 0.5 ? 'A' : 'B';
      setVariant(randomVariant);
      sessionStorage.setItem('headline-variant', randomVariant);
    }
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-[#F8F9FB] to-white pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#FFC93C]/20 border border-[#FFC93C]/40 text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#F15A24]" />
              {badge}
            </div>

            <h1
              data-variant={variant}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-tight"
            >
              {variant === 'A' ? headlineA : headlineB}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#2E2E2E] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subheadline}
            </p>

            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto bg-[#F15A24] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#d94d1a] transition-all hover:scale-105 shadow-2xl hover:shadow-[#F15A24]/50"
            >
              {ctaPrimary}
            </button>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#2E2E2E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F15A24]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F15A24]" />
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F15A24]" />
                <span>100% unissex</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-[#F15A24] to-[#d94d1a] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-[#1A1A1A] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F15A24] flex items-center justify-center text-white font-bold">
                      F
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Bem-vindo(a)!</div>
                      <div className="text-white/70 text-xs">Seu treino de hoje</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-[#FFC93C] rounded-full animate-pulse"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2E2E2E] font-semibold text-sm">Progresso Semanal</span>
                      <span className="text-[#F15A24] font-bold text-sm">5/5 ✓</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#F15A24] h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#F8F9FB] p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#1A1A1A]">12</div>
                      <div className="text-xs text-[#2E2E2E] mt-1">Treinos feitos</div>
                    </div>
                    <div className="bg-[#F8F9FB] p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#1A1A1A]">-3.2kg</div>
                      <div className="text-xs text-[#2E2E2E] mt-1">Progresso</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#F15A24] to-[#FFC93C] p-4 rounded-xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm">Treino Superior A</div>
                        <div className="text-xs opacity-90 mt-1">45 min • Intermediário</div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#FFC93C] text-[#1A1A1A] px-6 py-3 rounded-full font-bold text-sm shadow-xl border-4 border-white">
                Vídeos 3D inclusos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
