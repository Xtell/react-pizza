import "./Btn.pcss"
import { defaultProps } from "./defaultProps.jsx";
import PropTypes from "prop-types"
import { Body } from "./components/index.js";

function Btn(props) {
  const { getClassName, color, type, iconBefore, iconAfter, label, children, href, onClick, extraAttrs } = props
  const Tag = type === "link" ? "a" : "button"


  const classMods = {
    "color": color,
  }

  const compProps = {
    className: getClassName("", classMods),
    type: type !== "a" ? type : null,
    href: type === "a" && href ? href : null,
    onClick,
    ...extraAttrs
  }

  return (
    <Tag {...compProps}>
      {children ? children : <Body iconBefore={iconBefore} iconAfter={iconAfter} label={label} getClassName={getClassName}/>}
    </Tag>
  )
}

Btn.defaultProps = defaultProps
Btn.propTypes = {
  baseClass: PropTypes.string,
  getClassName: PropTypes.func,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  type: PropTypes.oneOf([ "submit", "button", "reset", "link" ]),
  variant: PropTypes.oneOf([ "primary", "secondary", "outline" ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  iconPosition: PropTypes.oneOf([ "left", "right" ]),
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ]),
  extraAttrs: PropTypes.object
}

export default Btn