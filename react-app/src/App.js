import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextForm2 from "./components/TextForm2";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container my-3">
        <h3>Enter your text to Analyze</h3>
        <TextForm />
        
        
      </div>
    </>
  );
}

export default App;
