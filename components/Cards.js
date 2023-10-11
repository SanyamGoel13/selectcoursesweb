import React from 'react'
import Card from './Card';
import { useState } from 'react';
import './Cards.css'

const Cards=(props)=> {
    const [Likedcourses,Setlikedcourses]=useState([]);
    let courses=props.courses;
    let category=props.category;
    console.log(courses);
    function getCourses(){
    if(category==="All"){
    let allCourses=[];
    Object.values(courses).forEach(array=>
        {
            array.forEach(courseData=>{
            allCourses.push(courseData)});
        })
        return allCourses;}
        else{
            return courses[category];
        }
    }
  return (
    <div className='mar'> 
        {
            getCourses().map(
                (course)=>(
                    <Card key={course.id} course={course} Likedcourses={Likedcourses} Setlikedcourses={Setlikedcourses} />
                )
            )
        }  
    </div>
  )
}

export default Cards
