function clickButton(id) {
    const listButton = document.querySelectorAll(".round-end-button-shape");
    listButton.forEach((button, idx) => {
        if (idx === id) {
            if (button.classList.contains('long-button-inactive')) {
                button.classList.remove('long-button-inactive')
            }
            button.classList.add('long-button-active')
        } else {
            if (button.classList.contains('long-button-active')) {
                button.classList.remove('long-button-active')
            }
            button.classList.add('long-button-inactive')
        }
        }
    )
}
