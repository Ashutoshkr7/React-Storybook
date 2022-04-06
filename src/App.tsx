import './App.css';
import Card from "./components/organisms/Card";
import Image from "./assets/Image/Book_Image/book.png"

function App() {
  return (
    <>
      <Card imageURL={Image} bookName="Beyond Entrepreneurship"  author="Jim Collins & Bill Lazier"/>
    </>
  );
}

export default App;
