import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Review from "../Review/Review";
import Loader from "../Loader/Loader";

import api from "../../services/api";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const match = useRouteMatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const { movieId } = match.params;

    setLoading(true);

    try {
      const { results } = await api.fetchReviews(movieId);
      setReviews(results);
    } catch (error) {
      console.error("Smth wrong with fetch reviews on movie page", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={styles.item}>
                <Review author={author} content={content} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
