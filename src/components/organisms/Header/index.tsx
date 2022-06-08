import AppBar from "@mui/material/AppBar";
// import Blinklist from"./component/BlinkList";
// import search from"./component/search";
// import explore from"./component/explore";
// import mylibrary from"./component/mylibrary";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HeaderComponent = (props: any) => {
  return (
    <>
      {/* <Routes>
      <ul>
        <li>
          <Link to="/">Blinklist</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
        <li>
          <Link to="/explore">explore</Link>
        </li>
        <li>
          <Link to="/mylibrary">mylibrary</Link>
        </li>
      </ul>
        <Route exact path="/">
          BlinkList
        </Route>
        <Route exact path="/search">
          Search
        </Route>
        <Route exact path="/explore">
          Explore
        </Route>
        <Route exact path="/mylibrary">
          My Library
        </Route>
      </Routes> */}
      <AppBar
        position="fixed"
        sx={{ color: "black", backgroundColor: "white", boxShadow: "none" }}
        data-testid="box"
      >
        <img
          src={props.url}
          alt="Image not available"
          height="26px"
          width="124.09px"
        />
      </AppBar>
    </>
  );
};

export default HeaderComponent;
