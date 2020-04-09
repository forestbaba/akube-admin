import React from 'react';
import LeftSide from './components/left'
import RightSide from './components/right';
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Women from './components/Screen/Women/women'
import Men from './components/Screen/Men/men'
import Navbar from './components/right/navbar/navbar'
import Addnew from './components/Screen/addnew/addnew'
import Newin from './components/Screen/newin/newin'
import Shoes from './components/Screen/Shoes/shoes'
import Clothing from './components/Screen/Clothing/clothing'
import Accessories from './components/Screen/Accessories/accessories'
import Activewears from './components/Screen/Activewears/activewears'
import './components/right/right.scss'
import EditProduct from './components/Screen/EditProduct'

function App() {
  return (
    <div className="app">
      <Router>

        <div className='left-holder'>
          <LeftSide />
        </div>
        <div className='right-holder'>
          <Navbar/>
          <Switch>
            <Route path="/" component={RightSide} exact/>
            <Route path="/women" component={Women} />
            <Route path="/men" component={Men} />
            <Route path="/add" component={Addnew} />
            <Route path="/newin" component={Newin} />
            <Route path="/shoes" component={Shoes} />
            <Route path="/clothing" component={Clothing} />
            <Route path="/activewears" component={Activewears} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/editProduct" component={EditProduct} />
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//Inspirations from
//https://dribbble.com/shots/9404340-Shop-Clothing-Web-Page/attachments/1429040?mode=media

//https://dribbble.com/shots/9447445-Confirmation-and-Checkout/attachments/1472816?mode=media