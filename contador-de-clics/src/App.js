
import './App.css';
import Boton from './componentes/Boton';
import logoReact from './img/logo192.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
   const [numClics, setNumClics] = useState(0);

   const manejarClic = () => {
      setNumClics(numClics + 1);
   };

   const manejarReiniciar = () => {
      setNumClics(0);
   };

   return (
     <div className="App">
        <div className="react-logo-contenedor">
           <img
             className='react-logo'
             src={logoReact}
             alt='React logo'
           />
        </div>
         <div className="contenedor-principal">
            <Contador numClics={numClics} />

           <Boton
              texto='Clic'
              esBotonDeClic={true}
              manejarClic={manejarClic}/>
           <Boton
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={manejarReiniciar}/>
        </div>
      </div>
  );
}

export default App;
