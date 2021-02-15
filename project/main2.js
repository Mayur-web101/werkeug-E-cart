const { Component, mount, Store, qweb } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;

class Signup extends Component {
  static components = { Navbar };
  static template = xml`<div>
                  <h1>sign in here</h1></div>`;
}

class home extends Component {
  static components = { Navbar };

  static template = xml`
    <div>
         <link class="nav-link" data-mode="SignIn" t-on-click="SignIn">SignUp</link>
    </div>`;

    SignIn() {
        return this.env.router.navigate({ to: 'signup'});
    }

}


const ROUTES = [
    { name: "signup", path: "/signup", component: SignUp },
];



function makeEnvironment() {
    const env = { qweb };
    const router = new owl.router.Router(env, ROUTES);
    env.router.start();
    return env;
}


home.env = makeEnvironment()

function setup() {
    const app = new home();
    app.mount(document.body);
}

whenReady(setup);