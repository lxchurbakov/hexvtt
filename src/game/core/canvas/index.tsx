import React from 'react';
import { Entrypoint } from '../entrypoint';
import { Image, Paragraph } from 'lib/atoms';
import { Viewport } from '../viewport';
import { EventEmitter } from '@/game/lib/emitter';

const request = (p: any) => setTimeout(p, 0);
const cancel = (p: any) => clearTimeout(p);

const CanvasRenderer = ({ render }: { render: (context: CanvasRenderingContext2D, w: number, h: number) => void }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return
        }

        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.style.width = '100%';
        canvas.style.height = '100%';

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        context.scale(dpr, dpr);

        let t: any;

        const _render = () => {
            context.clearRect(0, 0, rect.width, rect.height);
            render(context, rect.width, rect.height);

            t = request(_render);
        };

        t = request(_render);

        return () => {
            cancel(t);
        };
    }, [render]);

    return (
        <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />
    );
};

// Создает Canvas
export class Canvas {
    constructor (private entrypoint: Entrypoint, private viewport: Viewport) {
        this.entrypoint.onBackgroundRender.on(() => {
            return (
                <CanvasRenderer render={this.render} />
                // <Image w="100%" h="100%" src="/map.png" style={{ objectFit: 'cover' }} />
            );
        });
    }
    
    public onRender = new EventEmitter();

    private render = (context: CanvasRenderingContext2D, width: number, height: number) => {
        context.clearRect(0, 0, width, height);

        // Viewport offset
        context.save();
        context.translate(this.viewport.translate.x, this.viewport.translate.y);

            this.onRender.emitps({ context, width, height });

          
        
        context.restore();
    };
}
