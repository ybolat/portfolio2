import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const networks = [
    {
        "name": "github",
        "url": "https://github.com/ybolat",
        "class": faGithub
    },
    {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/ерасыл-болат-a75338241/",
        "class": faLinkedinIn
    }
];

const Footer = () => {

    return <footer>
        <div className="col-md-12">
            <div className="social-links">
                {networks.map(v => (
                    <span key={v.name} className="m-4">
                        <a href={v.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={v.class}/>
                        </a>
                  </span>
                ))}
            </div>
            <div className="copyright py-4 text-center">
                <div className="container">
                    {/*<small>*/}
                    {/*    Copyright &copy;{" "}*/}
                    {/*    {this.props.sharedBasicInfo*/}
                    {/*        ? this.props.sharedBasicInfo.name*/}
                    {/*        : "???"}*/}
                    {/*</small>*/}
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
