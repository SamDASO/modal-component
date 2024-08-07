# Modal-component

**Modal-component** is a generic modal component. This provide a component for React project.

## Installation

As `@SamDASO/modal-component` is a package from GitHub Package Registry, you need to follow the 2s first steps, if not already. Else, you can follow the installation starting from the step 3.

### 1. Generate a Personal Access Token (PAT)

1. Go to your [GitHub settings](https://github.com/settings/tokens).
2. Navigate to **Developer settings** > **Personal access tokens**.
3. Click on **Generate new token**.
4. Select the `read:packages` and `repo` scopes.
5. Generate the token and copy it. Keep it secure.

### 2. Configure `.npmrc`

Create or update the `.npmrc` file in the root of your project with the following content:

```plaintext
@SamDASO:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

Replace **YOUR_PERSONAL_ACCESS_TOKEN** with the token you generated in the previous step.

### 3. Install the **Modal-component** package in your project

```bash
npm install @samdaso/modal-component
```
or 
```bash
yarn add @samdaso/modal-component
```

## Importing Styles

The modal-component already has a **default style**, if you want to use it or to have it in your project, you need to import the corresponding CSS file based on your project setup. Below are instructions for both CommonJS and ES Module environments :

### For CommonJS Projects

If your project is using CommonJS (e.g., Node.js), import the CSS file from the CommonJS distribution into your app or main file :

```javascript
// Import CSS for CommonJS environment
import '@samdaso/modal-component/dist/cjs/index.css';
```

### For ES Modules Projects

If your project is using ES Modules (e.g., a modern front-end application with Webpack, Rollup, or Vite), import the CSS file from the ES Module distribution into your app or main file:

```javascript
// Import CSS for ES Modules environment
import '@samdaso/modal-component/dist/esm/index.css';
```

## Usage

### **Import the component**
```javascript
import  { Modal } from "@samdaso/modal-component";
```

### Example
```jsx
<Modal isOpen={isModalOpen} onClose={closeModal} className={styles.modal}>
    <p>{modalMessage}</p>
    <Button onClick={closeModal}>Close</Button>
</Modal>
```
## Props

### `className` (string):
If indicated, overwrite the default style. If you want to change the default style, you can use this prop to add a style for the dialog element and/or the ::backdrop pseudo-element to change the background. 

### `isOpen` (boolean):
Determines the state of the modal. 
True = the modal is open.

### `onClose` (callback function):
 This is the callback function to close the modal.


