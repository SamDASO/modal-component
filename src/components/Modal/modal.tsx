import React from "react";
import { useEffect, useRef } from "react";
import styles from "./modal.module.css"

export interface ModalProps {
  /**The class to style the dialog part of the modal. with ::backdrop it's possible to style the background. If indicated, overwrite the default style.*/
  className?: string;
  /**Determines if the modal is open.*/
  isOpen: boolean;
  /**The callback function to close the modal.*/
  onClose: () => void;
  /**The content to be displayed inside the modal. */
  children: React.ReactNode;

}


const Modal: React.FC<ModalProps> = ({className, isOpen, onClose, children}) => {
  const dialogValue = useRef<HTMLDialogElement | null>(null);

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
      document.body.style.overflow = '';
    }
    
  };

  useEffect(() => {
    const dialogElement = dialogValue.current;

    if (!dialogElement) {
      return;
    }

    if (isOpen) {
      dialogElement.showModal();
      dialogElement.addEventListener('close', handleClose);
      document.body.style.overflow = 'hidden';
    } 
      
    return () => {
      dialogElement.removeEventListener('close', handleClose);
      document.body.style.overflow = '';
      if (dialogElement.open) {
        dialogElement.close();
      }
    };
    
  }, [isOpen]);

  const dialogClass = className || styles.dialogDefault;
    
  if (!isOpen) {
    return null;
  }

  return (
      <dialog className={dialogClass} ref={dialogValue}>
        {children}
      </dialog>
  );
}



export default Modal;