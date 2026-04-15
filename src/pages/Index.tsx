
import { ArrowRight, Sun, TrendingUp, Building2, Leaf, Shield, Zap, BarChart3, Globe, Users, Layers, FileCheck } from "lucide-react";

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
            <a href="#produtores" className="hover:text-[#121417] transition-colors">Produtores</a>
            <a href="#compradores" className="hover:text-[#121417] transition-colors">Compradores</a>
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
            <span className="text-[10px] font-medium text-[#A39E93] tracking-[0.4em] uppercase">Infraestrutura de carbono</span>
          </div>
          <h1 className="font-[Playfair_Display] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F2F0E9] leading-[1.05]">
            Impacto ambiental
            <br />
            <span className="italic text-[#A39E93]">como ativo financeiro.</span>
          </h1>
          <p className="mt-8 text-[16px] text-[#F2F0E9]/60 leading-[1.8] max-w-[48ch] mx-auto">
            Estruturamos, financiamos e conectamos projetos de créditos de carbono ao mercado global.
          </p>
        </div>
      </header>

      {/* How it works */}
      <section id="como-funciona" className="py-28 px-6 bg-white border-y border-[#D4D1C9]/50">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl mb-16">
            <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">O ciclo completo</span>
            <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] mt-3 leading-tight">
              Como funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BarChart3,
                title: "Coleta e estruturação",
                desc: "Dados de geração coletados e analisados para viabilidade."
              },
              {
                step: "02",
                icon: Layers,
                title: "Certificação e consórcio",
                desc: "Ativos agrupados e certificados por padrões internacionais."
              },
              {
                step: "03",
                icon: Globe,
                title: "Registro e venda",
                desc: "Créditos registrados e conectados a compradores globais."
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

      {/* For Producers */}
      <section id="produtores" className="py-28 px-6 bg-[#F2F0E9]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="size-8 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                  <Sun className="h-4 w-4 text-[#121417]/50" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#A39E93]">Geradores de créditos</span>
              </div>
              <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] leading-tight mb-5">
                Donos de ativos renováveis
              </h2>
              <p className="text-[15px] text-[#121417]/40 leading-[1.7] mb-8">
                Transformamos sua geração em créditos de carbono certificados e os conectamos ao mercado — sem investimento inicial.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Leaf className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Receita extra, custo zero</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Monetize a energia que você já gera.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Modelo de consórcio</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Custos diluídos. Escala desde o primeiro dia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#D4D1C9]/50 rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(18,20,23,0.04)]">
              <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">Vantagens</span>
              <ul className="mt-6 space-y-5">
                {[
                  "Sem investimento inicial",
                  "Certificação compartilhada entre geradores",
                  "Acesso a mercados internacionais",
                  "Painel de acompanhamento de créditos e receita",
                  "Rastreabilidade do ativo ao comprador"
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

      {/* For Buyers */}
      <section id="compradores" className="py-28 px-6 bg-[#F2F0E9]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="order-2 lg:order-1 bg-white border border-[#D4D1C9]/50 rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(18,20,23,0.04)]">
              <span className="text-[10px] font-semibold text-[#A39E93] uppercase tracking-[0.4em]">Vantagens</span>
              <ul className="mt-6 space-y-5">
                {[
                  "Créditos certificados internacionalmente",
                  "Rastreabilidade completa por projeto",
                  "Projetos consolidados com escala",
                  "Relatórios de impacto para ESG",
                  "Sem intermediários desnecessários"
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
                  <TrendingUp className="h-4 w-4 text-[#121417]/50" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#A39E93]">Compradores</span>
              </div>
              <h2 className="font-[Playfair_Display] text-[2.25rem] font-normal tracking-tight text-[#121417] leading-tight mb-5">
                Empresas e investidores
              </h2>
              <p className="text-[15px] text-[#121417]/40 leading-[1.7] mb-8">
                Compense emissões ou diversifique investimentos com créditos certificados, rastreáveis e estruturados.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Compliance ambiental</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Créditos auditáveis para metas ESG.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-[#121417]/[0.04] flex items-center justify-center">
                    <FileCheck className="h-4 w-4 text-[#121417]/50" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#121417]">Transparência total</p>
                    <p className="text-sm text-[#121417]/35 mt-1">Cada crédito rastreável até a origem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="py-28 px-6 bg-[#121417]">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-[Cormorant_Garamond] text-3xl md:text-5xl font-light italic tracking-tight text-[#F2F0E9]/80 leading-[1.3]">
            "Escala através da
            <br />
            <span className="text-[#A39E93]">agregação inteligente."</span>
          </blockquote>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F2F0E9] border-t border-[#D4D1C9]/50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
                <span className="font-[Playfair_Display] text-sm font-medium text-[#121417]">CoBank</span>
              </div>
              <p className="text-[13px] text-[#121417]/25 max-w-xs leading-relaxed">
                Estruturamos, certificamos e conectamos projetos de créditos de carbono ao mercado global.
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
