import React from 'react';

export default function DetailsInfo({ movie }) {
  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <div className="details">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
          alt="img"
          width="250"
        ></img>
      </div>

      <div>
        <h1>{original_title}</h1>
        <div>
          {`user score:
              ${vote_average.toFixed(1).split('.').join('')}%`}
        </div>
        <h3>Overview</h3>
        <div>{overview}</div>
        <h3>Genres</h3>
        <div>
          {genres.map((e) => (
            <span key={e.id}>{`${e.name} `}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
