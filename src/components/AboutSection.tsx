import { Target, Eye, Lightbulb, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="nosotros" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <Flame className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Nuestra Esencia
          </h2>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
            Celestia nace de la pasión por crear experiencias que elevan el espíritu y conectan con el cosmos
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="bg-gradient-warm border-0 shadow-glow hover:scale-[1.02] transition-smooth">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Misión</h3>
              </div>
              <p className="text-white/95 font-sans leading-relaxed text-lg">
                Nuestra misión en Celestia es iluminar y elevar la vida de nuestros clientes a través de la 
                creación y venta de velas aromáticas, versátiles y de diseño excepcional elaboradas en Cera Perlada. 
                Nos dedicamos a ofrecer productos que van más allá de la simple luz, fusionando la belleza artesanal 
                con fragancias cuidadosamente seleccionadas para crear ambientes de paz, espiritualidad y conexión personal. 
                Buscamos ser un puente hacia el bienestar, llevando la serenidad y la magia del universo a cada rincón 
                de sus hogares.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-card border-2 border-primary shadow-soft hover:scale-[1.02] transition-smooth">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground">Visión</h3>
              </div>
              <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                Celestia aspira a ser la marca digital líder y referente mundial en el segmento de velas de cera 
                perlada y aromaterapia de lujo, reconocida por su exclusividad, calidad insuperable y profundo 
                significado espiritual. Visualizamos una comunidad global de clientes que valoran la belleza, 
                la meditación y la armonía, donde el nombre Celestia es sinónimo de un estilo de vida consciente, 
                elevado e innovador.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-cosmic border-0 shadow-soft">
          <CardContent className="p-10 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground">Propuesta de Valor</h3>
            </div>
            <p className="text-foreground font-sans leading-relaxed text-lg">
              Para nuestros clientes que buscan transformar su espacio y elevar su estado de ánimo con un toque 
              de lujo e innovación, <span className="font-semibold text-primary">Celestia</span> es la tienda 
              virtual que ofrece velas aromáticas de diseño exclusivo y versátil, elaboradas con la revolucionaria 
              cera perlada, que permiten crear y recrear la vela perfecta a tu medida.
            </p>
            <p className="text-foreground font-sans leading-relaxed text-lg">
              A diferencia de las velas tradicionales, Celestia ofrece una experiencia de diseño interactiva y 
              multisensorial donde la calidad artesanal y la fragancia premium se unen a la adaptabilidad de las 
              perlas de cera, evocando la paz, la grandeza y la conexión con el cosmos. Garantizamos que cada compra 
              es una inversión en belleza, innovación y bienestar personal, diseñada para hacer de cada momento un 
              ritual celestial único.
            </p>
            <div className="pt-4 text-center">
              <p className="text-2xl font-serif font-bold text-primary italic">
                "Cera perlada. El lujo de reinventar tu luz."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
