'use client'
import HomeComp from './components/home';
import Detail from './components/detail';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeComp} />
        <Route path="/detail" Component={Detail} />
      </Routes>
    </BrowserRouter>
  )
}
