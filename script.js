


const printData = (data) => {
    console.log(data)

    let icon = data.weather[0].icon
    console.log(icon)
    const urlIcons = `https://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(urlIcons)
    const imageCloud = document.getElementById('iconCloud')
    imageCloud.src = urlIcons

    const temp = document.getElementById('temp')
    temp.textContent = data.main.temp

    const tempMin = document.getElementById('min-temp')
    tempMin.textContent = 'min:' + data.main.temp_min

    const tempMax = document.getElementById('max_temp')
    tempMax.textContent = 'max:' + data.main.temp_max

    const name = document.querySelector('.purple')
    name.textContent = data.name


}




const horaActual = () => {
    const hoy = new Date()
    const hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds()

    return hora
}

const getData = (ciudadd) => {
    const key = 'b896dabb43a532af98999e5a17412826'

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadd}&appid=${key}&units=metric`

    fetch(url)
        .then(res => res.json())

        .then(data => {

            printData(data)
            console.log('todo bien')
        })
        .catch(err => console.log(err))


}


getData("cordoba")


const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const value = document.getElementById('ciudadd')
    console.log(value.value)
    City = value.value
    getData(City)
})