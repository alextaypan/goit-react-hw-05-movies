import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Reviews.module.css";
import { Loader } from "../../components/Loader/Loader";
import * as apiService from "../../services/moviesApi";
// import ErrorView from "../../Components/ErrorView/ErrorView";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .fetchMovieReviews(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          toast.info("There are no reviews for this movie ");
          setStatus(Status.IDLE);
          return;
        }
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError("Something went wrong. Try again.");
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {/* {status === Status.REJECTED && <ErrorView message={error} />} */}
      {status === Status.RESOLVED && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={s.review}>
              <h2 className={s.reviewAuthor}>Author: {review.author}</h2>
              <p className={s.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
