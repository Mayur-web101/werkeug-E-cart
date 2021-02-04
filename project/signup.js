const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class SignUp extends Component
{
	static Sign_Template = xml`
	<div>
		<div>
				<h2>Sign Up</h2>
				<div>
					<label for="email" class="email">USERNAME</label>
					<input id="email" placeholder="Email OR Mobile" type="text"></input>
				</div>
				<div>
					<label for="password" class="password">PASSWORD</label>
					<input id="password" placeholder="password" type="password"></input>
				</div>
				<div>
					<label for="conpassword" class="conpassword">Confirm PASSWORD</label>
					<input id="conpassword" placeholder="confrim password" type="password"></input>
				</div>
				<div>
					<label for="mobile" class="mobile">MOBILE</label>
					<input id="mobile" class="mobile" placeholder="Mobile" type="number"></input>
				</div>
				<button>Sign Up</button>
		</div>
	</div>`;
}