import './App.css'
import React from 'react'
import  Routes  from './routes/Routes'
import  {Layout}  from './layout/layout/layout'
import  {Navbar}  from './components/navbar/navbar'
import  {Footer}  from './components/footer/footer'


function App() {

  return (
    <>
      <Navbar/>
      <Layout>
         <Routes/>
      </Layout>
      <Footer/>
    </>
  );
};

export default App;
