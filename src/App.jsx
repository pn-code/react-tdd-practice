import "./App.css";

function App() {
  const a = 2;
  const b = 4;

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        <li>Orange</li>
        <li>Strawberry</li>
        <li>Kiwi</li>
      </ul>
      <h2 data-testid="mytestid">Third DOM Test</h2>
      <span title="sum">{a+b}</span>
    </div>
  );
}

export default App;
