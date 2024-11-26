let nameBtn = document.getElementById('nameBtn');
let nameDisplay = document.getElementById('nameDisplay');
let previousNames = document.getElementById('previousNames');
let instructorDisplay = document.getElementById('instructorDisplay');
let emailDisplay = document.getElementById('emailDisplay');
let codeEmailDisplay = document.getElementById('codeEmailDisplay')








function getStudentData()
{
   return fetch('../data/data.json')
    .then( response => response.json())
    .then( data => {
        
        return data.students
    })
}



function getRandomStudent1(students)
{
    let randomIndex = Math.floor(Math.random() * students.length );
    console.log(students[randomIndex]);
    return students[randomIndex];
}

// function getRandomStudent2(students)
// {
//     let randomIndex = Math.floor(Math.random() * students.length );
//     console.log(students[randomIndex].lastName);
//     return students[randomIndex].lastName;
// }

// function getRandomStudent3(students)
// {
//     let randomIndex = Math.floor(Math.random() * students.length );
//     console.log(students[randomIndex].email);
//     return students[randomIndex].email;
// }

// function getRandomStudent4(students)
// {
//     let randomIndex = Math.floor(Math.random() * students.length );
//     console.log(students[randomIndex].codeEmail);
//     return students[randomIndex].codeEmail;
// }









nameBtn.addEventListener('click', () => 
    {
        getStudentData()
        .then(students => {
            let randomStudentName = getRandomStudent1(students);
            // let randomStudentLastName = getRandomStudent2(students);
            // let randomStudentEmail = getRandomStudent3(students);
            // let randomStudentCodeEmail = getRandomStudent4(students);
           
    
        nameDisplay.innerText = `${randomStudentName.Name} ${randomStudentName.lastName}`
        emailDisplay.innerText = randomStudentName.email
        codeEmailDisplay.innerText = randomStudentName.codeEmail
        let pTag = document.createElement('li');
        pTag.textContent = `${randomStudentName.Name} ${randomStudentName.lastName}`
        if (previousNames.children.length >= 5)
        {
            previousNames.removeChild(previousNames.firstChild);
        }
        previousNames.appendChild(pTag);
       
    
    })
    })


   