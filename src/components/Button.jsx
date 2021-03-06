import React from 'react'
import classnames from "classnames";
function Button(props) {

    return (
        <button className={classnames('button', {'button--outline': props.outline})}>{props.children}</button>
    )

}

export default Button;