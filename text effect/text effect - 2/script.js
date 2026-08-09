const para = document.querySelector("p");
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText


let iteration = 0;

// function randomText(){
//     const str = text.split("").map((char,index)=>{
//         if(index < iteration){
//             return char;
//         }
//         return character.split("")[Math.floor(Math.random()*53)]
//     }).join("")
//     p.innerText = str;
//     iteration += 0.2; 
// }

// setInterval(randomText,20);
para.addEventListener("mouseenter",function randomText(){
    const str = text.split("").map((char,index)=>{
        if(index < iteration){
            return char;
        }
        return character.split("")[Math.floor(Math.random()*53)]
    }).join("")
    para.innerText = str;
    iteration += 0.05; 
    setInterval(randomText,200)
}
)
