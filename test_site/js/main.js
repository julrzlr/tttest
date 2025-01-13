document.addEventListener("DOMContentLoaded", function() {
    const popupToggleBnt = document.getElementById('call-order-btn')
    const callPopup = document.getElementById('call-popup')
    if (popupToggleBnt) {
        popupToggleBnt.onclick = function() {
            callPopup?.classList.add('_open');
        };
    }    

    document.querySelectorAll('form')
        .forEach((elem) => {
                const formId = elem.id
                const successNode = document.querySelector(`.${formId}-success`)
                
                elem.addEventListener('submit', (e) => {
                e.preventDefault()
                const formPopup = elem.closest('.j-popup')
                if (formPopup) formPopup.classList.remove('_open')
                elem.reset()
                if (successNode) successNode.classList.add('_open')
            })
        })

    document.querySelectorAll('.j-close-popup')
        .forEach((btnElem) => {
            btnElem.addEventListener('click', () =>{
                const popup = btnElem.closest('.j-popup')
                if (popup) popup.classList.remove('_open')
            })
        })

}    
);