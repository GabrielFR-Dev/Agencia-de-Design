import estilos from "./SecaoExperienciaTrabalho.module.css";
import Card from "../Card";

export default function SecaoExperienciaTrabalho (props) {
    return (
        <section className={estilos.secao_experiencia}>
            <div className={estilos.container_textual}>
                <h2 className={estilos.titulo}>Experiências De Trabalho</h2>
                <p>
                    Há mais de 10 anos no mercado de Branding, Design Gráfico, criação de sites e
                    marketing Digital, nos empanhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className={estilos.container_card}>
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