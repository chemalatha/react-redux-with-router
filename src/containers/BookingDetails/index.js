import React,{useState} from "react";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    setPersonalDetails
} from '../../modules/reducer';
import { useFormik } from "formik";

const BookingDetails = (props) => {
//     const [values, setValues] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//       });
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//           ...values,
//           [name]: value,
//         });
//       };
//  const handleSubmit = (e)=>{
//     e.preventDefault();
//     props.setPersonalDetails(values);
//     props.changePage();
//  }
const formik = useFormik({
    initialValues: { 
        firstName: "",
        lastName: "",
        email: "",
        mobile: "", 
    },
    onSubmit: values => {
      props.setPersonalDetails(values);
      props.changePage();
    }
  });
  return (
    <div class="container">
      <div>
        <h1>Booking Confirmation Page</h1>
      </div>
      <div>Booking Details</div>
      <div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <label
              className="firstName-label"
              htmlFor="firstName"
              class="col-3 m-4"
            >
              First Name:{" "}
            </label>
            <input
              class="col-3 "
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div>
            <label
              className="lastName-label"
              htmlFor="lastName"
              class="col-3 m-4"
            >
              Last Name:{" "}
            </label>
            <input
              class="col-3"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div>
            <label
              className="emailid-label"
              htmlFor="email"
              class="col-3 m-4"
            >
              Email Id:{" "}
            </label>
            <input
              class="col-3"
              type="email"
              name="email"
              placeholder="Email Id"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <label className="mobile-label" htmlFor="mobile" class="col-3 m-4">
              Mobile:{" "}
            </label>
            <input
              class="col-3"
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />
          </div>
          <div>
            <button type="submit" class="btn btn-success m-4">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* 	First Name
	Last Name
	Email Id
	Mobile */}
    </div>
  );
};

  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        setPersonalDetails,
        changePage: () => push('/thankyou')
      },
      dispatch
    )
export default connect(
    null,
    mapDispatchToProps
  )(BookingDetails)