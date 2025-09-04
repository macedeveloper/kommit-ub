function get_audio_file(sp_id) {
    return document.getElementById(sp_id);
}


async function preview(sp_id) {
    var audio = get_audio_file(sp_id).getElementsByTagName('audio')[0];
    var audiolist = document.getElementsByTagName('audio')

    Array.from(audiolist).forEach((a) => {
        if (a !== audio) {
            a.pause();
        }
        a.currentTime = 0;
    });
    audio.play();
}


function stop_preview() {
    var audiolist = document.getElementsByTagName('audio')

    Array.from(audiolist).forEach((a) => {
        a.pause();
        a.currentTime = 0;
    }); 
}


function copy_link(sp_id) {
    var button = get_audio_file(sp_id).getElementsByClassName('sexyplayer-btn-copylink')[0];
    var link = get_audio_file(sp_id).getElementsByClassName('sexyplayer-link')[0].textContent;

    var text1 = `<i class="bi bi-clipboard"></i> Copy link`;
    var text2 = `<i class="bi bi-clipboard-check"></i> Copied!`;

    // Copy text to clipboard
    navigator.clipboard.writeText(link)
        .then(() => {
            // Change button text to "Copied!" and make it green
            button.innerHTML = text2;
            button.classList.add('sexyplayer-success');

            // Revert back after 2 seconds
            setTimeout(() => {
                button.innerHTML = text1;
                button.classList.remove('sexyplayer-success');
            }, 1600);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });

    // thank you so much https://github.com/macedeveloper <3
    // no prob :3  ~macedev
}


function download_file(sp_id) {
    var link = get_audio_file(sp_id).getElementsByClassName('sexyplayer-link')[0].textContent;
    link = link.trim();

    var a = document.createElement('a');
    a.href = link;
    // a.download = link.split('/').pop(); // Set the file name
    // a.setAttribute('download', true)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}