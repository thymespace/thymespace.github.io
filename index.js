const Localisation = [

    "IntroductionButton",
    "About me",
    "ABOUT",

    "IntroductionHeader",
    "About me",
    "ABOUT",

    "IntroductionBody",
    "I am a game developer and game design student who loves all things games. Fluent in many programming langauges, and familiar with more. I love making cool things while keeping them optimised.\n\nI don't currently have any professional experience, but I am looking for some. Please contact me if you are hiring!",
    "日本語まだ勉強中なので、間違いがあったら許してください。\n\nゲーム開発者とゲームデザイン学生で。ゲーム全般を愛しています。多くのプログラミング言語に堪能で、さらに多くの言語に精通している。最適化とクールなものを作るのが好き！！\n今でプロとしての経験はありませんが、いくつか探しています。募集している方はご連絡ください！いつか日本で働きたい。",

    "ConfidentLogos",
    "I'm confident in:",
    "堪能：",

    "FamiliarLogos",
    "I'm familiar with:",
    "精通：",

    "WorksButton",
    "My Work",
    "WORKS",

    "WorksHeader",
    "My Work",
    "WORKS",

    "Works1Description",
    "One of my more complicated projects, created for a group assignment. The game is rendered entirely on the windows command line.\nI wrote the rendering, collision, physics, combat, tilemap reading and procedural generation.",
    "より複雑なプロジェクトのひとつで、グループ課題のために制作した。このゲームはすべてWindowsのコマンドラインでレンダリングされています。\nレンダリング、コリジョン、物理演算、戦闘、タイルマップ読み取り、プロシージャル生成は私が書いた。",

    "Works2Name",
    "Unnamed Jump King Clone + NeuroEngine",
    "名無しのJUMP KINGクローン + NeuroEngine",

    "Works2Description",
    "A Jump King clone made in less than an hour to prove the ease of use of my experimental game engine, NeuroEngine. NeuroEngine was built from scratch, using OpenGL as the rendering library. It uses an object-component system with custom scripting similar to Unity.",
    "私の実験的ゲームエンジン「NeuroEngine」の使いやすさを証明するために、1時間足らずで作ったJUMP KINGのクローン。NeuroEngineは、OpenGLをレンダリングライブラリとして使い、ゼロから構築した。Unityに似たカスタムスクリプトとオブジェクトコンポーネントシステムを使用しています。",

    "ContactButton",
    "Contact Me",
    "CONTACT",

    "ContactHeader",
    "Contact Me",
    "CONTACT",

    "ContactBody",
    "Click here to send me an email!",
    "ここをクリックしてメールを送ってください！",

    "OtherButton",
    "Extra",
    "BONUS",

    "OtherHeader",
    "Extra",
    "BONUS",

    "OtherBody",
    "Song Recommendation",
    "おすすめの音楽♪",

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

    var lang;
    if(language == 0) lang = 'en';
    if(language == 1) lang = 'jp';

    for(let i = 0; i <Localisation.length; i += 3){
        document.getElementById(Localisation[i]).innerText = Localisation[i + 1 + language];
        document.getElementById(Localisation[i]).lang = lang;
    }

}