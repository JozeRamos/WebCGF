#ifdef GL_ES
precision highp float;
#endif

varying vec4 coordsAfterTrans;

void main() {
	if (coordsAfterTrans.y > 0.5){
		gl_FragColor = vec4(0.898, 0.898, 0.0, 1.0);
    }
	else
	{
		gl_FragColor = vec4(0.541, 0.541, 0.898, 1.0);
	}
}