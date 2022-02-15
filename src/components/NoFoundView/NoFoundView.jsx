import PropTypes from "prop-types";

import s from "./NoFoundView.module.css";

export default function NoFoundView({ message }) {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>{message}</p>
    </div>
  );
}

NoFoundView.propTypes = {
  message: PropTypes.string.isRequired,
};
