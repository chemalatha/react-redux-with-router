import React from "react";
import { connect } from 'react-redux';

const ThankYouScreen = (props) => {
  return <div>Thank You - {props.email}</div>;
};
const mapStateToProps = ({reducer}) => {
    return {
    email:reducer.email,
  }}
  export default connect(
    mapStateToProps,
    null
  )(ThankYouScreen)
