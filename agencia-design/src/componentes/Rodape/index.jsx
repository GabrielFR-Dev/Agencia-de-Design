import Image from "next/image";
import Logo from "/public/logo.png";
import Facebook from "/public/facebook.png";
import Twitter from "/public/twitter.png";
import Linkedin from "/public/linkedin.png";
import Dribble from "/public/dribble.png";
import Behance from "/public/behance.png";
import Google from "/public/google.png";
import estilos from "./Rodape.module.css";

export default function Rodape(props) {
    return (
        <footer className={props.ehTemaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
                <div className={estilos.container_rodape}>
                    <Image
                        src={Logo}
                        alt="Logo"
                        title="Logo"
                    />
                    <p>
                        Ajudamos a criar uma personalidade digital construidno sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas
                    </p>
                </div>
                <div className={estilos.container_imagens}>
                    <Image src={Facebook} alt="Facebook" title="Facebook"/>
                    <Image src={Twitter} alt="Twitter" title="Twitter"/>
                    <Image src={Linkedin} alt="Linkedin" title="Linkedin"/>

                    <Image src={Dribble} alt="Dribble" title="Dribble"/>
                    <Image src={Behance} alt="Behance" title="Behance"/>
                    <Image src={Google} alt="Google" title="Google"/>
                </div>

            <div className={estilos.creditos}>
              
            </div>
        </footer>
    )
}