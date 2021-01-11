const { Component, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;

const APP_TEMPLATE = xml /* xml */ `
<div class="todo-app">
<input placeholder="Search" t-on-keyup="Search"/>
<div class="task-list" t-on-delete-task="deleteTask">
    <t t-foreach="tasks" t-as="task" t-key="task.id">
    <div class="task">
        <table>
            <tr>
            <td><span><t t-esc="task.Product1"/></span></td>
            <td><span><t t-esc="task.Price"/></span></td>
            <td><button t-att-id="task.id" t-on-click="addToCart">ADD TO CARD</button></td>
            </tr>
        </table>
    </div>
    </t>
    <table>
    <t t-foreach="cartData" t-as="data" t-key="data.id">
        <tr>
        <td><span><t t-esc="tasks[data.poduct_id-1].Product1"/></span></td>
        <td><span><t t-esc="tasks[data.poduct_id-1].Price"/></span></td>
        <td><span class="task-list" t-att-id="data.poduct_id" t-on-click="deleteTask">🗑</span></td>
        </tr>       
    </t>
    </table>
</div>
</div>`;

// Owl Components
class App extends Component {
static template = APP_TEMPLATE;  
addToCart(ev)
{
// 13 is keycode for ENTER
    const poduct_id = ev.target.id;
    if (poduct_id && (!this.cartData.find(t => parseInt(t.poduct_id) == parseInt(poduct_id)))) 
    {
        const newTask = {
            poduct_id: poduct_id,
        };
        this.cartData.push(newTask);
    }
}
deleteTask(ev)
{
    const index = this.cartData.findIndex(t => t.poduct_id === ev.target.id);
    this.cartData.splice(index, 1);
}
Search()
{

}
cartData = useState([]);
tasks = [
            {
                "id": "1",
                "Product1": "T-Shirt",
                "Price":"200"
            },
            {
                "id": "2",
                "Product1": "Shoes",
                "Price":"300"
            },
            {
                "id": "3",
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