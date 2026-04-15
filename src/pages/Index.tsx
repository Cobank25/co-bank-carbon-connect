
import { ArrowRight, Sun, TrendingUp, Building2, Leaf } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-[IBM_Plex_Sans] antialiased">
      {/* Navigation — clean, no buttons */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-7 w-7" />
            <span className="font-[IBM_Plex_Mono] text-lg font-semibold tracking-tight text-[#0A1410]">CoBank</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            <a href="#como-funciona" className="hover:text-[#0A1410] transition-colors">Como funciona</a>
            <a href="#compradores" className="hover:text-[#0A1410] transition-colors">Compradores</a>
            <a href="#geradores" className="hover:text-[#0A1410] transition-colors">Geradores</a>
            <a href="#contato" className="hover:text-[#0A1410] transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 pt-24 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-normal tracking-tight text-[#0A1410] sm:text-5xl leading-[1.15]">
            Créditos de carbono da energia solar,
            <br />
            <span className="text-[#064E3B]">direto de quem gera para quem precisa.</span>
          </h1>
          <p className="mt-8 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            A CoBank conecta proprietários de usinas solares a empresas e investidores que buscam 
            compensar suas emissões ou investir em ativos ambientais. Sem intermediários, sem burocracia.
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-zinc-200"></div>
      </div>

      {/* How it works */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-widest text-zinc-400 mb-3">O modelo</p>
          <h2 className="text-3xl font-normal tracking-tight text-[#0A1410] mb-6">Como a CoBank funciona</h2>
          <p className="text-zinc-500 max-w-2xl mb-16">
            Transformamos a energia solar gerada por usinas distribuídas em créditos de carbono 
            verificados. Esses créditos são disponibilizados para compra direta por empresas e investidores.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="font-[IBM_Plex_Mono] text-xs text-zinc-400 mb-4">01</div>
              <h3 className="text-lg font-medium text-[#0A1410] mb-3">Geração e registro</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                O proprietário da usina solar cadastra sua planta na CoBank. 
                Com base na capacidade de geração, calculamos os créditos de carbono correspondentes.
              </p>
            </div>
            <div>
              <div className="font-[IBM_Plex_Mono] text-xs text-zinc-400 mb-4">02</div>
              <h3 className="text-lg font-medium text-[#0A1410] mb-3">Verificação e emissão</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Os dados são verificados e os créditos de carbono são emitidos de forma padronizada, 
                prontos para negociação no mercado.
              </p>
            </div>
            <div>
              <div className="font-[IBM_Plex_Mono] text-xs text-zinc-400 mb-4">03</div>
              <h3 className="text-lg font-medium text-[#0A1410] mb-3">Compra direta</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Empresas que precisam compensar emissões ou investidores interessados em ativos 
                ambientais compram os créditos diretamente na plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-zinc-200"></div>
      </div>

      {/* For Buyers */}
      <section id="compradores" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-[#064E3B]" />
                <span className="font-[IBM_Plex_Mono] text-xs uppercase tracking-widest text-zinc-400">Para compradores</span>
              </div>
              <h2 className="text-3xl font-normal tracking-tight text-[#0A1410] mb-6">
                Empresas e investidores
              </h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Se sua empresa precisa compensar emissões de carbono para cumprir metas ESG, 
                ou se você busca diversificar investimentos em ativos ambientais, 
                a CoBank oferece acesso direto a créditos verificados de energia solar.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <Building2 className="h-5 w-5 text-[#064E3B] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A1410]">Compliance ambiental</p>
                    <p className="text-sm text-zinc-500">Compense suas emissões com créditos rastreáveis e auditáveis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="h-5 w-5 text-[#064E3B] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A1410]">Investimento em carbono</p>
                    <p className="text-sm text-zinc-500">Acesse um mercado em crescimento com liquidez e transparência.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-zinc-200 rounded-md p-8 bg-zinc-50/50">
              <p className="font-[IBM_Plex_Mono] text-xs text-zinc-400 uppercase tracking-widest mb-6">Por que comprar na CoBank</p>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full mt-2 shrink-0"></span>
                  Créditos originados exclusivamente de energia solar distribuída no Brasil
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full mt-2 shrink-0"></span>
                  Rastreabilidade completa — você sabe exatamente de qual usina veio cada crédito
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full mt-2 shrink-0"></span>
                  Sem intermediários entre você e o gerador
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#064E3B] rounded-full mt-2 shrink-0"></span>
                  Relatórios de impacto para auditorias e comunicação ESG
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-zinc-200"></div>
      </div>

      {/* For Generators */}
      <section id="geradores" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 border border-zinc-200 rounded-md p-8 bg-zinc-50/50">
              <p className="font-[IBM_Plex_Mono] text-xs text-zinc-400 uppercase tracking-widest mb-6">Por que registrar sua usina</p>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full mt-2 shrink-0"></span>
                  Monetize a energia que você já gera, sem custo adicional
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full mt-2 shrink-0"></span>
                  Cadastro simples — informações básicas da usina e da geração
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full mt-2 shrink-0"></span>
                  Receba diretamente quando seus créditos forem vendidos
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 bg-[#00E676] rounded-full mt-2 shrink-0"></span>
                  Acompanhe tudo pela plataforma: créditos emitidos, vendas e rendimento
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="h-4 w-4 text-[#00E676]" />
                <span className="font-[IBM_Plex_Mono] text-xs uppercase tracking-widest text-zinc-400">Para geradores</span>
              </div>
              <h2 className="text-3xl font-normal tracking-tight text-[#0A1410] mb-6">
                Proprietários de usinas solares
              </h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Se você tem uma usina solar e gera energia limpa, a CoBank transforma 
                essa geração em créditos de carbono que podem ser vendidos para empresas e investidores. 
                Uma nova fonte de receita sem mudar nada na sua operação.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <Leaf className="h-5 w-5 text-[#00E676] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A1410]">Receita extra da sua geração</p>
                    <p className="text-sm text-zinc-500">Seus megawatts viram créditos de carbono negociáveis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sun className="h-5 w-5 text-[#00E676] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A1410]">Sem burocracia</p>
                    <p className="text-sm text-zinc-500">A CoBank cuida da verificação e da venda. Você só registra sua usina.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A1410]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-normal tracking-tight text-white mb-4">
            Quer saber mais?
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            A CoBank está construindo a ponte entre quem gera energia limpa e quem precisa 
            compensar emissões. Entre em contato para entender como podemos ajudar.
          </p>
          <a 
            href="mailto:contato@cobank.com.br" 
            className="inline-flex items-center gap-2 bg-[#00E676] text-[#0A1410] px-8 py-3 rounded-sm text-sm font-medium hover:bg-[#00E676]/90 transition-colors"
          >
            Fale conosco <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-zinc-200 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
                <span className="font-[IBM_Plex_Mono] text-sm font-semibold text-[#0A1410]">CoBank</span>
              </div>
              <p className="text-sm text-zinc-400 max-w-xs">
                Créditos de carbono de energia solar. Direto, transparente e verificado.
              </p>
            </div>
            <div className="text-sm text-zinc-400">
              <p>contato@cobank.com.br</p>
              <p>+55 31 993830596</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-zinc-100 text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} CoBank. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
