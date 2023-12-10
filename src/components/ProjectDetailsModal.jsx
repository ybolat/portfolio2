import React from "react";
import {Modal} from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import {Icon} from "@iconify/react";
import closeIcon from '@iconify-icons/bi/x';
import linkIcon from '@iconify-icons/la/link';
import AwesomeSliderStyles from "../assets/light-slider.scss";
import AwesomeSliderStyles2 from "../assets/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
    const {data, onHide} = props;

    if (!data) {
        return null;
    }

    const {technologies, images, title, description, url} = data;

    return (
        <Modal {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               className="modal-inside">
            <span onClick={onHide} className="modal-close">
              <Icon icon={closeIcon} className={"fas fa-times fa-3x close-icon"} fontSize={"25px"}/>
            </span>
            <div className="col-md-12">
                <div className="col-md-10 mx-auto" style={{paddingBottom: "50px"}}>
                    <div className="slider-tab">
                        <Icon icon={'emojione:red-circle'} className="iconify slider-iconfiy ms-2"/>&nbsp; &nbsp;
                        <Icon icon={'twemoji:yellow-circle'} className="iconify slider-iconfiy"/>&nbsp; &nbsp;
                        <Icon icon={'twemoji:green-circle'} className="iconify slider-iconfiy"/>
                    </div>
                    <AwesomeSlider
                        cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                        animation="scaleOutAnimation"
                        className="slider-image">
                        {images && images.map((elem, i) => <div key={i} data-src={elem}/>)}
                    </AwesomeSlider>
                </div>
                <div className="col-md-10 mx-auto">
                    <h3 style={{padding: "5px 5px 0 5px"}}>
                        {title}
                        {url && (
                            <a href={url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="link-href">
                                <Icon icon={linkIcon} className="fas fa-external-link-alt ms-2"/>
                            </a>
                        )}
                    </h3>
                    <p className="modal-description">{description}</p>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">
                            {
                                technologies && technologies.map((icons, i) => (
                                    <li className="list-inline-item mx-3" key={i}>
                                        <span>
                                            <div className="text-center">
                                                <Icon icon={icons.class} style={{fontSize: "300%"}}/>
                                                <p className="text-center" style={{fontSize: "100%"}}>
                                                     {icons.name}
                                                </p>
                                            </div>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetailsModal;
