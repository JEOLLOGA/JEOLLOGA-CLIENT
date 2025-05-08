import { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';

import './bottomSheet.css';

interface BottomSheetProps {
  header?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet = ({ header, isOpen, onClose, children }: BottomSheetProps) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} className="react-modal-sheet" detent="content-height">
      <Sheet.Container>
        {header && <Sheet.Header>{header}</Sheet.Header>}
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default BottomSheet;
