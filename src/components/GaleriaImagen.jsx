import ImageGallery from "react-image-gallery";
const GaleriaImagen = ({ loading }) => {
  const imagen = [
    {
      original: "https://i.ibb.co/r0f0YQL/cruz-tunning.jpg",
      thumbnail: "https://i.ibb.co/r0f0YQL/cruz-tunning.jpg",
    },
    {
      original: "https://i.ibb.co/PhxPchV/elegance.jpg",
      thumbnail: "https://i.ibb.co/PhxPchV/elegance.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
      original: "https://i.ibb.co/yYs5CXH/diamante.jpg",
      thumbnail: "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
  ];

  return (
    <>
      <div className="w-4/5 md:w-full bg-white p-1">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ImageGallery
            items={imagen}
            showPlayButton={false}
            showThumbnails={true}
            showNav={false}
            showBullets={true}
            autoPlay={false}
            slideInterval={3000}
            slideDuration={1000}
            slideOnThumbnailOver={false}
            thumbnailPosition="top"
            swipingTransitionDuration={300}
            // thumbnailStyle={{"" }} // Aplica estilos en línea
          />
        )}
      </div>
    </>
  );
};

export default GaleriaImagen;
