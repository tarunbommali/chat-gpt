import { createBrowserRouter, Outlet } from "react-router-dom";

import Chat from "./components/Chat";

const AppLayout = () => <Outlet />

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Chat />,
      },
    ],
  },
]);
export default App;
