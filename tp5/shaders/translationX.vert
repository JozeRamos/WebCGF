
attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec4 coordsAfterTrans;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	

    offset=vec3(2.0,0.0,0.0)*sin(timeFactor);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

    coordsAfterTrans=gl_Position;
}

