
import { FC } from "react"
import * as React from 'react';
import { useState } from 'react';

import { Link } from "react-router-dom";
import '../cssfolder/AuthorisationPage.css'


export interface AuthorisationPageProps {

}



export const AuthorisationPage: FC<AuthorisationPageProps> = (props: AuthorisationPageProps) => {


   return (
    <> 
    
    
        <div className="authorisation-container">
            <form action="authorisation">
                Login
                <input className="form_authorisation"  type="text" />
                Hasło
                <input className="form_authorisation" type="password" />
            <input id="submit" type="submit" value={"Zaloguj się"}/>
            </form>
        </div>
        <div className="registation">
            <Link to="/registration">{"Logowanie? Walenie? jeżeli nie to idź załóż konto"}</Link>
            </div>
            
            
        
    </> 
   )
  
}