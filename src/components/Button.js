import PropTypes from 'prop-types'

const Button = ({ text, onClick, color }) => {
    const headerStyles = {color: color, backgroundColor: 'black'}
    
    return (
        <>
            <button className='btn' onClick={onClick}>{text}</button>
        </>
    )
}

Button.defaultProps = { text: 'Texto do Botao' }
Button.propTypes = { text: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired}

export default Button
