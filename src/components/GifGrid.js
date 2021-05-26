import React /*useState, useEffect*/ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate_animated animate__rubberBand">{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem id={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
