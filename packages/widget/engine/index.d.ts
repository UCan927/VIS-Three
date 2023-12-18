import { EngineSupport, EngineSupportOptions, EngineSupportParameters } from "@vis-three/middleware";
import { ComponentOptions } from "../component";
import { Widget } from "../widget";
export declare class EngineWidget extends EngineSupport {
    constructor(params?: Partial<EngineSupportParameters>);
    createWidget(component: ComponentOptions): Widget;
}
export interface EngineWidgetOptions extends EngineSupportOptions {
    wdigets: ComponentOptions[];
}
export declare const defineEngineWidget: <E extends EngineWidget = EngineWidget>(options: EngineWidgetOptions, params?: Partial<EngineSupportParameters>) => E;
