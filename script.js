const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': 'a55f479653msh06776c3c3cf18fbp1f64a8jsnc453111f9c23',
		// 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        'X-RapidAPI-Key': 'a55f479653msh06776c3c3cf18fbp1f64a8jsnc453111f9c23',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        
        // cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;

        feels_like.innerHTML = response.feels_like;

        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;

        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;

        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;

        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;      
    })
	.catch(err => console.error(err));
}

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) =>{
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Mumbai");

const addCity = (temp) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+temp, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);

        let tr = document.createElement('tr');
        
        let th =  tr.appendChild(document.createElement('th'));
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        let td5 = tr.appendChild(document.createElement('td'));
        let td6 = tr.appendChild(document.createElement('td'));

        th.innerText = temp;
        th.classList.add('text-start', 'text-primary')
        td1.innerText = response.temp;
        td2.innerText = response.max_temp;
        td3.innerText = response.min_temp;
        td4.innerText = response.sunrise;
        td5.innerText = response.sunset;
        td6.innerText = response.humidity;

        document.getElementById("table1").appendChild(tr);
        
    })
	.catch(err => console.error(err));
};

addCity("Mumbai");
addCity("Pune");
addCity("Delhi");
addCity("Amritsar");
addCity("Hyderabad");
addCity("Surat");
addCity("Nashik");
addCity("Kolkata");
addCity("Jaipur");
addCity("Chennai");
addCity("Ahmedabad");
addCity("Lucknow");
addCity("Chandigarh");
addCity("Bhopal");
addCity("Jodhpur");
addCity("Patna");
addCity("Indore");
addCity("Nagpur");
addCity("Kochi");
addCity("Dehradun");
addCity("Kanpur");
addCity("Agra");
addCity("Varanasi");
addCity("Guwahati");
addCity("Aurangabad");
addCity("Rajkot");
addCity("Jamshedpur");
addCity("Thiruvananthapuram");