import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Carousel from './components/Carousel';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>
    </Provider>
  );
};

export default App;
