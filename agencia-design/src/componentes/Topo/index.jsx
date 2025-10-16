'use client'
import Image from "next/image";
import Logo from "/public/logo.png"
import estilos from "./Topo.module.css";


export default function Topo () {
    return (
        <header className={estilos.container_topo}>
            <Image
                src={Logo}
            /> 

            <button>Click</button>

        </header>
    )
};