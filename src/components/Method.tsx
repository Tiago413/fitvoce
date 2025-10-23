import { Dumbbell, UtensilsCrossed, Smartphone, Users, Video } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface MethodProps {
  title: string;
  subtitle: string;
  features: Feature[];
  cta: string;
}

const iconMap: Record<number, any> = {
  0: Dumbbell,
  1: UtensilsCrossed,
  2: Smartphone,
  3: Users,
  4: Video,
};

export default function Method({ title, subtitle, features, cta }: MethodProps) {
  const scrollToApp = () => {
    const element = document.getElementById('app');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="beneficios" className="py-12 sm:py-20 bg-gradient-to-br from-[#F8F9FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[index] || Smartphone;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-[#F15A24] to-[#d94d1a] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#2E2E2E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToApp}
            className="bg-white text-[#F15A24] px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg border-2 border-[#F15A24] hover:bg-[#F15A24] hover:text-white transition-all hover:scale-105 shadow-lg"
          >
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}
