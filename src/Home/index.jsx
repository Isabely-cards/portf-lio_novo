import "./style.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="background">
        <img
          src="/imagens/programando.jpg"
          alt="imagem de um notbook com código"
        />
      </div>
      <div className="home-content">
        <h1>
          Oi, eu sou a <span> Isabely Cardoso</span>
          <span className="animate"></span>{" "}
        </h1>
        <div className="text-animate">
          <h3>Desenvolvedora Front-end</h3>
          <span className="animate"></span>
        </div>
        <p>
          E aí, pessoal! Me chamo Isabely! Atualmente tô na correria, estudando
          Sistemas de Informação lá no Centro Universitário ENIAC. É uma viagem
          louca, cheia de altos e baixos, mas tô curtindo cada minuto disso.
          Sempre fui curiosa e adoro aprender coisas novas, especialmente quando
          se trata de tecnologia. Tô sempre de olho em oportunidades pra
          melhorar minhas habilidades, seja fazendo uns projetinhos por conta
          própria, pegando uns cursos online ou interagindo com a galera da
          área. Pra mim, é importante ficar por dentro das novidades e seguir
          aprendendo, porque o mundo da tecnologia tá sempre mudando, né? Então
          é isso aí, tamo junto nessa jornada de conhecimento!
          <span className="animate"></span>
        </p>

        <div className="btn-box">
          <a
            href="https://api.whatsapp.com/send/?phone=5511986686027&text&type=phone_number&app_absent=0"
            className="btn"
          >
            Vamos conversar?
          </a>
          <span className="animate"></span>
        </div>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/isabely-cardoso-926834225/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/isabely-cards">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
