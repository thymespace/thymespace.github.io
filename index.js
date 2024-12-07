const Localisation = [

    "IntroductionHeader",
    "About me",
    "ＡＢＯＵＴ",

    "IntroductionBody",
    "",
    "日本語まだ勉強中なので、間違いがあったら許してください。\n"

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