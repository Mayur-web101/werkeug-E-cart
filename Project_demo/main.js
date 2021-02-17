const { Component, Store, mount } = owl;
const { RouteComponent } = owl.router
const { useRef, useDispatch, useState, useStore } = owl.hooks;
const { whenReady } = owl.utils;
const {qweb} = owl;
const { xml } = owl.tags;

import { Content } from "./Content.js";
import { Footer } from "./Footer.js";
import { Login } from "./login.js";
import { NavBar } from "./navBar.js";
import { SignUp } from "./signup.js";

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
	static components = {Content,Footer,Login,SignUp,NavBar,RouteComponent};
} 
	
const ROUTES = [
	{ name: "LOGIN", path: "/login", component: Login },
	{ name: "SIGN_UP", path: "/signup", component: SignUp },
	{ name: "Home", path: "/", component: Content },
	];
function makeEnvironment() 
{
    const env = { qweb };
    env.router = new owl.router.Router(env, ROUTES);
    env.router.start();
    return env;
}
Home.env = makeEnvironment();

async function setup()
{
	const home=new Home();
	//await home.env.router.navigate({to: 'navBar'});
	home.mount(document.body);
	
}
whenReady(setup);
