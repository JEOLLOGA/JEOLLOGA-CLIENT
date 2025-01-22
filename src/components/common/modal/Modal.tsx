import PopupBtn from '@components/common/button/popupBtn/PopupBtn';

import * as styles from './modal.css';

interface ModalMainProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const ModalMain = ({ children, isOpen, handleClose }: ModalMainProps) => {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <div
      className={styles.modalBackdrop}
      onClick={handleClose}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        role="presentation">
        {children}
      </div>
    </div>
  );
};

interface ModalTextBoxProps {
  children: React.ReactNode;
}

const ModalTextBox = ({ children }: ModalTextBoxProps) => {
  return <div className={styles.modalTextBox}>{children}</div>;
};

interface ModalTitleProps {
  children: React.ReactNode;
}

const ModalTitle = ({ children }: ModalTitleProps) => {
  return <h1 className={styles.modalTitle}>{children}</h1>;
};

interface ModalBodyTextProps {
  children: React.ReactNode;
}

const ModalBodyText = ({ children }: ModalBodyTextProps) => {
  return <h2 className={styles.modalBody}>{children}</h2>;
};

interface ModalBtnBoxProps {
  handleClose: () => void;
  handleSubmit: () => void;
  leftBtnLabel: string;
  rightBtnLabel: string;
}

const ModalBtnBox = ({
  handleClose,
  handleSubmit,
  leftBtnLabel,
  rightBtnLabel,
}: ModalBtnBoxProps) => {
  return (
    <div className={styles.btnBox}>
      <PopupBtn label={leftBtnLabel} color="gray" onClick={handleClose} />
      <PopupBtn label={rightBtnLabel} color="green" onClick={handleSubmit} />
    </div>
  );
};

const Modal = Object.assign(ModalMain, {
  TextBox: ModalTextBox,
  Title: ModalTitle,
  BodyText: ModalBodyText,
  BtnBox: ModalBtnBox,
});

export default Modal;
