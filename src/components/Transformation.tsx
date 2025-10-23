import { CheckCircle2, TrendingUp } from 'lucide-react';

interface TransformationProps {
  title: string;
  subtitle: string;
  benefits: string[];
}

export default function Transformation({ title, subtitle, benefits }: TransformationProps) {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2E2E2E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F15A24] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Transformação Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#F15A24]/50 transition-all group">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#F15A24]/20 to-[#FFC93C]/20 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl">
                  {i === 1 ? '💪' : i === 2 ? '🔥' : i === 3 ? '⚡' : '✨'}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-sm font-bold">Transformação {i}</div>
                  <div className="text-xs text-white/70">Resultado real</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              O que você vai conquistar
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-[#F15A24] rounded-full p-1 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
