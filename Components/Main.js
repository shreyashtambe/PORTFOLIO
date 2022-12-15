import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Contact from "./Contact";
import Projcets from './Projects';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Projects" component={Projcets} />
      <Route path="/Aboutme" component={Aboutme} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
};

/* 
A relative <Link to> value (that does not begin with /)
 resolves relative to the parent route, which means that 
 it builds upon the URL path that was matched by the route 
 that rendered that <Link>. It may contain .. to link 
to routes further up the hierarchy. 
*/
export default Main;
