import {useEffect, useState} from "react";
import earth from '../../assets/earth.png';
export const MainBg = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const getCanvas = () => {
        const canvas: any = document.getElementById('canvas')
        const c = canvas.getContext('2d');

        // const image = new Image();
        // image.src = earth;
        //
        // image.onload = () => {
        //     c.drawImage(image, 0, 0);
        // };

        // const mouse = {
        //     x: innerWidth / 2,
        //     y: innerHeight / 2
        // }
        const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'] //массив с заданными цветами

        // let mouseDown = false
        // canvas.addEventListener('mousedown', () => {
        //     mouseDown = true
        // })
        //
        // canvas.addEventListener('mouseup', () => {
        //     mouseDown = false
        // });

        // canvas.addEventListener('resize', () => {
        //     canvas.width = innerWidth
        //     canvas.height = innerHeight
        //
        //     init()
        // })

// Objects
//         class Particle {
//             x: number;
//             y: number;
//             radius: number;
//             color: string;
//
//             constructor(x: number, y: number, radius: number, color: string) {
//                 this.x = x;
//                 this.y = y;
//                 this.radius = radius;
//                 this.color = color;
//             }
//
//             draw(): void {
//                 c.beginPath();
//                 c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//                 c.shadowColor = this.color;
//                 c.shadowBlur = 15;
//                 c.fillStyle = this.color;
//                 c.fill();
//                 c.closePath();
//             }
//
//             update(): void {
//                 this.draw();
//             }
//         }
// // Отрисовываем облака начало
//     const background = new Image();
//     background.src = './img/clouds1.png';
//
//     const BG = {
//         x1: 0,
//         x2: canvas.width,
//         y: canvas.height - canvas.height/2,
//         width: canvas.width,
//         height: canvas.height/2,
//     }
//     function handleBackground(){
//         BG.x1-= 1;
//         if(BG.x1 < -BG.width) BG.x1 = BG.width;
//         BG.x2-= 1;
//         if(BG.x2 < -BG.width) BG.x2 = BG.width;
//         c.drawImage(background, BG.x1, BG.y, BG.width, BG.height); //Первая волна с начала холста
//         c.drawImage(background, BG.x2, BG.y, BG.width, BG.height); //Подрисовываем втору волну в конце холста для непрерывности
//     }
// // Отрисовываем облака конец


// Implementation
        let particles
        function init() {
            particles = [] //массив с звёздами

            for (let i = 0; i < 1200; i++) { //кол-во звёзд, которое запихнём в массив
                const canvasWidth = canvas.width + 1000
                const canvasHeight = canvas.height + 2000

            }
        }

// Animation Loop
        let radians = 0
        let alpha = 1
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = `rgba(10, 10, 10, ${alpha})`
            c.fillRect(0, 0, canvas.width, canvas.height);

            c.save()
            c.translate(canvas.width / 2, canvas.height / 2)
            c.rotate(radians) //крутим небо (ставим минус в обратную сторону)
            particles.forEach((particle) => { //Для каждой звезды запускаем функцию апдейт, та в свою очередь запускает функцию отрисовки
                particle.update()
            })
            c.restore()

            radians += 0.0005

            // if (mouseDown && alpha >= 0.5) {
            //     alpha -= 0.01
            // } else if (!mouseDown && alpha < 1) {
            //     alpha += 0.01
            // }

            // handleBackground(); //Запускаем облака
            //Отрисовываем город начало
            // var img = new Image();  // Создание нового объекта изображения
            // img.src = 'img/city.png';  // Путь к изображению которое необходимо нанести на холст
            // c.drawImage(img, 0, canvas.height-380) // Где x и y это координаты левого верхнего угла изображения, а первый параметр это изображение
            //Отрисовываем город конец
        }
        init()
        animate()
    }

    useEffect(() => {
        // Запустить скрипт после отрисовки
        getCanvas();
    }, []);
    return (
        <canvas
            id="canvas"
            width={windowSize.width}
            height={windowSize.height}
         />
    )
};