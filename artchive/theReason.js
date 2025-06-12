function avoicefromthedigitalvoid() {
    var aMessageRecieved = [
        `Let's pretend a little longer`,
        `But for now, I'll just bring the sea to you`,
        `Then I felt you on my shoulder, and you weren't suffering anymore`,
        `I told you to forget me, but you stayed by my side`,
        `It can get better`,
        `Life has its ups and downs`,
        `There are people who care about you`,
        `Stay for them`,
    ];
    //  `message`,

    const aTelephoneRings = document.getElementById("answer");

    if (Math.random() < 0.20) {
        var theReason = Math.floor(Math.random() * aMessageRecieved.length);
        document.getElementById("answer").innerHTML = aMessageRecieved[theReason];
    }

    aTelephoneRings.addEventListener("click", function() {
        var theReason = Math.floor(Math.random()  * aMessageRecieved.length);
        document.getElementById("answer").innerHTML = aMessageRecieved[theReason];
    });
}

avoicefromthedigitalvoid();