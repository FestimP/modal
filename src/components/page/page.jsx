import "./page.css";
import { useState } from "react";
import Modal from "../modal/modal";

function Page() {
    const [modalOpen,modalSetOpen] = useState(false);

return (
    <div className="main">
    <button className="btn btn-gray" onClick={()=> modalSetOpen(true)}>
        <p>Show popup</p>
    </button>
    {modalOpen && <Modal/>}

    </div>
)
}
export default Page;