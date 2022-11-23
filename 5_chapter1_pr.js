let a = "Pratham";
let b = 100;
let c = a+b;

console.log(typeof a, typeof b, typeof c);
console.log(a,b,c);

const ya = {
    name: "Pratham",
    section : "Btech_2nd_year",
    Grade : "A+",
    Rank : 1
}

// ya = 54  // throw an error we cannot put value in the object after declaraing it

ya["friend"] = "Live";
ya["friend"] = "Pratham";//friend changed from live to Pratham
ya['lala'] = 'lolo';
console.log(ya);


const dict = {
    appreciate: "recognize thw full worth of.",
    yakka : "work, especially hard work.",
    ataraxia : "a state of freedom from emotional disturbance and anxiety."
}

console.log(dict.yakka);
console.log(dict['appreciate']);
console.log(dict.ataraxia);