let goBack = () => window.history.back();
// 'history' is a property of 'window' and 'back' is a method inside 'history'

let changeColor = () =>{
    let h = document.getElementById("heading");
    let c = document.querySelector("#colorModify").value;
    console.log(c);
    alert(c);
    h.style.color = c;
}

let submit = () => {
    let t = document.querySelector("#Para").value;
    alert(t);
    document.getElementsByClassName("demo1").innerHTML = "HII";
    let p = document.querySelector(".demo");
    p.innerHTML = t;
    let d1 = document.getElementsByClassName("demo1");
    console.log(d1);
    d1.innerHTML = t;
};

let onSubmit = () =>{
    console.log(document.getElementsByName('gender'));
    document.querySelector('.paragraph').innerHTML = "Hello World!";
    alert(`The number of paragraph class elements: ${document.querySelectorAll('.paragraph')}`);
    let val = document.querySelector(".testing").innerHTML;
    console.log(val);
}