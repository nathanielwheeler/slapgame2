import EnemyController from "./controllers/EnemyController.js"
import PlayerController from "./controllers/PlayerController.js"





class App {
    constructor() {
        console.log("App created")
        this.controllers = {
            enemyController: new EnemyController()
            playerController: new PlayerController()
        }
    }
}


window["app"] = new App()