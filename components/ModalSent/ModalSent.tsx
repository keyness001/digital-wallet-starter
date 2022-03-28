import React from 'react';
import Modal from '../../widgets/Modal';
import styles from './ModalSent.module.scss';
import Button from '../../widgets/Button';

interface IModalSentProps {
  handleHide(): void,
}

const ModalSent: React.FC<IModalSentProps> = ({ handleHide }) => {
  return (
    <Modal>
      <div className={`content ${styles.modalSent}`}>
        <div className="modal-sent__header">
          Successfully sent
        </div>
        <div className="modal-sent__content">
          <p>
            Your <strong>EUR</strong> has been sent!<br/>Thank you for using our service
          </p>
          <Button extraClass='primary' onClick={handleHide}>OK</Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalSent;
