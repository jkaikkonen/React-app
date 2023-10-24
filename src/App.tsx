import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert </Alert>
      )}
      <button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </button>
    </div>
  );
}
export default App;
