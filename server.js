express = require('express');
app = express();
let port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

