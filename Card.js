import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
import './Card.css';

const Card=(props)=> {
    //console.log("hi");
    let course=props.course;
    let Setlikedcourses=props.Setlikedcourses;
    let Likedcourses=props.Likedcourses;
    function clickHandler(){
        if(Likedcourses.includes(course.id)) 
        {
            Setlikedcourses((prev)=>prev.filter((cid)=>cid!==course.id)) 
            toast.warning("Like removed");
        }
        else{
            Setlikedcourses((prev)=>[...prev,course.id]);
            toast.success("Liked successfully");
        }
    }
    return (
    <div className='board'>
        <div>
            <img className='imaging' src={course.image.url}/>
        </div>
        <div>
            <button onClick={clickHandler}>
               {Likedcourses.includes(course.id)? <FcLike/>:<FcLikePlaceholder/>}
            </button>
        </div>
        <div className='bak'>
            <p>{course.title}</p>
            <p>{
            course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
            }</p>
        </div>
    </div>
  )
}

export default Card
