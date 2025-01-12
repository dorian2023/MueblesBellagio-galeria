import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import SearchImagenes from "./components/BusquedaImagen";
import Logo from "../public/logo.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <div className="flex w-auto justify-around items-center">
          <img
            src={Logo}
            alt="logo"
            className="relative w-3/12 sm:w-3/12 md:w-1/6 h-1/6"
          />
          <a
            href="https://bellagioprueba.odoo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black py-2 px-4 rounded w-auto h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gold hover:text-black hover:shadow-md hover:shadow-gold"
          >
            Ir a Catalogo
          </a>
        </div>

        <SearchImagenes />
      </div>
    </>
  );
}

export default App;
