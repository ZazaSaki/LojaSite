const fs = require("fs");


export default function jsWriter(List) {
    //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
    const data = JSON.stringify({
        List : List
    })

    fs.writeFileSync("./data/dataBase.json", data);

}