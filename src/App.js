import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import UsersDetails from './components/UsersDetails';
import Main from './routes/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'users/:id',
          element: <UsersDetails></UsersDetails>,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
