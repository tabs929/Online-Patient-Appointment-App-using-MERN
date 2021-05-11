import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux"
import { createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers , compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
               <App/>
         </BrowserRouter>  
    </Provider>,
    document.getElementById('root'));