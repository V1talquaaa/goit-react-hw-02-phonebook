import { Component } from "react"
import PropTypes from 'prop-types'; 

class Filter extends Component {

handleNameInput = ({target}) => {
    this.props.onChange(target.value)
}

render() {
    return (
        <>
        <p>Search by name</p>
        <input type="text" name="filter" onChange={this.handleNameInput} />
        </>
    )
}
}

Filter.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onChange: PropTypes.func.isRequired,
}

export { Filter }