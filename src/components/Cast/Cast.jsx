import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/API';
import './Cast.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path === null ? (
              <div className="noImage">No image</div>
            ) : (
              <img
                src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`}
                alt="img"
              />
            )}
            <p>{name}</p>
            <p>character: {character}</p>
          </li>
        ))}
    </ul>
  );
}
