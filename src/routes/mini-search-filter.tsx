import { createFileRoute } from "@tanstack/react-router";

import Movies, { type MovieType } from "../data/Film";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/mini-search-filter")({
  component: Index,
});

function Index() {
  const [filtered, setFiltered] = useState("");
  const [genre, setGenre] = useState("");
  console.log(Movies);

  const filteredMovies = useMemo(() => {
    return Movies.filter((movie: MovieType) => movie.Title.includes(filtered) && (genre === "" || movie.Genre.includes(genre)));
  }, [filtered, genre]);

  const genres = useMemo(() => {
    return Movies.map((movie: MovieType) => movie.Genre).filter((genre, index, arr) => arr.indexOf(genre) === index);
  }, [Movies]);

  return (
    <div className="p-2 mt-4">
      <h1 className="text-3xl text-center">Welcome mini-search-filter</h1>

      <div className="flex flex-col items-center gap-4">
        <div className="mt-4">
          <h2 className="text-2xl">Search Filters</h2>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="border w-100"
            onChange={(e) => setFiltered(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="genre">Genre</label>
            <select id="genre" className="border w-100" onChange={(e) => setGenre(e.target.value)}>
              <option value="">All</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.imdbID} className="border p-2">
              <img
                src={movie.Poster}
                alt={movie.Title}
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold">{movie.Title}</h3>
              <p className="text-sm">{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
