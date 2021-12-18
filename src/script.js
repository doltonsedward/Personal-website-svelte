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
const showAlert = () => {
    Swal.fire({
        title: 'Redirect to github!',
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

// data portfolio
const dataPortfolio = [
    {
        name: "Dewetour",
        description: "Dewetour is an application to make it easier to book travel tickets online and quickly without the need to come to a travel provider",
        image: "/assets/img/dewetour.png",
        url: "https://github.com/doltonsedward/Dewe_Tour"
    },
    {
        name: "Literature",
        description: "Literature is a web-based application that allows you to write your work and be seen by many people",
        image: "/assets/img/literature.png",
        url: "https://github.com/doltonsedward/Literature"
    },
    {
        name: "Rentake",
        description: "Rentake is a website-based application that allows you to buy movie tickets easily",
        image: "/assets/img/rentake.png",
        url: "https://github.com/doltonsedward/Rentake"
    },
    {
        name: "IT Lance",
        description: "IT Lance is a place for job seekers with a light and unique look. come up with an exciting new style.",
        image: "/assets/img/it-lance.png",
        url: "https://github.com/doltonsedward/IT_Lance-App"
    },
    {
        name: "DollosChatbot",
        description: "Platform that lets you write messages with bots whatever you want to do without humans knowing",
        image: "/assets/img/dollos-chatbot.png",
        url: "https://github.com/doltonsedward/DollosChatbot"
    },
]

export { buttonRipple, showAlert, dataPortfolio }