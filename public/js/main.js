const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal == ""){
        city_name.innerText = `please write name before search`;
        datahide.classList.add('data_hide');
    }
     else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ab9eb48f9bc11ac40edaae5fc2410cf2`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear") {
                temp_status.innerHTML =
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } 
            else if (tempMood == "Clouds") {
                    temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #f1f2f6;'></i>";

            }
            else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

            }
    
        catch{
            city_name.innerText = `please enter city name properly`;
            datahide.classList.add('data_hide');
            }
        
    }


} 

submitBtn.addEventListener('click', getInfo);