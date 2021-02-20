import PropTypes from 'prop-types'
import Header from "./Header";
const Button = ({color,text, onClick}) => {

    return (
        <button
            onClick={onClick}
            style={{backgroundColor:color}}
            className='btn'
        >
            {text}
        </button>
    )
}

PropTypes.defaultProps = {
    color : 'steelblue',
}

PropTypes.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button