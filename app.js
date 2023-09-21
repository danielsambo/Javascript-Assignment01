function myFunction(){
    let name = prompt("Enter your Name");

    console.log(name);

  
}

let kgRef = document.getElementById("Kilograms");
let lbRef = document.getElementById("pounds");


let convertFromkg = () => {
    let kg = kgRef.Value;

    lbRef.Value = (kg * 2.205).toFixed(2);

}
let convertFromlb = () => {
    let lb = lbRef.Value;

    kgRef.Value = (lb / 2.205).toFixed(2);


}

kgRef.addEventListener("input", convertFromkg);

lbRef.addEventListener("input", convertFromlb);
 
