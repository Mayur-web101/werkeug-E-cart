const { Component,Store,mount, useState} = owl;
const { xml } = owl.tags;

export class ViewStage extends Component
{
    constructor() {
      super(...arguments);
      // event_type, owner, callback
      this.env.bus.on('dataChange', this, this.dataChange);
    }

    dataChange(ev){debugger
        this.valid = ev.valid
    }


    static template = xml`
        <div class="container my-4">   
            <h2>Crop Registration Detail</h2>
            <form>
                  <button type="submit" class="btn btn-primary">ADD</button>
            </form>
        </div>`;
}
