function sendMessage() {
    var valueReceived =  document.getElementById("inputField").value;
    JSBridge.showMessageInNative(valueReceived);
}
function updateFromNative(message){
    document.getElementById("inputField").value = message;
}