import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="/address" element={<SearchContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
