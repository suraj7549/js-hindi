//singalton
//objects.creat


//objects litreals

// const mySym = Symbol("mykey1");
const jsUser={
    name: "suraj",
    email: "suraj@gmail.com",
    mySym:"mykey",
    age: 20,
    lacation: "jaipur",
    isLoggedIn: "false",
    lastLoggedIn: ["monday","sunday"],
    "fullName": "suraj"
} 

// console.log(jsUser.age);
// console.log(jsUser["name"]);
//console.log(jsUser."fullName"). this is wrong notation

// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
//       BUT

//console.log(jsUser[mySym]);
//console.log(typeof jsUser.mySym);

// jsUser.email="suaj34@gmail.com";
// Object.freeze(jsUser); //this is freeze the jsUser.ge ka value
// jsUser.age=13;
// console.log(jsUser);

jsUser.greatting=function()
{
    console.log("hello jee ");
}

jsUser.greattingtwo=function()
{
    console.log(`hello jee,${this.name} `);
}

jsUser.greattingthree=function()
{
    console.log(`hello jee,${this.isLoggedIn} `);
}
console.log(jsUser.greatting());
console.log(jsUser.greattingtwo());
console.log(jsUser.greattingthree());
