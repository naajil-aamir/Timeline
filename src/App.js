
import './App.css';
import {useState, useEffect} from 'react'
import Timeline from './components/Timeline'

function App() {
  const [items,setItems] = useState([]);
  
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await getData()
      setItems(tasksFromServer)
    }
    getTasks();
  },[])
  
  const getData= async ()=>{
    const res = await fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    const data = await res.json()
    return data
  }


  //if(!items.length) return (<span>loading...</span>);
  return (
    <div className="App">
      <h1>Timeline</h1>
      {items.length > 0 ? (
        <Timeline items = {items}/>
              ) : (
                'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
