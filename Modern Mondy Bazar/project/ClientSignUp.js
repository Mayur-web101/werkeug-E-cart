const { Component,Store,mount,useState } = owl;
const { xml } = owl.tags;

export class ClientSignUp extends Component
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
        <div class="container my-4">
            <h3> CLIENT SIGN UP</h3>
            <form t-on-submit.prevent="_onSubmitForm" style="height:30em">
                <div class="form-group">
                  <label for="examsubmitutEmail1">User Name</label>
                  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                  <label for="pwd">Password</label>
                  <input type="password" t-model="state.pwd" t-on-keyup="_onKeyUpPwd" id="pwd"  name="password" class="form-control"  placeholder="Password"/>
                </div>
                <div class="form-group">
                  <label for="repwd">Re-Enter Password</label>
                  <input type="password" t-model="state.repwd" t-on-keyup="_onKeyUpRePwd"  id="repwd"  name="password" class="form-control" placeholder="Password"/>
                </div>
                <div t-if="state.pwmatch === false">
                    <h4>Password Does not match</h4>
                </div>
                <div class="form-group">
                    <label for="mobile">Mobile</label>
                    <input type="text" name="mobile" placeholder="Mobile" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">SIGN UP</button>
            </form>
            <t t-esc="state.invalid"/>  
        </div>`;
}
