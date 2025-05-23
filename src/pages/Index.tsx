
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, BarChart4, Users, ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-green-800">CoBank</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-green-800 hover:text-green-600">Início</Link>
            <Link to="/como-funciona" className="text-green-800 hover:text-green-600">Como Funciona</Link>
            <Link to="/sobre" className="text-green-800 hover:text-green-600">Sobre Nós</Link>
            <Link to="/contato" className="text-green-800 hover:text-green-600">Contato</Link>
          </nav>
          <div className="flex gap-4">
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link to="/registro">Cadastre-se</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">
              Conectando geradores e compradores de créditos de carbono
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A CoBank simplifica o acesso ao mercado de créditos de carbono para pequenos e médios geradores, 
              conectando-os diretamente a grandes compradores de forma rápida e descomplicada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/registro">Comece agora <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/como-funciona">Saiba mais</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80" 
              alt="Floresta sustentável" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Como funciona</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>1. Cadastro e Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preencha o formulário inicial para registro. Seus dados serão enviados diretamente para 
                  certificadoras de créditos de carbono parceiras para validação.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>2. Gerenciamento de Créditos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Após a aprovação, acesse sua conta digital para gerenciar seus créditos de carbono. 
                  Visualize seu saldo e realize operações de forma simples.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>3. Compra e Venda</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conecte-se diretamente com compradores interessados ou invista em créditos de 
                  carbono através da nossa plataforma integrada.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/registro">Iniciar processo <ChevronRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para entrar no mercado de créditos de carbono?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se à CoBank e faça parte da revolução sustentável. Conectamos pequenos e médios 
            geradores a grandes compradores, simplificando todo o processo.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
            <Link to="/registro">Cadastre-se agora</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-green-800">CoBank</span>
              </div>
              <p className="text-gray-600">
                Conectando o futuro sustentável através do mercado de créditos de carbono.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-green-600">Início</Link></li>
                <li><Link to="/como-funciona" className="text-gray-600 hover:text-green-600">Como Funciona</Link></li>
                <li><Link to="/sobre" className="text-gray-600 hover:text-green-600">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-gray-600 hover:text-green-600">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-600 hover:text-green-600">FAQ</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
                <li><Link to="/parceiros" className="text-gray-600 hover:text-green-600">Parceiros</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">contato@cobank.com.br</li>
                <li className="text-gray-600">+55 (11) 9999-8888</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} CoBank. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
