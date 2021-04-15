const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class ViewStage extends Component
{
    constructor() {
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('viewStage', this, this.viewStage);
      this.state = useState({
            data: [],
      });
    }

    viewStage(ev){debugger
        this.valid = ev.valid;
        this.state.data = ev.valid;
    }
     
    Crop_booking(ev){
        this.env.router.navigate({ to: 'Crop_booking'})
    }

	static template = xml`

		<div>  
                <table class="table">
                <thead>
                    <tr>
                        <th class="card-title">QTY</th>
                        <th class="card-title">CROP NAME</th>
                        <th class="card-title">STAGE</th>
                        <th class="card-title">START DATE</th>
                        <th class="card-title">END DATE</th>
                        <th class="card-title">PRICE</th>
                        <th class="card-title">SEQUENCE</th>
   			<th class="card-title">IMAGES</th>
                        <th class="card-title">DESCRIPTION</th>
                        <th class="card-title">FINISH NOTE</th>
                    </tr>
                </thead>
                <tbody>
                    <t t-foreach="state.data" t-as="i">
                            <tr>
                                <td>
                                    <t t-esc="i[1]"></t>
                                </td>
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
                                    <t t-esc="i[8]"></t>
                                </td>
                                <td>
                                    <t t-esc="i[10]"></t>
                                </td>
                                <td>
                                    <t t-esc="i[11]"></t>
                                </td>
                                <td>
                                    <button type="submit" class="btn btn-success" t-on-click="Crop_booking">BOOK NOW</button>
                                </td>
                            </tr>
                        </t>   
                </tbody>
            </table>
        </div>`;
}
