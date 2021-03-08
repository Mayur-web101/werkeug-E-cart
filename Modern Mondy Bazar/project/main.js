const { Component, Store, mount } = owl;
const { EventBus } = owl.core;
const {qweb} = owl;
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

	 async willStart() {
    const session_id = localStorage.getItem('session_id');
    if (session_id) {  
        // const sessionPromise = new Promise((resolve) => {return resolve});
        // debugger
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/session_validate');
        xhr.send(JSON.stringify({'session_id': session_id}));
        xhr.onload = async () => {
            console.log(xhr)
            // Promise.resolve(sessionPromise);
        };
        // await sessionPromise;
        // console.log('Promise Resolved')
    }
}
async willStart() {
        const session_id = localStorage.getItem('session_id');
        console.log(session_id);
        if (session_id) {
            const xhr = new window.XMLHttpRequest();
            xhr.open('POST', '/session_validate');
            xhr.send(JSON.stringify({'session_id': session_id}));
            xhr.onload = async () => {
            	this.env.bus.trigger('login_changed', {valid: true});
            	alert("Welcome");
                console.log(xhr)
            };
        }
        else
        {
        	this.env.bus.trigger('login_changed', {valid: false});

        }
    }

} 
	
const ROUTES = [
	{ name: "LOGIN", path: "/login", component: Login },
	{ name: "SIGN_UP", path: "/signup", component: SignUp },
	{ name: "Home", path: "/", component: Content },
	{ name: "cropedetail", path:"/cropedetail", component: Cropedetail },
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
	//await home.env.router.navigate({to: 'navBar'});
	home.mount(document.body);
	
}
whenReady(setup);

