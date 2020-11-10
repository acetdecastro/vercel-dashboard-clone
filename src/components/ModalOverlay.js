import ReactDOM from 'react-dom';

export default function ModalOverlay({ handleToggle }) {
  return ReactDOM.createPortal(
    <aside className="absolute z-10 inset-0" onClick={handleToggle}></aside>,
    document.getElementById('app_container')
  );
}
