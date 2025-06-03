import React, { useState,useEffect } from "react";
import { Collapse } from "reactstrap";

//\src\components\partials\accordian

import Request from '../../../config-requests/ConfigRequests.json';
//src\config-requests
//src\pages

import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
const cookiesIdiom = new Cookies();
var Token=cookiesIdiom.get('Token');
var Language=cookiesIdiom.get('Language');

const userData = [
  {
    "Name": "Colombia",
    "Wallet": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
];

async function getData() {
    const ids = await (await fetch(`${process.env.REACT_APP_API_BASE_URL}`+Request.Walles)).json()

    console.log("ids:",ids)

    const arreglo=ids.Result;

    const data = Promise.all(
      arreglo.map((item,i) => {
        return (
          <li key={i}>{item.Wallet}</li>      
        );
      }
      )
    );

    console.log("data",data)
    
    return data
}

function Welcome() {

  const [Wallet, SetWallet] = useState("");  
  

  useEffect(async () => {
    //const Wallets = await fetch(`${process.env.REACT_APP_API_BASE_URL}`+Request.Walles).json()

    var respuesta = await fetch(`${process.env.REACT_APP_API_BASE_URL}`+Request.Walles,
    {
      method: "GET",            
        headers:{
          'Authorization': 'Bearer ' + Token,
      }
    });
    var Wallets= await respuesta.json();  


    //console.log("Wallets:",Wallets)
    const arreglo=Wallets.Result;
    const data = arreglo.map((item,i) => {
        return (
          <li key={i}>{item.Wallet}</li>      
        );
      }
    );  
    SetWallet(data); 

  },[]);

  return Wallet;
}



const Accordion = ({ className, variation }) => {
  const [isOpen, setIsOpen] = useState("1");
  const [t, i18n] = useTranslation("global");
  const [userInfosaldo, setuserInfosaldo] = useState(userData[0]);

  
  //console.log("Language: ",Language)
  //console.log("Languagei18: ",i18n.language)

  {/*useEffect(async () => {
    //console.log("Request.Balance",Request.Balance)
    i18n.changeLanguage(Language); 
    var respuesta = await fetch(`${process.env.REACT_APP_API_BASE_URL}`+Request.Walles,
    {
      method: "GET",            
        headers:{
          'Authorization': 'Bearer ' + Token,
      }
    });
    var saldo= await respuesta.json();
    //console.log(saldo)
    //console.log("lo que llega:", saldo.Result)
    setuserInfosaldo(saldo.Result);  

  },[]);*/}


  const toggleCollapse = (param) => {
    if (param === isOpen) {
      setIsOpen("0");
    } else {
      setIsOpen(param);
    }
  };

  
  return (
    <div className={[`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`]}>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("1")}>
          <h6 className="title">{t('help.help-subtitle1')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph1')} 
            </p>
            <p>
              {t('help.help-paragraph1-1')} 
            </p>
            <p>
              {t('help.help-paragraph1-2')} 
            </p>
            <p>
              {t('help.help-paragraph1-3')} 
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "2" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("2")}>
          <h6 className="title">{t('help.help-subtitle2')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "2" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph2')} 
              <span> </span>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph2-1')} 
              </a>
              <span> </span>
              

              {t('help.help-paragraph2-2')} 
            </p>

            <p> 

              {t('help.help-paragraph2-2-2')}                          
            </p>

            

            <p>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph2-3')} 
              </a>              
            </p>
            <p>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph2-4')} 
              </a>
            </p>
            <p>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph2-5')}  
              </a>              
            </p>
          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "3" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("3")}>
          <h6 className="title">{t('help.help-subtitle3')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "3" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph3')}
              <span> </span>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph3-1')}   
              </a>
            </p>
            <p>
              {t('help.help-paragraph3-2')}                                             
            </p>
            <p>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph3-3')}   
              </a>                             
            </p>
            <p>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph3-4')}   
              </a>                           
            </p>
            <p>
              {t('help.help-paragraph3-5')}                                             
            </p>

          </div>
        </Collapse>
      </div>


      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "4" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("4")}>
          <h6 className="title">{t('help.help-subtitle4')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "4" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph4')}
              <span> </span>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph4-1')}   
              </a> 
              {t('help.help-paragraph4-2')}  

            </p>
            <p>
              {t('help.help-paragraph4-3')}                              
            </p>
            <p>
              {t('help.help-paragraph4-4')} 
              <span> </span>
              <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
                {t('help.help-paragraph4-5')}   
              </a> 
              
            </p>

            <p>
              {t('help.help-paragraph4-6')} 
            </p>

            <p>
              {t('help.help-paragraph4-7')} 
              <span> </span>              
            </p>

      
          </div>
        </Collapse>
      </div> 




      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "5" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("5")}>
          <h6 className="title">{t('help.help-subtitle5')}</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "5" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph5-1')}
            </p>
            <span>

            

            <Welcome>hola</Welcome>
            

            

            
              
            </span>
          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "6" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("6")}>
          <h6 className="title">{t('help.help-subtitle6')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "6" ? true : false}>
          <div className="accordion-inner">
            
            <p>
              {t('help.help-paragraph6-1')}
            </p>
            <span> </span>
            <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
              {t('help.help-paragraph6-2')}   
            </a>
            <p>
              {t('help.help-paragraph6-3')}
            </p>
            <span> </span>
            <a href="#contact" onClick={(ev) => {ev.preventDefault();}}>
              {t('help.help-paragraph6-4')}   
            </a>
            <p>
              {t('help.help-paragraph6-5')}
            </p>

          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "7" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("7")}>
          <h6 className="title">{t('help.help-subtitle7')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "7" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph7')}
            </p>
            <p>
              {t('help.help-paragraph7-1')}
            </p>
            <p>
              {t('help.help-paragraph7-2')}
            </p>
            <p>
              {t('help.help-paragraph7-3')}
            </p>
            <p>
              {t('help.help-paragraph7-4')}
            </p>
          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "8" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("8")}>
          <h6 className="title">{t('help.help-subtitle8')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "8" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph8')}
            </p>
            <p>
              {t('help.help-paragraph8-1')}
            </p>
            <p>
              {t('help.help-paragraph8-2')}
            </p>
            <p>
              {t('help.help-paragraph8-3')}
            </p>
            <p>
              {t('help.help-paragraph8-4')}
            </p>
            <p>
              {t('help.help-paragraph8-5')}
            </p>
            <p>
              {t('help.help-paragraph8-6')}
            </p>
            <p>
              {t('help.help-paragraph8-7')}
            </p>
          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "9" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("9")}>
          <h6 className="title">{t('help.help-subtitle9')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "9" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph9')}
            </p>                
            <p>
              {t('help.help-paragraph9-1')}
            </p>       
             
          </div>
        </Collapse>
      </div>

      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "10" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("10")}>
          <h6 className="title">{t('help.help-subtitle10')} </h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "10" ? true : false}>
          <div className="accordion-inner">
            <p>
              {t('help.help-paragraph10')}
            </p>
            <p>
              {t('help.help-paragraph10-1')}
            </p>  
            <p>
              {t('help.help-paragraph10-2')}
            </p> 

            <p>
              {t('help.help-paragraph10-3')}
            </p>               
             
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
