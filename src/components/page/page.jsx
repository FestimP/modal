import "./page.css";
import { useState } from "react";
import Backdrop from "../backdrop/backdrop";

function Page() {
    const [modalOpen,modalSetOpen] = useState(false);
function closeModal () {
   modalSetOpen(false)
}
return (
    <div className="card">
    <div className={modalOpen ? "main-l": "main" }>
    <button className="btn btn-gray" onClick={()=> modalSetOpen(true)}>
        <p>Show popup</p>
    </button>
    </div>  
    <div className={modalOpen ? "sup-main": "zero" }>
        <header>
       <div className="upper-col">
        <p className="main-p">Theme color</p>
        <p className="theme-p">Change Theme</p>
       </div></header>
       <main>
       <div className="col basic-col">
        <p>Font color</p>
        <div className="side-p"> <p className="num">#444444</p> <button className="btns btn-black"></button></div>
       </div>
       <div className="col basic-col">
        <p>Background color</p>
        <div className="side-p"> <p className="num">#fffff</p> <button className="btns btn-white"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button color</p>
        <div className="side-p"> <p className="num">#2072EF</p> <button className="btns btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Border color</p>
        <div className="side-p"> <p className="num">#2072Ef</p> <button className="btns btn-blue"></button></div>
       </div>
       <div className="col basic-col">
        <p>Button Mouseover  color</p>
        <div className="side-p"> <p className="num">#0053D1</p> <button className="btns btn-darkBlue"></button></div>
       </div>
       </main>
       <footer  className="footer">
        <button className="btn-c btn-cancel" onClick={closeModal}>Cancel</button>
        <button className="btn-c btn-save" onClick={closeModal}>Save</button>
       </footer>
    </div>
    {modalOpen && <Backdrop onCancel={closeModal} />}
    </div>
    
)
}
export default Page;