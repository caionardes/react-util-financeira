import Header from "./components/Header";

function App() {

  const onClick = (e) => {
    alert('Aplicação de teste do Caio Nardes :)');
  }

  return (
    <div className="container">
      <Header onClick={onClick} title="React + Google Cloud"/>
      <br/><br/><br/><br/>
      <p>Por: Caio Nardes.</p>
    </div>
  );
}

export default App;
