import PropTypes from 'prop-types';
import Select from './Select';
const Selected = ({reamingTime, selectedCourse}) => {
    return ( 
        <>
        <div className="w-1/4 bg-[#FFFFFF] h-fit rounded-md p-3 mt-3">
            <h1>Credit Hour Remaining {reamingTime} hr</h1>
            <hr className='w-full my-2'/>
            <div>
                <h3>Course Name:</h3>
                <ul className=' list-decimal ml-4'>
                {selectedCourse.map(data=> <Select key={data.id} data={data}></Select>)}
                </ul>
            </div>
            <hr className='w-full my-2'/>
            <p>Total credit hour:</p>
            <hr className='w-full my-2'/>
            <p>Total Cost: </p>
        </div>
        </>
     );
}
 Selected.propTypes = {
    selectedCourse: PropTypes.array,
    reamingTime: PropTypes.number
 }
export default Selected;