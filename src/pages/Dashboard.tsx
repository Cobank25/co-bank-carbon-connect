import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CircleDollarSign, BarChart4, LineChart, ArrowUpRight, ArrowDownRight, Settings, Bell, LogOut, Menu, PlusCircle, ArrowRight, User, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleSideNav} className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-green-800">CoBank</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Notificações</SheetTitle>
                    <SheetDescription>
                      Veja suas notificações recentes
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <p className="font-medium">Certificação aprovada!</p>
                        <p className="text-sm text-gray-500">Sua certificação foi aprovada. Agora você pode vender seus créditos.</p>
                        <p className="text-xs text-gray-400 mt-1">hoje às 10:45</p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <p className="font-medium">Novo comprador disponível</p>
                        <p className="text-sm text-gray-500">Um novo comprador está interessado em créditos como os seus.</p>
                        <p className="text-xs text-gray-400 mt-1">ontem às 14:30</p>
                      </div>
                      
                      <div className="border-l-4 border-gray-300 pl-4 py-2">
                        <p className="font-medium">Mercado em alta</p>
                        <p className="text-sm text-gray-500">O valor médio dos créditos aumentou 5% esta semana.</p>
                        <p className="text-xs text-gray-400 mt-1">3 dias atrás</p>
                      </div>
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
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Minha Conta</SheetTitle>
                    <SheetDescription>
                      Gerenciar configurações da conta
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                      <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                        <span className="text-green-700 font-medium">TB</span>
                      </div>
                      <div>
                        <p className="font-medium">Thiago Bonini</p>
                        <p className="text-sm text-gray-500">thiago@cobank.com.br</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link to="/perfil">
                          <User className="mr-2 h-4 w-4" />
                          Meu Perfil
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link to="/configuracoes">
                          <Settings className="mr-2 h-4 w-4" />
                          Configurações
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link to="/ajuda">
                          <HelpCircle className="mr-2 h-4 w-4" />
                          Ajuda e Suporte
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600" asChild>
                        <Link to="/">
                          <LogOut className="mr-2 h-4 w-4" />
                          Sair
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - desktop */}
        <aside className={`w-64 bg-white border-r border-gray-200 p-4 hidden md:block`}>
          <div className="flex items-center gap-2 mb-6">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
            <span className="font-bold text-green-800">CoBank</span>
          </div>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/dashboard">
                <BarChart4 className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/vender">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Vender Créditos
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/comprar">
                <ArrowDownRight className="mr-2 h-4 w-4" />
                Comprar Créditos
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/investir">
                <LineChart className="mr-2 h-4 w-4" />
                Investir
              </Link>
            </Button>
          </nav>
        </aside>

        {/* Mobile sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 p-4 z-40 transition-transform transform ${
            sideNavOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
              <span className="font-bold text-green-800">CoBank</span>
            </div>
            <Button variant="ghost" size="sm" onClick={toggleSideNav}>
              <span className="sr-only">Fechar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
          
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/dashboard" onClick={toggleSideNav}>
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

        {/* Main content area */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Olá, Thiago!</h2>
              <p className="text-gray-500">Bem-vindo ao seu painel de gerenciamento de créditos de carbono.</p>
            </div>

            {/* Main card - Balance */}
            <Card className="mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-green-100">Saldo total de créditos</p>
                    <h3 className="text-3xl font-bold mt-1">150 tCO₂e</h3>
                  </div>
                  <CircleDollarSign className="h-12 w-12 opacity-80" />
                </div>
                <div className="mt-4 flex gap-4">
                  <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    Vender
                  </Button>
                  <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800">
                    <PlusCircle className="mr-1 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Certificados</p>
                    <p className="text-xl font-semibold mt-1">120 tCO₂e</p>
                    <p className="text-xs text-green-600 mt-1">Validado</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Pendentes</p>
                    <p className="text-xl font-semibold mt-1">30 tCO₂e</p>
                    <p className="text-xs text-amber-600 mt-1">Em certificação</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Valor estimado</p>
                    <p className="text-xl font-semibold mt-1">R$ 22.500</p>
                    <p className="text-xs text-blue-600 mt-1">R$ 150/tCO₂e</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs section */}
            <Tabs defaultValue="mercado" className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mercado">Mercado</TabsTrigger>
                <TabsTrigger value="historico">Histórico</TabsTrigger>
                <TabsTrigger value="projetos">Projetos</TabsTrigger>
              </TabsList>
              <TabsContent value="mercado">
                <Card>
                  <CardHeader>
                    <CardTitle>Mercado de Créditos de Carbono</CardTitle>
                    <CardDescription>
                      Acompanhe as tendências e oportunidades do mercado.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium">Preço Médio</h4>
                            <span className="text-green-600 text-sm font-medium">+2.5%</span>
                          </div>
                          <p className="text-2xl font-bold">R$ 150,00/tCO₂e</p>
                          <p className="text-xs text-gray-500 mt-1">Atualizado em 23/05/2025</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium">Volume Negociado</h4>
                            <span className="text-blue-600 text-sm font-medium">+12%</span>
                          </div>
                          <p className="text-2xl font-bold">1.250 tCO₂e</p>
                          <p className="text-xs text-gray-500 mt-1">Últimos 30 dias</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-4">Compradores em Destaque</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-700 text-xs font-semibold">E1</span>
                              </div>
                              <span className="font-medium">EcoEnergy Brasil</span>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">R$ 155/tCO₂e</p>
                              <p className="text-xs text-gray-500">300 tCO₂e</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                <span className="text-emerald-700 text-xs font-semibold">GF</span>
                              </div>
                              <span className="font-medium">Green Future</span>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">R$ 152/tCO₂e</p>
                              <p className="text-xs text-gray-500">500 tCO₂e</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-700 text-xs font-semibold">TS</span>
                              </div>
                              <span className="font-medium">Terra Sustentável</span>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">R$ 148/tCO₂e</p>
                              <p className="text-xs text-gray-500">200 tCO₂e</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <Link to="/mercado">
                          Ver mais detalhes do mercado <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="historico">
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Transações</CardTitle>
                    <CardDescription>
                      Suas atividades recentes de compra e venda.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Venda para EcoEnergy Brasil</p>
                            <p className="text-xs text-gray-500">15/05/2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">+R$ 15.000</p>
                          <p className="text-xs text-gray-500">100 tCO₂e a R$ 150/tCO₂e</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <ArrowDownRight className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Compra de Terra Sustentável</p>
                            <p className="text-xs text-gray-500">28/04/2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-blue-600">-R$ 7.250</p>
                          <p className="text-xs text-gray-500">50 tCO₂e a R$ 145/tCO₂e</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Venda para Green Future</p>
                            <p className="text-xs text-gray-500">10/04/2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">+R$ 21.750</p>
                          <p className="text-xs text-gray-500">150 tCO₂e a R$ 145/tCO₂e</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Ver histórico completo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="projetos">
                <Card>
                  <CardHeader>
                    <CardTitle>Meus Projetos</CardTitle>
                    <CardDescription>
                      Acompanhe o status dos seus projetos de crédito de carbono.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">Reflorestamento - Fazenda Esperança</h4>
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Ativo
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Projeto de reflorestamento com 50 hectares de mata nativa.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Localização</p>
                            <p className="font-medium">MG, Brasil</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Início</p>
                            <p className="font-medium">Jan/2024</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Créditos</p>
                            <p className="font-medium">120 tCO₂e</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="font-medium">Certificado</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">Energia Solar - Sítio Boa Vista</h4>
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                            Em análise
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Instalação de painéis solares para substituição de energia fóssil.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Localização</p>
                            <p className="font-medium">SP, Brasil</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Início</p>
                            <p className="font-medium">Mar/2025</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Créditos Est.</p>
                            <p className="font-medium">30 tCO₂e</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="font-medium">Em certificação</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Adicionar novo projeto
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vender Créditos</CardTitle>
                  <CardDescription>
                    Oferece seus créditos no mercado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Conecte-se a compradores interessados em seus créditos de carbono.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/vender">
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Vender agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comprar Créditos</CardTitle>
                  <CardDescription>
                    Adquira créditos no mercado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Explore opções de compra de créditos de diversos produtores.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/comprar">
                      <ArrowDownRight className="mr-2 h-4 w-4" />
                      Comprar agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investir</CardTitle>
                  <CardDescription>
                    Acesse o mercado de ações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Invista em ações ligadas ao mercado de créditos de carbono.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/investir">
                      <LineChart className="mr-2 h-4 w-4" />
                      Investir agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
