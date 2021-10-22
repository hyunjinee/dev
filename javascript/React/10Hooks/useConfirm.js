const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfrim || typeof onConfirm !== "function" ) {
        return;
    } 
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }

    return confirmAction
}