import estilos from "./SecaoBanner.module.css"

export default function SecaoBanner(props) {
    return (
        <section className={estilos.container_secao}>
            <div
                className={props.ehTemaEscuro
                    ? estilos.imagemDeFundo_modo_escuro
                    : estilos.imagemDeFundo_modo_escuro
                }
            
            ></div>
            <div className={estilos.container_textual}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>

                <h1>Agência de Branding</h1>

                <span>e design digital</span>
            </div>

        </section>
    )
};