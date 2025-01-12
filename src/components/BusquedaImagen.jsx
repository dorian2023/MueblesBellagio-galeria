import { useState, useEffect } from "react";
import { MagicMotion, motion } from "react-magic-motion";
import { productosData } from "./../../data";

function Book({ title, imgSrc, onClick }) {
  return (
    <div
      className="flex items-center cursor-pointer w-24 flex-col gap-1 bg-black "
      onClick={onClick}
    >
      <h5
        className="text-sm"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.1em",
        }}
      >
        {/* {title} */}
      </h5>
      <img
        alt={`image of ${title}`}
        src={imgSrc}
        className="w-full h-full m-auto"
      />
    </div>
  );
}

const SearchImagenes = () => {
  const [searchText, setSearchText] = useState("");
  const [expandedImage, setExpandedImage] = useState(null);
  const [expandedTitle, setExpandedTitle] = useState("");
  const handleImageClick = (imgSrc) => {
    setExpandedImage(imgSrc);
    setExpandedTitle(title);
  };

  const handleClose = () => {
    setExpandedImage(null);
    setExpandedTitle("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (expandedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedImage, expandedTitle]);

  return (
    <motion.div
      style={{
        margin: "0",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <div className="flex justify-center w-full h-14">
        <input
          id="searchInput"
          placeholder="Nicole"
          type="text"
          maxLength={70}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="block w-2/5 absolute p-4 ps-4 text-sm text-gray-900 border border-red-900 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        />
      </div>
      <MagicMotion>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "0.65em" }}
          className="w-full justify-center"
        >
          {productosData
            .filter(({ title }) =>
              title
                .toLowerCase()
                .trim()
                .includes(searchText.toLowerCase().trim())
            )
            .map(({ id, title, imgSrc }) => (
              <Book
                key={id}
                title={title}
                imgSrc={imgSrc}
                onClick={() => handleImageClick(imgSrc, title)}
              />
            ))}
        </div>
      </MagicMotion>

      {expandedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <img
            className="rounded-md max-w-[900%] w-10/12 md:w-auto"
            src={expandedImage}
            alt="Expanded view"
            style={{
              maxWidth: "900%",
              maxHeight: "90%",
              border: "1px solid red",
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default SearchImagenes;
