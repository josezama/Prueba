//CONFIGURACION SDK PARA AVATAR ANIMADO
SDK.applicationId = "5603559833949326026";
var sdk = new SDKConnection();
var web = new WebAvatar();
web.connection = sdk;
web.avatar = "20080315";
web.voice = "istc-lucia-hsmm";
web.voiceMod = "default";
web.lang = "es";
web.width = "250";
web.height = "300";
web.prefix = null

//CONFIGURACION DE API.AI
var accessToken = "1dcfb7734ed64b438dfbaf402d565f60";
var baseUrl = "https://api.api.ai/v1/";

$( "#show-chatbot" ).click(function() {
    web.addMessage("Welcome to the Company Service! How can I help you today?");
    web.processMessages();
});
$( "#close-chatbot" ).click(function() {
    web.addMessage("");
    web.processMessages();
});
function send() {
    var text = $("#chat").val();

    if(text==="I'd like to find information about paying rates, please!"){
        setResponse("Sure, here is the link you're after: http://link.com.co");
    }else{
        setResponse("We do not have this information available at this time");
    }
}
function setResponse(val) {
    $("#response").text("Bot: "+val);
    web.addMessage(val, "", "", "");
    web.processMessages();
}