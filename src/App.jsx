import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <MyWelcome title="BENVENUTO!!!" subTitle="ehi tu che stai leggendo questa frase , ciao" />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
