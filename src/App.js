import "./App.css";

function App() {
  const text = "Hello";
  const Mouse = () => {
    const mouse = document.getElementById("buttonEle");
    alert(mouse.dataset.desc);
  };
  return (
    <>
      <button
        id="buttonEle"
        style={{ color: "red" }}
        data-desc="custom"
        onMouseOver={Mouse}
      >
        {text}
      </button>
      <CustomFunction desc={"hii"}></CustomFunction>
    </>
  );
}

function CustomFunction(props) {
  return <h1>{props.desc}</h1>;
}

export default App;
