function generateUserName(){

    let fullName = prompt("Enter your Full Name: ");
    let fnameInital = fullName[0];
    let lastName = fullName.split(" ").slice(-1)[0].trim();
    let lengthUserName = fullName.length;
    
    let userName = "@"+fnameInital+lastName+lengthUserName
    console.log(userName);
    
    
    
    
    document.getElementById("generatedUsername").innerHTML = "Generated UserName: <strong>"+userName;
}





