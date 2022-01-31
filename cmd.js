function output() {
    if (document.getElementById ("reply").value == "./clr") {
        document.getElementById ("Output").innerHTML = "&nbsp;89CMD [Version  " + vertion + "] <br>"
    } else {
        document.getElementById ("Output").innerHTML = document.getElementById ("Output").innerHTML + "<br>" + "-+'" + document.getElementById ("reply").value + "' is not recognized as an command."
    }


}

