const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = { ...action.payload, ...state };

      //state = Object.assign(state,action.payload)
      return {
        ...state,
        ...action.payload, // it is working we should return an object.
      };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
