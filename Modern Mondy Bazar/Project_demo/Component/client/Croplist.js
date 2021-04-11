const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class Croplist extends Component
{
    constructor() {
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('cropdataChange', this, this.cropdataChange);
      this.state = useState({
            data: [],
      });
    }

    cropdataChange(ev){debugger
        this.valid = ev.valid;
        this.state.data = ev.valid;
    }

    onCLickViewStageDetails(ev){
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', '/do_stage_details');
        xhr.send(JSON.stringify({'cropdetail_id': ev.target.id}));
        xhr.onload = async () => {
            const response = JSON.parse(xhr.response);
            this.env.bus.trigger('viewStage', {valid: response.details});
        }
        this.env.router.navigate({ to: 'ViewStage'})
    }


	static template = xml`

		<div>  
                <table class="table">
                <thead>
                    <tr>
                        <th class="card-title">CROP NAME</th>
                        <th class="card-title">DETAIL</th>
                        <th class="card-title">PLACE</th>
                        <th class="card-title">QTY</th>
                        <th class="card-title">CATEGORY</th>
                        <th class="card-title">STATE</th>
                    </tr>
                </thead>
                <tbody>
                    <t t-foreach="state.data" t-as="i">
                            <tr>
                                <td>
                                    <t t-esc="i.c_name"></t>
                                </td>
                                 <td>
                                    <t t-esc="i.detail"></t>
                                </td>
                                <td>
                                    <t t-esc="i.place"></t>
                                </td>
                                <td>
                                    <t t-esc="i.qty"></t>
                                </td>
                                <td>
                                    <t t-esc="i.category"></t>
                                </td>
                                <td>
                                    <t t-esc="i.state"></t>
                                </td>
                                <td>
                                    <button type="submit" t-att-id="i.cropdetail_id" class="btn btn-success" t-on-click="onCLickViewStageDetails">VIEW STAGE DETAIL</button>
                                </td>
                            </tr>   
                    </t>
                </tbody>
            </table>
        </div>`;
}
