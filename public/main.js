const form = document.getElementById('vote-form')
// Form Submit Event
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

let dataPoints = [
    { label: 'James', y: 0 },
    { label: 'Doug', y: 0 },
    { label: 'Cristin', y: 0 },
    { label: 'Caleb', y: 0 }
]

const chartContainer = document.querySelector('#chartContainer')
if(chartContainer) {
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text: 'FED Results'
        },
        data: [
            {
                type: 'column',
                dataPoints: dataPoints
            }
        ]
    })
    chart.render()

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('4bc8ef10221bac6c9838', {
        cluster: 'us2'
    });

    var channel = pusher.subscribe('fed-poll');
    channel.bind('fed-vote', function(data) {
       dataPoints = dataPoints.map(x => {
           if(x.label == data.fed) {
                x.y += data.points
                return x
           } else {
               return x
           }
       })
       chart.render()
    });
}