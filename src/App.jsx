import React, { useState } from 'react';
import { Phone, Wrench, MapPin, Clock, Star, Menu, X, MessageCircle, CheckCircle, Truck, BatteryCharging } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Paleta de cores baseada na imagem (Vermelho vibrante e Branco)
  const brandColor = "bg-red-600";
  const brandHover = "hover:bg-red-700";
  const brandText = "text-red-600";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Atualizei o link com o número correto (DDD 92)
  const whatsappLink = "https://wa.me/5592984350148";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      {/* Barra de Navegação */}
      <nav className={`${brandColor} text-white shadow-lg sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Nome da Marca */}
            <div className="flex flex-col items-start leading-tight">
              <span className="font-black italic text-xl md:text-2xl tracking-tighter">CHEGA</span>
              <span className="font-black italic text-xl md:text-2xl tracking-tighter -mt-2">RÁPIDO</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-200 transition">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="hover:text-red-200 transition">Serviços</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-red-200 transition">Sobre</button>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition shadow-md flex items-center gap-2"
              >
                <Phone size={18} />
                Ligar Agora
              </a>
            </div>

            {/* Botão Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 pb-4 px-4 shadow-inner">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 font-medium">Início</button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left py-2 font-medium">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 font-medium">Sobre</button>
            <a 
              href={whatsappLink}
              className="block w-full text-center bg-white text-red-600 py-3 mt-2 rounded-lg font-bold"
            >
              Chamar Socorro
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section (Topo) */}
      <section id="home" className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Usando um gradiente CSS para simular uma estrada/noite, já que não temos imagens externas */}
           <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-red-900"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="inline-block bg-red-600 px-3 py-1 rounded text-sm font-bold mb-4 animate-pulse">
              ATENDIMENTO 24 HORAS
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tight leading-none mb-6">
              PNEU FUROU?<br />
              <span className="text-red-500">A GENTE CHEGA RÁPIDO!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Borracharia móvel delivery. Atendemos carros, motos e vans onde você estiver. Rapidez e segurança para você seguir viagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={whatsappLink}
                className={`${brandColor} ${brandHover} text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg transform hover:-translate-y-1 transition flex items-center justify-center gap-2`}
              >
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </a>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition"
              >
                Ver Serviços
              </button>
            </div>
          </div>
          
          {/* Ilustração Visual (lado direito desktop) */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative bg-white p-6 rounded-full shadow-2xl h-64 w-64 md:h-80 md:w-80 flex items-center justify-center border-4 border-red-600">
               <Truck size={120} className="text-red-600" />
               <div className="absolute -bottom-4 bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                 <Clock size={18} className="text-yellow-400"/>
                 Chegamos em ~30min
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-black italic mb-4 ${brandText}`}>NOSSOS SERVIÇOS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos solução completa para emergências com pneus e baterias. Não precisa de guincho, nós consertamos no local.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-t-4 border-red-600 group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition duration-300">
                <Wrench className="text-red-600 w-8 h-8 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conserto de Pneus</h3>
              <p className="text-gray-600">
                Reparo rápido de furos em pneus tubeless (sem câmara) e com câmara. Vulcanização a frio no local.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-t-4 border-red-600 group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition duration-300">
                <Truck className="text-red-600 w-8 h-8 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-bold mb-3">Troca de Estepe</h3>
              <p className="text-gray-600">
                Se o pneu rasgou e não tem conserto, fazemos a troca pelo seu estepe com segurança e ferramentas adequadas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-t-4 border-red-600 group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition duration-300">
                <BatteryCharging className="text-red-600 w-8 h-8 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auxílio de Bateria</h3>
              <p className="text-gray-600">
                O carro não liga? Fazemos a recarga rápida (chupeta) para você não ficar na mão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section id="sobre" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-black italic mb-6">POR QUE CHAMAR A <span className="text-red-500">CHEGA RÁPIDO?</span></h2>
             <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="bg-red-600 p-2 rounded h-fit">
                   <Clock size={24} className="text-white" />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold">Atendimento Ágil</h4>
                   <p className="text-gray-400">Nossa equipe está espalhada pela cidade para chegar o mais rápido possível até você.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-red-600 p-2 rounded h-fit">
                   <CheckCircle size={24} className="text-white" />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold">Preço Justo</h4>
                   <p className="text-gray-400">Valor combinado antes do serviço. Sem surpresas na hora de pagar.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-red-600 p-2 rounded h-fit">
                   <MapPin size={24} className="text-white" />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold">Vamos até Você</h4>
                   <p className="text-gray-400">Em casa, no trabalho ou na estrada. Nossa oficina é móvel e completa.</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Área de Atendimento</h3>
              <p className="text-gray-400">Estamos prontos para atender nas seguintes regiões:</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Centro</div>
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Zona Norte</div>
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Zona Sul</div>
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Zona Leste</div>
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Zona Oeste</div>
              <div className="bg-gray-700 p-3 rounded text-sm font-semibold">Região Metropolitana</div>
            </div>
            <div className="mt-8">
              <a 
                href={whatsappLink}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition"
              >
                <MessageCircle />
                Consultar Disponibilidade
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black italic text-gray-800 mb-12">O QUE DIZEM NOSSOS CLIENTES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <div className="flex text-yellow-400 mb-3">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-600 italic mb-4">"Me salvou num domingo à noite! Chegou em 20 minutos e trocou o pneu super rápido. Recomendo demais."</p>
              <p className="font-bold text-gray-900">- Carlos Eduardo</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <div className="flex text-yellow-400 mb-3">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-600 italic mb-4">"Excelente atendimento. O preço foi justo e o profissional muito educado. A Chega Rápido cumpre o que promete."</p>
              <p className="font-bold text-gray-900">- Marina Santos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="bg-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start leading-tight mb-4">
              <span className="font-black italic text-2xl tracking-tighter">CHEGA</span>
              <span className="font-black italic text-2xl tracking-tighter -mt-2">RÁPIDO</span>
            </div>
            <p className="text-red-100 max-w-xs">
              Sua borracharia delivery de confiança. Rapidez, qualidade e segurança onde você estiver.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="flex items-center justify-center md:justify-start gap-3">
               <Phone size={20} />
               <span className="text-xl font-bold">(92) 98435-0148</span>
            </div>
            <a 
              href={whatsappLink}
              className="bg-white text-red-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-red-200 text-sm border-t border-red-600 pt-8 mx-4">
          &copy; 2025 Borracharia Móvel Chega Rápido. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;