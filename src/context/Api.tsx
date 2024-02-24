import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
interface InitialStateType {
  isLoading: boolean;
  isError: boolean;
  user: any[];
  signupUser: any;
  signinUser: any;
  CreateRequest: any;
  forgetPw: any;
  ChangePw: any;
  setId: any;
  setToken: any;
}
const initialstate: InitialStateType = {
  isLoading: false,
  isError: false,
  user: [],
  signupUser: () => {},
  signinUser: () => {},
  CreateRequest: () => {},
  forgetPw: () => {},
  ChangePw: () => {},
  setId: () => {},
  setToken: () => {},
};

export const BASE_URL = "http://192.168.100.59:5000/";
const CreateUser_Api = `${BASE_URL}api/user/register`;
const Login_Api = `${BASE_URL}api/user/login`;
const HireUs_Api = `${BASE_URL}api/create-query`;
const ForgetPw_Api = `${BASE_URL}api/user/send-reset-password-email`;
const ChangePw_Api = `${BASE_URL}api/user/reset-password/`;
const ApiContext = createContext(initialstate);
const ApiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, isError: false };
    case "SET_USER":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      };
  }
};
const ApiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(ApiReducer, initialstate);

  const navigate: any = useNavigate();
  // const fetchData = async () => {
  //   dispatch({ type: "SET_LOADING" });
  //   try {
  //     const res = await axios.get("Auth_Api", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.data;
  //     console.log(data);

  //     dispatch({ type: "SET_API_PRODUCTS", payload: data });
  //   } catch (error) {
  //     dispatch({ type: "API_ERROR" });
  //     console.log(error);
  //   }
  // };
  const signupUser = async (userData: any) => {
    dispatch({ type: "SET_LOADING" });
    console.log(userData);
    try {
      const res = await axios.post(`${CreateUser_Api}`, userData, {
        headers: {
          "Content-Type": "application/json",
          // You can include additional headers if needed, like authorization headers.
        },
      });

      const data = await res.data;
      console.log(res);

      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  // console.log(state.user);
  const signinUser = async (userData: any) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.post(`${Login_Api}`, userData, {
        headers: {
          "Content-Type": "application/json",
          // You can include additional headers if needed, like authorization headers.
        },
      });

      const user: any = await res?.data?.user;
      // toast.success(res?.data?.message, { position: "bottom-right" });
      console.log(res, user);
      if (res?.status === 200) {
        navigate("/Home");
      }
      dispatch({ type: "SET_USER", payload: user });
    } catch (error: any) {
      toast.error(error?.response.data.message, { position: "bottom-right" });
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  const CreateRequest = async (userData: any) => {
    dispatch({ type: "SET_LOADING" });
    console.log(userData);
    try {
      const res = await axios.post(`${HireUs_Api}`, userData, {
        headers: {
          "Content-Type": "application/json",
          // You can include additional headers if needed, like authorization headers.
        },
      });

      const data = await res.data;
      console.log(res);

      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  const forgetPw = async (userData: any) => {
    dispatch({ type: "SET_LOADING" });
    console.log(userData);
    try {
      const res = await axios.post(`${ForgetPw_Api}`, userData, {
        headers: {
          "Content-Type": "application/json",
          // You can include additional headers if needed, like authorization headers.
        },
      });

      const data = await res.data;
      console.log(res);

      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  const ChangePw = async (userData: any) => {
    dispatch({ type: "SET_LOADING" });
    console.log(userData);
    try {
      const res = await axios.post(
        `${ChangePw_Api}${userData.id}/${userData.token}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            // You can include additional headers if needed, like authorization headers.
          },
        }
      );

      const data = await res.data;
      console.log(res);

      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  return (
    <ApiContext.Provider
      value={{
        ...state,
        signupUser,
        signinUser,
        CreateRequest,
        forgetPw,
        ChangePw,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return context;
};

export default ApiProvider;
