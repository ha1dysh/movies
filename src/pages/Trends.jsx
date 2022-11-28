import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPopular } from '../services/API';

export default function Trends() {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopular().then(setTrends);
  }, []);

  return (
    <div>
      <h1>Trends</h1>
      <ul>
        {trends.map(({ id, original_title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`movies/${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
