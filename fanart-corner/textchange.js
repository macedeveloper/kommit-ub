const toggleImage = document.getElementById('textchangescript');
const thiscatsnameis = document.getElementById('whatthesigma');

const wgar = `you found a little secret!
                anyways, i cancelled this because as i said,
                it seemed like such a pain to collect everything </3

                i have scattered doodles across so many devices

                theres also the storage issue AND the fact that
                if i want this to work, i have to update it 
                everytime i have a new drawing..,
                
                so yeah!

                there's also my slight fear of getting everything
                i drew stolen by someone because i never
                watermark/sign my art dhjdgsdfj

                there's also ai scrapers...

                sooo yeah!
                
                not a lot of good reasons to continue this page`;
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

