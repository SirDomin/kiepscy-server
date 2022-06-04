import exec from 'child_process'

import http from 'http'

let lastTriggered = Date.now();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (Date.now() - lastTriggered > 3000) {
        playSound()
        lastTriggered = Date.now();
    }

    res.write('Hello World!');
    res.end();

}).listen(8080)

function playSound() {
    exec.exec('play -v 20 music/sound.mp3');
}
