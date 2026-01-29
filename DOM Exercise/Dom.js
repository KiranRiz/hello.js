function Action() {

    let name = document.getElementById("text1").value;
    let age = document.getElementById("text2").value;

    let output = "your" + name + "and age is" + age;

    document.getElementById("result").innerHTML = output;

}