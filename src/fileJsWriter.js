import fs from "fs";
export default function jsWritter(List) {
    //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
    const data = JSON.stringify({
        total : List.length,
        List
    })

    fs.writeFileSync("./public/dataBase.json", data);

}