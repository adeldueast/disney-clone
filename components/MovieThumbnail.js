import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function MovieThumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="movie-thumbnail"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

export default MovieThumbnail;
