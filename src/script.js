import Swal from 'sweetalert2'

// button ripple function
const buttonRipple = (e) => {
	let x = e.clientX - e.target.offsetLeft
	// let y = e.clientY - e.target.offsetTop
	let ripple = document.createElement('span')
	ripple.style.left = x + 'px'
	// ripple.style.top = y + 'px'
	e.target.appendChild(ripple)
	setTimeout(()=> {
		ripple.remove()
	}, 1000)
}

// alert function
let timerInterval
const showAlert = (targetName) => {
    Swal.fire({
        title: `Redirect to ${targetName ?? 'github'}!`,
        html: 'I will close in <b></b> milliseconds.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
}

// redirect function
const redirect = (target, targetName) => {
    showAlert(targetName)
    setTimeout(() => {
        open(target)
    }, 1500);
}

export { buttonRipple, redirect }