import './App.css';
import Navbar from "./components/Navbar"
import Filters from "./components/Filters"
import Cards from "./components/Cards"
import {apiUrl,filterdata} from "./data"
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';

function App() {
  const[category,setCategory]=useState("All");
  const [courses,Setcourses]=useState(null);
  const[loading,Setloading]=useState(true);
  async function fetchdata()
  {
    try
    {
      let response=await fetch(apiUrl);
      let output= await response.json();
      Setcourses(output.data);
    }
    catch(error)
    {
      toast.error("error in apiUrl");
    }
    Setloading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[])
  console.log(courses);
  return (
    <div className='paise'>
      <div className='kithe'>
        <Navbar/>
      </div>
      <div className='leke'>
        <Filters filterdata={filterdata} category={category} setCategory={setCategory} />
      </div>
      <div className='heer'>
        { loading?<Spinner/>:<Cards courses={courses} category={category}/>};
      </div>
    </div>
  );
}

export default App;
