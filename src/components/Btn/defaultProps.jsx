import { getCN } from "../../js/utils/index.js";

const baseClass = "btn"

export const defaultProps = {
  baseClass,
  getClassName: getCN(baseClass),
  type: "submit",
  variant: "primary",
  icon: null,
  label: null,
  iconBefore: null,
  iconAfter: null,
  children: null,
  href: null,
  onClick: null,
  extraAttrs: {},
}