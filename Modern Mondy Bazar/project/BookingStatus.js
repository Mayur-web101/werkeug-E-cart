const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class BookingStatus extends Component
{
    constructor() {
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('Book_status', this, this.Book_status);
      this.state = useState({
        data : []
      });
    }

    Book_status(ev){debugger
        this.valid = ev.valid;
        this.state.data = ev.valid;
    }

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
                                        </tr>   
                                </t>
                            </tbody>
                        </table>
                    </div>
        </div>`;
}
