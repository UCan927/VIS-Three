import { Color, Material, Texture } from "three";
import { ProcessParams } from "../../../core/Processor";
import { EngineSupport } from "../../../engine/EngineSupport";
import { antiShake } from "../../../utils/AntiShake";
import { IgnoreAttribute, syncObject } from "../../../utils/utils";
import { MaterialConfig } from "../MaterialConfig";

export const commonNeedUpdatesRegCommand = {
  reg: new RegExp("transparent|sizeAttenuation"),
  handler<T extends Material, C extends MaterialConfig>({
    target,
    key,
    value,
  }: ProcessParams<C, T>) {
    target[key] = value;
    target.needsUpdate = true;
  },
};

export const mapHandler = function <
  T extends Material,
  C extends MaterialConfig
>({ target, key, value, engine }: ProcessParams<C, T>) {
  antiShake.exec((finish) => {
    const texture = engine.compilerManager.getObjectBySymbol(value);

    if (!(texture instanceof Texture)) {
      finish &&
        console.warn(
          `this url resource is not instance of Texture: ${key}`,
          value,
          texture
        );

      target[key] = null;
      return false;
    }
    target[key] = texture;
    target.needsUpdate = true;
    return true;
  });
};

export const commonMapRegCommand = {
  reg: new RegExp("map$", "i"),
  handler: mapHandler,
};

export const colorSetHandler = function <
  T extends Material,
  C extends MaterialConfig
>({ target, key, value }: ProcessParams<C, T>) {
  (target[key] as Color).copy(new Color(value));
};

export const create = function <T extends Material, C extends MaterialConfig>(
  target: T,
  config: C,
  engine: EngineSupport
): T {
  const filter: IgnoreAttribute<C> = {} as IgnoreAttribute<C>;

  for (const key of Object.keys(config)) {
    if (key.toLocaleLowerCase().endsWith("map") && config[key]) {
      mapHandler({ target, key, value: config[key], engine } as ProcessParams<
        C,
        T
      >);
      filter[key] = true;
    } else if (target[key] instanceof Color) {
      target[key] = new Color(config[key]);
      filter[key] = true;
    }
  }

  syncObject(config, target, filter);

  target.needsUpdate = true;

  return target;
};

export const dispose = function <T extends Material>(target: T) {
  target.dispose();
};