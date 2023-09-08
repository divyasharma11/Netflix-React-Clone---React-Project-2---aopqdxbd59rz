import { createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(true);

  return (
    <DataContext.Provider value={{ data,setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;