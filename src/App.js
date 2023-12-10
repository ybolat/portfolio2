import "./App.scss";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Experience from "./components/Expirence";
import Footer from "./components/Footer";

const App = () => {

    return <div>
        <Header/>
        {/*<div className="col-md-12 mx-auto text-center language">*/}
        {/*    <div style={{display: "inline"}}>*/}
        {/*        <Icon icon={'twemoji-flag-for-flag-russia'} className="iconify language-icon me-5"/>*/}
        {/*    </div>*/}
        {/*    <div style={{display: "inline"}}>*/}
        {/*        <Icon icon={'twemoji-flag-for-flag-united-kingdom'} className={"iconify language-icon"}/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <About/>
        <Projects/>
        <Skill/>
        <Experience/>
        <Footer/>
    </div>
}

export default App;
