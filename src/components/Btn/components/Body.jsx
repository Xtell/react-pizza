function Body(props) {
  const { iconBefore, iconAfter, label, getClassName } = props

  return (
    <span className={getClassName("body")}>
      {iconBefore && <span className={getClassName("icon")}>{iconBefore}</span>}
      {label && <span className={getClassName("label")}>{label}</span>}
      {iconAfter && <span className={getClassName("icon")}>{iconAfter}</span>}
    </span>
  )
}

export default Body