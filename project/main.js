const { Component,Store,mount,qweb } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

import {SignUp} from "./signup.js";

class Home extends Component
{
	 static template= xml`
	<div>
		<div>
			<h2>Modern Mondi Bazar</h2>	
			<button t-on-click="signup">Sign Up</button>
			<signup/>
		</div>
	</div>`;
	signup()
	{
        alert("hkjdakjdak")	
		return this.env.router.navigate({ to: 'SIGN_UP' });
	}
}     

const ROUTES = [
	{ name: "SIGN_UP", path: "/signup", component: SignUp },
	];

function makeEnvironment() 
{

    const env = { qweb };
    env.router = new owl.router.Router(env, ROUTES);
    env.router.start();
    return env;
}
Home.env = makeEnvironment();

function setup()
{
	const home=new Home();
	home.mount(document.body);
	
}
whenReady(setup);
