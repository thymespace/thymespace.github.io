function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LanguageSelectAnimation(languageButton){
    var buttonRect = languageButton.getBoundingClientRect();
    languageButton.style.opacity = 0;

    var MainContainer = document.getElementById("MainContainer")

    MainContainer.style.top      = "calc("           + buttonRect.top    + "px + 1.5vw)";
    MainContainer.style.bottom   = "calc( 100vh - "  + buttonRect.bottom + "px + 1.5vw)";
    MainContainer.style.right    = "calc( 100vw - "  + buttonRect.right  + "px + 1.5vw)";
    MainContainer.style.left     = "calc("           + buttonRect.left   + "px + 1.5vw)";
    
    //document.getElementById("MainContainer").style.transitionDuration = "1s";
    MainContainer.style.opacity = 100;
    MainContainer.style.animation = "MainContainerOpen";
    MainContainer.style.animationDuration = "1s";
    MainContainer.style.animationFillMode = "forwards"
}

function TransitionToMain(){
    document.getElementById("TitleDiv").style.opacity = 0;
    document.getElementById("TitleDiv").style.setProperty("bottom", 'calc(19.75vh - 2.5vw)');
    document.getElementById("TitleDiv").style.transition = "opacity linear bottom linear";
    document.getElementById("ButtonContainer").style.opacity = 0;
    document.getElementById("ButtonContainer").style.pointerEvents = "none";
    document.getElementById("Sea").style.top = "80vh";
}

function LanguageSelect_EN(){

    SetEnglish();
    LanguageSelectAnimation(document.getElementById("LanguageEN"));
    TransitionToMain();

}

function LanguageSelect_JP(){

    SetJapanese();
    LanguageSelectAnimation(document.getElementById("LanguageJP"));
    TransitionToMain();

}

function SetEnglish(){

    document.getElementById("temp").innerText = "Placeholder text";

}

function SetJapanese(){

    document.getElementById("temp").innerText = "仮";

}