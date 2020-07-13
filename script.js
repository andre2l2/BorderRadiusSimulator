document.addEventListener('keydown', press);

function press(event) {
    const input1 = document.querySelector('.input1').value;
    const input2 = document.querySelector('.input2').value;
    const input3 = document.querySelector('.input3').value;
    const input4 = document.querySelector('.input4').value;

    const simulator = document.querySelector('.simulator-over');
    const result = document.querySelector('.result');

    if (event.key === 'Enter') {
    
        simulator.style.borderRadius = `
            ${input1}px 
            ${input3}px 
            ${input4}px 
            ${input2}px
        `

        result.innerHTML = `border-radius: ${input1}px ${input3}px ${input4}px ${input2}px;`
    }
}