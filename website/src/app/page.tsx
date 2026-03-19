// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, TreePine, Coffee, Users, Leaf, ArrowRight, Plus, Minus, Menu, X, MessageCircle } from "lucide-react";
// Removemos next/image para los placeholders remotos para evitar el error de configuracion sin reiniciar el servidor

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ExploturLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll y mostrar/ocultar el navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // Aparece después de que el usuario haga scroll hacia abajo
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    { q: "¿Cuentan con alojamiento?", a: "Sí, disponemos de cómodas cabañas equipadas, ideales para familias o parejas. Debido a la alta demanda, te sugerimos reservar con anticipación." },
    { q: "¿Reciben colegios o grupos grandes?", a: "¡Por supuesto! Contamos con programas especiales, infraestructura de campamento y actividades guiadas para grupos e instituciones. Escríbenos para organizar tu jornada." },
    { q: "¿Cómo puedo reservar o consultar precios?", a: "Nos encanta dar un trato personalizado. Comunícate directo a nuestro WhatsApp o correo y te ayudaremos a armar tu estadía perfecta." },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#333333] selection:bg-[#273E32] selection:text-white overflow-x-hidden">
      
      {/* HEADER STICKY (Aparece en scroll) */}
      <header className={`fixed top-0 w-full z-50 py-4 px-6 sm:px-12 flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? "translate-y-0 bg-white/95 backdrop-blur-md shadow-sm text-[#273E32]" : "-translate-y-full opacity-0 bg-transparent text-transparent"}`}>
        <div className="font-serif text-2xl font-bold tracking-wider">
          Explotur Quilleco
        </div>
        
        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#nosotros" className="hover:text-[#8E9B85] transition">Nosotros</a>
          <a href="#experiencias" className="hover:text-[#8E9B85] transition">Experiencias</a>
          <a href="#faq" className="hover:text-[#8E9B85] transition">Preguntas Frecuentes</a>
          <a href="#contacto" className="bg-[#273E32] text-white px-5 py-2 rounded-md font-medium hover:bg-[#8E9B85] transition">
            Contacto
          </a>
        </nav>

        {/* Botón Menú Mobile */}
        <button className="md:hidden text-[#273E32]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {mobileMenuOpen && isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 w-full bg-white shadow-md z-40 md:hidden flex flex-col px-6 py-6 space-y-6 font-medium text-[#273E32] border-t border-gray-100"
          >
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
            <a href="#experiencias" onClick={() => setMobileMenuOpen(false)}>Experiencias</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Preguntas Frecuentes</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-[#8E9B85]">Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION (Limpio inicialmente) */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[#273E32] z-0">
          <img 
            src="https://picsum.photos/id/29/2000/1200" 
            alt="Bosque Valle El Olivillo" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-12 md:pt-0">
          {/* Logo que se muestra solo al principio de la web y luego puede desaparecer por scroll */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="font-serif text-3xl font-bold tracking-widest text-white mb-12 opacity-80"
          >
            Explotur Quilleco
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
          >
            Respira profundo.<br/><span className="italic text-[#E5E0D8]">Ya estás en el bosque.</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto font-sans"
          >
            Cabañas, senderos y naturaleza viva en el corazón de Quilleco. Un refugio en el Biobío creado para desconectar la mente y despertar los sentidos.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center font-sans font-semibold"
          >
            <a href="#contacto" className="bg-[#E5E0D8] text-[#273E32] px-8 py-4 rounded-md hover:bg-white transition-colors duration-300">
              Planifica tu visita
            </a>
            <a href="#experiencias" className="bg-transparent border border-[#E5E0D8] text-[#E5E0D8] px-8 py-4 rounded-md hover:bg-white/10 transition-colors duration-300">
              Conoce el lugar
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOQUE DE VALOR */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { icon: TreePine, title: "Exploración Libre", desc: "Río y hermosos senderos bajo sombra nativa." },
            { icon: Coffee, title: "Cocina Campestre", desc: "Sabores rústicos que reconfortan el alma." },
            { icon: Leaf, title: "Descanso Real", desc: "Cómodas cabañas inmersas en la calma rural." },
            { icon: Users, title: "Familias y Grupos", desc: "Espacios creados para conectar y aprender." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            >
              <item.icon className="w-10 h-10 text-[#8E9B85] mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-serif font-semibold mb-2 text-[#273E32]">{item.title}</h3>
              <p className="text-gray-600 font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 bg-[#E5E0D8]/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
            <span className="text-[#8E9B85] font-semibold font-sans tracking-wider uppercase text-sm mb-4 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#273E32] mb-6 leading-tight">Más que un parque,<br/>nuestra casa en la naturaleza.</h2>
            <div className="font-sans text-lg text-gray-700 leading-relaxed mb-6 space-y-4">
              <p>
                Explotur Quilleco nació del amor por la tierra de Ramadilla. Al combinar nuestra vocación por educar y la pasión por el ecoturismo, dimos vida a un espacio donde el bosque es el mejor anfitrión. Aquí buscamos preservar la pureza del Valle El Olivillo para compartila contigo.
              </p>
              <p>
                No ofrecemos un servicio estándar; te invitamos a vivir una experiencia humana, auténtica y familiar donde cada árbol y cada rincón del río tienen una historia que contarte.
              </p>
            </div>
            <a href="#contacto" className="inline-flex items-center text-[#273E32] font-semibold font-sans border-b border-[#273E32] hover:text-[#8E9B85] hover:border-[#8E9B85] transition-all pb-1">
              Conoce a nuestros guías <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
          <motion.div 
            className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-xl bg-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
             <img 
                src="https://picsum.photos/id/11/800/1000" 
                alt="Familia e historia en la naturaleza" 
                className="absolute inset-0 w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERIENCIAS & ALOJAMIENTO */}
      <section id="experiencias" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#273E32] mb-6">Días que se convierten en recuerdos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Nuestro entorno híbrido te permite elegir tu forma de descansar: desde la aventura del trekking hasta la quietud de tus propias cabañas equipadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Alojamiento */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gray-200">
               <img src="https://picsum.photos/id/10/800/600" alt="Cabañas Explotur" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-[#273E32] mb-3">Tu refugio entre los árboles</h3>
            <p className="text-gray-600 mb-4 font-sans leading-relaxed">Cabañas equipadas y diseñadas para respetar el entorno. Despierta rodeado del verde silencioso del bosque y frena el ritmo de la ciudad.</p>
          </motion.div>

          {/* Card Naturaleza */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gray-200">
              <img src="https://picsum.photos/id/28/800/600" alt="Trekking Explotur" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-[#273E32] mb-3">Trekking y Exploración</h3>
            <p className="text-gray-600 mb-4 font-sans leading-relaxed">Recorre bajo la sombra de árboles inmensos. Encuentra la granja, bordea el río y descubre un ecosistema lleno de vida vibrante.</p>
          </motion.div>

          {/* Card Colegios/Grupos */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gray-200">
               <img src="https://picsum.photos/id/46/800/600" alt="Grupos escolares en naturaleza" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-[#273E32] mb-3">Programas Especiales</h3>
            <p className="text-gray-600 mb-4 font-sans leading-relaxed">Nuestra experiencia docente nos permite recibir y guiar a grupos, familias y colegios en jornadas profundamente enriquecedoras.</p>
          </motion.div>
        </div>
      </section>

      {/* 5. FAQ SECTION (Acordeón iterativo) */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#273E32] mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 font-sans">Todo lo que necesitas saber antes de tu llegada al Valle El Olivillo.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                 key={idx} 
                 className={`border rounded-lg overflow-hidden transition-colors ${faqOpen === idx ? "border-[#8E9B85]" : "border-[#E5E0D8]"}`}
              >
                <button 
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 bg-[#FAFAF9] hover:bg-[#F2F0ED] transition-colors text-left"
                >
                  <h4 className="text-lg font-serif text-[#273E32] font-semibold">{faq.q}</h4>
                  <div className="ml-4 flex-shrink-0 text-[#8E9B85]">
                     {faqOpen === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {faqOpen === idx && (
                    <motion.div 
                      key="content"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { height: 0, opacity: 0 },
                        visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
                      }}
                      className="bg-white"
                    >
                      <div className="p-6 pt-2">
                        <p className="text-gray-600 font-sans leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIO / CONTACTO */}
      <section id="contacto" className="py-24 bg-[#273E32] text-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">¿Listo para cambiar de aire?</h2>
        <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Escríbenos para consultar nuestra disponibilidad. Te atenderemos personalmente para garantizar que tu experiencia sea perfecta, sin reservas automatizadas frías.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto font-sans font-semibold">
          <a href="https://wa.me/56999977720" target="_blank" rel="noreferrer" className="bg-[#8E9B85] text-white px-8 py-4 rounded-md hover:bg-[#6e7a66] transition-colors flex items-center justify-center gap-3">
             <MessageCircle size={20} /> Hablar por WhatsApp
          </a>
          <a href="mailto:exploturquilleco@gmail.com" className="bg-transparent border border-white/50 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors">
            Enviar un Correo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A2821] text-gray-400 py-16 text-sm font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-white text-2xl font-serif mb-4">Explotur Quilleco</h4>
            <p className="max-w-xs leading-relaxed">Turismo de naturaleza, descanso y aprendizaje en un rincón único del Biobío. Un destino registrado en Sernatur.</p>
          </div>
          <div className="flex flex-col md:items-start items-center gap-3">
            <h4 className="text-white font-semibold mb-2 text-base">Ubicación</h4>
            <p className="flex items-center gap-2"><MapPin size={16} className="text-[#8E9B85]"/> Valle El Olivillo, Ramadilla</p>
            <p className="text-gray-400">Lote B3 El Laurel Nº521-51</p>
            <p className="text-gray-400">Quilleco, Región del Biobío</p>
          </div>
          <div className="flex flex-col md:items-start items-center gap-3">
            <h4 className="text-white font-semibold mb-2 text-base">Legal y Enlaces</h4>
            <a href="#" className="hover:text-white transition">Términos y Condiciones [TBD]</a>
            <a href="#" className="hover:text-white transition">Políticas de Reserva [TBD]</a>
            <div className="mt-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Explotur Quilleco SpA. Desarrollado con dedicación al entorno.</p>
          <p className="text-xs text-gray-500">Diseñado para la calma.</p>
        </div>
      </footer>
    </div>
  );
}




