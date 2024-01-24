import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  // jei response asbe kichu search krle take dhorar jnno arekta state bnabo.
  const [results, setResults] = useState([]);

  // GPGUq9-AUWgJOgTGai3_17x3XJCtpuzKzX4uOS9wo4g

  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=GPGUq9-AUWgJOgTGai3_17x3XJCtpuzKzX4uOS9wo4g&query=${value}&per_page=20&orientation=squarish`).then(res=> res.json()).then(data=> {
      console.log(data);
     setResults(data.results);
    });
  }

 

  return (
    <div className="main_container">
      <div className='container'>
        <span>Search </span>
        <input type='text' placeholder='search here...' value={value} onChange={(e)=>setValue(e.target.value)} className='input_control' />
        <button onClick={fetchImage}>Send</button>
      </div>

      <div className='gallery'>
        {
          results.map((item)=>{
            return <img key={item.id} src={item.urls.regular} />
             
          })
        }
      </div>
    </div>
  );
}

export default App;
