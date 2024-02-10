import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
interface InitialStateType {
  isLoading: boolean;
  isError: boolean;
  data: any[];
}
const initialstate: InitialStateType = {
  isLoading: false,
  isError: false,
  data: [],
};

export const BASE_URL = "https://";
const Auth_Api = "";
const BEARER_TOKEN = "";
const ApiContext = createContext(initialstate);
const ApiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, isError: false };
    case "SET_API_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
  }
};
const ApiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(ApiReducer, initialstate);
  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(Auth_Api, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      console.log(data);

      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log(error);
    }
  };
  return (
    <ApiContext.Provider
      value={{
        ...state,
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
