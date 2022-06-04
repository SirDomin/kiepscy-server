import Audic from 'audic';
import http from 'http'

const audic = new Audic('music/sound.mp3');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');

    audic.play();

    res.end();
}).listen(8080);