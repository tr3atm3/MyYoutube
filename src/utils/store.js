import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    videos: videosSlice,
  },
});

export default store;
