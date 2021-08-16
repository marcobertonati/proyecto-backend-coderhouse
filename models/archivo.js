const fs = require ('fs');


class Archivo {

    constructor(file) {
        this.file = file;
        this.encoding = "utf8"
    }

    async writeFile (dataStock) {
        await fs.promises.writeFile(this.file, JSON.stringify(dataStock, null, '\t'));
    }

    async readFile (dataStock) {
        const stock = await fs.promises.readFile(dataStock, this.encoding);
        const stockJS = JSON.parse(stock)
        console.log(stockJS);

    }

}

module.exports = { Archivo }