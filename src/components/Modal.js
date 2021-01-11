import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleclick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop"
            onClick={handleclick}
        >
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal;