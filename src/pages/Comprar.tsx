
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronDown, Leaf, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Comprar = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Link>
        
        <h1 className="text-2xl font-bold mb-6">Comprar Créditos de Carbono</h1>
        
        <Tabs defaultValue="mercado" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="mercado">Mercado Aberto</TabsTrigger>
            <TabsTrigger value="direto">Compra Direta</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mercado">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price-range">Faixa de preço</Label>
                    <div className="flex items-center gap-2">
                      <Input id="min-price" type="number" placeholder="Min" className="w-20" />
                      <span>-</span>
                      <Input id="max-price" type="number" placeholder="Max" className="w-20" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tipo de projeto</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="type-forest" />
                        <Label htmlFor="type-forest" className="text-sm font-normal">Florestal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="type-energy" />
                        <Label htmlFor="type-energy" className="text-sm font-normal">Energia renovável</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="type-agro" />
                        <Label htmlFor="type-agro" className="text-sm font-normal">Agropecuário</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="type-industrial" />
                        <Label htmlFor="type-industrial" className="text-sm font-normal">Industrial</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Certificação</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-vcs" />
                        <Label htmlFor="cert-vcs" className="text-sm font-normal">VCS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-gs" />
                        <Label htmlFor="cert-gs" className="text-sm font-normal">Gold Standard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-cdm" />
                        <Label htmlFor="cert-cdm" className="text-sm font-normal">CDM</Label>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Aplicar Filtros
                  </Button>
                </CardContent>
              </Card>
              
              <div className="md:col-span-3 space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Exibindo 24 resultados</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Ordenar por:</span>
                    <Button variant="outline" size="sm" className="inline-flex items-center">
                      Preço: menor para maior
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Listing 1 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Reflorestamento Mata Atlântica</CardTitle>
                          <CardDescription>Florestal • Certificado VCS</CardDescription>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Preço</p>
                          <p className="font-semibold">R$ 145/tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Disponível</p>
                          <p className="font-semibold">200 tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-semibold">SP, Brasil</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vendedor</p>
                          <p className="font-semibold">Eco Florestal</p>
                        </div>
                      </div>
                      <Button className="w-full">Comprar</Button>
                    </CardContent>
                  </Card>
                  
                  {/* Listing 2 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Energia Solar Fazenda Sol</CardTitle>
                          <CardDescription>Energia • Certificado Gold Standard</CardDescription>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Preço</p>
                          <p className="font-semibold">R$ 150/tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Disponível</p>
                          <p className="font-semibold">100 tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-semibold">MG, Brasil</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vendedor</p>
                          <p className="font-semibold">SolarFarm</p>
                        </div>
                      </div>
                      <Button className="w-full">Comprar</Button>
                    </CardContent>
                  </Card>
                  
                  {/* Listing 3 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Agricultura Regenerativa</CardTitle>
                          <CardDescription>Agropecuário • Certificado VCS</CardDescription>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><path d="M3 7V5c0-1.1.9-2 2-2h2"/><path d="M17 3h2c1.1 0 2 .9 2 2v2"/><path d="M21 17v2c0 1.1-.9 2-2 2h-2"/><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/><path d="M8 7v10"/><path d="M16 7v10"/><path d="M12 7v10"/></svg>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Preço</p>
                          <p className="font-semibold">R$ 140/tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Disponível</p>
                          <p className="font-semibold">150 tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-semibold">MT, Brasil</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vendedor</p>
                          <p className="font-semibold">AgriVerde</p>
                        </div>
                      </div>
                      <Button className="w-full">Comprar</Button>
                    </CardContent>
                  </Card>
                  
                  {/* Listing 4 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Eficiência Industrial</CardTitle>
                          <CardDescription>Industrial • Certificado CDM</CardDescription>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M2 22h20"/><path d="M18 8V2H6v6"/><path d="M18 16v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2"/><path d="M5 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/><path d="M19 16a1 1 0 1 0-2 0a1 1 0 1 0 2 0"/></svg>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Preço</p>
                          <p className="font-semibold">R$ 135/tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Disponível</p>
                          <p className="font-semibold">300 tCO₂e</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-semibold">RS, Brasil</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vendedor</p>
                          <p className="font-semibold">TechInd</p>
                        </div>
                      </div>
                      <Button className="w-full">Comprar</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button variant="outline">Carregar mais resultados</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="direto">
            <Card>
              <CardHeader>
                <CardTitle>Compra Direta</CardTitle>
                <CardDescription>
                  Negocie diretamente com geradores de créditos de carbono
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-sm text-gray-600">
                    Na compra direta, você pode enviar uma proposta personalizada aos geradores 
                    de créditos de carbono e negociar diretamente com eles.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="credit-amount">Quantidade desejada (tCO₂e)</Label>
                      <Input id="credit-amount" type="number" placeholder="Ex: 100" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price-offer">Preço proposto por unidade (R$)</Label>
                      <Input id="price-offer" type="number" placeholder="Ex: 145" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Tipo de projeto</Label>
                      <select id="project-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Selecione o tipo de projeto</option>
                        <option value="florestal">Florestal</option>
                        <option value="energia">Energia Renovável</option>
                        <option value="agropecuario">Agropecuário</option>
                        <option value="industrial">Industrial</option>
                        <option value="qualquer">Qualquer tipo</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-3">Resumo da oferta</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Quantidade:</span>
                        <span className="font-medium">0 tCO₂e</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Preço por unidade:</span>
                        <span className="font-medium">R$ 0,00</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span>Valor total:</span>
                        <span className="font-bold">R$ 0,00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Enviar proposta</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Comprar;
