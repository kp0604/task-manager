import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    edit: (state, action) => {
    console.log(action.payload.task)
      state.tasks.forEach((task, idx) => {
        if (task.uid === action.payload.task.uid) {
          state.tasks[idx] = action.payload.task;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    del: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.uid !== action.payload.uid
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { add, edit, del } = tasksSlice.actions;
export default tasksSlice.reducer;
