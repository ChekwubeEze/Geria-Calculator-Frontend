import React from 'react';
import Calculator from './component/Calculator';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/page/layout';
import GetCalculatedValue from './component/GetValues/getValue';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetCalculatedValue />} />
          <Route path='/cal' element={<Calculator />} />
        </Route>
      </Routes>

    </div>
  );
};

export default App;