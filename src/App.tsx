import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { RouteComponentProps } from './interfaces/index';
import HomeScreen from './screens/HomeScreen';

type TParams = { id?: string | undefined };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
