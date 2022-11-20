import PropTypes from "prop-types";
import { defaultProps } from "./defaultProps.jsx";

function Icon(props) {
  const { getClassName, name, size } = props

  function getSize() {
    switch (size) {
      case "l":
        return { width: 22, height: 22 }
      default:
        return { width: 18, height: 18 }
    }
  }

  const classMods = {
    size
  }

  return (
    <svg className={getClassName("", classMods)} aria-hidden="true" {...getSize()}>
      <use href={`#icon-${name}`}></use>
    </svg>
  )
}

Icon.defaultProps = defaultProps

Icon.propTypes = {
  getClassName: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([ "xs", "s", "m", "l", "xl", "xxl" ])
}

export default Icon

