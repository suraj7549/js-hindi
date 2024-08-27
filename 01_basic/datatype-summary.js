
//stack memory (primitive). heap memory (non primitive)

let myNameIs="suraj kumar";
let anotherName=myNameIs;
anotherName="sachin"

console.log(myNameIs);
console.log(anotherName);


let userOne={
    email: "suraj@123gmail.com",
    age: 23,
}
let userTwo=userOne;
userTwo.email="sachim123@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
