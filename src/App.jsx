import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import data from './data';

function App() {
  console.log(data);
  const cardHolder = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Nav />
      {cardHolder}
    </div>
  );
}

export default App;
