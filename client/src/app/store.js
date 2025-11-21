// import {configureStore} from "@reduxjs/toolkit" 
// import rootRedcuer from "./rootRedcuer";
// import { authApi } from "@/features/api/authApi";
// import { courseApi } from "@/features/api/courseApi";
// import { purchaseApi } from "@/features/api/purchaseApi";
// import { courseProgressApi } from "@/features/api/courseProgressApi";

// export const appStore = configureStore({
//     reducer: rootRedcuer,
//     middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware, courseApi.middleware, purchaseApi.middleware, courseProgressApi.middleware)
// });

// const initializeApp = async () => {
//     await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
// }
// initializeApp();
// src/redux/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer"; // fixed typo
// import { authApi } from "@/features/api/authApi";
// import { courseApi } from "@/features/api/courseApi";
// import { purchaseApi } from "@/features/api/purchaseApi";
// import { courseProgressApi } from "@/features/api/courseProgressApi";

// export const appStore = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       authApi.middleware,
//       courseApi.middleware,
//       purchaseApi.middleware,
//       courseProgressApi.middleware
//     ),
// });

// // Optional: preload the authenticated user on app start
// const initializeApp = async () => {
//   try {
//     await appStore.dispatch(
//       authApi.endpoints.loadUser.initiate(undefined, { forceRefetch: true })
//     );
//   } catch (error) {
//     console.error("Failed to load user on startup:", error);
//   }
// };

// initializeApp();

// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Correct path
import { authApi } from "../features/api/authApi";
import { courseApi } from "../features/api/courseApi";
import { purchaseApi } from "../features/api/purchaseApi";
import { courseProgressApi } from "../features/api/courseProgressApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      courseApi.middleware,
      purchaseApi.middleware,
      courseProgressApi.middleware
    ),
});

// Optional: pre-load user
const initializeApp = async () => {
  await appStore.dispatch(authApi.endpoints.loadUser.initiate({}, { forceRefetch: true }));
};
initializeApp();
