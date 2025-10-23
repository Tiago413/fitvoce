import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Method from './components/Method';
import AppShowcase from './components/AppShowcase';
import Transformation from './components/Transformation';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Upsells from './components/Upsells';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

interface CopyData {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    headlineA: string;
    headlineB: string;
    subheadline: string;
    ctaPrimary: string;
    badge: string;
  };
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  method: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
  appShowcase: {
    title: string;
    subtitle: string;
    screens: Array<{
      name: string;
      description: string;
    }>;
  };
  transformation: {
    title: string;
    subtitle: string;
    benefits: string[];
  };
  testimonials: Array<{
    name: string;
    age: number;
    gender: 'M' | 'F';
    rating: number;
    text: string;
    result: string;
  }>;
  offer: {
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
  };
  upsells: Array<{
    title: string;
    description: string;
    price: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  footer: {
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
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

function App() {
  const [copyData, setCopyData] = useState<CopyData | null>(null);

  useEffect(() => {
    fetch('/copy.json')
      .then((response) => response.json())
      .then((data) => setCopyData(data))
      .catch((error) => console.error('Error loading copy data:', error));
  }, []);

  if (!copyData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F15A24] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2E2E2E] font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header brandName={copyData.brand.name} ctaText={copyData.hero.ctaPrimary} />

      <main>
        <Hero
          headlineA={copyData.hero.headlineA}
          headlineB={copyData.hero.headlineB}
          subheadline={copyData.hero.subheadline}
          ctaPrimary={copyData.hero.ctaPrimary}
          badge={copyData.hero.badge}
        />

        <PainPoints painPoints={copyData.painPoints} />

        <Method
          title={copyData.method.title}
          subtitle={copyData.method.subtitle}
          features={copyData.method.features}
          cta={copyData.method.cta}
        />

        <AppShowcase
          title={copyData.appShowcase.title}
          subtitle={copyData.appShowcase.subtitle}
          screens={copyData.appShowcase.screens}
        />

        <Transformation
          title={copyData.transformation.title}
          subtitle={copyData.transformation.subtitle}
          benefits={copyData.transformation.benefits}
        />

        <SocialProof testimonials={copyData.testimonials} />

        <Offer
          title={copyData.offer.title}
          subtitle={copyData.offer.subtitle}
          price={copyData.offer.price}
          included={copyData.offer.included}
          guarantee={copyData.offer.guarantee}
          cta={copyData.offer.cta}
          checkoutUrl={copyData.offer.checkoutUrl}
          urgency={copyData.offer.urgency}
        />

        <Upsells upsells={copyData.upsells} />

        <FAQ faq={copyData.faq} />
      </main>

      <Footer
        brandName={copyData.brand.name}
        support={copyData.footer.support}
        socials={copyData.footer.socials}
        links={copyData.footer.links}
        disclaimer={copyData.footer.disclaimer}
      />
    </div>
  );
}

export default App;
