import { Dumbbell } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  brandName: string;
  ctaText: string;
}

export default function Header({ brandName, ctaText }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-[#F15A24] p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">{brandName}</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button onClick={() => scrollToSection('beneficios')} className="text-[#2E2E2E] hover:text-[#F15A24] transition-colors font-medium">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('app')} className="text-[#2E2E2E] hover:text-[#F15A24] transition-colors font-medium">
                App
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-[#2E2E2E] hover:text-[#F15A24] transition-colors font-medium">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('oferta')} className="text-[#2E2E2E] hover:text-[#F15A24] transition-colors font-medium">
                Oferta
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-[#2E2E2E] hover:text-[#F15A24] transition-colors font-medium">
                FAQ
              </button>
            </nav>

            <button
              onClick={() => scrollToSection('oferta')}
              className="hidden md:block bg-[#F15A24] text-white px-4 lg:px-6 py-2.5 rounded-lg font-semibold hover:bg-[#d94d1a] transition-all hover:scale-105 shadow-lg"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </header>

      <button
        onClick={() => scrollToSection('oferta')}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#F15A24] text-white py-4 px-6 font-bold text-center shadow-2xl hover:bg-[#d94d1a] transition-colors"
      >
        {ctaText}
      </button>
    </>
  );
}
