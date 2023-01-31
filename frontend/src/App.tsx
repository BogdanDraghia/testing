import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './ui/Layout';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet/>
      </Layout>
    </div>
  );
}

export default App;
