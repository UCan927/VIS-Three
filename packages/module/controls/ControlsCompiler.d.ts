import { VisOrbitControls } from "@vis-three/core";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { MODULETYPE } from "../constants";
import { Compiler } from "../module";
import { ControlsAllConfig } from "./ControlsConfig";
export type ControlsAllType = TransformControls | VisOrbitControls;
export declare class ControlsCompiler extends Compiler<ControlsAllConfig, ControlsAllType> {
    MODULE: MODULETYPE;
    constructor();
}
