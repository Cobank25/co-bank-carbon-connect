import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CircleDollarSign, BarChart4, LineChart, ArrowUpRight, ArrowDownRight, Bell, Menu, PlusCircle, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  tipoGerador: string;
  tipoPropriedade: string;
  tamanhoArea: string;
  descricaoProjeto: string;
  score: number;
  registrationDate: string;
}

const MobileDashboard = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Recuperar dados do usuário do localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const getUserInitials = (nome: string) => {
    return nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            <Button variant="ghost" size="icon" onClick={toggleSideNav}>
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
              <span className="text-lg font-bold text-green-800">CoBank</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Notificações</SheetTitle>
                    <SheetDescription>Suas notificações recentes</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="font-medium">Cadastro concluído!</p>
                      <p className="text-sm text-gray-500">Seu cadastro foi processado com sucesso. Score: {userData?.score || 0}/10</p>
                      <p className="text-xs text-gray-400 mt-1">hoje</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="font-medium">Bem-vindo ao CoBank!</p>
                      <p className="text-sm text-gray-500">Explore suas opções de créditos de carbono.</p>
                      <p className="text-xs text-gray-400 mt-1">hoje</p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Minha Conta</SheetTitle>
                    <SheetDescription>Gerenciar configurações da conta</SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                      <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                        <span className="text-green-700 font-medium">
                          {userData ? getUserInitials(userData.nome) : 'TB'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{userData?.nome || 'Thiago Bonini'}</p>
                        <p className="text-sm text-gray-500">{userData?.email || 'thiago@cobank.com.br'}</p>
                        {userData && (
                          <p className="text-xs text-gray-400">Score: {userData.score}/10</p>
                        )}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 p-4 z-40 transition-transform transform ${
          sideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
            <span className="font-bold text-green-800">CoBank</span>
          </div>
          <Button variant="ghost" size="sm" onClick={toggleSideNav}>
            ×
          </Button>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/mobile-dashboard" onClick={toggleSideNav}>
              <BarChart4 className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/vender" onClick={toggleSideNav}>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Vender Créditos
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/comprar" onClick={toggleSideNav}>
              <ArrowDownRight className="mr-2 h-4 w-4" />
              Comprar Créditos
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/investir" onClick={toggleSideNav}>
              <LineChart className="mr-2 h-4 w-4" />
              Investir
            </Link>
          </Button>
        </nav>
      </aside>

      {/* Backdrop */}
      {sideNavOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30" 
          onClick={toggleSideNav}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">
            Olá, {userData ? userData.nome.split(' ')[0] : 'Thiago'}!
          </h2>
          <p className="text-gray-500 text-sm">Bem-vindo ao seu painel de créditos de carbono.</p>
        </div>

        {/* Score Card - only show if user has registered */}
        {userData && (
          <Card className="mb-4 border-l-4 border-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex justify-between items-center">
                Score de Sustentabilidade
                <span className="text-xl font-bold text-green-600">{userData.score}/10</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                  style={{ width: `${(userData.score / 10) * 100}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">Área:</p>
                  <p className="font-medium">{userData.tamanhoArea} ha</p>
                </div>
                <div>
                  <p className="text-gray-500">Tipo:</p>
                  <p className="font-medium capitalize">{userData.tipoPropriedade}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Balance Card */}
        <Card className="mb-4 overflow-hidden">
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-100 text-sm">Saldo total de créditos</p>
                <h3 className="text-2xl font-bold mt-1">
                  {userData ? Math.round(userData.score * 15) : 150} tCO₂e
                </h3>
              </div>
              <CircleDollarSign className="h-10 w-10 opacity-80" />
            </div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800 text-xs" asChild>
                <Link to="/vender">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  Vender
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800 text-xs">
                <PlusCircle className="mr-1 h-3 w-3" />
                Adicionar
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 rounded-lg bg-gray-50">
                <p className="text-xs text-gray-500">Certificados</p>
                <p className="text-lg font-semibold mt-1">
                  {userData ? Math.round(userData.score * 12) : 120} tCO₂e
                </p>
                <p className="text-xs text-green-600 mt-1">Validado</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <p className="text-xs text-gray-500">Pendentes</p>
                <p className="text-lg font-semibold mt-1">
                  {userData ? Math.round(userData.score * 3) : 30} tCO₂e
                </p>
                <p className="text-xs text-amber-600 mt-1">Em certificação</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <p className="text-xs text-gray-500">Valor estimado</p>
                <p className="text-lg font-semibold mt-1">
                  R$ {userData ? (userData.score * 15 * 150).toLocaleString('pt-BR') : '22.500'}
                </p>
                <p className="text-xs text-blue-600 mt-1">R$ 150/tCO₂e</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Tabs */}
        <Tabs defaultValue="mercado" className="mb-4">
          <TabsList className="grid w-full grid-cols-3 text-xs">
            <TabsTrigger value="mercado">Mercado</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
            <TabsTrigger value="projetos">Projetos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mercado">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mercado</CardTitle>
                <CardDescription className="text-sm">
                  Tendências e oportunidades do mercado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-sm">Preço Médio</h4>
                        <span className="text-green-600 text-xs font-medium">+2.5%</span>
                      </div>
                      <p className="text-lg font-bold">R$ 150,00/tCO₂e</p>
                    </div>
                    
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-sm">Volume</h4>
                        <span className="text-blue-600 text-xs font-medium">+12%</span>
                      </div>
                      <p className="text-lg font-bold">1.250 tCO₂e</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium mb-3 text-sm">Compradores em Destaque</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-700 text-xs font-semibold">E1</span>
                          </div>
                          <span className="font-medium text-sm">EcoEnergy</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">R$ 155</p>
                          <p className="text-xs text-gray-500">300 tCO₂e</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-emerald-700 text-xs font-semibold">GF</span>
                          </div>
                          <span className="font-medium text-sm">Green Future</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">R$ 152</p>
                          <p className="text-xs text-gray-500">500 tCO₂e</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historico">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Histórico</CardTitle>
                <CardDescription className="text-sm">
                  Suas transações recentes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userData ? (
                    <div className="border rounded-lg p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Cadastro inicial</p>
                          <p className="text-xs text-gray-500">
                            {new Date(userData.registrationDate).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600 text-sm">Score: {userData.score}/10</p>
                        <p className="text-xs text-gray-500">{Math.round(userData.score * 15)} tCO₂e</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="border rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Venda EcoEnergy</p>
                            <p className="text-xs text-gray-500">15/05/2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600 text-sm">+R$ 15.000</p>
                          <p className="text-xs text-gray-500">100 tCO₂e</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <ArrowDownRight className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Compra Terra</p>
                            <p className="text-xs text-gray-500">28/04/2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-blue-600 text-sm">-R$ 7.250</p>
                          <p className="text-xs text-gray-500">50 tCO₂e</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="projetos">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meus Projetos</CardTitle>
                <CardDescription className="text-sm">
                  Status dos seus projetos de crédito.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userData && (
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-sm">
                          {userData.tipoPropriedade === 'floresta' ? 'Reflorestamento' : 
                           userData.tipoPropriedade === 'energia' ? 'Energia Renovável' :
                           userData.tipoPropriedade === 'agropecuaria' ? 'Agropecuária Sustentável' :
                           'Projeto Sustentável'} - {userData.nome.split(' ')[0]}
                        </h4>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {userData.descricaoProjeto.slice(0, 80)}...
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-gray-500">Área</p>
                          <p className="font-medium">{userData.tamanhoArea} ha</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Score</p>
                          <p className="font-medium text-green-600">{userData.score}/10</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-sm">Reflorestamento - Fazenda Esperança</h4>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        Ativo
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      Projeto de reflorestamento com 50 hectares.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-gray-500">Localização</p>
                        <p className="font-medium">MG, Brasil</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Créditos</p>
                        <p className="font-medium">120 tCO₂e</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action buttons */}
        <div className="grid grid-cols-1 gap-3">
          <Button className="bg-green-600 hover:bg-green-700 h-12" asChild>
            <Link to="/vender">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Vender Créditos
            </Link>
          </Button>
          
          <Button variant="outline" className="h-12" asChild>
            <Link to="/comprar">
              <ArrowDownRight className="mr-2 h-4 w-4" />
              Comprar Créditos
            </Link>
          </Button>
          
          <Button variant="outline" className="h-12" asChild>
            <Link to="/investir">
              <LineChart className="mr-2 h-4 w-4" />
              Investir
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
