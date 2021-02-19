const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class CropeDetail extends Component
{
	static template = xml`
		<div class="box">  
			<h2>Crope Registration Detail</h2>
				<p></p>
			<form>    
				<div class="inputBox">
					<input id="Farmer_Id"  type="number"></input>
					<label>Farmer_Id</label>
				</div>
				<div class="inputBox">
					<input id="Crope_Name" type="text"></input>
					<label>Crope Name</label>
				</div>
				<div class="inputBox">
					<input id="Detail" type="text"></input>
					<label>Detail</label>
				</div>
				<div class="inputBox">
					<input id="place" type="text"></input>
					<label>Place</label>
				</div>
				<div class="inputBox">
					<input id="qty" type="number"></input>
					<label>QTY</label>
				</div>
				<label>Categary:</label>
				<label class="container">gren 
				  <input type="checkbox" checked="checked">
				</label>
				<div class="inputBox">
					<input id="qty" type="button"></input>
					<label>Key </label>
				</div>
				<button type="button" class="btn btn-primary">ADD</button>
			</form>
		</div>`;
}
