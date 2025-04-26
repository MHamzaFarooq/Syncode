import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ModalWrapper = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black border border-[#FFFFFF1A] p-0">
        <DialogHeader>
          <DialogTitle
            className="text-[32px] leading-[26px] font-medium
              text-center py-9 border-b border-[#FFFFFF1A]"
          >
            {title}
          </DialogTitle>
          <div className="p-9">{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
