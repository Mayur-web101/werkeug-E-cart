const { Component,Store,mount } = owl;
const { xml } = owl.tags;

export class Stageactivity extends Component
{
	_onSubmitForm(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_insert_stageactivity');
        const formData = new FormData(ev.currentTarget);
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        xhr.onload = async () => {
            if (xhr.status === 200) {
            	alert("StageActivity Insert successfuly");
                this.env.router.navigate({to: 'Home'});
            }
        };
    }

	static template = xml`
		<div class="container my-4">   
			<h2>Stage Activity</h2>
			<form t-on-submit.prevent="_onSubmitForm">
			   <div class="form-group">
			    <label for="exampleInputPassword1">Crop Name</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="cropname" required="true"/>
			  </div>
			   <div class="form-group">
			    <label for="exampleInputPassword1" class="mr-3">Select Stage</label>
					  <select name="stage" class="form-select mb-3" aria-label="Default select example">
						  <option value="1">First</option>
						  <option value="2">Second</option>
						  <option value="3">Three</option>
						  <option value="4">Fourth</option>
						  <option value="5">Fifth</option>
					 </select>
				</div>
			  <div class="form-group">
			  	<label for="exampleInputEmail1">Start Date</label>
			    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="start_date" required="true"/>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">End Date</label>
			    <input type="date" class="form-control" id="exampleInputPassword1" name="end_date" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Price</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="price" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">sequence</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="sequence" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">video</label>
			    <input type="file" class="form-control" id="exampleInputPassword1" name="video"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Images</label>
			    <input type="file" class="form-control" id="exampleInputPassword1" name="images"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Description</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="description" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Finish_note</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="Finish_note" required="true"/>
			  </div>
  				<button type="submit" class="btn btn-primary">ADD</button>
			</form>
		</div>`;
}
