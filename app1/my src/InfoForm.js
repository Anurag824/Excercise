import React, { Component }from 'react';
class InfoForm extends Component {
  state={
    name: null,
    age: null,
    birthMonth: null
  }
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
}
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}><br />
      <label htmlFor='name'>Name: </label>
      <input type="text" id="name" onChange={this.handleChange} /><br /><br />
      <label htmlFor='age'>Age: </label>
      <input type="text" id="age" onChange={this.handleChange} /><br /><br />
      <label htmlFor='birthMonth'>Birth Month: </label>
      <input type="text" id="birthMonth" onChange={this.handleChange} /><br /><br />
      <button>Submit</button>
      </form>
      </div>
    )
  }
}
export default InfoForm;
