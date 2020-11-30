import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className="home__section">
        <div className="text-title">
          <h1> EXAM <br /> FOR<span> YOU</span> </h1>
          <h4> We disrupted the Gaming industry in a permanent way creating a unique ecosystem bridging the best of two worlds: Gaming & Decentralized Finance. </h4>
        </div>
        <div className="img-title">
          <img src="imges/istyle.png" alt="" />
        </div>
        <div className="btn-title">
          <Link className="button type1" to="/login">LETS START NOW</Link>
        </div>
      </section >
    </div >
  );
}

export default App;
