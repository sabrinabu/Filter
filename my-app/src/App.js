import JSONDATA from './MOCK_DATA.json';
import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [searchVal, setSearchVal]= useState("");
  return ( 
    <div className="App">
      <input type="text" placeholder='search...' onChange={(event)=>{
        setSearchVal(event.target.value);
      }}/>
      {JSONDATA.filter((val)=>{
          if(searchVal==""){
            return val;
          }else if(val.last_name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())){
            return val
          }
      }).map((val,key)=>{
        return(<div className='user' key={key}><p>{val.last_name}</p></div>);
      })}
  </div>
   );
  
}

export default App;
