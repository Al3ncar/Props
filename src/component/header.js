import React from "react"

const props = (props) => {
    return(
        <>
            <ul>
                <li>Olá, quem é você? eu sou{props.dados}</li>
                <li>quantos anos tem? eu tenho {props.dados1} anos</li>
                <li>Mora aonde? eu moro em{props.dados2}</li>
                <li>Gosta de codar? {props.dados3}</li>
                {props.children}
            </ul>
        </>
    )
}

export default props