import React from 'react';
import Body from './Body';
import Footer from './Footer';
import ModelX from './ModelX';
import ModelS from './ModelS';
import Model3 from './Model3';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
function App() {
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Source Sans Pro', sans-serif;
            width: 100%;
          }
          button {
            outline: 0;
          }
          `}</style>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/modelX' component={ModelX} />
        <Route path='/modelS' component={ModelS} />
        <Route path='/model3' component={Model3} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
