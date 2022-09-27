import './Modal.css';

function Modal(paragraph, buttonCancel, buttonConfirm) {
   return ( <div>
  <div className="modal">
    <p className="modal__title">{ paragraph }</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel">{ buttonCancel }</button>
      <button className="btn">{ buttonConfirm }</button>
    </div>
  </div>
  <div className="backdrop" />
</div>
   )
}

export default Modal;