function doSomething(){
    console.log(333);
}

console.log(222);
setTimeout(doSomething, 1);
console.log(444);
console.log(555);


setInterval(function(){
    console.log("Doing it");
}, 1000);