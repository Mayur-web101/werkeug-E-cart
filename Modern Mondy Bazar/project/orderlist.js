const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class orderlist extends Component
{
    constructor() {debugger
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('Book_Details', this, this.Book_Details);
      this.state = useState({
        data : []
      });
    }

    Book_Details(ev){debugger
        this.valid = ev.valid;
        this.state.data = ev.valid;
    }

    onClickApprove(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_approve');
        xhr.send(JSON.stringify({'b_id': ev.target.id}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            if(response == "confirm"){
                this.env.router.navigate({to: 'orderlist'});
            }
        }
    }
     /*onClickApprove(ev){
        alert("delete")
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_cancel');
        xhr.send(JSON.stringify({'b_id': ev.target.id}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            if(response == "cancel"){
                this.env.router.navigate({to: 'orderlist'});
            }
        }
    }*/

	static template = xml`

		<div class="container">  
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Mobile No</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <t t-foreach="state.data" t-as="i">
                                        <tr>
                                            <td>
                                                <t t-esc="i[2]"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i[3]"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i[4]"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i[5]"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i[6]"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i[7]"></t>
                                            </td>
                                            <td>
                                                <button type="submit" class="btn btn-success" t-att-id="i[0]" t-on-click="onClickApprove">APPROVE</button>
                                            </td>
                                             <td>
                                                <button type="submit" class="btn btn-success">CANCELE</button>
                                            </td>
                                        </tr>   
                                </t>
                            </tbody>
                        </table>
                    </div>
        </div>`;
}
