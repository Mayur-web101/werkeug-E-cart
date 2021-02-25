const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class NavBar extends Component
{

  constructor() {
    super(...arguments);
    // event_type, owner, method
    this.env.bus.on('login_changed', this, this._loginChanged);
    // this.env.bus.on('login_changed', null, this._loginChanged.bind(this));
  }
     
  _loginChanged (ev) {
       this.valid=ev.valid;     
    }
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
  logout()
  {
    return this.env.router.navigate({ to: 'LOGIN'})
  }

	static template = xml `
    <nav class="navbar navbar-expand-sm bg-light"> 
      <div class="container-fluid">
        <h3>Modern Mondy Bazar</h3>
      </div>
      <t t-if="valid">
      <div class="container-fluid">
        <ul class="navbar-nav ml-auto">  
          <li class="nav-item"> 
            <button type="button" t-on-click="home" class="btn btn-light">HOME</button> 
          </li>
        </ul>
      </div>
      <div class="container-fluid">
        <ul class="nav justify-content-center">
          <li class="nav-item">  
            <button type="button" class="btn btn-light"  t-on-click="logout" >LOGOUT</button>
          </li>
        </ul>
      </div>
      </t>
      <t t-else="">
        <ul class="navbar-nav ml-auto">  
          <li class="nav-item"> 
            <button type="button" class="btn btn-light"  t-on-click="login" >SIGN IN</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-light" t-on-click="signup">SIGN UP</button>
          </li> 
        </ul>
        </t>
    </nav> `;
}
