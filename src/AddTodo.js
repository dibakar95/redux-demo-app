import { connect } from "react-redux";
import { addTodo } from "./actions/index";
import { NewTodo } from "./components/NewTodo"; //component tobe wrapped
import { bindActionCreators } from "redux";

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
