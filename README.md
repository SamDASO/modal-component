# Modal-component

**Modal-component** is a generic modal component. This provide a component for React project.

## Installation

To install the **Modal-component** package, run:

**npm command**
```bash
npm install @samdaso/modal-component
```
or **yarn command**
```bash
yarn add @samdaso/modal-component
```

## Usage

**Import the component**
```bash
import  { Modal } from "@samdaso/modal-component";
```

**Example**
```bash
<Modal isOpen={isModalOpen} onClose={closeModal} style={styles.modal}>
    <p>{modalMessage}</p>
    <Button onClick={closeModal}>Close</Button>
</Modal>
```
## Props

**className** (string):
If indicated, overwrite the default style. If you want to change the default style, you can use this prop to add a style for the dialog element and/or the ::backdrop pseudo-element to change the background. 

**isOpen** (boolean):
Determines the state of the modal. 
True = the modal is open.

**onClose** (callback function):
 This is the callback function to close the modal.


