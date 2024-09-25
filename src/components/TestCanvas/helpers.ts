import { Main, Star } from "./classes";

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'] //массив с заданными цветами
let stars = []; //массив с звёздами
let radians = 0; //градусы поворота

const init = (canvas) => {
    for (let i = 0; i < 600; i++) { //кол-во звёзд, которое запихнём в массив
        const canvasWidth = canvas?.width + 1000;
        const canvasHeight = canvas?.height + 1000;

        const x = Math.random() * canvasWidth - canvasWidth / 2
        const y = Math.random() * canvasHeight - canvasHeight / 2
        const radius = 2 * Math.random()

        const color = colors[Math.floor(Math.random() * colors.length)] //подбираем случайный цвет звезды
        stars.push(new Star(x, y, radius, color)) //пушим в массив со звездами объект с аргументами (координата по х, координата по у, радиус, цвет)
    }
}
export const getCanvas = (canvasRef, windowSize) => {
    const canvas = canvasRef.current;
    if(canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = windowSize.width;
        canvas.height = windowSize.height;


        const main = new Main(canvas);

        const animate = () => {
            ctx.fillStyle = 'rgb( 10, 10, 10)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(radians); //крутим небо (ставим минус в обратную сторону)
            stars.forEach((star) => { //Для каждой звезды запускаем функцию апдейт, та в свою очередь запускает функцию отрисовки
                star.update(ctx)
            });
            ctx.restore();

            radians += 0.0005;


            main.render(ctx);
            requestAnimationFrame(animate);
        }
        init(canvas);
        animate();

    }
};