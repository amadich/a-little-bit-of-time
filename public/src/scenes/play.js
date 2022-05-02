class play extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    preload() {
                // animation of sara_move 

                this.anims.create({
                    key: "walk_sara",
                    frameRate: 10,
                    frames: this.anims.generateFrameNames("sara", {
                        //prefix: "-",
                        suffix: ".png",
                        start: 118,
                        end: 125,
                        zeroPad: 3
                    }),
                    repeat: -1
                });

                // animation of tom_move 

                this.anims.create({
                    key: "walk_tom",
                    frameRate: 10,
                    frames: this.anims.generateFrameNames("tom", {
                        //prefix: "-",
                        suffix: ".png",
                        start: 118,
                        end: 125,
                        zeroPad: 3
                    }),
                    repeat: -1
                });
    }
    create() {


     platform = this.add.image(0,0,'grass12').setOrigin(0.5);



     for(let i = 0 ; i <= 3 ; i++) {
        let x  = Math.floor(Math.random()*800);
        let y  = Math.floor(Math.random()*600);
        sara[i] = this.physics.add.sprite(x,y,"sara");
        sara[i].anims.play("walk_sara",true);
        sara[i].setCollideWorldBounds(true);
        sara[i].setVelocityX(80);
        sara[i].setBounce(1,1)
        sara[i].setGravityY(3);
        
   
     }


     for(let i = 0 ; i <= 3 ; i++) {
        let x  = Math.floor(Math.random()*800);
        let y  = Math.floor(Math.random()*600);
        tom[i] = this.physics.add.sprite(x,y,"tom");
        tom[i].anims.play("walk_tom",true);
        tom[i].setCollideWorldBounds(true);
        tom[i].setVelocityX(80);
        tom[i].setBounce(1,1)
        tom[i].setGravityY(5);
        
   
     }


      textInput = this.add.dom(100,400).createFromCache("form").setOrigin(0.5);

        let form  = document.getElementById("form");
        let chat = document.getElementById("chat");
        let online = parseInt(document.getElementById("online").innerHTML);

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (chat.value) {
          socket.emit('chat message', chat.value);
          chat.value = '';
        }
      });

      socket.on('chat message', function(msg) {
        //var item = document.createElement('li');
        let area = document.getElementsByTagName("textarea")[0];
        area.innerHTML += msg+"\n"; 
        window.scrollTo(0, document.body.scrollHeight);
      });
     
      socket.on("online", function(online) {
        document.getElementById("online").innerHTML = online;
      });

      socket.on("offline", function(online)  {
        document.getElementById("online").innerHTML = online;
      });


    }

    update() {

        for(let i = 0; i <= 3 ; i++) {
           
            if (  (sara[i].x >= 400)  ) {
                sara[i].flipX = true;
            }
            else {
                sara[i].flipX = false;
            }
        }


        for(let i = 0; i <= 3 ; i++) {
           
            if ( (tom[i].x >= 400)  ) {
                tom[i].flipX = true;
            }
            else {
                tom[i].flipX = false;
            }
        }



    }

    
}