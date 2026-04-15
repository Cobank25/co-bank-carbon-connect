
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, BarChart3, Sun, TrendingUp, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-[IBM_Plex_Sans] antialiased" style={{
      backgroundImage: 'radial-gradient(circle, hsl(214 32% 91%) 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-8 w-8" />
            <span className="font-[IBM_Plex_Mono] text-xl font-semibold tracking-tighter uppercase text-[#0A1410]">CoBank</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider md:flex text-[#0A1410]/70">
            <Link to="/mapa" className="hover:text-[#00E676] transition-colors">Mercado</Link>
            <Link to="/registro" className="hover:text-[#00E676] transition-colors">Registro</Link>
            <Link to="/investir" className="hover:text-[#00E676] transition-colors">Investidores</Link>
            <a href="#contato" className="hover:text-[#00E676] transition-colors">Contato</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden sm:flex text-sm font-medium">
              <Link to="/dashboard">Log In</Link>
            </Button>
            <Button asChild className="bg-[#0A1410] hover:bg-[#064E3B] text-white px-5 py-2 rounded-sm text-sm font-medium transition-all">
              <Link to="/registro">Acessar Terminal</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative px-6 pt-20 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5">
                <span className="flex size-2 animate-pulse rounded-full bg-[#00E676]"></span>
                <span className="font-[IBM_Plex_Mono] text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Rede Ativa — Mercado de Carbono em Tempo Real
                </span>
              </div>
              <h1 className="text-balance text-5xl font-light tracking-tight text-[#0A1410] sm:text-6xl lg:text-7xl leading-[1.05]">
                A Infraestrutura{" "}
                <span className="font-medium italic text-[#064E3B]">do</span>{" "}
                Capital Ambiental.
              </h1>
              <p className="mt-8 max-w-[55ch] text-lg text-zinc-600 leading-relaxed">
                Um marketplace de alta velocidade que conecta liquidez institucional a geradores de energia solar distribuída. 
                Padronizando a liquidação de créditos de carbono com precisão bancária.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="bg-[#00E676] px-8 py-6 text-sm font-bold uppercase tracking-widest text-[#0A1410] hover:bg-[#0A1410] hover:text-white transition-all rounded-sm">
                  <Link to="/comprar">
                    Comprar Créditos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-zinc-300 px-8 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all rounded-sm">
                  <Link to="/registro">
                    Registrar Usina Solar
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-sm border border-zinc-200 bg-white p-2 shadow-2xl">
                <div className="bg-[#0A1410] p-6 rounded-sm">
                  <div className="flex justify-between border-b border-zinc-800 pb-4">
                    <span className="font-[IBM_Plex_Mono] text-xs text-zinc-400">MERCADO_VOL_TICKER</span>
                    <span className="font-[IBM_Plex_Mono] text-xs text-[#00E676]">R$ 8.424.900,00</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-[IBM_Plex_Mono] text-xs text-zinc-400">Preço Spot (tCO2e)</span>
                      <span className="font-[IBM_Plex_Mono] text-sm text-white">R$ 78,42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-[IBM_Plex_Mono] text-xs text-zinc-400">Variação 24h</span>
                      <span className="font-[IBM_Plex_Mono] text-sm text-[#00E676]">+2.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-[IBM_Plex_Mono] text-xs text-zinc-400">Créditos Listados</span>
                      <span className="font-[IBM_Plex_Mono] text-sm text-white">12.840 tCO2e</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="font-[IBM_Plex_Mono] text-3xl text-white font-medium">98.4%</div>
                        <div className="font-[IBM_Plex_Mono] text-[10px] uppercase text-zinc-400 tracking-[0.15em]">Índice de Verificação</div>
                      </div>
                      <div className="flex gap-1 items-end h-16">
                        {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85, 95].map((h, i) => (
                          <div key={i} className="w-2 bg-[#00E676]/60 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Green divider line */}
      <div className="h-px" style={{
        background: 'linear-gradient(90deg, rgba(0,230,118,0) 0%, rgba(0,230,118,0.4) 50%, rgba(0,230,118,0) 100%)'
      }}></div>

      {/* Dual Audience Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-[#0A1410] mb-4">Uma plataforma, dois mercados</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Conectamos compradores corporativos e investidores a proprietários de usinas solares que geram créditos de carbono verificados.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-zinc-200 rounded-sm overflow-hidden">
            {/* Buyers */}
            <div className="bg-white p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-200">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-4 w-4 text-[#00E676]" />
                <span className="font-[IBM_Plex_Mono] text-xs font-bold uppercase tracking-widest text-[#00E676]">Participantes do Mercado</span>
              </div>
              <h3 className="text-3xl font-medium text-[#0A1410] mb-6">
                Compradores Corporativos &<br/>Investidores Institucionais
              </h3>
              <p className="text-zinc-600 max-w-md mb-10">
                Invista em projetos solares de alto impacto com rastreabilidade total. 
                Gerencie offsets de portfólio com monitoramento em tempo real.
              </p>
              <ul className="space-y-4 font-[IBM_Plex_Mono] text-sm">
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full"></span> Liquidação Imediata (T+0)
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full"></span> Conformidade Regulatória
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full"></span> Ferramentas de Rebalanceamento
                </li>
              </ul>
              <Button asChild className="mt-8 bg-[#0A1410] hover:bg-[#064E3B] text-white rounded-sm">
                <Link to="/comprar">Acessar Marketplace <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            {/* Generators */}
            <div className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="h-4 w-4 text-[#064E3B]" />
                <span className="font-[IBM_Plex_Mono] text-xs font-bold uppercase tracking-widest text-[#064E3B]">Proprietários de Ativos</span>
              </div>
              <h3 className="text-3xl font-medium text-[#0A1410] mb-6">
                Usinas Solares &<br/>Geradores de Crédito
              </h3>
              <p className="text-zinc-600 max-w-md mb-10">
                Transforme sua geração de energia em créditos de carbono negociáveis automaticamente. 
                Monetize seu impacto ambiental de forma direta.
              </p>
              <ul className="space-y-4 font-[IBM_Plex_Mono] text-sm">
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full"></span> Emissão Automatizada de Créditos
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full"></span> Análise Preditiva de Rendimento
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full"></span> Motor de Liquidação Direta
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-8 border-[#064E3B] text-[#064E3B] hover:bg-[#064E3B] hover:text-white rounded-sm">
                <Link to="/registro">Registrar sua Usina <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A1410] py-24 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="max-w-xl">
              <h3 className="text-4xl font-light leading-tight tracking-tight">
                Monitoramento em Tempo Real.{" "}
                <span className="text-zinc-500">Visibilidade global de cada megawatt gerado.</span>
              </h3>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-[IBM_Plex_Mono] text-2xl tabular-nums text-[#00E676]">R$ 42.7M</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">Liquidez Disponível</div>
                </div>
                <div>
                  <div className="font-[IBM_Plex_Mono] text-2xl tabular-nums">1.284</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">Usinas Conectadas</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 border border-zinc-800 bg-zinc-900/50 p-6 rounded-sm">
              <div className="mb-8 flex items-center justify-between">
                <div className="font-[IBM_Plex_Mono] text-[10px] uppercase text-zinc-500">Distribuição Regional_v4.2</div>
                <div className="size-2 rounded-full bg-[#00E676]"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-[IBM_Plex_Mono]">
                    <span>Sudeste</span>
                    <span>64% Capacidade</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full">
                    <div className="h-full bg-[#00E676] rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-[IBM_Plex_Mono]">
                    <span>Nordeste</span>
                    <span>22% Capacidade</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-[IBM_Plex_Mono] text-zinc-500">
                    <span>Centro-Oeste</span>
                    <span>14% Capacidade</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full">
                    <div className="h-full bg-zinc-600 rounded-full" style={{ width: '14%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-medium tracking-tight text-center text-[#0A1410] mb-16">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-zinc-200 rounded-sm p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="size-12 bg-[#00E676]/10 rounded-sm flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-[#064E3B]" />
              </div>
              <div className="font-[IBM_Plex_Mono] text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Etapa 01</div>
              <h3 className="text-xl font-medium mb-3 text-[#0A1410]">Cadastro e Certificação</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Registre sua usina solar ou empresa. Seus dados são verificados por certificadoras parceiras 
                com padrões internacionais de qualidade.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-sm p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="size-12 bg-[#00E676]/10 rounded-sm flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-[#064E3B]" />
              </div>
              <div className="font-[IBM_Plex_Mono] text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Etapa 02</div>
              <h3 className="text-xl font-medium mb-3 text-[#0A1410]">Emissão Automatizada</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Créditos de carbono são emitidos automaticamente com base nos dados de geração da sua usina. 
                Sem burocracia, sem intermediários.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-sm p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="size-12 bg-[#00E676]/10 rounded-sm flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-[#064E3B]" />
              </div>
              <div className="font-[IBM_Plex_Mono] text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Etapa 03</div>
              <h3 className="text-xl font-medium mb-3 text-[#0A1410]">Negociação Direta</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Compre, venda ou invista em créditos de carbono diretamente na plataforma com 
                liquidação instantânea e rastreabilidade completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-3xl">
          <Globe className="h-8 w-8 text-[#00E676] mx-auto mb-6" />
          <h2 className="text-4xl font-medium tracking-tight text-[#0A1410] mb-6">
            Entre na infraestrutura da economia de carbono
          </h2>
          <p className="text-zinc-600 mb-12 text-lg">
            A CoBank oferece a velocidade, segurança e verificação necessárias para escalar 
            a transição global para energia renovável.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-[#0A1410] px-10 py-6 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#064E3B] transition-all rounded-sm">
              <Link to="/registro">Criar Conta</Link>
            </Button>
            <Button asChild variant="outline" className="border-zinc-300 px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all rounded-sm">
              <Link to="/dashboard">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-zinc-200 py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-7 w-7" />
                <span className="font-[IBM_Plex_Mono] text-lg font-bold tracking-tighter uppercase text-[#0A1410]">CoBank</span>
              </div>
              <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
                O marketplace de referência para créditos de carbono verificados de energia solar. 
                Transparência regulatória para capital climático institucional.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0A1410] mb-4">Mercado</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link to="/comprar" className="hover:text-[#0A1410] transition-colors">Comprar Créditos</Link></li>
                  <li><Link to="/vender" className="hover:text-[#0A1410] transition-colors">Vender Créditos</Link></li>
                  <li><Link to="/investir" className="hover:text-[#0A1410] transition-colors">Investir</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0A1410] mb-4">Plataforma</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link to="/dashboard" className="hover:text-[#0A1410] transition-colors">Dashboard</Link></li>
                  <li><Link to="/mapa" className="hover:text-[#0A1410] transition-colors">Mapa</Link></li>
                  <li><Link to="/registro" className="hover:text-[#0A1410] transition-colors">Registro</Link></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0A1410] mb-4">Contato</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li>contato@cobank.com.br</li>
                  <li>+55 31 993830596</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 gap-4">
            <span>&copy; {new Date().getFullYear()} CoBank. Todos os direitos reservados.</span>
            <div className="flex gap-8">
              <span>Status: Operacional</span>
              <span>Rede: v4.2.0-stable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
