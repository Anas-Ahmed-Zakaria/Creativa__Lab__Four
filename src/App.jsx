import ComponentA from "./Components/ComponentA/ComponentA";
import ComponentB from "./Components/ComponentA/ComponentB/ComponentB";
import ComponentC from "./Components/ComponentA/ComponentB/ComponentC/ComponentC";
import ComponentE from "./Components/ComponentA/ComponentB/ComponentC/ComponentD/ComponentE/ComponentE";
import ComponentD from "./Components/ComponentA/ComponentB/ComponentC/ComponentD/ComponentD";
import { UseProvider } from "./Context/Context";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import LoginOrRegisterComponent from "./Components/LoginOrRegisterComponent/LoginOrRegisterComponent";

function App() {
  return (
    <>
    <div className="App">
      <UseProvider value ="Creativa">
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        <ComponentD/>     
        <ComponentE/>
      </UseProvider> 
      <LoginOrRegisterComponent/>
    </div>
    </>
  );
}

export default App;
