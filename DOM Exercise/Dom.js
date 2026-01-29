function Action() {
    let name = document.getElementById("text1").value;
    let age = document.getElementById("text2").value;

    let output = "Your Details " + name + ", age " + age;

    document.getElementById("result").innerHTML = output;
}