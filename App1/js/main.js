// Your code here!
//function myFunction(a, b) {
   // return a + b;
//}

function arrays() {
    var pens;
    pens = ['red', 'orange', 'green', 'blue', 'purple'];
    markers = pens;
    console.log(markers);
    console.log(markers[0]);
    for (i = 0, i < markers.length; i++;) {
        alert(pens[i]);
    }
    alert("length of array is:" + markers.length);
}