import Button from "./components/Button";

function App() {
  return (
    <div>
      <button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </button>
    </div>
  );
}
export default App;
