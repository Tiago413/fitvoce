import { Plus, TrendingUp } from 'lucide-react';

interface Upsell {
  title: string;
  description: string;
  price: string;
}

interface UpsellsProps {
  upsells: Upsell[];
}

export default function Upsells({ upsells }: UpsellsProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F15A24]/10 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Acelere seus resultados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3">
            Turbine seu programa
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E] max-w-2xl mx-auto">
            Adicione recursos extras com desconto especial de lançamento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upsells.map((upsell, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#F15A24]/30"
            >
              <div className="bg-gradient-to-br from-[#F15A24] to-[#d94d1a] w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Plus className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {upsell.title}
              </h3>

              <p className="text-sm sm:text-base text-[#2E2E2E] mb-6 leading-relaxed">
                {upsell.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-[#F15A24]">
                  {upsell.price}
                </span>
                <button className="bg-[#F8F9FB] text-[#F15A24] px-4 py-2 rounded-lg font-semibold hover:bg-[#F15A24] hover:text-white transition-all text-sm">
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
