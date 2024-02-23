(function(c,L){typeof exports=="object"&&typeof module!="undefined"?L(exports,require("@vis-three/utils"),require("@vis-three/core"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/utils","@vis-three/core","three"],L):(c=typeof globalThis!="undefined"?globalThis:c||self,L((c["vis-three"]=c["vis-three"]||{},c["vis-three"]["plugin-transform-controls"]={}),c.utils,c.core,c.three))})(this,function(c,L,g,t){"use strict";const W="@vis-three/plugin-transform-controls";class C extends t.Object3D{constructor(){super(),this.enabled=!0,this.mode="position",this.space="local",this.gizmo={},this.picker={},this.helper={},this.axis="XYZ",this.translationSnap=null,this.rotationSnap=null,this.scaleSnap=null,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.rotationAngle=0,this._tempVector=new t.Vector3,this._identityQuaternion=new t.Quaternion,this._tempEuler=new t.Euler,this._alignVector=new t.Vector3(0,1,0),this._zeroVector=new t.Vector3(0,0,0),this._lookAtMatrix=new t.Matrix4,this._tempQuaternion=new t.Quaternion,this._tempQuaternion2=new t.Quaternion,this._unitX=new t.Vector3(1,0,0),this._unitY=new t.Vector3(0,1,0),this._unitZ=new t.Vector3(0,0,1),this.type="TransformControlsGizmo";const o=new t.MeshBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,side:t.DoubleSide,fog:!1,toneMapped:!1}),n=new t.LineBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,toneMapped:!1}),e=o.clone();e.opacity=.15;const s=o.clone();s.opacity=.33;const r=o.clone();r.color.set(16711680);const i=o.clone();i.color.set(65280);const a=o.clone();a.color.set(255);const u=o.clone();u.opacity=.25;const P=u.clone();P.color.set(16776960);const x=u.clone();x.color.set(65535);const X=u.clone();X.color.set(16711935),o.clone().color.set(16776960);const V=n.clone();V.color.set(16711680);const Q=n.clone();Q.color.set(65280);const I=n.clone();I.color.set(255);const v=n.clone();v.color.set(65535);const E=n.clone();E.color.set(16711935);const b=n.clone();b.color.set(16776960);const y=n.clone();y.color.set(7895160);const w=b.clone();w.opacity=.25;const _=new t.CylinderGeometry(0,.05,.2,12,1,!1),m=new t.BoxGeometry(.125,.125,.125),l=new t.BufferGeometry;l.setAttribute("position",new t.Float32BufferAttribute([0,0,0,1,0,0],3));function Y(d,Z){const f=new t.BufferGeometry,S=[];for(let h=0;h<=64*Z;++h)S.push(0,Math.cos(h/32*Math.PI)*d,Math.sin(h/32*Math.PI)*d);return f.setAttribute("position",new t.Float32BufferAttribute(S,3)),f}function k(){const d=new t.BufferGeometry;return d.setAttribute("position",new t.Float32BufferAttribute([0,0,0,1,1,1],3)),d}const q={X:[[new t.Mesh(_,r),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new t.Mesh(_,r),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new t.Line(l,V)]],Y:[[new t.Mesh(_,i),[0,1,0],null,null,"fwd"],[new t.Mesh(_,i),[0,1,0],[Math.PI,0,0],null,"bwd"],[new t.Line(l,Q),null,[0,0,Math.PI/2]]],Z:[[new t.Mesh(_,a),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new t.Mesh(_,a),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new t.Line(l,I),null,[0,-Math.PI/2,0]]],XYZ:[[new t.Mesh(new t.OctahedronGeometry(.1,0),u.clone()),[0,0,0],[0,0,0]]],XY:[[new t.Mesh(new t.PlaneGeometry(.295,.295),P.clone()),[.15,.15,0]],[new t.Line(l,b),[.18,.3,0],null,[.125,1,1]],[new t.Line(l,b),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new t.Mesh(new t.PlaneGeometry(.295,.295),x.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new t.Line(l,v),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new t.Line(l,v),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new t.Mesh(new t.PlaneGeometry(.295,.295),X.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new t.Line(l,E),[.18,0,.3],null,[.125,1,1]],[new t.Line(l,E),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},F={X:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),e),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),e),[0,.6,0]]],Z:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),e),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new t.Mesh(new t.OctahedronGeometry(.2,0),e)]],XY:[[new t.Mesh(new t.PlaneGeometry(.4,.4),e),[.2,.2,0]]],YZ:[[new t.Mesh(new t.PlaneGeometry(.4,.4),e),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new t.Mesh(new t.PlaneGeometry(.4,.4),e),[.2,0,.2],[-Math.PI/2,0,0]]]},U={START:[[new t.Mesh(new t.OctahedronGeometry(.01,2),s),null,null,null,"helper"]],END:[[new t.Mesh(new t.OctahedronGeometry(.01,2),s),null,null,null,"helper"]],DELTA:[[new t.Line(k(),s),null,null,null,"helper"]],X:[[new t.Line(l,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new t.Line(l,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new t.Line(l,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},B={X:[[new t.Line(Y(1,.5),V)],[new t.Mesh(new t.OctahedronGeometry(.04,0),r),[0,0,.99],null,[1,3,1]]],Y:[[new t.Line(Y(1,.5),Q),null,[0,0,-Math.PI/2]],[new t.Mesh(new t.OctahedronGeometry(.04,0),i),[0,0,.99],null,[3,1,1]]],Z:[[new t.Line(Y(1,.5),I),null,[0,Math.PI/2,0]],[new t.Mesh(new t.OctahedronGeometry(.04,0),a),[.99,0,0],null,[1,3,1]]],E:[[new t.Line(Y(1.25,1),w),null,[0,Math.PI/2,0]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new t.Line(Y(1,1),y),null,[0,Math.PI/2,0]]]},J={AXIS:[[new t.Line(l,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},K={X:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),e),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),e),[0,0,0],[Math.PI/2,0,0]]],Z:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),e),[0,0,0],[0,0,-Math.PI/2]]],E:[[new t.Mesh(new t.TorusGeometry(1.25,.1,2,24),e)]],XYZE:[[new t.Mesh(new t.SphereGeometry(.7,10,8),e)]]},$={X:[[new t.Mesh(m,r),[.8,0,0],[0,0,-Math.PI/2]],[new t.Line(l,V),null,null,[.8,1,1]]],Y:[[new t.Mesh(m,i),[0,.8,0]],[new t.Line(l,Q),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new t.Mesh(m,a),[0,0,.8],[Math.PI/2,0,0]],[new t.Line(l,I),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new t.Mesh(m,P),[.85,.85,0],null,[2,2,.2]],[new t.Line(l,b),[.855,.98,0],null,[.125,1,1]],[new t.Line(l,b),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new t.Mesh(m,x),[0,.85,.85],null,[.2,2,2]],[new t.Line(l,v),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new t.Line(l,v),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new t.Mesh(m,X),[.85,0,.85],null,[2,.2,2]],[new t.Line(l,E),[.855,0,.98],null,[.125,1,1]],[new t.Line(l,E),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),u.clone()),[1.1,0,0]]],XYZY:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),u.clone()),[0,1.1,0]]],XYZZ:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),u.clone()),[0,0,1.1]]]},tt={X:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),e),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),e),[0,.5,0]]],Z:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),e),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new t.Mesh(m,e),[.85,.85,0],null,[3,3,.2]]],YZ:[[new t.Mesh(m,e),[0,.85,.85],null,[.2,3,3]]],XZ:[[new t.Mesh(m,e),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),e),[1.1,0,0]]],XYZY:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),e),[0,1.1,0]]],XYZZ:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),e),[0,0,1.1]]]},it={X:[[new t.Line(l,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new t.Line(l,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new t.Line(l,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function M(d){const Z=new t.Object3D;for(const f in d)for(let S=d[f].length;S--;){const h=d[f][S][0].clone(),A=d[f][S][1],T=d[f][S][2],O=d[f][S][3],et=d[f][S][4];h.name=f,h.tag=et,A&&h.position.set(A[0],A[1],A[2]),T&&h.rotation.set(T[0],T[1],T[2]),O&&h.scale.set(O[0],O[1],O[2]),h.updateMatrix();const N=h.geometry.clone();N.applyMatrix4(h.matrix),h.geometry=N,h.renderOrder=1/0,h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1),Z.add(h)}return Z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.position=M(q)),this.add(this.gizmo.rotation=M(B)),this.add(this.gizmo.scale=M($)),this.add(this.picker.position=M(F)),this.add(this.picker.rotation=M(K)),this.add(this.picker.scale=M(tt)),this.add(this.helper.position=M(U)),this.add(this.helper.rotation=M(J)),this.add(this.helper.scale=M(it)),this.picker.position.visible=!1,this.picker.rotation.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(o){const e=(this.mode==="scale"?this.space:"local")==="local"?this.worldQuaternion:this._identityQuaternion;this.gizmo.position.visible=this.mode==="position",this.gizmo.rotation.visible=this.mode==="rotation",this.gizmo.scale.visible=this.mode==="scale",this.helper.position.visible=this.mode==="position",this.helper.rotation.visible=this.mode==="rotation",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const i=s[r];i.visible=!0,i.rotation.set(0,0,0),i.position.copy(this.worldPosition);let a;if(this.camera instanceof t.OrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),i.scale.set(1,1,1).multiplyScalar(a*this.size/7),i.tag==="helper"){i.visible=!1,i.name==="AXIS"?(i.position.copy(this.worldPositionStart),i.visible=!!this.axis,this.axis==="X"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,0,0)),i.quaternion.copy(e).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(e).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="Y"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,0,Math.PI/2)),i.quaternion.copy(e).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(e).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="Z"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,Math.PI/2,0)),i.quaternion.copy(e).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(e).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="XYZE"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,Math.PI/2,0)),this._alignVector.copy(this.rotationAxis),i.quaternion.setFromRotationMatrix(this._lookAtMatrix.lookAt(this._zeroVector,this._alignVector,this._unitY)),i.quaternion.multiply(this._tempQuaternion),i.visible=this.dragging),this.axis==="E"&&(i.visible=!1)):i.name==="START"?(i.position.copy(this.worldPositionStart),i.visible=this.dragging):i.name==="END"?(i.position.copy(this.worldPosition),i.visible=this.dragging):i.name==="DELTA"?(i.position.copy(this.worldPositionStart),i.quaternion.copy(this.worldQuaternionStart),this._tempVector.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),this._tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()),i.scale.copy(this._tempVector),i.visible=this.dragging):(i.quaternion.copy(e),this.dragging?i.position.copy(this.worldPositionStart):i.position.copy(this.worldPosition),this.axis&&(i.visible=this.axis.search(i.name)!==-1));continue}i.quaternion.copy(e),this.mode==="position"||this.mode==="scale"?((i.name==="X"||i.name==="XYZX")&&Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(e).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),(i.name==="Y"||i.name==="XYZY")&&Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(e).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),(i.name==="Z"||i.name==="XYZZ")&&Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(e).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="XY"&&Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(e).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="YZ"&&Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(e).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="XZ"&&Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(e).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name.search("X")!==-1&&(this._alignVector.copy(this._unitX).applyQuaternion(e).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.x*=-1:i.tag==="bwd"&&(i.visible=!1)),i.name.search("Y")!==-1&&(this._alignVector.copy(this._unitY).applyQuaternion(e).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.y*=-1:i.tag==="bwd"&&(i.visible=!1)),i.name.search("Z")!==-1&&(this._alignVector.copy(this._unitZ).applyQuaternion(e).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.z*=-1:i.tag==="bwd"&&(i.visible=!1))):this.mode==="rotation"&&(this._tempQuaternion2.copy(e),this._alignVector.copy(this.eye).applyQuaternion(this._tempQuaternion.copy(e).invert()),i.name.search("E")!==-1&&i.quaternion.setFromRotationMatrix(this._lookAtMatrix.lookAt(this.eye,this._zeroVector,this._unitY)),i.name==="X"&&(this._tempQuaternion.setFromAxisAngle(this._unitX,Math.atan2(-this._alignVector.y,this._alignVector.z)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion)),i.name==="Y"&&(this._tempQuaternion.setFromAxisAngle(this._unitY,Math.atan2(this._alignVector.x,this._alignVector.z)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion)),i.name==="Z"&&(this._tempQuaternion.setFromAxisAngle(this._unitZ,Math.atan2(this._alignVector.y,this._alignVector.x)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion))),i.visible=i.visible&&(i.name.indexOf("X")===-1||this.showX),i.visible=i.visible&&(i.name.indexOf("Y")===-1||this.showY),i.visible=i.visible&&(i.name.indexOf("Z")===-1||this.showZ),i.visible=i.visible&&(i.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),i.material._opacity=i.material._opacity||i.material.opacity,i.material._color=i.material._color||i.material.color.clone(),i.material.color.copy(i.material._color),i.material.opacity=i.material._opacity,this.enabled?this.axis&&(i.name===this.axis?(i.material.opacity=1,i.material.color.lerp(new t.Color(1,1,1),.5)):this.axis.split("").some(function(u){return i.name===u})?(i.material.opacity=1,i.material.color.lerp(new t.Color(1,1,1),.5)):(i.material.opacity*=.25,i.material.color.lerp(new t.Color(1,1,1),.5))):(i.material.opacity*=.5,i.material.color.lerp(new t.Color(1,1,1),.5))}super.updateMatrixWorld(o)}}class D extends t.Mesh{constructor(){super(new t.PlaneGeometry(1e5,1e5,2,2),new t.MeshBasicMaterial({visible:!1,wireframe:!0,side:t.DoubleSide,transparent:!0,opacity:.1,toneMapped:!1})),this.enabled=!0,this.mode="position",this.space="local",this.gizmo={},this.picker={},this.helper={},this.axis="XYZ",this.translationSnap=null,this.rotationSnap=null,this.scaleSnap=null,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.rotationAngle=0,this._tempVector=new t.Vector3,this._identityQuaternion=new t.Quaternion,this._alignVector=new t.Vector3(0,1,0),this._dirVector=new t.Vector3,this._tempMatrix=new t.Matrix4,this._unitX=new t.Vector3(1,0,0),this._unitY=new t.Vector3(0,1,0),this._unitZ=new t.Vector3(0,0,1),this._v1=new t.Vector3,this._v2=new t.Vector3,this._v3=new t.Vector3,this.type="TransformControlsPlane"}updateMatrixWorld(o){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),this._v1.copy(this._unitX).applyQuaternion(n==="local"?this.worldQuaternion:this._identityQuaternion),this._v2.copy(this._unitY).applyQuaternion(n==="local"?this.worldQuaternion:this._identityQuaternion),this._v3.copy(this._unitZ).applyQuaternion(n==="local"?this.worldQuaternion:this._identityQuaternion),this._alignVector.copy(this._v2),this.mode){case"position":case"scale":switch(this.axis){case"X":this._alignVector.copy(this.eye).cross(this._v1),this._dirVector.copy(this._v1).cross(this._alignVector);break;case"Y":this._alignVector.copy(this.eye).cross(this._v2),this._dirVector.copy(this._v2).cross(this._alignVector);break;case"Z":this._alignVector.copy(this.eye).cross(this._v3),this._dirVector.copy(this._v3).cross(this._alignVector);break;case"XY":this._dirVector.copy(this._v3);break;case"YZ":this._dirVector.copy(this._v1);break;case"XZ":this._alignVector.copy(this._v3),this._dirVector.copy(this._v2);break;case"XYZ":case"E":this._dirVector.set(0,0,0);break}break;case"rotation":default:this._dirVector.set(0,0,0)}this._dirVector.length()===0?this.quaternion.copy(this.cameraQuaternion):(this._tempMatrix.lookAt(this._tempVector.set(0,0,0),this._dirVector,this._alignVector),this.quaternion.setFromRotationMatrix(this._tempMatrix)),super.updateMatrixWorld(o)}}var G=(p=>(p.HOVER="hover",p.CHANGE="change",p.CHANGED="changed",p.MOUSE_DOWN="mouseDown",p.CHANGEING="objectChange",p.MOUSE_UP="mouseUp",p))(G||{});class j extends t.Object3D{constructor(o,n,e){super(),this.object=new t.Object3D,this.enabled=!0,this.mode="position",this.space="local",this.axis="XYZ",this.translationSnap=0,this.rotationSnap=0,this.scaleSnap=0,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.cacheScene=null,this.transObjectSet=new Set,this.cacheObjects=new Map,this.rotationAngle=0,this._raycaster=new t.Raycaster,this._offset=new t.Vector3,this._startNorm=new t.Vector3,this._endNorm=new t.Vector3,this._cameraScale=new t.Vector3,this._parentPosition=new t.Vector3,this._parentQuaternion=new t.Quaternion,this._parentQuaternionInv=new t.Quaternion,this._parentScale=new t.Vector3,this._worldScaleStart=new t.Vector3,this._worldQuaternionInv=new t.Quaternion,this._worldScale=new t.Vector3,this._positionStart=new t.Vector3,this._quaternionStart=new t.Quaternion,this._scaleStart=new t.Vector3,this._tempQuaternion=new t.Quaternion,this._tempVector=new t.Vector3,this._tempVector2=new t.Vector3,this._unit={X:new t.Vector3(1,0,0),Y:new t.Vector3(0,1,0),Z:new t.Vector3(0,0,1)},n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document.body),this.visible=!1,this.domElement=n,this.cacheScene=e;const s=new C;this.gizmo=s,this.add(s);const r=new D;this.plane=r,this.add(r);const i=this;function a(y,w){let _=w;Object.defineProperty(i,y,{get:function(){return _!==void 0?_:w},set:function(m){_!==m&&(_=m,r[y]=m,s[y]=m)}}),i[y]=w,r[y]=w,s[y]=w}a("camera",o),a("object",this.object),a("enabled",!0),a("axis",null),a("mode","position"),a("translationSnap",0),a("rotationSnap",0),a("scaleSnap",0),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const u=new t.Vector3,P=new t.Vector3,x=new t.Quaternion,X=new t.Quaternion,H=new t.Vector3,V=new t.Quaternion,Q=new t.Vector3,I=new t.Vector3,v=new t.Vector3,E=0,b=new t.Vector3;a("worldPosition",u),a("worldPositionStart",P),a("worldQuaternion",x),a("worldQuaternionStart",X),a("cameraPosition",H),a("cameraQuaternion",V),a("pointStart",Q),a("pointEnd",I),a("rotationAxis",v),a("rotationAngle",E),a("eye",b),this._getPointer=this.getPointer.bind(this),this._onPointerDown=this.onPointerDown.bind(this),this._onPointerHover=this.onPointerHover.bind(this),this._onPointerMove=this.onPointerMove.bind(this),this._onPointerUp=this.onPointerUp.bind(this)}setDom(o){return this.disconnect(),this.domElement=o,this.connect(),this}setScene(o){this.cacheScene=o}setCamera(o){return this.camera=o,this}getTransObjectSet(){return this.transObjectSet}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(!0)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()})}attach(){var o,n;return this.connect(),(o=this.cacheScene)==null||o.add(this.object),(n=this.cacheScene)==null||n.add(this),this.visible=!0,this}detach(){var o,n;return this.disconnect(),(o=this.cacheScene)==null||o.remove(this),(n=this.cacheScene)==null||n.remove(this.object),this.axis=null,this}setAttach(...o){if(this.transObjectSet.clear(),!o.length||!o[0])return this.detach(),this;this.attach();const n=this.object;if(o.length===1){const i=o[0];return i.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.updateMatrix(),n.updateMatrixWorld(),this.transObjectSet.add(i),this}const e=[],s=[],r=[];return o.forEach(i=>{e.push(i.matrixWorld.elements[12]),s.push(i.matrixWorld.elements[13]),r.push(i.matrixWorld.elements[14])}),n.rotation.set(0,0,0),n.scale.set(1,1,1),n.position.x=(Math.max(...e)-Math.min(...e))/2+Math.min(...e),n.position.y=(Math.max(...s)-Math.min(...s))/2+Math.min(...s),n.position.z=(Math.max(...r)-Math.min(...r))/2+Math.min(...r),n.updateMatrix(),n.updateMatrixWorld(),o.forEach(i=>{this.transObjectSet.add(i)}),this}getMode(){return this.mode}setMode(o){this.mode=o}setTranslationSnap(o){this.translationSnap=o}setRotationSnap(o){this.rotationSnap=o}setScaleSnap(o){this.scaleSnap=o}setSize(o){this.size=o}setSpace(o){this.space=o}intersectObjectWithRay(o,n,e){const s=n.intersectObject(o,!0);for(let r=0;r<s.length;r++)if(s[r].object.visible||e)return s[r];return!1}pointerHover(o){if(this.object===void 0||this.dragging===!0)return;this._raycaster.setFromCamera(o,this.camera);const n=this.intersectObjectWithRay(this.gizmo.picker[this.mode],this._raycaster);n?(this.axis=n.object.name,this.gizmo.updateMatrixWorld(!0),this.plane.updateMatrixWorld(!0),this.dispatchEvent({type:"hover",axis:this.axis,mode:this.mode})):this.axis=null}pointerDown(o){if(!(this.object===void 0||this.dragging===!0||o.button!==0)&&this.axis!==null){this._raycaster.setFromCamera(o,this.camera);const n=this.intersectObjectWithRay(this.plane,this._raycaster,!0);if(n){let e=this.space;if(this.mode==="scale"?e="local":(this.axis==="E"||this.axis==="XYZE"||this.axis==="XYZ")&&(e="world"),e==="local"&&this.mode==="rotation"){const s=this.rotationSnap;this.axis==="X"&&s&&(this.object.rotation.x=Math.round(this.object.rotation.x/s)*s),this.axis==="Y"&&s&&(this.object.rotation.y=Math.round(this.object.rotation.y/s)*s),this.axis==="Z"&&s&&(this.object.rotation.z=Math.round(this.object.rotation.z/s)*s)}this.object.updateMatrixWorld(),this.object.parent&&this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)}this.transObjectSet.forEach(e=>{this.cacheObjects.set(e,{matrixAutoUpdate:e.matrixAutoUpdate,parent:e.parent}),e.matrixAutoUpdate=!1,this.object.attach(e)}),this.dragging=!0,this.dispatchEvent({type:"mouseDown",mode:this.mode})}}pointerMove(o){const n=this.axis,e=this.mode,s=this.object;let r=this.space;if(e==="scale"?r="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(r="world"),s===void 0||n===null||this.dragging===!1||o.button!==-1)return;this._raycaster.setFromCamera(o,this.camera);const i=this.intersectObjectWithRay(this.plane,this._raycaster,!0);if(!!i){if(this.pointEnd.copy(i.point).sub(this.worldPositionStart),e==="position")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(this._tempQuaternion.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(this._tempVector.setFromMatrixPosition(s.parent.matrixWorld)),n.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(this._tempVector.setFromMatrixPosition(s.parent.matrixWorld))));else if(e==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),this._tempVector2.set(a,a,a)}else this._tempVector.copy(this.pointStart),this._tempVector2.copy(this.pointEnd),this._tempVector.applyQuaternion(this._worldQuaternionInv),this._tempVector2.applyQuaternion(this._worldQuaternionInv),this._tempVector2.divide(this._tempVector),n.search("X")===-1&&(this._tempVector2.x=1),n.search("Y")===-1&&(this._tempVector2.y=1),n.search("Z")===-1&&(this._tempVector2.z=1);s.scale.copy(this._scaleStart).multiply(this._tempVector2),this.scaleSnap&&(n.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(e==="rotation"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(this._tempVector.setFromMatrixPosition(this.camera.matrixWorld));n==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(this._tempVector.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(this._unit[n]),this._tempVector.copy(this._unit[n]),r==="local"&&this._tempVector.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(this._tempVector.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&n!=="E"&&n!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(this._tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(this._tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent({type:"change",mode:this.mode,transObjectSet:this.transObjectSet}),this.dispatchEvent({type:"objectChange",mode:this.mode,transObjectSet:this.transObjectSet})}}pointerUp(o){o.button===0&&(this.dragging&&this.axis!==null&&(this.transObjectSet.forEach(n=>{const e=this.cacheObjects.get(n);n.matrixAutoUpdate=e.matrixAutoUpdate,e.parent.attach(n)}),this.cacheObjects.clear(),this.dispatchEvent({type:"mouseUp",mode:this.mode})),this.dragging=!1,this.axis=null)}getPointer(o){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:o.button};{const n=o.changedTouches?o.changedTouches[0]:o,e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:o.button}}}onPointerDown(o){!this.enabled||(this.domElement.style.touchAction="none",this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(o)),this.pointerDown(this._getPointer(o)))}onPointerHover(o){if(!!this.enabled)switch(o.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(o));break}}onPointerMove(o){!this.enabled||this.pointerMove(this._getPointer(o))}onPointerUp(o){!this.enabled||(this.domElement.style.touchAction="",this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(o)))}}const z=L.transPkgName(W),R=function(){let p,o,n;return{name:z,install(e){const s=new j(e.camera,e.dom,e.scene);s.detach(),e.transformControls=s,e.transformControls.addEventListener(G.MOUSE_DOWN,()=>{e.transing=!0}),e.setTransformControls=function(r){return r?this.transformControls.attach():this.transformControls.detach(),this},o=r=>{r.options.transformControls&&s.setCamera(r.camera)},e.addEventListener(g.ENGINE_EVENT.SETCAMERA,o),p=r=>{s.setDom(r.dom)},e.addEventListener(g.ENGINE_EVENT.SETDOM,p),n=r=>{s.setScene(r.scene)},e.addEventListener(g.ENGINE_EVENT.SETSCENE,n)},dispose(e){var s;e.removeEventListener(g.ENGINE_EVENT.SETCAMERA,o),e.removeEventListener(g.ENGINE_EVENT.SETDOM,p),e.removeEventListener(g.ENGINE_EVENT.SETSCENE,n),(s=e.transformControls)==null||s.dispose(),delete e.transing,delete e.transformControls,delete e.setTransformControls}}};c.TRANSFORM_CONTROLS_PLUGIN=z,c.TRANSFORM_EVENT=G,c.TransformControls=j,c.TransformControlsGizmo=C,c.TransformControlsPlane=D,c.TransformControlsPlugin=R,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});