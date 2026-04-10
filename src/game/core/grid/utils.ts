import { Point } from "@/game/utils";

export function draw_hexagon(ctx: CanvasRenderingContext2D, center: Point, width: number, fill?: boolean) {
    // Calculate the radius (distance from center to a vertex)
    // For a regular hexagon, width = 2 * radius
    const radius = width / 2;
    
    // Calculate the height of the hexagon
    // For a regular hexagon, height = √3 * radius
    const height = Math.sqrt(3) * radius;
    
    // Start a new path
    ctx.beginPath();
    
    // Draw the hexagon
    for (let i = 0; i < 6; i++) {
        // Calculate angle for each vertex (30° offset to make it point up)
        // If you want it flat-topped, use 0° offset instead of 30°
        const angle = (i * 60 - 30) * Math.PI / 180;
        
        // Calculate vertex position
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        
        // Move to first point, line to others
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    // Close the path back to the first point
    ctx.closePath();
    
    // // Stroke or fill as needed
    // ctx.stroke(); // Uncomment to draw outline

    // if (fill) {
    //     ctx.fill();   // Uncomment to fill
    // }
}