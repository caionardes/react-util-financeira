import Header from "./components/Header";

function App() {

  const onClick = (e) => {
    alert(e);
  }

  return (
    <div className="container">
      <Header onClick={onClick} title="Utilidade Financeira!"/>
    </div>
  );
}

export default App;
