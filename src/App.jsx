import { useState, useEffect } from 'react';
import './App.css'
import Course from './components/course';
import Selected from './components/Selected';
// import Toast from './components/Toast';
import swal from 'sweetalert';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse,setSelected] = useState([]);
  const [reamingTime, setReamingTime] = useState(20);
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalCredit,setTotalCridit] = useState(0)
  useEffect(() => {
    fetch('courses.json')
    .then((res)=> res.json())
    .then((data)=> setCourses(data));
  }, []);
  const selectHandler = (course)=>{
    let countPrice = parseInt(course.price);
    let countTime = course.time;
    const matched = selectedCourse.find(obj=> obj.id === course.id);
    if (reamingTime>=countTime) {
      if (matched){
        return swal('Already Selected');
      }else{
        selectedCourse.forEach(c=> countPrice += parseInt(c.price))
        const reamingTimeTotal = reamingTime - countTime;
        setReamingTime(reamingTimeTotal);
        setTotalPrice(countPrice);
        const totalCredit = 20 - reamingTimeTotal;
        setTotalCridit(totalCredit)
        const selectCourse = [...selectedCourse, course];
        setSelected(selectCourse);
      }
    }else{
      return swal("You have no credit hour!");
    }
  }
  return (
    <>
    <h1 className=' text-2xl w-fit mx-auto font-serif font-bold my-6'>Course Registration</h1>
    <div className=' w-full px-3 flex justify-around flex-wrap md:flex-nowrap md:justify-between gap-2'>
      <div className=' w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-2 justify-between'>
        {courses.map((course,idex)=><Course key={idex} selectHandler={selectHandler}  course={course}></Course>)}
      </div>
      <Selected totalCredit={totalCredit} totalPrice={totalPrice} reamingTime={reamingTime} selectedCourse={selectedCourse}></Selected>
    </div>
    </>
  )
}

export default App
