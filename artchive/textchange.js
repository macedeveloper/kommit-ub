const toggleImage = document.getElementById('textchangescript');
const thiscatsnameis = document.getElementById('whatthesigma');

const wgar = `last updated: 01/02/2025
                okay i dont know what to write here actually`;
const toggledddd = `honestly i dont even know who would want to use
                    these but just in case i guess

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

