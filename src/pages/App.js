import Header from "../components/Header";
import UIHero from "../components/UIHero";
import UIAbout from "../components/UIAbout";
import UIWork from "../components/UIWork";
import Footer from "../components/Footer";
import UIContact from "../components/UIContact";
import "../styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <UIHero />
      <UIAbout />
      <UIWork />
      <UIContact />
      <Footer />
    </div>
  );
}

export default App;
