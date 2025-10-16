import Image from "next/image";
import estilos from "./page.module.css";
import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";


export default function Home() {
  return (
   <>
    <header>
      <Topo/>
    </header>
    
    <section>
      <SecaoBanner/>
    </section>

    <main>
      <SecaoExperienciaTrabalho/>
      
    </main>

    <footer>
      <Rodape/>
    </footer>



   </>
  )
};
