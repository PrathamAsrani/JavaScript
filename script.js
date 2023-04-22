const ages = [31, 32, 10, 15, 18, 20, 17];

const checkAge = (age) =>{
  return age>=document.getElementById("ageToCheck").value;
};

function myFunction(){
    document.getElementById("result_display").innerHTML = ages.filter(checkAge);
}

// result_display