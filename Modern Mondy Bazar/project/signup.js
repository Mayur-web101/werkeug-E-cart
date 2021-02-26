const { Component,Store,mount,useState} = owl;
const { xml } = owl.tags;

export class SignUp extends Component
{
	
	 _onSubmitForm(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_signup');
        const formData = new FormData(ev.currentTarget);
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        xhr.onload = async () => {
            if (xhr.status === 200) {
                this.env.router.navigate({to: 'LOGIN'});
            }
        };
    }
    constructor() {
        super(...arguments);
        this.state = useState({
        pwd: "",
        repwd: "",
        pwmatch: undefined
         });
    }
    _checkPwd() {
        if (!this.state.pwd || !this.state.repwd) {
            return;
        }
        if (this.state.pwd === this.state.repwd) {
            this.state.pwmatch = true;
            this.el.querySelector('button[type="submit"]').removeAttribute('disabled');
        } else {
            this.state.pwmatch = false;
            this.el.querySelector('button[type="submit"]').setAttribute('disabled', true);
        }
    }
    _onKeyUpRePwd(ev) {
        this._checkPwd();
    }

    _onKeyUpPwd(ev) {
        this._checkPwd();
    }

	static template = xml`
		<div class="box">  
			<h2>SIGN UP</h2>
				<p></p>
				<form action="/signup" t-on-submit.prevent="_onSubmitForm">
				    <div class="inputBox">
					   <input id="email" name="email"  type="text"></input>
					   <label>User Name</label>
				    </div>
				    <div class="inputBox">
					   <input name="password" type="password" class="form-control" t-model="state.pwd" t-on-keyup="_onKeyUpPwd" id="pwd"></input>
					   <label for="pwd">Password</label>
				    </div>
				    <div class="inputBox">
					   <input name="Confpassword" type="password" class="form-control" t-model="state.repwd" t-on-keyup="_onKeyUpRePwd"  id="repwd"></input>
					   <label for="repwd">Conf Password</label>
				    </div>
				    <div t-if="state.pwmatch === false">
                	   <h4>Password Does not match</h4>
            	    </div>
				    <div class="inputBox">
					   <input id="password"  name="mobileno" type="text"></input>
					   <label>Mobile No</label>
				    </div>
				    <button type="submit" class="btn btn-primary">SIGN UP</button>
			    </form>
		</div>`;
}
