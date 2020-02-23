document.addEventListener(`keydown`, (event) => {
    
    if (event.key === 'Enter') {
        
        let input1 = document.getElementById(`input1`).value
        let input2 = document.getElementById(`input2`).value
        let input3 = document.getElementById(`input3`).value
        let input4 = document.getElementById(`input4`).value

        let generator = document.getElementById(`generatior`)
        generator.style.borderRadius = `${input1}px ${input2}px ${input4}px ${input3}px`

        let res = document.getElementById(`res`)

        res.innerHTML = `- border-radius:${input1}px ${input2}px ${input4}px ${input3}px;`

    }

})
