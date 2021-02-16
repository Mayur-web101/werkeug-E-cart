const { Component,Store,mount,qweb} = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

const Login_Template = xml`
<div class="box">	
	<h2>Sign In</h2>
	<p></p>
	<form>		
				<div class="inputBox">
					<input id="email"  type="text"></input>
					<label>USERNAME</label>
				</div>
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>PASSWORD</label>
				</div>
				<input type="submit" name="sign-in" value="Sign In"></input>
				<h3><link>Create Account</link></h3>
	</form>
</div>
	`;

class Login extends Component
{
	
	static template=Login_Template
}
function setup()
{
	const login=new Login();
	login.mount(document.body);
	
}
whenReady(setup);