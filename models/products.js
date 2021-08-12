class Products {

    constructor(title, price, thumbnail, id, description, code, stocked) {
        this.title = title, 
        this.price = price,
        this.thumbnail = thumbnail,
        this.id = id,
        this.timestamp = Date.now(),
        this.description = description,
        this.code = code,
        this.stocked = stocked
    }

}
module.exports = { Products }