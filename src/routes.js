import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";

import Home from './components/pages/home/Home';
import WhatWeDo from "./components/pages/about/WhatWeDo";
import BoardMembers from "./components/pages/about/BoardMembers";
import Sponsors from "./components/pages/about/Sponsors";
import Contact from "./components/pages/contact/Contact";
import AllEvents from "./components/pages/events/AllEvents";
import EventDetail from "./components/pages/events/EventDetail";
import Join from "./components/pages/join/Join";
import Login from "./components/pages/login/Login";

export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/what_we_do" component={WhatWeDo} />
            <Route path="/about/partners_and_sponsors" component={Sponsors} />
            <Route path="/about/board_members" component={BoardMembers} />
            <Route path="/contact" component={Contact} />
            <Route path="/events" component={AllEvents} />
            <Route path="/events/:eventDetail" component={EventDetail} />
            <Route path="/join" component={Join} />
            <Route path="/login" component={Login} />
        </Switch>
    </HashRouter>
)