import { Component } from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  nameInput = ({target}) => {
    this.setState({[target.name]: target.value});
  }


  onSubmitContact = (e) => {
    e.preventDefault()
    this.createContact({
      name:this.state.name,
      number:this.state.number,
    })
    this.reset();
  }


  createContact = (data) => {
   const newUser = {
    ...data,
    id: nanoid()
   }
   if (this.state.contacts.find(contact => contact.name === newUser.name)) {
    alert('This contact already exist')
    return
   }
    this.setState((prevState) => ({contacts: [...prevState.contacts, newUser]}))
  }

  onChange = (query) => {
    this.setState({filter: query})
    const normalizedFilter = this.state.filter.toLowerCase()
    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return filteredContact
  }



  getContactBySearch = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return filteredContact
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

  reset = () => {
    this.setState({
      name: "",
      number: "",
    })
  }

  render() {
  return (
  <>
  <h2>Phonebook</h2>
  <Form  name={this.state.name } number={this.state.number} nameInput={this.nameInput} onSubmitContact={this.onSubmitContact} />
  <h2>Contacts</h2>
  <Filter contacts={this.state.contacts} onChange={this.onChange}/>
  <ContactList contacts={this.getContactBySearch()} handleDelete={this.handleDelete}/>

</>
  )
}
};

