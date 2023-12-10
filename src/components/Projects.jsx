import {useState} from "react";
import project1Photo1 from "../assets/images/project1-photo1.png";
import project1Photo2 from "../assets/images/project1-photo2.png";
import project2Photo1 from "../assets/images/project2-photo1.png";
import project2Photo2 from "../assets/images/project2-photo2.png";
import project3Photo1 from "../assets/images/project3-photo1.png";
import project3Photo2 from "../assets/images/project3-photo2.png";
import ProjectDetailsModal from "./ProjectDetailsModal";
import reactIcon from '@iconify/icons-logos/react';
import jsIcon from '@iconify/icons-logos/javascript';
import reduxIcon from '@iconify/icons-logos/redux';
import reduxSagaIcon from '@iconify/icons-logos/redux-saga';
import tsIcon from '@iconify/icons-logos/typescript-icon';
import tailwindCss from '@iconify/icons-logos/tailwindcss-icon';
import nextIcon from "@iconify-icons/devicon/nextjs";
import framerMotionIcon from "@iconify-icons/devicon/framermotion";

export const resumeProjects = [
    {
        "title": "Онлайн магазин",
        "description": "Обычный интернет-магазин. Можно авторизоваться через почту или через google аккаунт. Также есть 5 различных категорий. Вы можете добавлять одежду в корзину и оплачивать все товары.",
        "images": [
            project1Photo1,
            project1Photo2
        ],
        "url": "https://online-shop-react-ybolat.netlify.app",
        "technologies": [
            {
                "class": reactIcon,
                "name": "React"
            },
            {
                "class": jsIcon,
                "name": "JavaScript"
            },
            {
                "class": reduxIcon,
                "name": "Redux"
            },
            {
                "class": reduxSagaIcon,
                "name": "Redux Sage"
            }
        ]
    },
    {
        "title": "GitHub Api",
        "description": "В этом проекте вы можете искать аккаунты на github. Вы также увидите все открытые репозитории этого аккаунта и сможете добавить их в избранное. Также, щелкнув на них, вы сможете открыть этот git",
        "images": [
            project2Photo1,
            project2Photo2
        ],
        "url": "https://githubapi-ybolat.netlify.app",
        "technologies": [
            {
                "class": reactIcon,
                "name": "React"
            },
            {
                "class": tsIcon,
                "name": "TypeScript"
            },
            {
                "class": tailwindCss,
                "name": "Tailwind CSS"
            },
            {
                "class": reduxIcon,
                "name": "Redux ToolKit | RTK Query"
            }
        ]
    },
    {
        "title": "Anime list",
        "description": "Список самых популярных аниме. Тут вы сможете посмотреть рейтинг аниме, количество серии и тип аниме.",
        "images": [
            project3Photo1,
            project3Photo2
        ],
        "url": "https://next-anime-list-ybolat.vercel.app/",
        "technologies": [
            {
                "class": nextIcon,
                "name": "Next 14"
            },
            {
                "class": framerMotionIcon,
                "name": "Framer Motion"
            },
            {
                "class": tailwindCss,
                "name": "Tailwind CSS"
            }
        ]
    }
];

const Projects = () => {

    const [deps, setDeps] = useState({});
    const [detailsModalShow, setDetailsModalShow] = useState(false);

    const handleDetailsModalShow = (data) => {
        setDeps(data);
        setDetailsModalShow(true);
    };

    const handleDetailsModalClose = () => setDetailsModalShow(false);


    return  <section id="portfolio">
        <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
                <span>Проекты</span>
            </h1>
            <div className="col-md-12 mx-auto">
                <div className="row mx-auto">
                    {resumeProjects &&
                        resumeProjects.map((project) => (
                            <div
                                className="col-sm-12 col-md-6 col-lg-4"
                                key={project.title}
                                style={{ cursor: "pointer" }}>
                  <span className="portfolio-item d-block">
                    <div className="foto" onClick={() => handleDetailsModalShow(project)}>
                      <div>
                        <img
                            src={project.images[0]}
                            alt="projectImages"
                            height="230"
                            style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                        />
                        <br />
                        <p className="project-title-settings mt-3">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </span>
                            </div>
                        ))}
                </div>
            </div>
            <ProjectDetailsModal
                show={detailsModalShow}
                onHide={handleDetailsModalClose}
                data={deps}
            />
        </div>
    </section>
}

export default Projects;
