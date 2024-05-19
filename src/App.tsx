import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AppRoute } from "@/Models";
import { MainPage, SelectedVideoPage } from "@/Pages";

const routes: AppRoute[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/:id',
        element: <SelectedVideoPage />
    }

]

const router = createBrowserRouter(routes);

function App() {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
