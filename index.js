import exec from 'child_process'

import http from 'http'


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    playSound()

    res.write('Hello World!');
    res.end();

}).listen(8080)


function playSound() {
    exec.exec('play music/sound.mp3');
}