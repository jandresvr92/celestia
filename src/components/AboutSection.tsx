import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { Target, Eye, Gem } from "lucide-react";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="nosotros" className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {t('about.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <Card className="shadow-soft hover:shadow-glow transition-smooth">
          <CardHeader>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-serif text-foreground">
              {t('about.mission.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              {t('about.mission.content')}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-glow transition-smooth">
          <CardHeader>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-serif text-foreground">
              {t('about.vision.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              {t('about.vision.content')}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-glow transition-smooth">
          <CardHeader>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-warm rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Gem className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-serif text-foreground">
              {t('about.value.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              {t('about.value.content')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
