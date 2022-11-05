const phoneNum = document.querySelector(".phoneNum")
const phoneSubmit = document.querySelector(".phoneSubmit")
const result = document.querySelector("#result")
console.log(phoneNum)
 
const personalNumber = document.querySelector(".personalNumber")
const numberSubmit = document.querySelector(".numberSubmit")
const resultt = document.querySelector("#resultt")
console.log(personalNumber)

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

let regexr = /^[12]\d{13}/
// let regexr = /[12] {14}/
// let regexr = /[1-2][0-9]/
// let regexr = /[12] \d{14}/
// let regexr = /\d{1,2}/
// let regexr =/ [12][0-9]/

numberSubmit.addEventListener("click" , ()=>{
    if(regexr.test(personalNumber.value)){
        resultt.innerText = "Acceptable"
        alert("Success")
        resultt.style.color = "green"
    }else{
        resultt.innerText = "Unacceptable"
        resultt.style.color = "red"
        alert(resultt.innerText + " ,please enter your personal number correctly")
    
    }
});

// if (phoneNum.lenght===0){
//     result.innerHTML = "phone number is required"
//     return false
// }
// if (!phoneNum.matches( /^[12]\d/)){
//     result.innerHTML = "enter full phone number"
//     return false
// }


