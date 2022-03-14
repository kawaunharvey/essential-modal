import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Transition } from 'react-transition-group'
import { ModalWrapper, ModalCloseButton } from './component.styles';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

export default function Modal({ activator, component: Component, className, onExit = null, onEnter = null, onEntered = null, onEntering = null}) {
    const [show, setShow] = useState(false)

    const content = (
        <ModalWrapper className={className}>
            <ModalCloseButton onClick={ () => setShow(false) }>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{fill: "#000"}}>
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </ModalCloseButton>
            <div className="modal-container"><Component setShow={setShow} /></div>
        </ModalWrapper>
    )

    return (
        <>
            {activator({ setShow })}
            {createPortal(
                <Transition 
                    in={show} 
                    onExit={onExit} 
                    timeout={duration} 
                    unmountOnExit>
                        {(state) => (<div style={{ ...defaultStyle, ...transitionStyles[state]}}>{content}</div>)}
                </Transition>,
                document.body 
            )}
        </>
    );
}