var obj = {
    greet: "hello kavitha"
}
console.log(obj.greet);
console.log(obj["greet"]);
var prop = "greet";
console.log(obj[prop]);


var arr = [];

arr.push(function () {
    console.log("hi 1");
});

arr.push(function () {
    console.log("hi 2");
});

arr.forEach(function (items) {
    items();
});