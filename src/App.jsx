import React from 'react'
import './App.css'
import { DataContextProvider } from './components/DataContextProvider';
import Router from './Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={Router} />
    </DataContextProvider>
  );
}
 export default App;
