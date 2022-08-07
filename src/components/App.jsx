import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Appbar";
import Container from "./Container";
const HomePage = lazy(() => import("./HomePage" /*webpackChankName: "home-view" */));
const SuperHeroInfo = lazy(() => import("./SuperHeroInfo"));
const NewSuperHero = lazy(() => import('./NewSuperHero'));
const NotFoundView = lazy(() => import('./NotFoundView/NotFoundView'));

function App() {

    return <div>
        <Appbar />
        <Container>
        <Suspense fallback={<h2>Loading...</h2>}>   
            <Routes>
                <Route path="/superheros" element={<HomePage/>} exact/>
                    
                <Route path="/superheros/:superId" element={<SuperHeroInfo />} exact/>
                    
                <Route path="/superheros/newsuperhero" element={<NewSuperHero/>} exact />
                    
                <Route element={<NotFoundView />} />
                
            </Routes>
        </Suspense>
        </Container>
    </div>
}

export default App;