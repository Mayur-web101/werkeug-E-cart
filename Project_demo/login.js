const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class Login extends Component
{
	static template = xml `
	<div class="box">  
  <h2>SIGN IN</h2>
  <p></p>
  <form>    
        <div class="inputBox">
          <input id="email"  type="text"></input>
          <label>User Name</label>
        </div>
        <div class="inputBox">
          <input id="password" type="password"></input>
          <label>Password</label>
        </div>
        <div>
          <button type="button" class="btn btn-primary">SIGN IN</button>
        </div>
  </form>
</div>`;
}
