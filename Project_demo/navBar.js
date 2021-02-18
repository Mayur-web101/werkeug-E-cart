const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class NavBar extends Component
{
	static template = xml `
    <nav class="navbar navbar-expand-sm bg-light"> 
      <div class="container-fluid">
        <h3>Modern Mondy Bazar</h3>
      </div>
      <div class="container-fluid">
        <ul class="nav justify-content-center">
          <li class="nav-item"> 
            <button type="button" t-on-click="home" class="btn btn-light">HOME</button>  
          </li>
        </ul>
      </div>
        <ul class="navbar-nav ml-auto">  
          <li class="nav-item"> 
            <button type="button" class="btn btn-light"  t-on-click="login" >SIGN IN</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-light" t-on-click="signup">SIGN UP</button>
          </li> 
        </ul> 
    </nav> `;

  home()
  {
    return this.env.router.navigate({to: 'Home'});
  }
	login(){
		return this.env.router.navigate({ to: 'LOGIN' });
	}
	signup(){
		return this.env.router.navigate({ to: 'SIGN_UP' });
	}

}
