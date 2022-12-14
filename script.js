const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// GLOBAL VARIABLES
canvas.width = 1024
canvas.height = 576


const gravity = 0.5

class Player {


    constructor(position) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 100
    }


    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, this.height)
    }


    update() {
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if((this.position.y + this.height + this.velocity.y) < canvas.height){
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
        
    }
}


const player = new Player({x: 0, y: 0})

const player2 = new Player({x: 200, y: 100})


const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    }
}


function animate() {

    window.requestAnimationFrame(animate)

    // DRAW CANVAS
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player2.update()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 1
    else if (keys.a.pressed) player.velocity.x = -1 

}


animate()


// KEYS DOWN

window.addEventListener('keydown', (event) => {

    switch(event.key) {
        case 'd':
            keys.d.pressed = true
            break;

        case 'a':
            keys.a.pressed = true
            break;


        case 'w':
            player.velocity.y = -15            
            break;
    }

})


// KEYS DOWN

window.addEventListener('keyup', (event) => {

    switch(event.key) {
        case 'd':
            keys.d.pressed = false
            break;

        case 'a':
            keys.a.pressed = false
            break;
    }

})



