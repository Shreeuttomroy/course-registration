import PropTypes from 'prop-types';
const Select = ({data}) => {
    return ( 
        <li>{data.title}</li>
     );
}
Select.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Select;