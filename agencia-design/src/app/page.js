'use client'
import { useState } from "react";

import Image from "next/image";
import estilos from "./page.module.css";
import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";


export default function Home() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)
  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro)
  }


  return (
    <>
      <header>
        <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      </header>

  
      <main>
        <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
        <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>

      </main>

      <footer>
        <Rodape ehTemaEscuro={ehTemaEscuro}/>
        <p className={estilos.credito}>copyright 2025 @ <span>gabriel ferreira</span>
        </p>
      </footer>



    </>
  )
};
