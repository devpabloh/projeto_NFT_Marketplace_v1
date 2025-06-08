import { Outlet } from "react-router";

import { Header } from "./Header";
import { Footer } from "./Footer";



export function AuthLayout(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}