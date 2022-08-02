import "./modal.css";
import React from 'react'

function Modal() {
  return (
    <div className="sup-main">
        <header>
       <div className="upper-col">
        <p className="main-p">Theme color</p>
        <p className="theme-p">Change Theme</p>
       </div></header>
       <main>
       <div className="col basic-col">
        <p>Font color</p>
        <div className="side-p"> <p className="num">#444444</p> <button className="btn btn-black"></button></div>
       </div>
       <div className="col basic-col">
        <p>Background color</p>
        <div className="side-p"> <p className="num">#fffff</p> <button className="btn btn-white"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button color</p>
        <div className="side-p"> <p className="num">#2072EF</p> <button className="btn btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Border color</p>
        <div className="side-p"> <p className="num">#2072Ef</p> <button className="btn btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Mouseover  color</p>
        <div className="side-p"> <p className="num">#0053D1</p> <button className="btn btn-darkBlue"></button></div>
       </div>
       </main>
       <footer  className="footer">
        <button className="btn btn-cancel">Cancel</button>
        <button className="btn btn-save">Save</button>
       </footer>
    </div>
  )
}

export default Modal