import { Logo } from "../index.js";
import { CartBtn } from "../index.js";
import { defaultProps } from "./defaultProps.jsx";

function Header(props) {
  const { logoSrc, logoTitle, logoTagline } = props

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__left">
          <div className="header__logo">
            <Logo imageSrc={logoSrc} title={logoTitle} tagline={logoTagline}/>
          </div>
        </div>
        <div className="header__right">
          <div className="header__cart-btn">
            <CartBtn/>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = defaultProps
export default Header