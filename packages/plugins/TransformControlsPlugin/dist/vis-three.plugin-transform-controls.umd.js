(function(c,L){typeof exports=="object"&&typeof module!="undefined"?L(exports,require("@vis-three/utils"),require("@vis-three/core"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/utils","@vis-three/core","three"],L):(c=typeof globalThis!="undefined"?globalThis:c||self,L((c["vis-three"]=c["vis-three"]||{},c["vis-three"]["plugin-transform-controls"]={}),c.utils,c.core,c.three))})(this,function(c,L,x,t){"use strict";const R="@vis-three/plugin-transform-controls";class C extends t.Object3D{constructor(){super(),this.enabled=!0,this.mode="position",this.space="local",this.gizmo={},this.picker={},this.helper={},this.axis="XYZ",this.translationSnap=null,this.rotationSnap=null,this.scaleSnap=null,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.rotationAngle=0,this._tempVector=new t.Vector3,this._identityQuaternion=new t.Quaternion,this._tempEuler=new t.Euler,this._alignVector=new t.Vector3(0,1,0),this._zeroVector=new t.Vector3(0,0,0),this._lookAtMatrix=new t.Matrix4,this._tempQuaternion=new t.Quaternion,this._tempQuaternion2=new t.Quaternion,this._unitX=new t.Vector3(1,0,0),this._unitY=new t.Vector3(0,1,0),this._unitZ=new t.Vector3(0,0,1),this.type="TransformControlsGizmo";const s=new t.MeshBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,side:t.DoubleSide,fog:!1,toneMapped:!1}),e=new t.LineBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,toneMapped:!1}),n=s.clone();n.opacity=.15;const o=s.clone();o.opacity=.33;const r=s.clone();r.color.set(16711680);const i=s.clone();i.color.set(65280);const a=s.clone();a.color.set(255);const p=s.clone();p.opacity=.25;const g=p.clone();g.color.set(16776960);const P=p.clone();P.color.set(65535);const X=p.clone();X.color.set(16711935),s.clone().color.set(16776960);const V=e.clone();V.color.set(16711680);const Q=e.clone();Q.color.set(65280);const I=e.clone();I.color.set(255);const v=e.clone();v.color.set(65535);const E=e.clone();E.color.set(16711935);const b=e.clone();b.color.set(16776960);const y=e.clone();y.color.set(7895160);const w=b.clone();w.opacity=.25;const _=new t.CylinderGeometry(0,.05,.2,12,1,!1),m=new t.BoxGeometry(.125,.125,.125),l=new t.BufferGeometry;l.setAttribute("position",new t.Float32BufferAttribute([0,0,0,1,0,0],3));function Y(d,A){const f=new t.BufferGeometry,S=[];for(let h=0;h<=64*A;++h)S.push(0,Math.cos(h/32*Math.PI)*d,Math.sin(h/32*Math.PI)*d);return f.setAttribute("position",new t.Float32BufferAttribute(S,3)),f}function q(){const d=new t.BufferGeometry;return d.setAttribute("position",new t.Float32BufferAttribute([0,0,0,1,1,1],3)),d}const k={X:[[new t.Mesh(_,r),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new t.Mesh(_,r),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new t.Line(l,V)]],Y:[[new t.Mesh(_,i),[0,1,0],null,null,"fwd"],[new t.Mesh(_,i),[0,1,0],[Math.PI,0,0],null,"bwd"],[new t.Line(l,Q),null,[0,0,Math.PI/2]]],Z:[[new t.Mesh(_,a),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new t.Mesh(_,a),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new t.Line(l,I),null,[0,-Math.PI/2,0]]],XYZ:[[new t.Mesh(new t.OctahedronGeometry(.1,0),p.clone()),[0,0,0],[0,0,0]]],XY:[[new t.Mesh(new t.PlaneGeometry(.295,.295),g.clone()),[.15,.15,0]],[new t.Line(l,b),[.18,.3,0],null,[.125,1,1]],[new t.Line(l,b),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new t.Mesh(new t.PlaneGeometry(.295,.295),P.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new t.Line(l,v),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new t.Line(l,v),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new t.Mesh(new t.PlaneGeometry(.295,.295),X.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new t.Line(l,E),[.18,0,.3],null,[.125,1,1]],[new t.Line(l,E),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},F={X:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),n),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),n),[0,.6,0]]],Z:[[new t.Mesh(new t.CylinderGeometry(.2,0,1,4,1,!1),n),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new t.Mesh(new t.OctahedronGeometry(.2,0),n)]],XY:[[new t.Mesh(new t.PlaneGeometry(.4,.4),n),[.2,.2,0]]],YZ:[[new t.Mesh(new t.PlaneGeometry(.4,.4),n),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new t.Mesh(new t.PlaneGeometry(.4,.4),n),[.2,0,.2],[-Math.PI/2,0,0]]]},U={START:[[new t.Mesh(new t.OctahedronGeometry(.01,2),o),null,null,null,"helper"]],END:[[new t.Mesh(new t.OctahedronGeometry(.01,2),o),null,null,null,"helper"]],DELTA:[[new t.Line(q(),o),null,null,null,"helper"]],X:[[new t.Line(l,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new t.Line(l,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new t.Line(l,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},B={X:[[new t.Line(Y(1,.5),V)],[new t.Mesh(new t.OctahedronGeometry(.04,0),r),[0,0,.99],null,[1,3,1]]],Y:[[new t.Line(Y(1,.5),Q),null,[0,0,-Math.PI/2]],[new t.Mesh(new t.OctahedronGeometry(.04,0),i),[0,0,.99],null,[3,1,1]]],Z:[[new t.Line(Y(1,.5),I),null,[0,Math.PI/2,0]],[new t.Mesh(new t.OctahedronGeometry(.04,0),a),[.99,0,0],null,[1,3,1]]],E:[[new t.Line(Y(1.25,1),w),null,[0,Math.PI/2,0]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new t.Mesh(new t.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new t.Line(Y(1,1),y),null,[0,Math.PI/2,0]]]},J={AXIS:[[new t.Line(l,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},K={X:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new t.Mesh(new t.TorusGeometry(1,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new t.Mesh(new t.TorusGeometry(1.25,.1,2,24),n)]],XYZE:[[new t.Mesh(new t.SphereGeometry(.7,10,8),n)]]},$={X:[[new t.Mesh(m,r),[.8,0,0],[0,0,-Math.PI/2]],[new t.Line(l,V),null,null,[.8,1,1]]],Y:[[new t.Mesh(m,i),[0,.8,0]],[new t.Line(l,Q),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new t.Mesh(m,a),[0,0,.8],[Math.PI/2,0,0]],[new t.Line(l,I),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new t.Mesh(m,g),[.85,.85,0],null,[2,2,.2]],[new t.Line(l,b),[.855,.98,0],null,[.125,1,1]],[new t.Line(l,b),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new t.Mesh(m,P),[0,.85,.85],null,[.2,2,2]],[new t.Line(l,v),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new t.Line(l,v),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new t.Mesh(m,X),[.85,0,.85],null,[2,.2,2]],[new t.Line(l,E),[.855,0,.98],null,[.125,1,1]],[new t.Line(l,E),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),p.clone()),[1.1,0,0]]],XYZY:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),p.clone()),[0,1.1,0]]],XYZZ:[[new t.Mesh(new t.BoxGeometry(.125,.125,.125),p.clone()),[0,0,1.1]]]},tt={X:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),n),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),n),[0,.5,0]]],Z:[[new t.Mesh(new t.CylinderGeometry(.2,0,.8,4,1,!1),n),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new t.Mesh(m,n),[.85,.85,0],null,[3,3,.2]]],YZ:[[new t.Mesh(m,n),[0,.85,.85],null,[.2,3,3]]],XZ:[[new t.Mesh(m,n),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),n),[1.1,0,0]]],XYZY:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),n),[0,1.1,0]]],XYZZ:[[new t.Mesh(new t.BoxGeometry(.2,.2,.2),n),[0,0,1.1]]]},it={X:[[new t.Line(l,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new t.Line(l,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new t.Line(l,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function M(d){const A=new t.Object3D;for(const f in d)for(let S=d[f].length;S--;){const h=d[f][S][0].clone(),T=d[f][S][1],Z=d[f][S][2],O=d[f][S][3],et=d[f][S][4];h.name=f,h.tag=et,T&&h.position.set(T[0],T[1],T[2]),Z&&h.rotation.set(Z[0],Z[1],Z[2]),O&&h.scale.set(O[0],O[1],O[2]),h.updateMatrix();const H=h.geometry.clone();H.applyMatrix4(h.matrix),h.geometry=H,h.renderOrder=1/0,h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1),A.add(h)}return A}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.position=M(k)),this.add(this.gizmo.rotation=M(B)),this.add(this.gizmo.scale=M($)),this.add(this.picker.position=M(F)),this.add(this.picker.rotation=M(K)),this.add(this.picker.scale=M(tt)),this.add(this.helper.position=M(U)),this.add(this.helper.rotation=M(J)),this.add(this.helper.scale=M(it)),this.picker.position.visible=!1,this.picker.rotation.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(s){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:this._identityQuaternion;this.gizmo.position.visible=this.mode==="position",this.gizmo.rotation.visible=this.mode==="rotation",this.gizmo.scale.visible=this.mode==="scale",this.helper.position.visible=this.mode==="position",this.helper.rotation.visible=this.mode==="rotation",this.helper.scale.visible=this.mode==="scale";let o=[];o=o.concat(this.picker[this.mode].children),o=o.concat(this.gizmo[this.mode].children),o=o.concat(this.helper[this.mode].children);for(let r=0;r<o.length;r++){const i=o[r];i.visible=!0,i.rotation.set(0,0,0),i.position.copy(this.worldPosition);let a;if(this.camera instanceof t.OrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),i.scale.set(1,1,1).multiplyScalar(a*this.size/7),i.tag==="helper"){i.visible=!1,i.name==="AXIS"?(i.position.copy(this.worldPositionStart),i.visible=!!this.axis,this.axis==="X"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,0,0)),i.quaternion.copy(n).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(n).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="Y"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,0,Math.PI/2)),i.quaternion.copy(n).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(n).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="Z"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,Math.PI/2,0)),i.quaternion.copy(n).multiply(this._tempQuaternion),Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(n).dot(this.eye))>.9&&(i.visible=!1)),this.axis==="XYZE"&&(this._tempQuaternion.setFromEuler(this._tempEuler.set(0,Math.PI/2,0)),this._alignVector.copy(this.rotationAxis),i.quaternion.setFromRotationMatrix(this._lookAtMatrix.lookAt(this._zeroVector,this._alignVector,this._unitY)),i.quaternion.multiply(this._tempQuaternion),i.visible=this.dragging),this.axis==="E"&&(i.visible=!1)):i.name==="START"?(i.position.copy(this.worldPositionStart),i.visible=this.dragging):i.name==="END"?(i.position.copy(this.worldPosition),i.visible=this.dragging):i.name==="DELTA"?(i.position.copy(this.worldPositionStart),i.quaternion.copy(this.worldQuaternionStart),this._tempVector.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),this._tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()),i.scale.copy(this._tempVector),i.visible=this.dragging):(i.quaternion.copy(n),this.dragging?i.position.copy(this.worldPositionStart):i.position.copy(this.worldPosition),this.axis&&(i.visible=this.axis.search(i.name)!==-1));continue}i.quaternion.copy(n),this.mode==="position"||this.mode==="scale"?((i.name==="X"||i.name==="XYZX")&&Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(n).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),(i.name==="Y"||i.name==="XYZY")&&Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(n).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),(i.name==="Z"||i.name==="XYZZ")&&Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(n).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="XY"&&Math.abs(this._alignVector.copy(this._unitZ).applyQuaternion(n).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="YZ"&&Math.abs(this._alignVector.copy(this._unitX).applyQuaternion(n).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name==="XZ"&&Math.abs(this._alignVector.copy(this._unitY).applyQuaternion(n).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),i.name.search("X")!==-1&&(this._alignVector.copy(this._unitX).applyQuaternion(n).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.x*=-1:i.tag==="bwd"&&(i.visible=!1)),i.name.search("Y")!==-1&&(this._alignVector.copy(this._unitY).applyQuaternion(n).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.y*=-1:i.tag==="bwd"&&(i.visible=!1)),i.name.search("Z")!==-1&&(this._alignVector.copy(this._unitZ).applyQuaternion(n).dot(this.eye)<0?i.tag==="fwd"?i.visible=!1:i.scale.z*=-1:i.tag==="bwd"&&(i.visible=!1))):this.mode==="rotation"&&(this._tempQuaternion2.copy(n),this._alignVector.copy(this.eye).applyQuaternion(this._tempQuaternion.copy(n).invert()),i.name.search("E")!==-1&&i.quaternion.setFromRotationMatrix(this._lookAtMatrix.lookAt(this.eye,this._zeroVector,this._unitY)),i.name==="X"&&(this._tempQuaternion.setFromAxisAngle(this._unitX,Math.atan2(-this._alignVector.y,this._alignVector.z)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion)),i.name==="Y"&&(this._tempQuaternion.setFromAxisAngle(this._unitY,Math.atan2(this._alignVector.x,this._alignVector.z)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion)),i.name==="Z"&&(this._tempQuaternion.setFromAxisAngle(this._unitZ,Math.atan2(this._alignVector.y,this._alignVector.x)),this._tempQuaternion.multiplyQuaternions(this._tempQuaternion2,this._tempQuaternion),i.quaternion.copy(this._tempQuaternion))),i.visible=i.visible&&(i.name.indexOf("X")===-1||this.showX),i.visible=i.visible&&(i.name.indexOf("Y")===-1||this.showY),i.visible=i.visible&&(i.name.indexOf("Z")===-1||this.showZ),i.visible=i.visible&&(i.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),i.material._opacity=i.material._opacity||i.material.opacity,i.material._color=i.material._color||i.material.color.clone(),i.material.color.copy(i.material._color),i.material.opacity=i.material._opacity,this.enabled?this.axis&&(i.name===this.axis?(i.material.opacity=1,i.material.color.lerp(new t.Color(1,1,1),.5)):this.axis.split("").some(function(p){return i.name===p})?(i.material.opacity=1,i.material.color.lerp(new t.Color(1,1,1),.5)):(i.material.opacity*=.25,i.material.color.lerp(new t.Color(1,1,1),.5))):(i.material.opacity*=.5,i.material.color.lerp(new t.Color(1,1,1),.5))}super.updateMatrixWorld(s)}}class D extends t.Mesh{constructor(){super(new t.PlaneGeometry(1e5,1e5,2,2),new t.MeshBasicMaterial({visible:!1,wireframe:!0,side:t.DoubleSide,transparent:!0,opacity:.1,toneMapped:!1})),this.enabled=!0,this.mode="position",this.space="local",this.gizmo={},this.picker={},this.helper={},this.axis="XYZ",this.translationSnap=null,this.rotationSnap=null,this.scaleSnap=null,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.rotationAngle=0,this._tempVector=new t.Vector3,this._identityQuaternion=new t.Quaternion,this._alignVector=new t.Vector3(0,1,0),this._dirVector=new t.Vector3,this._tempMatrix=new t.Matrix4,this._unitX=new t.Vector3(1,0,0),this._unitY=new t.Vector3(0,1,0),this._unitZ=new t.Vector3(0,0,1),this._v1=new t.Vector3,this._v2=new t.Vector3,this._v3=new t.Vector3,this.type="TransformControlsPlane"}updateMatrixWorld(s){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),this._v1.copy(this._unitX).applyQuaternion(e==="local"?this.worldQuaternion:this._identityQuaternion),this._v2.copy(this._unitY).applyQuaternion(e==="local"?this.worldQuaternion:this._identityQuaternion),this._v3.copy(this._unitZ).applyQuaternion(e==="local"?this.worldQuaternion:this._identityQuaternion),this._alignVector.copy(this._v2),this.mode){case"position":case"scale":switch(this.axis){case"X":this._alignVector.copy(this.eye).cross(this._v1),this._dirVector.copy(this._v1).cross(this._alignVector);break;case"Y":this._alignVector.copy(this.eye).cross(this._v2),this._dirVector.copy(this._v2).cross(this._alignVector);break;case"Z":this._alignVector.copy(this.eye).cross(this._v3),this._dirVector.copy(this._v3).cross(this._alignVector);break;case"XY":this._dirVector.copy(this._v3);break;case"YZ":this._dirVector.copy(this._v1);break;case"XZ":this._alignVector.copy(this._v3),this._dirVector.copy(this._v2);break;case"XYZ":case"E":this._dirVector.set(0,0,0);break}break;case"rotation":default:this._dirVector.set(0,0,0)}this._dirVector.length()===0?this.quaternion.copy(this.cameraQuaternion):(this._tempMatrix.lookAt(this._tempVector.set(0,0,0),this._dirVector,this._alignVector),this.quaternion.setFromRotationMatrix(this._tempMatrix)),super.updateMatrixWorld(s)}}var G=(u=>(u.HOVER="hover",u.CHANGE="change",u.MOUSE_DOWN="mouseDown",u.OBJECT_CHANGE="objectChange",u.MOUSE_UP="mouseUp",u))(G||{});class j extends t.Object3D{constructor(s,e,n){super(),this.object=new t.Object3D,this.enabled=!0,this.mode="position",this.space="local",this.axis="XYZ",this.translationSnap=0,this.rotationSnap=0,this.scaleSnap=0,this.size=1,this.dragging=!1,this.showX=!0,this.showY=!0,this.showZ=!0,this.cacheScene=null,this.transObjectSet=new Set,this.cacheObjects=new Map,this.rotationAngle=0,this._raycaster=new t.Raycaster,this._offset=new t.Vector3,this._startNorm=new t.Vector3,this._endNorm=new t.Vector3,this._cameraScale=new t.Vector3,this._parentPosition=new t.Vector3,this._parentQuaternion=new t.Quaternion,this._parentQuaternionInv=new t.Quaternion,this._parentScale=new t.Vector3,this._worldScaleStart=new t.Vector3,this._worldQuaternionInv=new t.Quaternion,this._worldScale=new t.Vector3,this._positionStart=new t.Vector3,this._quaternionStart=new t.Quaternion,this._scaleStart=new t.Vector3,this._tempQuaternion=new t.Quaternion,this._tempVector=new t.Vector3,this._tempVector2=new t.Vector3,this._tempMatrix=new t.Matrix4,this._unit={X:new t.Vector3(1,0,0),Y:new t.Vector3(0,1,0),Z:new t.Vector3(0,0,1)},e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document.body),this.domElement=e,this.cacheScene=n;const o=new C;this.gizmo=o,this.add(o);const r=new D;this.plane=r,this.add(r);const i=this;function a(y,w){let _=w;Object.defineProperty(i,y,{get:function(){return _!==void 0?_:w},set:function(m){_!==m&&(_=m,r[y]=m,o[y]=m)}}),i[y]=w,r[y]=w,o[y]=w}a("camera",s),a("object",this.object),a("enabled",!0),a("axis",null),a("mode","position"),a("translationSnap",0),a("rotationSnap",0),a("scaleSnap",0),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const p=new t.Vector3,g=new t.Vector3,P=new t.Quaternion,X=new t.Quaternion,W=new t.Vector3,V=new t.Quaternion,Q=new t.Vector3,I=new t.Vector3,v=new t.Vector3,E=0,b=new t.Vector3;a("worldPosition",p),a("worldPositionStart",g),a("worldQuaternion",P),a("worldQuaternionStart",X),a("cameraPosition",W),a("cameraQuaternion",V),a("pointStart",Q),a("pointEnd",I),a("rotationAxis",v),a("rotationAngle",E),a("eye",b),this._getPointer=this.getPointer.bind(this),this._onPointerDown=this.onPointerDown.bind(this),this._onPointerHover=this.onPointerHover.bind(this),this._onPointerMove=this.onPointerMove.bind(this),this._onPointerUp=this.onPointerUp.bind(this)}setDom(s){return this.disconnect(),this.domElement=s,this.connect(),this}setScene(s){this.cacheScene=s}setCamera(s){return this.camera=s,this}getTransObjectSet(){return this.transObjectSet}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(!0)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()})}attach(){var s,e;return this.connect(),(s=this.cacheScene)==null||s.add(this.object),(e=this.cacheScene)==null||e.add(this),this}detach(){var s,e;return this.disconnect(),(s=this.cacheScene)==null||s.remove(this),(e=this.cacheScene)==null||e.remove(this.object),this.axis=null,this}setAttach(...s){if(this.transObjectSet.clear(),this.cacheObjects.clear(),!s.length||!s[0])return this.detach(),this;this.attach();const e=this.object;if(s.length===1){const i=s[0];i.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.updateMatrix(),e.updateMatrixWorld(),this.transObjectSet.add(i);const a=new t.Object3D;return e.add(a),a.matrixWorld.copy(i.matrixWorld),this.applyMatrixToMatrixWorld(a.matrixWorld,a),this.cacheObjects.set(i,{matrixAutoUpdate:i.matrixAutoUpdate,virtual:a}),this}const n=[],o=[],r=[];return s.forEach(i=>{n.push(i.matrixWorld.elements[12]),o.push(i.matrixWorld.elements[13]),r.push(i.matrixWorld.elements[14])}),e.rotation.set(0,0,0),e.scale.set(1,1,1),e.position.x=(Math.max(...n)-Math.min(...n))/2+Math.min(...n),e.position.y=(Math.max(...o)-Math.min(...o))/2+Math.min(...o),e.position.z=(Math.max(...r)-Math.min(...r))/2+Math.min(...r),e.updateMatrix(),e.updateMatrixWorld(),s.forEach(i=>{this.transObjectSet.add(i);const a=new t.Object3D;e.add(a),a.matrixWorld.copy(i.matrixWorld),this.applyMatrixToMatrixWorld(a.matrixWorld,a),this.cacheObjects.set(i,{matrixAutoUpdate:i.matrixAutoUpdate,virtual:a})}),this}applyMatrixToMatrixWorld(s,e){e.matrixWorld.copy(s),e.matrix.multiplyMatrices(this._tempMatrix.copy(e.parent.matrixWorld).invert(),e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale)}getMode(){return this.mode}setMode(s){this.mode=s}setTranslationSnap(s){this.translationSnap=s}setRotationSnap(s){this.rotationSnap=s}setScaleSnap(s){this.scaleSnap=s}setSize(s){this.size=s}setSpace(s){this.space=s}intersectObjectWithRay(s,e,n){const o=e.intersectObject(s,!0);for(let r=0;r<o.length;r++)if(o[r].object.visible||n)return o[r];return!1}pointerHover(s){if(this.object===void 0||this.dragging===!0)return;this._raycaster.setFromCamera(s,this.camera);const e=this.intersectObjectWithRay(this.gizmo.picker[this.mode],this._raycaster);e?(this.axis=e.object.name,this.gizmo.updateMatrixWorld(!0),this.plane.updateMatrixWorld(!0),this.dispatchEvent({type:"hover",axis:this.axis,mode:this.mode})):this.axis=null}pointerDown(s){if(!(this.object===void 0||this.dragging===!0||s.button!==0)&&this.axis!==null){this._raycaster.setFromCamera(s,this.camera);const e=this.intersectObjectWithRay(this.plane,this._raycaster,!0);if(e){let n=this.space;if(this.mode==="scale"?n="local":(this.axis==="E"||this.axis==="XYZE"||this.axis==="XYZ")&&(n="world"),n==="local"&&this.mode==="rotation"){const o=this.rotationSnap;this.axis==="X"&&o&&(this.object.rotation.x=Math.round(this.object.rotation.x/o)*o),this.axis==="Y"&&o&&(this.object.rotation.y=Math.round(this.object.rotation.y/o)*o),this.axis==="Z"&&o&&(this.object.rotation.z=Math.round(this.object.rotation.z/o)*o)}this.object.updateMatrixWorld(),this.object.parent&&this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)}this.transObjectSet.forEach(n=>{n.matrixAutoUpdate=!1}),this.dragging=!0,this.dispatchEvent({type:"mouseDown",mode:this.mode})}}pointerMove(s){const e=this.axis,n=this.mode,o=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),o===void 0||e===null||this.dragging===!1||s.button!==-1)return;this._raycaster.setFromCamera(s,this.camera);const i=this.intersectObjectWithRay(this.plane,this._raycaster,!0);if(!!i){if(this.pointEnd.copy(i.point).sub(this.worldPositionStart),n==="position")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),o.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(o.position.applyQuaternion(this._tempQuaternion.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.position.applyQuaternion(this._quaternionStart)),r==="world"&&(o.parent&&o.position.add(this._tempVector.setFromMatrixPosition(o.parent.matrixWorld)),e.search("X")!==-1&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.parent&&o.position.sub(this._tempVector.setFromMatrixPosition(o.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),this._tempVector2.set(a,a,a)}else this._tempVector.copy(this.pointStart),this._tempVector2.copy(this.pointEnd),this._tempVector.applyQuaternion(this._worldQuaternionInv),this._tempVector2.applyQuaternion(this._worldQuaternionInv),this._tempVector2.divide(this._tempVector),e.search("X")===-1&&(this._tempVector2.x=1),e.search("Y")===-1&&(this._tempVector2.y=1),e.search("Z")===-1&&(this._tempVector2.z=1);o.scale.copy(this._scaleStart).multiply(this._tempVector2),this.scaleSnap&&(e.search("X")!==-1&&(o.scale.x=Math.round(o.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(o.scale.y=Math.round(o.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(o.scale.z=Math.round(o.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotation"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(this._tempVector.setFromMatrixPosition(this.camera.matrixWorld));e==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(this._tempVector.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(this._unit[e]),this._tempVector.copy(this._unit[e]),r==="local"&&this._tempVector.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(this._tempVector.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(o.quaternion.copy(this._quaternionStart),o.quaternion.multiply(this._tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),o.quaternion.copy(this._tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),o.quaternion.multiply(this._quaternionStart).normalize())}this.transObjectSet.forEach(a=>{const p=this.cacheObjects.get(a);this.applyMatrixToMatrixWorld(p.virtual.matrixWorld,a)}),this.dispatchEvent({type:"change",mode:this.mode,transObjectSet:this.transObjectSet}),this.dispatchEvent({type:"objectChange",mode:this.mode,transObjectSet:this.transObjectSet})}}pointerUp(s){s.button===0&&(this.dragging&&this.axis!==null&&(this.transObjectSet.forEach(e=>{const n=this.cacheObjects.get(e);e.matrixAutoUpdate=n.matrixAutoUpdate}),this.dispatchEvent({type:"mouseUp",mode:this.mode})),this.dragging=!1,this.axis=null)}getPointer(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=s.changedTouches?s.changedTouches[0]:s,n=this.domElement.getBoundingClientRect();return{x:(e.clientX-n.left)/n.width*2-1,y:-(e.clientY-n.top)/n.height*2+1,button:s.button}}}onPointerDown(s){!this.enabled||(this.domElement.style.touchAction="none",this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}onPointerHover(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}onPointerMove(s){!this.enabled||this.pointerMove(this._getPointer(s))}onPointerUp(s){!this.enabled||(this.domElement.style.touchAction="",this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}}const z=L.transPkgName(R),N=function(){let u,s,e;return{name:z,install(n){const o=new j(n.camera,n.dom,n.scene);o.detach(),n.transformControls=o,n.transformControls.addEventListener(G.MOUSE_DOWN,()=>{n.transing=!0}),n.setTransformControls=function(r){return this.transformControls.visible=r,this},s=r=>{r.options.transformControls&&o.setCamera(r.camera)},n.addEventListener(x.ENGINE_EVENT.SETCAMERA,s),u=r=>{o.setDom(r.dom)},n.addEventListener(x.ENGINE_EVENT.SETDOM,u),e=r=>{o.setScene(r.scene)},n.addEventListener(x.ENGINE_EVENT.SETSCENE,e)},dispose(n){var o;n.removeEventListener(x.ENGINE_EVENT.SETCAMERA,s),n.removeEventListener(x.ENGINE_EVENT.SETDOM,u),n.removeEventListener(x.ENGINE_EVENT.SETSCENE,e),(o=n.transformControls)==null||o.dispose(),delete n.transing,delete n.transformControls,delete n.setTransformControls}}};c.TRANSFORM_CONTROLS_PLUGIN=z,c.TRANSFORM_EVENT=G,c.TransformControls=j,c.TransformControlsGizmo=C,c.TransformControlsPlane=D,c.TransformControlsPlugin=N,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
