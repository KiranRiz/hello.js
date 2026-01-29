function Action() {
    let name = document.getElementById("text1").value;
    let age = document.getElementById("text2").value;

    let output = "Your " + name + ", age " + age;

    document.getElementById("result").innerHTML = output;
}