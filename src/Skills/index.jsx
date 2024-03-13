import './style.css'

export default function Skills() {
    return(
        <section class="skills" id="skills">
            <div className='background'>
                <img src="/imagens/tecla.jpg" alt="" />
            </div>
            <h2 class="heading">Minhas <span>Habilidades</span></h2>

            <div class="skills-row">
                
                <div class="skills-column">
                    <h3 class="title">Habilidades de codificação</h3>

                    <div class="skills-box">

                        <div class="skills-content">

                            <div class="progress">

                                <h3>HTML <span>90%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                            <div class="progress">

                                <h3>CSS <span>80%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                            <div class="progress">

                                <h3>JavaScript <span>70%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                            <div class="progress">

                                <h3>TypeScript <span>60%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>
                            <div class="progress">

                                <h3>REACT <span>70%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                            <div class="progress">

                                <h3>NODE.JS <span>60%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>
                        </div>

                    </div>
                </div>

                <div class="skills-column">
                    <h3 class="title">Competências profissionais</h3>

                    <div class="skills-box">

                        <div class="skills-content">

                            <div class="progress">

                                <h3>Designer gráfico <span>60%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                            <div class="progress">

                                <h3>designer web <span>80%</span> </h3>

                                <div class="bar"><span></span></div> 

                            </div>

                        </div>

                    </div>

                
                </div>

            </div>

        </section>
    )
}