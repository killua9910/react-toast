import "./App.css";
import { toast } from "./toast";

function App() {
  const showLeftToast = () => {
    toast("left success toast", {
      type: "success",
      hasIcon: true,
      position: "left"
    });
  };

  const showCenterToast = () => {
    toast("center success toast", {
      position: "center",
      type: "success",
      hasIcon: true,
      duration: 3000
    });
  };

  const showRightToast = () => {
    toast("right error toast", {
      type: "error",
      hasIcon: true,
      position: "right"
    });
  };

  return (
    <main>
      <h1>React Toast</h1>
      <div className="content">
        <button className="btn" onClick={showLeftToast}>
          Left Toast
        </button>
        <button className="btn" onClick={showCenterToast}>
          Center Toast
        </button>
        <button className="btn" onClick={showRightToast}>
          Right Toast
        </button>
      </div>
    </main>
  );
}

export default App;
