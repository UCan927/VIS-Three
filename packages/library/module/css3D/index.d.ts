import { CSS3DCompiler } from "./CSS3DCompiler";
import { CSS3DRule } from "./CSS3DRule";
import { SUPPORT_LIFE_CYCLE } from "@vis-three/middleware";
declare const _default: {
    type: string;
    object: boolean;
    compiler: typeof CSS3DCompiler;
    rule: CSS3DRule;
    processors: (import("@vis-three/middleware").Processor<import("./CSS3DConfig").CSS3DObjectConfig, import("three/examples/jsm/renderers/CSS3DRenderer").CSS3DObject, import("@vis-three/middleware").EngineSupport, CSS3DCompiler> | import("@vis-three/middleware").Processor<import("./CSS3DConfig").CSS3DPlaneConfig, import("@vis-three/core").CSS3DPlane, import("@vis-three/middleware").EngineSupport, CSS3DCompiler> | import("@vis-three/middleware").Processor<import("./CSS3DConfig").CSS3DSpriteConfig, import("@vis-three/core").CSS3DSprite, import("@vis-three/middleware").EngineSupport, CSS3DCompiler>)[];
    lifeOrder: SUPPORT_LIFE_CYCLE;
};
export default _default;