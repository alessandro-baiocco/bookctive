import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import libri from "./components/books/scifi.json";

function App() {
  return (
    <>
      <MyNav />
      <MyWelcome title="BENVENUTO!!!" subTitle="ehi tu che stai leggendo questa frase , ciao" />
      <BookList lista={libri} />

      <SingleBook title={libri[0].title} image={libri[0].img} />
      <MyFooter />
    </>
  );
}

export default App;
