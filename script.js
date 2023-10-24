// JavaScript code to trigger download when the button is clicked
document.getElementById("downloadButton").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "OnlyFans.apk"; // Replace with the actual file path of your APK
    downloadLink.download = "OnlyFans.apk"; // Specify the file name for download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
