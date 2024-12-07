const Localisation = [

    "IntroductionButton",
    "About me",
    "ＡＢＯＵＴ",

    "IntroductionHeader",
    "About me",
    "ＡＢＯＵＴ",

    "IntroductionBody",
    "I am a game developer and game design student who loves all things games.\nFluent in many programming langauges, and familiar with more.\n\nI don't currently have any professional experience, but I am looking for some. Please contact me if you're hiring!",
    "日本語まだ勉強中なので、間違いがあったら許してください。\n\nゲーム開発者とゲームデザイン学生で。ゲーム全般を愛しています。\n多くのプログラミング言語に堪能で、さらに多くの言語に精通している。\n\n今でプロとしての経験はありませんが、いくつか探しています。募集している方はご連絡ください！いつか東京で働きたい。",

    "WorksButton",
    "My Work",
    "ＷＯＲＫＳ",

    "WorksHeader",
    "My Work",
    "ＷＯＲＫＳ",

    "ContactButton",
    "Contact Me",
    "ＣＯＮＴＡＣＴ",

    "ContactHeader",
    "Contact Me",
    "ＣＯＮＴＡＣＴ"

];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LanguageSelectAnimation(languageButton){
    var buttonRect = languageButton.getBoundingClientRect();
    languageButton.style.opacity = 0;

    var MainContainer = document.getElementById("MainContainer")

    MainContainer.style.top      = "calc("           + buttonRect.top    + "px)";
    MainContainer.style.bottom   = "calc( 100vh - "  + buttonRect.bottom + "px)";
    MainContainer.style.right    = "calc( 100vw - "  + buttonRect.right  + "px)";
    MainContainer.style.left     = "calc("           + buttonRect.left   + "px)";
    
    //document.getElementById("MainContainer").style.transitionDuration = "1s";
    MainContainer.style.opacity = 100;
    MainContainer.style.animation = "MainContainerOpen";
    MainContainer.style.animationDuration = "1s";
    MainContainer.style.animationFillMode = "forwards"

    MainContainer.style.pointerEvents = "all";

    MainContainer.style.setProperty("--MainContainerStartTop", MainContainer.style.top);
    MainContainer.style.setProperty("--MainContainerStartBottom", MainContainer.style.bottom);

}

function TransitionToMain(){
    document.getElementById("TitleDiv").style.opacity = 0;
    document.getElementById("TitleDiv").style.setProperty("bottom", 'calc(19.75vh - 2.5vw)');
    document.getElementById("TitleDiv").style.transition = "opacity linear bottom linear";
    document.getElementById("ButtonContainer").style.opacity = 0;
    document.getElementById("ButtonContainer").style.pointerEvents = "none";
    document.getElementById("Sea").style.top = "80vh";

    document.getElementById("Audio_Ambient").loop = true;
    document.getElementById("Audio_Ambient").play();
}

function LanguageSelect_EN(){

    SetLanguage(0);
    LanguageSelectAnimation(document.getElementById("LanguageEN"));
    TransitionToMain();

}

function LanguageSelect_JP(){

    SetLanguage(1);
    LanguageSelectAnimation(document.getElementById("LanguageJP"));
    TransitionToMain();

}

function SetLanguage(language){

    for(let i = 0; i <Localisation.length; i += 3){
        document.getElementById(Localisation[i]).innerText = Localisation[i + 1 + language];
    }

}