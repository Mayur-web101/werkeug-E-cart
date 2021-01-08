const { Component, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useState } = owl.hooks;

// Owl Components
  class App extends Component {
  static template = xml/* xml */ `
    <div class="task-list">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <div class="task">
            	<tr>
                	<td><span><t t-esc="task.Product1"/></span></td>
                	<td><span><t t-esc="task.Price"/></span></td>
                	<td><button t-att-id="task.Product1+task.Price" t-on-click="addToCart">ADD TO CARD</button></td>
                </tr>
            </div>
        </t>
        <t t-foreach="cartData" t-as="data" t-key="data.id">
        	<span><t t-esc="data.title"/></span>
        </t>
    </div>`;

addToCart(ev) {
    // 13 is keycode for ENTER
        const title = ev.target.id;

        if (title) 
        {
            const newTask = {
                title: title,
            };
            console.log(title);
            this.cartData.push(newTask);
        }
}
  cartData = useState([]);
  tasks = [
    {
        "id": "101",
        "Product1": "T-Shirt",
        "Price":"200"
    },
    {
        "id": "102",
        "Product1": "Shoes",
        "Price":"300"
    },
    {
        "id": "103",
        "Product1": "Watch",
        "Price":"300"
    }
];
}


// Setup code
function setup() {
  const app=new App();
  app.mount(document.body);
}

whenReady(setup);