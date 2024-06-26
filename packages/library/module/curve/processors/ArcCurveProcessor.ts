import { defineProcessor, EngineSupport } from "@vis-three/middleware";
import { CurveCompiler } from "../CurveCompiler";
import { getArcCurveConfig, ArcCurveConfig } from "../CurveConfig";
import { ArcCurve } from "../extends/ArcCurve";
import { commonRegCommand } from "./common";

export default defineProcessor<
  ArcCurveConfig,
  ArcCurve,
  EngineSupport,
  CurveCompiler
>({
  type: "ArcCurve",
  config: getArcCurveConfig,
  commands: {
    add: {},
    set: {
      $reg: [commonRegCommand],
    },
    delete: {},
  },
  create(config, engine) {
    return new ArcCurve(
      config.startX,
      config.startY,
      config.vertical,
      config.clockwise,
      config.endX,
      config.endY
    );
  },
  dispose() {},
});
