import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
        state.messages.splice(OFFSET_LIVE_CHAT,1);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
