function handleModal(){
    const button = document.querySelectorAll('.showModal');
    const modalController = document.querySelector('#modalController');

    button[0].addEventListener('click', function(){
        modalController.showModal()

        closeModal()
    })
    button[1].addEventListener('click', function(){
        modalController.showModal()

        closeModal()
    })
}

function closeModal(){
    const buttonModal = document.querySelector('#modalCloseBtn');
    const modalController = document.querySelector('#modalController');

    buttonModal.addEventListener('click', function(){
        modalController.close()
    })
}

handleModal()