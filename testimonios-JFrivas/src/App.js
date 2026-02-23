
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
     <div className="App">
        <div className="contenedor-principal">
           <h1>Esto es lo que dicen nuestros clientes sobre JFrivas:</h1>
           <Testimonio
              nombre="Shawn Wang"
               pais="Singapur"
               imagen="shawn"
               cargo="Ingeniero civil"
               empresa="Amazon"
              testimonio=" Tener presencia en línea me generaba muchas dudas, pero JFrivas diseñó una página web que superó mis expectativas. Su trabajo no solo capturó la esencia de mi marca, sino que me dio la plataforma profesional que necesitaba para escalar mi negocio. En poco tiempo, mi visibilidad aumentó drásticamente. Trabajar con JFrivas fue la mejor decisión para mi proyecto."/>
           
         
           <Testimonio
              nombre="Sarah Chima"
               pais="Nigeria"
               imagen="sarah"
               cargo="Jefa de proyecto"
               empresa="ChatDesk"
              testimonio="Antes de trabajar con JFrivas, nunca imaginé lo fácil que sería crear una presencia en línea profesional. Su equipo entendió mis necesidades y creó un sitio web que no solo es visualmente atractivo, sino también funcional y fácil de navegar. Gracias a JFrivas, ahora tengo la confianza para expandir mi negocio a nivel internacional." 
           />


           <Testimonio
              nombre="Emma Bostian"
             pais="Suecia"
             imagen="emma"
             cargo="Desarrolladora de software"
             empresa="Spotify"
              testimonio="Trabajar con JFrivas ha sido una experiencia increíble. Desde el primer contacto, su equipo mostró un compromiso genuino con mi proyecto. Crearon un sitio web que no solo es estéticamente agradable, sino también altamente funcional. Gracias a JFrivas, he podido atraer a más clientes y llevar mi negocio al siguiente nivel. Estoy muy contento de haberlos contratado."   
           />
        </div>
    </div>
  );
}

export default App;
