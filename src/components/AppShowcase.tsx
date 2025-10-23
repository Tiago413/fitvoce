import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { useState } from 'react';

interface Screen {
  name: string;
  description: string;
}

interface AppShowcaseProps {
  title: string;
  subtitle: string;
  screens: Screen[];
}

export default function AppShowcase({ title, subtitle, screens }: AppShowcaseProps) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const colors = ['#F15A24', '#FFC93C', '#1A1A1A', '#F15A24', '#FFC93C'];

  return (
    <section id="app" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F15A24]/10 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Smartphone className="w-4 h-4" />
            Acesso 24/7
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F8F9FB] to-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative mx-auto max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/20 to-[#FFC93C]/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-[#1A1A1A] rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-50 to-gray-100">
                        <div
                          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
                          style={{ backgroundColor: colors[currentScreen] }}
                        >
                          <div className="text-center p-8">
                            <div className="text-6xl mb-4">{currentScreen === 1 ? '💪' : currentScreen === 2 ? '🥗' : currentScreen === 3 ? '📊' : currentScreen === 4 ? '👤' : '🏠'}</div>
                            <div className="text-xl font-bold">{screens[currentScreen].name}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                      {screens[currentScreen].name}
                    </h3>
                    <p className="text-base sm:text-lg text-[#2E2E2E] leading-relaxed">
                      {screens[currentScreen].description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevScreen}
                      className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center hover:bg-[#F15A24] hover:text-white transition-all group shadow-md"
                      aria-label="Tela anterior"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#2E2E2E] group-hover:text-white" />
                    </button>

                    <div className="flex gap-2 flex-1">
                      {screens.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentScreen(index)}
                          className={`h-2 flex-1 rounded-full transition-all ${
                            index === currentScreen ? 'bg-[#F15A24]' : 'bg-gray-300'
                          }`}
                          aria-label={`Ir para tela ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextScreen}
                      className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center hover:bg-[#F15A24] hover:text-white transition-all group shadow-md"
                      aria-label="Próxima tela"
                    >
                      <ChevronRight className="w-6 h-6 text-[#2E2E2E] group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
