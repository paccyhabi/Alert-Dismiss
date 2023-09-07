import Button from "./components/Button";
import Alert from "./components/alert";
import {useState}  from "react";
function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return(
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  )
}
export default App;