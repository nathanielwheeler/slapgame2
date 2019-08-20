export default class Item {
    constructor(data) {
        this.name = data.name || null
        this.modifier = data.modifier || 1
        this.description = data.description || null
    }
}