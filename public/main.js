const form = document.getElementById('vote-form')

form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=fed]:checked').value
    const data = {fed: choice}

    fetch('http://localhost:3000/poll', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    e.preventDefault()

})