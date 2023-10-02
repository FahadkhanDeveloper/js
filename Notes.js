const fs = require("fs");
class Notes {
readFile(filePath) {
fs.readFile('data.json',"utf8", (err,data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        console.log(obj)
        // return obj;
})
}
search(id) {
    const data = this.readFile();
    const one = data.filter(d => d.id == id)
    return one;
}
}
module.exports = Notes;