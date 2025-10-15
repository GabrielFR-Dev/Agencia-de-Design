import estilos from "./SecaoExperienciaTrabalho.module.css";
import Card from "@componentes/Card";

export default function SecaoExperienciaTrabalho (props) {
    return (
        <section>
            <div>
                <h2></h2>
                <p></p>
            </div>

            <div>
                <Card 
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer."
                    empresa="Pied Piper StartUp"
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                
                />
                <Card
                    data="Fevereiro 2019 - 2021"
                    titulo="Digital consulting"
                    empresa="Arasaka inc."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                
                />
            </div>
        </section>
    )
};