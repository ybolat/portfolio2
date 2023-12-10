import {Icon} from '@iconify/react';
import laptopCode from '@iconify-icons/la/laptop-code';
import {useEffect, useState} from "react";

const period = 200;
const wordLoopRu = ["Вэб Разработчик ", "Инженер ПО ", "Фронтенд Разработчик "];

const Header = () => {

    const [wordNumber, setWordNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingPeriod, setTypingPeriod] = useState(period);

    useEffect(() => {

        let typeWord = setInterval(() => {
            typingFunc();
        }, typingPeriod);

        return () => {
            clearInterval(typeWord)
        }
    }, [text]);

    const typingFunc = () => {
        let i = wordNumber % wordLoopRu.length;
        let fullText = wordLoopRu[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingPeriod(prevState => prevState / 1.2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingPeriod(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setWordNumber(wordNumber + 1);
            setTypingPeriod(period);
        }
    }

    return <header id="home" style={{height: window.innerHeight - 140, display: 'block'}}>
        <div className="row aligner" style={{height: '100%'}}>
            <div className="col-md-12">
                <div>
                    <Icon icon={laptopCode} className="header-icon"/>
                    <br/>
                    <h1 className="mb-0">
                        <span>Ерасыл Болат</span>
                    </h1>
                    <div className="title-container">
                        <div className="title-styles">
                            <span>{text}</span>
                        </div>
                    </div>
                    {/*<Switch*/}
                    {/*    checked={checked}*/}
                    {/*    onChange={onThemeSwitchChange}*/}
                    {/*    offColor="#baaa80"*/}
                    {/*    onColor="#353535"*/}
                    {/*    className="react-switch mx-auto"*/}
                    {/*    width={90}*/}
                    {/*    height={40}*/}
                    {/*    uncheckedIcon={*/}
                    {/*        <span*/}
                    {/*            className="iconify"*/}
                    {/*            data-icon="twemoji:owl"*/}
                    {/*            data-inline="false"*/}
                    {/*            style={{*/}
                    {/*                display: "block",*/}
                    {/*                height: "100%",*/}
                    {/*                fontSize: 25,*/}
                    {/*                textAlign: "end",*/}
                    {/*                marginLeft: "20px",*/}
                    {/*                color: "#353239",*/}
                    {/*            }}*/}
                    {/*        ></span>*/}
                    {/*    }*/}
                    {/*    checkedIcon={*/}
                    {/*        <span*/}
                    {/*            className="iconify"*/}
                    {/*            data-icon="noto-v1:sun-with-face"*/}
                    {/*            data-inline="false"*/}
                    {/*            style={{*/}
                    {/*                display: "block",*/}
                    {/*                height: "100%",*/}
                    {/*                fontSize: 25,*/}
                    {/*                textAlign: "end",*/}
                    {/*                marginLeft: "10px",*/}
                    {/*                color: "#353239",*/}
                    {/*            }}*/}
                    {/*        ></span>*/}
                    {/*    }*/}
                    {/*    id="icon-switch"*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    </header>
}

export default Header;
