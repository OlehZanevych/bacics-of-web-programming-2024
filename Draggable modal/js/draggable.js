let draggableModalZIndex = 1;

const draggable = elem => {
    const draggableModalWindow = document.createElement('div');
    draggableModalWindow.appendChild(elem);
    draggableModalWindow.className = 'draggable';
    draggableModalWindow.style.backgroundColor = `#${((1<<24)*Math.random() | 0).toString(16)}`;
    draggableModalWindow.style.zIndex = draggableModalZIndex++;

    document.body.appendChild(draggableModalWindow);

    const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const modalWindowWidth = draggableModalWindow.offsetWidth;
    const modalWindowHeight = draggableModalWindow.offsetWidth;

    const modalWindowLeft = Math.max((windowWidth - modalWindowWidth) / 2, 0);
    const modalWindowTop = Math.max((windowHeight - modalWindowHeight) / 2, 0);

    draggableModalWindow.style.left = `${modalWindowLeft}px`;
    draggableModalWindow.style.top = `${modalWindowTop}px`;

    draggableModalWindow.onmousedown = e => {
        draggableModalWindow.style.zIndex = draggableModalZIndex++;

        const {left, top} = draggableModalWindow.getBoundingClientRect();

        const shiftX = e.pageX - left;
        const shiftY = e.pageY - top;

        document.onmousemove = e => {
            draggableModalWindow.style.left = `${e.pageX - shiftX}px`;
            draggableModalWindow.style.top = `${e.pageY - shiftY}px`;
        }

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    };
}

const showDraggableModal = () => {
    const contentElem = document.createElement('div');

    draggable(contentElem);
}