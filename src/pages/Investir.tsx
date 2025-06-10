import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvestmentChart from "@/components/dashboard/InvestmentChart";
import { getInvestmentData } from "@/utils/marketData";

const Investir = () => {
  const investmentData = getInvestmentData();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Link>
        
        <h1 className="text-2xl font-bold mb-6">Mercado de Investimentos</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Visão Geral do Mercado</CardTitle>
            <CardDescription>Acompanhe o desempenho dos fundos e empresas de créditos de carbono</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Índice Carbono Global</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">2.456,78</span>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +1,2%
                  </span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Índice Carbono Brasil</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">1.245,32</span>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +0,8%
                  </span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Preço Médio tCO₂e</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">R$ 148,50</span>
                  <span className="text-red-600 text-sm font-medium flex items-center">
                    <TrendingDown className="mr-1 h-3 w-3" />
                    -0,3%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Explore Investimentos</h2>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar ativos..."
              className="pl-8"
            />
          </div>
        </div>
        
        <Tabs defaultValue="fundos" className="mb-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="fundos">Fundos</TabsTrigger>
            <TabsTrigger value="empresas">Empresas</TabsTrigger>
            <TabsTrigger value="etfs">ETFs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fundos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Fundo Carbono Brasil</CardTitle>
                      <CardDescription>CARB11 • Renda Variável</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 89,42</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +1,8%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Rendimento 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+23,4%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.fundos[0].data} 
                      color={investmentData.fundos[0].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Fundo Florestal Sustentável</CardTitle>
                      <CardDescription>FLOR11 • Renda Variável</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 64,18</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +0,7%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Rendimento 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+18,2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.fundos[1].data} 
                      color={investmentData.fundos[1].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Fundo Energia Limpa</CardTitle>
                      <CardDescription>ENLP11 • Renda Variável</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 102,76</p>
                      <p className="text-sm text-red-600 flex items-center justify-end">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        -0,5%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Rendimento 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+15,8%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.fundos[2].data} 
                      color={investmentData.fundos[2].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Fundo Crédito Verde</CardTitle>
                      <CardDescription>CRDV11 • Renda Fixa</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 10,25</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +0,2%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Rendimento 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+11,2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.fundos[3].data} 
                      color={investmentData.fundos[3].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="empresas">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">EcoEnergy Brasil</CardTitle>
                      <CardDescription>ECOE3 • Energia Renovável</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 32,45</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +2,1%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Variação 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+28,4%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.empresas[0].data} 
                      color={investmentData.empresas[0].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Green Future</CardTitle>
                      <CardDescription>GRFT3 • Tecnologia Verde</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 78,92</p>
                      <p className="text-sm text-red-600 flex items-center justify-end">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        -0,8%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Variação 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+34,5%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.empresas[1].data} 
                      color={investmentData.empresas[1].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Terra Sustentável</CardTitle>
                      <CardDescription>TRRA3 • Agronegócio</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 45,30</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +1,3%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Variação 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+19,7%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.empresas[2].data} 
                      color={investmentData.empresas[2].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="etfs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">ETF Créditos de Carbono Global</CardTitle>
                      <CardDescription>CARB11 • Global</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 123,70</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +1,2%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Variação 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+20,8%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.etfs[0].data} 
                      color={investmentData.etfs[0].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">ETF Energia Verde</CardTitle>
                      <CardDescription>ENRG11 • Energia</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">R$ 98,50</p>
                      <p className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +0,5%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Variação 12 meses</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">+16,2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="flex-1">Detalhes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">Investir</Button>
                  </div>
                  <div className="mt-3">
                    <InvestmentChart 
                      data={investmentData.etfs[1].data} 
                      color={investmentData.etfs[1].color}
                      height={100}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Consultoria de Investimentos</CardTitle>
            <CardDescription>Precisa de ajuda para investir em créditos de carbono?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:flex-1">
                <p className="text-sm text-gray-600 mb-4">
                  Nossa equipe de especialistas pode ajudar você a montar uma carteira de investimentos 
                  alinhada com seus objetivos financeiros e compromisso com a sustentabilidade.
                </p>
                <Button className="w-full md:w-auto">Agendar consulta</Button>
              </div>
              <div className="md:flex-1 bg-gray-100 rounded-lg p-6 w-full">
                <h4 className="font-medium mb-3">Por que investir em créditos de carbono?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Potencial de valorização em mercados em expansão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Diversificação de portfólio com ativos sustentáveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Contribuição direta para projetos ambientais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Alinhamento com tendências globais de ESG</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Investir;

</edits_to_apply>
