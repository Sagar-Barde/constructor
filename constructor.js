

function Person (){
    this.name="sagar";
    this.age=10;

    this.greet=function(){
        console.log("good ");
    }
}

let  person1 =new Person();
let  person2 =new Person();

console.log(person1.name);
console.log(person2.age);