const { Component,Store,mount,qweb} = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

const Login_Template = xml`
<div class="box">	
	<h2>Sign Up</h2>
	<form>		
				<div class="inputBox">
					<input id="email"  type="text"></input>
					<label>Email</label>
				</div>
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>PASSWORD</label>
				</div>
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>CONFIRM PASSWORD</label>
				</div>
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>MOBILE</label>
				</div>
				<input type="submit" name="sign-in" value="Sign Up"></input>
	</form>
</div>`;



class signUp extends Component
{
	
	static template=Login_Template
}
function setup()
{
	const signup=new signUp();
	signup.mount(document.body);
	
}
whenReady(setup);