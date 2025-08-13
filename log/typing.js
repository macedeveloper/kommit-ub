const SPEED = 15;
const messages = [
    `my battery is low and it's getting dark.`,
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
    `i think i'll apologize to you.`,
    `it's time for me to find some games to play, keeping me distracted from my life so i don't think that way`,
    `I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name.`,
    `why is my code depressed what the fu- oh right, i wrote it`,
    `the voice and the reason`,
    `>> Update failed. Retry? (Y/N)`,
    `look at how insignificant we all are`,
    `>> WARNING: Legacy code detected in [core.dll].`,
    `>> CRITICAL: 2,266 unresolved bugs.`
];

//  `text`,

function ranMessage() {
    const rText = Math.floor(Math.random() * messages.length);
    return messages[rText]
}

function typeWriter(txt, i = 0) {
    document.getElementById("type_text").innerHTML += txt.charAt(i);
            
    if (i < txt.length - 1) {
        setTimeout(() => typeWriter(txt, i + 1), SPEED);
    }
}



// thank you stackoverflow

typeWriter(ranMessage());

