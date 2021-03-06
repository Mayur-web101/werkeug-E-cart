const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class Cropedetail extends Component
{
	static template = xml`
		<div class="container my-4">   
			<h2>Crop Registration Detail</h2>
			<form>
			  <div class="form-group">
			  	<label for="exampleInputEmail1">Farmer Id</label>
			    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Farmer_ID"/>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Crope Name</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Crop Name"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Detail</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Detail"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Place</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Place"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">QTY in KG</label>
			    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="QTY"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Category</label>
			    <input type="select" class="form-control" id="exampleInputPassword1" placeholder="Category"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Keyborad</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Keyboard"/>
			  </div>
  				<button type="submit" class="btn btn-primary">ADD</button>
			</form>
		</div>`;
}
