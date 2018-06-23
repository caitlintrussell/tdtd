
import React, {Component} from 'react';
import './add-todo.css';

class AddTodo extends Component {
  state = {
    name: '',
    description: '',
    nameError: false,
    descriptionError: false,
  };
  displayName = 'AddTodo';
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value, [`${event.target.name}Error`]: false});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.description) {
      if (!this.state.name && !this.state.nameError) this.setState({nameError: true});
      else this.setState({descriptionError: true});
    }
    else {
      this.setState({name: '', description: '', nameError: false, descriptionError: false});
    }
  }
  render() {
    const {name, description, nameError, descriptionError} = this.state;
    return (
    <div className="addTodo-container">
      <h2>ADD A TO DO</h2>
      <form>
        <input name="name" className={nameError ? 'addTodo-input__error' : 'addTodo-input'} placeholder="Name of Task*" onChange={this.handleChange} value={name} />
        <input name="description" className={descriptionError ? 'addTodo-input__error' : 'addTodo-input'} placeholder="Description*"  onChange={this.handleChange} value={description} />
        <button onClick={this.handleSubmit} className="addTodo-button" >ADD</button>
      </form>
    </div>
    );
  }
}

export default AddTodo;
