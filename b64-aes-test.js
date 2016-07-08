window.onload=function(){
var akey = aesjs.util.convertStringToBytes("TEST[Z.E!Y0mvU:1");

document.getElementById('outer64textarea').placeholder = "Outer Base64 will appear here";
document.getElementById('opic').innerHTML ="<b>HELLO</b>";

var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();
        var freader = new FileReader();
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            myInnerBase = reader.result;
            document.getElementById("base64textarea").value = myInnerBase;
				    textBytes = aesjs.util.convertStringToBytes(myInnerBase);
						var aesCtr = new aesjs.ModeOfOperation.ctr(akey, new aesjs.Counter(5));
            var encryptedBytes = aesCtr.encrypt(textBytes);
						var aesCtr = new aesjs.ModeOfOperation.ctr(akey, new aesjs.Counter(5));
            var decryptedBytes = aesCtr.decrypt(encryptedBytes);
            var decryptedText = aesjs.util.convertBytesToString(decryptedBytes);
            document.getElementById("outer64textarea").value = encryptedBytes;
            document.getElementById('opic').innerHTML ="<b>IMG</b><img src=" + decryptedText + ">";
            console.log("OK DONES")
};

        reader.readAsDataURL(file);

    }
};

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}

}
