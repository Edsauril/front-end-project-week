import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  buttonClickHandler = e => {
    e.preventDefault();
    console.log("click");
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params._id
        }`,
        {
          textBody: "edited"
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.props.match.params._id);
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="noteForm">
        <h1>Edit Note:</h1>
        <form onSubmit={this.buttonClickHandler}>
          <input
            onChange={this.buttonClickHandler}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;