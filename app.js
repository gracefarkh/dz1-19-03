const phoneNum = document.querySelector(".phoneNum")
const phoneSubmit = document.querySelector(".phoneSubmit")
const result = document.querySelector("#result")

 
const personalNumber = document.querySelector(".personalNumber")
const numberSubmit = document.querySelector(".numberSubmit")
const resultt = document.querySelector("#resultt")


// const date = document.querySelector(".dateOfBirth")
// const submitOfBirth = document.querySelector(".submitOfBirth")
// const resultt3 = document.querySelector("#resultt3")
// console.log(date)

let regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}/

phoneSubmit.addEventListener("click", () => {
    if(regExp.test(phoneNum.value)){
        result.innerText = "Acceptable"
        alert("Success")
        result.style.color = "green"
    }else{
        result.innerText= "Unacceptable"
        result.style.color = "red"
        alert(result.innerText  + " " + " ,please enter your number correctly")
    }
});
// const regexp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)|0[1-9]{2}$/;
// let regexr = /^[1-2]\d{13}$/
// let regexr = /[12] {14}/
// let regexr = /[1-2][0-9]/
// let regexr = /[12] \d{14}/
// let regexr = /\d{1,2}/
// let regexr =/ [12][0-9]/


let regexp2 = /^[1-2]\d{13}$/

numberSubmit.addEventListener("click" , ()=>{
    if(regexp2.test(personalNumber.value)){
        resultt.innerText = "Acceptable"
        alert("Success")
        resultt.style.color = "green"
    }else{
        resultt.innerText = "Unacceptable"
        resultt.style.color = "red"
        alert(resultt.innerText + " ,please enter your personal number correctly")
    
    }
});
const date = document.querySelector(".dateOfBirth")
const dateSubmit = document.querySelector(".dateSubmit")
const resultt3 = document.querySelector("#resultt3")
console.log(date);

let regexp3 = /^(0[1-9]|[1-2][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19[0-9][0-9])|(202[0-2]|200[0-9])$/

dateSubmit.addEventListener("click", () => {
    if(regexp3.test(date.value)){
        resultt3.innerText = "Acceptable"
        alert("Success")
        resultt3.style.color = "green"
    }else{
        resultt3.innerText= "Unacceptable"
        resultt3.style.color = "red"
        alert(resultt3.innerText  + " " + " ,please enter date of birth correctly")
    }
});



// const subm = document.querySelector('.subm')
// const form = document.querySelector('.validation')

// subm.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log('hi');
//     const formd = new FormData(form)
//     console.log(formd)
   
// })