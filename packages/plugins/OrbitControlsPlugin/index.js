import { ENGINE_EVENT, VisOrbitControls, } from "@vis-three/core";
import { transPkgName } from "@vis-three/utils";
import { name as pkgname } from "./package.json";
export const ORBIT_CONTROLS_PLUGIN = transPkgName(pkgname);
export const OrbitControlsPlugin = function () {
    let setDomFun;
    let setCameraFun;
    let cacheRender;
    return {
        name: ORBIT_CONTROLS_PLUGIN,
        install(engine) {
            const controls = new VisOrbitControls(engine.camera, engine.dom);
            engine.orbitControls = controls;
            setDomFun = (event) => {
                controls.setDom(event.dom);
            };
            engine.addEventListener(ENGINE_EVENT.SETDOM, setDomFun);
            setCameraFun = (event) => {
                event.options.orbitControls && controls.setCamera(event.camera);
            };
            engine.addEventListener(ENGINE_EVENT.SETCAMERA, setCameraFun);
            cacheRender = engine.render;
            engine.render = function () {
                cacheRender();
                controls.update();
            };
        },
        dispose(engine) {
            engine.removeEventListener(ENGINE_EVENT.SETDOM, setDomFun);
            engine.removeEventListener(ENGINE_EVENT.SETCAMERA, setCameraFun);
            engine.render = cacheRender;
        },
    };
};
