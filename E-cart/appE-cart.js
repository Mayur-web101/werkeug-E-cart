const { Component,Store,mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;

const APP_TEMPLATE = xml /* xml */ `
<div>
    <div id="task-list">
        <h1>E-Cart</h1> 
        <input placeholder="Search" id="search" t-on-keyup="search"/>
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
    </div>
    <div id="cart">
        <table>
            <h2>CART</h2>
            <t t-set="total" t-value="0"/>
            <t t-foreach="cartData" t-as="i" t-key="i.id"> 
               <t t-set="total" t-value="total + tasks[i.poduct_id-1].Price"/>
                <tr>
               <td><span><t t-esc="tasks[i.poduct_id-1].Product1"/></span></td>
               <td><span><t t-esc="tasks[i.poduct_id-1].Price"/></span></td>
               <td><span class="task-list" t-att-id="i.poduct_id" t-on-click="deleteTask">🗑</span></td>
               </tr>
            </t>
            <span>Total: <t t-esc="total"/></span>
        </table>
    </div>
</div>`;

// Owl Components
class App extends Component 
{
    static template = APP_TEMPLATE;  
    addToCart(ev)
    {
        const poduct_id = ev.target.id;
        if (poduct_id && (!this.cartData.find(t => parseInt(t.poduct_id) == parseInt(poduct_id))))
         {
            const newTask = 
            {
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

    search()
    {
        var input, filter, mainDiv, div, childDiv, i, txtValue;
        input = document.getElementById("search").value;
        filter = input.toUpperCase();
        console.log(filter);
        mainDiv = document.getElementById("task-list");
        div = mainDiv.getElementsByClassName("task");
        for (i = 0; i < div.length; i++) 
        {
            childDiv = div[i].getElementsByTagName("span")[0];
            if (childDiv)
            {
                txtValue = childDiv.textContent || childDiv.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) 
                {
                    div[i].style.display = "";
                } 
                else 
                {
                    div[i].style.display = "none";
                }
            }
        }
    }
    cartData = useState([]);
    tasks = [
            {
                "id": 1,
                "Product1": "T-Shirt",
                "Price":200
            },
            {
                "id": 2,
                "Product1": "Shoes",
                "Price":300
            },
            {
                "id": 3,
                "Product1": "Watch",
                "Price":300
            }
        ];
}   
function makeStore() 
{
    const localState = window.localStorage.getItem("todoapp");
    const state = localState ? JSON.parse(localState) : initialState;
    const store = new Store({ state});
    store.on("update", null, () => {
    localStorage.setItem("todoapp", JSON.stringify(store.state));
});
return store;
}

function setup() 
{
    App.env.store = makeStore();
    const app=new App();
    app.mount(document.body);
}
whenReady(setup);