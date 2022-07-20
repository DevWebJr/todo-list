import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
        <div className="container-fluid justify-content-center">
            <h1 className="text-center mt-5">TO-DO LIST</h1>
            <Form />
        </div>
    </div>
  );
}

export default App;
