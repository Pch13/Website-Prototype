// might be needed for Lint
// #pragma vscode_glsllint_stage vert;
import { initBuffers  } from "./int-buffers.js";
import { drawScene } from "./draw-scenes.js";

main();

//initialize vertex / fragment shader
function initShaderProgram(gl, vsSource, fsSource){
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

//create shader program
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
    alert(
        `Unable to initialize the shader proram: $(gl.getProgramInfoLog(shaderProgram,
        ))`,
    );
    return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, source){
    const shader = gl.createShader(type);
    
    gl.shaderSource(shader, source);

    gl.compileShader(shader);

if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
    alert(
        `An error occured compilind the shaders: $(gl.getShaderInfoLog(shader))`,
    );
    gl.deleteShader(shader);
    return null;
    }
    
    return shader;
}


function main(){
    const canvas = document.querySelector("#canvas");

    const gl = canvas.getContext("webgl");

    if(!gl===null){
        alert(
            "Unable to initialize WebGL.",
        );
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); //set clear colour
    gl.clear(gl.COLOR_BUFFER_BIT); //clear the colour buffer

    const vsSource=`
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main(){
        gl.Position = uProjectionMatrix * uModelViewMatrix *aVertexPosition;
        }
    `;

    const fsSource=`
        void main(){
        gl_FragColor(1.0, 1.0, 1.0, 1.0); 
        }

    `;
        //gl_FragColor is a variable with a "float4"

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    const programInfo={
    program: shaderProgram,
    attribLocations:{
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    },
    uniformLocations:{
        projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
};

    const buffers = initBuffers(gl);

    drawScene(gl, programInfo, buffers);
}