import Footer from "./components/common/app/Footer";
import Navigationbar from "./components/common/app/Navigationbar";

function App() {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <Navigationbar />

        <Footer />
      </div>
    </>
  );
}

export default App;
