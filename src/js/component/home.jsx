// importamos react en todos los casos.
import React from "react";

// import NombreComponente(deFuncion) from "./nombreArchivo"
import Navbar from "./navbar.js";
import Card from "./card.js";
import Footer from "./footer.js";
import TextToTry from "./texttotry.js";
import ChangeColors from "./changecolors.js";

//create your first component - Los componentes empiezan con PascalCase.
const Home = () => {
  // Aqui van las funcionalidades del componente.
  return (
    <div className="text-center">
      <Navbar />
      {/* <Card /> */}
      <TextToTry />
      <ChangeColors />
      <Footer />
    </div>
  );
};

//exportamos el componente en todos los casos
export default Home;
