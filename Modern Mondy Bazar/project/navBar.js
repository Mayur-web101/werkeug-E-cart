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

  Cropregistration(ev){
    this.env.router.navigate({ to: 'Cropregistration' });
    
  }
  Crop_booking(ev){
    this.env.router.navigate({ to: 'Crop_booking'})
  }


  async onClickLogout(ev){

    this.valid = ev.valid;  
    const session_id = localStorage.getItem('session_id');
    const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_logout');
        xhr.send(JSON.stringify({'session_id': session_id}));
        xhr.onload = async () => {
          console.log(xhr);
	  document.cookie="";
        }
    localStorage.removeItem('session_id', session_id);
    await this.env.router.navigate({ to: 'Home' });
  }

  


	static template = xml `
    <nav class="navbar navbar-default" style="border:1px solid #15420A;">
      <div>
        <h3 id="h">Moder Mandy Bazar</h3>
      </div>
      <t t-if="valid">
        <ul class="nav nav-pills">
          <button type="button" t-on-click="Cropregistration" class="btn btn-default navbar-btn">HOME</button>
<button type="button" t-on-click="cropdetail" class="btn btn-default navbar-btn mx-2">CROPE DETAIL</button>
            <button type="button" class="btn btn-default navbar-btn mx-2">STAGE ACTIVITY</button>
            <button type="button" class="btn btn-default navbar-btn mx-2">ORDER</button>
        </ul>
          <form class="navbar-form navbar-left">
           <button type="button" t-on-click="home" class="btn btn-default navbar-btn mx-2">HOME</button>
                <button type="button" t-on-click="Cropregistration" class="btn btn-default navbar-btn mx-2">CROPE DETAIL</button>
                <button type="button" t-on-click="Stageactivity" class="btn btn-default navbar-btn mx-2">STAGE ACTIVITY</button>
                <button type="button" class="btn btn-default navbar-btn mx-2">ORDER</button>
        </form>
      </t>
      <t t-else="">
        <form class="navbar-form navbar-left">
          <button type="button"  t-on-click="login"  class="btn btn-default">SIGN IN </button>
          <button type="button"  t-on-click="signup"  class="btn btn-default">SIGN UP</button>
        </form>
      </t>  
  </nav> `;    
}
/*<nav class="navbar navbar-expand-sm bg-light"> 
      <div class="container-fluid">
        <h3>Modern Mondy Bazar</h3>
      </div>
      <t t-if="valid">
      <div class="container-fluid">
        <ul class="navbar-nav ml-auto">  
          <li class="nav-item"> 
            <button type="button" t-on-click="home" class="btn btn-default navbar-btn">HOME</button> 
          </li>
        </ul>
      </div>
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">  
            <button type="button" class="btn btn-default navbar-btn" t-on-click="logout" >LOGOUT</button>
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
    </nav>*/
