import { HexPoint } from "@/game/utils";
import { Canvas } from "../canvas";
import { Viewport } from "../viewport";
import { draw_hexagon } from "./utils";

const hex_width = (w: number) => w * (Math.sqrt(3) / 2);
const hex_height = (w: number) => w * (3 / 4);

const hex_to_2d = (a: HexPoint, w: number) =>
    ({ x: a.q * hex_width(w) + a.r * hex_width(w) * .5, y: a.r * hex_height(w) });

const GRID_WIDTH = 48;

const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
    
        img.onload = () => resolve(img);
        img.onerror = reject;

        img.src = src;
    });
};

export class Grid {
    private flag: any;
    private map: any;

    constructor (private canvas: Canvas, private viewport: Viewport) {
        ;(async () => {
            this.flag = await loadImage('/start.svg');
            this.map = await loadImage('/map.png');
        })()
        // const img = new Image();

        // img.onload = () => { this.flag = img; };
        
        // img.src = '/start.svg'; // or .svg



        this.canvas.onRender.on(({ context, ...rect }: any) => {
            if (this.map) {
                context.drawImage(this.map, 0, 0, 2000, 2000);
            }

            context.strokeStyle = '#cccccc';
            context.lineWidth = 1;
            context.globalAlpha = .3;

            const { translate } = this.viewport;

            const top = -Math.floor(translate.y / hex_height(GRID_WIDTH)) - 2;
            const height = Math.floor(rect.height / hex_height(GRID_WIDTH)) + 4;

            const left = -Math.floor(translate.x / hex_width(GRID_WIDTH)) - 2;
            const width = Math.floor(rect.width / hex_width(GRID_WIDTH)) + 4;

            for (let row = top; row < top + height; ++row) {
                for (let col = left; col < left + width; ++col) {
                    const q = col - Math.floor(row / 2);
                    const r = row;
                    const s = -q - r;

                    const center = hex_to_2d({ q, r, s }, GRID_WIDTH);

                    context.strokeStyle = '#aaa';
                    // context.globalAlpha = 1;

                    context.beginPath();
                    draw_hexagon(context, center, GRID_WIDTH);
                    context.stroke();
                }
            }

            context.globalAlpha = 1;

            if (this.flag) {
                context.drawImage(this.flag, -2, -60, 45, 60);
            }

           
                    

            
            // draw_hexagon(context, { x: 100, y: 100 }, 100);
            
            // context.font = '18px Montserrat';
            // context.textAlign = 'center';
            // context.fillText('Some Text', width / 2, height / 2);
        });
    }
}
