const { Component,Store,mount,useState} = owl;
const { xml } = owl.tags;


export class Login extends Component
{
   constructor() {
        super(...arguments);
        this.state = useState({
        invalid: undefined
         });
    }

  OnLoginsubmit(ev){
    const xhr = new window.XMLHttpRequest();
    xhr.open('POST', '/do_login');
    const formData = new FormData(ev.currentTarget);
    xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    xhr.onload = async () => {
        const response = JSON.parse(xhr.response);
        if (response.credentials === false) {
            this.state.invalid = "Please enter currect detail";
        } else if (response.session_id) {
            localStorage.setItem('session_id', response.session_id);
            this.env.bus.trigger('login_changed', {valid: true});
            this.env.router.navigate({to: 'cropedetail'});
        }
    };
  } 
	static template = xml `
  	<div class="box">  
      <h2>SIGN IN</h2>
      <p></p>
      <form action="#" t-on-submit.prevent="OnLoginsubmit">    
        <div class="inputBox">
          <input id="email" type="text" name="email"></input>
            <label>User Name</label>
        </div>
        <div class="inputBox">
          <input id="pwd" type="password" name="password"></input>
          <label>Password</label>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">SIGN IN</button>
        </div>
        <t t-esc="state.invalid"/>
      </form>
    </div>`;
}
