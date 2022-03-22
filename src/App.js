import React from "react";
import Header from "./component/header"
 
export default class App extends React.Component{
    render(){
        return(
            <>
                <Header dados=" Igor Bastos" 
                dados1=" 17"
                dados2=" São Paulo"
                dados3=" Sim">
                   <li>Pets em casa? sim, tenho dois</li>
               </Header>
            </>
        )
    }
}