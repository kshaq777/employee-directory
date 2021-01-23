import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";
import Main from "./main";

function App() {
  return (
    <div>
    <Navbar />
    <Wrapper>
      <Main />
    </Wrapper>
    <Footer />
  </div>
  );
}

export default App;
