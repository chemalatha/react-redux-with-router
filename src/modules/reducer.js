export const SET_ITENARY = 'reducer/SET_ITENARY'
export const SET_PERSONAL_DETAILS = 'reducer/SET_PERSONAL_DETAILS'

const initialState = {
  source: "",
  destination: "",
  email: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITENARY:
      return {
        ...state,
        source: action.props.source,
        destination: action.props.destination,
      }

    case SET_PERSONAL_DETAILS:
      return {
        ...state,
        email: action.props.email,
      }

    default:
      return state
  }
}

export const setItenary = (props) => {
  return dispatch => {
    dispatch({
      type: SET_ITENARY,
      props
    })
  }
}

export const setPersonalDetails = (props) => {
  return dispatch => {
    dispatch({
      type: SET_PERSONAL_DETAILS,
      props
    })
  }
}
