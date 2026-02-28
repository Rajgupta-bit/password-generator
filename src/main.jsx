import React, { useState, useEffect ,useCallback} from "react";
import ReactDOM from "react-dom/client";

function App() {
  let [password, setpassword] = useState("");
  let [Length, setlength] = useState(10);
  let [number, setnumber] = useState(false);
  let [character, setcharacter] = useState(false);
  let [generate,setgenerate] = useState(false);

  const GeneratePass= useCallback(()=>{  //'CallBack':- use to increase the efficiency of memory by using the same memory allocated function component if there is no change in internal implementation of that component !!
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "1234567890";
    if (character) str += "#@$!&*%()*{}";
    let pass = "";
    for (let i = 0; i < Length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setpassword(pass);
  },[generate]);

  useEffect(() => {
    GeneratePass();
  }, [GeneratePass]);

  return (
    <>
    <h1>Password Generator</h1>
      <h2> {password} </h2>
      <div className="container">

        <div className="box1 box">
          <input type="range" min={5} max={50} onChange={(e) => setlength(e.target.value)}></input>
          <label>Length is: ({Length})</label>
        </div>

        <div className="box2 box">
          <input type="checkbox" name="number" defaultChecked={number} onChange={() => setnumber(!number)}></input>
          <label>Number</label>
        </div>

        <div className="box3 box">
          <input type="checkbox" name="character" defaultChecked={character} onChange={() => setcharacter(!character)}></input>
          <label>Character</label>
        </div>
        
       <div className="generate">
          <button className="btn" onClick={()=>setgenerate(!generate)}>Generate</button>
       </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
