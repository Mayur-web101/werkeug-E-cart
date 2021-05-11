const { Component,Store,mount,useState} = owl;
const { xml } = owl.tags;


export class NavBar extends Component
{

  constructor() {
    super(...arguments);
    this.env.bus.on('login_changed', this, this._loginChanged);
    this._updateState();
  }

  _updateState() {
        this.state = useState({
            user_id: session_var.session_info.user_id,
            is_valid: session_var.session_info.is_valid,
            session_id: session_var.session_info.session_id,
            role: session_var.session_info.role,
            book: null,

        });
    }

  home()
  {
     this.env.router.navigate({to: 'Home'});
  }

  login(){
    this.env.router.navigate({ to: 'LOGIN' });
  }

  signup(){
    this.env.router.navigate({ to: 'SIGN_UP' });
  }

  Cropregistration(ev){
    this.env.router.navigate({ to: 'Cropregistration' });
    
  }
  Stageactivity(ev){
    this.env.router.navigate({ to: 'Stageactivity' });
    
  }
  Crop_booking(ev){
    this.env.router.navigate({ to: 'Crop_booking'})
  }
  orderlist(ev)
  {
    this.env.router.navigate({ to: 'orderlist'})
  }

  onClickOrderDetails(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_order_details');
        xhr.send(JSON.stringify({'session_id': 'hii'}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            console.log(response.details);
            this.env.bus.trigger('dataChange', {valid: response.details});
        }
        this.env.router.navigate({ to: 'orderlist'})
    }

     onClickCropDetails(ev){debugger
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_crop_details');
        xhr.send(JSON.stringify({'session_id': 'hii'}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            console.log(response.details);
            this.env.bus.trigger('cropdataChange', {valid: response.details});
        }
        this.env.router.navigate({ to: 'Croplist'})
    }

     ViewStage(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_stage_details');
        xhr.send(JSON.stringify({'session_id': 'hii'}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            
            this.env.bus.trigger('viewStage', {valid: response.details});
        }
        this.env.router.navigate({ to: 'ViewStage'})
    }

    onClickPendingRequest(ev){
      alert("orderlist");
      const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_bookingdetails');
        xhr.send(JSON.stringify({'session_id': 'hii'}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            this.env.bus.trigger('Book_Details', {valid: response.details});
            this.state.book = response.details;

        }
       this.env.router.navigate({ to: 'orderlist'}) 
    }

    onClickBookStatus(ev){
      alert("status");
      const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_bookingdetails');
        xhr.send(JSON.stringify({'session_id': 'hii'}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            this.env.bus.trigger('Book_status', {valid: response.details});
            this.state.book = response.details;

        }
       this.env.router.navigate({ to: 'BookingStatus'}) 
    }
 

  async logout(ev){
            this.valid = ev.valid;
            const xhr = new window.XMLHttpRequest();
            xhr.open('POST', '/do_logout');
            xhr.send(JSON.stringify({'session_id': this.state.session_id}));
            xhr.onload = async () => {
                const response = JSON.parse(xhr.response);
                if (response.logout === 'success') {
                    document.cookie = 'session_id=null';
                    session_var.session_info = {
                        user_id: null,
                        is_valid: false,
                        session_id: null,
                    };
                    this._updateState();
                    this.env.router.navigate({ to: 'Homebeforelogin' });
                }
            }
        }

  _loginChanged (ev) {
       this._updateState(); 
    }
	static template = xml `
    <nav class="navbar navbar-dark bg-dark" style="border:1px solid #15420A;">
        <div>
          <p><h3 id="h" class="text-white bg-dark">Modern Mondy Bazar</h3></p>
        </div>
        <t t-if="state.user_id and state.is_valid">
          <t t-if="state.role == 'client'">
            <form class="navbar-form navbar-left">
                  <button type="button" t-on-click="home" class="btn btn-default navbar-btn mx-2">HOME</button>
                  <button type="button" t-on-click="onClickCropDetails" class="btn btn-default navbar-btn mx-2">CROPE DETAIL</button>
                  <button type="button" t-on-click="Crop_booking" class="btn btn-default navbar-btn mx-2">BOOKING</button>
                  <button type="button" t-on-click="onClickBookStatus" class="btn btn-default navbar-btn mx-2">REQUEST STATUS</button>
                  <button type="button" t-on-click="logout" class="btn btn-default navbar-btn mx-2">LOGOUT</button>
            </form>
          </t>
          <t t-else=""> 
              <ul class="nav nav-pills">
                <button type="button" t-on-click="home" class="btn btn-default navbar-btn mx-2">HOME</button>
                <button type="button" t-on-click="Cropregistration" class="btn btn-default navbar-btn mx-2">CROP REGISTRATION</button>
                <button type="button" t-on-click="Stageactivity" class="btn btn-default navbar-btn mx-2">STAGE ACTIVITY</button>
                <button type="button" t-on-click="onClickPendingRequest" class="btn btn-default navbar-btn mx-2">ORDER LIST</button>
            </ul>
                <form class="navbar-form navbar-left">
                  <button type="button" t-on-click="logout" class="btn btn-default navbar-btn">LOGOUT</button>
                </form>
          </t>
        </t>
        <t t-else="">
            <form class="navbar-form navbar-left">
              <button type="button"  t-on-click="login"  class="btn btn-default mx-2">SIGN IN </button>
              <button type="button"  t-on-click="signup"  class="btn btn-default mx-2 ">SIGN UP</button>
            </form>
        </t>  
    </nav> `;    
}
