import Image from "next/image";
import estilos from "./SecaoBanner.module.css"

export default function SecaoBanner() {
    return (
        <section>
            <div className={estilos.container_imagem}>
                <Image

                />

            </div>

            <div className={estilos.container_textual}>
                <p></p>

                <h2></h2>

                <span></span>

            </div>


        </section>
    )
};