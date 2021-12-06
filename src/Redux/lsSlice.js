import { createSlice } from "@reduxjs/toolkit";

export const lSlice = createSlice({
  name: "localStorage",
  initialState: {
    title:"",desc:"",date:"",subt:[]
  },
  reducers: {
      addToLocal: (state = initialState) => {
          
        const value = localStorage.getItem(key);
          
     let taskItems = null; // Initialize todoItems variable to be assigned a final value later on

     // Using try catch to avoiding exception to be thrown if the JSON string is invalid
     // It may be a normal string and we can't JSON.parse it
     try {
       const parsedJSON = JSON.parse(value);

       if (Array.isArray(parsedJSON)) {
           taskItems = parsedJSON;
           state= taskItems
       }
     } catch (e) {
       // If it's not a valid JSON string, then we should initialize an empty array for todoItems
       taskItems = [];
     }
    },
    getFromLocal: (state) => {
      state.value -= 1;
    },
    
  },
});

export const { increment, decrement, incrementByAmount } = lSlice.actions;

export default lSSlice.reducer;
