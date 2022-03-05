import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from 'react-transition-group'

export default function Modal({ activator, component: Component, props, onExit = null}) {
    const [show, setShow] = useState(false)

    const content = (
        <div className="modal">
            <button className="close" onClick={ () => setShow(false) }></button>
            <div className="modal-container"><Component setShow={setShow} {...props} /></div>
        </div>
    )

    return (
        <>
            {activator({ setShow })}
            {createPortal(
                <CSSTransition 
                    in={show} 
                    onExit={onExit} 
                    timeout={120} 
                    classNames="modal-transition" 
                    unmountOnExit >{() => <div>{content}</div>}
                </CSSTransition>,
                document.body 
            )}
        </>
    );
}