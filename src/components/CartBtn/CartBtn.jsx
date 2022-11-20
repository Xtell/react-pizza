import "./CartBtn.pcss"
function CartBtn(props) {

  return (
    <a href="#">
      <svg className="i-icon" width="16" height="16">
        <use href="#icon-cart"></use>
      </svg>
    </a>
  )
}

export default CartBtn