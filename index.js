// let ajay=Math.random();
// ajay = ajay*10;
// ajay = Math.floor(ajay);
// console.log(ajay+1);
function generatePassword(len,isdigit,isuppercase,islowercase,issymbol,isemoji)
{
    if(len<=0)
    {
        return "varadhu poda😝";
    }
    let characterSet = "";
    if(isdigit)
    {
        characterSet+="1234567890";
    }
    if(isuppercase)
    {
        characterSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(islowercase)
    {
        characterSet+="abcdefghijklmnopqrstuvwxyz";
    }
    if(issymbol)
    {
        characterSet+="!~#$%^&*?/><`";
    }
    if(isemoji)
    {
        characterSet+="🛒🏐🎧🎤🎮🌚🖤🤍⚫🔘";
    }
    // let ajay=characterSet.length;
    //  let password="";
    // for(let i=0;i<len;i++)
    // {
    //     let someone = Math.random()*ajay;
    //    let randomindex=Math.floor(someone);
    //     password+=characterSet[randomindex];
    // }
    // return password;
    if (characterSet.length === 0) {
        return "Select at least one option!";
    }

    let password = "";
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
}


function baii(){
    // let ajay = document.getElementById("digit").checked;
    // console.log(ajay);User Interface and Application Development: React Native (for mobile applications), Unity or Unreal Engine, Flutter
    let isdigit= document.getElementById("digit").checked;
let isuppercase= document.getElementById("uppercase").checked;
let islowercase= document.getElementById("lowercase").checked;
let issymbol= document.getElementById("symbol").checked;
let isemoji=document.getElementById("emoji").checked;
let len=document.getElementById("a").value;
let password =generatePassword(len,isdigit,isuppercase,islowercase,issymbol,isemoji);
console.log(password);
let text = document.getElementById("hehehe");
text.textContent = password;
}