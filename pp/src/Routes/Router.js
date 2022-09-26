import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Board, MyPage, Skills } from './index';


const Router = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/skills" element={<Skills/>} />
    </Routes>
);


export default Router;