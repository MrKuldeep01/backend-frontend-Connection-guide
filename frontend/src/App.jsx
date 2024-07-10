// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  const API_URL = "/data?name=kumar&age=22";
  async function fetchData(){
    try {
        const res = await fetch(API_URL)
        const data = await res.json();
        data && setMessage(data)

    } catch (error) {
        console.log("error in fetching data : "+error);
    }
}
  useEffect(() => {
    try {
        
        fetchData()
    } catch (error) {
        console.log(error);
    }

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <pre>{message?.key}</pre>
      </header>
    </div>
  );
}

export default App;
