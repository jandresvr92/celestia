import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Sparkles, Flame, Package, ArrowLeft, ShoppingBag } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import celestiaLogo from '@/assets/celestia-logo.jpg';

const productImages = {
  wax: 'https://plus.unsplash.com/premium_photo-1669824023993-273720598b14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687&h=458',
  fragrance: 'https://images.unsplash.com/photo-1701686794599-7924cf0b1329?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170&h=880',
  kit: 'https://images.unsplash.com/photo-1602607203559-d38903b80507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&h=2000&fit=crop',
};

const Catalog = () => {
  const { t } = useTranslation();

  const waxProducts = [
    {
      id: 'cosmic',
      image: productImages.wax,
      price: '$25.00',
    },
    {
      id: 'earth',
      image: productImages.wax,
      price: '$25.00',
    },
    {
      id: 'celestial',
      image: productImages.wax,
      price: '$28.00',
    },
  ];

  const fragranceProducts = [
    {
      id: 'lavender',
      image: productImages.fragrance,
      price: '$15.00',
    },
    {
      id: 'sandalwood',
      image: productImages.fragrance,
      price: '$18.00',
    },
    {
      id: 'vanilla',
      image: productImages.fragrance,
      price: '$16.00',
    },
    {
      id: 'citrus',
      image: productImages.fragrance,
      price: '$15.00',
    },
  ];

  const kitProducts = [
    {
      id: 'starter',
      image: productImages.kit,
      price: '$45.00',
    },
    {
      id: 'premium',
      image: productImages.kit,
      price: '$85.00',
    },
    {
      id: 'complete',
      image: productImages.kit,
      price: '$150.00',
    },
  ];

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
          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              asChild
              variant="ghost" 
              size="sm"
              className="gap-1 md:gap-2 text-xs md:text-sm"
            >
              <Link to="/">
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline font-sans">{t('nav.about')}</span>
              </Link>
            </Button>
            <LanguageSwitcher />
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 md:h-10 md:w-10">
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4">
            {t('catalog.title')}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground font-sans">
            {t('catalog.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="wax" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="wax" className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
              <Flame className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">{t('catalog.categories.wax')}</span>
              <span className="sm:hidden">Cera</span>
            </TabsTrigger>
            <TabsTrigger value="fragrances" className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">{t('catalog.categories.fragrances')}</span>
              <span className="sm:hidden">Fragancias</span>
            </TabsTrigger>
            <TabsTrigger value="kits" className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
              <Package className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">{t('catalog.categories.kits')}</span>
              <span className="sm:hidden">Kits</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wax">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {waxProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth">
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={t(`products.wax.${product.id}.name`)}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl font-serif mb-2">
                      {t(`products.wax.${product.id}.name`)}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base font-sans">
                      {t(`products.wax.${product.id}.description`)}
                    </CardDescription>
                    <p className="text-xl md:text-2xl font-bold text-primary mt-3 md:mt-4">
                      {product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 flex flex-col sm:flex-row gap-2">
                    <Button className="w-full sm:flex-1 text-sm md:text-base" size="sm">
                      <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      {t('catalog.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fragrances">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {fragranceProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth">
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={t(`products.fragrances.${product.id}.name`)}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-lg font-serif mb-2">
                      {t(`products.fragrances.${product.id}.name`)}
                    </CardTitle>
                    <CardDescription className="text-sm font-sans">
                      {t(`products.fragrances.${product.id}.description`)}
                    </CardDescription>
                    <p className="text-lg md:text-xl font-bold text-primary mt-3">
                      {product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button className="w-full text-sm md:text-base" size="sm">
                      <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      {t('catalog.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kits">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {kitProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth">
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={t(`products.kits.${product.id}.name`)}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl font-serif mb-2">
                      {t(`products.kits.${product.id}.name`)}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base font-sans">
                      {t(`products.kits.${product.id}.description`)}
                    </CardDescription>
                    <p className="text-xl md:text-2xl font-bold text-primary mt-3 md:mt-4">
                      {product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 flex flex-col sm:flex-row gap-2">
                    <Button className="w-full sm:flex-1 text-sm md:text-base" size="sm">
                      <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      {t('catalog.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

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

export default Catalog;
