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

  useEffect(() => {
    const dialogElement = dialogValue.current;

    if (dialogElement) {
      if (isOpen) {
        dialogElement.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        dialogElement.close();
        document.body.style.overflow = '';
      }

      const handleClose = () => {
        if (onClose) {
          onClose();
        }
        document.body.style.overflow = '';
      };

      dialogElement.addEventListener('close', handleClose);

      return () => {
        dialogElement.removeEventListener('close', handleClose);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

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