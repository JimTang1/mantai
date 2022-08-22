window.addEventListener("load",(e)=>{
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    const forcaseURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log('first jsObject: ');
    console.log(jsObject);
    document.querySelector('.speed').textContent = jsObject.wind.speed;
    document.querySelector('.humi').textContent = jsObject.main.humidity;
    document.querySelector('.chill').textContent = jsObject.main.temp_min;
    document.querySelector('.high').textContent = jsObject.main.temp_max;
    document.querySelector('.description').textContent = jsObject.weather[0].description;
  })

  fetch(forcaseURL)
  .then(response => response.json())
  .then((jsObject) =>{
    console.log('Second jsObject: ');
    console.log(jsObject);
    console.log('jsObject list: ');
    console.log(jsObject['list']);  

    const lists = jsObject['list'];
    let day = 1;

    let time = "";
    let d = new Date;
    let hour = d.getHours();
    
    console.log(hour);

    if(hour >= 0 && hour < 3){
      time = "00:00:00";
    }else if(hour >= 3 && hour < 6){
      time = "03:00:00";
    }else if(hour >= 6 && hour < 9){
      time = "06:00:00";
    }else if(hour >= 9 && hour < 12){
      time = "09:00:00";
    }else if(hour >= 12 && hour < 15){
      time = "12:00:00";
    }else if(hour >= 15 && hour < 18){
      time = "15:00:00";
    }else if(hour >= 18 && hour < 21){
      time = "18:00:00";
    }else if(hour >= 21){
      time = "21:00:00";
    }else{
      return;
    }

    console.log(time);


    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
      if(time == timeInDay){
        document.querySelector('.day' + day).textContent = date;  
        document.querySelector('.temp' + day).textContent = lists[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
        const desc = lists[i].weather[0].description;  // note how we reference the weather array
        console.log(imagesrc);
        console.log(desc);
        
        document.querySelector('.img'+day).setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.querySelector('.img'+day).setAttribute('alt', desc);     
        day++; 
      }
    }
  })
});

