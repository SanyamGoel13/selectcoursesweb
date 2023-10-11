import React from 'react'
import './Filters.css'

const Filters=(props)=> {
    let filterdata=props.filterdata;
    let category=props.category;
    let setcategory=props.setCategory;
    function filterHandler(title)
    {
        setcategory(title);
    }
    return (
    <div>
        {
        filterdata.map((dt)=>(
        
            <button className='button-24' key={dt.id} onClick={()=>filterHandler(dt.title)}>{dt.title}</button>
        ))
        }
    </div>
  )
}

export default Filters
