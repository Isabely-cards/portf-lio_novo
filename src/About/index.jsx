import './style.css';

export default function About() {
    return(
        <section id='about' className='about'>
            <h1>Sobre <span>mim</span></h1>
            <div className='about_img'>
                <img src="/imagens/desenho.png" alt="" />
                <span class="circle-spin"></span>
            </div>
            <div className='about_container'>
                <h2>Desenvolvedora Front-end!</h2>
                <p>
                Desde pequena, sempre fui fascinada pelo mundo da tecnologia e pelo seu constante movimento de atualização. Na minha família, era eu quem todos procuravam quando precisavam resolver algum problema tecnológico ou até mesmo para criar uns banners. Mal sabia eu que ali, naqueles momentos, minha jornada já estava sendo delineada. Assim que completei 18 anos, corri para começar a faculdade no curso de Sistemas de Informação. E assim, minha aventura no mundo da tecnologia começou.
                Não tem sido nada fácil, mas também não é impossível! Estou me dedicando ao máximo, fazendo cursos complementares e projetos pessoas para adquirir bastante conhecimentos.
                </p>
            </div>
        </section>
    )
}