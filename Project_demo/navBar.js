const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class NavBar extends Component
{
	
	static template = xml `
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  		<p>Modern Mondi Bazar</p>
  		<button type="button" t-on-click="login" class="btn btn-outline-primary">sign in</button>
  	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <button type="button" t-on-click="signup" class="btn btn-outline-primary">sign up</button>
      
    </div>
  </div>
</nav>`;

	login(){
		return this.env.router.navigate({ to: 'LOGIN' });
	}
	signup(){
		return this.env.router.navigate({ to: 'SIGN_UP' });
	}

}
