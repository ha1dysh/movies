import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/API';

export default function Review() {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId).then(setReview);
  }, [movieId]);

  return (
    <ul>
      {review &&
        review.map((e) => (
          <li key={e.id}>
            {e.author}
            <p>{e.content}</p>
          </li>
        ))}
    </ul>
  );
}
