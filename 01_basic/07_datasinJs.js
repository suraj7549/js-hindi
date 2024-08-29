//DATE

// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let creatMydata=new Date(2009,0,9);
// let creatMydata=new Date(30009,0,3,4,34);


//let creatMydata=new Date("30009-12-23");
//  console.log(creatMydata.toLocaleString());

 //let myDateStamp=Date.now();
//  console.log(myDateStamp);
//  console.log(creatMydata.getTime());
//console.log(Date.now()/1000); have after decimal problem
//console.log(Math.floor(Date.now()));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time is `
newDate.toLocaleString('default',{
    weekday:"long",
})

