import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import './app/layout/styles.css'
import { store, StoreContext } from './app/stores/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router}/>
  </StoreContext.Provider>,
document.getElementById('root')
);