import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Intro from './components/pages/Intro';
import Projects from './components/pages/Projects';

function App() {
    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <Intro />
                <Projects />
                <About />
                <Contact />
            </div>
        </>
    );
}

export default App;
