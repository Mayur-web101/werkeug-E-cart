const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class Login extends Component
{
	
	static template = xml `
	<div>	
			<div>
					<label for="email" class="email">USERNAME</label>
					<input id="email" placeholder="Email OR Mobile" type="text"></input>
				</div>
				<div>
					<label for="password" class="password">PASSWORD</label>
					<input id="password" placeholder="password" type="password"></input>
				</div>
	</div>`;
}
