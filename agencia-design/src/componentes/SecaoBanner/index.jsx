import estilos from "./SecaoBanner.module.css"

export default function SecaoBanner() {
    return (
        <section className={estilos.container_secao}>

            <div className={estilos.container_banner}>
               
            </div>

            <div className={estilos.container_textual}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>

                <h1>Agência de Branding</h1>

                <span>e design digital</span>
            </div>

        </section>
    )
};