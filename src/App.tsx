import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ClassComponents from './components/ClassComponents/ClassComponents.tsx';
import { FunctionalComponents } from './components/FunctionalComponents/FunctionalComponents.tsx';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const routes = createBrowserRouter([
  { path: '/functional-components', element: <FunctionalComponents /> },
  {
    path: '/class-components',
    element: (
      <Provider store={store}>
        <ClassComponents />
      </Provider>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
