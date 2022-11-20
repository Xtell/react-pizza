import { withNaming } from "@bem-react/classname"

function getCN(baseClass) {
  const cn = withNaming({ e: "__", m: "--", v: "-" })
  return (elem, mod) => cn(baseClass, elem)(mod)
}

export default getCN