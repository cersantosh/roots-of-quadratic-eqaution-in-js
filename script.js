
let a = prompt("Enter value of a")
let b = prompt("Enter value of b")
let c = prompt("Enter value of c")

console.log(`Equation is ${a} x ^ 2 + ${b} x + ${c}`)

let dis = b * b - 4 * a * c;
let root1;
let root2;



if(dis == 0){
    root1 = root2 = (-b)/ (2 * a);
    console.log("Roots are real and equal")
    console.log(`Root1 = ${root1.toFixed(3)} and Root2 = ${root2.toFixed(3)}`)
}
else if(dis > 0){
    root1 = ((-b) + Math.sqrt(dis)) / (2 * a);
    root2 = ((-b) - Math.sqrt(dis)) / (2 * a);
    console.log("Rotts are real and unequal")
    console.log(`Root1 = ${root1.toFixed(3)} and Root2 = ${root2.toFixed(3)}`)

}
else{
    let real = (-b) / (2 * a);
    root1 = root2 = Math.sqrt(-dis) / (2 * a);
    root1 = root2 = root1.toFixed(3);
    console.log("Roots are imaginary and unequal")
    console.log(`Root1 = ${real} + i ${root1} and Root2 = ${real} - i ${root2}`)
}
