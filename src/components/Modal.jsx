import './Modal.css';

function Modal({ paragraph, buttonCancel, buttonConfirm, cancelModal }) {
   return ( <div>
  <div className="modal">
    <p className="modal__title">{ paragraph }</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={cancelModal}>{ buttonCancel }</button>
      <button className="btn" onClick={() => {
        console.log('Confirm')
      }}>
        { buttonConfirm }</button>
    </div>
  </div>
  <div className="backdrop" />
</div>
   )
}

export default Modal;