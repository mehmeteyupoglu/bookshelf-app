import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter} from "react-router-dom"
import store from "./state/store"
import {Provider} from "react-redux"
import history from "./history"

ReactDOM.render(
    
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={history}>
        <App/>
    </BrowserRouter>   
    </Provider>
    </React.StrictMode>, 
    document.getElementById("root")
); 

serviceWorker.unregister(); 