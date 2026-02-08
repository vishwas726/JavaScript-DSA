let email = "9.t@in.com"



const validEmail = (email) => {

    let emailsParts = []

    let splited = email.split("@")


    // console.log(splited)

    for (let i = 0; i < splited.length - 1; i++) {
        if (splited[i].trim() && checkDot(splited[i + 1]) && splited[i + 1][splited[i + 1].length-2] != ".") {

            emailsParts.push([splited[i], splited[i + 1]])
            
        }else{
            console.log("email is not valide")
            return;
        }
    }

    console.log("it consiste multiple valid emails")


}

const checkDot = (data) => {

    for (let i = 1; i < data.length - 1; i++) {

        if (data[i] == ".") {

            if (data[i - 1] < "z" && data[i - 1] > "a" && data[i + 1] < "z" && data[i + 1] > "a") {

                return true;

            }
        }
    }

    return false;


}

validEmail(email)