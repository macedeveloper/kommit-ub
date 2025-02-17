const toggleImage = document.getElementById('textchangescript');
const thiscatsnameis = document.getElementById('whatthesigma');

const wgar = `last updated: 01/02/2025
                - added ability to close notepad
                - changed bg from w7 to old phones bg

                okay i dunno what to write here
                
                thinking about making the aesthetic an
                old android phone for mobile view
                
                im gonna try but i think that requires
                recoding a LOT of shit and i dont wanna >:(
                
                wait wait wiat,,, first i have to add
                yknow, the whole point of this page
                (which is art)`;
const toggledddd = `honestly i dont even know who would want to use
                    these but
                    just in case, i guess

                    https://creativecommons.org/licenses/by-nc/4.0/`;

const lookhimupongoogle = wgar.replace(/\n/g, '<br>');
const goodlordtherespenice = toggledddd.replace(/\n/g, '<br>');


toggleImage.addEventListener('click', function() {

    if (thiscatsnameis.innerHTML === lookhimupongoogle) {
        thiscatsnameis.innerHTML = goodlordtherespenice;
    }
    else {
        thiscatsnameis.innerHTML = lookhimupongoogle;
                    // gay po
    }
});


// im going to jump off the window (in minecraft)

