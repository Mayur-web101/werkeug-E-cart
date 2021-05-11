const { Component,Store,mount,useState } = owl;
const { xml } = owl.tags;

export class Login extends Component
{
  constructor() {
        super(...arguments);
        this.state = useState({
        invalid: undefined
         });
    }
    
  OnLoginsubmit(ev){debugger
    const xhr = new window.XMLHttpRequest();
    xhr.open('POST', '/do_login');
    const formData = new FormData(ev.currentTarget);
    xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    xhr.onload = async () => {
        const response = JSON.parse(xhr.response);
            if(response.role === "client")
            {
                document.cookie = `session_id=${response.session_id}`;
                session_var.session_info = {
                    user_id: response.user_id,
                    is_valid: response.is_valid,
                    session_id: response.session_id,
                    role:response.role
                }
                alert("client Login")
                this.env.bus.trigger('login_changed');
                this.env.router.navigate({to:'Home'});
            }
            else if(response.role === "farmer")
            {
                document.cookie = `session_id=${response.session_id}`;
                session_var.session_info = {
                    user_id: response.user_id,
                    is_valid: response.is_valid,
                    session_id: response.session_id,
                    role:response.role
                }
                alert("Farmer Login")
                this.env.bus.trigger('login_changed');
                this.env.router.navigate({to:'Home'});
            }
        };
  } 


	static template = xml `
    <div class="container my-4">
      <h3>SIGN IN</h3>
      <form class="m" t-on-submit.prevent="OnLoginsubmit" style="height:30em">
        <div class="form-group">
          <label for="exampleInputEmail1">Email or Mobile</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="true"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"  name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="true"/>
          <t t-esc="state.invalid"/>
        </div>
        <button type="submit" class="btn btn-primary">SIGN IN</button>
      </form>  
    </div>`;
}

