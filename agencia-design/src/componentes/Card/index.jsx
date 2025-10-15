import estilos from "./Card.module.css";


export default function Card (props) {
    return (
        <div className={estilos.container_card}>
            
            <div className={estilos.card}>
                <span>{props.data}</span>
                
                <h3>{props.titulo}</h3>

                <small>{props.empresa}</small>

                <p>{props.paragrafo}</p>
            </div>
        
        </div>
    )
};