#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	vec4 tex = texture2D(uSampler, vec2(timeFactor * 0.02,timeFactor * 0.02) + vTextureCoord);
	vec4 map = texture2D(uSampler2, vec2(timeFactor * 0.02,timeFactor * 0.02) + vTextureCoord);
	
	gl_FragColor = tex + 0.3*map;
}