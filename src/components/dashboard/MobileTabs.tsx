
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

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

interface SimulatedData {
  totalCredits: number;
  certificatedCredits: number;
  pendingCredits: number;
  estimatedValue: number;
}

interface MobileTabsProps {
  userData: UserData | null;
  displayData: SimulatedData;
}

const MobileTabs = ({ userData, displayData }: MobileTabsProps) => {
  return (
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
                    <p className="text-xs text-gray-500">{displayData.totalCredits} tCO₂e</p>
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
  );
};

export default MobileTabs;
