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

ReactDOM.render(
    
    <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>   
    </React.StrictMode>, 
    document.getElementById("root")
); 

serviceWorker.unregister(); 