let add = document.querySelector(".add") 
let subtract = document.querySelector(".subtract") 
let multiply = document.querySelector(".multiply") 
let division = document.querySelector(".division") 
let allclear = document.querySelector(".allclear") 
let number = document.querySelectorAll(".num") 
let signs = document.querySelectorAll(".sign") 
console.log(number) 
let output = document.querySelector(".output h3") 
let equal = document.querySelector(".equal") 
let operation = ""; 
let op = ""; 
let isempty = true; 
equal.addEventListener("click", () => {
    if (!isempty) {
        let result = eval(op);
        console.log(result)
        output.innerHTML = result;
        op = result.toString(); 
    } else {
        alert("Complete an operation first");
    }
});
signs.forEach(sign => { 
    sign.addEventListener("click", (e) => { 
        if (!isempty) { 
            output.innerHTML = output.innerHTML + sign.innerHTML; 
            op = op + sign.innerHTML; 
        } else { 
            alert("enter a number first") 
        } 
    }) 
}) 
number.forEach(num => { 
    num.addEventListener("click", (e) => { 
        output.innerHTML = output.innerHTML + num.innerHTML; 
        op = op + num.innerHTML; 
        isempty = false; 
    }) 
}) 
allclear.addEventListener("click", () => { 
    output.innerHTML = ""; 
    op = ""; 
    isempty = true; 
}) 
subtract.addEventListener("click", () => { 
    operation = "-"; 
}) 
multiply.addEventListener("click", () => { 
    operation = "*"; 
}) 
division.addEventListener("click", () => { 
    operation = "/"; 
})