const useFullscreen = (callback)=> {
    const element = useRef();
    const triggerFull =()=> {
        if(element.current) {
            element.current.requestFullscreen();
            if(callback && typeof callback ==="fucntion ") {
                callback(true)
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
            callback(false)
        }
    }
    return {element, triggerFull, exitFull}
}