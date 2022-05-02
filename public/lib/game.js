const config = {
    type: Phaser.AUTO,
    parent: "game",
    dom: {
        createContainer: true
    },
    width : 800,
    height: 600,
    backgroundColor: "222",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [
        loading,
        play,
    ]
}
let game = new Phaser.Game(config);
let socket = io();
let platform;
let sara = [];

let tom = [];


let textInput

