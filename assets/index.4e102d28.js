import{c as J,p as pt,t as mt,i as xt,a as tt,F as yt}from"./vendor.670ff1b3.js";const _t=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))e(y);new MutationObserver(y=>{for(const h of y)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&e(b)}).observe(document,{childList:!0,subtree:!0});function M(y){const h={};return y.integrity&&(h.integrity=y.integrity),y.referrerpolicy&&(h.referrerPolicy=y.referrerpolicy),y.crossorigin==="use-credentials"?h.credentials="include":y.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function e(y){if(y.ep)return;y.ep=!0;const h=M(y);fetch(y.href,h)}};_t();function vt(t,p){const M=t.getBoundingClientRect();return[p.clientX-M.left,p.clientY-M.top]}function ht(t,p){var M=canvasDom.getBoundingClientRect();return[p.touches[0].clientX-M.left,p.touches[0].clientY-M.top]}function et(t,p,M){const e=ot(t,t.VERTEX_SHADER,p),y=ot(t,t.FRAGMENT_SHADER,M),h=t.createProgram();return t.attachShader(h,e),t.attachShader(h,y),t.linkProgram(h),t.getProgramParameter(h,t.LINK_STATUS)?h:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(h)),null)}function ot(t,p,M){const e=t.createShader(p);return t.shaderSource(e,M),t.compileShader(e),t.getShaderParameter(e,t.COMPILE_STATUS)?e:(console.log("An error occurred compiling the shaders: "+t.getShaderInfoLog(e)),t.deleteShader(e),null)}function rt(t){const p=45*Math.PI/180,M=t.canvas.clientWidth/t.canvas.clientHeight,e=.1,y=100,h=J();pt(h,p,M,e,y);const b=J();return mt(b,b,[-0,0,-2.5]),[h,b]}xt().then(({binding:t})=>{fetch("https://apj.hgreer.com/mandeljs",{method:"GET",cache:"no-store",mode:"no-cors"}),console.log(t);function p(){var o=t.mpfr_t();return t.mpfr_init_set_d(o,0,0),t.mpfr_set_prec(o,1200),t.mpfr_set_d(o,0,0),o}function M(o){var n=p();t.mpfr_log2(n,o,0);var i=t.mpfr_get_d(n,0);return i}let e={center:[p(),p()],radius:p(),iterations:1e3,cmapscale:20,callbacks:[],modified:function(){for(const o of this.callbacks)o()},set:function(o,n,i){t.mpfr_set_d(this.center[0],o,0),t.mpfr_set_d(this.center[1],n,0),t.mpfr_set_d(this.radius,i,0),this.modified()},update:function(o,n){var i=p();t.mpfr_mul_d(i,this.radius,o,0);var s=p();t.mpfr_mul_d(s,this.radius,-n,0),t.mpfr_mul_d(this.radius,this.radius,1/2,0),t.mpfr_add(this.center[0],this.center[0],i,0),t.mpfr_add(this.center[1],this.center[1],s,0),this.modified()}};function y(o,n){var s;var i=o.replace(/\s+/g,"").split(";");return i=(s=i.find(a=>a.startsWith(n+"=")))==null?void 0:s.split("=")[1],i}document.cookie.length>30?(t.mpfr_set_string(e.center[0],y(document.cookie,"x"),10,0),t.mpfr_set_string(e.center[1],y(document.cookie,"y"),10,0),t.mpfr_set_string(e.radius,y(document.cookie,"radius"),10,0)):(t.mpfr_set_string(e.center[0],"0",10,0),t.mpfr_set_string(e.center[1],"0",10,0),t.mpfr_set_string(e.radius,"2",10,0)),h();function h(){document.querySelector("#reset").addEventListener("click",()=>{document.querySelector("#iterations").value="1000",document.querySelector("#cmapscale").value="20.1",e.iterations=1e3,e.cmapscale=20.1,e.set(0,0,2)}),document.querySelector("#out").addEventListener("click",()=>{t.mpfr_mul_d(e.radius,e.radius,2,0),e.modified()});const o=Math.min(window.innerWidth,700),n=Math.min(o,window.innerHeight),i=document.querySelector("#canvas");i.width=n,i.height=n,i.addEventListener("click",m=>{let u,f;[u,f]=vt(i,m),u=u/(n/2)-1,f=f/(n/2)-1,e.update(u,f)}),i.addEventListener("touchstart",m=>{let u,f;[u,f]=ht(i,m),u=u/(n/2)-1,f=f/(n/2)-1,e.update(u,f)}),document.querySelector("#iterations").addEventListener("input",m=>{e.iterations=parseInt(m.target.value),e.modified()}),document.querySelector("#cmapscale").addEventListener("input",m=>{e.cmapscale=parseFloat(m.target.value),e.modified()});function s(){var m=document.querySelector("#clickpos").value;console.log("asfdsafsda",m),t.mpfr_set_string(e.center[0],y(m,"re"),10,0),t.mpfr_set_string(e.center[1],y(m,"im"),10,0),t.mpfr_set_string(e.radius,y(m,"r"),10,0);var u=p();+y(m,"iterations")&&(e.iterations=+y(m,"iterations")),t.mpfr_log2(u,e.radius,0);var f=t.mpfr_get_exp(e.radius,0),q=t.mpfr_get_d(u,0);console.log("radius",q,f),console.log("r",y(m,"r")),console.log(e),e.modified(),console.log(e),console.log("blur")}document.querySelector("#clickpos").addEventListener("blur",s),document.getElementById("clickpos").onPaste=s,e.callbacks.push(()=>{let m=t.mpfr_to_string(e.center[0],10,0,!1),u=t.mpfr_to_string(e.center[1],10,0,!1),f=t.mpfr_to_string(e.radius,10,0,!1);document.cookie="x="+m+";max-age=31536000",document.cookie="y="+u+";max-age=31536000",document.cookie="radius="+f+";max-age=31536000";function q(g){var S=10+f.replace(/0+\d$/,"").split("0").length;return g.slice(0,S)}document.querySelector("#clickpos").value="re="+q(m)+"; im="+q(u)+"; r="+q(f)+"; iterations="+e.iterations,window.history.replaceState(null,document.title,"/?;"+document.getElementById("clickpos").value.replace(/ /g,""))});const a=i.getContext("webgl2");if(!a){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}const x=et(a,`#version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
out highp vec2 delta;
void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  delta = vec2(aVertexPosition[0], aVertexPosition[1]);
}
  `,`#version 300 es
precision highp float;
in highp vec2 delta;
out vec4 fragColor;
uniform vec4 uState;
uniform vec4 poly1;
uniform vec4 poly2;
uniform sampler2D sequence;
float get_orbit_x(int i) {
  i = i * 3;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
float get_orbit_y(int i) {
  i = i * 3 + 1;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
float get_orbit_scale(int i) {
  i = i * 3 + 2;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
void main() {
  int q = int(uState[2]) - 1;
  int cq = q;
  q = q + int(poly2[3]);
  float S = pow(2., float(q));
  float dcx = delta[0];
  float dcy = delta[1];
  float x;
  float y;
  // dx + dyi = (p0 + p1 i) * (dcx, dcy) + (p2 + p3i) * (dcx + dcy * i) * (dcx + dcy * i)
  float sqrx =  (dcx * dcx - dcy * dcy);
  float sqry =  (2. * dcx * dcy);

  float cux =  (dcx * sqrx - dcy * sqry);
  float cuy =  (dcx * sqry + dcy * sqrx);
  float dx = poly1[0]  * dcx - poly1[1] *  dcy + poly1[2] * sqrx - poly1[3] * sqry ;// + poly2[0] * cux - poly2[1] * cuy;
  float dy = poly1[0] *  dcy + poly1[1] *  dcx + poly1[2] * sqry + poly1[3] * sqrx ;//+ poly2[0] * cuy + poly2[1] * cux;
      
  int k = int(poly2[2]);

  if (false) {
      q = cq;
      dx = 0.;
      dy = 0.;
      k = 0;
  }
  int j = k;
  x = get_orbit_x(k);
  y = get_orbit_y(k);
  
  for (int i = k; float(i) < uState[3]; i++){
    j += 1;
    k += 1;
    float os = get_orbit_scale(k - 1);
    dcx = delta[0] * pow(2., float(-q + cq - int(os)));
    dcy = delta[1] * pow(2., float(-q + cq - int(os)));
    float unS = pow(2., float(q) -get_orbit_scale(k - 1));

    if (isinf(unS)) {
    unS = 0.;
      }

    float tx = 2. * x * dx - 2. * y * dy + unS  * dx * dx - unS * dy * dy + dcx;
    dy = 2. * x * dy + 2. * y * dx + unS * 2. * dx * dy +  dcy;
    dx = tx;

    q = q + int(os);
    S = pow(2., float(q));

    x = get_orbit_x(k);
    y = get_orbit_y(k);
    float fx = x * pow(2., get_orbit_scale(k)) + S * dx;
    float fy = y * pow(2., get_orbit_scale(k))+ S * dy;
    if (fx * fx + fy * fy > 4.){
      break;
    }


    if ( true && dx * dx + dy * dy > 1000000.) {
      dx = dx / 2.;
      dy = dy / 2.;
      q = q + 1;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
    }
    if ( false && dx * dx + dy * dy < .25) {
      dx = dx * 2.;
      dy = dy * 2.;
      q = q - 1;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
    }

    if (true  && fx * fx + fy * fy < S * S * dx * dx + S * S * dy * dy || (x == -1. && y == -1.)) {
      dx  = fx;
      dy = fy;
      q = 0;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
      k = 0;
      x = get_orbit_x(0);
      y = get_orbit_y(0);
    }
  }
  float c = (uState[3] - float(j)) / uState[1];
  fragColor = vec4(vec3(cos(c), cos(1.1214 * c) , cos(.8 * c)) / -2. + .5, 1.);
}
  `),r={program:x,attribLocations:{vertexPosition:a.getAttribLocation(x,"aVertexPosition")},uniformLocations:{projectionMatrix:a.getUniformLocation(x,"uProjectionMatrix"),modelViewMatrix:a.getUniformLocation(x,"uModelViewMatrix"),state:a.getUniformLocation(x,"uState"),poly1:a.getUniformLocation(x,"poly1"),poly2:a.getUniformLocation(x,"poly2")}},E=b(a),w=a.createTexture();a.bindTexture(a.TEXTURE_2D,w),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST),a.pixelStorei(a.UNPACK_ALIGNMENT,1),e.callbacks.unshift(()=>{at(a,r,E)}),window.location.href.includes(";")&&(document.getElementById("clickpos").innerText=window.location.href,s()),e.modified()}function b(o){const n=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,n);const i=[1,1,-1,1,1,-1,-1,-1];return o.bufferData(o.ARRAY_BUFFER,new Float32Array(i),o.STATIC_DRAW),{position:n}}function O(o,n){var[i,s]=o,[a,l]=n,d=Math.max(s,l);return d>s?i=i*Math.pow(2,s-d):a=a*Math.pow(2,l-d),[i-a,d]}function U(o,n){var[i,s]=o,[a,l]=n,d=Math.max(s,l);return d>s?i=i*Math.pow(2,s-d):a=a*Math.pow(2,l-d),[i+a,d]}function c(o,n){var[i,s]=o,[a,l]=n,d=i*a,x=s+l;if(d!=0){var r=Math.round(Math.log2(Math.abs(d)));d=d/Math.pow(2,r),x=x+r}return[d,x]}function G(o,n){var[i,s]=o,[a,l]=n,d=Math.max(s,l);return d>s?i=i*Math.pow(2,s-d):a=a*Math.pow(2,l-d),[Math.max(Math.abs(i),Math.abs(a)),d]}function H(o,n){var[i,s]=o,[a,l]=n,d=Math.max(s,l);return d>s?i=i*Math.pow(2,s-d):a=a*Math.pow(2,l-d),i>a}function W(){for(var o=e.center[0],n=e.center[1],i=p(),s=p(),a=new Float32Array(1024*1024),l=0;l<1024*1024;l++)a[l]=-1;var d=p(),x=p(),r=p(),E=0,w=[0,0],m=[0,0],u=[0,0],f=[0,0],q=[0,0],g=[0,0],S=[0,0,0,0,0,0],P=!0;p(),p();for(var l=0;l<e.iterations;l++){var T=t.mpfr_get_exp(i),C=t.mpfr_get_exp(s),F=Math.max(T,C);F<-1e4&&(F=0);var k=0;a[3*l]=t.mpfr_get_d_2exp(k,i,0)/Math.pow(2,F-T),a[3*l+1]=t.mpfr_get_d_2exp(k,s,0)/Math.pow(2,F-C),a[3*l+2]=F;var _=[a[3*l],a[3*l+2]],v=[a[3*l+1],a[3*l+2]];t.mpfr_mul(d,i,i,0),t.mpfr_mul(x,i,s,0),t.mpfr_mul(r,s,s,0),t.mpfr_sub(i,d,r,0),t.mpfr_add(i,i,o,0),t.mpfr_add(s,x,x,0),t.mpfr_add(s,s,n,0);var L=[w,m,u,f,q,g];if([w,m,u,f,q,g]=[U(c([2,0],O(c(_,w),c(v,m))),[1,0]),c([2,0],U(c(_,m),c(v,w))),O(U(c([2,0],O(c(_,u),c(v,f))),c(w,w)),c(m,m)),U(c([2,0],U(c(_,f),c(v,u))),c(c([2,0],w),m)),c([2,0],U(O(c(_,q),c(v,g)),O(c(u,w),c(f,m)))),c([2,0],U(U(U(c(_,g),c(v,q)),c(u,m)),c(f,w)))],_=[t.mpfr_get_d_2exp(k,i,0),t.mpfr_get_exp(i)],v=[t.mpfr_get_d_2exp(k,s,0),t.mpfr_get_exp(s)],l==0||H(G(u,f),c([1e3,t.mpfr_get_exp(e.radius)],G(q,g)))?P&&(S=L,E=l):P=!1,H(U(c(_,_),c(v,v)),[400,0]))break}return console.log("plim",E),window.orbit=a,console.log("orbit_len",l),[a,S,E]}function K(o){return Math.pow(2,o[1])*o[0]}function at(o,n,i){for(var[s,a,l]=W(),d=new Float32Array(s),x=2,r=2;r<s.length;r++)x=Math.min(x,Math.abs(s[r]));console.log("smallest orbit bit",x),o.texImage2D(o.TEXTURE_2D,0,o.R32F,1024,1024,0,o.RED,o.FLOAT,d),o.clearColor(0,0,0,1),o.clearDepth(1),o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);let E,w;[E,w]=rt(o);{const P=2,T=o.FLOAT,C=!1,F=0,k=0;o.bindBuffer(o.ARRAY_BUFFER,i.position),o.vertexAttribPointer(n.attribLocations.vertexPosition,P,T,C,F,k),o.enableVertexAttribArray(n.attribLocations.vertexPosition)}o.useProgram(n.program),o.uniformMatrix4fv(n.uniformLocations.projectionMatrix,!1,E),o.uniformMatrix4fv(n.uniformLocations.modelViewMatrix,!1,w),console.log(t.mpfr_get_exp(e.radius));var m=t.mpfr_get_exp(e.radius),u=0,f=t.mpfr_get_d_2exp(u,e.radius,0);f=[f,m],console.log(f),o.uniform4f(n.uniformLocations.state,e.center[0],e.cmapscale,1+M(e.radius),e.iterations),console.log(a);var q=c([1,0],G(a[0],a[1])),g=[1,-q[1]],S=[c(g,a[0]),c(g,a[1]),c(g,c(f,a[2])),c(g,c(f,a[3])),c(g,c(f,c(f,a[4]))),c(g,c(f,c(f,a[5])))].map(K);o.uniform4f(n.uniformLocations.poly1,S[0],S[1],S[2],S[3]),o.uniform4f(n.uniformLocations.poly2,S[4],S[5],l,q[1]),console.log("poly_scaled",S,l,0);{const P=0,T=4;o.drawArrays(o.TRIANGLE_STRIP,P,T)}}let R={isRecording:!1,startPosition:null,ffmpegLoaded:!1,ffmpeg:null};async function it(){if(R.ffmpegLoaded)return;const o=new yt,n="https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";await o.load({coreURL:await tt(`${n}/ffmpeg-core.js`,"text/javascript"),wasmURL:await tt(`${n}/ffmpeg-core.wasm`,"application/wasm")}),R.ffmpeg=o,R.ffmpegLoaded=!0,console.log("FFmpeg loaded successfully")}function ct(o,n){const i=Math.log2(t.mpfr_get_d(o,0)),s=Math.log2(t.mpfr_get_d(n,0)),a=[],l=Math.min(i,s),d=Math.max(i,s);for(let x=Math.floor(d);x>=Math.ceil(l);x--){const r=Math.pow(2,x);a.push(r)}return a}function z(o,n,i,s,a,l,d){const x=document.createElement("canvas");x.width=l,x.height=d;const r=x.getContext("webgl2");if(!r)throw new Error("Unable to initialize WebGL for offscreen rendering");const m=et(r,`#version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
out highp vec2 delta;
void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  delta = vec2(aVertexPosition[0], aVertexPosition[1]);
}
  `,`#version 300 es
precision highp float;
in highp vec2 delta;
out vec4 fragColor;
uniform vec4 uState;
uniform vec4 poly1;
uniform vec4 poly2;
uniform sampler2D sequence;
float get_orbit_x(int i) {
  i = i * 3;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
float get_orbit_y(int i) {
  i = i * 3 + 1;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
float get_orbit_scale(int i) {
  i = i * 3 + 2;
  int row = i / 1024;
  return texelFetch(sequence, ivec2( i % 1024, row), 0)[0];
}
void main() {
  int q = int(uState[2]) - 1;
  int cq = q;
  q = q + int(poly2[3]);
  float S = pow(2., float(q));
  float dcx = delta[0];
  float dcy = delta[1];
  float x;
  float y;
  // dx + dyi = (p0 + p1 i) * (dcx, dcy) + (p2 + p3i) * (dcx + dcy * i) * (dcx + dcy * i)
  float sqrx =  (dcx * dcx - dcy * dcy);
  float sqry =  (2. * dcx * dcy);

  float cux =  (dcx * sqrx - dcy * sqry);
  float cuy =  (dcx * sqry + dcy * sqrx);
  float dx = poly1[0]  * dcx - poly1[1] *  dcy + poly1[2] * sqrx - poly1[3] * sqry ;// + poly2[0] * cux - poly2[1] * cuy;
  float dy = poly1[0] *  dcy + poly1[1] *  dcx + poly1[2] * sqry + poly1[3] * sqrx ;//+ poly2[0] * cuy + poly2[1] * cux;

  int k = int(poly2[2]);

  if (false) {
      q = cq;
      dx = 0.;
      dy = 0.;
      k = 0;
  }
  int j = k;
  x = get_orbit_x(k);
  y = get_orbit_y(k);

  for (int i = k; float(i) < uState[3]; i++){
    j += 1;
    k += 1;
    float os = get_orbit_scale(k - 1);
    dcx = delta[0] * pow(2., float(-q + cq - int(os)));
    dcy = delta[1] * pow(2., float(-q + cq - int(os)));
    float unS = pow(2., float(q) -get_orbit_scale(k - 1));

    if (isinf(unS)) {
    unS = 0.;
      }

    float tx = 2. * x * dx - 2. * y * dy + unS  * dx * dx - unS * dy * dy + dcx;
    dy = 2. * x * dy + 2. * y * dx + unS * 2. * dx * dy +  dcy;
    dx = tx;

    q = q + int(os);
    S = pow(2., float(q));

    x = get_orbit_x(k);
    y = get_orbit_y(k);
    float fx = x * pow(2., get_orbit_scale(k)) + S * dx;
    float fy = y * pow(2., get_orbit_scale(k))+ S * dy;
    if (fx * fx + fy * fy > 4.){
      break;
    }


    if ( true && dx * dx + dy * dy > 1000000.) {
      dx = dx / 2.;
      dy = dy / 2.;
      q = q + 1;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
    }
    if ( false && dx * dx + dy * dy < .25) {
      dx = dx * 2.;
      dy = dy * 2.;
      q = q - 1;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
    }

    if (true  && fx * fx + fy * fy < S * S * dx * dx + S * S * dy * dy || (x == -1. && y == -1.)) {
      dx  = fx;
      dy = fy;
      q = 0;
      S = pow(2., float(q));
      dcx = delta[0] * pow(2., float(-q + cq));
      dcy = delta[1] * pow(2., float(-q + cq));
      k = 0;
      x = get_orbit_x(0);
      y = get_orbit_y(0);
    }
  }
  float c = (uState[3] - float(j)) / uState[1];
  fragColor = vec4(vec3(cos(c), cos(1.1214 * c) , cos(.8 * c)) / -2. + .5, 1.);
}
  `),u={program:m,attribLocations:{vertexPosition:r.getAttribLocation(m,"aVertexPosition")},uniformLocations:{projectionMatrix:r.getUniformLocation(m,"uProjectionMatrix"),modelViewMatrix:r.getUniformLocation(m,"uModelViewMatrix"),state:r.getUniformLocation(m,"uState"),poly1:r.getUniformLocation(m,"poly1"),poly2:r.getUniformLocation(m,"poly2")}},f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f);const q=[1,1,-1,1,1,-1,-1,-1];r.bufferData(r.ARRAY_BUFFER,new Float32Array(q),r.STATIC_DRAW);const g={position:f},S=p(),P=p(),T=p();t.mpfr_set(S,o,0),t.mpfr_set(P,n,0),t.mpfr_set(T,i,0);const C=e.center,F=e.radius,k=e.iterations,_=e.cmapscale;e.center=[S,P],e.radius=T,e.iterations=s,e.cmapscale=a;const[v,L,I]=W();e.center=C,e.radius=F,e.iterations=k,e.cmapscale=_;const D=r.createTexture();r.bindTexture(r.TEXTURE_2D,D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.R32F,1024,1024,0,r.RED,r.FLOAT,new Float32Array(v)),r.clearColor(0,0,0,1),r.clearDepth(1),r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);let A,B;[A,B]=rt(r);{const Y=2,$=r.FLOAT,ft=!1,dt=0,ut=0;r.bindBuffer(r.ARRAY_BUFFER,g.position),r.vertexAttribPointer(u.attribLocations.vertexPosition,Y,$,ft,dt,ut),r.enableVertexAttribArray(u.attribLocations.vertexPosition)}r.useProgram(u.program),r.uniformMatrix4fv(u.uniformLocations.projectionMatrix,!1,A),r.uniformMatrix4fv(u.uniformLocations.modelViewMatrix,!1,B);const V=t.mpfr_get_exp(T),lt=0,j=[t.mpfr_get_d_2exp(lt,T,0),V];r.uniform4f(u.uniformLocations.state,S,a,1+M(T),s);const Z=c([1,0],G(L[0],L[1])),N=[1,-Z[1]],X=[c(N,L[0]),c(N,L[1]),c(N,c(j,L[2])),c(N,c(j,L[3])),c(N,c(j,c(j,L[4]))),c(N,c(j,c(j,L[5])))].map(K);r.uniform4f(u.uniformLocations.poly1,X[0],X[1],X[2],X[3]),r.uniform4f(u.uniformLocations.poly2,X[4],X[5],I,Z[1]);{const Y=0,$=4;r.drawArrays(r.TRIANGLE_STRIP,Y,$)}const Q=new Uint8Array(l*d*4);return r.readPixels(0,0,l,d,r.RGBA,r.UNSIGNED_BYTE,Q),Q}function st(o,n,i,s,a){const l=new Uint8Array(s*a*4);for(let d=0;d<l.length;d++)l[d]=Math.round(o[d]*(1-i)+n[d]*i);return l}async function nt(o,n,i,s,a,l,d=5,x=30){console.log("Starting zoom animation render..."),await it();const r=1920,E=1080,w=d*x,m=ct(i,l);console.log("Power-of-two levels:",m),console.log("Rendering keyframes...");const u=[],f=[];u.push(z(o,n,i,e.iterations,e.cmapscale,r,E)),f.push(0);const q=Math.log2(t.mpfr_get_d(i,0)),S=Math.log2(t.mpfr_get_d(l,0))-q;for(const _ of m){const v=(Math.log2(_)-q)/S,L=p(),I=p(),D=p(),A=p();t.mpfr_sub(A,s,o,0),t.mpfr_mul_d(A,A,v,0),t.mpfr_add(L,o,A,0);const B=p();t.mpfr_sub(B,a,n,0),t.mpfr_mul_d(B,B,v,0),t.mpfr_add(I,n,B,0),t.mpfr_set_d(D,_,0),console.log(`Rendering keyframe at t=${v.toFixed(3)}, radius=${_}`),u.push(z(L,I,D,e.iterations,e.cmapscale,r,E)),f.push(Math.round(v*w))}u.push(z(s,a,l,e.iterations,e.cmapscale,r,E)),f.push(w-1),console.log("Generating interpolated frames...");const P=R.ffmpeg;for(let _=0;_<w;_++){let v=0;for(let V=0;V<f.length-1;V++)if(_>=f[V]&&_<=f[V+1]){v=V;break}const L=f[v],I=f[v+1],D=(_-L)/(I-L);let A;D===0?A=u[v]:D===1?A=u[v+1]:A=st(u[v],u[v+1],D,r,E);const B=`frame${_.toString().padStart(5,"0")}.rgba`;await P.writeFile(B,A),_%10==0&&console.log(`Generated frame ${_+1}/${w}`)}console.log("Encoding video..."),await P.exec(["-f","rawvideo","-pixel_format","rgba","-video_size",`${r}x${E}`,"-framerate",x.toString(),"-i","frame%05d.rgba","-c:v","libx264","-preset","slow","-crf","18","-pix_fmt","yuv420p","output.mp4"]),console.log("Reading output video...");const T=await P.readFile("output.mp4"),C=new Blob([T.buffer],{type:"video/mp4"}),F=URL.createObjectURL(C),k=document.createElement("a");k.href=F,k.download="mandelbrot_zoom.mp4",k.click(),console.log("Video download started!")}window.setZoomAnimationStart=function(){R.startPosition={centerX:p(),centerY:p(),radius:p()},t.mpfr_set(R.startPosition.centerX,e.center[0],0),t.mpfr_set(R.startPosition.centerY,e.center[1],0),t.mpfr_set(R.startPosition.radius,e.radius,0),console.log("Zoom animation start position set!"),alert("Start position recorded! Navigate to your desired end position and click 'Render Zoom Animation'.")},window.renderZoomToCurrentPosition=async function(){if(!R.startPosition){alert("Please set a start position first!");return}const o=R.startPosition.centerX,n=R.startPosition.centerY,i=R.startPosition.radius,s=e.center[0],a=e.center[1],l=e.radius;await nt(o,n,i,s,a,l,5,30)}});
