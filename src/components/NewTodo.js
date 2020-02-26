import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index"; //action creator
import { bindActionCreators } from "redux";
class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    debugger;
    return (
      <div>
        Enter todo
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.props.addTodo(this.state.todo)}>Enter</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};
export default connect(
  null,
  mapDispatchToProps
)(NewTodo);

/* const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewTodo); */

//export NewTodo;
