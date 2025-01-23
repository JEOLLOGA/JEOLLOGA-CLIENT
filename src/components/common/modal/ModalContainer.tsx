import Modal from '@components/common/modal/Modal';
interface ModalProps {
  modalTitle: string;
  modalBody: string;
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  leftBtnLabel: string;
  rightBtnLabel: string;
  reverse?: boolean;
}

const ModalContainer = ({
  modalTitle,
  modalBody,
  isOpen = false,
  handleClose,
  handleSubmit,
  leftBtnLabel,
  rightBtnLabel,
  reverse = false,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Modal.TextBox>
        <Modal.Title>{modalTitle}</Modal.Title>
        <Modal.BodyText>{modalBody}</Modal.BodyText>
      </Modal.TextBox>
      <Modal.BtnBox
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        leftBtnLabel={leftBtnLabel}
        rightBtnLabel={rightBtnLabel}
        reverse={reverse}
      />
    </Modal>
  );
};

export default ModalContainer;
