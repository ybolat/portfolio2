import {Icon} from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import myPhoto from "../assets/images/myPhoto.jpg";

const About = () => {

    return <section id="about">
        <div className="col-md-12">
            <h1 style={{color: "black"}}>
                <span>Обо мне</span>
            </h1>
            <div className="row center mx-auto mb-5">
                <div className="col-md-4 mb-5 center">
                    <div className="polaroid">
              <span style={{cursor: "auto"}}>
                <img height="250px" width="180px" src={myPhoto} alt="Avatar placeholder"/>
                <Icon icon={reactIcon} style={{fontSize: "400%", margin: "9% 5% 0 5%"}}/>
                <Icon icon={javaIcon} style={{fontSize: "400%", margin: "9% 5% 0 5%"}}/>
              </span>
                    </div>
                </div>
                <div className="col-md-8 center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <Icon icon={'emojione:red-circle'} className="iconify"/>&nbsp; &nbsp;
                                <Icon icon={'twemoji:yellow-circle'} className="iconify"/>&nbsp; &nbsp;
                                <Icon icon={'twemoji:green-circle'} className="iconify"/>
                            </div>
                            <div className="card-body font-trebuchet text-justify ml-3 mr-3"
                                 style={{height: "auto", fontSize: "132%", lineHeight: "200%"}}>
                                <br/>
                                <span className="wave">Привет :) </span>
                                <br/>
                                <br/>
                                Немного о себе:
                                <br/>
                                • Хочу развить свои технические навыки и попутно учиться управлять командой. Читаю и
                                слежу за обновлениями React. Изучаю новые для себя темы. И смотрю на ютубе разные
                                обсуждение
                                <br/>
                                • На новом месте работы хочу участвовать в создании проекта с самого нуля. Выполнять не
                                стандартные и сложные задачи. Так же работать со сложной архитектурой
                                <br/>
                                • Во мне бурлит голод к знаниям. Я готов поглощать информацию в больших количествах и
                                стремлюсь к постоянному развитию
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default About;
