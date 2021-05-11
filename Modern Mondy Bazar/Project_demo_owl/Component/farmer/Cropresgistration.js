const { Component,Store,mount, useState } = owl;
const { xml } = owl.tags;

export class Cropregistration extends Component
{
  constructor() {
    super(...arguments);
    this.state = useState({
    	user_id: session_var.session_info.user_id,
    });
  }
	_onSubmitForm(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_insert_cropdetail');
        const formData = new FormData(ev.currentTarget);
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        xhr.onload = async () => {
            if (xhr.status === 200) {
            	alert("Cropregistar successfuly");
                this.env.router.navigate({to: 'Home'});
            }
        };
    }

	static template = xml`
		<div class="container my-4">   
			<h2 align="center">CROP REGISTRATION</h2>
			<form t-on-submit.prevent="_onSubmitForm">
			  <div class="form-group">
			    <label for="exampleInputPassword1">Crop Name</label>
			    <input type="hidden" name="farmer_id" t-att-value="state.user_id" />
			    <input type="text" name="cropname" class="form-control" id="exampleInputPassword1" placeholder="Crop Name" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Detail</label>
			    <input type="text" name="detail" class="form-control" id="exampleInputPassword1" placeholder="Detail" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Place</label>
			    <input type="text" name="place" class="form-control" id="exampleInputPassword1" placeholder="Place" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">QTY In KG</label>
			    <input type="number" name="qty" class="form-control" id="exampleInputPassword1" placeholder="QTY" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Category</label>
			    <input type="select" name="category" class="form-control" id="exampleInputPassword1" placeholder="Category" required="true"/>
			  </div>
			    <div class="form-group">
			    <label for="exampleInputPassword1">state</label>
			    <input type="select" name="state" class="form-control" id="exampleInputPassword1" placeholder="state" required="true"/>
			  </div>
  				<button type="submit" class="btn btn-primary">ADD</button>
			</form>
		</div>`;
}

