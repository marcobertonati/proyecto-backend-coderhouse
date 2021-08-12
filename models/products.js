class Products {

    constructor(title, price, thumbnail,id, description, code, stocked) {
        this.id= id,
        this.title = title, 
        this.price = price,
        this.thumbnail = thumbnail,
        this.timestamp = Date.now(),
        this.description = description,
        this.code = code,
        this.stocked = stocked
    }

}
module.exports = { Products }