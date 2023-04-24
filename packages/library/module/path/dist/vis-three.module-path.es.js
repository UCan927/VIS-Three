import { Compiler, Rule, getSymbolConfig, defineProcessor, SUPPORT_LIFE_CYCLE } from "@vis-three/middleware";
import { validate } from "uuid";
import { Path, Vector2, EllipseCurve, LineCurve, CubicBezierCurve, QuadraticBezierCurve } from "three";
class PathCompiler extends Compiler {
  constructor() {
    super();
  }
  compile(vid, notice) {
    super.compile(vid, notice);
    return this;
  }
}
const PathRule = function(input, compiler, validateFun = validate) {
  Rule(input, compiler, validateFun);
};
const getPathConfig = function() {
  return Object.assign(getSymbolConfig(), {
    curves: [],
    autoClose: false
  });
};
const pathCurveMap = {
  arc: (startX, startY, vertical, aClockwise, endX, endY) => {
    const start = new Vector2(startX, startY);
    const end = new Vector2(endX, endY);
    const mid = new Vector2((endX + startX) / 2, (endY + startY) / 2);
    const center = new Vector2().copy(end).sub(start);
    center.set(-center.y, center.x).negate().normalize().multiplyScalar(vertical).add(mid);
    const r = new Vector2().copy(end).sub(center).length();
    const startAngle = new Vector2().copy(start).sub(center).angle();
    const endAngle = new Vector2().copy(end).sub(center).angle();
    return new EllipseCurve(
      center.x,
      center.y,
      r,
      r,
      startAngle,
      endAngle,
      aClockwise,
      0
    );
  },
  line: (startX, startY, endX, endY) => new LineCurve(new Vector2(startX, startY), new Vector2(endX, endY)),
  bezier: (startX, startY, aCP1x, aCP1y, aCP2x, aCP2y, endX, endY) => new CubicBezierCurve(
    new Vector2(startX, startY),
    new Vector2(aCP1x, aCP1y),
    new Vector2(aCP2x, aCP2y),
    new Vector2(endX, endY)
  ),
  quadratic: (startX, startY, aCPx, aCPy, endX, endY) => new QuadraticBezierCurve(
    new Vector2(startX, startY),
    new Vector2(aCPx, aCPy),
    new Vector2(endX, endY)
  )
};
const getCurveExtrPoint = function(curve, extr) {
  return extr === "start" ? { x: curve.params[0], y: curve.params[1] } : {
    x: curve.params[curve.params.length - 2],
    y: curve.params[curve.params.length - 1]
  };
};
const generateCurve = function(segment) {
  if (!pathCurveMap[segment.curve]) {
    console.warn(`path processor can not support this curve: ${segment.curve}`);
    return null;
  }
  return pathCurveMap[segment.curve](...segment.params);
};
const syncExtrParams = function(config, params, extr) {
  if (extr === "start") {
    config.params[0] !== params[0] && (config.params[0] = params[0]);
    config.params[1] !== params[1] && (config.params[1] = params[1]);
  } else {
    const range = config.params.length - 1;
    config.params[range - 1] !== params[0] && (config.params[range - 1] = params[0]);
    config.params[range] !== params[1] && (config.params[range] = params[1]);
  }
};
var PathProcessor = defineProcessor({
  type: "Path",
  config: getPathConfig,
  commands: {
    add: {
      curves({ target, config, value }) {
        const curve = generateCurve(value);
        curve && target.curves.push(curve);
      }
    },
    set: {
      curves({ target, config, path }) {
        const index2 = Number(path[1]);
        if (!Number.isInteger(index2)) {
          console.warn(`path processor: set curves path error:`, path);
          return;
        }
        const currentCurve = generateCurve(config.curves[index2]);
        target.curves[index2] = currentCurve;
        const startPoint = getCurveExtrPoint(config.curves[index2], "start");
        const endPoint = getCurveExtrPoint(config.curves[index2], "end");
        if (index2 - 1 >= 0) {
          syncExtrParams(
            config.curves[index2 - 1],
            [startPoint.x, startPoint.y],
            "end"
          );
        }
        if (index2 + 1 <= target.curves.length - 1) {
          syncExtrParams(
            config.curves[index2 + 1],
            [endPoint.x, endPoint.y],
            "start"
          );
        }
      }
    },
    delete: {
      curves({ target, value }) {
        if (target.curves.length - 1 < value) {
          return;
        }
        target.curves.splice(value, target.curves.length);
      }
    }
  },
  create(config, engine) {
    const path = new Path();
    if (config.curves.length) {
      for (const segment of config.curves) {
        const curve = generateCurve(segment);
        curve && path.curves.push(curve);
      }
    }
    path.autoClose = config.autoClose;
    return path;
  },
  dispose(target) {
    target.curves = [];
  }
});
var index = {
  type: "path",
  compiler: PathCompiler,
  rule: PathRule,
  processors: [PathProcessor],
  lifeOrder: SUPPORT_LIFE_CYCLE.ZERO
};
export { index as default };
