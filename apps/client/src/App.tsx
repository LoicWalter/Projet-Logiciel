import { useEffect, useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.text())
      .then(setGreetings);
  }, []);

  return <h1 className="text-3xl">{greetings}</h1>;
}

export default App;
