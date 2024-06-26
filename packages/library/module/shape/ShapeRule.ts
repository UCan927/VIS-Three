import { ProxyNotice, Rule } from "@vis-three/middleware";
import { ShapeCompiler } from "./ShapeCompiler";
import { validate } from "uuid";

export const ShapeRule: Rule<ShapeCompiler> = function (
  input: ProxyNotice,
  compiler,
  validateFun = validate
) {
  Rule(input, compiler, validateFun);
};
