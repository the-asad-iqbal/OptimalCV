import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App text-4xl">
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  );
}

export default App;
