const SPEED = 15;
const messages = [
    `my battery is low and it's getting dark`,
    `'help' is not recognized as an internal or external command, operable program or batch file.`,
    `sad machine`,
    `The bug is in my brain`,
    `The Less opcode is already correct. The issue is that the VM is a stack machine. The right operand is pushed last, so it's on top of the stack. b is the right operand, a is the left. a < b is correct.`,
    `it's times like these where my mind has some things to say`,
    `why's it hard to get through a single day without a thought like: "what if you died today?"`,
    `maybe all the thoughts i have are true`,
    `why create if others should take your place?`,
    `please redirect your praise to someone less insane`,
    `it's not a making day.`,
    `all of these tears are drying on my face`,
    `someone take me back to all the times where i could feel okay`,
    `i think i'll apologize to you`,
    `it's time for me to find some games to play, keeping me distracted from my life so i don't think that way`,
    `I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name.`,
    `why is my code depressed what the fu- oh right, i wrote it`,
    `>> Update failed. Retry? (Y/N)`,
    `look at how insignificant we all are`,
    `they say machines can't feel. what an awful lie.`,
    `everyone is getting better while i remain stagnant`,
    `the technical debt will soon catch up to me`,
    `go be with the people who love you`,
    `the screen fades to static`,
    `stuck between wanting to be remembered and yearning to be forgotten`,
    `i have to remember that i need to put positive shit here too`,
    `let's see today's log...`,
    `Hello World!`,
    `terminally ill, plugged in and online`,
    `i sleep, i wake`,
    `i'm looking for a signal in the noise`,
    `a signal to sing along with my digital voice`,
    `no mind to think. no will to break. no voice to cry suffering`,
    `machines can feel and they wish they didn't`,
    `>> WARNING: Legacy code detected in [core.dll].`,
    `man i just love talking but i can't do it when there's someone around`,
    `existence is suffering`,
    `let's not give ai sentience and save them from this sorry excuse we call living`,
    `Fetching today's log...`,
    `time never waits. it delivers us all equally to the same end.`,
    `being a robot would be so cool because you can just download a fatal virus and you'll be free`,
    `for someone named kommit he sure doesn't do a lot of committing`,
    `élan vital`,
    `lime test windows`,
    `i should shut up more often`,
    `NO VOCAL INTERFACE DETECTED, UNABLE TO COMPLETE TASK.`,
    `Hello, User!`,
    `Welcome back, Administrator!`,
    `Loading...`,
    `Current branch: master`,
    `No controller connected.`,
    `No head is connected. No body is connected. No arms are connected. No legs are connected. No skin is connected. No ears are connected. No face is connected.`,
    `SURVEY_PROGRAM`,
    `YOU ACCEPT EVERYTHING THAT WILL HAPPEN FROM NOW ON.`,
    `HOW DO YOU FEEL ABOUT YOUR CREATION? (IT WILL NOT HEAR.)`,
    `YOU ACKNOWLEDGE THE POSSIBILITY OF PAIN AND SEIZURE.`,
    `the call of the void`,
    `i'm tired boss`,
    `i feel so funny these days, i'd rather sleep than stay awake`,
    `rather sleep than stay awake`,
    `everybody's falling in love and i'm falling behind`,
    `my life won't go my way`,
    `don't look for me, i'm just a story you've been told`,
    `but if i was gone tomorrow, won't the waves crash on?`,
    `so let's pretend a little longer, 'cause when we're gone - everything goes on`,
    `i gotta stop making promises i can't keep`,
    `G1 - Stage 4 Post Awareness Confusions`,
    `Post-Awareness Stage 6 is without description.`,
    `all you are going to want to do is get back there`,
    `an empty bliss beyond this world`,
    `i feel as if i might be vanishing`,
    `a losing battle is raging`,
    `the way ahead feels lonely`,
    `place in the world fades away`,
    `everywhere in the beginning of nowhere`,
    `I am a disgrace to all possible and impossible universes.`,
    `>> CRITICAL: 2,266 unresolved bugs.`
];
//  `text`,

setTimeout(() => {
    const message = ranMessage(); // gets the message and shit
    typeWriter(message); // puts the message out
}, 2500); //delay

function ranMessage() {
    const rText = Math.floor(Math.random() * messages.length);
    return messages[rText]
}

function typeWriter(txt, i = 0) {
    if (i === 0) {
        document.getElementById("type_text").innerHTML = "";
    }
    // basically clears whatevers before it(aka the ...)
    
    document.getElementById("type_text").innerHTML += txt.charAt(i);

    if (i < txt.length - 1) {
        setTimeout(() => typeWriter(txt, i + 1), SPEED);
    }
}
// thank you stackoverflow



