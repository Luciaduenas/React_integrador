import {Routes as ReactDomRoutes, Route } from "react-router-dom";

import { StoreScreen } from "../pages/onlineStore/onlineStore_screen";
import { AboutScreen } from "../pages/about/about_screen";
import { ContactScreen } from '../pages/contact/contact_screen'
import { HomeScreen } from '../pages/home/home_screen'
import { Error404 } from "../pages/error/error404";


 function Routes () {
    return (
        <ReactDomRoutes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path='/about' element={<AboutScreen/>}/>
          <Route path='/store' element={<StoreScreen/>}/>
          <Route path='/contact' element={<ContactScreen/>}/>
          <Route path='/*' element={<Error404/>}/>
          </ReactDomRoutes>
    );
};

export default Routes;