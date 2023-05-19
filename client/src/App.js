import Project from './portfoliocontainer/projects/Project';
import Touch from './portfoliocontainer/Contact me/Touch';
import Exp from './portfoliocontainer/experience/Exp';
import About from './portfoliocontainer/aboutme/About';
import Profile from './portfoliocontainer/home/Profile';
function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Exp />
      <Project />
      <Touch />
    </div>
  );
}

export default App;
