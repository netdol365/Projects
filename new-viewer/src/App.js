import './App.css';
import axios from 'axios';
import {useState} from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  // const [data,setData] = useState();

  // const onClick = async ()=>{
  //   try{
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=1a76bbed90e44526bc279d6fc0048d4e',);setData(response.data);
         
  //     }catch(e){
  //       console.log('error... occured');
  //     }
  // };

  // return (
  //   <div className="App">
  //     <div>
  //       <button id="load" onClick={onClick}>Load</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly = {true}></textarea>}  
  //   </div>
  // );

  return (
    <>
      <Categories/>
      <NewsList />
    </>
  )
}

export default App;
