import Navbar from "./components/Navbar";
import UserLIst from "./components/UserLIst";
// redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
          <Navbar/>
          <UserLIst/>
      </Provider>
  );
}

export default App;
