import { getCN } from "../../js/utils";

const baseClass = "header"

export const defaultProps = {
  getClassName: getCN(baseClass),
  logoSrc: null,
  logoTitle: null,
  logoTagline: null,
}