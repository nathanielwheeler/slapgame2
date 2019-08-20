

export default class Enemy {
    constructor(name) {
        this.name = name
        this.health = {
            min: 0,
            max: 1000,
            current: 1000
        }
        this.slap = 20
    }
}