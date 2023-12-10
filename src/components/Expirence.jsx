import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import {Icon} from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import {Badge} from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";

const experience = [
    {
        "company": "Astana IT University",
        "title": "Full-stack разработчик",
        "years": "Июнь 2021 — Июнь 2022",
        "mainTech": [
            "React",
            "Java"
        ],
        "technologies": [
            "REST API",
            "TypeScript",
            "Redux Toolkit",
            "Spring",
            "PostgreSQL",
            "Docker"
        ]
    },
    {
        "company": "Business & Technology Services",
        "title": "Full-stack разработчик",
        "years": "Июнь 2022 — по настоящее время",
        "mainTech": [
            "React",
            "Java"
        ],
        "technologies": [
            "Redux",
            "Redux-Saga",
            "TypeScript",
            "Tailwindcss",
            "Ant design",
            "Spring",
            "PostgreSQL",
            "Oracle",
            "Docker"
        ]
    }
];

const Experience = () => {

    return <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
            <div className="col-md-12">
                <h1 className="section-title" style={{color: "black"}}>
                  <span className="text-black" style={{textAlign: "center"}}>
                    Опыт
                  </span>
                </h1>
            </div>
        </div>
        <div className="col-md-8 mx-auto">
            <VerticalTimeline>
                {experience.map(v => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={v.years}
                        iconStyle={{
                            background: "#ffff",
                            textAlign: "center",
                        }}
                        icon={<Icon icon={reactIcon} className="experience-icon"/>}
                        key={v.title}>
                        <div style={{textAlign: "left", marginBottom: "4px"}}>
                            {v.mainTech.map((tech, index) => (
                                <Badge pill className="main-badge mr-2 mb-2" key={index}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                        <h3
                            className="vertical-timeline-element-title"
                            style={{textAlign: "left"}}>
                            {v.title}
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            style={{textAlign: "left"}}>
                            {v.company}
                        </h4>
                        <div style={{textAlign: "left", marginTop: "15px"}}>
                            {v.technologies.map((tech, index) => (
                                <Badge pill className="experience-badge mr-2 mb-2" key={index}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{
                        background: "#ffff",
                        textAlign: "center",
                    }}
                    icon={
                        <Icon icon="eos-icons:hourglass" className="experience-icon"/>
                    }
                />
            </VerticalTimeline>
        </div>
    </section>
}

export default Experience;
