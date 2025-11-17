let add=document.querySelector(".add");
let subtract=document.querySelector(".subtract");
let multiply=document.querySelector(".multiply");
let divison=document.querySelector(".divison");
let equal=document.querySelector(".equal");
let number=document.querySelectorAll(".number");
let output=document.querySelector(".output>*");
let signs=document.querySelectorAll(".operators>*");
let allclear=document.querySelector(".allclear");
let backspace=document.querySelector(".backspace");
let errorbox=document.querySelector(".error");
let history=document.querySelector(".history");

console.log(number);
console.log(signs);
let op="";

isEmpty=true;
number.forEach(num=>{
   num.addEventListener("click",()=>{
    op=op+num.innerHTML;
    output.innerHTML=output.innerHTML+num.innerHTML;
    isEmpty=false;
    })
})
equal.addEventListener("click",()=>{
    if(!isEmpty){
        let expression =op;
        result=eval(op);
        op=`${result}`;
        output.innerHTML=result;
        let item=document.createElement("div");
        item.innerHTML=`<div class="historyelement"><b>${expression}</b><div style="font-size:30px;">=${result}</div></div>`
        history.prepend(item);
    }else{
        errorbox.classList.add("show")
        setTimeout(()=>{
            errorbox.classList.remove("show");
        },2000);
    }
})
signs.forEach(sign=>{
    sign.addEventListener("click",()=>{
    if(!isEmpty){
        output.innerHTML=output.innerHTML+sign.innerHTML;
        op=op+sign.innerHTML;
    }
    else{
        errorbox.classList.add("show")
        setTimeout(()=>{
            errorbox.classList.remove("show");
        },2000);
    }
    })
})
allclear.addEventListener("click",()=>{
    result="";
    op="";
    output.innerHTML="";
})
backspace.addEventListener("click",()=>{
    if(op.length > 0){              // Only backspace if something exists
        op = op.slice(0, -1);       // Remove last character from op
        output.innerHTML = output.innerHTML.slice(0, -1); // Update display
        
        // Check if empty now
        if(op.length === 0){
            isEmpty = true;
        }
    }
});
