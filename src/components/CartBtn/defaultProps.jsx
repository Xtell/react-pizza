import { getCN } from "../../js/utils/index.js";

const baseClass = "cart-btn"

export const defaultProps = {
  baseClass,
  getClassName: getCN(baseClass),
  totalPrice: 0,
  totalCount: 0
}