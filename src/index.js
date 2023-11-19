import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header/Header';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import PizzaMenu from './components/Pizza-Menu/PizzaMenu';
import SkillCount from './components/SkillCount/SkillCount';
import MenuItem from './components/MenuI-Item/MenuItem';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header></Header>
    <About></About>
    <Offer></Offer>
    <PizzaMenu></PizzaMenu>
    <SkillCount></SkillCount>
    <MenuItem></MenuItem>
    <Footer></Footer>
    </React.StrictMode>
);
