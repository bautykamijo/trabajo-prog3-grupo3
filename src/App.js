import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import Generos from './screens/Generos/Generos';
import Detalle from './screens/Detalle/Detalle';
import NotFound from './screens/NotFound/NotFound';



function App() {

  return (
    <body className="bodydegrade">
    <Header/>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/detalles/:id' component={Detalle} />
      <Route path='/favorites' component={Favorites} />
      <Route path='/generos' exact={true} component={Generos} />
      <Route path='' component={NotFound} />
    </Switch>
    
    <Footer/>
    </body>
  );
}

export default App;
