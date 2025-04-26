import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BorderButton from "./Button/borderButton";

const DialogBox = ({
  isOpen,
  setIsOpen,
  title = "Are you absolutely sure?",
  desc = "",
  onClick = () => {},
  onClose = () => {},
  isLoading = false,
  disabled = false,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose onClick={onClose} asChild>
            <BorderButton label={"Close"} type="button" />
          </DialogClose>
          <BorderButton
            onClick={onClick}
            isLoading={isLoading}
            disabled={disabled}
            label={"Confirm"}
            className="bg-[#FF5A5A]"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
