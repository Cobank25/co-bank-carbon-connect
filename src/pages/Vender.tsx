
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Vender = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Link>
        
        <h1 className="text-2xl font-bold mb-6">Vender Créditos de Carbono</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Seus créditos disponíveis</CardTitle>
                <CardDescription>Selecione o volume que deseja vender</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total disponível:</span>
                  <span className="font-bold">120 tCO₂e</span>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Quantidade para vender (tCO₂e)</Label>
                  <Input id="amount" type="number" placeholder="Ex: 50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Preço por unidade (R$)</Label>
                  <Input id="price" type="number" placeholder="Ex: 150" defaultValue="150" />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Valor total:</span>
                    <span className="font-bold">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Taxa CoBank (2%):</span>
                    <span className="text-gray-500">R$ 0,00</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Prosseguir</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Compradores interessados</CardTitle>
                <CardDescription>Compradores que buscam créditos como os seus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">EcoEnergy Brasil</span>
                    <span className="font-bold text-green-600">R$ 155/tCO₂e</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Busca 300 tCO₂e de projetos de reflorestamento</p>
                  <Button className="w-full">Vender diretamente</Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Green Future</span>
                    <span className="font-bold text-green-600">R$ 152/tCO₂e</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Busca 500 tCO₂e de diversos projetos</p>
                  <Button className="w-full">Vender diretamente</Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Terra Sustentável</span>
                    <span className="font-bold text-green-600">R$ 148/tCO₂e</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Busca 200 tCO₂e de projetos certificados</p>
                  <Button className="w-full">Vender diretamente</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Dicas para venda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Preços entre R$145-155 têm maior chance de venda rápida.</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Você pode dividir seus créditos em vários lotes para diversificar.</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Créditos de projetos florestais estão com alta demanda atualmente.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vender;
