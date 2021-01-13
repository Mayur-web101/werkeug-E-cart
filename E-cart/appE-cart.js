const { Component,Store,mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;

const actions = {
  addToCart({ state }, poduct_id) {
        if (poduct_id && (!state.cartData.find(t => parseInt(t.poduct_id) == parseInt(poduct_id))))
         {
            const newTask ={
                poduct_id: poduct_id,
            };
            state.cartData.push(newTask);
         }
  },
  
  deleteTask({ state }, poduct_id) 
  {
     const index = state.cartData.findIndex((t) => t.poduct_id == poduct_id);
        state.cartData.splice(index, 1);
  },
};   
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
            <t t-if="cartData">
                <t t-foreach="cartData" t-as="i">
                   <t t-set="total" t-value="total + tasks[i.poduct_id-1].Price"/>
                   <tr>
                   <td><span><t t-esc="tasks[i.poduct_id-1].Product1"/></span></td>
                   <td><span><t t-esc="tasks[i.poduct_id-1].Price"/></span></td>
                   <td><span class="task-list" t-att-id="i.poduct_id" t-on-click="deleteTask">🗑</span></td>
                   </tr>
                </t>
            </t>
            <span>Total: <t t-esc="total"/></span>
        </table>
    </div>
</div>`;

const initialState = {
    cartData: []
};
// Owl Components

class App extends Component 
{
    static template = APP_TEMPLATE;  
    cartData = useStore((state) => state.cartData) 
    dispatch = useDispatch();

    addToCart(ev)
    {
        if(ev.target.id)
        {
            this.dispatch("addToCart",ev.target.id)
        }
    }

    deleteTask(ev)
    {
        this.dispatch("deleteTask",ev.target.id)
    }

    search()
    {
        var input, filter, mainDiv, div, childDiv, i, txtValue;
        input = document.getElementById("search").value;
        filter = input.toUpperCase();
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
   const localState = window.localStorage.getItem("shopping");
   const state = localState ? JSON.parse(localState) : initialState;
   const store = new Store({ state, actions });
   store.on("update", null, () => {
       localStorage.setItem("shopping", JSON.stringify(store.state));
   });
   debugger;
return store;
}

function setup() 
{
     owl.config.mode = "dev";
    App.env.store = makeStore();
    const app=new App();
    app.mount(document.body);
}
whenReady(setup);