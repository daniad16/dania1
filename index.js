//fetch('http://localhost:1234/')
  //  .then(response => response.json())
    //.then(json => {
      //  console.log(json);
      //  let students = document.getElementById('students');
      //  json.forEach(element => {
        //    let student = document.createElement('option');
        //    student.innerHTML= element.name;
        //    students.appendChild(student);
       // })
   // }
   // )
   fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
       let countries = document.getElementById('countries');
       json.forEach(element => {
        let country = document.createElement('div');
        country.innerHTML= element.name.common;
        let flags = document.createElement('img');
       flags.src = element.flags.png;
       country.addEventListener('click',()=>{
        let population = document.createElement('div');
        population.innerHTML= element.population;
        country.appendChild(population);
       })
       countries.appendChild(country);
       country.appendChild(flags);
       });
    })