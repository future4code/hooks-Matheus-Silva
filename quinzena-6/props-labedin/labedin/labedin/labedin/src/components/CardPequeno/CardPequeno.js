import React from "react";
import './CardPequeno.css'

function CardPequeno(props) {

    return (
        <div className="smallcard-container">
            <div>
                <p><b>{props.tipo}</b>: {props.conteudo}</p>
            </div>
        </div>

    )
}

export default CardPequeno;