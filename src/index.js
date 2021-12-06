import { React} from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store1 } from "./Redux/store1";
import { Provider } from 'react-redux';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store1}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> 
  // </React.StrictMode >
    
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();