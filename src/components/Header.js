import PropTypes from 'prop-types'
import Button from "./Button";


const Header = ({ title, onClick }) => {
    return (
        <header className='header'>
            <h1 style={headerStyles} >{title}</h1>
            <Button text='Olá' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = { title: 'Titulo' }
Header.propTypes = { title: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired }
const headerStyles = {color: 'red', backgroundColor: 'black'}

export default Header
