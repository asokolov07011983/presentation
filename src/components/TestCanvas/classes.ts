// class ShootingStar {
//     public image: any;
//     public x: number;
//     public y: number;
//     public mainFrame: number;
//     public canvas: any;
//     public amplitude: any;
//
//     // var amplitude = Math.min(Math.max($mrfc$export$default.clientWidth * 0.1, 100), 180);
//     constructor(main: Main) {
//         this.image = document.getElementById('earth');
//         this.mainFrame = main.mainFrame;
//         this.canvas = main.canvas;
//
//         // this.main = main;
//         // this.width = 500;
//         // this.height = 500;
//         this.x = 0;
//         this.amplitude = Math.min(Math.max( this.x * 0.1, 100), 180);
//         this.y = Math.floor(Math.random() * window.innerHeight);
//         // this.y = this.main.height - this.height/2;
//         // // this.speed = 1;
//         // this.rotationAngle = 0;
//         // this.image = document.getElementById('earth');
//         // this.figure = new Figure(this, main);
//     };
//     draw(ctx: any) {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
//         ctx.fillStyle = 'red';
//         ctx.fill();
//         ctx.closePath();
//     };
//     update() {
//         if(this.y > window.innerHeight + 10 || this.x > window.innerWidth + 10) {
//             this.x = 0;
//             this.y = Math.floor(Math.random() * window.innerHeight);
//         } else {
//             this.x += 1;
//             this.y += .5;
//         }
//     };
// }
class Planet {
    public main: Main;
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    // public speed: number;
    public rotationAngle: number;
    public image: any;
    public figure: Figure;
    constructor(main: Main) {
        this.main = main;
        this.width = 500;
        this.height = 500;
        this.x = - 100;
        this.y = this.main.height - this.height/2;
        // this.speed = 1;
        this.rotationAngle = 0;
        this.image = document.getElementById('earth');
        this.figure = new Figure(this, main);
    };
    draw(ctx: any): void {
        ctx.save(); // Сохранить текущую матрицу преобразований
        // Переместить начало координат в центр квадрата
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        // Применить вращение
        ctx.rotate(-this.rotationAngle * Math.PI / 180);
        // Отрисовать планету
        ctx.drawImage(this.image, -this.width / 2, -this.height / 2);
        ctx.restore(); // Восстановить предыдущую матрицу преобразований

        this.figure.draw(ctx);
    };
    update(): void {
        this.rotationAngle += .25;
        this.figure.update(this.main);
    };
}
class Figure {
        public main: Main;
        public planet: Planet;
        public width: number;
        public height: number;
        public x: number;
        public y: number;
        public frameX: number;
        public image: any;
        public imageReverse: any;
        public totalFrames: number;
    constructor(planet: Planet, main: Main) {
        this.main = main;
        this.planet = planet;
        this.width = 102;
        this.height = 148;
        this.x = planet.width / 2 - this.width / 2 - 100;
        this.y = this.main.height - this.height - this.planet.height / 2 + 30;
        this.image = document.getElementById('dogRun');
        this.imageReverse = document.getElementById('dogRunReverse');
        this.frameX = 0;
        this.totalFrames = 6; // 6 frames in one row
    }

    draw(ctx: any): void {
        ctx.drawImage(
            this.image,
            this.frameX * this.width,
            0, // Since all frames are in one row, the Y-coordinate is 0
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
    update(main): void {
        main.mainFrame += 1;
        if (main.mainFrame % 10 === 0) {
            this.frameX += 1;
            if (this.frameX >= this.totalFrames) {
                this.frameX = 0; // Reset to the first frame
            }
        }
    }
}

export class Star {
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(ctx): void {
        this.draw(ctx);
    }
}

export class Main {
    public canvas: any;
    public width: number;
    public height: number;
    public mainFrame: number;
    public planet: Planet;
    public controls: string[];
    // public shootingStar: ShootingStar
    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.planet = new Planet(this);
        // this.shootingStar = new ShootingStar(this);
        this.mainFrame = 0;
        this.controls = [];

        window.addEventListener('keydown',  (e) => {
            if(this.controls.indexOf(e.key) === -1) this.controls.push(e.key)
        });
        window.addEventListener('keyup',  (e) => {
            const index = this.controls.indexOf(e.key);
            if(index > -1)this.controls.splice(index, 1);
        });
    }
    render(ctx) {
        this.planet.draw(ctx);
        // this.shootingStar.draw(ctx);
        this.planet.update();
        // if( this.shootingStar.x + 10 > window.innerWidth || this.shootingStar.y > window.innerHeight + 10) {
        //     setTimeout(() => {
        //         this.shootingStar.update()
        //     }, 2000);
        // } else {
        //     this.shootingStar.update()
        // };
    }
}