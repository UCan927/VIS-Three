import { CubeTexture } from "three";
import { defineProcessor } from "../../../core/Processor";
import { syncObject } from "../../../utils/utils";
import { CONFIGTYPE } from "../../constants/configType";
const instanceClasses = [HTMLImageElement, HTMLVideoElement, HTMLCanvasElement];
const imageHanlder = function ({ target, index, value, engine }) {
    target.images[index] = engine.compilerManager.textureCompiler.getResource(value, instanceClasses);
    target.needsUpdate = true;
};
export default defineProcessor({
    configType: CONFIGTYPE.CUBETEXTURE,
    commands: {
        set: {
            cube: {
                px({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 0,
                    });
                },
                nx({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 1,
                    });
                },
                py({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 2,
                    });
                },
                ny({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 3,
                    });
                },
                pz({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 4,
                    });
                },
                nz({ target, value, engine }) {
                    imageHanlder({
                        target,
                        value,
                        engine,
                        index: 5,
                    });
                },
            },
        },
    },
    create(config, engine) {
        const texture = new CubeTexture();
        const cube = config.cube;
        const compiler = engine.compilerManager.textureCompiler;
        const images = [
            compiler.getResource(cube.px, instanceClasses),
            compiler.getResource(cube.nx, instanceClasses),
            compiler.getResource(cube.py, instanceClasses),
            compiler.getResource(cube.ny, instanceClasses),
            compiler.getResource(cube.pz, instanceClasses),
            compiler.getResource(cube.nz, instanceClasses),
        ];
        texture.image = images;
        syncObject(config, texture, {
            type: true,
            cube: true,
        });
        texture.needsUpdate = true;
        return texture;
    },
    dispose(target) {
        target.dispose();
    },
});
//# sourceMappingURL=CubeTextureProcessor.js.map