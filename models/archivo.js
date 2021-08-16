const fs = require ('fs');


class Archivo {

    constructor(file) {
        this.file = file;
        this.encoding = "utf8"
    }

    async writeFile (data) {
        await fs.promises.writeFile(this.file, JSON.stringify(data, null, '\t'));
    }

    async readFile (data) {
        const stock = await fs.promises.readFile(data, this.encoding);
        const stockJS = JSON.parse(stock)
        console.log(stockJS);

    }

}

module.exports = { Archivo }