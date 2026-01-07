
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  FileText, 
  CheckCircle2, 
  Menu, 
  X,
  Zap, 
  MousePointerClick,
  BarChart3,
  Quote,
  MessageCircle,
  Move,
  /* Corrected icon name from lucide-react */
  StretchHorizontal,
  ClipboardList
} from 'lucide-react';
import { Button } from './components/Button';
import SciencePage from './SciencePage';

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
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
    {children}
  </span>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const DomainCard: React.FC<{ title: string; description: string; size?: 'large' | 'small' }> = ({ title, description, size = 'small' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col ${size === 'large' ? 'min-h-[180px]' : 'min-h-[160px]'}`}>
    <div className={`h-2 bg-blue-900 rounded-full mb-4 ${size === 'large' ? 'w-16' : 'w-10'}`}></div>
    <h3 className={`${size === 'large' ? 'text-xl' : 'text-lg'} font-bold text-slate-900 mb-2 leading-tight`}>{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video w-full">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/NEOnApF0Ow8" 
            title="Apresentação NeuroRastreio Motor" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'science'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVideoModalOpen]);

  const scrollTo = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigate = (newView: 'home' | 'science') => {
    setView(newView);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    window.location.href = 'https://neurorastreio.online';
  };

  const handlePurchase = () => {
    window.location.href = 'https://pay.hotmart.com/B103531427J?bid=1766784240831';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/5511992367278?text=Olá, estou vindo do site NeuroRastreio Motor e gostaria de saber mais sobre a plataforma';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <Container>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigate('home')}>
              <Move className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">NEURO<span className="text-blue-900">RASTREIO MOTOR</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('solucao')} className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Solução</button>
              <button onClick={() => scrollTo('dominios')} className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Domínios</button>
              <button 
                onClick={() => handleNavigate('science')} 
                className={`font-medium transition-colors ${view === 'science' ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`}
              >
                Ciência
              </button>
              <Button onClick={handleLogin} variant="primary" className="py-2 px-4 text-sm">
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollTo('solucao')} className="block w-full text-left py-2 text-slate-600 font-medium">Solução</button>
              <button onClick={() => scrollTo('dominios')} className="block w-full text-left py-2 text-slate-600 font-medium">Domínios</button>
              <button onClick={() => handleNavigate('science')} className="block w-full text-left py-2 text-slate-600 font-medium">Ciência</button>
              <div className="pt-2">
                <Button onClick={handleLogin} className="w-full justify-center">Login</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
            
            <Container className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <div className="-mt-4">
                  <Badge>Para Terapeutas Ocupacionais e Clínicas Multiprofissionais</Badge>
                </div>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                  NeuroRastreio <span className="text-blue-900">Motor™</span>
                </h1>
                <h2 className="text-2xl font-bold text-slate-700 mb-6">
                  Rastreio funcional motor para apoio à decisão clínica, sem diagnóstico.
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Avaliação funcional indireta de componentes motores associados ao desempenho ocupacional, com organização objetiva de informações e retorno automático no painel profissional.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button onClick={handlePurchase} className="text-lg px-8 shadow-lg shadow-blue-900/10">
                    Ativar licença anual
                  </Button>
                  <Button onClick={() => setIsVideoModalOpen(true)} variant="outline" className="text-lg px-8">
                    Veja a plataforma por dentro
                  </Button>
                </div>
                <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <ClipboardList className="w-4 h-4" /> Baseado em matrizes funcionais amplamente utilizadas na prática clínica internacional.
                </p>
              </div>
            </Container>
          </section>

          {/* Micro Informative Block */}
          <div className="py-12 bg-white border-y border-slate-100/60">
            <Container>
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Uso profissional indicado para
                </h3>
                <div className="mb-5 space-y-1">
                  <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                    Terapeutas Ocupacionais &middot; Clínicas multiprofissionais
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] opacity-80">
                  <span className="w-6 h-px bg-slate-200"></span>
                  Ferramenta de rastreio funcional indireto para apoio à decisão clínica — não diagnóstico
                  <span className="w-6 h-px bg-slate-200"></span>
                </div>
              </div>
            </Container>
          </div>

          {/* Context & Problem */}
          <Section className="bg-slate-50">
            <Container>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">O contexto funcional motor</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Na prática clínica, o maior risco não é errar o diagnóstico motor. É <span className="font-semibold text-slate-900">intervir sem clareza funcional</span>, baseando decisões apenas em observação subjetiva.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-1 rounded">
                        <Clock className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Intervenções motoras sem foco funcional claro</h4>
                        <p className="text-sm text-slate-600">Direcionamento de terapia sem dados estruturados de base.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-1 rounded">
                        <Activity className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Dificuldade em demonstrar evolução objetiva</h4>
                        <p className="text-sm text-slate-600">Baseline subjetivo dificulta a visualização de progressos técnicos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-1 rounded">
                        {/* Corrected usage of StretchHorizontal icon */}
                        <StretchHorizontal className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Reavaliações sem baseline estruturado</h4>
                        <p className="text-sm text-slate-600">Perda de parâmetros históricos comparáveis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">A solução NeuroRastreio Motor™</h3>
                  <p className="text-slate-600 mb-6">
                    Transforme observação clínica em <span className="font-bold">informação funcional organizada</span>, com processamento automático e retorno direto no painel profissional.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Identificação de riscos funcionais motores",
                      "Organização de hipóteses clínicas com base em dados",
                      "Estabelecimento de baseline funcional inicial",
                      "Monitoramento evolutivo ao longo do acompanhamento"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-500 italic">
                      "Não é diagnóstico. É base funcional para decisão clínica qualificada."
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* Domains Section - 3+4 Grid Layout */}
          <Section id="dominios">
            <Container>
              <SectionHeading 
                title="Domínios funcionais avaliados" 
                subtitle="Matriz de rastreio estruturada para mapear componentes motores essenciais ao desempenho ocupacional."
              />
              
              {/* Row 1: 3 Large Primary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <DomainCard 
                  size="large"
                  title="Perfil Sensorial Funcional" 
                  description="Organização sensorial and impacto funcional no desempenho ocupacional, observando como o processamento sensorial interfere nas atividades diárias."
                />
                <DomainCard 
                  size="large"
                  title="Desenvolvimento Motor" 
                  description="Marcos motores funcionais organizados por faixa etária, permitindo identificar desvios em relação ao desenvolvimento esperado."
                />
                <DomainCard 
                  size="large"
                  title="Força Funcional" 
                  description="Capacidade funcional relacionada à escrita, postura e manipulação, avaliando a sustentação e resistência necessária para tarefas escolares e domésticas."
                />
              </div>

              {/* Row 2: 4 Smaller Uniform Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DomainCard 
                  title="Função Manual" 
                  description="Coordenação fina, precisão e fadiga funcional na execução de tarefas de preensão e manipulação de objetos."
                />
                <DomainCard 
                  title="Autonomia (AVDs)" 
                  description="Independência funcional em atividades da vida diária, como vestuário, alimentação e higiene pessoal."
                />
                <DomainCard 
                  title="Dor & Impacto Funcional" 
                  description="Interferência de desconfortos físicos na execução de atividades e disposição para exploração motora."
                />
                <DomainCard 
                  title="Autopercepção Funcional" 
                  description="Discrepância entre a percepção funcional do aprendente/família e o desempenho motor observado."
                />
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                  <div className="text-left text-sm">
                    <h4 className="font-bold text-slate-900">Rastreio Funcional Indireto</h4>
                    <p className="text-slate-600">O NeuroRastreio Motor™ não substitui avaliação clínica completa.</p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* Workflow */}
          <Section id="solucao" className="bg-blue-900 text-white">
            <Container>
              <div className="md:flex md:items-center md:justify-between mb-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Aplicação Remota via WhatsApp</h2>
                  <p className="text-blue-100 text-lg mb-8">
                    O consultório se estende para além do espaço físico. A família recebe e responde de forma intuitiva, gerando dados para sua análise.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold">Profissional gera o link</h4>
                        <p className="text-blue-200 text-sm">Criação de link único e seguro no sistema profissional.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold">Envio aos pais</h4>
                        <p className="text-blue-200 text-sm">Família recebe via WhatsApp e responde sem necessidade de login.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold">Resultado retorna automaticamente</h4>
                        <p className="text-blue-200 text-sm">Dados processados direto no seu painel para decisão técnica.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-5/12 mt-12 md:mt-0">
                  <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Smartphone className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold">Processo Digital Eficiente</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <MousePointerClick className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Sem PDFs soltos</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Sem planilhas manuais</span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Sem retrabalho de digitação</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* Report Section */}
          <Section>
            <Container>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[3/4] bg-slate-100 border-2 border-slate-200 rounded-lg p-6 shadow-xl">
                    <div className="w-full h-4 bg-slate-300 rounded mb-4 w-1/3"></div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                          <div className="w-full h-2 bg-slate-200 rounded"></div>
                          <div className="w-full h-2 bg-slate-200 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="text-blue-300 w-12 h-12" />
                          </div>
                          <div className="h-24 bg-teal-100 rounded-lg flex items-center justify-center">
                            <Activity className="text-teal-300 w-12 h-12" />
                          </div>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-100 rounded text-xs text-green-800">
                        Indicadores de Desempenho Ocupacional
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white p-2 rounded-full shadow-lg">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Badge>Automação Inteligente</Badge>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Uma aplicação gera dois relatórios.</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    A partir de uma única aplicação, o NeuroRastreio Motor™ gera automaticamente duas versões de relatório, cada uma no nível correto de leitura.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        <span className="font-bold">Relatório Profissional:</span> apoio à decisão clínica com indicadores de desempenho e riscos motores.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        <span className="font-bold">Relatório para Família:</span> versão simplificada, clara e com linguagem acessível para os pais.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* Plans Section */}
          <Section className="bg-white" id="planos">
            <Container>
              <SectionHeading 
                title="Opções de licenciamento profissional" 
                subtitle="Configurações estruturadas para diferentes demandas operacionais, garantindo acesso integral aos protocolos de rastreio funcional motor."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* Plano Clínica */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col h-full order-2 md:order-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Plano Clínica</h3>
                  <p className="text-slate-500 text-sm mb-6">Configuração para clínicas com múltiplos profissionais.</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl font-extrabold text-slate-900">R$ 497</span>
                      <span className="text-slate-500 text-xs mt-2">5 licenças anuais</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">Ou em 4x de R$ 135,28</p>
                    <p className="text-xs text-slate-400 mt-4 tracking-tight">5 dispositivos ativos</p>
                  </div>

                  <div className="text-left mb-8 flex-grow">
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Aprendentes ilimitados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Domínios motores completos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Relatórios profissional e família</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">5 dispositivos ativos simultâneos</span>
                      </li>
                    </ul>
                  </div>

                  <Button onClick={() => window.location.href = 'https://pay.hotmart.com/B103531427J?off=jmcura9r'} variant="outline" className="w-full py-4 font-bold">
                    Ativar Plano Clínica
                  </Button>
                </div>

                {/* Plano Profissional - Destaque */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-center flex flex-col h-full transform md:scale-105 relative z-10 order-1 md:order-2">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 mt-4">Uso Clínico Individual</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">Licença anual para uso clínico individual contínuo.</p>
                  
                  <div className="mb-8">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-5xl font-black text-blue-900">R$ 147</span>
                      <span className="text-slate-500 text-[10px] mt-2 opacity-60">Licença anual</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1">Ou em 3x de R$ 53,17</p>
                  </div>

                  <div className="text-left mb-10 flex-grow">
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Aprendentes ilimitados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Domínios motores completos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Relatórios profissional e família</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">1 dispositivo ativo por licença</span>
                      </li>
                    </ul>
                  </div>

                  <Button onClick={handlePurchase} className="w-full py-5 text-lg font-black shadow-lg shadow-blue-900/10">
                    Ativar Plano Individual
                  </Button>
                </div>

                {/* Plano Escola */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col h-full order-3">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Plano Escola</h3>
                  <p className="text-slate-500 text-sm mb-6">Gestão de rastreio para grandes equipes ou instituições.</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl font-extrabold text-slate-900">R$ 997</span>
                      <span className="text-slate-500 text-xs mt-2">15 licenças anuais</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">Ou em 5x de R$ 220,75</p>
                    <p className="text-xs text-slate-400 mt-4 tracking-tight">15 dispositivos ativos</p>
                  </div>

                  <div className="text-left mb-8 flex-grow">
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Aprendentes ilimitados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Domínios motores completos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">Relatórios profissional e família</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">15 dispositivos ativos simultâneos</span>
                      </li>
                    </ul>
                  </div>

                  <Button onClick={() => window.location.href = 'https://pay.hotmart.com/B103531427J?off=o92wvqkm'} variant="outline" className="w-full py-4 font-bold">
                    Ativar Plano Escola
                  </Button>
                </div>

              </div>
              <p className="mt-12 text-center text-[12px] text-slate-400 max-w-xl mx-auto">
                Licenciamento estruturado para assegurar conformidade técnica e integridade operacional dos dados.
              </p>
            </Container>
          </Section>

          {/* Testimonials Section */}
          <Section className="bg-white">
            <Container>
              <SectionHeading 
                title="Avaliação por clínicas parceiras" 
                subtitle="O NeuroRastreio Motor™ foi disponibilizado antecipadamente para validar a aplicação prática e a utilidade clínica em contexto real."
              />
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Carla Mendes",
                    role: "Terapeuta Ocupacional",
                    clinic: "Clínica Viver",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "A organização dos domínios facilitou muito a minha triagem inicial. O relatório para a família é o diferencial que faltava."
                  },
                  {
                    name: "Dr. Roberto Silva",
                    role: "Diretor Clínico",
                    clinic: "Instituto Neuro",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Implementamos em toda a nossa equipe de T.O. A padronização das informações elevou o nível da nossa discussão clínica."
                  },
                  {
                    name: "Luciana Costa",
                    role: "Terapeuta Ocupacional",
                    clinic: "Espaço Crescer",
                    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "O rastreio sensorial indireto via WhatsApp economiza um tempo precioso que agora dedico inteiramente à intervenção presencial."
                  }
                ].map((t, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-2xl relative h-full flex flex-col">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 fill-blue-100" />
                    <p className="text-slate-600 mb-6 relative z-10 italic flex-grow">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                        <p className="text-xs text-blue-600 font-medium">{t.role}</p>
                        <p className="text-xs text-slate-500">{t.clinic}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* CTA Section */}
          <Section id="contato" className="bg-white border-t border-slate-100">
            <Container>
              <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white">Decisão clínica começa com dados funcionais.</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                  O NeuroRastreio Motor™ organiza o ponto de partida funcional e orienta suas decisões terapêuticas com base em evidências.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 mb-6">
                  <Button onClick={() => scrollTo('planos')} className="bg-teal-500 text-white hover:bg-teal-600 border-none text-lg px-8 font-bold w-full md:w-auto">
                    Ver Planos Profissionais
                  </Button>
                  <Button onClick={() => setIsVideoModalOpen(true)} className="bg-white !text-blue-900 font-bold text-lg px-8 w-full md:w-auto hover:bg-slate-100 border-none">
                    Ver demonstração
                  </Button>
                  <Button onClick={handleWhatsApp} className="bg-white !text-blue-900 font-bold border-none hover:bg-slate-100 text-lg px-8 flex gap-2 w-full md:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    Falar com consultor
                  </Button>
                </div>
                <p className="text-sm text-white/80 relative z-10">
                  Reembolso disponível por 7 dias · Licenças anuais
                </p>
              </div>
            </Container>
          </Section>

          {/* Footer */}
          <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 text-sm">
            <Container>
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <Move className="h-6 w-6 text-slate-400" />
                    <span className="font-bold text-slate-700">NEURORASTREIO MOTOR</span>
                  </div>
                  <p className="text-slate-500 mb-4">
                    Rastreio funcional motor. Apoio à decisão. Prática clínica.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
                  <ul className="space-y-2 text-slate-500">
                    <li>Pronto para execução</li>
                    <li>Foco em Desempenho Ocupacional</li>
                    <li>Suporte Remoto</li>
                  </ul>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <h4 className="font-bold text-slate-900 mb-4">Segurança e Ética</h4>
                  <div className="flex items-start gap-3 text-slate-500">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <p>
                      O NeuroRastreio Motor™ é um instrumento de rastreio funcional indireto. Deve ser usado por profissional qualificado como apoio à investigação. Não realiza diagnóstico.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-400">
                <p>© NeuroRastreio Motor — Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Desenvolvido com rigor clínico pela <a href="https://psiform.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors underline underline-offset-4">Psiform</a>.</p>
              </div>
            </Container>
          </footer>
        </>
      ) : (
        <SciencePage onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;
