import { Dumbbell, Mail, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  brandName: string;
  support: string;
  socials: {
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  links: Array<{
    label: string;
    url: string;
  }>;
  disclaimer: string;
}

export default function Footer({ brandName, support, socials, links, disclaimer }: FooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#F15A24] p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{brandName}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Seu treino. Sua dieta. Seu resultado. Programa fitness completo com app exclusivo.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white/70 hover:text-[#F15A24] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <a
              href={`mailto:${support}`}
              className="flex items-center gap-2 text-white/70 hover:text-[#F15A24] transition-colors text-sm mb-3"
            >
              <Mail className="w-4 h-4" />
              {support}
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${socials.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F15A24] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://youtube.com/${socials.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F15A24] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={`https://tiktok.com/${socials.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F15A24] transition-all text-xl font-bold"
                aria-label="TikTok"
              >
                ♪
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 mb-6">
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed text-center">
              {disclaimer}
            </p>
          </div>

          <div className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} {brandName}. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
