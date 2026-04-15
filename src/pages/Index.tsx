
import { ArrowRight, Sun, TrendingUp, Building2, Leaf, Shield, Zap, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2F0E9] font-[Inter] antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#D4D1C9]/50 bg-[#F2F0E9]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-8 w-8" />
            <span className="font-[Playfair_Display] text-xl font-medium tracking-tight text-[#121417]">CoBank</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#121417]/40 tracking-wide">
            <a href="#como-funciona" className="hover:text-[#121417] transition-colors">Como funciona</a>
            <a href="#compradores" className="hover:text-[#121417] transition-colors">Compradores</a>
            <a href="#geradores" className="hover:text-[#121417] transition-colors">Geradores</a>
            <a href="#contato" className="hover:text-[#121417] transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-jungle.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-[#121417]/50 to-[#121417]/30"></div>
        
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#A39E93]/30 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-[#A39E93]"></span>
            <span className="text-[10px] font-medium text-[#A39E93] tracking-[0.4em] uppercase">Mercado ativo</span>
          </div>
          <h1 className="font-[Playfair_Display] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F2F0E9] leading-[1.05]">
            Créditos de carbono
            <br />
            <span className="italic text-[#A39E93]">da energia solar.</span>
          </h1>
          <p className="mt-8 text-[16px] text-[#F2F0E9]/60 leading-[1.8] max-w-[50ch] mx-auto">
            A CoBank conecta geradores de créditos a empresas e investidores 
            que buscam compensar emissões ou investir em ativos ambientais.
          </p>
          <p className="mt-3 text-[15px] text-[#F2F0E9]/35 leading-[1.7] italic font-[Playfair_Display]">
            Direto de quem gera. Sem intermediários.
          </p>
        </div>
      </header>

      {/* How it works */}
      <section id="como-funciona" className="py-28 px-6 bg-white border-y border-[#D4D1C9]/50">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl mb-16">
            <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">O modelo</span>
            <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] mt-3 leading-tight">
              Como a CoBank funciona
            </h2>
            <p className="text-[15px] text-[#121417]/40 mt-4 leading-relaxed">
              Transformamos a energia solar gerada por usinas distribuídas em créditos de carbono 
              verificados, disponíveis para compra direta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Sun,
                title: "Geração e registro",
                desc: "O proprietário da usina solar cadastra sua planta na CoBank. Com base na capacidade de geração, calculamos os créditos de carbono correspondentes."
              },
              {
                step: "02",
                icon: Shield,
                title: "Verificação e emissão",
                desc: "Os dados são verificados e os créditos de carbono são emitidos de forma padronizada, prontos para negociação no mercado."
              },
              {
                step: "03",
                icon: Zap,
                title: "Compra direta",
                desc: "Empresas que precisam compensar emissões ou investidores interessados em ativos ambientais compram os créditos diretamente."
              }
            ].map((item) => (
              <div key={item.step} className="group relative bg-[#F2F0E9] border border-[#D4D1C9]/50 rounded-2xl p-8 hover:border-[#A39E93]/50 hover:shadow-lg transition-all duration-300">
                <div className="size-12 rounded-xl bg-[#121417]/[0.04] flex items-center justify-center mb-6 group-hover:bg-[#121417]/[0.08] transition-colors">
                  <item.icon className="h-5 w-5 text-[#121417]/50" />
                </div>
                <span className="font-[Playfair_Display] italic text-sm text-[#A39E93]">{item.step}</span>
                <h3 className="text-lg font-medium text-[#121417] mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-[#121417]/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Buyers */}
      <section id="compradores" className="py-28 px-6 bg-[#F2F0E9]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="size-8 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-[#121417]/50" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#A39E93]">Para compradores</span>
              </div>
              <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] leading-tight mb-5">
                Empresas e investidores
              </h2>
              <p className="text-[15px] text-[#121417]/40 leading-[1.7] mb-10">
                Se sua empresa precisa compensar emissões de carbono para cumprir metas ESG, 
                ou se você busca diversificar investimentos em ativos ambientais, 
                a CoBank oferece acesso direto a créditos verificados de energia solar.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Compliance ambiental</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Compense suas emissões com créditos rastreáveis e auditáveis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Investimento em carbono</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Acesse um mercado em crescimento com liquidez e transparência.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#D4D1C9]/50 rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(18,20,23,0.04)]">
              <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">Por que comprar na CoBank</span>
              <ul className="mt-6 space-y-5">
                {[
                  "Créditos originados exclusivamente de energia solar distribuída no Brasil",
                  "Rastreabilidade completa — você sabe de qual usina veio cada crédito",
                  "Sem intermediários entre você e o gerador",
                  "Relatórios de impacto para auditorias e comunicação ESG"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="size-6 shrink-0 rounded-md bg-[#121417]/[0.04] flex items-center justify-center mt-0.5">
                      <span className="size-1.5 bg-[#A39E93] rounded-full"></span>
                    </div>
                    <span className="text-[14px] text-[#121417]/45 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-[#D4D1C9]/50"></div>
      </div>

      {/* For Generators */}
      <section id="geradores" className="py-28 px-6 bg-[#F2F0E9]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="order-2 lg:order-1 bg-white border border-[#D4D1C9]/50 rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(18,20,23,0.04)]">
              <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">Por que registrar sua usina</span>
              <ul className="mt-6 space-y-5">
                {[
                  "Monetize a energia que você já gera, sem custo adicional",
                  "Cadastro simples — informações básicas da usina e da geração",
                  "Receba diretamente quando seus créditos forem vendidos",
                  "Acompanhe tudo pela plataforma: créditos emitidos, vendas e rendimento"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="size-6 shrink-0 rounded-md bg-[#121417]/[0.04] flex items-center justify-center mt-0.5">
                      <span className="size-1.5 bg-[#A39E93] rounded-full"></span>
                    </div>
                    <span className="text-[14px] text-[#121417]/45 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="size-8 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                  <Sun className="h-4 w-4 text-[#121417]/50" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#A39E93]">Para geradores</span>
              </div>
              <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] leading-tight mb-5">
                Geradores de Créditos
              </h2>
              <p className="text-[15px] text-[#121417]/40 leading-[1.7] mb-10">
                Se você tem uma usina solar e gera energia limpa, a CoBank transforma 
                essa geração em créditos de carbono que podem ser vendidos para empresas e investidores. 
                Uma nova fonte de receita sem mudar nada na sua operação.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Leaf className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Receita extra da sua geração</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Seus megawatts viram créditos de carbono negociáveis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Sem burocracia</p>
                    <p className="text-sm text-[#121417]/35 mt-1">A CoBank cuida da verificação e da venda. Você só registra sua usina.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#121417]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="size-14 rounded-2xl bg-[#A39E93]/10 flex items-center justify-center mx-auto mb-8">
            <Leaf className="h-6 w-6 text-[#A39E93]" />
          </div>
          <h2 className="font-[Playfair_Display] text-3xl font-normal tracking-tight text-[#F2F0E9] mb-4 leading-tight">
            Quer saber mais?
          </h2>
          <p className="text-[15px] text-[#F2F0E9]/35 mb-10 leading-relaxed max-w-lg mx-auto">
            A CoBank está construindo a ponte entre quem gera energia limpa e quem precisa 
            compensar emissões. Entre em contato para entender como podemos ajudar.
          </p>
          <a 
            href="mailto:contato@cobank.com.br" 
            className="inline-flex items-center gap-2.5 bg-[#F2F0E9] text-[#121417] px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-white transition-colors"
          >
            Fale conosco <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#F2F0E9] border-t border-[#D4D1C9]/50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
                <span className="font-[Playfair_Display] text-sm font-medium text-[#121417]">CoBank</span>
              </div>
              <p className="text-[13px] text-[#121417]/25 max-w-xs leading-relaxed">
                Créditos de carbono de energia solar. Direto, transparente e verificado.
              </p>
            </div>
            <div className="text-[13px] text-[#121417]/25">
              <p>contato@cobank.com.br</p>
              <p className="mt-1">+55 31 993830596</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#D4D1C9]/50 text-[11px] text-[#121417]/15">
            &copy; {new Date().getFullYear()} CoBank. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
