
let radius,ratio;
let canvas;
let alphaOffsetPam,bettaOffsetPam;
let startFrame = 20;
let totalFrames = 500;
let backColor,dotColor,glowColor;
function setup(){
    let del = 2;
    var pCanvas = createCanvas(700,700,WEBGL);
    canvas = pCanvas.canvas;
    radius = width/3;
    ratio = 30;
    alphaOffsetPam = int(random(21));
    bettaOffsetPam = int(random(26));
    backColor = color(0,0,30);
    dotColor = color(200,0,170);
    glowColor = color(250,250,250);

}

function draw(){
    if(frameCount === 1){
        capturer.start()
    }
    background(backColor);
    drawingContext.shadowBlur = 40;
    drawingContext.shadowColor = glowColor;
    noFill();
    stroke(dotColor);
    rotateX(PI/2+PI*int(frameCount<=totalFrames)*int(frameCount>startFrame)*sin(PI*(frameCount-startFrame)/(totalFrames-startFrame)))
    rotateZ(PI/2+PI*int(frameCount<=totalFrames)*int(frameCount>startFrame)*sin(2*PI*(frameCount-startFrame)/(totalFrames-startFrame)))
    scale(1+abs(int(frameCount<=totalFrames)*int(frameCount>startFrame)*sin(PI*(frameCount-startFrame)/(totalFrames-startFrame)))*2.5)
    //orbitControl(5,5);
    strokeWeight(3);
    
    beginShape(POINTS);
    for(let alpha = 0;alpha<TAU ; alpha+=TAU/300){
        
        for(let betta = 0;betta<TAU; betta+= TAU/300){
            for(let r = 0;r<=radius;r+=radius/3){
            radiusOffset = 0.2*r*(sin(betta*bettaOffsetPam)*pow(sin(alpha*alphaOffsetPam),sin(betta*bettaOffsetPam)));
            let x = cos(alpha)*(r+radiusOffset);
            let y = sin(alpha)*cos(betta)*(r+radiusOffset);
            let z = sin(alpha)*sin(betta)*(r+radiusOffset);
            vertex(x,y,z);
            }
        }
    }
    endShape(CLOSE);
    if(frameCount<totalFrames+startFrame){
        capturer.capture(canvas);
    }
    if(frameCount>=totalFrames+startFrame){
        capturer.stop();
        capturer.save(); 
    }
}