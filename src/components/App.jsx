import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appbar from "./Appbar";
import Container from "./Container";
import image from '../images/marvel-supers.webp';
const HomePage = lazy(() => import("./HomePage" /*webpackChankName: "home-view" */));
const SuperHeroInfo = lazy(() => import("./SuperHeroInfo"));
const NewSuperHero = lazy(() => import('./NewSuperHero'));
const NotFoundView = lazy(() => import('./NotFoundView/NotFoundView'));

function App() {

    return <div>
        <Appbar />
        <div className="backgraud">
            <img src={image} className="bgimage" alt='background' width={'auto'} height={'auto'}/>
        </div>
        <Container>
        <Suspense fallback={<h2 className="loader">Loading...</h2>}>   
            <Routes>
                <Route path="/" element={<HomePage/>} exact/>
                    
                <Route path="/:superId" element={<SuperHeroInfo />} exact/>
                    
                <Route path="/newsuperhero" element={<NewSuperHero/>} exact />
                    
                <Route element={<NotFoundView />} />
                
            </Routes>
        </Suspense>
        </Container>
        <ToastContainer />
    </div>
}

export default App;