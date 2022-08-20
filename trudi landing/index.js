let activeId;

function clickButton(id) {
    activeId = id;
    const listButton = document.querySelectorAll(".round-end-button-shape");
    const elementShowing = document.getElementById(`section${id}`);
    changeSrc(id)
    listButton.forEach((button, idx) => {
        if (idx === id) {
            if (button.classList.contains('long-button-inactive')) {
                button.classList.remove('long-button-inactive')
            }
            button.classList.add('long-button-active')
            changeSrc(idx, true)
        } else {
            if (button.classList.contains('long-button-active')) {
                button.classList.remove('long-button-active')
            }
            button.classList.add('long-button-inactive')
            changeSrc(idx, false)
        }
        }
    );
    elementShowing.scrollIntoView({behavior: "smooth", block: "center"})
}

function changeSrc(id, isActive) {
    const img = document.getElementById(`img${id}`)
    let pathImgArray = img.src.split('/');
    const fileNameArray = pathImgArray[pathImgArray.length - 1].split('.')
    if (isActive) {
        fileNameArray[0] = fileNameArray[0].includes('_active') ? fileNameArray[0] : fileNameArray[0] + '_active';
    } else {
        fileNameArray[0] = !fileNameArray[0].includes('_active') ? fileNameArray[0] : fileNameArray[0].replace('_active', '')
    }
    pathImgArray[pathImgArray.length - 1] = fileNameArray.join('.');
    img.src = pathImgArray.join('/')
}

clickButton(0);