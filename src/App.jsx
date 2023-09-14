import { useState, useEffect } from 'react';
import './App.css'
import Course from './components/course';
import Selected from './components/Selected';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse,setSelected] = useState([]);
  console.log(selectedCourse.length);
  useEffect(() => {
    fetch('courses.json')
    .then((res)=> res.json())
    .then((data)=> setCourses(data));
  }, []);
  const selectHandler = (course)=>{
      const selectCourse = [...selectedCourse, course];
      setSelected(selectCourse);
      console.log(selectedCourse);
  }
  return (
    <>
    <h1 className=' text-2xl w-fit mx-auto font-serif font-bold my-6'>Course Registration</h1>
    <div className=' w-full px-3 flex justify-between gap-2'>
      <div className='w-3/4 grid md:grid-cols-3 gap-2 justify-between'>
        {courses.map((course,idex)=><Course key={idex} selectHandler={selectHandler}  course={course}></Course>)}
      </div>
      <Selected></Selected>
    </div>
    </>
  )
}

export default App
