// import { Point } from "@/pascal/utils";

import { Point } from '@/game/utils';

export class Viewport {
    public translate: Point;

    constructor () {
        this.translate = { x: 0, y: 0 };

        window.addEventListener('mousedown', ({ clientX: x, clientY: y }) => {
            let pos = { x, y };

            const mousemove = ({ clientX: x, clientY: y }: any) => {
                this.translate.x += x - pos.x;
                this.translate.y += y - pos.y;

                pos = { x, y };
            };

            const mouseup = () => {
                window.removeEventListener('mousemove', mousemove);
                window.removeEventListener('mouseup', mouseup);
            };

            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
        });
    }
};