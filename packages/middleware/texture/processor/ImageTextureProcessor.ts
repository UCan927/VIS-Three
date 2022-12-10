import {
  antiShake,
  EngineSupport,
  ImageTexture,
  syncObject,
  defineProcessor,
} from "@vis-three/core";
import { CONFIGTYPE } from "../../constants/configType";
import { ImageTextureConfig } from "../TextureConfig";
import { needUpdateRegCommand, urlHanlder } from "./common";

export default defineProcessor<ImageTextureConfig, ImageTexture>({
  configType: CONFIGTYPE.IMAGETEXTURE,
  commands: {
    set: {
      url: urlHanlder,
      $reg: [needUpdateRegCommand],
    },
  },
  create(config: ImageTextureConfig, engine: EngineSupport): ImageTexture {
    const texture = new ImageTexture();
    if (config.url) {
      urlHanlder({ target: texture, value: config.url, engine });
    }

    syncObject(config, texture, {
      type: true,
      url: true,
    });

    texture.needsUpdate = true;

    return texture;
  },

  dispose(target: ImageTexture): void {
    target.dispose();
  },
});
