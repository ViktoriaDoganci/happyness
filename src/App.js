import { useState } from 'react';
import {data} from './data';
import './App.css';

function App() {
  const[doing,SetDoing] = useState(data);
  const[showText,setShowText]=useState(false);
  const removeTask = (id) => {
    let newTasks= doing.filter((doin) => doin.id !== id);
    SetDoing(newTasks)
  }
  const showTextClick = (item) => {
    item.showMore=!item.showMore
    setShowText(!showText)
  }
  return(
    <div>
    <div className='container'>
      <h1>{doing.length} - things left to do for my happiness today</h1>
    </div>
    {doing.map((doin => {
      const{ id, task, text, image,showMore} = doin;
      return(
        <div key={id}>
        <div className='container'>
          <h2>{id}.{task}</h2>
           </div>
           <div className='container'>
          <img src={image} width="500px"/>
           </div>

           <div className='container'>
          <p>{showMore?text : text.substring(0,96)+"..."}
          <button onClick={() => showTextClick(doin)}>{showMore ? "Show less":"Show more"}</button></p>
           </div>
           <div className='container'>
          <button className="btn" onClick={() => removeTask(id)}>Done</button>
           </div>
           </div>
           
      )
    }))}
    </div>
  )
}

export default App;
