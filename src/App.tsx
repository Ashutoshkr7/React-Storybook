import "./App.css";
import { Box } from "@mui/material";
import Card from "./components/organisms/Card";
import BlinkList_Logo from "./assets/Image/Logo/Blinklist_Logo.png";
import Image from "./assets/Image/Book_Image/book.png";
import Header from "./components/organisms/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Box sx={{ position: "relative", height: "100vh" }} data-testid="main">
          <Header url={BlinkList_Logo} name="Blinkist" />
        </Box>
      </BrowserRouter> */}
      <Header url={BlinkList_Logo} name="Blinkist" />
      <Card
        imageURL={Image}
        bookName="Beyond Entrepreneurship"
        author="Jim Collins & Bill Lazier"
      />
    </>
  );
}

export default App;
