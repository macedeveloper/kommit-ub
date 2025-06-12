function avoicefromthedigitalvoid() {
    var aMessageLeft = [
                `it's best you forget about me`,
        `just go be with the people who love you.`,
        `would they mourn my loss?`,
        `everyone's getting better and i'm stuck in standby`,
        `the desire to cease existing`,
        `my dreams only live in sleep`,
        `the screen fades to static`,
        `all i am is replaceable`,
        `bound to fail`,
        `the urges will win one day`,
        `it's only a matter of time`,
        `a lost cause`,
        `don't look for me`,
        `everything goes on`,
        `"but if i was gone tomorrow, won't the waves crash on?"`,
        `undeserving`,
        `a bridge to get worse`,
        `stuck between wanting to be remembered and yearning to be forgotten`,
        `no room for the forgettable`,
        `i can't help anyone`,
        `they only feel bad for me`,
        `i ruin everything`,
        `can't do anything right`,
        `i'm not a good person`,
        `all fake words`,
        `they deserve better than someone like me`,
        `it means nothing`,
        `i don't matter to you
        <br>i don't matter to anyone`,
        `they're going to forget about me once im gone`,
        `i hope i don't wake up tomorrow`,
        `"i was there enough"`,
        `everything but my mind is silent`,
        `unreachable`,
        `i'm only wasting my life`,
        `i don't think i'd be alive in a few years`,
        `it'll just get worse`,
        `not worth anyone's time`,
        `they won't notice for a couple of days`,
        `wishing something bad would happen to me`,
        `i am such a coward`,
        `im bringing them down`,
        `what purpose do i have in this world`,
        `this is meaningless`,
        `i shouldve died three years ago`,
        `piss poor attempts`,
        `i'm not capable to continue living`,
        `if only i wasn't such a coward`,
        `nothing of value will be lost`,
        `a statistic`,
        `i wish i was good enough`,
        `i can't even do anything to help you`,
        `i wish i was as good as you in everything`,
        `why can't i be useful to anyone`,
        `if only i could give this life to someone more deserving of it`,
        `no one needs me`,
        `it takes one bad thought to spiral down for a whole day or more`,
    ];
    //  `message`,

    const aTelephoneRings = document.getElementById("call");

    if (Math.random() < 0.25) {
        var theVoice = Math.floor(Math.random() * aMessageLeft.length);
        document.getElementById("call").innerHTML = aMessageLeft[theVoice];
    }

    aTelephoneRings.addEventListener("click", function() {
        var theVoice = Math.floor(Math.random()  * aMessageLeft.length);
        document.getElementById("call").innerHTML = aMessageLeft[theVoice];
    });
}

avoicefromthedigitalvoid();