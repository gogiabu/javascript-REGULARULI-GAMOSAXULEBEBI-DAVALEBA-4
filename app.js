var pattern = /[A-Z]/;
var str = "Sacdeli versia"
const result = pattern.test(str);

if (result) {
    document.write("true");
}
else {
    document.write("არ არსებობს");
}

