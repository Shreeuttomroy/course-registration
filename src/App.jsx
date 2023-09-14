import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
    .then((res)=> res.json())
    .then((data)=> setcourses(data));
  }, []);
console.log(courses);
  return (
    <>
    <h1 className=' text-2xl w-fit mx-auto font-serif font-extrabold'>Hey Programing Hero</h1>
    </>
  )
}

export default App
