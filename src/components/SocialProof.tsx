import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  age: number;
  gender: 'M' | 'F';
  rating: number;
  text: string;
  result: string;
}

interface SocialProofProps {
  testimonials: Testimonial[];
}

export default function SocialProof({ testimonials }: SocialProofProps) {
  const getAvatar = (name: string, gender: 'M' | 'F') => {
    const initial = name.charAt(0);
    const bgColor = gender === 'M' ? 'bg-blue-500' : 'bg-pink-500';
    return (
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
        {initial}
      </div>
    );
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC93C]/30 text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-[#FFC93C] text-[#FFC93C]" />
            +5.000 alunos transformados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Quem já está dentro aprova
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E2E] max-w-2xl mx-auto">
            Resultados reais de pessoas reais. Unissex, para todos os níveis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#F15A24]/10" />

              <div className="flex items-center gap-4 mb-4">
                {getAvatar(testimonial.name, testimonial.gender)}
                <div>
                  <div className="font-bold text-lg text-[#1A1A1A]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#2E2E2E]">
                    {testimonial.age} anos
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFC93C] text-[#FFC93C]"
                  />
                ))}
              </div>

              <p className="text-[#2E2E2E] mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="bg-[#F15A24]/10 text-[#F15A24] px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#F15A24]">5.000+</div>
              <div className="text-sm text-[#2E2E2E] mt-1">Alunos ativos</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#F15A24]">4.9/5</div>
              <div className="text-sm text-[#2E2E2E] mt-1">Avaliação média</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#F15A24]">98%</div>
              <div className="text-sm text-[#2E2E2E] mt-1">Recomendam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
