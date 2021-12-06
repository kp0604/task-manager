import Nabar from "./components/Navbar";
import NewTask from "./components/Newtask";
import Inprogress from "./components/Inprogress";
import Completed from "./components/Completed";
import Archived from "./components/Archived";
import { useDispatch, useSelector } from "react-redux";
import { get, getcom, addcom } from "./Redux/actions";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const Tasks = useSelector((state) => state.Local);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatching get effect");
    dispatch(get());
    console.log("dispatched get effect");
  }, []);

  useEffect(() => {
    console.log("dispatching addcom effect");

    dispatch(addcom(Tasks.filter((task) => task.isCompleted === true)));
    console.log("dispatched addcom effect");
    console.log("dispatching getcom effect");
    dispatch(getcom());
    console.log("dispatched getcom effect");
  }, [Tasks]);

  return (
    <div>
      <Nabar />
      <Routes>
        <Route path="/" element={<NewTask />}></Route>
        <Route path="/inprogress" element={<Inprogress />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/archived" element={<Archived />}></Route>
      </Routes>
    </div>
  );
}

export default App;
