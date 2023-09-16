import PropTypes from 'prop-types';
import Select from './Select';
const Selected = ({totalPrice, totalCredit, reamingTime, selectedCourse}) => {
    return ( 
        <>
        <div className=" w-full md:w-1/4 bg-[#FFFFFF] h-fit rounded-md p-3 mt-3">
            <h1 className=' text-lg text-[#2F80ED] font-bold'>Credit Hour Remaining {reamingTime} hr</h1>
            <hr className='w-full my-2'/>
            <div>
                <h3 className='text-lg font-bold' >Course Name:</h3>
                <ul className=' list-decimal ml-4'>
                {selectedCourse.map(data=> <Select key={data.id} data={data}></Select>)}
                </ul>
            </div>
            <hr className='w-full my-2'/>
            <p className=' font-medium'>Total credit hour: {totalCredit}</p>
            <hr className='w-full my-2'/>
            <p className=' font-semibold'>Total Cost: {totalPrice} USD</p>
        </div>
        </>
     );
}
 Selected.propTypes = {
    selectedCourse: PropTypes.array,
    reamingTime: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number
 }
export default Selected;