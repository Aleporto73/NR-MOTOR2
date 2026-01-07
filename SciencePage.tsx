
import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Info,
  Beaker,
  History,
  Smartphone,
  Move,
  Scale,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Button } from './components/Button';

// --- Sub-components for clean structure ---

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4 uppercase tracking-wider">
    {children}
  </span>
);

const ScienceCard: React.FC<{ kicker: string; title: string; description: string; extra?: string }> = ({ kicker, title, description, extra }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
    <span className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">{kicker}</span>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{description}</p>
    {extra && (
      <>
        <div className="h-px bg-slate-100 my-4"></div>
        <p className="text-xs text-slate-900 font-bold leading-relaxed">{extra}</p>
      </>
    )}
  </div>
);

const RefItem: React.FC<{ num: number; title: string; text: string; link?: string }> = ({ num, title, text, link }) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 font-black text-sm shadow-sm">
      {num}
    </div>
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-900 font-bold hover:underline flex items-center gap-1">
          {title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <span className="text-blue-900 font-bold">{title}</span>
      )}
      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const DomainCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="h-1.5 w-10 bg-blue-900 rounded-full mb-4"></div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const SciencePage: React.FC<{ onNavigate: (view: 'home' | 'science') => void }> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — CIÊNCIA */}
      <header className="relative pt-12 pb-20 md:pt-20 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Badge>Página Científica • Base & Método — Módulo Motor</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Ciência aplicada ao rastreio funcional motor — com rigor e prudência.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                O <strong>NeuroRastreio Motor™</strong> utiliza <strong>matrizes funcionais motoras e ocupacionais</strong> amplamente descritas na literatura clínica e terapêutica internacional para <strong>organizar dados funcionais indiretos</strong>, com foco em <strong>apoio à decisão clínica</strong>, <strong>baseline</strong> e <strong>monitoramento evolutivo</strong>.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Não se posiciona como diagnóstico e <strong>não substitui avaliação clínica presencial</strong>.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button onClick={() => scrollTo('referencias')} className="px-6">Ver referências</Button>
                <Button onClick={() => scrollTo('etica')} variant="outline" className="px-6">Ler escopo & ética</Button>
                <div className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                   Rastreio funcional motor indireto • Uso profissional
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white/80 border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex-shrink-0 mt-1">
                  <Info className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">Aviso importante:</span> Esta página descreve <strong>fundamentos científicos e posicionamento ético</strong>. Não expõe parâmetros internos, pesos algorítmicos ou lógica operacional proprietária.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <aside className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute top-0 right-0 -mr-4 -mt-4">
                  <div className="bg-blue-900 p-3 rounded-2xl shadow-lg">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">O que esta página valida</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Quatro pilares que sustentam o <strong>NeuroRastreio Motor™</strong>, sem extrapolação conceitual ou marketing exagerado.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Matrizes funcionais consolidadas", desc: "Modelos utilizados em terapia ocupacional e reabilitação." },
                    { title: "Rastreio indireto estruturado", desc: "Organização de informação a partir de questionários estruturados." },
                    { title: "Uso clínico real", desc: "Baseline funcional e acompanhamento evolutivo." },
                    { title: "Escopo ético claro", desc: "Rastreio funcional ≠ teste padronizado ≠ diagnóstico." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <b className="text-sm text-slate-900 block">{item.title}</b>
                        <span className="text-xs text-slate-500 leading-tight block mt-1">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </header>

      {/* FUNDAMENTOS CIENTÍFICOS */}
      <Section id="fundamentos">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Fundamentos científicos do módulo Motor</h2>
              <p className="text-slate-600 leading-relaxed">
                O NeuroRastreio Motor™ se apoia em <strong>tradições clínicas consolidadas</strong> da terapia ocupacional, reabilitação funcional e ciências do movimento, traduzidas para um <strong>ambiente digital de rastreio funcional indireto</strong>, adequado à prática clínica contemporânea.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-500">
                Ciência → Clínica (sem pular etapas)
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScienceCard 
              kicker="Base" 
              title="Matrizes funcionais motoras consolidadas" 
              description="Utilização de modelos amplamente reconhecidos para análise de função manual, autonomia, perfil sensorial, força funcional e impacto da dor."
            />
            <ScienceCard 
              kicker="Métrica" 
              title="Organização funcional indireta" 
              description="O sistema não mede performance direta. Ele organiza percepções clínicas estruturadas, reduzindo ruído e aumentando consistência interpretativa."
            />
            <ScienceCard 
              kicker="Finalidade" 
              title="Rastreio funcional e acompanhamento" 
              description="Produzir baseline motor e acompanhar evolução funcional ao longo do processo terapêutico."
            />
          </div>

          <div className="mt-8 flex gap-4 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Scale className="w-5 h-5 text-blue-900" />
            </div>
            <div>
              <b className="text-slate-900 block mb-1">Tradução correta para o contexto clínico</b>
              <p className="text-sm text-slate-600">As matrizes utilizadas no NeuroRastreio Motor™ são aplicadas como <strong>rastreio funcional indireto</strong>, e <strong>não</strong> como testes motores padronizados, instrumentos psicométricos ou equivalentes diagnósticos.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* DOMÍNIOS FUNCIONAIS UTILIZADOS */}
      <Section id="paradigmas" className="bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Domínios funcionais do rastreio motor</h2>
              <p className="text-slate-600 leading-relaxed">
                Abaixo estão os <strong>domínios funcionais</strong> organizados pelo NeuroRastreio Motor™. Eles representam <strong>camadas de observação funcional</strong>, não testes isolados.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                7 domínios • estrutura funcional integrada
              </div>
            </div>
          </div>

          {/* Grid Layout inspired by home: 3+4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DomainCard 
              title="Perfil Sensorial Funcional" 
              description="Organização sensorial e impacto no comportamento motor e ocupacional." 
            />
            <DomainCard 
              title="Desenvolvimento Motor Funcional" 
              description="Marcos motores aplicados à funcionalidade cotidiana." 
            />
            <DomainCard 
              title="Força Funcional" 
              description="Capacidade funcional relacionada à postura, escrita e manipulação." 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DomainCard 
              title="Função Manual" 
              description="Coordenação fina, precisão e resistência funcional." 
            />
            <DomainCard 
              title="Autonomia (AVDs)" 
              description="Independência funcional nas atividades diárias." 
            />
            <DomainCard 
              title="Dor & Impacto Funcional" 
              description="Interferência da dor na execução motora." 
            />
            <DomainCard 
              title="Autopercepção Funcional" 
              description="Discrepância entre percepção e desempenho observado." 
            />
          </div>

          <div className="mt-12 p-6 bg-white border border-slate-200 rounded-2xl text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-slate-900 block mb-2">Nota de proteção (anti-ruído e anti-má interpretação):</span>
            Os domínios são apresentados como <strong>estrutura funcional integrada</strong>, sem equivalência a testes formais ou escalas diagnósticas isoladas.
          </div>
        </Container>
      </Section>

      {/* ESCOPO, ÉTICA E LIMITES */}
      <Section id="etica">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Escopo, ética e limites do NeuroRastreio Motor™</h2>
              <p className="text-slate-600 leading-relaxed">
                Esta seção define claramente <strong>o que o módulo é</strong> e <strong>o que ele não é</strong>, assegurando uso clínico responsável e defensável.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-500">
                Blindagem clínica & institucional
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScienceCard 
              kicker="O que é" 
              title="Rastreio funcional motor indireto" 
              description="Ferramenta de apoio à decisão profissional, voltada à organização de informações funcionais motoras, para baseline, triagem e acompanhamento evolutivo."
              extra="Uso típico: Primeira consulta • Início da intervenção • Reavaliações • Atendimento remoto assistido"
            />
            <ScienceCard 
              kicker="O que não é" 
              title="Não é diagnóstico" 
              description="Não substitui avaliação clínica completa, não é instrumento psicométrico, não gera hipótese diagnóstica automática e não deve ser utilizado como laudo conclusivo."
              extra="Regra de ouro: Os dados orientam a conduta, não “carimbam” diagnóstico."
            />
          </div>

          <div className="mt-8 flex gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <b className="text-slate-900 block mb-1 text-sm">Aplicação remota assistida</b>
              <p className="text-xs text-slate-600 leading-relaxed">Quando utilizada remotamente, a aplicação ocorre como <strong>extensão do acompanhamento clínico</strong>, com envio via WhatsApp e execução em ambiente digital controlado.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* REFERÊNCIAS */}
      <Section id="referencias" className="bg-slate-50/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Referências e bases conceituais</h2>
              <p className="text-slate-600 leading-relaxed">
                Fontes públicas e institucionais que fundamentam a prática clínica funcional, terapia ocupacional e reabilitação. (Links exemplificativos — <strong>não</strong> descrevem implementação do sistema.)
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                Links conceituais • consulta externa
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <RefItem num={1} title="Organizações e publicações em Terapia Ocupacional" text="Bases normativas e conceituais do desempenho ocupacional e participação." link="https://www.aota.org/" />
            <RefItem num={2} title="Literatura de reabilitação funcional" text="Estudos sobre marcos do desenvolvimento motor e estratégias de intervenção em componentes de desempenho." />
            <RefItem num={3} title="Guias de avaliação de AVDs e função manual" text="Modelos clássicos para mensuração de independência e competência motora fina." />
            <RefItem num={4} title="Produção acadêmica em ciências do movimento" text="Pesquisas sobre controle motor, força funcional e impacto sensorial na coordenação." />
            
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-xs text-slate-400 italic">
               <span className="font-bold text-slate-600 not-italic block mb-1">Nota importante sobre referências:</span>
               As referências são <strong>contextuais</strong>. Parâmetros internos e lógica operacional são protegidos como propriedade intelectual.
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA FINAL — CIÊNCIA */}
      <Section id="cta-ciencia">
        <Container>
          <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ciência só importa quando vira decisão clínica.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Veja como o NeuroRastreio Motor™ transforma fundamentos clínicos em <strong>organização funcional clara</strong>, com posicionamento ético e aplicação prática.
            </p>
            <div className="flex flex-col items-center gap-4 justify-center relative z-10">
              <Button onClick={() => onNavigate('home')} variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600 border-none text-lg px-8 flex items-center gap-2">
                Voltar para a página principal <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* DECLARAÇÃO INSTITUCIONAL (RODAPÉ) */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-100 text-sm">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Move className="h-6 w-6 text-blue-900" />
              <span className="font-bold text-slate-900 tracking-tight">NEURORASTREIO MOTOR</span>
            </div>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
               <button onClick={() => scrollTo('etica')} className="hover:text-blue-900 transition-colors">Ética</button>
               <button onClick={() => scrollTo('paradigmas')} className="hover:text-blue-900 transition-colors">Domínios</button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 text-xs text-slate-400 leading-relaxed text-center md:text-left">
            O NeuroRastreio Motor™ é um instrumento de <strong>rastreio funcional indireto</strong>.
            Deve ser utilizado por profissional habilitado como apoio à investigação clínica e ao acompanhamento terapêutico.
            Não substitui testes formais nem avaliações clínicas completas.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default SciencePage;
