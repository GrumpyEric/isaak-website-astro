import { isModalOpen, modalTitle, modalContent } from "@/stores/modalStore";
import { Dialog, DialogTitle } from "@mui/material";
import { useStore } from "@nanostores/react";

export type ModalType = {
  open: boolean;
  title: string;
  content: React.ReactNode;
};

export const Modal = () => {
  const $isModalOpen = useStore(isModalOpen);
  const $modalTitle = useStore(modalTitle);
  const $modalContent = useStore(modalContent);

  return (
    <Dialog open={$isModalOpen} disableScrollLock>
      <DialogTitle>{$modalTitle}</DialogTitle>
      {$modalContent}
    </Dialog>
  );
};

export const useModal = ({ open, title, content }: ModalType) => {
  isModalOpen.set(open);
  modalTitle.set(title);
  modalContent.set(content);
};
