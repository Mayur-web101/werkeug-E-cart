const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class Orderlist extends Component
{
    constructor() {
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('cropdataChange', this, this.cropdataChange);
    }

    cropdataChange(ev){debugger
        this.valid = ev.valid;
    }


	static template = xml`

		<div class="container">  
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Crop Name</th>
                                    <th>Address</th>
                                    <th>Mobile No</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <t t-foreach="state.data" t-as="i">
                                        <tr>
                                            <td>
                                                <t t-esc="i.name"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i.address"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i.mobile"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i.qty"></t>
                                            </td>
                                            <td>
                                                <t t-esc="i.date"></t>
                                            </td>
                                            <td>
                                                <button type="submit" class="btn btn-success">APPROVE</button>
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
