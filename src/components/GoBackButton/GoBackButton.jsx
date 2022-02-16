import PropTypes from "prop-types";

import s from "./GoBackButton.module.scss";

const GoBackButton = ({ onBack }) => (
  <button type="button" className={s.button} onClick={onBack}>
    Go back
  </button>
);

GoBackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default GoBackButton;
