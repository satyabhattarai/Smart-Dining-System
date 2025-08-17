import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
});

export const ContextProvider = ({ children }) => {
  const [orders, setShowOrders] = useState(false);
  //maile ya "false" halda as a string read garyo and uta js ma {orders&& </>}
  //le yeslai as a true boolean read garyo so testo nahuna ko lagi false as a boolean pass garnu parcha.
  return (
    <StateContext.Provider value={{ orders, setShowOrders }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
