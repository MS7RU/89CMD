function output() {

    if (text == "./clr") {
        var1 = "Press F5 on your KeyBoard or Refresh the Page to clear!"
    } else if (text == "./ver"){
       var1 = "89CMD [Version  " + vertion + "]"
    } else if (text.split(" ")[0] == "./user"){
        var1 = "Username is set from'" + user +"' to '" + text.split(" ")[1] + "'."
        user = text.split(" ")[1]
    } else if (text == "./git" || text == "./github"){
        var1 = "Click this to go to git hub <a href='https://github.com/MS7RU/89CMD' target='_blank'>Click ME</a>"
    } else if (text == "./help") {
        var1 = "Go to this link to get help for comands <a href='https://github.com/MS7RU/89CMD/blob/main/README.md#comands' target='_blank'>Click ME</a>"
    } else {
        var1 = "'" +document.getElementById ("reply").value + "' is not recognized as an command."
    }


    end(var1)
}


