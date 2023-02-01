import React from 'react';
import { GrFormClose } from 'react-icons/gr';


const Modal = ({ id = "modal" ,onClose = () => {}, children }) => {
    const handleOutsideClick = (e) => {
        if(e.target.id == id) onClose();
    }
    
    return (
        <div id={id} className="modal_body" onClick={handleOutsideClick}>
            <div className="container_modal">
                <button className="close" onClick={onClose}><GrFormClose/></button>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;