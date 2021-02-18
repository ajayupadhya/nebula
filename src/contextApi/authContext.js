import createcontext from "./createconstext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return {...state ,
        errorMessage: "",
        token: action.payload.token,
        user: action.payload.user,
        isSignedIn: action.payload,
      };
    case "signup":
      return { ...state };
    case "clear":
      return { ...state, errorMessage: "" };
    case "signout":
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};
const removeError = (dispatch) => {
  return () => {
    console.log("called");
    dispatch({ type: "clear" });
  };
};

const localSignIn = (dispatch) => {
  return () => {
    const tok = localStorage.getItem("Token");
    console.log(tok);
    if (tok) {
      dispatch({ type: "signin", payload: tok, isSignedIn: true });
    }
  };
};

const signin = (dispatch) => {
  return async (email, password) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email: email, password: parseInt(password) }),
      };
      fetch("https://warm-journey-07484.herokuapp.com/api/signin/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("Token", data.token);
          localStorage.setItem("UserData", JSON.stringify(data.user));
          dispatch({
            type: "signin",
            payload: data,
            token:data.token,
            isSignedIn: true,
          });

          if (data.err) {
            dispatch({
              type: "add_error",
              payload: "Email or Password are not correct",
            });
            console.log(data.err);
          }
        });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Email or Password are not correct",
      });
      console.log(err);
    }
  };
};

const signup = (dispatch) => {
  return async (name, lastname, email, password) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          email: email,
          password: password,
        }),
      };
      fetch("https://warm-journey-07484.herokuapp.com/api/signup/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "signup" });
          if (data.err) {
            dispatch({
              type: "add_error",
              payload:
                "User already exist or Something went wrong from our side Retry",
            });
          }
        });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload:
          "User already exist or Something went wrong from our side Retry",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    localStorage.removeItem("Token");
    dispatch({ type: "signout", payload: false });
   
  };
};

const createData = (dispatch) => {
  return async (name, date, phone, oraganistion, rating) => {
    console.log(oraganistion)
    try {
      const tok = localStorage.getItem("Token");
      const id = JSON.parse(localStorage.getItem("UserData"));

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${tok}`,
        },
        body: JSON.stringify({
          name: name,
          date: date,
          phoneNumber: phone,
          organisation: oraganistion,
          rating: rating,
        }),
      };

      await fetch(`https://warm-journey-07484.herokuapp.com/api/data/newdata/${id._id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log("data", data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const { Context, Provider } = createcontext(
  authReducer,
  { signup, removeError, signin, signout, localSignIn, createData },

  { isSignedIn: false, errorMessage: "", token: "", user: {} }
);
