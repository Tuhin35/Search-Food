function loadusers4() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayusers2(data))
    // .then(data1 => console.log(data1[2].name));
}



function displayusers2(data) {
    data.forEach(obj => {
        const { name, email, address } = obj;
        const { street, suite, city, geo } = address;
        const {lng} = geo ;
        const info = `
        NAme: ${name}
        Email:${email}
        Location:${street} ,${suite} ,${city}
        lng ${lng}
        `
        const ul = document.getElementById('user-list')
       
        // if ( lng >=0){
        //     console.log(info)
        // }
   for (const user of data) {
    const li = document.createElement('li')
  
       
li.innerText = info
        ul.appendChild(li);
         


    
   }



    });

}
