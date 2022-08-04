const questions = document.querySelectorAll(".question")


questions.forEach(question => {

    question.addEventListener("click", e => {
    const previousActive = document.querySelector(".active")

    console.log(e.currentTarget.classList.contains("active"))
    if (e.currentTarget.classList.contains("active")) {
        
        e.currentTarget.classList.remove("active")

    } else if (previousActive) {
        previousActive.classList.remove("active")
        e.currentTarget.classList.toggle("active")

    } else {

        e.currentTarget.classList.toggle("active")
    }
    
    })
})