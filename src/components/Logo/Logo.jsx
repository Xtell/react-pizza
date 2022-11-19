import "./Logo.pcss"
function Logo(props) {
  const { imageSrc, title, tagline } = props
  return (
    <div className="logo">
      <img className="logo__img" src={imageSrc} alt="" width="38" height="38" />
      <p className="logo__title">{title}</p>
      <p className="logo__tagline">{tagline}</p>
    </div>
  )
}

export default Logo