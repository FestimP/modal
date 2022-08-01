import "./modal.css";
import React from 'react'

function Modal() {
  return (
    <div className="sup-main">
        <header>
       <div className="upper-col">
        <p>Theme color</p>
        <p>Change Theme</p>
       </div></header>
       <main>
       <div className="col basic-col">
        <p>Font color</p>
        <div className="side-p"> <p>#444444</p> <button className="btn btn-black"></button></div>
       </div>
       <div className="col basic-col">
        <p>Background color</p>
        <div className="side-p"> <p>#fffff</p> <button className="btn btn-white"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button color</p>
        <div className="side-p"> <p>#2072EF</p> <button className="btn btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Border color</p>
        <div className="side-p"> <p>#2072Ef</p> <button className="btn btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Mouseover  color</p>
        <div className="side-p"> <p>#0053D1</p> <button className="btn btn-darkBlue"></button></div>
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