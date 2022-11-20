import "./CartBtn.pcss"
import PropTypes from "prop-types";
import { Btn } from "../index.js";
import { defaultProps } from "./defaultProps.jsx";
import Icon from "../Icon/Icon.jsx";

function CartBtn(props) {
  const { totalPrice, totalCount, getClassName } = props
  return (
    <div className={getClassName()}>
      <Btn type="link">
        <span className={getClassName("body")}>
          <span className={getClassName("total-price")}>{totalPrice}</span>
          <span className={getClassName("total-count")}>
            <span className={getClassName("cart-icon")}>
              <Icon name={"cart"}/>
            </span>
            {totalCount}
          </span>
        </span>
      </Btn>
    </div>
  )
}

CartBtn.defaultProps = defaultProps
CartBtn.propTypes = {
  baseClass: PropTypes.string,
  getClassName: PropTypes.func,
  totalPrice: PropTypes.number,
  totalCount: PropTypes.number
}
export default CartBtn