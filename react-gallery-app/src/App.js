import "./App.css";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import Nav from "./components/Nav";
import apiKey from "./config";

function App() {
  return (
    <>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </>
  );
}

export default App;
