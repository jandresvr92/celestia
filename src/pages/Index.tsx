import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, Heart, ShoppingBag } from "lucide-react";
import celestiaLogo from "@/assets/celestia-logo.jpg";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 md:py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src={celestiaLogo} 
              alt="Celestia Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-soft"
            />
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">Celestia</h1>
          </Link>
          <div className="flex items-center gap-2 md:gap-6">
            <Link to="/catalog" className="hidden sm:inline text-sm md:text-base text-foreground hover:text-primary transition-smooth font-sans">
              {t('nav.catalog')}
            </Link>
            <a href="#productos" className="hidden sm:inline text-sm md:text-base text-foreground hover:text-primary transition-smooth font-sans">
              {t('nav.products')}
            </a>
            <a href="#nosotros" className="hidden sm:inline text-sm md:text-base text-foreground hover:text-primary transition-smooth font-sans">
              {t('nav.about')}
            </a>
            <LanguageSwitcher />
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 md:h-10 md:w-10">
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Carousel Section */}
      <section className="container mx-auto px-4 py-4 md:py-8">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section id="productos" className="container mx-auto px-4 py-12 md:py-20 bg-card/50 rounded-2xl md:rounded-3xl my-8 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center space-y-3 md:space-y-4">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center shadow-glow">
              <Flame className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              {t('features.pearlWax.title')}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-sans px-4">
              {t('features.pearlWax.description')}
            </p>
          </div>

          <div className="text-center space-y-3 md:space-y-4">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-accent rounded-full flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              {t('features.fragrances.title')}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-sans px-4">
              {t('features.fragrances.description')}
            </p>
          </div>

          <div className="text-center space-y-3 md:space-y-4">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-primary rounded-full flex items-center justify-center shadow-soft">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              {t('features.handmade.title')}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-sans px-4">
              {t('features.handmade.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-gradient-warm rounded-2xl md:rounded-3xl p-8 md:p-20 text-center shadow-glow">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 md:mb-8 font-sans max-w-2xl mx-auto px-4">
            {t('cta.description')}
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-sans text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-soft"
          >
            <Link to="/catalog">{t('cta.button')}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 md:py-12 border-t border-border mt-12 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3 text-center md:text-left">
            <img 
              src={celestiaLogo} 
              alt="Celestia" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-serif font-semibold text-foreground text-sm md:text-base">Celestia</p>
              <p className="text-xs md:text-sm text-muted-foreground font-sans">
                {t('footer.slogan')}
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground font-sans">
            <a href="#" className="hover:text-primary transition-smooth">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary transition-smooth">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-smooth">{t('footer.contact')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
