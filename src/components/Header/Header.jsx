import "./Header.pcss"
import { CartBtn, Btn, Logo } from "../index.js";
import { defaultProps } from "./defaultProps.jsx";
import Icon from "../Icon/Icon.jsx";

function Header(props) {
  const { logoSrc, logoTitle, logoTagline, getClassName } = props

  return (
    <header className={getClassName()}>
      <div className="container">
        <div className={getClassName("inner")}>
          <div className={getClassName("left")}>
            <div className={getClassName("logo")}>
              <Logo imageSrc={logoSrc} title={logoTitle} tagline={logoTagline}/>
            </div>
          </div>
          <div className={getClassName("right")}>
            <div className={getClassName("cart-btn")}>
              <CartBtn totalPrice={520} totalCount={3}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = defaultProps

export default Header