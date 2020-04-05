const cors = require("cors");
const fetch = require("node-fetch");

const ApiKey = 'vpj%2F%2BrGIciUML6OE2meywozryP099%2FmbvsVi24Pfn%2BYQxun47ipZphfihnSQP%2Bc%2Fi6vVe6yetkb8AQH7sff2Jw%3D%3D';
const url = `http://apis.data.go.kr/${ApiKey}/ErmctInsttInfoInqireService/getParmacyListInfoInqire`;
router.get("/", (req, res) => {
    fetch(url)
        .then(response => response.json())
        .then(json => res.send(json))
        .catch(() => res.send(JSON.stringify({ message: "System Error" })));
     });
     
    app.use(cors());