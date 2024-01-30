import React from "react";
import { Employee } from "./components/CardPassingdatapdrilling/Employee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import FormData from "./components/DisplayFormDataUI/FormData";

// import HideShowState from "./components/HideShowState";
import VisibleandHide from "./components/ShowandHidetwobtn/VisibleandHide";
import Singlebtn from "./components/SinglebtnHide&Show/Singlebtn";
import ReadMoreLess from "./components/ReadMoreReadLess/ReadMoreLess";

import CounterandUpdate from "./components/StateUpdate&previousState/CounterandUpdate";
import StateinObject from "./components/UseStateObjectkey&value/StateinObject";
import AddColorArrray from "./components/DisplayColorusingbtn/AddColorArrray";
import Todolist from "./components/ToDoList/Todolist";
// import Parent from "./components/Parent";
// import Condtion from "./components/CondtionalRendering";
// import Eventhandlers from "./components/Eventhandlers";
// @fortawesome/react-fontawesome
// import "./App.css";
import UseEffect from "./components/UseEffectHook/UseEffect";
import ToggleUseEffect from "./components/ToggleuseEffect/ToggleUseEffect";
import FetchingtheApi from "./components/FetchingApi3ways/FetchingtheApi";
import SetInverval from "./components/ToggleuseEffect/SetInverval";
import CountHook from "./components/CustomHook&HOC/CountHook";
import Counterone from "./components/CustomHook&HOC/Counterone";
import CounterTwo from "./components/CustomHook&HOC/CounterTwo";
import FakestoreChook from "./components/ApiCustomHook/FakestoreChook";
import ParentMemoization from "./components/Memoization/ParentMemoization";
import UseMemo from "./components/Memoization/UseMemo";
import { PropDrilling } from "./components/PropDrilling/PropDrilling";
import CondtionalRendering from "./components/CondtionalRenderingandor/CondtionalRendering";
import HideShowState from "./components/NormalUseStateUpdate/HideShowState";
import Eventhandlers from "./components/GettingIndexFrombtnEH/Eventhandlers";
import InputUseRefHook from "./components/useRefHook/InputUseRefHook";
import PrintDataBtn from "./components/useRefHook/PrintDataBtn";
import ControlledCp from "./components/useRefHook/ControlledCp";
import UnControlledCp from "./components/useRefHook/UnControlledCp";
import CounterUseReduer from "./components/useReducer/CounterUseReduer";
import CounterPreviousValue from "./components/useReducer/CounterPreviousValue";
import FetchingApiUseReducer from "./components/useReducer/FetchingApiUseReducer";
import Routersfield from "./components/React-Routing/Routersfield";
import ImageRouting from "./components/React-Routing/ImageRouting";
import LoginNavigate from "./components/UseNavigate/LoginNavigate";
import TodolistUseReducer from "./components/useReducer/TodolistUseReducer";

// import Bikes from "./components/Bike";
// import Cars from "./components/Car";
// import Test from "./Test";

// import Student from "./Student";

const App = () => {
  return (
    // <div>
    //   <Employee />
    //   <FontAwesomeIcon icon="fa-brands fa-youtube" />
    //   <FontAwesomeIcon icon={faAtom} />
    //   <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    //   <i class="fa fa-envelope" aria-hidden="true"></i>

    //   <FontAwesomeIcon icon={faEnvelope} />
    // </div>

    // <div>
    //   <Parent />
    //   {/*  <Parent />
    // <Condtion />*/}
    //   <Eventhandlers />
    // </div>
    // <div className="userinfo">
    //   {/*  <ReadMoreLess />*/}

    //   {/* <CounterandUpdate />*/}
    //   {/* <StateinObject />*/}
    //   {/* <AddColorArrray />*/}
    //   {/*<FormData />*/}
    //   {/* <Tosti />*/}
    //
    // </div>
    <div>
      {/* <CondtionalRendering />*/}
      {/*    <ToggleUseEffect />
  <Singlebtn />*/}
      <Routersfield />
      {/*<ReadMoreLess />*/}
      {/* <UseEffect />*/}
      {/* <ToggleUseEffect />*/}
      {/* <FetchingtheApi />*/}
      {/*<FormData />*/}
      {/* <SetInverval />*/}
      {/* <FakestoreChook />*/}
      {/*<ParentMemoization />*/}
      {/* <UseMemo />*/}
      {/* <InputUseRefHook />*/}
      {/* <PrintDataBtn />*/}
      {/* <ControlledCp />*/}
      {/* <UnControlledCp />*/}
      {/*  <PrintDataBtn />*/}
      {/*   <Singlebtn />*/}
      {/*   <CounterUseReduer />*/}
      {/*     <CounterPreviousValue />*/}
      {/*<FetchingApiUseReducer />*/}
      {/*  <Routersfield />*/}
      {/*   <ImageRouting />*/}
      {/* <TodolistUseReducer />*/}
      {/*   <ReadMoreLess />*/}
    </div>
    // <PropDrilling />
    // <Counterone />
    // <CounterTwo />
    // <ToggleUseEffect />
  );
};

export default App;
