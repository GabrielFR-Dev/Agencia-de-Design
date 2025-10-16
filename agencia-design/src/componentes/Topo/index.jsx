'use client'
import Image from "next/image";
import Logo from "/public/logo.png"
import estilos from "./Topo.module.css";
import iconeLua from "/public/moon.png";
import iconeSol from "/public/sun.png";


export default function Topo (props) {
    return (
        <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
            <Image
                src={Logo}
                alt="logo marca"
            /> 

            <button onClick={props.acao_onclick} className={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
                <Image className={estilos.icones} src={props.ehTemaEscuro ? iconeSol : iconeLua} alt="Icone" title="Modo Escuro"/>
            </button>

        </header>
    )
};