const { Component,Store,mount,useState} = owl;
const { xml } = owl.tags;

export class Crop_booking extends Component
{
	constructor() {debugger
    super(...arguments);
    this.state = useState({
    	user_id: session_var.session_info.user_id,
    });
  }
	_onSubmitForm(ev){debugger
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_booking');
        const formData = new FormData(ev.currentTarget);
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        xhr.onload = async () => {
            if (xhr.status === 200) {
            	alert("Crop Booking successfully");
                this.env.router.navigate({to: 'Home'});
            }
        };
    }

	static template = xml`
		<div class="container my-4">   
			<h2 align="center">CROP BOOKING</h2>
			<form t-on-submit.prevent="_onSubmitForm">
			  <div class="form-group">
			  	<label for="exampleInputEmail1">Name</label>
			  	<input type="hidden" name="user_id" t-att-value="state.user_id" />
			  	<input type="hidden" name="c_id" t-att-value="state.c_id" />
			    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required="true"/>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Address</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="address" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Mobile</label>
			    <input type="tel" class="form-control" id="exampleInputPassword1" name="mobile" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">QTY</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" name="qty" required="true"/>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">date</label>
			    <input type="date" class="form-control" id="exampleInputPassword1" name="date" required="true"/>
			  </div>
  				<button type="submit" class="btn btn-primary">BOOK</button>
			</form>
		</div>`;
}
