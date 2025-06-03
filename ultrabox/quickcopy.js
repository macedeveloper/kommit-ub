function copyTheThing() {
    var text = document.getElementById("linkCopy").textContent;
        navigator.clipboard.writeText(text).then(() => {
        alert("copied the text!\n\n" + text);
    });
}