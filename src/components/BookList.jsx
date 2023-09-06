import { Component } from "react";

class BookList extends Component {
  filtra = (e) => {
    e.preventDefault();
    const ul = document.querySelector("ul");
    const oggettiLista = document.querySelectorAll(".lista li");
    const ricerca = document.querySelector("input").value;
    console.log(ricerca);
    const listaFiltrata = oggettiLista.forEach((oggeto) => {
      console.log(oggeto.innerText);
      if (ricerca.includes(oggeto.innerText)) {
        oggeto.classList.remove("d-none");
      } else {
        oggeto.classList.add("d-none");
      }
    });
    ul.append(listaFiltrata);
  };
  render() {
    return (
      <>
        <input type="text" />
        <button onClick={(Event) => this.filtra(Event)}>cerca</button>
        <ul className="lista">
          {this.props.lista.map((book, index) => (
            <li key={`book-${index}`}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default BookList;
