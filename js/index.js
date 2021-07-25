let btns = document.querySelectorAll('#buttons button');
let dc = document.getElementById('dynamic-content');
console.log(btns);



// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "./img/hydro.jpg",
        "./img/wind.jpg",
        "./img/solar.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);



const data = {
    hydroPower:{
        headingContent: "Hydro Power Energy",
        bodyText: "As a renewable energy resource, hydro power is one of the most commercially developed. By building a dam or barrier, a large reservoir can be used to create a controlled flow of water that will drive a turbine, generating electricity. This energy source can often be more reliable than solar or wind power (especially if it's tidal rather than river) and also allows electricity to be stored for use when demand reaches a peak. Like wind energy, in certain situations hydro can be more viable as a commercial energy source (dependant on type and compared to other sources of energy) but depending very much on the type of property, it can be used for domestic, ‘off-grid’ generation.",
        imgUrl: "./img/hydro.jpg",
        imgAlt: "Hydro Power image"
    },

    windPower: {
        headingContent: "Wind Power Energy",
        bodyText: "Wind is a plentiful source of clean energy. Wind farms are an increasingly familiar sight in the UK with wind power making an ever-increasing contribution to the National Grid. To harness electricity from wind energy, turbines are used to drive generators which then feed electricity into the National Grid. Although domestic or ‘off-grid’ generation systems are available, not every property is suitable for a domestic wind turbine.",
        imgUrl: "./img/wind.jpg",
        imgAlt: "Wind Power image"
    },

    solarPower: {
        headingContent: "Solar Power Energy",
        bodyText: "Sunlight is one of our planet’s most abundant and freely available energy resources. The amount of solar energy that reaches the earth’s surface in one hour is more than the planet’s total energy requirements for a whole year. Although it sounds like a perfect renewable energy source, the amount of solar energy we can use varies according to the time of day and the season of the year as well as geographical location. In the UK, solar energy is an increasingly popular way to supplement your energy usage.",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solar Power image"
    }
};

let markup = `<h2>${data.hydroPower.headingContent}</h2>
             <img src="${data.hydroPower.imgUrl}" alt="~${data.hydroPower.imgAlt}" />
          <p> ${data.hydroPower.bodyText}</p>`;

dc.innerHTML = markup;

/*  Start handleSelection function here. */
function handleSelection(e) {

    let currentItem = e.target;
    
            
    for (let i = 0; i < btns.length; i++) {
        
        if (btns[i].hasAttribute('id')) {
            
            btns[i].removeAttribute('id');
        }
    }

    currentItem.setAttribute('id', 'active-button');
    
 
    let button2 = `<h2>${data.windPower.headingContent}</h2>
             <img src="${data.windPower.imgUrl}" alt="~${data.windPower.imgAlt}" />
          <p> ${data.windPower.bodyText}</p>`;
    
    let button3 = `<h2>${data.solarPower.headingContent}</h2>
             <img src="${data.solarPower.imgUrl}" alt="~${data.solarPower.imgAlt}" />
          <p> ${data.solarPower.bodyText}</p>`;
    
   
   
    if (currentItem.classList.contains('btn2') ) {
        
        dc.innerHTML = button2;
        
    
    } else if (currentItem.classList.contains('btn3')) {
        dc.innerHTML = button3;

    } else {
        dc.innerHTML = markup;
        }
    
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleSelection);
 
}

