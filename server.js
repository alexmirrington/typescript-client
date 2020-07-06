const express = require('express');

const server = express();
const port = 8080

server.set('port', process.env.PORT || port);
server.use('/', express.static('dist'));
server.listen(
    port,
    () => console.log(
        `Server running on port ${server.get("port")} in ${server.get("env")} mode.`
    )
);
