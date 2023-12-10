import {Icon} from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import graphQLIcon from "@iconify/icons-logos/graphql";
import tsIcon from "@iconify/icons-logos/typescript-icon";
import jsIcon from "@iconify/icons-logos/javascript";
import tailwindCss from "@iconify/icons-logos/tailwindcss-icon";
import sassIcon from "@iconify/icons-logos/sass";
import antDesignIcon from "@iconify-icons/devicon/antdesign";
import javaIcon from "@iconify/icons-logos/java";
import springIcon from "@iconify-icons/devicon/spring";
import postgresqlIcon from "@iconify-icons/devicon/postgresql";

const skills = [
    {
        "name": "React/React Native",
        "class": reactIcon
    },
    {
        "name": "Redux",
        "class": reduxIcon
    },
    {
        "name": "GraphQL",
        "class": graphQLIcon
    },
    {
        "name": "TypeScript",
        "class": tsIcon
    },
    {
        "name": "JavaScript",
        "class": jsIcon
    },
    {
        "name": "Sass",
        "class": sassIcon
    },
    {
        "name": "TailwindCss",
        "class": tailwindCss
    },
    {
        "name": "Ant Design",
        "class": antDesignIcon
    },
    {
        "name": "Java",
        "class": javaIcon
    },
    {
        "name": "Spring",
        "class": springIcon
    },
    {
        "name": "PostgreSQL",
        "class": postgresqlIcon
    }
];

const Skill = () => {

    return <section id="skills">
        <div className="col-md-12">
            <div className="col-md-12">
                <h1 className="section-title">
                    <span className="text-white">Навыки</span>
                </h1>
            </div>
            <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto skill-icon">
                    {skills.map(v => (
                        <li className="list-inline-item mx-3" key={v.name}>
                            <span>
                              <div className="text-center skills-tile">
                                  <Icon icon={v.class} style={{fontSize: "300%"}}/>
                                  <p className="text-center"
                                     style={{fontSize: "50%", marginTop: "4px"}}>
                                    {v.name}
                                  </p>
                              </div>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}

export default Skill;
