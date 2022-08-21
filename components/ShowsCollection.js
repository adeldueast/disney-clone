import React from "react";
import MovieThumbnail from "./MovieThumbnail";
function ShowsCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1920px] mx-auto">
      <h2 className="font-semibold "> {title} </h2>
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide overflow-y-hidden p-2 -m-2">
        {results.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default ShowsCollection;
