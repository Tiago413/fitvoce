import { AlertCircle } from 'lucide-react';

interface PainPoint {
  title: string;
  description: string;
}

interface PainPointsProps {
  painPoints: PainPoint[];
}

export default function PainPoints({ painPoints }: PainPointsProps) {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Você se identifica?
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E] max-w-2xl mx-auto">
            A maioria das pessoas falha não por falta de vontade, mas por falta de método.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="group bg-[#F8F9FB] p-6 sm:p-8 rounded-2xl border-2 border-transparent hover:border-[#F15A24]/30 transition-all hover:shadow-xl"
            >
              <div className="bg-[#F15A24]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F15A24] transition-colors">
                <AlertCircle className="w-6 h-6 text-[#F15A24] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3 leading-snug">
                {pain.title}
              </h3>
              <p className="text-sm sm:text-base text-[#2E2E2E] leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
