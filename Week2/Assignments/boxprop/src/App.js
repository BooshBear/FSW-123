import Card from './Card';
import './App.css';

function App() {
  return (
    <>
      <Card 
      title = "Title 1"
      subTitle = "Sub Title 1"
      desc = "Hello World 1"
      bcolor = "red"
      width = "300px"
      />
      <Card 
      title = "Title 2"
      subTitle = "Sub Title 2"
      desc = "Hello World 2"
      bcolor = "blue"
      width = "300px"
      />
      <Card 
      title = "Title 3"
      subTitle = "Sub Title 3"
      desc = "Hello World 3"
      bcolor = "yellow"
      width = "300px"
      />
      <Card 
      title = "Title 4"
      subTitle = "Sub Title 4"
      desc = "Hello World 4"
      bcolor = "green"
      width = "300px"
      />
    </>
  );
}

export default App;
