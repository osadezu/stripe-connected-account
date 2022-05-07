import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import CreateAccount from './components/CreateAccount';
import ListAccounts from './components/ListAccounts';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='create' element={<CreateAccount />} />
          <Route path='list' element={<ListAccounts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
