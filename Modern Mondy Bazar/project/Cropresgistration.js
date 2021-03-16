const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class Cropregistration extends Component
{
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
			<h2>Crop Registration Detail</h2>
			<form t-on-submit.prevent="_onSubmitForm">
			  <div class="form-group">
			    <label for="exampleInputPassword1">Crope Name</label>
			    <input type="text" name="cropname" class="form-control" id="exampleInputPassword1" placeholder="Crop Name"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Detail</label>
			    <input type="text" name="detail" class="form-control" id="exampleInputPassword1" placeholder="Detail"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Place</label>
			    <input type="text" name="place" class="form-control" id="exampleInputPassword1" placeholder="Place"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">QTY in KG</label>
			    <input type="number" name="qty" class="form-control" id="exampleInputPassword1" placeholder="QTY"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Category</label>
			    <input type="select" name="category" class="form-control" id="exampleInputPassword1" placeholder="Category"/>
			  </div>
			    <div class="form-group">
			    <label for="exampleInputPassword1">state</label>
			    <input type="select" name="state" class="form-control" id="exampleInputPassword1" placeholder="Category"/>
			  </div>
  				<button type="submit" class="btn btn-primary">ADD</button>
			</form>
		</div>`;
}

