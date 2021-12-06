import { combineReducers } from "redux";

const Local = (state = [], action) => {
  switch (action.type) {
    case "add":
      console.log(state, "inadd");
      console.log("payl", action.payload);

      if (action.payload) {
        state = [action.payload, ...state];
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      console.log(state);

      return state;

    case "get":
      console.log(state, "inget");
      let value = localStorage.getItem("tasks");
      if (value === null) {
        localStorage.setItem("tasks", JSON.stringify(state));
        value = localStorage.getItem("tasks");
      }

      console.log("value", value);
      let taskItems = null;

      try {
        const parsedJSON = JSON.parse(value);

        if (Array.isArray(parsedJSON)) {
          taskItems = parsedJSON;
          state = taskItems;
          console.log("getstateif", state);
          return state;
        }
      } catch (e) {
        taskItems = [];
        state = taskItems;
        console.log("getstatecatch", state);
        return state;
      }
      break;

    case "addsub":
      state[action.payload.id].subt = action.payload.sub;
      state[action.payload.id].subAdd = action.payload.subAdd;
      state = [...state];
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;

    case "togDone":
      console.log(action.payload);
      state[action.payload.taskid].subt[action.payload.idx].isDone =
        !state[action.payload.taskid].subt[action.payload.idx].isDone;
      console.log(
        state[action.payload.taskid].subt.filter((sub) => sub.isDone === false)
      );
      if (
        state[action.payload.taskid].subt.filter((sub) => sub.isDone === false)
          .length === 0
      ) {
        state[action.payload.taskid].isCompleted = true;
        console.log("yes");
      }
      state = [...state];
      localStorage.setItem("tasks", JSON.stringify(state));
      console.log(state);
      return state;

    default:
      console.log("in def");
      return state;
  }
};
const Completed = (state = [], action) => {
  switch (action.type) {
    case "addcom":
      console.log(state, "inaddcom");
      console.log("payl", action.payload);

      if (action.payload) {
        state = action.payload;
      }

      localStorage.setItem("Comtasks", JSON.stringify(state));
      console.log(state);

      return state;

    case "getcom":
      console.log(state, "ingetcom");
      let value = localStorage.getItem("Comtasks");
      if (value === null) {
        localStorage.setItem("Comtasks", JSON.stringify(state));
        value = localStorage.getItem("Comtasks");
      }

      console.log("value", value);
      let ComtaskItems = null;

      try {
        const parsedJSON = JSON.parse(value);

        if (Array.isArray(parsedJSON)) {
          ComtaskItems = parsedJSON;
          state = ComtaskItems;
          console.log("getstateif", state);
          return state;
        }
      } catch (e) {
        ComtaskItems = [];
        state = ComtaskItems;
        console.log("getstatecatch", state);
        return state;
      }
      break;

    default:
      console.log("in def");
      return state;
  }
};

const reducer = combineReducers({ Local: Local, Completed: Completed });
export default reducer;
