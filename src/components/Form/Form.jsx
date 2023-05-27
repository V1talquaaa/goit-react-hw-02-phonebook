import { nanoid } from 'nanoid';
import { Component } from 'react';
import './Form.module.css'
import PropTypes from 'prop-types';

class Form extends Component {

  render() {
    return (
      <form action="" onSubmit={this.props.onSubmitContact}>
        <label htmlFor={nanoid()}>Name</label>
        <input
          type="text"
          id={nanoid()}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.nameInput}
          value={this.props.name}
        />
        <label htmlFor={nanoid()}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.nameInput}
          value={this.props.number}
        />
  
        <button type='submit'>
          Add contact
        </button>
      </form>
    );
  };
  
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  nameInput: PropTypes.func.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
}

export { Form };




// const Form = ({ name, number, nameInput, onSubmitContact }) => {
//   return (
//     <form action="" onSubmit={onSubmitContact}>
//       <label htmlFor={nanoid()}>Name</label>
//       <input
//         type="text"
//         id={nanoid()}
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={nameInput}
//         value={name}
//       />
//       <label htmlFor={nanoid()}>Number</label>
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         onChange={nameInput}
//         value={number}
//       />

//       <button type='submit'>
//         Add contact
//       </button>
//     </form>
//   );
// };

// export { Form };
