function output() {
    if (document.getElementById ("reply").value == "./clr") {
        document.getElementById ("Output").innerHTML = "&nbsp;89CMD [Version  " + vertion + "] <br>"
        document.getElementById ("reply").value = ""
    } else if (document.getElementById ("reply").value == "./ver"){
       var1 = "89CMD [Version  " + vertion + "]"
    }else {
        var1 = "'" +document.getElementById ("reply").value + "' is not recognized as an command."
    }


    end(var1)
}

