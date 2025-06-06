import React, { useState, useEffect } from "react";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import Icon from "../../../icon/Icon";
import { StackedBarChart } from "../../charts/sales/Charts";

import { useTranslation } from 'react-i18next';

import Request from '../../../../config-requests/ConfigRequests.json';
//src\config-requests
//src\pages

import Cookies from 'universal-cookie';
const cookiesIdiom = new Cookies();
var Token=cookiesIdiom.get('Token');
var Language=cookiesIdiom.get('Language');

//src\components\partials\crypto\user-activity


const guests = {
  cantidadP: '10',
  cryplotto: '10',
  valorC: '4500'
}

const UserActivity = () => {
  const [userActivity, setUserActivity] = useState("");
  const [t, i18n] = useTranslation("global");
  const [userInfo, setUserInfo] = useState(guests);

  useEffect(async () => {
    i18n.changeLanguage(Language); 

    //console.log("Request.InvestUserActivity",Request.InvestUserActivity)
    {/*
    var respuesta = await fetch(`${process.env.REACT_APP_API_BASE_URL}`+Request.InvestUserActivity,
    {
      method: "GET",            
        headers:{
          'Authorization': 'Bearer ' + Token,
      }
    });
    var saldo= await respuesta.json();
    setUserInfo(saldo.Result);  
    */}  

  },[]);


  return (
    <React.Fragment>
     
      <div className="card-inner">
      

        <div className="card-title-group align-start mb-3">
          <CardTitle className="card-title">
            <h6 className="title">{t('userActivity.userActivity-title')}</h6>
            <p>
              {t('userActivity.userActivity-subtitle')} {" "}
              <Icon name="info"></Icon>
            </p>
          </CardTitle>

          {/*
          <div className="card-tools mt-n1 mr-n1">
            <UncontrolledDropdown>

              <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                <Icon name="more-h"></Icon>
              </DropdownToggle>

              // Aqui abajo es para cambiar los dias, etc*
              <DropdownMenu right>
                <ul className="link-list-opt no-bdr">
                  <li className={userActivity === "" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("");
                      }}
                    >
                      <span>15 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={userActivity === "day" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("day");
                      }}
                    >
                      <span>30 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={userActivity === "month" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("month");
                      }}
                    >
                      <span>3 Months</span>
                    </DropdownItem>
                  </li>
                </ul>
              </DropdownMenu>
              
            </UncontrolledDropdown>
          </div>
          */}
        </div>
        

        <div className="user-activity-group g-4">
          <div className="user-activity">
            <Icon name="users"></Icon>

            <div className="info">
              <span className="amount">
                {" "}
                {userInfo.cantidadP}
              </span>
              <span className="title">{t('userActivity.userActivity-union')} </span>
            </div>

            <div className="gfx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 17.5">
                <path
                  fill="#9cabff"
                  d="M1.2 17.4H.9c-.5-.1-.8-.7-.7-1.2C2.2 9 5.2 4 9 1.5 10.5.5 12 0 13.5.1c4.9.3 7.2 4.9 9 8.5.3.4.5.8.7 1.2 1 1.8 2.7 3.9 4.5 4.3.9.2 1.7-.1 2.6-.8 1.8-1.4 3-3.7 4.1-5.9.5-1 1-1.9 1.5-2.9C36.9 3 38.7 1 40.8.7c1.1-.1 2.2.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1.4 1 .7 1.9 1.2 2.6.3.4.2 1.1-.2 1.4s-1.1.2-1.4-.2c-.7-.9-1.1-2-1.5-3-.5-1.3-1-2.5-1.9-3.3-.5-.4-1-.6-1.5-.5-1.3.2-2.7 1.6-3.5 2.8-.5.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-.6-5.1-3.9-5.9-5.3-.2-.4-.4-.8-.6-1.3C19.1 6 17.3 2.2 13.5 2c-1.1-.1-2.1.3-3.3 1-3.5 2.4-6.2 7-8 13.7-.2.4-.6.7-1 .7z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="user-activity">
            <Icon name="wallet-fill"></Icon>

            <div className="info">
              <span className="amount">
                {" "}
                {parseInt(userInfo.cantidadP)*parseInt(userInfo.cryplotto)*parseInt(userInfo.valorC)}
              </span>
              <span className="title">{t('userActivity.userActivity-revenue')} </span>
            </div>

            <div className="gfx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 17.5">
                <path
                  fill="#9cabff"
                  d="M1.2 17.4H.9c-.5-.1-.8-.7-.7-1.2C2.2 9 5.2 4 9 1.5 10.5.5 12 0 13.5.1c4.9.3 7.2 4.9 9 8.5.3.4.5.8.7 1.2 1 1.8 2.7 3.9 4.5 4.3.9.2 1.7-.1 2.6-.8 1.8-1.4 3-3.7 4.1-5.9.5-1 1-1.9 1.5-2.9C36.9 3 38.7 1 40.8.7c1.1-.1 2.2.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1.4 1 .7 1.9 1.2 2.6.3.4.2 1.1-.2 1.4s-1.1.2-1.4-.2c-.7-.9-1.1-2-1.5-3-.5-1.3-1-2.5-1.9-3.3-.5-.4-1-.6-1.5-.5-1.3.2-2.7 1.6-3.5 2.8-.5.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-.6-5.1-3.9-5.9-5.3-.2-.4-.4-.8-.6-1.3C19.1 6 17.3 2.2 13.5 2c-1.1-.1-2.1.3-3.3 1-3.5 2.4-6.2 7-8 13.7-.2.4-.6.7-1 .7z"
                ></path>
              </svg>
            </div>
          </div>


          
          {/*
          <div className="user-activity">
            <Icon name="users"></Icon>
            <div className="info">
              <span className="amount"> {userActivity === "day" ? "49" : userActivity === "month" ? "250" : "10"}</span>
              <span className="title">Referral Join</span>
            </div>
            <div className="gfx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 17.5">
                <path
                  fill="rgba(156, 171, 255, 0.7)"
                  d="M1.2 17.4H.9c-.5-.1-.8-.7-.7-1.2C2.2 9 5.2 4 9 1.5 10.5.5 12 0 13.5.1c4.9.3 7.2 4.9 9 8.5.3.4.5.8.7 1.2 1 1.8 2.7 3.9 4.5 4.3.9.2 1.7-.1 2.6-.8 1.8-1.4 3-3.7 4.1-5.9.5-1 1-1.9 1.5-2.9C36.9 3 38.7 1 40.8.7c1.1-.1 2.2.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1.4 1 .7 1.9 1.2 2.6.3.4.2 1.1-.2 1.4s-1.1.2-1.4-.2c-.7-.9-1.1-2-1.5-3-.5-1.3-1-2.5-1.9-3.3-.5-.4-1-.6-1.5-.5-1.3.2-2.7 1.6-3.5 2.8-.5.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-.6-5.1-3.9-5.9-5.3-.2-.4-.4-.8-.6-1.3C19.1 6 17.3 2.2 13.5 2c-1.1-.1-2.1.3-3.3 1-3.5 2.4-6.2 7-8 13.7-.2.4-.6.7-1 .7z"
                ></path>
              </svg>
            </div>
          </div>
          */}
        </div>


      </div>
     

      {/*
      <div className="user-activity-ck">
        <StackedBarChart state={userActivity} />
      </div>
      */}

    </React.Fragment>
  );
};
export default UserActivity;
