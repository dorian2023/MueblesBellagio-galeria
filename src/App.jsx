import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import SearchImagenes from "./components/BusquedaImagen";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl leading-tight text-white text-center md:text-left md:text-4xl md:mb-5">
          {" "}
          MUEBLES <span className="font-bold text-red-950"> BELLAGIO..</span>
        </h1>
        <SearchImagenes />
      </div>
    </>
  );
}

export default App;
