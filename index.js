// might be needed for Lint
// #pragma vscode_glsllint_stage vert;

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
}