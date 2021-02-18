const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class SignUp extends Component
{
	static template = xml`
		<div class="box">  
			<h2>SIGN UP</h2>
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
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>Conf Password</label>
				</div>
				<div class="inputBox">
					<input id="password" type="password"></input>
					<label>Mobile No</label>
				</div>
				<div class="inputBox">
					<select class="form-control">
						<option>Select Role</option>
						<option>Farmer</option>
						<option>Customer</option>
						<option>Admin</option>
					</select>
				</div>
				<button type="button" class="btn btn-primary">SIGN UP</button>
			</form>
		</div>`;
}
