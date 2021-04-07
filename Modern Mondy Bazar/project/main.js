const { Component, Store, mount } = owl;
const { EventBus } = owl.core;
const { qweb } = owl;
const { RouteComponent } = owl.router
const { useRef, useDispatch, useState, useStore } = owl.hooks;
const { whenReady } = owl.utils;
const { xml } = owl.tags;

import { Content } from "./Content.js";
import { Cropedetail } from "./Cropedetail.js";
import { Footer } from "./Footer.js";
import { Login } from "./login.js";
import { NavBar } from "./navBar.js";
import { SignUp } from "./signup.js";
import { Stageactivity } from "./farmer/Stageactivity.js";
import { ClientSignUp } from "./ClientSignUp.js";
import { Crop_booking } from "./client/Booking.js";
import { orderlist } from "./farmer/orderlist.js";
import { Croplist } from "./client/Croplist.js";
import { ViewStage } from "./client/ViewStage.js";
import { BookingStatus } from "./client/BookingStatus.js";
import { BookingStatus } from "./client/BookingStatus.js";
import { PendingOrader } from "./farmer/PendingOrader.js";

const APP_TEMPLATE= xml`
    <div>
        <NavBar/>
        <div>
            <RouteComponent/>
        </div>
        <Footer/>
    </div>`;

class Home extends Component
{
    static template = APP_TEMPLATE;
    static components = {Content,Footer,Login,NavBar,RouteComponent,SignUp};
}
 
    debugger;
const ROUTES = [
    { name: "LOGIN", path: "/login", component: Login },
    { name: "SIGN_UP", path: "/signup", component: SignUp },
    { name: "Home", path: "/", component: Content },
    { name: "Cropregistration", path:"/Cropregistration", component: Cropregistration },
    { name: "Stageactivity", path:"/Stageactivity", component: Stageactivity },
	{ name: "Crop_booking", path:"/Crop_booking", component: Crop_booking },
	{ name: "orderlist", path:"/orderlist", component: orderlist },
	{ name: "Croplist", path:"/Croplist", component: Croplist },
	{ name: "ViewStage", path:"/ViewStage", component: ViewStage },
	{ name: "BookingStatus", path:"/BookingStatus", component: BookingStatus },
	{ name: "PendingOrader", path:"/PendingOrader", component: PendingOrader },
    ];
    
function makeEnvironment() 
{
    const env = { qweb };
    env.router = new owl.router.Router(env, ROUTES);
    env.router.start();
    env.bus = new EventBus();
    return env;
}
Home.env = makeEnvironment();

async function setup()
{
    const home=new Home();
    home.mount(document.body);
}
whenReady(setup);
