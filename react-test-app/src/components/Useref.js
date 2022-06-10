import React from "react";

export default function App() { 
    const count = React.useRef(0);
    const specialButton = React.useRef();
    const [inputValue, setInputValue] = React.useState("0");

    React.useEffect(() => {
        count.current = count.current + 1;
    })

    const colorButton = () => {
        specialButton.current.style.backgroundColor = "blue"
    }

  return (
    <>
        <textarea
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        
        <h3>Character Count: {count.current}</h3>
        
    <button onClick={colorButton} ref={specialButton}>Special Button</button>
      
    </>
  );
}

// export default function App() {
//     const countRef = React.useRef(0);
  
//     function handleAddOne() {
//       countRef.current += 1;
//     }
  
//     return (
//       <>
//         <h1>Count: {countRef.current}</h1>
  
//         {/* clicking this will not change display count */}
//         <button onClick={handleAddOne}>+ 1</button>
//       </>
//     );
//   }