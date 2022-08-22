window.addEventListener("load", (event)=>{

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
    .then(result => result.json())
    .then(jsonResult =>{
        console.log(jsonResult);
        jsonResult.towns.forEach(
            town =>{
                // if(town.name == "Preston" ||
                // town.name == "Fish Haven" ||
                // town.name == "Soda Springs"){
                let section = document.createElement('section');
                let div = document.createElement('div');
                let div2 = document.createElement('div');
                let name = document.createElement('h2');
                let span = document.createElement('span');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let image = document.createElement('img');
                let events = document.createElement('h3');
                let hr = document.createElement("hr");

                
                name.textContent = town.name;
                span.textContent = town.motto;
                yearFounded.textContent = "Year Founded: " + town.yearFounded;
                currentPopulation.textContent = "Population: " + town.currentPopulation;
                averageRainfall.textContent = "Annual Rain Fall: " + town.averageRainfall;
                image.setAttribute('src',"images/" + town.photo);
                image.setAttribute('alt',town.name);
                events.textContent = "Events:";
    
                div2.appendChild(name);
                div2.appendChild(span);
                div2.appendChild(yearFounded);
                div2.appendChild(currentPopulation);
                div2.appendChild(averageRainfall);
                div.appendChild(image);
                div.appendChild(hr);
                div.appendChild(events);
                town.events.forEach((event =>{
                    e = document.createElement('p');
                    e.classList.add('event');
                    e.textContent = event;
                    div.appendChild(e);
                }));
                section.appendChild(div2);
                section.appendChild(div);
                document.querySelector('.content').appendChild(section);
                // }
            }
        )
    })
});

let getDateNow =() =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const weekday = week[dateObj.getDay()];
    const output = weekday + ', '+ day  + '\n'+ month  + ' ' + year;

    const lu = document.querySelector('#lastupdated');
    lu.textContent = output;
}
   
window.addEventListener("load", (event)=>{
    getDateNow();
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();


    const hamBtn = document.querySelector(".ham");
    const mainnav = document.querySelector(".navigation");

    hamBtn.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')}, false);
    window.onresize = () =>{if(window.innerWidth>760) mainnav.classList.remove('responsive');};

});





