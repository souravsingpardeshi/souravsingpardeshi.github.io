import './App.css';
import Sidebar from "./component/Sidebar";
import Container from "./component/Container";
import { Fade } from "react-awesome-reveal";
function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Fade>
    <Container/>

    </Fade>
    </div>
  );
}

export default App;
