import { DirectionalLight } from "three";
import { antiShake, defineProcessor, EngineSupport } from "@vis-three/core";
import { CONFIGTYPE } from "../../constants/configType";
import { ObjectCommands, objectDispose } from "../../object/ObjectProcessor";
import { DirectionalLightConfig } from "../LightConfig";
import { colorHandler, lightCommands, lightCreate } from "./common";

export default defineProcessor<DirectionalLightConfig, DirectionalLight>({
  configType: CONFIGTYPE.DIRECTIONALLIGHT,
  commands: lightCommands as unknown as ObjectCommands<
    DirectionalLightConfig,
    DirectionalLight
  >,
  create(
    config: DirectionalLightConfig,
    engine: EngineSupport
  ): DirectionalLight {
    return lightCreate(new DirectionalLight(), config, {}, engine);
  },

  dispose: objectDispose,
});
