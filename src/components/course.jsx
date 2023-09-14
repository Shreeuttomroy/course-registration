import { FaBookOpen } from 'react-icons/fa';
const Course = (course) => {
    const {selectHandler} = course;
    const {image, title ,description, price, time} = course.course;
    // console.log(selectHandler);
    // console.log(course);
    return (  
        <>
        <div className=" w-full my-3 bg-[#FFFFFF] p-2 rounded-lg">
            <img className="w-full" src={image} alt={title} />
            <h3 className=' text-lg my-1 font-semibold'>{title}</h3>
            <p className=' text-base font-normal'>{description}</p>
            <div className='w-full flex my-1 justify-between'>
                <p><span className=' text-2xl'>$</span> Price: {price}</p>
                <p className='w-fit flex items-center'><FaBookOpen fontSize={"25px"}></FaBookOpen> Credit: {time}</p>
            </div>
            <button onClick={()=>selectHandler(course.course)} className='w-full py-3 px-2 text-lg font-semibold bg-[#2F80ED] text-[#FFFFFF] rounded-md'>Select</button>
        </div>
        </>
    );
}
 
export default Course;