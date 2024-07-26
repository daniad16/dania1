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
        console.log(json);
        let countries = document.getElementById('students');
        json.forEach(element => {
            let country = document.createElement('option');
            country.innerHTML= element.name.common;
            countries.appendChild(country);
        })
    }
    )