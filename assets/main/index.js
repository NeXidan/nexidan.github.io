System.register("chunks:///main.js", ['cc'], function () {
  var cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button$1, director, resources, sys, SpriteFrame, Prefab, Font, Material, MeshRenderer, MeshCollider, Vec3, Vec2, toDegree, Camera, Texture2D, Sprite, CCFloat, Widget, Layout, UIOpacity, tween, PhysicsSystem, NodeEventType, Size, screen, view, ResolutionPolicy, Layers, SpriteRenderer, BoxCollider, EventHandler, CCString, CCInteger, CCBoolean, BlockInputEvents, Enum, CCClass, gfx, postProcess, RenderTexture, EffectAsset, Vec4, rendering, game;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button$1 = module.Button;
      director = module.director;
      resources = module.resources;
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Font = module.Font;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      MeshCollider = module.MeshCollider;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      toDegree = module.toDegree;
      Camera = module.Camera;
      Texture2D = module.Texture2D;
      Sprite = module.Sprite;
      CCFloat = module.CCFloat;
      Widget = module.Widget;
      Layout = module.Layout;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      PhysicsSystem = module.PhysicsSystem;
      NodeEventType = module.NodeEventType;
      Size = module.Size;
      screen = module.screen;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      Layers = module.Layers;
      SpriteRenderer = module.SpriteRenderer;
      BoxCollider = module.BoxCollider;
      EventHandler = module.EventHandler;
      CCString = module.CCString;
      CCInteger = module.CCInteger;
      CCBoolean = module.CCBoolean;
      BlockInputEvents = module.BlockInputEvents;
      Enum = module.Enum;
      CCClass = module.CCClass;
      gfx = module.gfx;
      postProcess = module.postProcess;
      RenderTexture = module.RenderTexture;
      EffectAsset = module.EffectAsset;
      Vec4 = module.Vec4;
      rendering = module.rendering;
      game = module.game;
    }],
    execute: function () {
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);
          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);
          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);
          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }
        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
            height = 20;

          // new nodes
          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }
          y -= height;
          // single
          let currentRow = 0;
          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button$1.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button$1.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button$1.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          }

          // composite
          y -= 150;
          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }
        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }
        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }
        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }
        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }
        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }
        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }
          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }
        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }
        changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }
        onLoad() {}
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "45643QK1BFO7ZWuZCCht1Th", "loadResourcesDir", undefined);
      async function loadResourcesDir(path, type) {
        return new Promise((resolve, reject) => {
          resources.loadDir(path, type, (err, data) => {
            if (err) {
              return reject(err);
            }
            return resolve(data);
          });
        });
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f8436JgjQdLor/F592tTfO1", "bound", undefined);
      function bound(_target, propertyKey, descriptor) {
        if (!descriptor || typeof descriptor.value !== 'function') {
          throw new TypeError(`Only methods can be decorated with @bound. <${propertyKey}> is not a method!`);
        }
        return {
          configurable: true,
          get() {
            const binded = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
              value: binded,
              configurable: true,
              writable: true
            });
            return binded;
          }
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "27c8dcOx3hOXqna/Q1FXIe5", "prepareMaterial", undefined);
      function prepareMaterial(material) {
        const warn = console.warn;
        try {
          console.warn = () => {};
          material.setProperty('u_globalDirection', sys.isNative ? -1.0 : 1.0);
        } catch (err) {
          warn(err);
        } finally {
          console.warn = warn;
        }
        return material;
      }
      cclegacy._RF.pop();
      var _class$1;
      cclegacy._RF.push({}, "bbf41sacyFEj7TPFXnUxbFE", "assets", undefined);
      const LOAD_METHOD_REGEX = /^load/;
      let Assets = (_class$1 = class Assets {
        constructor() {
          this.wait = void 0;
          this.materials = new Map();
          this.sprites = new Map();
          this.prefabs = new Map();
          this.fonts = new Map();
          this.wait = this.waitAssets().catch(err => console.error(err));
        }
        get(map, names) {
          const get = name => {
            const resource = map.get(name);
            if (!resource) {
              throw new Error(`Cannot find resource asset with name ${name}`);
            }
            return resource;
          };
          if (Array.isArray(names)) {
            return names.map(name => get(name));
          }
          return get(names);
        }
        getMaterials(names) {
          return this.get(this.materials, names);
        }
        getSprites(names) {
          return this.get(this.sprites, names);
        }
        getPrefabs(names) {
          return this.get(this.prefabs, names);
        }
        getFonts(names) {
          return this.get(this.fonts, names);
        }
        async waitAssets() {
          const promises = [];
          const methods = [...Object.getOwnPropertyNames(this), ...Object.getOwnPropertyNames(Object.getPrototypeOf(this))];
          methods.forEach(method => {
            if (LOAD_METHOD_REGEX.test(method)) {
              const func = this[method];
              if (func) {
                promises.push(func());
              }
            }
          });
          await Promise.all(promises);
        }
        async loadMaterials() {
          const materials = (await loadResourcesDir('materials', Material)).map(prepareMaterial);
          for (const material of materials) {
            this.materials.set(material.name, material);
          }
        }
        async loadSprites() {
          const sprites = await loadResourcesDir('ui', SpriteFrame);
          for (const sprite of sprites) {
            this.sprites.set(sprite.name, sprite);
          }
        }
        async loadPrefabs() {
          const prefabs = await loadResourcesDir('prefabs', Prefab);
          for (const prefab of prefabs) {
            this.prefabs.set(prefab.data.name, prefab);
          }
        }
        async loadFonts() {
          const fonts = await loadResourcesDir('fonts', Font);
          for (const font of fonts) {
            this.fonts.set(font.name, font);
          }
        }
      }, (_applyDecoratedDescriptor(_class$1.prototype, "loadMaterials", [bound], Object.getOwnPropertyDescriptor(_class$1.prototype, "loadMaterials"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "loadSprites", [bound], Object.getOwnPropertyDescriptor(_class$1.prototype, "loadSprites"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "loadPrefabs", [bound], Object.getOwnPropertyDescriptor(_class$1.prototype, "loadPrefabs"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "loadFonts", [bound], Object.getOwnPropertyDescriptor(_class$1.prototype, "loadFonts"), _class$1.prototype)), _class$1);
      const assets = new Assets();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "418360ZSfNHWLT9dKAdyyNV", "index", undefined);
      const {
        observable,
        computed,
        action,
        runInAction,
        reaction,
        makeObservable,
        autorun
      } = window.mobx;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ae412NL8T9IL7DlaWHxK8tw", "Observer", undefined);
      const UNMOUNT_METHOD_REGEX = /^dispose/;
      class Observer extends Component {
        constructor() {
          super(...arguments);
          this.disposeRender = null;
        }
        __preload() {
          makeObservable(this);
          if (this.render) {
            this.disposeRender = autorun(this.render.bind(this));
          }
        }
        onDestroy() {
          const methods = [...Object.getOwnPropertyNames(this), ...Object.getOwnPropertyNames(Object.getPrototypeOf(this))];
          methods.forEach(method => {
            if (UNMOUNT_METHOD_REGEX.test(method)) {
              const func = this[method];
              if (func) {
                func();
              }
            }
          });
        }
      }
      cclegacy._RF.pop();
      var _class$2, _descriptor$1;
      cclegacy._RF.push({}, "3b67212M9tOb7cqRO99qIW+", "Biome", undefined);
      let Biome = (_class$2 = class Biome extends Observer {
        constructor() {
          super(...arguments);
          this.renderNode = null;
          _initializerDefineProperty(this, "data", _descriptor$1, this);
          this.tile = void 0;
          this.onTap = void 0;
        }
        initialize(_ref) {
          let {
            data,
            tile,
            onTap
          } = _ref;
          this.data = data;
          this.tile = tile;
          this.onTap = onTap;
        }
        render() {
          if (this.renderNode) {
            this.renderNode.destroy();
            this.renderNode = null;
          }
          this.renderNode = this.createRenderNode();
        }
      }, _descriptor$1 = _applyDecoratedDescriptor(_class$2.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class$2);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "64f35h4gaZPwIvDdQDX2zrM", "EBiome", undefined);
      let EBiomeObject = /*#__PURE__*/function (EBiomeObject) {
        EBiomeObject["Forest"] = "forest";
        EBiomeObject["ForestRocks"] = "forest-rocks";
        EBiomeObject["Mountain"] = "mountain";
        EBiomeObject["Rocks"] = "rocks";
        EBiomeObject["Hill"] = "hill";
        return EBiomeObject;
      }({});
      let EBiomeTile = /*#__PURE__*/function (EBiomeTile) {
        EBiomeTile["Clay"] = "clay";
        EBiomeTile["Sand"] = "sand";
        EBiomeTile["Sea"] = "sea";
        EBiomeTile["River"] = "river";
        EBiomeTile["Lake"] = "lake";
        return EBiomeTile;
      }({});
      const BIOME_OBJECT_KEYS = Object.values(EBiomeObject);
      const BIOME_TILE_KEYS = Object.values(EBiomeTile);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6b472+n1UBMhJyOdXD6/ZWW", "EBiomeSize", undefined);
      let EBiomeSize = /*#__PURE__*/function (EBiomeSize) {
        EBiomeSize["Tiny"] = "tiny";
        EBiomeSize["Small"] = "small";
        EBiomeSize["Medium"] = "medium";
        EBiomeSize["Large"] = "large";
        return EBiomeSize;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "365265gf0dO3om/gG6+8oW2", "biomeObjectsPrefabs", undefined);
      const biomeObjectPrefabs = {
        [EBiomeObject.Mountain]: () => 'mountain',
        [EBiomeObject.Forest]: () => 'forest',
        [EBiomeObject.ForestRocks]: _ref => {
          let {
            size
          } = _ref;
          return size === EBiomeSize.Tiny ? 'forest_rocks_tiny' : 'forest_rocks_small';
        },
        [EBiomeObject.Rocks]: _ref2 => {
          let {
            data
          } = _ref2;
          return data?.small ? 'rocks_small' : 'rocks';
        },
        [EBiomeObject.Hill]: () => 'hill'
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8b0a3wQ5wNNjqGxjmtjnoMg", "EEventName", undefined);
      let EEventName = /*#__PURE__*/function (EEventName) {
        EEventName["Tap"] = "tap";
        return EEventName;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fb45fZq6ENCaKDPG7BT5UTf", "getAllComponents", undefined);
      function getAllComponents(node, Comp) {
        return [...node.getComponents(Comp), ...node.getComponentsInChildren(Comp)];
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2bf30FLP3BFoo8nUUsu4BwV", "addMeshCollider", undefined);
      function addMeshCollider(node, options) {
        const meshes = getAllComponents(node, MeshRenderer);
        const colliders = [];
        for (const mesh of meshes) {
          const collider = mesh.node.addComponent(MeshCollider);
          if (mesh) {
            collider.mesh = mesh.mesh;
          }
          collider.isTrigger = Boolean(options.isTrigger);
          colliders.push(collider);
        }
        return colliders;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e75f2p2j6xOJ6yRWmcc/747", "createPrefabNode", undefined);
      function createPrefabNode(prefab, _temp) {
        let {
          parent,
          materials,
          position,
          scale,
          rotation,
          castShadows,
          receiveShadows,
          onTap
        } = _temp === void 0 ? {} : _temp;
        const node = instantiate(prefab);
        const meshes = node.getComponentsInChildren(MeshRenderer);
        if (materials?.length) {
          materials.forEach((material, index) => {
            meshes.forEach(mesh => mesh.setSharedMaterial(material, index));
          });
        }
        if (position) {
          node.setPosition(position);
        }
        if (scale) {
          node.setScale(scale);
        }
        if (rotation) {
          node.setRotationFromEuler(rotation);
        }
        if (meshes.length) {
          meshes.forEach(mesh => {
            mesh.shadowCastingMode = castShadows ? 1 : 0;
            mesh.receiveShadow = receiveShadows ? 1 : 0;
          });
        }
        if (onTap) {
          const colliders = addMeshCollider(node, {
            isTrigger: true
          });
          colliders.forEach(collider => {
            collider.node.on(EEventName.Tap, onTap);
          });
        }
        if (parent) {
          parent.addChild(node);
        }
        return node;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c58da6R6rFFaoXfd8mCEgxB", "cocos", undefined);
      const {
        ccclass: ccclass$1,
        property: property$1
      } = _decorator;
      cclegacy._RF.pop();
      var _dec$1, _class$3, _class2$1;
      cclegacy._RF.push({}, "825018d0IxJ/KuzT1bUInto", "BiomeObject", undefined);
      let BiomeObject = (_dec$1 = ccclass$1('BiomeObject'), _dec$1(_class$3 = (_class2$1 = class BiomeObject extends Biome {
        get prefab() {
          return biomeObjectPrefabs[this.data.key]?.(this.data);
        }
        createRenderNode() {
          if (!this.prefab) {
            return null;
          }
          const prefab = assets.getPrefabs(this.prefab);
          return createPrefabNode(prefab, {
            parent: this.node,
            rotation: this.data.rotate ? new Vec3(0, this.data.rotate, 0) : undefined,
            scale: this.data.scale ? new Vec3(1, this.data.scale, 1) : undefined,
            castShadows: true,
            receiveShadows: true,
            onTap: this.onTap
          });
        }
        onLoad() {
          this.node.setPosition(new Vec3(0, this.tile.groundY, 0));
        }
      }, _applyDecoratedDescriptor(_class2$1.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2$1.prototype, "prefab"), _class2$1.prototype), _class2$1)) || _class$3);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6e13cmrjrlHmpINJM/Xz9wg", "consts", undefined);
      const MAX_BIOME_TILE_HEIGHT = 2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cc396ZoHNFKdZ2jUL1zieeD", "consts", undefined);
      const TILE_HEIGHT_MULTIPLIER = 0.2;
      const TILE_SEA_LEVEL = 5;
      const TILE_HEIGHT_LIMITS = [0, 10];
      const TILE_BASE_HEIGHT = 1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c6138zCp8FOcKdqd1rs7OYR", "cached", undefined);
      function cached(_target, name, descriptor) {
        const getter = descriptor.get;
        if (!getter) throw new TypeError('Getter property descriptor expected');
        return {
          configurable: true,
          get() {
            const value = getter.call(this);
            Object.defineProperty(this, name, {
              configurable: descriptor.configurable,
              enumerable: descriptor.enumerable,
              writable: false,
              value
            });
            return value;
          }
        };
      }
      cclegacy._RF.pop();
      var _dec$2, _class$4, _class2$2;
      cclegacy._RF.push({}, "1ec2d3dkdVE06BWlaUUd6aB", "BiomeTile", undefined);
      const MIN_DIRT_HEIGHT = 3;
      let BiomeTile = (_dec$2 = ccclass$1('BiomeTile'), _dec$2(_class$4 = (_class2$2 = class BiomeTile extends Biome {
        get prefab() {
          return 'hex';
        }
        get material() {
          if (this.data?.key === EBiomeTile.Clay) {
            return 'clay';
          }
          if (this.data?.key === EBiomeTile.Sand) {
            return 'sand';
          }
          return 'grass';
        }
        get biomeY() {
          return Math.min(this.tile.data.height, MAX_BIOME_TILE_HEIGHT) * TILE_HEIGHT_MULTIPLIER;
        }
        get dirtY() {
          return this.tile.groundY - this.rockY - this.biomeY;
        }
        get rockY() {
          if (this.tile.data.height - MAX_BIOME_TILE_HEIGHT < MIN_DIRT_HEIGHT) {
            return 0;
          }
          return this.tile.data.baseHeight * TILE_HEIGHT_MULTIPLIER;
        }
        get receiveShadows() {
          return true;
        }
        get castShadows() {
          return true;
        }
        createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          const prefab = assets.getPrefabs(this.prefab);
          const material = assets.getMaterials(this.material);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            scale: new Vec3(1, this.biomeY, 1),
            receiveShadows: this.receiveShadows,
            castShadows: this.castShadows,
            onTap: this.onTap
          });
        }
        onLoad() {
          const [hexBase, hex] = assets.getPrefabs(['hex_base', 'hex']);
          const [rock, dirt] = assets.getMaterials(['rock', 'dirt']);

          // ROCK
          createPrefabNode(hexBase, {
            parent: this.node,
            materials: [rock],
            position: new Vec3(0, -1, 0),
            scale: new Vec3(1, 1 + this.rockY, 1)
          });
          createPrefabNode(this.biomeY ? hexBase : hex, {
            parent: this.node,
            materials: [dirt],
            position: new Vec3(0, this.rockY, 0),
            scale: new Vec3(1, this.dirtY, 1),
            receiveShadows: this.receiveShadows,
            castShadows: this.castShadows
          });
        }
      }, (_applyDecoratedDescriptor(_class2$2.prototype, "prefab", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "prefab"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "material"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "biomeY", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "biomeY"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "dirtY", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "dirtY"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "rockY", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "rockY"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "receiveShadows"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2$2.prototype, "castShadows"), _class2$2.prototype)), _class2$2)) || _class$4);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f9125pwMYRC77EjMgq7Vzms", "waterTiles", undefined);
      const waterTiles = [EBiomeTile.Lake, EBiomeTile.Sea];
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e97e3d6UHpKhI4AV89XN5LD", "filterNullable", undefined);
      function filterNullable(arr) {
        return arr.filter(item => Boolean(item) || item === 0);
      }
      cclegacy._RF.pop();
      var _class$5;
      cclegacy._RF.push({}, "4a2a90ANDdC97iQC1asX1AG", "Hexagon", undefined);
      let Hexagon = (_class$5 = class Hexagon {
        constructor(self, coords, _ref) {
          let {
            hexHeight,
            hexRadius
          } = _ref;
          this.self = void 0;
          this.coords = void 0;
          this.hexHeight = void 0;
          this.hexRadius = void 0;
          this.self = self;
          this.coords = coords;
          this.hexHeight = hexHeight;
          this.hexRadius = hexRadius;
        }
        get neighbors() {
          return [this.right, this.topRight, this.topLeft, this.left, this.bottomLeft, this.bottomRight];
        }
        get positionX() {
          const {
            x
          } = this.coords;
          const absX = Math.abs(x);
          return Math.sign(x) * this.hexRadius * (absX + (Math.floor(absX - 1) + 1) / 2);
        }
        get positionZ() {
          const {
            y,
            z
          } = this.coords;
          return (y + z) * this.hexHeight;
        }
        get key() {
          return this.coords.toString();
        }
        getNeighbor(coords) {
          return this.neighbors.find(neighbor => Vec3.equals(neighbor, coords));
        }
        getOrderedNeigbors(from) {
          const fromIndex = from ? this.neighbors.findIndex(neighbor => Vec3.equals(neighbor, from)) : -1;
          if (fromIndex < 0) {
            return this.neighbors.slice();
          }
          const start = this.neighbors.slice(fromIndex);
          const end = this.neighbors.slice(0, fromIndex);
          return [...start, ...end];
        }
      }, (_applyDecoratedDescriptor(_class$5.prototype, "neighbors", [cached], Object.getOwnPropertyDescriptor(_class$5.prototype, "neighbors"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "positionX", [cached], Object.getOwnPropertyDescriptor(_class$5.prototype, "positionX"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "positionZ", [cached], Object.getOwnPropertyDescriptor(_class$5.prototype, "positionZ"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "key", [cached], Object.getOwnPropertyDescriptor(_class$5.prototype, "key"), _class$5.prototype)), _class$5);
      cclegacy._RF.pop();
      var _class$6;
      cclegacy._RF.push({}, "5b8c48dPQFKJJQqjNKNZfbv", "HexagonTile", undefined);
      let HexagonTile = (_class$6 = class HexagonTile extends Hexagon {
        get right() {
          return this.coords.clone().add3f(1, 1, 0);
        }
        get topRight() {
          return this.coords.clone().add3f(0, 1, 1);
        }
        get topLeft() {
          return this.coords.clone().add3f(-1, 0, 1);
        }
        get left() {
          return this.coords.clone().add3f(-1, -1, 0);
        }
        get bottomLeft() {
          return this.coords.clone().add3f(0, -1, -1);
        }
        get bottomRight() {
          return this.coords.clone().add3f(1, 0, -1);
        }
      }, (_applyDecoratedDescriptor(_class$6.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "right"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "topRight"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "topLeft"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "left"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "bottomLeft"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "bottomRight"), _class$6.prototype)), _class$6);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "90f30yGi89GeIpUMRAlKT09", "toVec3", undefined);
      function toVec3(vec) {
        return new Vec3(vec.x, vec.y, vec.z);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b688bsV6xtKPp2CtA7uFHE+", "hexRadius", undefined);
      function hexRadius(h) {
        return 2 * h / Math.sqrt(3);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c107f9SXpFI6qtMIQrv5Ak4", "consts", undefined);
      const HEX_HEIGHT = 1;
      const HEX_RADIUS = hexRadius(HEX_HEIGHT);
      const HEX_OPTIONS = {
        hexHeight: HEX_HEIGHT,
        hexRadius: HEX_RADIUS
      };
      cclegacy._RF.pop();
      var _dec$3, _class$7;
      cclegacy._RF.push({}, "f185dz1EK5LWIq3+5gcGlai", "AbstractState", undefined);
      let AbstractState = (_dec$3 = action.bound, (_class$7 = class AbstractState {
        constructor(state) {
          this.state = void 0;
          this.state = state;
        }
        initialize(props) {
          Object.assign(this, props);
          makeObservable(this);
          return this;
        }
        destroy() {
          // no-op
        }
      }, _applyDecoratedDescriptor(_class$7.prototype, "initialize", [_dec$3], Object.getOwnPropertyDescriptor(_class$7.prototype, "initialize"), _class$7.prototype), _class$7));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c2824H954hCspLqX6Yl7mQy", "i18n", undefined);
      function i18n(key) {
        return key;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b406a2+7PdE4qg37dd5HRlQ", "consts", undefined);
      const START_YEAR = 1554;
      const START_MONTH = 2;
      const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const YEAR_LENGTH = MONTHS.length;
      cclegacy._RF.pop();
      var _class$8, _descriptor$2;
      cclegacy._RF.push({}, "e2755MHcyJFeoI+ARdb1udd", "TurnState", undefined);
      let TurnState = (_class$8 = class TurnState extends AbstractState {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "turn", _descriptor$2, this);
        }
        get month() {
          return (START_MONTH + this.turn) % YEAR_LENGTH;
        }
        get year() {
          return START_YEAR + Math.floor((START_MONTH + this.turn) / YEAR_LENGTH);
        }
        get date() {
          return `${i18n(MONTHS[this.month])} ${this.year}`;
        }
      }, (_descriptor$2 = _applyDecoratedDescriptor(_class$8.prototype, "turn", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class$8.prototype, "month", [computed], Object.getOwnPropertyDescriptor(_class$8.prototype, "month"), _class$8.prototype), _applyDecoratedDescriptor(_class$8.prototype, "year", [computed], Object.getOwnPropertyDescriptor(_class$8.prototype, "year"), _class$8.prototype), _applyDecoratedDescriptor(_class$8.prototype, "date", [computed], Object.getOwnPropertyDescriptor(_class$8.prototype, "date"), _class$8.prototype)), _class$8);
      cclegacy._RF.pop();
      var _dec$4, _dec2$1, _class$9, _descriptor$3, _descriptor2$1, _descriptor3$1, _descriptor4;
      cclegacy._RF.push({}, "0f694fs2cpEcq8o5R+6yN7R", "HexagonMap", undefined);
      let HexagonMap = (_dec$4 = action.bound, _dec2$1 = action.bound, (_class$9 = class HexagonMap {
        constructor(Hex, options) {
          this.map = observable.map();
          _initializerDefineProperty(this, "maxX", _descriptor$3, this);
          _initializerDefineProperty(this, "maxZ", _descriptor2$1, this);
          _initializerDefineProperty(this, "minX", _descriptor3$1, this);
          _initializerDefineProperty(this, "minZ", _descriptor4, this);
          this.options = void 0;
          this.Hex = void 0;
          this.options = options;
          this.Hex = Hex;
        }
        get values() {
          const result = [];
          for (const yMap of this.map.values()) {
            for (const zMap of yMap.values()) {
              for (const val of zMap.values()) {
                result.push(val);
              }
            }
          }
          return result;
        }
        get(coords) {
          const {
            x,
            y,
            z
          } = coords;
          let yMap = this.map.get(x);
          if (!yMap) {
            this.map.set(x, yMap = observable.map());
          }
          let zMap = yMap.get(y);
          if (!zMap) {
            yMap.set(y, zMap = observable.map());
          }
          return zMap.get(z);
        }
        add(coords, item) {
          const hex = new this.Hex(item, coords, this.options);
          if (hex.positionX > this.maxX) {
            this.maxX = hex.positionX;
          } else if (hex.positionX < this.minX) {
            this.minX = hex.positionX;
          }
          if (hex.positionZ > this.maxZ) {
            this.maxZ = hex.positionZ;
          } else if (hex.positionZ < this.minZ) {
            this.minZ = hex.positionZ;
          }
          const {
            x,
            y,
            z
          } = hex.coords;
          let yMap = this.map.get(x);
          if (!yMap) {
            this.map.set(x, yMap = observable.map());
          }
          let zMap = yMap.get(y);
          if (!zMap) {
            yMap.set(y, zMap = observable.map());
          }
          const old = zMap.get(z);
          if (old) {
            old.destroy?.();
          }
          zMap.set(z, hex);
          return hex;
        }
      }, (_descriptor$3 = _applyDecoratedDescriptor(_class$9.prototype, "maxX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class$9.prototype, "maxZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class$9.prototype, "minX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class$9.prototype, "minZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class$9.prototype, "values", [computed], Object.getOwnPropertyDescriptor(_class$9.prototype, "values"), _class$9.prototype), _applyDecoratedDescriptor(_class$9.prototype, "get", [_dec$4], Object.getOwnPropertyDescriptor(_class$9.prototype, "get"), _class$9.prototype), _applyDecoratedDescriptor(_class$9.prototype, "add", [_dec2$1], Object.getOwnPropertyDescriptor(_class$9.prototype, "add"), _class$9.prototype)), _class$9));
      cclegacy._RF.pop();
      var _class$a;
      cclegacy._RF.push({}, "6f82dr+ONNFkKs/rJYfAp8v", "HexagonChunk", undefined);
      let HexagonChunk = (_class$a = class HexagonChunk extends Hexagon {
        get tiles() {
          const center = new HexagonTile(null, this.coords.clone(), {
            hexHeight: this.hexHeight,
            hexRadius: this.hexRadius
          });
          return [center.coords, ...center.neighbors];
        }
        get right() {
          return this.coords.clone().add3f(3, 2, -1);
        }
        get topRight() {
          return this.coords.clone().add3f(1, 3, 2);
        }
        get topLeft() {
          return this.coords.clone().add3f(-2, 1, 3);
        }
        get left() {
          return this.coords.clone().add3f(-3, -2, 1);
        }
        get bottomLeft() {
          return this.coords.clone().add3f(-1, -3, -2);
        }
        get bottomRight() {
          return this.coords.clone().add3f(2, -1, -3);
        }
      }, (_applyDecoratedDescriptor(_class$a.prototype, "tiles", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "tiles"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "right"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "topRight"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "topLeft"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "left"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "bottomLeft"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "bottomRight"), _class$a.prototype)), _class$a);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f988buKiNJE1qnCi1/vomud", "clamp", undefined);
      function clamp(value, _ref) {
        let [min, max] = _ref;
        return Math.max(min || -Infinity, Math.min(value, max || Infinity));
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "10036EoNa1Lwafrc7tlAhDY", "consts", undefined);
      const BUILD_PROGRESS_LIMITS = [0, 1];
      const BUILD_PROGRESS_MAX = BUILD_PROGRESS_LIMITS[1];
      const BUILD_PROGRESS_STAGES = ['building_stage_A', 'building_stage_B', 'building_stage_C'];
      const BUILDING_ROTATION_INIT = 30;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0eb53LI60pIrL0uwCfhZFgW", "EBuilding", undefined);
      let EBuilding = /*#__PURE__*/function (EBuilding) {
        EBuilding["Lumberjack"] = "lumberjack";
        EBuilding["Sawmill"] = "sawmill";
        EBuilding["Quarry"] = "quarry";
        EBuilding["Castle"] = "castle";
        return EBuilding;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6c0f1GYJUVFLZvz9HMolzGW", "EResource", undefined);
      let EResource = /*#__PURE__*/function (EResource) {
        EResource["Log"] = "log";
        EResource["Plank"] = "plank";
        EResource["Stone"] = "stone";
        return EResource;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0e001ue/E5FBJ68aUNL6Yck", "tileHasBiomeObjects", undefined);
      function tileHasBiomeObjects(tile, biomes) {
        const {
          data
        } = tile;
        return data.biomeObject && biomes.includes(data.biomeObject.key);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7008bxWIIlIP5ww0a2MYRel", "tileHasBiomeTiles", undefined);
      function tileHasBiomeTiles(tile, biomes) {
        const {
          data
        } = tile;
        return data.biomeTile && biomes.includes(data.biomeTile.key);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7ccd176oL1LrYej1Coco25P", "tileNotWater", undefined);
      function tileNotWater(tile) {
        return !tile.data.biomeTile || !tileHasBiomeTiles(tile, [EBiomeTile.River, EBiomeTile.Sea, EBiomeTile.Lake]);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "62332yzFVNH4aF/epqPWhLI", "tileWithoutObject", undefined);
      function tileWithoutObject(tile) {
        const {
          data
        } = tile;
        return !data.building && !data.biomeObject;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "89d03nht+FEUqB57hpirUd1", "hexColor", undefined);
      function hexColor(hex, opacity) {
        if (opacity === void 0) {
          opacity = 1;
        }
        if (opacity !== 1) {
          const alpha = Math.round(opacity * 255).toString(16);
          hex = hex + alpha;
        }
        return Color.fromHEX(new Color(), hex);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6b9cc8hS+BLmKM3KZ9XzOjo", "BuildingsDB", undefined);
      const BuildingsDB = {
        [EBuilding.Castle]: {
          title: 'Castle',
          prefab: 'building_castle'
        },
        [EBuilding.Lumberjack]: {
          title: 'Lumberjack',
          prefab: 'building_tent',
          buildOptions: {
            iconColor: hexColor('D5B089', 0.5),
            turns: 1,
            price: {
              [EResource.Log]: 1
            }
          },
          tileTest(tile) {
            return tileWithoutObject(tile) && tileNotWater(tile) && tile.neighborsTiles.some(neighbor => {
              return tileHasBiomeObjects(neighbor, [EBiomeObject.Forest]);
            });
          }
        },
        [EBuilding.Quarry]: {
          title: 'Quarry',
          prefab: 'building_scaffolding',
          buildOptions: {
            iconColor: hexColor('708695', 0.5),
            turns: 1,
            price: {
              [EResource.Log]: 1,
              [EResource.Plank]: 1
            }
          },
          tileTest(tile) {
            return tileWithoutObject(tile) && tileNotWater(tile) && tile.neighborsTiles.some(neighbor => {
              return tileHasBiomeObjects(neighbor, [EBiomeObject.Mountain, EBiomeObject.Rocks]);
            });
          }
        },
        [EBuilding.Sawmill]: {
          title: 'Sawmill',
          prefab: 'building_lumbermill',
          buildOptions: {
            iconColor: hexColor('D5B089', 0.5),
            turns: 3,
            price: {
              [EResource.Log]: 2
            }
          },
          tileTest(tile) {
            return tileWithoutObject(tile) && tileNotWater(tile);
          }
        }
      };
      cclegacy._RF.pop();
      var _class$b;
      cclegacy._RF.push({}, "d3088ex/EpA9Kc8wVKG4vzk", "WorldState", undefined);
      let WorldState = (_class$b = class WorldState extends AbstractState {
        constructor() {
          super(...arguments);
          this.chunksMap = new HexagonMap(HexagonChunk, HEX_OPTIONS);
          this.tilesMap = new HexagonMap(HexagonTile, HEX_OPTIONS);
          this.disposeTurnListen = reaction(() => this.state.turnState.turn, action(() => {
            for (const building of this.buildQueue) {
              const buildingDb = BuildingsDB[building.key];
              const buildSpeed = BUILD_PROGRESS_MAX / (buildingDb.buildOptions ? buildingDb.buildOptions.turns : BUILD_PROGRESS_MAX);
              building.progress = clamp(building.progress + buildSpeed, BUILD_PROGRESS_LIMITS);
            }
          }));
        }
        get buildings() {
          return this.tilesMap.values.reduce((result, hex) => {
            const {
              building
            } = hex.self.data;
            if (building) {
              result.push(building);
            }
            return result;
          }, []);
        }
        get buildQueue() {
          return this.buildings.filter(_ref => {
            let {
              progress
            } = _ref;
            return progress < BUILD_PROGRESS_MAX;
          });
        }
        get buildedBuildings() {
          return this.buildings.filter(_ref2 => {
            let {
              progress
            } = _ref2;
            return progress >= BUILD_PROGRESS_MAX;
          });
        }
        get activeBuildings() {
          return this.buildedBuildings.filter(_ref3 => {
            let {
              isDisabled
            } = _ref3;
            return !isDisabled;
          });
        }
        get buildedCount() {
          return this.calculateBuildingsCount(this.buildedBuildings);
        }
        get buildQueueCount() {
          return this.calculateBuildingsCount(this.buildQueue);
        }
        calculateBuildingsCount(buildings) {
          return buildings.reduce((result, building) => {
            result[building.key] = (result[building.key] || 0) + 1;
            return result;
          }, {});
        }
        destroy() {
          this.disposeTurnListen();
        }
      }, (_applyDecoratedDescriptor(_class$b.prototype, "buildings", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "buildings"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "buildQueue", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "buildQueue"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "buildedBuildings", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "buildedBuildings"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "activeBuildings", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "activeBuildings"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "buildedCount", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "buildedCount"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "buildQueueCount", [computed], Object.getOwnPropertyDescriptor(_class$b.prototype, "buildQueueCount"), _class$b.prototype)), _class$b);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "05109Z3qOVPN7Vx0/iiR53n", "GameState", undefined);
      class GameState extends AbstractState {
        constructor() {
          super(...arguments);
          this.turnState = new TurnState(this).initialize({});
          this.worldState = new WorldState(this).initialize({});
        }
        destroy() {
          this.turnState.destroy();
          this.worldState.destroy();
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a2bb2gDJwtCQocFL1Q2wDn1", "state", undefined);
      const state = new GameState().initialize({});
      cclegacy._RF.pop();
      var _dec$5, _class$c, _class2$3;
      cclegacy._RF.push({}, "13851i6cZtNV7AYKIsOYSxD", "BiomeTileRiver", undefined);
      const RIVER_PREFABS = {
        '000001': ['hex_river_13', 60],
        '000010': ['hex_river_13', 120],
        '000100': ['hex_river_13', 180],
        '001000': ['hex_river_13', -120],
        '010000': ['hex_river_13', -60],
        '100000': ['hex_river_13', 0],
        '100001': ['hex_river_3', 60],
        '100010': ['hex_river_2', 120],
        '100011': ['hex_river_7', 60],
        '100101': ['hex_river_5', 180],
        '100110': ['hex_river_6', 0],
        '100111': ['hex_river_10', 0],
        '101000': ['hex_river_2', 0],
        '101001': ['hex_river_6', -120],
        '101010': ['hex_river_4', 0],
        '101011': ['hex_river_8', 60],
        '101100': ['hex_river_5', 0],
        '101101': ['hex_river_9', 60],
        '101110': ['hex_river_8', 180],
        '101111': ['hex_river_11', 120],
        '110000': ['hex_river_3', 0],
        '110001': ['hex_river_7', 0],
        '110010': ['hex_river_5', 120],
        '110011': ['hex_river_10', -60],
        '110100': ['hex_river_6', -180],
        '110101': ['hex_river_8', 0],
        '110110': ['hex_river_9', 0],
        '110111': ['hex_river_11', 60],
        '111000': ['hex_river_7', -60],
        '111001': ['hex_river_10', -120],
        '111010': ['hex_river_8', -60],
        '111011': ['hex_river_11', 0],
        '111100': ['hex_river_10', 180],
        '111101': ['hex_river_11', -60],
        '111110': ['hex_river_11', -120],
        '111111': ['hex_river_12', 0]
      };
      let BiomeTileRiver = (_dec$5 = ccclass$1('BiomeTileRiver'), _dec$5(_class$c = (_class2$3 = class BiomeTileRiver extends BiomeTile {
        get defaultFrom() {
          return this.tile.hex.topLeft;
        }
        get rotation() {
          const rotation = RIVER_PREFABS[this.prefabKey]?.[1] || 0;
          if (!this.from) {
            return rotation;
          }
          const defaultFromNeighbor = new HexagonTile(null, this.defaultFrom, HEX_OPTIONS);
          const fromNeighbor = new HexagonTile(null, toVec3(this.from), HEX_OPTIONS);
          const center = new Vec2(this.tile.hex.positionX, this.tile.hex.positionZ);
          const defaultFrom = new Vec2(defaultFromNeighbor.positionX, defaultFromNeighbor.positionZ).subtract(center);
          const from = new Vec2(fromNeighbor.positionX, fromNeighbor.positionZ).subtract(center);
          const angle = from.signAngle(defaultFrom);
          return rotation + Math.round(toDegree(angle));
        }
        get from() {
          const from = this.data?.data?.from;
          if (!from) {
            return this.to[0] || null;
          }
          return from || null;
        }
        get to() {
          return this.data?.data?.to || [];
        }
        get directions() {
          const directions = filterNullable([this.from, ...this.to]);
          const {
            coords
          } = this.tile.hex;
          const sortedNeighbors = this.tile.hex.getOrderedNeigbors(this.from);
          return sortedNeighbors.map(neighbor => {
            const {
              tilesMap
            } = state.worldState;
            const tile = tilesMap.get(neighbor);
            const isDirection = directions.some(river => Vec3.equals(river, neighbor));
            if (tile) {
              const heightDiff = Math.abs(tile.self.data.height - this.tile.data.height);
              if (heightDiff > MAX_BIOME_TILE_HEIGHT) {
                return null;
              }
              const {
                biomeTile,
                biomeObject
              } = tile.self.data;
              const biomeTileKey = biomeTile?.key;
              const biomeObjectKey = biomeObject?.key;
              const isRiver = biomeTileKey === EBiomeTile.River;
              const isWater = biomeTileKey && waterTiles.includes(biomeTileKey);
              if (isDirection) {
                if (isRiver || isWater || heightDiff || biomeObjectKey === EBiomeObject.Mountain) {
                  return tile.coords;
                }
                return null;
              }
              if (isRiver) {
                const {
                  biomeTile: currentBiomeTile
                } = this.tile.data;
                const isOtherRiver = biomeTile && currentBiomeTile && biomeTile.id !== currentBiomeTile.id && (!currentBiomeTile.data?.fromId || currentBiomeTile.data?.fromId !== biomeTile.id) && (!biomeTile.data?.fromId || biomeTile.data?.fromId !== currentBiomeTile.id);
                if (isOtherRiver) {
                  return tile.coords;
                }
                const isToDirection = biomeTile?.data?.to?.some(toCoords => Vec3.equals(toCoords, coords));
                if (isToDirection) {
                  return tile.coords;
                }
                return null;
              }
              if (isWater) {
                if (!this.to.length) {
                  return tile.coords;
                }
                return null;
              }
              return null;
            }
            if (isDirection) {
              return neighbor;
            }
            return null;
          });
        }
        get directionsTiles() {
          const {
            tilesMap
          } = state.worldState;
          return filterNullable(this.directions.map(coords => coords ? tilesMap.get(coords) : coords));
        }
        get prefabKey() {
          return this.directions.reduce((result, item) => result + (item ? '1' : '0'), '');
        }
        get prefab() {
          const [prefab] = RIVER_PREFABS[this.prefabKey] || [];
          if (prefab) {
            return prefab;
          }
          if (this.directionsTiles.some(tile => tile.self.data.height < this.tile.data.height)) {
            return 'hex_river_1';
          }
          return 'hex_river_1_curvy';
        }
        get material() {
          return 'water';
        }
        get groundMaterial() {
          const {
            tilesMap
          } = state.worldState;
          const neighbors = filterNullable(this.tile.hex.neighbors.map(neigbor => tilesMap.get(neigbor)));
          if (neighbors.some(tile => tile.self.data.biomeTile?.key === EBiomeTile.Sand)) {
            return 'sand';
          }
          return 'grass';
        }
        get receiveShadows() {
          return false;
        }
        get castShadows() {
          return false;
        }
        createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          const riverPrefab = assets.getPrefabs(this.prefab);
          const [waterMaterial, riverMaterial] = assets.getMaterials([this.material, this.groundMaterial]);
          return createPrefabNode(riverPrefab, {
            parent: this.node,
            materials: [riverMaterial, waterMaterial],
            scale: new Vec3(1, this.biomeY, 1),
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            rotation: new Vec3(0, this.rotation, 0),
            receiveShadows: true,
            onTap: this.onTap
          });
        }
      }, (_applyDecoratedDescriptor(_class2$3.prototype, "defaultFrom", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "defaultFrom"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "rotation", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "rotation"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "from", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "from"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "to", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "to"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "directions", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "directions"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "directionsTiles", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "directionsTiles"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "prefabKey", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "prefabKey"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "prefab"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "material"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "groundMaterial", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "groundMaterial"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "receiveShadows"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "castShadows"), _class2$3.prototype)), _class2$3)) || _class$c);
      cclegacy._RF.pop();
      var _dec$6, _class$d, _class2$4;
      cclegacy._RF.push({}, "4c4a0SIrDhPmaz5dL9TJkii", "BiomeTileWater", undefined);
      let BiomeTileWater = (_dec$6 = ccclass$1('BiomeTileWater'), _dec$6(_class$d = (_class2$4 = class BiomeTileWater extends BiomeTile {
        get prefab() {
          return 'hex_water';
        }
        get material() {
          return 'water';
        }
        get receiveShadows() {
          return false;
        }
        get castShadows() {
          return false;
        }
        createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          const prefab = assets.getPrefabs(this.prefab);
          const material = assets.getMaterials(this.material);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            receiveShadows: true,
            onTap: this.onTap
          });
        }
      }, (_applyDecoratedDescriptor(_class2$4.prototype, "prefab", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "prefab"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "material"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "receiveShadows"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "castShadows"), _class2$4.prototype)), _class2$4)) || _class$d);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8b1892PXaZNRoyywBFyf/4K", "biomeSizeMaps", undefined);
      const biomeSizeMaps = {
        [EBiomeObject.Forest]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 3,
          [EBiomeSize.Medium]: 5,
          [EBiomeSize.Large]: 10
        },
        [EBiomeObject.Mountain]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 2,
          [EBiomeSize.Medium]: 3,
          [EBiomeSize.Large]: 5
        },
        [EBiomeTile.Clay]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 3,
          [EBiomeSize.Medium]: 5,
          [EBiomeSize.Large]: 7
        },
        [EBiomeObject.ForestRocks]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 1
        },
        [EBiomeObject.Rocks]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 2,
          [EBiomeSize.Medium]: 3,
          [EBiomeSize.Large]: 4
        },
        [EBiomeTile.Sand]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 3,
          [EBiomeSize.Medium]: 7,
          [EBiomeSize.Large]: 15
        },
        [EBiomeTile.Lake]: {
          [EBiomeSize.Tiny]: 1,
          [EBiomeSize.Small]: 4,
          [EBiomeSize.Medium]: 5,
          [EBiomeSize.Large]: 7
        },
        [EBiomeTile.Sea]: {
          [EBiomeSize.Large]: 200
        },
        [EBiomeTile.River]: {
          [EBiomeSize.Tiny]: 5,
          [EBiomeSize.Small]: 10,
          [EBiomeSize.Medium]: 20,
          [EBiomeSize.Large]: 30
        }
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a4588hOtpVHjq+Qm4VYLiWS", "biomeTiles", undefined);
      const biomeTiles = {
        [EBiomeTile.Lake]: BiomeTileWater,
        [EBiomeTile.Sea]: BiomeTileWater,
        [EBiomeTile.River]: BiomeTileRiver
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c5c8chmF8hJwYh7R+HwmI9m", "getBiomeActualSize", undefined);
      function getBiomeActualSize(coords, biomeId, biomeKey, neighbors) {
        if (neighbors === void 0) {
          neighbors = [];
        }
        let size = 0;
        let bordersSize = 0;
        const isObject = BIOME_OBJECT_KEYS.includes(biomeKey);
        const visited = new Map();
        const calculate = tileCoords => {
          const key = toVec3(tileCoords).toString();
          if (visited.has(key)) {
            return;
          }
          visited.set(key, true);
          const {
            tilesMap
          } = state.worldState;
          let tile = tilesMap.get(tileCoords);
          let tileData = tile?.self?.data;
          if (!tileData) {
            tileData = neighbors.find(nearTile => Vec3.equals(nearTile.coords, tileCoords));
            if (tileData) {
              tile = new HexagonTile(null, toVec3(tileCoords), HEX_OPTIONS);
            }
          }
          if (!tile || !tileData) {
            bordersSize++;
            return;
          }
          const biome = isObject ? tileData.biomeObject : tileData.biomeTile;
          if (biome?.key === biomeKey && biome.id === biomeId) {
            size++;
            tile.neighbors.forEach(nearCoords => {
              calculate(nearCoords);
            });
          }
        };
        calculate(coords);
        neighbors.forEach(tile => calculate(tile.coords));
        return {
          size,
          bordersSize
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0495cH9hMVAbaAFfMG2aSb1", "IBiomeData", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b1cf90uVo1J0pRS4jT/0bHH", "TBiomeSizeMap", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "49987ASMhxHGZnKzrX53ol6", "setNodeLayer", undefined);
      function setNodeLayer(node, layer, _temp) {
        let {
          deep = true
        } = _temp === void 0 ? {} : _temp;
        node.layer = layer;
        if (deep) {
          node.children.forEach(node => setNodeLayer(node, layer, {
            deep
          }));
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b78d7MwyNxMSZbwrO+yQgqH", "Semaphore", undefined);
      class Semaphore {
        constructor(maxConcurrency) {
          if (maxConcurrency === void 0) {
            maxConcurrency = 1;
          }
          this.maxConcurrency = void 0;
          this.currentConcurrency = 0;
          this.queue = [];
          this.maxConcurrency = maxConcurrency;
        }
        async acquire() {
          if (this.currentConcurrency < this.maxConcurrency) {
            this.currentConcurrency++;
            return;
          }
          return new Promise(resolve => {
            this.queue.push(resolve);
          });
        }
        release() {
          this.currentConcurrency--;
          if (this.queue.length > 0) {
            const resolve = this.queue.shift();
            this.currentConcurrency++;
            resolve?.();
          }
        }
        async execute(task) {
          await this.acquire();
          try {
            return await task();
          } finally {
            this.release();
          }
        }
      }
      cclegacy._RF.pop();
      var _dec$7, _dec2$2, _dec3$1, _class$e, _class2$5, _descriptor$4, _descriptor2$2, _class3;
      cclegacy._RF.push({}, "6eda4E3ZZVDFIsX8XKfaZbz", "Photobooth", undefined);
      let Photobooth = (_dec$7 = ccclass$1('Photobooth'), _dec2$2 = property$1(Node), _dec3$1 = property$1(Camera), _dec$7(_class$e = (_class2$5 = (_class3 = class Photobooth extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "root", _descriptor$4, this);
          _initializerDefineProperty(this, "camera", _descriptor2$2, this);
          this.semaphore = new Semaphore();
          this.updateCallback = null;
        }
        get rt() {
          return this.camera.targetTexture;
        }
        async waitForUpdate() {
          await new Promise(resolve => {
            this.updateCallback = resolve;
          });
          this.updateCallback = null;
        }
        async capture(node, _temp) {
          let {
            scale
          } = _temp === void 0 ? {} : _temp;
          return this.semaphore.execute(async () => {
            this.root.destroyAllChildren();
            this.camera.node.parent?.setPosition(new Vec3(0, 0, 0));
            setNodeLayer(node, this.root.layer);
            if (scale) {
              node.setScale(new Vec3(scale, scale, scale));
            }
            this.root.addChild(node);
            const bounds = node.getComponentInChildren(MeshRenderer)?.model?.worldBounds;
            if (bounds) {
              this.camera.node.parent?.setPosition(new Vec3(0, bounds.center.y + bounds.halfExtents.y, 0));
            }
            await this.waitForUpdate();
            if (!this.rt) {
              return null;
            }
            const pbuffer = this.rt.readPixels();
            if (!pbuffer) {
              return null;
            }
            const texture = new Texture2D();
            texture.reset({
              width: this.rt.width,
              height: this.rt.height,
              format: this.rt.getPixelFormat()
            });
            texture.uploadData(pbuffer);
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            spriteFrame.flipUVY = !sys.isNative;
            return spriteFrame;
          });
        }
        update() {
          this.updateCallback?.();
        }
        static factory() {
          if (!this.instance || !this.instance.node.activeInHierarchy) {
            const scene = director.getScene();
            this.instance = scene?.getComponentInChildren(Photobooth) ?? null;
          }
          return this.instance;
        }
      }, _class3.instance = null, _class3), (_descriptor$4 = _applyDecoratedDescriptor(_class2$5.prototype, "root", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "camera", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$5.prototype, "rt", [cached], Object.getOwnPropertyDescriptor(_class2$5.prototype, "rt"), _class2$5.prototype)), _class2$5)) || _class$e);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "792fbO8DWJLRK83jwagdKKQ", "factorySprite", undefined);
      function factorySprite(node, spriteFrame, color) {
        if (color === void 0) {
          color = Color.WHITE;
        }
        const component = node.addComponent(Sprite);
        component.color = color.clone();
        component.trim = false;
        component.sizeMode = Sprite.SizeMode.CUSTOM;
        component.type = Sprite.Type.SIMPLE;
        if (spriteFrame) {
          component.spriteFrame = spriteFrame;
        }
        return component;
      }
      cclegacy._RF.pop();
      var _dec$8, _dec2$3, _dec3$2, _dec4$1, _dec5, _dec6, _dec7, _class$f, _class2$6, _descriptor$5, _descriptor2$3, _descriptor3$2, _descriptor4$1;
      cclegacy._RF.push({}, "9950cXlk+NHPbkzuDlrJGsu", "PhotoboothIcon", undefined);
      const SHOOT_CACHE = observable.map();
      let PhotoboothIcon = (_dec$8 = ccclass$1('PhotoboothIcon'), _dec2$3 = observable.ref, _dec3$2 = property$1({
        type: Prefab,
        visible() {
          return !this.shootNode;
        }
      }), _dec4$1 = observable.ref, _dec5 = property$1({
        type: Node,
        visible() {
          return !this.shootPrefab;
        }
      }), _dec6 = observable.ref, _dec7 = property$1(CCFloat), _dec$8(_class$f = (_class2$6 = class PhotoboothIcon extends Observer {
        constructor() {
          super(...arguments);
          this.spriteComponent = null;
          _initializerDefineProperty(this, "sprite", _descriptor$5, this);
          _initializerDefineProperty(this, "shootPrefab", _descriptor2$3, this);
          _initializerDefineProperty(this, "shootNode", _descriptor3$2, this);
          _initializerDefineProperty(this, "scale", _descriptor4$1, this);
          this.disposeSpriteShoot = autorun(async () => {
            if (this.cachedSprite) {
              return;
            }
            const node = this.createShootTarget();
            if (node) {
              const sprite = await Photobooth.factory()?.capture(node, {
                scale: this.scale
              });
              if (sprite) {
                runInAction(() => {
                  this.sprite = sprite;
                  if (this.cacheKey) {
                    SHOOT_CACHE.set(this.cacheKey, sprite);
                  }
                });
              }
            }
          });
        }
        createShootTarget() {
          if (this.shootNode) {
            return this.shootNode;
          }
          if (this.shootPrefab) {
            const prefabNode = createPrefabNode(this.shootPrefab);
            return prefabNode;
          }
          return null;
        }
        get cacheKey() {
          return this.shootNode?.uuid || this.shootPrefab?.uuid;
        }
        get cachedSprite() {
          return this.cacheKey && SHOOT_CACHE.get(this.cacheKey) || null;
        }
        onLoad() {
          this.spriteComponent = factorySprite(this.node, this.cachedSprite || this.sprite);
        }
        render() {
          const sprite = this.cachedSprite || this.sprite;
          if (this.spriteComponent && this.spriteComponent.spriteFrame !== sprite) {
            this.spriteComponent.spriteFrame = sprite;
          }
        }
      }, (_descriptor$5 = _applyDecoratedDescriptor(_class2$6.prototype, "sprite", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$6.prototype, "shootPrefab", [_dec3$2, _dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$6.prototype, "shootNode", [_dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$6.prototype, "scale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$6.prototype, "cacheKey", [computed], Object.getOwnPropertyDescriptor(_class2$6.prototype, "cacheKey"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "cachedSprite", [computed], Object.getOwnPropertyDescriptor(_class2$6.prototype, "cachedSprite"), _class2$6.prototype)), _class2$6)) || _class$f);
      cclegacy._RF.pop();
      var _dec$9, _class$g;
      cclegacy._RF.push({}, "4abf5Zqu0ZESJL43hAbNMT/", "UiLabel", undefined);
      let UiLabel = (_dec$9 = ccclass$1('UiLabel'), _dec$9(_class$g = class UiLabel extends Label {
        get string() {
          return i18n(this._string);
        }
        set string(value) {
          super.string = value;
        }
      }) || _class$g);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "97177ldb15AFrasqdQ5ZefK", "toCocosEnum", undefined);
      function toCocosEnum(enumValue) {
        const newEnum = {
          __enums__: []
        };
        Object.keys(enumValue).forEach(key => {
          const value = enumValue[key];
          newEnum[key] = value;
          newEnum.__enums__.push({
            name: key,
            value
          });
        });
        return newEnum;
      }
      cclegacy._RF.pop();
      var _dec$a, _dec2$4, _class$h, _class2$7, _descriptor$6, _class3$1;
      cclegacy._RF.push({}, "68ce6CcZNBEPJYIEWp7XG3A", "DiTemplate", undefined);
      let DiTemplate = (_dec$a = ccclass$1('DiTemplate'), _dec2$4 = property$1([Prefab]), _dec$a(_class$h = (_class2$7 = (_class3$1 = class DiTemplate extends Component {
        constructor(name) {
          super(name);
          _initializerDefineProperty(this, "templates", _descriptor$6, this);
          DiTemplate.instance = this;
        }
        getTemplate(template) {
          return this.templates.find(prefab => {
            return prefab.data.name === template;
          });
        }
        static get(template) {
          if (!DiTemplate.instance) {
            throw new Error('Di template is not initalized!');
          }
          const prefab = DiTemplate.instance.getTemplate(template);
          if (!prefab) {
            throw new Error(`Di template ${template} not found!`);
          }
          return prefab;
        }
      }, _class3$1.instance = null, _class3$1), _descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "templates", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _class2$7)) || _class$h);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "868ee6fiMdO+qwIWQTPAXVO", "factoryTemplateComponent", undefined);
      function factoryTemplateComponent(Comp, parent, props) {
        const template = DiTemplate.get(Comp.template);
        const node = instantiate(template);
        const component = node.getComponent(Comp);
        if (!component) {
          throw new Error(`Cannot find ${component} in template ${Comp.template}!`);
        }
        if (props) {
          component.initialize?.(props);
        }
        node.layer = parent.layer;
        parent.addChild(node);
        return component;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "db2c83c43tCBKG6DQziIpHG", "ResourcesDB", undefined);
      const ResourcesDB = {
        [EResource.Log]: {
          title: 'Logs',
          icon: 'Log_128'
        },
        [EResource.Plank]: {
          title: 'Planks',
          icon: 'Plank_128'
        },
        [EResource.Stone]: {
          title: 'Stones',
          icon: 'Stone_128'
        }
      };
      cclegacy._RF.pop();
      var _dec$b, _dec2$5, _dec3$3, _dec4$2, _dec5$1, _class$i, _class2$8, _descriptor$7, _descriptor2$4, _descriptor3$3, _descriptor4$2, _class3$2;
      cclegacy._RF.push({}, "34161JKJkJDyKwuJRTGfyFZ", "ResourceAmount", undefined);
      const NEGATIVE_COLOR = new Color(219, 84, 97);
      const POSITIVE_COLOR = new Color(0, 177, 134);
      const NEUTRAL_COLOR = new Color(224, 202, 60);
      let ResourceAmount = (_dec$b = ccclass$1('ResourceAmount'), _dec2$5 = property$1(Label), _dec3$3 = property$1(Sprite), _dec4$2 = property$1({
        type: toCocosEnum(EResource)
      }), _dec5$1 = action.bound, _dec$b(_class$i = (_class2$8 = (_class3$2 = class ResourceAmount extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "label", _descriptor$7, this);
          _initializerDefineProperty(this, "sprite", _descriptor2$4, this);
          _initializerDefineProperty(this, "resource", _descriptor3$3, this);
          _initializerDefineProperty(this, "count", _descriptor4$2, this);
        }
        get resourceKey() {
          if (this.resource) {
            return this.resource;
          }
          return null;
        }
        get spriteFrame() {
          if (!this.resourceKey) {
            return null;
          }
          const resourceDb = ResourcesDB[this.resourceKey];
          return assets.getSprites(resourceDb.icon);
        }
        get color() {
          if (this.count < 0) {
            return NEGATIVE_COLOR;
          }
          if (this.count > 0) {
            return POSITIVE_COLOR;
          }
          return NEUTRAL_COLOR;
        }
        get str() {
          if (this.count > 0) {
            return `+${this.count}`;
          }
          return `${this.count}`;
        }
        initialize(_ref) {
          let {
            resource,
            count
          } = _ref;
          this.resource = resource;
          this.count = count;
        }
        render() {
          this.sprite.spriteFrame = this.spriteFrame;
          this.label.string = this.str;
          this.label.color = this.color;
        }
      }, _class3$2.template = 'ResourceAmount', _class3$2), (_descriptor$7 = _applyDecoratedDescriptor(_class2$8.prototype, "label", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$8.prototype, "sprite", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$8.prototype, "resource", [_dec4$2, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$8.prototype, "count", [property$1, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2$8.prototype, "spriteFrame", [computed], Object.getOwnPropertyDescriptor(_class2$8.prototype, "spriteFrame"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "color", [computed], Object.getOwnPropertyDescriptor(_class2$8.prototype, "color"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "str", [computed], Object.getOwnPropertyDescriptor(_class2$8.prototype, "str"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "initialize", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$8.prototype, "initialize"), _class2$8.prototype)), _class2$8)) || _class$i);
      cclegacy._RF.pop();
      var _dec$c, _dec2$6, _dec3$4, _dec4$3, _dec5$2, _dec6$1, _dec7$1, _dec8, _dec9, _dec10, _dec11, _class$j, _class2$9, _descriptor$8, _descriptor2$5, _descriptor3$4, _descriptor4$3, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3$3;
      cclegacy._RF.push({}, "4d13doGp95Fmrtire4TB7la", "BuildCard", undefined);
      let BuildCard = (_dec$c = ccclass$1('BuildCard'), _dec2$6 = property$1({
        type: toCocosEnum(EBuilding)
      }), _dec3$4 = property$1(Sprite), _dec4$3 = property$1(PhotoboothIcon), _dec5$2 = property$1(UiLabel), _dec6$1 = property$1(Node), _dec7$1 = property$1(Label), _dec8 = property$1(Label), _dec9 = property$1(Label), _dec10 = property$1(Node), _dec11 = action.bound, _dec$c(_class$j = (_class2$9 = (_class3$3 = class BuildCard extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "building", _descriptor$8, this);
          _initializerDefineProperty(this, "coloredBg", _descriptor2$5, this);
          _initializerDefineProperty(this, "icon", _descriptor3$4, this);
          _initializerDefineProperty(this, "title", _descriptor4$3, this);
          _initializerDefineProperty(this, "border", _descriptor5, this);
          _initializerDefineProperty(this, "allCount", _descriptor6, this);
          _initializerDefineProperty(this, "count", _descriptor7, this);
          _initializerDefineProperty(this, "addCount", _descriptor8, this);
          _initializerDefineProperty(this, "resources", _descriptor9, this);
          _initializerDefineProperty(this, "selected", _descriptor10, this);
          this.onClick = void 0;
          this.updateCb = null;
        }
        get buildedCount() {
          return this.buildingKey && state.worldState.buildedCount[this.buildingKey] || 0;
        }
        get buildQueueCount() {
          return this.buildingKey && state.worldState.buildQueueCount[this.buildingKey] || 0;
        }
        get buildingKey() {
          if (this.building) {
            return this.building;
          }
          return null;
        }
        onLoad() {
          const data = this.buildingKey && BuildingsDB[this.buildingKey];
          if (!data || !data.buildOptions) {
            return;
          }
          const prefab = assets.getPrefabs(data.prefab);
          if (data.buildOptions.iconScale) {
            this.icon.scale = data.buildOptions.iconScale;
          }
          this.icon.shootPrefab = prefab;
          this.title.string = data.title;
          this.coloredBg.color = data.buildOptions.iconColor;
          const resources = Object.keys(data.buildOptions.price);
          for (const resource of resources) {
            const count = -data.buildOptions.price[resource];
            factoryTemplateComponent(ResourceAmount, this.resources, {
              resource,
              count
            });
          }
        }
        render() {
          this.border.active = this.selected;
        }
        onEnable() {
          this.count.string = this.buildedCount ? `${this.buildedCount}` : '';
          this.addCount.string = this.buildQueueCount ? `+${this.buildQueueCount}` : '';
          this.allCount.string = this.count.string + this.addCount.string;
          this.updateCb = () => {
            getAllComponents(this.allCount.node, Layout).forEach(layout => layout.updateLayout());
            getAllComponents(this.allCount.node, Widget).forEach(widget => widget.updateAlignment());
            this.allCount.node.active = Boolean(this.allCount.string);
          };
        }
        update() {
          this.updateCb?.();
        }
        initialize(_ref) {
          let {
            building,
            onClick
          } = _ref;
          this.building = building;
          this.onClick = onClick;
        }
        onCardClick() {
          const key = this.buildingKey;
          if (key) {
            this.onClick?.(this.buildingKey);
          }
        }
      }, _class3$3.template = 'BuildCardTemplate', _class3$3), (_descriptor$8 = _applyDecoratedDescriptor(_class2$9.prototype, "building", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$9.prototype, "coloredBg", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$9.prototype, "icon", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$9.prototype, "title", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$9.prototype, "border", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$9.prototype, "allCount", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$9.prototype, "count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$9.prototype, "addCount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$9.prototype, "resources", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$9.prototype, "selected", [property$1, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$9.prototype, "buildedCount", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "buildedCount"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "buildQueueCount", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "buildQueueCount"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "initialize", [_dec11], Object.getOwnPropertyDescriptor(_class2$9.prototype, "initialize"), _class2$9.prototype)), _class2$9)) || _class$j);
      cclegacy._RF.pop();
      var _dec$d, _class$k, _class2$a, _descriptor$9;
      cclegacy._RF.push({}, "e2f4aiB81NAc4XbQnjgx5h7", "Building", undefined);
      let Building = (_dec$d = ccclass$1('Building'), _dec$d(_class$k = (_class2$a = class Building extends Observer {
        constructor() {
          super(...arguments);
          this.building = null;
          _initializerDefineProperty(this, "data", _descriptor$9, this);
          this.tile = void 0;
          this.onTap = void 0;
        }
        get buildingData() {
          return this.data;
        }
        get buildingKey() {
          return this.buildingData?.key;
        }
        get prefab() {
          if (!this.buildingKey) {
            return assets.getPrefabs('building_destroyed');
          }
          let prefab = BuildingsDB[this.buildingKey].prefab;
          const progress = this.buildingData ? this.buildingData.progress : BUILD_PROGRESS_MAX;
          if (progress < BUILD_PROGRESS_MAX) {
            const step = BUILD_PROGRESS_MAX / BUILD_PROGRESS_STAGES.length;
            const stageIndex = clamp(Math.floor(progress / step), [0, BUILD_PROGRESS_STAGES.length - 1]);
            prefab = BUILD_PROGRESS_STAGES[stageIndex];
          }
          return assets.getPrefabs(prefab);
        }
        get rotation() {
          return new Vec3(0, BUILDING_ROTATION_INIT + (this.buildingData?.rotate || 0), 0);
        }
        get materials() {
          return [];
        }
        get buildingHeight() {
          if (!this.building) {
            return 0;
          }
          const meshes = getAllComponents(this.building, MeshRenderer);
          const [min, max] = meshes.reduce((_ref, mesh) => {
            let [min, max] = _ref;
            const {
              model
            } = mesh;
            const bounds = model?.worldBounds;
            if (bounds) {
              const minVec = new Vec3();
              const maxVec = new Vec3();
              bounds.getBoundary(minVec, maxVec);
              return [min !== null ? Math.min(min, minVec.y) : minVec.y, max !== null ? Math.max(max, maxVec.y) : maxVec.y];
            }
            return [min, max];
          }, [null, null]);
          return (max || 0) - (min || 0);
        }
        initialize(_ref2) {
          let {
            data,
            tile,
            onTap
          } = _ref2;
          this.data = data;
          this.tile = tile;
          this.onTap = onTap;
        }
        onBuildingTap(event) {
          this.onTap?.(event);
        }
        render() {
          this.building?.destroy();
          this.building = null;
          this.building = createPrefabNode(this.prefab, {
            parent: this.node,
            rotation: this.rotation,
            materials: this.materials,
            castShadows: true,
            receiveShadows: true,
            onTap: this.onBuildingTap.bind(this)
          });
        }
        onLoad() {
          this.node.setPosition(new Vec3(0, this.tile.groundY, 0));
        }
      }, (_descriptor$9 = _applyDecoratedDescriptor(_class2$a.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$a.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "buildingData"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "buildingKey", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "buildingKey"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "prefab"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "rotation", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "rotation"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "materials", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "materials"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "buildingHeight", [computed], Object.getOwnPropertyDescriptor(_class2$a.prototype, "buildingHeight"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "onBuildingTap", [bound], Object.getOwnPropertyDescriptor(_class2$a.prototype, "onBuildingTap"), _class2$a.prototype)), _class2$a)) || _class$k);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b10247WjhxCkLaqZBAP0zO8", "ERouteName", undefined);
      let ERouteName = /*#__PURE__*/function (ERouteName) {
        ERouteName["Pause"] = "pause";
        ERouteName["World"] = "world";
        ERouteName["Build"] = "build";
        return ERouteName;
      }({});
      cclegacy._RF.pop();
      var _dec$e, _dec2$7, _dec3$5, _class$l, _class2$b, _descriptor$a, _descriptor2$6, _descriptor3$5, _descriptor4$4, _descriptor5$1, _descriptor6$1;
      cclegacy._RF.push({}, "12561gJjCZCTprM2qMrqbX5", "UiOpacityAnimate", undefined);
      let UiOpacityAnimate = (_dec$e = ccclass$1('UiOpacityAnimate'), _dec2$7 = property$1({
        min: 0,
        max: 255
      }), _dec3$5 = property$1({
        min: 0,
        max: 255
      }), _dec$e(_class$l = (_class2$b = class UiOpacityAnimate extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "from", _descriptor$a, this);
          _initializerDefineProperty(this, "to", _descriptor2$6, this);
          _initializerDefineProperty(this, "duration", _descriptor3$5, this);
          _initializerDefineProperty(this, "delay", _descriptor4$4, this);
          _initializerDefineProperty(this, "easing", _descriptor5$1, this);
          _initializerDefineProperty(this, "once", _descriptor6$1, this);
        }
        get opacityComponent() {
          return this.getComponent(UIOpacity) || this.addComponent(UIOpacity);
        }
        animate(value) {
          if (this.opacityComponent?.opacity !== value) {
            return tween(this.opacityComponent).delay(this.delay).to(this.duration, {
              opacity: value
            }, {
              easing: this.easing
            });
          }
        }
        hide() {
          if (!this.once && this.opacityComponent) {
            const animate = this.animate(this.from);
            if (animate) {
              animate.call(() => this.node.active = false).start();
              return;
            }
          }
          this.node.active = false;
        }
        onLoad() {
          this.animate(this.to)?.start();
        }
        onEnable() {
          if (!this.once && this.opacityComponent) {
            this.animate(this.to)?.start();
          }
        }
        onDisable() {
          if (!this.once && this.opacityComponent) {
            this.opacityComponent.opacity = this.from;
          }
        }
      }, (_descriptor$a = _applyDecoratedDescriptor(_class2$b.prototype, "from", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$b.prototype, "to", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 255;
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$b.prototype, "duration", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$b.prototype, "delay", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$b.prototype, "easing", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'cubicIn';
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$b.prototype, "once", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "opacityComponent", [cached], Object.getOwnPropertyDescriptor(_class2$b.prototype, "opacityComponent"), _class2$b.prototype)), _class2$b)) || _class$l);
      cclegacy._RF.pop();
      var _class$m;
      cclegacy._RF.push({}, "92f7e1tQcVKjYepmydCZx1p", "AbstractScreen", undefined);
      let AbstractScreen = (_class$m = class AbstractScreen extends Observer {
        get route() {
          return router.getRoute(this.routeName);
        }
        initialize() {
          const opacity = this.node.addComponent(UIOpacity);
          opacity.opacity = 0;
          const animate = this.node.addComponent(UiOpacityAnimate);
          animate.duration = 0.1;
          animate.easing = 'cubicInOut';
        }
      }, _applyDecoratedDescriptor(_class$m.prototype, "route", [computed], Object.getOwnPropertyDescriptor(_class$m.prototype, "route"), _class$m.prototype), _class$m);
      cclegacy._RF.pop();
      var _dec$f, _dec2$8, _class$n, _class2$c, _class3$4;
      cclegacy._RF.push({}, "fa173Vc259NOIofsPPDtmv4", "WorldScreen", undefined);
      let WorldScreen = (_dec$f = ccclass$1('WorldScreen'), _dec2$8 = action.bound, _dec$f(_class$n = (_class2$c = (_class3$4 = class WorldScreen extends AbstractScreen {
        constructor() {
          super(...arguments);
          this.routeName = ERouteName.World;
        }
        onTurnClick() {
          state.turnState.turn++;
        }
        onPauseClick() {
          router.navigate(ERouteName.Pause);
        }
        onBuildClick() {
          router.navigate(ERouteName.Build);
        }
      }, _class3$4.template = 'WorldScreen', _class3$4), _applyDecoratedDescriptor(_class2$c.prototype, "onTurnClick", [_dec2$8], Object.getOwnPropertyDescriptor(_class2$c.prototype, "onTurnClick"), _class2$c.prototype), _class2$c)) || _class$n);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1a839al+X1FlbiRJf2wF5vc", "AbstractRoute", undefined);
      class AbstractRoute {
        constructor() {
          this.hasUiOverlay = false;
          this.hasUiHeader = true;
        }
        initialize(options) {
          Object.assign(this, options);
          makeObservable(this);
          return this;
        }
        destroy() {
          // no-op
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "274e9fEFpBHxphBcC2DxifD", "WorldRoute", undefined);
      class WorldRoute extends AbstractRoute {
        constructor() {
          super(...arguments);
          this.name = ERouteName.World;
          this.screen = WorldScreen;
        }
        serialize() {
          return {};
        }
      }
      cclegacy._RF.pop();
      var _dec$g, _class$o, _class2$d, _class3$5;
      cclegacy._RF.push({}, "61c151/eI1JGIitKRzcpUJn", "PauseScreen", undefined);
      let PauseScreen = (_dec$g = ccclass$1('PauseScreen'), _dec$g(_class$o = (_class2$d = (_class3$5 = class PauseScreen extends AbstractScreen {
        constructor() {
          super(...arguments);
          this.routeName = ERouteName.Pause;
        }
        onStartClick() {}
        onContinueClick() {
          router.navigate(ERouteName.World);
        }
        get isContinueActive() {
          return Boolean(this.route?.isIntro);
        }
        onResumeClick() {
          const isNavigated = router.navigateBack();
          if (!isNavigated) {
            this.onContinueClick();
          }
        }
        get isResumeActive() {
          return !this.isContinueActive;
        }
        onStartOverClick() {}
        onSettingsClick() {}
        get isPaused() {
          return !this.route?.isIntro;
        }
      }, _class3$5.template = 'PauseScreen', _class3$5), (_applyDecoratedDescriptor(_class2$d.prototype, "isContinueActive", [computed], Object.getOwnPropertyDescriptor(_class2$d.prototype, "isContinueActive"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "isResumeActive", [computed], Object.getOwnPropertyDescriptor(_class2$d.prototype, "isResumeActive"), _class2$d.prototype)), _class2$d)) || _class$o);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fba989evB1Fx5aB2bdIY4XZ", "PauseRoute", undefined);
      class PauseRoute extends AbstractRoute {
        constructor() {
          super(...arguments);
          this.name = ERouteName.Pause;
          this.screen = PauseScreen;
          this.hasUiOverlay = true;
          this.hasUiHeader = false;
          this.isIntro = void 0;
        }
        serialize() {
          return {
            isIntro: this.isIntro
          };
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "785e72NMARG0bBTvGVy+hVa", "consts", undefined);
      const LIMITS = [-1, 1]; // zoom and rotation can be from -1 to 1
      const CAMERA_POSITION_OFFSET = 15; // difference in position for camera Y/Z
      const CAMERA_ROTATION_OFFSET = 10; // degrees for zoom difference in camera Y rotation

      const TARGET_ROTATE_OFFSET = 180; // half the circle, for rotation from -180 to 180

      const MOVE_DIVIDER = 14; // if biger, then faster
      const ZOOM_MOVE_INFLUENCE = 8; // different zooms levels multiplies speed
      const DOUBLE_TOUCH_TIME = 250; // ms to activate double touch type

      const MOVE_SAFEZONE = 20; // safe zone from farthest chunk

      const IMPULSE_DURATION = 4; // seconds, duration of move implulse animation
      const IMPULSE_STRENGTH = 1.5; // we multiply touch impulse by that strength
      const IMPULSE_LENGTH = 0.05; // delta vector must have such length to activate impulse

      const DEFAULT_NAVIGATE_DURATION = 1; // seconds, default navigation time

      const ROTATE_SPEED = 8; // the bigger - the slower is rotate

      const FIXED_ROTATE_LIMIT = 5; // we convert angles with toFixed()
      const FIXED_POSITION_LIMIT = 20; // we convert position with toFixed()

      const TAP_MAX_MOVED_TIMES = 50; // if we move faster than this, we will not tap
      const TAP_TIME = 100; // if we released touch event fewer than this, we will tap

      const MAX_TOUCH_SIZE = 720; // same as x2 base screen width
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4d4d8PNb4xERYvJKhdGsH8N", "EMoveType", undefined);
      let EMoveType = /*#__PURE__*/function (EMoveType) {
        EMoveType[EMoveType["Default"] = 1] = "Default";
        EMoveType[EMoveType["TwoFinger"] = 2] = "TwoFinger";
        EMoveType[EMoveType["DoubleTouch"] = 3] = "DoubleTouch";
        EMoveType[EMoveType["Impulse"] = 4] = "Impulse";
        EMoveType[EMoveType["Rotate"] = 5] = "Rotate";
        EMoveType[EMoveType["Navigate"] = 6] = "Navigate";
        return EMoveType;
      }({}); // camera navigation
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f496edCko9DbLzusSght79s", "isNumber", undefined);
      function isNumber(num) {
        if (typeof num === 'number') {
          return num - num === 0;
        }
        if (typeof num === 'string' && num.trim() !== '') {
          return Number.isFinite(Number(num));
        }
        return false;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2d0a8UkkNNNV6nCrOwWYFr/", "listen", undefined);
      function listen(func) {
        return func();
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f02969jNRhHRoy1w98rtSrb", "degreeToRadian", undefined);
      const HALF_CIRCLE = 180;
      function degreeToRadian(degree) {
        return degree * (Math.PI / HALF_CIRCLE);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d9db3BLvVJEwr+59bqTRyPL", "easeOutSine", undefined);
      const LIMTIS = [0, 1];
      function easeOutSine(x) {
        return Math.sin(clamp(x, LIMTIS) * Math.PI / 2);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "35ec4HUPW5H0InlL9DprArB", "fromQuat", undefined);
      function fromQuat(quat) {
        return quat.getEulerAngles(new Vec3());
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a6a7dFbW/VMrooS/vvXmGAQ", "fromVec3", undefined);
      function fromVec3(vec) {
        return {
          x: vec.x,
          y: vec.y,
          z: vec.z
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0fe24ULx/dKhKUgpQM7OPD9", "fromVec3ToVec2", undefined);
      function fromVec3ToVec2(vec) {
        return {
          x: vec.x,
          y: vec.z
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f71fpsU01PWoFgJzye25j0", "toFixedNumber", undefined);
      function toFixedNumber(num, digits, base) {
        if (base === void 0) {
          base = 10;
        }
        const pow = base ** digits;
        return Math.round(num * pow) / pow;
      }
      cclegacy._RF.pop();
      var _dec$h, _dec2$9, _dec3$6, _dec4$4, _dec5$3, _dec6$2, _dec7$2, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12, _class$p, _class2$e, _descriptor$b, _descriptor2$7, _descriptor3$6, _descriptor4$5, _descriptor5$2, _descriptor6$2, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "33eaaIU0o5D8I0ctpi/Us/Q", "WorldCamera", undefined);
      let WorldCamera = (_dec$h = ccclass$1('WorldCamera'), _dec2$9 = property$1(Canvas), _dec3$6 = property$1(Camera), _dec4$4 = action.bound, _dec5$3 = action.bound, _dec6$2 = action.bound, _dec7$2 = action.bound, _dec8$1 = action.bound, _dec9$1 = action.bound, _dec10$1 = action.bound, _dec11$1 = action.bound, _dec12 = action.bound, _dec$h(_class$p = (_class2$e = class WorldCamera extends Observer {
        constructor() {
          super(...arguments);
          this.disposePageListen = void 0;
          _initializerDefineProperty(this, "canvas", _descriptor$b, this);
          _initializerDefineProperty(this, "camera", _descriptor2$7, this);
          this.touchSize = void 0;
          this.movedTimes = 0;
          this.raycastTimer = null;
          _initializerDefineProperty(this, "touchCount", _descriptor3$6, this);
          _initializerDefineProperty(this, "touchTimes", _descriptor4$5, this);
          _initializerDefineProperty(this, "touchImpulse", _descriptor5$2, this);
          this.impulseDuration = 0;
          _initializerDefineProperty(this, "targetPosition", _descriptor6$2, this);
          _initializerDefineProperty(this, "targetInitRotation", _descriptor7$1, this);
          _initializerDefineProperty(this, "cameraInitPosition", _descriptor8$1, this);
          _initializerDefineProperty(this, "cameraInitRotation", _descriptor9$1, this);
          _initializerDefineProperty(this, "zooming", _descriptor10$1, this);
          _initializerDefineProperty(this, "rotation", _descriptor11, this);
          this.navigateDuration = 0;
          this.navigateFrom = null;
          _initializerDefineProperty(this, "navigateTo", _descriptor12, this);
          this.disposeTouchListen = void 0;
        }
        get moveLimit() {
          const {
            chunksMap
          } = state.worldState;
          return {
            x: [chunksMap.minX - MOVE_SAFEZONE, chunksMap.maxX + MOVE_SAFEZONE],
            z: [chunksMap.minZ - MOVE_SAFEZONE, chunksMap.maxZ + MOVE_SAFEZONE]
          };
        }
        get moveType() {
          if (this.touchCount === null) {
            return EMoveType.Rotate;
          }
          if (!this.touchCount) {
            if (this.navigateTo) {
              return EMoveType.Navigate;
            }
            if (this.touchImpulse) {
              return EMoveType.Impulse;
            }
            return null;
          }
          if (this.touchCount > 1) {
            return EMoveType.TwoFinger;
          }
          if (this.touchTimes[0] && this.touchTimes[1] && this.touchTimes[1] - this.touchTimes[0] <= DOUBLE_TOUCH_TIME) {
            return EMoveType.DoubleTouch;
          }
          return EMoveType.Default;
        }
        get targetRotation() {
          const init = this.targetInitRotation;
          if (!init) {
            return null;
          }
          const delta = toFixedNumber(this.rotation * TARGET_ROTATE_OFFSET, FIXED_ROTATE_LIMIT);
          return {
            x: init.x,
            y: init.y + delta,
            z: init.z
          };
        }
        get cameraPosition() {
          const init = this.cameraInitPosition;
          if (!init) {
            return null;
          }
          const delta = toFixedNumber(this.zooming * CAMERA_POSITION_OFFSET, FIXED_POSITION_LIMIT);
          return {
            x: init.x,
            y: init.y + delta,
            z: init.z + delta
          };
        }
        get cameraRotation() {
          const init = this.cameraInitRotation;
          if (!init) {
            return null;
          }
          const delta = toFixedNumber(-this.zooming * CAMERA_ROTATION_OFFSET, FIXED_ROTATE_LIMIT);
          return {
            x: init.x + delta,
            y: init.y,
            z: init.z
          };
        }
        onLoad() {
          this.init();
          this.disposeTouchListen = listen(() => {
            this.canvas.node.on(NodeEventType.TOUCH_START, this.onTouchStart);
            this.canvas.node.on(NodeEventType.TOUCH_MOVE, this.onTouchMove);
            this.canvas.node.on(NodeEventType.TOUCH_END, this.onTouchEnd);
            this.canvas.node.on(NodeEventType.TOUCH_CANCEL, this.onTouchEnd);
            return () => {
              this.canvas.node.off(NodeEventType.TOUCH_START, this.onTouchStart);
              this.canvas.node.off(NodeEventType.TOUCH_MOVE, this.onTouchMove);
              this.canvas.node.off(NodeEventType.TOUCH_END, this.onTouchEnd);
              this.canvas.node.off(NodeEventType.TOUCH_CANCEL, this.onTouchEnd);
            };
          });
        }
        init() {
          this.initTarget();
          this.cameraInitPosition = fromVec3(this.camera.node.getPosition());
          this.cameraInitRotation = fromQuat(this.camera.node.getRotation());
          this.targetInitRotation = fromQuat(this.node.getRotation());
          const canvasDimensions = this.canvas.getComponent(UITransform);
          if (!canvasDimensions) {
            throw new Error('Passed bad canvas for WorldCamera');
          }
          this.touchSize = Math.min(canvasDimensions.width, canvasDimensions.height, MAX_TOUCH_SIZE);
        }
        initTarget() {
          this.targetPosition = fromVec3(this.node.getPosition());
        }
        parseMoveDelta(delta) {
          return delta / (this.touchSize / (MOVE_DIVIDER + ZOOM_MOVE_INFLUENCE * this.zooming));
        }
        move(targetX, targetY) {
          const {
            moveLimit,
            targetPosition
          } = this;
          targetPosition.x = clamp(toFixedNumber(targetX, FIXED_POSITION_LIMIT), moveLimit.x);
          targetPosition.z = clamp(toFixedNumber(targetY, FIXED_POSITION_LIMIT), moveLimit.z);
        }
        moveBy(deltaX, deltaY) {
          const {
            targetRotation,
            targetPosition
          } = this;
          if (!targetRotation) {
            return;
          }
          const moveVec = new Vec2(deltaX, deltaY).rotate(degreeToRadian(-targetRotation.y));
          this.move(targetPosition.x + moveVec.x, targetPosition.z + moveVec.y);
        }
        zoom(zooming) {
          this.zooming = clamp(zooming, LIMITS);
        }
        zoomBy(delta) {
          this.zoom(this.zooming + delta);
        }
        rotate(rotation) {
          this.rotation = rotation;
          if (this.rotation < LIMITS[0]) {
            this.rotation -= 2 * LIMITS[0];
          }
          if (this.rotation > LIMITS[1]) {
            this.rotation -= 2 * LIMITS[1];
          }
        }
        rotateBy(delta) {
          this.rotate(this.rotation + delta);
        }
        onTouchStart(event) {
          if (this.raycastTimer) {
            clearTimeout(this.raycastTimer);
            this.raycastTimer = null;
          }
          this.navigateFrom = null;
          this.navigateTo = null;
          this.navigateDuration = 0;
          this.movedTimes = 0;
          this.touchImpulse = null;
          this.impulseDuration = 0;
          if (!this.moveType) {
            this.initTarget();
          }
          this.touchCount = Math.min(event.getAllTouches().length, 2);
          if (this.touchCount === 1) {
            this.touchTimes.push(Date.now());
            this.touchTimes.splice(0, 1);
          }
        }
        onTouchMove(event) {
          this.movedTimes += 1;
          const touches = event.getTouches();
          if (this.moveType === EMoveType.Default) {
            const [move] = touches;
            const delta = move.getDelta();
            const touchDelta = {
              x: this.parseMoveDelta(-delta.x),
              y: this.parseMoveDelta(delta.y)
            };
            if (this.touchImpulse !== false) {
              this.touchImpulse = Vec2.len(touchDelta) > IMPULSE_LENGTH ? touchDelta : null;
            }
            this.moveBy(touchDelta.x, touchDelta.y);
          } else if (this.moveType === EMoveType.TwoFinger) {
            if (touches.length < 2) {
              return;
            }
            const [zoomA, zoomB] = touches;
            const locationA = zoomA.getLocation();
            const locationB = zoomB.getLocation();
            const prevLocationA = zoomA.getPreviousLocation();
            const prevLocationB = zoomB.getPreviousLocation();
            const distance = Vec2.distance(locationA, locationB);
            const prevDistance = Vec2.distance(prevLocationA, prevLocationB);
            const sub = locationA.y > locationB.y ? locationA.subtract(locationB) : locationB.subtract(locationA);
            const prevSub = prevLocationA.y > prevLocationB.y ? prevLocationA.subtract(prevLocationB) : prevLocationB.subtract(prevLocationA);
            const angle = sub.signAngle(prevSub);
            this.touchImpulse = false;
            const zoom = (prevDistance - distance) / this.touchSize;
            const rotate = angle / Math.PI;
            this.zoomBy(zoom);
            this.rotateBy(rotate);
          } else if (this.moveType === EMoveType.DoubleTouch) {
            const [move] = touches;
            const delta = move.getDelta();
            this.touchImpulse = false;
            const zoom = delta.y / this.touchSize;
            const rotate = -delta.x / this.touchSize;
            if (Math.abs(zoom) > Math.abs(rotate)) {
              this.zoomBy(zoom);
            } else {
              this.rotateBy(rotate);
            }
          }
        }
        onTouchEnd(event) {
          if (this.moveType === EMoveType.Rotate) {
            return;
          }
          this.touchCount = Math.max(0, event.getAllTouches().length);
          if (this.movedTimes <= TAP_MAX_MOVED_TIMES && this.touchTimes[1] && Date.now() - this.touchTimes[1] <= TAP_TIME) {
            const position = event.getLocation();
            this.raycastTimer = setTimeout(() => {
              this.raycast(position.x, position.y);
            }, DOUBLE_TOUCH_TIME);
          }
        }
        raycast(x, y) {
          const outRay = this.camera.screenPointToRay(x, y);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            const {
              raycastClosestResult
            } = PhysicsSystem.instance;
            const {
              hitPoint,
              hitNormal,
              collider,
              distance
            } = raycastClosestResult;
            collider.node.emit('tap', {
              hitPoint,
              hitNormal,
              distance
            });
          }
        }
        navigate(navigator) {
          this.navigateDuration = 0;
          this.navigateFrom = {
            rotation: this.rotation,
            zooming: this.zooming,
            position: fromVec3ToVec2(this.targetPosition)
          };
          this.navigateTo = navigator;
        }
        render() {
          if (!this.moveType) {
            return;
          }
          const {
            node,
            camera,
            targetPosition,
            targetRotation,
            cameraPosition,
            cameraRotation
          } = this;
          if (targetPosition) {
            node.setPosition(toVec3(targetPosition));
          }
          if (targetRotation) {
            node.setRotationFromEuler(targetRotation.x, targetRotation.y, targetRotation.z);
          }
          if (cameraPosition) {
            camera.node.setPosition(toVec3(cameraPosition));
          }
          if (cameraRotation) {
            camera.node.setRotationFromEuler(cameraRotation.x, cameraRotation.y, cameraRotation.z);
          }
        }
        update(dt) {
          if (this.moveType === EMoveType.Navigate) {
            runInAction(() => {
              const {
                navigateFrom,
                navigateTo
              } = this;
              if (navigateFrom && navigateTo) {
                this.navigateDuration += dt;
                const navigateProgress = this.navigateDuration / (navigateTo.time || DEFAULT_NAVIGATE_DURATION);
                const progress = easeOutSine(navigateProgress);
                const wrap = (fromValue, toValue) => fromValue + progress * (toValue - fromValue);
                if (navigateTo.position && navigateFrom.position) {
                  this.move(wrap(navigateFrom.position.x, navigateTo.position.x), wrap(navigateFrom.position.y, navigateTo.position.y));
                }
                if (isNumber(navigateTo.rotation) && isNumber(navigateFrom.rotation)) {
                  this.rotate(wrap(navigateFrom.rotation, navigateTo.rotation));
                }
                if (isNumber(navigateTo.zooming) && isNumber(navigateFrom.zooming)) {
                  this.zoom(wrap(navigateFrom.zooming, navigateTo.zooming));
                }
              } else {
                this.navigateFrom = null;
                this.navigateTo = null;
                this.navigateDuration = 0;
              }
            });
          } else if (this.moveType === EMoveType.Impulse) {
            runInAction(() => {
              if (!this.touchImpulse) {
                return;
              }
              this.moveBy(IMPULSE_STRENGTH * this.touchImpulse.x, IMPULSE_STRENGTH * this.touchImpulse.y);
              if (this.impulseDuration >= IMPULSE_DURATION) {
                this.touchImpulse = null;
                this.impulseDuration = 0;
              } else {
                this.impulseDuration += dt;
                const impulseProgress = this.impulseDuration / IMPULSE_DURATION;
                const progress = 1 - easeOutSine(impulseProgress);
                this.touchImpulse.x *= progress;
                this.touchImpulse.y *= progress;
              }
            });
          } else if (this.moveType === EMoveType.Rotate) {
            this.rotateBy(dt / ROTATE_SPEED);
          }
        }
      }, (_descriptor$b = _applyDecoratedDescriptor(_class2$e.prototype, "canvas", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$e.prototype, "camera", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$e.prototype, "moveLimit", [computed], Object.getOwnPropertyDescriptor(_class2$e.prototype, "moveLimit"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "moveType", [computed], Object.getOwnPropertyDescriptor(_class2$e.prototype, "moveType"), _class2$e.prototype), _descriptor3$6 = _applyDecoratedDescriptor(_class2$e.prototype, "touchCount", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$e.prototype, "touchTimes", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [null, null];
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$e.prototype, "touchImpulse", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$e.prototype, "targetPosition", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return {
            x: 0,
            y: 0,
            z: 0
          };
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$e.prototype, "targetInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$e.prototype, "cameraInitPosition", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$e.prototype, "cameraInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$e.prototype, "zooming", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$e.prototype, "rotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$e.prototype, "navigateTo", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$e.prototype, "targetRotation", [computed], Object.getOwnPropertyDescriptor(_class2$e.prototype, "targetRotation"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "cameraPosition", [computed], Object.getOwnPropertyDescriptor(_class2$e.prototype, "cameraPosition"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "cameraRotation", [computed], Object.getOwnPropertyDescriptor(_class2$e.prototype, "cameraRotation"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "init", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$e.prototype, "init"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "initTarget", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$e.prototype, "initTarget"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "move", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$e.prototype, "move"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "zoom", [_dec7$2], Object.getOwnPropertyDescriptor(_class2$e.prototype, "zoom"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "rotate", [_dec8$1], Object.getOwnPropertyDescriptor(_class2$e.prototype, "rotate"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "onTouchStart", [_dec9$1], Object.getOwnPropertyDescriptor(_class2$e.prototype, "onTouchStart"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "onTouchMove", [_dec10$1], Object.getOwnPropertyDescriptor(_class2$e.prototype, "onTouchMove"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "onTouchEnd", [_dec11$1], Object.getOwnPropertyDescriptor(_class2$e.prototype, "onTouchEnd"), _class2$e.prototype), _applyDecoratedDescriptor(_class2$e.prototype, "navigate", [_dec12], Object.getOwnPropertyDescriptor(_class2$e.prototype, "navigate"), _class2$e.prototype)), _class2$e)) || _class$p);
      cclegacy._RF.pop();
      var _dec$i, _dec2$a, _class$q, _class2$f, _descriptor$c, _descriptor2$8;
      cclegacy._RF.push({}, "64be4CKq3RNB4pRYc9VvoF0", "Ui", undefined);
      let Ui = (_dec$i = ccclass$1('Ui'), _dec2$a = property$1(Node), _dec$i(_class$q = (_class2$f = class Ui extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "padding", _descriptor$c, this);
          _initializerDefineProperty(this, "contentNode", _descriptor2$8, this);
          this.disposeListenResolution = void 0;
          this.size = new Size(720, 1600);
        }
        __preload() {
          this.updateResolution();
          this.disposeListenResolution = listen(() => {
            screen.on('window-resize', this.updateResolution, this);
            return () => {
              screen.off('window-resize', this.updateResolution, this);
            };
          });
          this.updateSafearea();
          super.__preload();
        }
        updateResolution() {
          const realSize = screen.windowSize;
          const ratio = realSize.height / realSize.width;
          const width = ratio > 1 ? this.size.width : Math.max(realSize.width, this.size.width);
          const newSize = [width, Math.round(width * ratio)];
          view.setDesignResolutionSize(newSize[0], newSize[1], ResolutionPolicy.FIXED_WIDTH);
          const cameras = this.getComponentsInChildren(Camera);
          for (const camera of cameras) {
            camera.orthoHeight = newSize[1] / 2;
            if (camera.targetTexture) {
              camera.targetTexture.reset({
                width: newSize[0],
                height: newSize[1]
              });
            }
          }
        }
        updateSafearea() {
          const widget = this.contentNode?.getComponent(Widget);
          if (widget) {
            const safeArea = sys.getSafeAreaRect();
            const {
              width: screenWidth,
              height: screenHeight
            } = view.getVisibleSize();
            widget.top = this.padding + (Math.floor(screenHeight - safeArea.y - safeArea.height) || this.padding);
            widget.bottom = this.padding + (safeArea.y || this.padding);
            widget.left = this.padding + (safeArea.x || this.padding);
            widget.right = this.padding + (Math.floor(screenWidth - safeArea.x - safeArea.width) || this.padding);
            widget.updateAlignment();
          }
        }
      }, (_descriptor$c = _applyDecoratedDescriptor(_class2$f.prototype, "padding", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 12;
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$f.prototype, "contentNode", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$f)) || _class$q);
      cclegacy._RF.pop();
      var _dec$j, _dec2$b, _dec3$7, _dec4$5, _dec5$4, _dec6$3, _class$r, _class2$g, _descriptor$d, _descriptor2$9, _descriptor3$7, _descriptor4$6, _descriptor5$3;
      cclegacy._RF.push({}, "2bfeb5808hOeqVCp9cMz5gb", "WorldUi", undefined);
      let WorldUi = (_dec$j = ccclass$1('WorldUi'), _dec2$b = property$1(Node), _dec3$7 = property$1(Node), _dec4$5 = property$1(Node), _dec5$4 = property$1(Node), _dec6$3 = property$1(Component), _dec$j(_class$r = (_class2$g = class WorldUi extends Ui {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "overlayNode", _descriptor$d, this);
          _initializerDefineProperty(this, "shadowNode", _descriptor2$9, this);
          _initializerDefineProperty(this, "headerNode", _descriptor3$7, this);
          _initializerDefineProperty(this, "bodyNode", _descriptor4$6, this);
          _initializerDefineProperty(this, "screen", _descriptor5$3, this);
        }
        updateUiOverlay() {
          this.overlayNode.active = router.route.hasUiOverlay;
        }
        updateUiHeader() {
          this.headerNode.active = router.route.hasUiHeader;
        }
        updateUiBody() {
          const {
            screen: ScreenClass
          } = router.route;
          if (!this.screen || !(this.screen instanceof ScreenClass)) {
            this.screen?.node.destroy();
            this.screen = factoryTemplateComponent(ScreenClass, this.bodyNode, {});
          }
        }
        render() {
          this.updateUiOverlay();
          this.updateUiHeader();
          this.updateUiBody();
        }
      }, (_descriptor$d = _applyDecoratedDescriptor(_class2$g.prototype, "overlayNode", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$g.prototype, "shadowNode", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$g.prototype, "headerNode", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$g.prototype, "bodyNode", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$g.prototype, "screen", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$g)) || _class$r);
      cclegacy._RF.pop();
      var _dec$k, _dec2$c, _dec3$8, _class$s, _class2$h, _descriptor$e, _descriptor2$a, _class3$6;
      cclegacy._RF.push({}, "a5ddcbI8SVC9YwxjAzAIv37", "DiWorld", undefined);
      const DI_MAP_DATA = [[WorldCamera, 'worldCamera'], [WorldUi, 'worldUi']];
      const DI_MAP = new Map(DI_MAP_DATA);
      let DiWorld = (_dec$k = ccclass$1('DiWorld'), _dec2$c = property$1(WorldCamera), _dec3$8 = property$1(WorldUi), _dec$k(_class$s = (_class2$h = (_class3$6 = class DiWorld extends Component {
        constructor(name) {
          super(name);
          _initializerDefineProperty(this, "worldCamera", _descriptor$e, this);
          _initializerDefineProperty(this, "worldUi", _descriptor2$a, this);
          DiWorld.instance = this;
        }
        static get(Comp) {
          if (!DiWorld.instance) {
            throw new Error('Di is not initalized!');
          }
          const key = DI_MAP.get(Comp);
          if (!key) {
            throw new Error(`Di key ${key} do not exist!`);
          }
          return DiWorld.instance[key];
        }
        static get worldCamera() {
          return DiWorld.get(WorldCamera);
        }
        static get worldUi() {
          return DiWorld.get(WorldUi);
        }
      }, _class3$6.instance = null, _class3$6), (_descriptor$e = _applyDecoratedDescriptor(_class2$h.prototype, "worldCamera", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$a = _applyDecoratedDescriptor(_class2$h.prototype, "worldUi", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$h)) || _class$s);
      cclegacy._RF.pop();
      var _dec$l, _dec2$d, _dec3$9, _dec4$6, _dec5$5, _class$t, _class2$i, _descriptor$f, _descriptor2$b, _class3$7;
      cclegacy._RF.push({}, "69210hpIv1AbYLmEWFK2XQb", "BuildScreen", undefined);
      const BUILDINGS = [EBuilding.Lumberjack, EBuilding.Sawmill, EBuilding.Quarry];
      let BuildScreen = (_dec$l = ccclass$1('BuildScreen'), _dec2$d = property$1(Node), _dec3$9 = observable.ref, _dec4$6 = action.bound, _dec5$5 = action.bound, _dec$l(_class$t = (_class2$i = (_class3$7 = class BuildScreen extends AbstractScreen {
        constructor() {
          super(...arguments);
          this.routeName = ERouteName.Build;
          _initializerDefineProperty(this, "buildingsNode", _descriptor$f, this);
          _initializerDefineProperty(this, "buildCards", _descriptor2$b, this);
        }
        onLoad() {
          for (const building of BUILDINGS) {
            const card = factoryTemplateComponent(BuildCard, this.buildingsNode, {
              building,
              onClick: this.onSelectBuilding
            });
            this.buildCards.push(card);
          }
        }
        onSelectBuilding(building) {
          if (this.route) {
            this.route.building = this.route.building === building ? null : building;
          }
        }
        onBuildClick() {
          if (!this.route) {
            return;
          }
          const tile = this.route.buildingTile;
          if (tile) {
            tile.data.building = this.route.buildingData;
            this.route.zoomOut();
            router.navigateBack();
          }
        }
        onCancelClick() {
          const isNavigated = router.navigateBack();
          if (!isNavigated) {
            router.navigate(ERouteName.World);
          }
        }
        get isBuildingSelected() {
          return Boolean(this.route?.building);
        }
        get isReadyToBuild() {
          return this.route?.isBuildingPreviewMode;
        }
        render() {
          const selectedBuilding = this.route?.building;
          runInAction(() => {
            for (const card of this.buildCards) {
              card.selected = card.building === selectedBuilding;
            }
          });
        }
      }, _class3$7.template = 'BuildScreen', _class3$7), (_descriptor$f = _applyDecoratedDescriptor(_class2$i.prototype, "buildingsNode", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$b = _applyDecoratedDescriptor(_class2$i.prototype, "buildCards", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2$i.prototype, "onSelectBuilding", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$i.prototype, "onSelectBuilding"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "onBuildClick", [_dec5$5], Object.getOwnPropertyDescriptor(_class2$i.prototype, "onBuildClick"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "isBuildingSelected", [computed], Object.getOwnPropertyDescriptor(_class2$i.prototype, "isBuildingSelected"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "isReadyToBuild", [computed], Object.getOwnPropertyDescriptor(_class2$i.prototype, "isReadyToBuild"), _class2$i.prototype)), _class2$i)) || _class$t);
      cclegacy._RF.pop();
      var _dec$m, _class$u, _descriptor$g, _descriptor2$c, _descriptor3$8;
      cclegacy._RF.push({}, "3d96fqiWYVGzb0XVc4uc32E", "BuildRoute", undefined);
      let BuildRoute = (_dec$m = observable.ref, (_class$u = class BuildRoute extends AbstractRoute {
        constructor() {
          super(...arguments);
          this.name = ERouteName.Build;
          this.screen = BuildScreen;
          _initializerDefineProperty(this, "building", _descriptor$g, this);
          _initializerDefineProperty(this, "buildingRotate", _descriptor2$c, this);
          _initializerDefineProperty(this, "buildingCoords", _descriptor3$8, this);
          this.disposeBuildingListen = void 0;
          this.disposeBuildingPositionListen = void 0;
        }
        get buildingTile() {
          const {
            tilesMap
          } = state.worldState;
          if (this.buildingCoords) {
            return tilesMap.get(this.buildingCoords)?.self || null;
          }
          return null;
        }
        get buildingData() {
          if (!this.building) {
            return undefined;
          }
          return {
            key: this.building,
            rotate: this.buildingRotate,
            progress: 0
          };
        }
        get buildingDb() {
          return this.building && BuildingsDB[this.building] || null;
        }
        get isChunkMode() {
          return !this.isBuildingPositionMode && !this.isBuildingPreviewMode;
        }
        get isBuildingPositionMode() {
          return Boolean(this.building && !this.isBuildingPreviewMode);
        }
        get isBuildingPreviewMode() {
          return Boolean(this.building && this.buildingCoords);
        }
        zoomIn() {
          if (this.buildingTile) {
            const {
              worldCamera: camera
            } = DiWorld;
            camera.navigate({
              zooming: -0.5,
              position: fromVec3ToVec2(this.buildingTile.node.getWorldPosition())
            });
          }
        }
        zoomOut() {
          const {
            worldCamera: camera
          } = DiWorld;
          if (camera.zooming < 0) {
            camera.navigate({
              zooming: 0
            });
          }
        }
        serialize() {
          return {
            building: this.building,
            buildingCoords: this.buildingCoords
          };
        }
        initialize(options) {
          super.initialize(options);
          this.disposeBuildingListen = reaction(() => this.building, action(() => {
            this.buildingCoords = null;
            this.zoomOut();
          }));
          this.disposeBuildingPositionListen = reaction(() => this.buildingCoords, () => {
            this.zoomIn();
          });
          return this;
        }
        destroy() {
          this.disposeBuildingListen?.();
          this.disposeBuildingPositionListen?.();
        }
      }, (_descriptor$g = _applyDecoratedDescriptor(_class$u.prototype, "building", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2$c = _applyDecoratedDescriptor(_class$u.prototype, "buildingRotate", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$8 = _applyDecoratedDescriptor(_class$u.prototype, "buildingCoords", [_dec$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class$u.prototype, "buildingTile", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "buildingTile"), _class$u.prototype), _applyDecoratedDescriptor(_class$u.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "buildingData"), _class$u.prototype), _applyDecoratedDescriptor(_class$u.prototype, "buildingDb", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "buildingDb"), _class$u.prototype), _applyDecoratedDescriptor(_class$u.prototype, "isChunkMode", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "isChunkMode"), _class$u.prototype), _applyDecoratedDescriptor(_class$u.prototype, "isBuildingPositionMode", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "isBuildingPositionMode"), _class$u.prototype), _applyDecoratedDescriptor(_class$u.prototype, "isBuildingPreviewMode", [computed], Object.getOwnPropertyDescriptor(_class$u.prototype, "isBuildingPreviewMode"), _class$u.prototype)), _class$u));
      cclegacy._RF.pop();
      var _class$v, _descriptor$h;
      cclegacy._RF.push({}, "cd7f6FLaQ5EZp22cx6hRl3m", "router", undefined);
      const MAX_HISTORY_LENGTH = 10;
      const NAVIGATION_DEBOUNCE = 200;
      const routes = {
        [ERouteName.World]: WorldRoute,
        [ERouteName.Pause]: PauseRoute,
        [ERouteName.Build]: BuildRoute
      };
      let Router = (_class$v = class Router {
        constructor() {
          this.history = [{
            route: ERouteName.Pause
          }];
          // default route is Pause
          _initializerDefineProperty(this, "route", _descriptor$h, this);
          this.navigateTimeout = null;
          makeObservable(this);
        }
        get routeName() {
          return this.route.name;
        }
        navigate(route, options, navigateOptions) {
          if (this.navigateTimeout) {
            clearTimeout(this.navigateTimeout);
            this.navigateTimeout = null;
          }
          this.navigateTimeout = setTimeout(action(() => {
            if (!navigateOptions?.back && this.history.length) {
              this.history[this.history.length - 1].options = this.route.serialize();
            }
            this.route.destroy();
            const Route = routes[route];
            this.route = new Route().initialize(options);
            if (navigateOptions?.back) {
              this.history.pop();
            } else {
              const historyLength = this.history.push({
                route,
                options
              });
              if (historyLength > MAX_HISTORY_LENGTH) {
                this.history = this.history.slice(MAX_HISTORY_LENGTH - historyLength);
              }
            }
            this.navigateTimeout = null;
          }), NAVIGATION_DEBOUNCE);
        }
        navigateBack() {
          const record = this.history[this.history.length - 2];
          if (!record) {
            return false;
          }
          this.navigate(record.route, record.options, {
            back: true
          });
          return true;
        }
        getRoute(name) {
          if (this.routeName === name) {
            return this.route;
          }
          return null;
        }
      }, (_applyDecoratedDescriptor(_class$v.prototype, "routeName", [computed], Object.getOwnPropertyDescriptor(_class$v.prototype, "routeName"), _class$v.prototype), _descriptor$h = _applyDecoratedDescriptor(_class$v.prototype, "route", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new PauseRoute().initialize({
            isIntro: true
          });
        }
      })), _class$v);
      const router = new Router();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a7629NGsqpLY5Qvl1zO4/8n", "getBuildRoute", undefined);
      function getBuildRoute() {
        return router.getRoute(ERouteName.Build);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "87c84EFuo9EqI/YhkUTbIwF", "factoryComponent", undefined);
      function factoryComponent(Comp, parent, props) {
        const node = new Node();
        node.layer = parent.layer;
        const component = node.addComponent(Comp);
        component.initialize?.(props);
        parent.addChild(node);
        return component;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a003esrr0tPzI21OkPhQAUo", "consts", undefined);
      const BUTTON_TRANSITION_TIME = 0.1;
      const BUTTON_TRANSITION_SCALE = 0.96;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a737aa/zWlNS7IsrP3vt8dk", "ELayer", undefined);
      const ELayer = Layers.Enum;
      cclegacy._RF.pop();
      var _dec$n, _dec2$e, _dec3$a, _dec4$7, _dec5$6, _dec6$4, _class$w, _class2$j, _descriptor$i, _descriptor2$d, _descriptor3$9;
      cclegacy._RF.push({}, "6bc76uiw8ZEw4+qZsIIRd6Q", "Ui3D", undefined);
      let Ui3D = (_dec$n = ccclass$1('Ui3D'), _dec2$e = property$1(Vec3), _dec3$a = observable.ref, _dec4$7 = property$1(Vec3), _dec5$6 = observable.ref, _dec6$4 = action.bound, _dec$n(_class$w = (_class2$j = class Ui3D extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "sprite", _descriptor$i, this);
          _initializerDefineProperty(this, "position", _descriptor2$d, this);
          _initializerDefineProperty(this, "rotation", _descriptor3$9, this);
          this.onTap = void 0;
          this.spriteSize = void 0;
          this.spriteRenderer = void 0;
          this.collider = void 0;
          this.disposeTweenScale = null;
          this.disposeSpriteChange = void 0;
          this.disposeCameraListen = void 0;
        }
        get spriteFrame() {
          return assets.getSprites(this.sprite);
        }
        getSpriteSize() {
          const result = new Vec2();
          const bounds = this.spriteRenderer.model?.worldBounds;
          if (bounds) {
            const minVec = new Vec3();
            const maxVec = new Vec3();
            bounds.getBoundary(minVec, maxVec);
            Vec2.subtract(result, new Vec2(maxVec.x, maxVec.y), new Vec2(minVec.x, minVec.y));
          }
          return result;
        }
        initialize(_ref) {
          let {
            sprite,
            onTap,
            position,
            rotation
          } = _ref;
          this.sprite = sprite;
          this.onTap = onTap;
          this.position = position;
          this.rotation = rotation;
        }
        onClick(event) {
          this.disposeTweenScale?.();
          const {
            scale
          } = this.node;
          const tweenScale = tween(this.node).to(BUTTON_TRANSITION_TIME, {
            scale: scale.clone().multiplyScalar(BUTTON_TRANSITION_SCALE)
          }).to(BUTTON_TRANSITION_TIME, {
            scale: scale.clone()
          }).call(() => {
            this.disposeTweenScale = null;
          }).start();
          this.disposeTweenScale = () => {
            tweenScale.stop();
            this.disposeTweenScale = null;
            this.node.setScale(scale.clone());
          };
          this.onTap?.(event);
        }
        onLoad() {
          const spriteMaterial = assets.getMaterials('ui-sprite');
          this.spriteRenderer = this.node.addComponent(SpriteRenderer);
          this.spriteRenderer.setSharedMaterial(spriteMaterial, 0);
          this.spriteRenderer.spriteFrame = this.spriteFrame;
          this.spriteSize = this.getSpriteSize();
          this.collider = this.node.addComponent(BoxCollider);
          this.collider.size = new Vec3(this.spriteSize.x, this.spriteSize.y, 0.01);
          this.collider.isTrigger = true;
          this.node.layer = ELayer.UI_3D;
          this.node.on(EEventName.Tap, this.onClick);
          this.disposeSpriteChange = reaction(() => this.spriteFrame, spriteFrame => {
            const rotation = this.node.eulerAngles.clone();
            this.node.setRotationFromEuler(new Vec3(0, 0, 0));
            this.spriteRenderer.spriteFrame = spriteFrame;
            this.spriteSize = this.getSpriteSize();
            this.collider.size = new Vec3(this.spriteSize.x, this.spriteSize.y, 0.01);
            this.node.setRotationFromEuler(rotation);
          });
          this.disposeCameraListen = autorun(() => {
            if (this.rotation) {
              return;
            }
            const {
              worldCamera: camera
            } = DiWorld;
            this.node.setRotationFromEuler(new Vec3(camera.cameraRotation?.x || 0, camera.targetRotation?.y || 0, camera.targetRotation?.z || 0));
          });
        }
        render() {
          if (this.position) {
            this.node.setPosition(!this.rotation ? this.position.clone().add3f(0, (this.spriteSize?.y || 0) * 0.75, 0) : this.position);
          }
          if (this.rotation) {
            this.node.setRotationFromEuler(this.rotation);
          }
        }
      }, (_descriptor$i = _applyDecoratedDescriptor(_class2$j.prototype, "sprite", [property$1, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$d = _applyDecoratedDescriptor(_class2$j.prototype, "position", [_dec2$e, _dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$9 = _applyDecoratedDescriptor(_class2$j.prototype, "rotation", [_dec4$7, _dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$j.prototype, "spriteFrame", [computed], Object.getOwnPropertyDescriptor(_class2$j.prototype, "spriteFrame"), _class2$j.prototype), _applyDecoratedDescriptor(_class2$j.prototype, "initialize", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$j.prototype, "initialize"), _class2$j.prototype), _applyDecoratedDescriptor(_class2$j.prototype, "onClick", [bound], Object.getOwnPropertyDescriptor(_class2$j.prototype, "onClick"), _class2$j.prototype)), _class2$j)) || _class$w);
      cclegacy._RF.pop();
      var _dec$o, _class$x, _class2$k;
      cclegacy._RF.push({}, "53df1Pl7AJLFLhg81ZeScmA", "BuildingPreview", undefined);
      let BuildingPreview = (_dec$o = ccclass$1('BuildingPreview'), _dec$o(_class$x = (_class2$k = class BuildingPreview extends Building {
        constructor() {
          super(...arguments);
          this.rotateButton = void 0;
        }
        get buildingData() {
          const data = getBuildRoute()?.buildingData;
          if (data) {
            return {
              ...data,
              progress: BUILD_PROGRESS_MAX
            };
          }
        }
        get materials() {
          const material = assets.getMaterials('white');
          return [material];
        }
        onBuildingTap(event) {
          this.rotateButton.onClick(event);
        }
        render() {
          super.render();
          if (!this.rotateButton) {
            this.rotateButton = factoryComponent(Ui3D, this.node, {
              sprite: 'Button3DRotate',
              onTap: this.onTap
            });
          }
          runInAction(() => {
            this.rotateButton.position = new Vec3(0, this.buildingHeight, 0);
          });
        }
      }, (_applyDecoratedDescriptor(_class2$k.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class2$k.prototype, "buildingData"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "materials", [computed], Object.getOwnPropertyDescriptor(_class2$k.prototype, "materials"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "onBuildingTap", [bound], Object.getOwnPropertyDescriptor(_class2$k.prototype, "onBuildingTap"), _class2$k.prototype)), _class2$k)) || _class$x);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39b2eVu3q5KWKcNftXVPSVP", "buildingPrefabs", undefined);
      const buildingPrefabs = {
        [EBuilding.Castle]: 'building_destroyed',
        [EBuilding.Lumberjack]: 'building_tent',
        [EBuilding.Sawmill]: 'building_lumbermill',
        [EBuilding.Quarry]: 'building_scaffolding'
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "aa3014a3bdG5IVqFwvlMy+w", "IBuildingData", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "69cc7G2DHFDjKJvL83KxwDc", "EButtonSize", undefined);
      let EButtonSize = /*#__PURE__*/function (EButtonSize) {
        EButtonSize[EButtonSize["S80"] = 80] = "S80";
        EButtonSize[EButtonSize["S100"] = 100] = "S100";
        return EButtonSize;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d597WkGhhL94YQOldEkEU9", "factoryChildNode", undefined);
      function factoryChildNode(parent, setup) {
        const node = new Node();
        node.layer = parent.layer;
        setup?.(node);
        parent.addChild(node);
        return node;
      }
      cclegacy._RF.pop();
      var _dec$p, _dec2$f, _dec3$b, _dec4$8, _class$y, _class2$l, _descriptor$j, _descriptor2$e, _descriptor3$a, _descriptor4$7, _descriptor5$4;
      cclegacy._RF.push({}, "0f0a6a8T9pGMYV/n28DxTlr", "UiBackground", undefined);
      let UiBackground = (_dec$p = ccclass$1('UiBackground'), _dec2$f = property$1(SpriteFrame), _dec3$b = property$1(SpriteFrame), _dec4$8 = property$1(Color), _dec$p(_class$y = (_class2$l = class UiBackground extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "startSprite", _descriptor$j, this);
          _initializerDefineProperty(this, "endSprite", _descriptor2$e, this);
          _initializerDefineProperty(this, "color", _descriptor3$a, this);
          this.width = void 0;
          this.height = void 0;
          _initializerDefineProperty(this, "isVertical", _descriptor4$7, this);
          _initializerDefineProperty(this, "castShadow", _descriptor5$4, this);
        }
        get uiTransform() {
          return this.getComponent(UITransform);
        }
        get realWidth() {
          return this.uiTransform?.width || this.width || 0;
        }
        get realHeight() {
          return this.uiTransform?.height || this.height || 0;
        }
        addBackgroundChild(spriteFrame, options) {
          const {
            isVertical
          } = this;
          const {
            size,
            alignStart,
            alignEnd
          } = options;
          const node = factoryChildNode(this.node);
          const uiTransform = node.addComponent(UITransform);
          if (isVertical) {
            uiTransform.width = this.realWidth;
            uiTransform.height = size;
          } else {
            uiTransform.width = size;
            uiTransform.height = this.realHeight;
          }
          const widget = node.addComponent(Widget);
          if (isVertical) {
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.left = 0;
            widget.right = 0;
            if (alignStart !== undefined) {
              widget.isAlignTop = true;
              widget.top = alignStart;
            }
            if (alignEnd !== undefined) {
              widget.isAlignBottom = true;
              widget.bottom = alignEnd;
            }
          } else {
            widget.isAlignTop = true;
            widget.isAlignBottom = true;
            widget.top = 0;
            widget.bottom = 0;
            if (alignStart !== undefined) {
              widget.isAlignLeft = true;
              widget.left = alignStart;
            }
            if (alignEnd !== undefined) {
              widget.isAlignRight = true;
              widget.right = alignEnd;
            }
          }
          widget.updateAlignment();
          factorySprite(node, spriteFrame, this.color);
          return node;
        }
        onLoad() {
          if (this.castShadow) {
            this.node.layer = ELayer.UI_2D_SHADOW_CAST;
          }
          if (!this.getComponent(Widget)) {
            const widget = this.node.addComponent(Widget);
            widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true;
            widget.left = widget.right = widget.bottom = widget.top = 0;
            widget.updateAlignment();
          }
          const center = assets.getSprites('BgPixel');
          const {
            startSprite,
            endSprite,
            realWidth,
            realHeight,
            isVertical
          } = this;
          const startSize = isVertical ? startSprite.rect.height : startSprite.rect.width;
          const endSize = isVertical ? endSprite.rect.height : endSprite.rect.width;
          const realSize = isVertical ? realHeight : realWidth;
          this.addBackgroundChild(startSprite, {
            size: startSize,
            alignStart: 0
          });
          this.addBackgroundChild(center, {
            size: Math.max(realSize - startSize - endSize, 0),
            alignStart: startSize,
            alignEnd: endSize
          });
          this.addBackgroundChild(endSprite, {
            size: endSize,
            alignEnd: 0
          });
        }
        initialize(props) {
          Object.assign(this, props);
        }
      }, (_descriptor$j = _applyDecoratedDescriptor(_class2$l.prototype, "startSprite", [_dec2$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$e = _applyDecoratedDescriptor(_class2$l.prototype, "endSprite", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$a = _applyDecoratedDescriptor(_class2$l.prototype, "color", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.WHITE.clone();
        }
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class2$l.prototype, "isVertical", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$l.prototype, "castShadow", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$l.prototype, "uiTransform", [cached], Object.getOwnPropertyDescriptor(_class2$l.prototype, "uiTransform"), _class2$l.prototype)), _class2$l)) || _class$y);
      cclegacy._RF.pop();
      var _dec$q, _dec2$g, _dec3$c, _dec4$9, _dec5$7, _dec6$5, _dec7$3, _dec8$2, _dec9$2, _class$z, _class2$m, _descriptor$k, _descriptor2$f, _descriptor3$b, _descriptor4$8, _descriptor5$5, _descriptor6$3, _descriptor7$2, _descriptor8$2, _descriptor9$2, _descriptor10$2;
      cclegacy._RF.push({}, "755b9jEOORFtqOHD29h5paX", "ButtonAction", undefined);
      const AvailableSizes = [EButtonSize.S80, EButtonSize.S100];
      const ButtonSizeMap = {
        [EButtonSize.S80]: {
          leftBg: 'ButtonActionLeft_80',
          rightBg: 'ButtonActionRight_80',
          iconOnlyBg: 'ButtonActionIcon_80',
          contentSize: 36
        },
        [EButtonSize.S100]: {
          leftBg: 'ButtonActionLeft_100',
          rightBg: 'ButtonActionRight_100',
          iconOnlyBg: 'ButtonActionIcon_100',
          contentSize: 42
        }
      };
      const DISABLED_COLOR = new Color(32, 35, 51, 51);
      const DISABLED_LABEL_COLOR = new Color(DISABLED_COLOR.r, DISABLED_COLOR.g, DISABLED_COLOR.b, 76);
      let ButtonAction = (_dec$q = ccclass$1('ButtonAction'), _dec2$g = property$1({
        type: [EventHandler],
        displayOrder: 20
      }), _dec3$c = property$1(Color), _dec4$9 = property$1(CCString), _dec5$7 = property$1({
        visible() {
          return Boolean(this.label);
        }
      }), _dec6$5 = property$1(SpriteFrame), _dec7$3 = property$1({
        visible() {
          return Boolean(this.icon);
        }
      }), _dec8$2 = property$1({
        type: CCInteger,
        visible() {
          return Boolean(this.icon && !this.label);
        }
      }), _dec9$2 = property$1({
        type: CCBoolean,
        visible() {
          return Boolean(this.icon && !this.label);
        }
      }), _dec$q(_class$z = (_class2$m = class ButtonAction extends Observer {
        constructor() {
          super(...arguments);
          this.iconComponent = null;
          this.labelComponent = null;
          this.buttonComponent = null;
          this.bgComponent = null;
          this.bgNode = null;
          this.disabledBgNode = null;
          _initializerDefineProperty(this, "disabled", _descriptor$k, this);
          _initializerDefineProperty(this, "clickEvents", _descriptor2$f, this);
          _initializerDefineProperty(this, "color", _descriptor3$b, this);
          _initializerDefineProperty(this, "label", _descriptor4$8, this);
          _initializerDefineProperty(this, "labelColor", _descriptor5$5, this);
          _initializerDefineProperty(this, "icon", _descriptor6$3, this);
          _initializerDefineProperty(this, "iconColor", _descriptor7$2, this);
          _initializerDefineProperty(this, "iconSize", _descriptor8$2, this);
          _initializerDefineProperty(this, "iconBgRotated", _descriptor9$2, this);
          _initializerDefineProperty(this, "castShadow", _descriptor10$2, this);
        }
        get uiTransform() {
          return this.getComponent(UITransform);
        }
        get size() {
          const height = this.uiTransform?.height ?? 0;
          const sizes = AvailableSizes.slice().sort((a, b) => {
            return a - b;
          });
          let i = 0;
          while (sizes[i + 1] && sizes[i + 1] <= height) {
            i++;
          }
          return sizes[i];
        }
        __preload() {
          this.buttonComponent = this.addComponent(Button$1);
          if (this.buttonComponent) {
            this.buttonComponent.clickEvents = this.clickEvents.slice();
            this.buttonComponent.transition = Button$1.Transition.SCALE;
            this.buttonComponent.zoomScale = BUTTON_TRANSITION_SCALE;
            this.buttonComponent.duration = BUTTON_TRANSITION_TIME;
          }
          const {
            leftBg,
            rightBg,
            iconOnlyBg,
            contentSize
          } = ButtonSizeMap[this.size];
          this.bgNode = factoryChildNode(this.node, bgNode => {
            if (this.label) {
              const [startSprite, endSprite] = assets.getSprites([leftBg, rightBg]);
              this.bgComponent = bgNode.addComponent(UiBackground);
              this.bgComponent.initialize({
                startSprite,
                endSprite,
                color: this.color.clone(),
                castShadow: this.castShadow
              });
            } else {
              if (this.iconBgRotated) {
                bgNode.angle = 90;
              }
              const bgSprite = assets.getSprites(iconOnlyBg);
              if (this.castShadow) {
                bgNode.layer = ELayer.UI_2D_SHADOW_CAST;
              }
              const bgTransform = bgNode.addComponent(UITransform);
              bgTransform.height = this.size;
              bgTransform.width = Math.round(hexRadius(bgTransform.height));
              this.bgComponent = factorySprite(bgNode, bgSprite, this.color);
            }
          });
          if (this.label || this.icon) {
            factoryChildNode(this.node, wrapperNode => {
              const wrapperLayout = wrapperNode.addComponent(Layout);
              wrapperLayout.type = Layout.Type.HORIZONTAL;
              wrapperLayout.resizeMode = Layout.ResizeMode.CONTAINER;
              wrapperLayout.spacingX = 8;
              const wrapperWidget = wrapperNode.addComponent(Widget);
              wrapperWidget.isAlignHorizontalCenter = true;
              wrapperWidget.horizontalCenter = 0;
              wrapperWidget.isAlignVerticalCenter = true;
              wrapperWidget.verticalCenter = 0;
              if (this.icon) {
                factoryChildNode(wrapperNode, iconNode => {
                  const iconTransform = iconNode.addComponent(UITransform);
                  iconTransform.width = iconTransform.height = this.label ? contentSize : this.iconSize;
                  this.iconComponent = factorySprite(iconNode, this.icon, this.iconColor);
                });
              }
              if (this.label) {
                factoryChildNode(wrapperNode, labelNode => {
                  const font = assets.getFonts('Nunito-Bold');
                  this.labelComponent = labelNode.addComponent(UiLabel);
                  this.labelComponent.enableWrapText = false;
                  this.labelComponent.font = font;
                  this.labelComponent.color = this.labelColor;
                  this.labelComponent.fontSize = this.labelComponent.lineHeight = contentSize;
                  this.labelComponent.string = this.label;
                });
              }
            });
          }
          super.__preload();
        }
        render() {
          const isEnabled = !this.disabled;
          if (this.buttonComponent && this.buttonComponent.interactable !== isEnabled) {
            this.buttonComponent.interactable = isEnabled;
            if (this.labelComponent) {
              this.labelComponent.color = isEnabled ? this.labelColor : DISABLED_LABEL_COLOR;
            }
            if (!this.disabledBgNode && this.bgNode) {
              this.disabledBgNode = instantiate(this.bgNode);
              const sprites = getAllComponents(this.disabledBgNode, Sprite);
              sprites.forEach(sprite => sprite.color = DISABLED_COLOR.clone());
              const disabledBg = this.disabledBgNode.getComponent(UiBackground);
              if (disabledBg) {
                disabledBg.color = DISABLED_COLOR.clone();
              }
              this.disabledBgNode.addComponent(BlockInputEvents);
              this.node.addChild(this.disabledBgNode);
            }
            if (this.disabledBgNode) {
              this.disabledBgNode.active = !isEnabled;
            }
            if (this.bgNode) {
              this.bgNode.active = isEnabled;
            }
          }
        }
      }, (_descriptor$k = _applyDecoratedDescriptor(_class2$m.prototype, "disabled", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2$f = _applyDecoratedDescriptor(_class2$m.prototype, "clickEvents", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3$b = _applyDecoratedDescriptor(_class2$m.prototype, "color", [_dec3$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.WHITE.clone();
        }
      }), _descriptor4$8 = _applyDecoratedDescriptor(_class2$m.prototype, "label", [_dec4$9, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$m.prototype, "labelColor", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.WHITE.clone();
        }
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class2$m.prototype, "icon", [_dec6$5, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$m.prototype, "iconColor", [_dec7$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.WHITE.clone();
        }
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$m.prototype, "iconSize", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 36;
        }
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$m.prototype, "iconBgRotated", [_dec9$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor10$2 = _applyDecoratedDescriptor(_class2$m.prototype, "castShadow", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$m.prototype, "uiTransform", [cached], Object.getOwnPropertyDescriptor(_class2$m.prototype, "uiTransform"), _class2$m.prototype), _applyDecoratedDescriptor(_class2$m.prototype, "size", [cached], Object.getOwnPropertyDescriptor(_class2$m.prototype, "size"), _class2$m.prototype)), _class2$m)) || _class$z);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d8a96EY59NLuqPMPXDCgws+", "getAllPropertyDescriptors", undefined);
      function getAllPropertyDescriptors(obj, level) {
        if (level === void 0) {
          level = 0;
        }
        const prototype = Object.getPrototypeOf(obj);
        return {
          ...Object.getOwnPropertyDescriptors(obj),
          ...(prototype && level > 0 ? getAllPropertyDescriptors(prototype, level - 1) : {})
        };
      }
      cclegacy._RF.pop();
      var _dec$r, _dec2$h, _dec3$d, _dec4$a, _class$A, _class2$n, _descriptor$l, _descriptor2$g, _descriptor3$c;
      cclegacy._RF.push({}, "e4fa5U7an9KA7cME7ckjsyX", "ComponentPath", undefined);
      let ComponentPath = (_dec$r = ccclass$1('ComponentPath'), _dec2$h = property$1(Node), _dec3$d = property$1({
        type: Enum({}),
        visible() {
          const visible = Boolean(this.target);
          if (visible) {
            CCClass.Attr.setClassAttr(this, 'component', 'enumList', this.targetComponents);
          }
          return visible;
        }
      }), _dec4$a = property$1({
        type: Enum({}),
        visible() {
          const visible = Boolean(this.realComponent);
          if (visible) {
            CCClass.Attr.setClassAttr(this, 'property', 'enumList', this.componentProperties);
          }
          return visible;
        }
      }), _dec$r(_class$A = (_class2$n = class ComponentPath {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor$l, this);
          _initializerDefineProperty(this, "component", _descriptor2$g, this);
          _initializerDefineProperty(this, "property", _descriptor3$c, this);
        }
        get targetComponents() {
          if (!this.target) {
            return [];
          }
          const components = this.target.components;
          return components.map(component => {
            const name = component.constructor.name;
            return {
              name,
              value: name
            };
          });
        }
        get realComponent() {
          if (this.component) {
            return this.target.getComponent(this.component);
          }
          return null;
        }
        get componentProperties() {
          const component = this.realComponent;
          if (!component) {
            return [];
          }
          const properties = getAllPropertyDescriptors(component, 1);
          return Object.entries(properties).filter(_ref => {
            let [, desc] = _ref;
            return Boolean(desc.get);
          }).map(_ref2 => {
            let [name] = _ref2;
            return {
              name,
              value: name
            };
          });
        }
        exec() {
          const {
            realComponent: component,
            property
          } = this;
          if (component && property in component) {
            return component[property];
          }
          console.error(`Cannot find path ${property} in ${this.component}`);
          return null;
        }
      }, (_descriptor$l = _applyDecoratedDescriptor(_class2$n.prototype, "target", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$g = _applyDecoratedDescriptor(_class2$n.prototype, "component", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3$c = _applyDecoratedDescriptor(_class2$n.prototype, "property", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2$n)) || _class$A);
      cclegacy._RF.pop();
      var _dec$s, _dec2$i, _class$B, _class2$o, _descriptor$m, _descriptor2$h;
      cclegacy._RF.push({}, "104deVJP51N9YYi1f8x0Dcs", "ButtonDisabled", undefined);
      let ButtonDisabled = (_dec$s = ccclass$1('ButtonDisabled'), _dec2$i = property$1(ComponentPath), _dec$s(_class$B = (_class2$o = class ButtonDisabled extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "isDisabled", _descriptor$m, this);
          _initializerDefineProperty(this, "isReversed", _descriptor2$h, this);
        }
        get button() {
          return this.node.getComponent(ButtonAction);
        }
        render() {
          let isDisabled = Boolean(this.isDisabled.exec());
          if (this.isReversed) {
            isDisabled = !isDisabled;
          }
          runInAction(() => {
            if (this.button) {
              this.button.disabled = isDisabled;
            }
          });
        }
      }, (_descriptor$m = _applyDecoratedDescriptor(_class2$o.prototype, "isDisabled", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$h = _applyDecoratedDescriptor(_class2$o.prototype, "isReversed", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$o.prototype, "button", [cached], Object.getOwnPropertyDescriptor(_class2$o.prototype, "button"), _class2$o.prototype)), _class2$o)) || _class$B);
      cclegacy._RF.pop();
      var _dec$t, _dec2$j, _dec3$e, _dec4$b, _class$C, _class2$p, _descriptor$n, _descriptor2$i, _descriptor3$d;
      cclegacy._RF.push({}, "27b69+r4cZJcLFl4ulxqjjE", "ButtonTurn", undefined);
      const ROTATE_DURATION = 1;
      let ButtonTurn = (_dec$t = ccclass$1('ButtonTurn'), _dec2$j = property$1(Node), _dec3$e = property$1(Node), _dec4$b = property$1(Node), _dec$t(_class$C = (_class2$p = class ButtonTurn extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "outer", _descriptor$n, this);
          _initializerDefineProperty(this, "inner", _descriptor2$i, this);
          _initializerDefineProperty(this, "label", _descriptor3$d, this);
          this.fullTurn = 0;
          this.turnAnimation = null;
        }
        get startTurn() {
          return state.turnState.turn;
        }
        get angle() {
          return -60 * (state.turnState.turn - this.startTurn) + this.fullTurn * 360;
        }
        get labelComponent() {
          return this.label.getComponent(Label);
        }
        onLoad() {
          const {
            worldUi
          } = DiWorld;
          const wrapperWidget = worldUi.contentNode.getComponent(Widget);
          const widget = this.node.getComponent(Widget);
          if (widget && wrapperWidget) {
            widget.bottom -= wrapperWidget.bottom;
            widget.updateAlignment();
          }
          if (this.labelComponent) {
            this.labelComponent.string = state.turnState.date;
          }
        }
        render() {
          if (this.turnAnimation) {
            this.turnAnimation.stop();
            this.turnAnimation = null;
          }
          this.turnAnimation = tween(this.outer).to(ROTATE_DURATION, {
            angle: this.angle
          }, {
            easing: 'cubicInOut'
          }).call(() => {
            if (this.outer.angle <= -360) {
              this.fullTurn += Math.floor(Math.abs(this.outer.angle / 360));
              this.outer.angle = this.outer.angle % 360;
            }
            if (this.labelComponent) {
              this.labelComponent.string = state.turnState.date;
            }
          }).start();
        }
      }, (_descriptor$n = _applyDecoratedDescriptor(_class2$p.prototype, "outer", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$i = _applyDecoratedDescriptor(_class2$p.prototype, "inner", [_dec3$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$d = _applyDecoratedDescriptor(_class2$p.prototype, "label", [_dec4$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$p.prototype, "startTurn", [cached], Object.getOwnPropertyDescriptor(_class2$p.prototype, "startTurn"), _class2$p.prototype), _applyDecoratedDescriptor(_class2$p.prototype, "angle", [computed], Object.getOwnPropertyDescriptor(_class2$p.prototype, "angle"), _class2$p.prototype), _applyDecoratedDescriptor(_class2$p.prototype, "labelComponent", [cached], Object.getOwnPropertyDescriptor(_class2$p.prototype, "labelComponent"), _class2$p.prototype)), _class2$p)) || _class$C);
      cclegacy._RF.pop();
      var _dec$u, _class$D, _class2$q;
      cclegacy._RF.push({}, "cc834UUq+1NL7rgW0QmvKdx", "TileTest", undefined);
      const SCALE = new Vec3(0.96, 1, 0.96);
      let TileTest = (_dec$u = ccclass$1('TileTest'), _dec$u(_class$D = (_class2$q = class TileTest extends Observer {
        constructor() {
          super(...arguments);
          this.tile = void 0;
          this.testNode = void 0;
        }
        get isActive() {
          const page = getBuildRoute();
          return Boolean(page && !page.buildingCoords && page.buildingDb?.tileTest?.(this.tile));
        }
        initialize(_ref) {
          let {
            tile
          } = _ref;
          this.tile = tile;
        }
        render() {
          if (this.testNode) {
            this.testNode.active = Boolean(this.isActive);
          }
        }
        onLoad() {
          const prefab = assets.getPrefabs('hex_plane');
          const material = assets.getMaterials('ui-white-50');
          this.testNode = createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            scale: SCALE,
            position: new Vec3(0, this.tile.groundY + 0.01, 0)
          });
          this.testNode.active = false;
        }
      }, _applyDecoratedDescriptor(_class2$q.prototype, "isActive", [computed], Object.getOwnPropertyDescriptor(_class2$q.prototype, "isActive"), _class2$q.prototype), _class2$q)) || _class$D);
      cclegacy._RF.pop();
      var _dec$v, _dec2$k, _dec3$f, _class$E, _class2$r, _descriptor$o, _descriptor2$j;
      cclegacy._RF.push({}, "493fbN2t0ZDeaQ+Cfxxi1J2", "Tile", undefined);
      let Tile = (_dec$v = ccclass$1('Tile'), _dec2$k = observable.ref, _dec3$f = action.bound, _dec$v(_class$E = (_class2$r = class Tile extends Observer {
        constructor() {
          super(...arguments);
          this.hex = void 0;
          this.chunk = void 0;
          _initializerDefineProperty(this, "data", _descriptor$o, this);
          _initializerDefineProperty(this, "tileTest", _descriptor2$j, this);
        }
        get neighborsTiles() {
          return this.hex.neighbors.reduce((result, coords) => {
            const {
              tilesMap
            } = state.worldState;
            const hex = tilesMap.get(coords);
            if (hex) {
              result.push(hex.self);
            }
            return result;
          }, []);
        }
        get groundY() {
          return this.data.height * TILE_HEIGHT_MULTIPLIER + 1;
        }
        get biomeTile() {
          return this.data.biomeTile && biomeTiles[this.data.biomeTile.key] || BiomeTile;
        }
        get previewBuilding() {
          const route = getBuildRoute();
          if (route?.buildingTile === this) {
            return route.building;
          }
          return null;
        }
        initialize(_ref) {
          let {
            coords,
            chunk,
            data
          } = _ref;
          const {
            tilesMap
          } = state.worldState;
          this.chunk = chunk;
          this.data = data;
          this.hex = tilesMap.add(coords, this);
        }
        onTap() {
          if (this.tileTest?.isActive) {
            const route = getBuildRoute();
            if (route) {
              route.buildingCoords = toVec3(this.data.coords);
            }
            return;
          }
          if (this.previewBuilding) {
            const route = getBuildRoute();
            if (route) {
              route.buildingRotate = ((route.buildingRotate || 0) + 60) % 360;
            }
            return;
          }
        }
        render() {
          this.node.destroyAllChildren();
          factoryComponent(this.biomeTile, this.node, {
            tile: this,
            data: this.data.biomeTile,
            onTap: this.onTap
          });
          if (this.previewBuilding) {
            factoryComponent(BuildingPreview, this.node, {
              tile: this,
              onTap: this.onTap
            });
          } else if (this.data.building) {
            factoryComponent(Building, this.node, {
              data: this.data.building,
              tile: this,
              onTap: this.onTap
            });
          } else if (this.data.biomeObject) {
            factoryComponent(BiomeObject, this.node, {
              data: this.data.biomeObject,
              tile: this,
              onTap: this.onTap
            });
          }
          this.tileTest = factoryComponent(TileTest, this.node, {
            tile: this
          });
        }
        onLoad() {
          this.node.setWorldPosition(new Vec3(this.hex.positionX, 0, this.hex.positionZ));
        }
      }, (_descriptor$o = _applyDecoratedDescriptor(_class2$r.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$j = _applyDecoratedDescriptor(_class2$r.prototype, "tileTest", [_dec2$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$r.prototype, "neighborsTiles", [computed], Object.getOwnPropertyDescriptor(_class2$r.prototype, "neighborsTiles"), _class2$r.prototype), _applyDecoratedDescriptor(_class2$r.prototype, "groundY", [cached], Object.getOwnPropertyDescriptor(_class2$r.prototype, "groundY"), _class2$r.prototype), _applyDecoratedDescriptor(_class2$r.prototype, "biomeTile", [cached], Object.getOwnPropertyDescriptor(_class2$r.prototype, "biomeTile"), _class2$r.prototype), _applyDecoratedDescriptor(_class2$r.prototype, "previewBuilding", [computed], Object.getOwnPropertyDescriptor(_class2$r.prototype, "previewBuilding"), _class2$r.prototype), _applyDecoratedDescriptor(_class2$r.prototype, "onTap", [_dec3$f], Object.getOwnPropertyDescriptor(_class2$r.prototype, "onTap"), _class2$r.prototype)), _class2$r)) || _class$E);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "938d6xiAHxCKrcSP4n+xKTh", "findBiomeNeighbors", undefined);
      function findBiomeNeighbors(biomeKey, _ref) {
        let {
          neighbors
        } = _ref;
        const sizeMap = biomeSizeMaps[biomeKey];
        const isObject = BIOME_OBJECT_KEYS.includes(biomeKey);
        const biomeNeighbors = neighbors.reduce((result, tile) => {
          const biome = isObject ? tile.biomeObject : tile.biomeTile;
          if (biome?.key === biomeKey) {
            const {
              size,
              bordersSize
            } = getBiomeActualSize(tile.coords, biome.id, biomeKey, neighbors);
            result.push({
              biome: biome,
              size,
              bordersSize,
              diff: (sizeMap?.[biome.size] || 0) - size,
              tile
            });
          }
          return result;
        }, []);
        return biomeNeighbors.sort((a, b) => b.diff - a.diff);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bf232iUqyFASrpBLMMrmZw/", "randomChance", undefined);
      function randomChance(chances, args) {
        if (args === void 0) {
          args = [];
        }
        let rand = Math.random();
        for (const chance of chances) {
          const check = chance.chance(...args);
          if (rand <= check) {
            return chance.fn;
          }
          rand -= check;
        }
        return chances[chances.length - 1].fn;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1bfdef9CplL7YDamG2jIVM3", "randomizeBiomeSize", undefined);
      function randomizeBiomeSize(chances) {
        const [tinyChance, smallChance, mediumChange, largeChance] = chances;
        const randomize = [{
          name: 'large',
          chance: () => largeChance || 0,
          fn: () => EBiomeSize.Large
        }, {
          name: 'medium',
          chance: () => mediumChange || 0,
          fn: () => EBiomeSize.Medium
        }, {
          name: 'small',
          chance: () => smallChance || 0,
          fn: () => EBiomeSize.Small
        }, {
          name: 'tiny',
          chance: () => tinyChance || 0,
          fn: () => EBiomeSize.Tiny
        }];
        return randomChance(randomize)();
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5f059H66OJMNLJAuRItGYep", "guid", undefined);
      /* eslint-disable no-bitwise */

      function guid() {
        let d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "799a5CnYptCS6YKiRiXw05i", "isRandomChance", undefined);
      function isRandomChance(chance) {
        return Math.random() <= chance;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "07603MAKQpIurSgq/khjzkq", "randomFromRange", undefined);
      function randomFromRange(range, digits) {
        if (digits === void 0) {
          digits = 0;
        }
        const [min, max] = range;
        if (!digits) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return toFixedNumber(Math.random() * (max - min) + min, digits);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2b0d4MwN6BH7aC/unRbp7PG", "generateForest", undefined);
      const generateForest = (base, options) => {
        const forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        if (forests.some(forest => forest.diff <= 0)) {
          return base;
        }
        const forest = forests[0];
        const diff = forest?.diff || 0;
        const chance = 0.1 + 0.2 * diff;
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeObject: {
            id: forest?.biome.id || guid(),
            key: EBiomeObject.Forest,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: forest?.biome.size || randomizeBiomeSize([0.1, 0.5, 0.35, 0.05])
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "851b5Z3euBMRrYmOWFVETLE", "generateForestRocks", undefined);
      const generateForestRocks = (base, options) => {
        const forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        const forestRocks = findBiomeNeighbors(EBiomeObject.ForestRocks, options);
        if (forestRocks.some(forestRock => forestRock.diff <= 0)) {
          return base;
        }
        const chance = 0.05 + 0.1 * forests.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeObject: {
            id: forestRocks[0]?.biome.id || guid(),
            key: EBiomeObject.ForestRocks,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.8, 1.2], 1),
            size: randomizeBiomeSize([0.5, 0.5])
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "49d2ftw2cZHh4RRd+JcOIiA", "generateHill", undefined);
      const generateHill = (base, options) => {
        if (base.height < TILE_SEA_LEVEL) {
          return base;
        }
        const forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        const hills = findBiomeNeighbors(EBiomeObject.Hill, options);
        if (hills.some(hill => hill.diff <= 0)) {
          return base;
        }
        const chance = 0.01 + 0.03 * forests.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeObject: {
            id: guid(),
            key: EBiomeObject.Hill,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: EBiomeSize.Tiny
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "85c4e3TW5ZCgb0+LuX8kOC/", "consts", undefined);
      const WORLD_CENTER = new Vec3(0, 0, 0);
      const WORLD_CENTER_HEIGHT = 6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8541ae42y5P+6X1wkrNo3q2", "isNearCenter", undefined);
      function isNearWorldCenter(coords, distance) {
        if (distance === void 0) {
          distance = 2;
        }
        return Vec3.distance(coords, WORLD_CENTER) <= distance;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8dde6+kFJpES5xyjV7vWZ5c", "generateMountain", undefined);
      const generateNewMountain = base => ({
        ...base,
        biomeObject: {
          id: guid(),
          key: EBiomeObject.Mountain,
          rotate: randomFromRange([-180, 180]),
          scale: randomFromRange([1, 2], 1),
          size: randomizeBiomeSize([0.6, 0.25, 0.2, 0.05])
        }
      });
      const generateMountain = (base, options) => {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        const mountains = findBiomeNeighbors(EBiomeObject.Mountain, options);
        if (mountains.some(mountain => mountain.diff <= 0)) {
          return base;
        }
        const mountain = mountains[0];
        const diff = mountain?.diff || 0;
        const height = base.height - TILE_SEA_LEVEL;
        const chance = 0.015 * height + 0.2 * diff;
        if (!isRandomChance(chance)) {
          return base;
        }
        base = generateMountain(base, options);
        if (mountain && base.biomeObject) {
          base.biomeObject.size = mountain.biome.size;
          base.biomeObject.id = mountain.biome.id;
        }
        return base;
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "93a7570HAJHZLDET6FqNzWb", "generateRocks", undefined);
      const generateRocks = (base, options) => {
        const mountains = findBiomeNeighbors(EBiomeObject.Mountain, options);
        const rocks = findBiomeNeighbors(EBiomeObject.Rocks, options);
        if (rocks.some(rock => rock.diff <= 0)) {
          return base;
        }
        const rock = rocks[0];
        const diff = rock?.diff || 0;
        const chance = base.biomeTile?.key === EBiomeTile.Sand ? 0.1 : 0.05 + 0.2 * diff + 0.1 * mountains.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeObject: {
            id: rock?.biome.id || guid(),
            key: EBiomeObject.Rocks,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: rock?.biome.size || randomizeBiomeSize([0.5, 0.3, 0.15, 0.05]),
            data: isRandomChance(0.3) ? {
              small: true
            } : undefined
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d9e1CukQ1Cp6TyiLqwjiVh", "generateBiomeObject", undefined);
      const generateBiomeObject = (base, options) => {
        let result = base;
        if (!result.height) {
          return result;
        }
        if (result.biomeTile) {
          if (result.biomeTile.key === EBiomeTile.Sand) {
            result = generateMountain(result, options);
            if (!result.biomeObject) {
              result = generateRocks(result, options);
            }
            return result;
          }
          return result;
        }
        result = generateMountain(result, options);
        if (!result.biomeObject) {
          result = generateForest(result, options);
        }
        if (!result.biomeObject) {
          result = generateRocks(result, options);
        }
        if (!result.biomeObject) {
          result = generateForestRocks(result, options);
        }
        if (!result.biomeObject) {
          result = generateHill(result, options);
        }
        return result;
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b4c2a3fWrVOMoM2CkLm4jc9", "generateClay", undefined);
      const generateClay = (base, options) => {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        const clays = findBiomeNeighbors(EBiomeTile.Clay, options);
        if (clays.some(clay => clay.diff <= 0)) {
          return base;
        }
        const [clay] = clays;
        const heightDiff = TILE_SEA_LEVEL - base.height;
        if (heightDiff < 0) {
          return base;
        }
        let chance = 0.02 * heightDiff;
        if (clay?.size === 1) {
          chance = 1;
        } else if (clays.length && clays.length !== 1) {
          chance = 0.3 * clays.length;
        } else if (clay) {
          chance += 0.01 * (clay.diff || 0);
        }
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeTile: {
            id: clay?.biome.id || guid(),
            key: EBiomeTile.Clay,
            size: clay?.biome.size || randomizeBiomeSize([0.15, 0.5, 0.3, 0.05])
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "85e1ciGQ01C/6h8hmeW/E+i", "findMinHeight", undefined);
      function findMinHeight(tiles) {
        return (tiles || []).reduce((result, tile) => {
          if (!result || tile.height < result) {
            return tile.height;
          }
          return result;
        }, null);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4d7d3QDX6JCxKxp5T2Pu9Wn", "generateLake", undefined);
      const generateNewLake = (base, options) => ({
        ...base,
        height: findMinHeight(options.neighbors) || base.height,
        biomeTile: {
          id: guid(),
          key: EBiomeTile.Lake,
          size: randomizeBiomeSize([0.2, 0.5, 0.2, 0.1])
        }
      });
      const generateLake = (base, options) => {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        const seas = findBiomeNeighbors(EBiomeTile.Sea, options);
        if (seas.length) {
          return base;
        }
        const lakes = findBiomeNeighbors(EBiomeTile.Lake, options);
        if (lakes.some(lake => lake.diff <= 0)) {
          return base;
        }
        const [lake] = lakes;
        const heightDiff = TILE_HEIGHT_LIMITS[1] / 2 - Math.abs(base.height - TILE_SEA_LEVEL);
        let chance = heightDiff * 0.001;
        if (lake?.size === 1) {
          chance = 1;
        } else if (lakes.length && lakes.length !== 1) {
          chance = 0.5 * lakes.length;
        } else if (lake) {
          chance = 0;
        }
        if (!isRandomChance(chance)) {
          return base;
        }
        if (lake) {
          return {
            ...base,
            height: lake.tile.height,
            biomeTile: {
              id: lake.biome.id,
              key: EBiomeTile.Lake,
              size: lake.biome.size
            }
          };
        }
        return generateNewLake(base, options);
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18207bYyGhBHJM3JUYNwX3s", "findWaterNeighbors", undefined);
      function findWaterNeighbors(options) {
        return waterTiles.reduce((result, biome) => [...result, ...findBiomeNeighbors(biome, options)], []);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "48985ketEJEsoXCI5eSW8vM", "generateSea", undefined);
      const MIN_SEA_DISTANCE = 4;
      const generateSea = (base, options) => {
        const {
          neighbors
        } = options;
        const distance = Vec3.distance(base.coords, WORLD_CENTER);
        if (distance < MIN_SEA_DISTANCE) {
          return base;
        }
        const minHeight = findMinHeight(neighbors);
        if (minHeight && minHeight < TILE_SEA_LEVEL) {
          return base;
        }
        const lakes = findBiomeNeighbors(EBiomeTile.Lake, options);
        if (lakes.length) {
          return base;
        }
        const seas = findBiomeNeighbors(EBiomeTile.Sea, options);
        const rivers = findBiomeNeighbors(EBiomeTile.River, options);
        if (!seas.length) {
          const {
            tilesMap
          } = state.worldState;
          const hasSea = tilesMap.values.some(hex => hex.self.data.biomeTile?.key === EBiomeTile.Sea);
          if (hasSea) {
            return base;
          }
          const riversSize = rivers.reduce((result, _ref) => {
            let {
              size
            } = _ref;
            return result + size;
          }, 0);
          const chance = 0.0001 * distance + riversSize * 0.0005;
          if (!isRandomChance(chance)) {
            return base;
          }
          return {
            ...base,
            height: TILE_SEA_LEVEL,
            biomeTile: {
              id: guid(),
              key: EBiomeTile.Sea,
              size: EBiomeSize.Large
            }
          };
        }
        const [sea] = seas;
        const chance = seas.length * 0.6 + clamp(sea.diff, [-10]) * 0.05 + clamp(20 - sea.bordersSize, [0]) * 0.1;
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          height: TILE_SEA_LEVEL,
          biomeTile: {
            id: sea.biome.id,
            key: EBiomeTile.Sea,
            size: EBiomeSize.Large
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bdfa1yU4XBMSIsIw/hupcCp", "randomFromArray", undefined);
      function randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "eea01XqEmpDgpCpMntAOWV1", "generateRiver", undefined);
      function randomizeRiverSize() {
        return randomizeBiomeSize([0.2, 0.5, 0.2, 0.1]);
      }
      function randomizeRiverHeight(river, diff) {
        const {
          height
        } = river.tile;
        if (river.biome.data?.to?.length > 1) {
          return height;
        }
        if (isRandomChance(0.1)) {
          return clamp(height + diff, [TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS[1] - 1]);
        }
        return height;
      }
      function randomizeFrom(neighbors, options) {
        const candidates = neighbors.filter(neighbor => {
          if (options.neighbors.some(_ref => {
            let {
              coords
            } = _ref;
            return Vec3.equals(neighbor, coords);
          })) {
            return false;
          }
          return true;
        });
        if (!candidates.length) {
          return null;
        }
        const from = randomFromArray(candidates);
        return from;
      }
      function randomizeTo(baseCoords, from, neighbors, options) {
        neighbors = neighbors.filter(neighbor => {
          if (Vec3.equals(neighbor, from)) {
            return false;
          }
          if (options.neighbors.some(_ref2 => {
            let {
              coords
            } = _ref2;
            return Vec3.equals(neighbor, coords);
          })) {
            return false;
          }
          return true;
        });
        const toLength = isRandomChance(0.04) ? 2 : 1;
        const to = [];

        // straight
        const straight = toVec3(from).subtract3f(baseCoords.x, baseCoords.y, baseCoords.z).negative().add3f(baseCoords.x, baseCoords.y, baseCoords.z);
        neighbors = neighbors.filter(neighbor => {
          if (Vec3.distance(straight, neighbor) < 2) {
            return true;
          }
          return false;
        });
        if (isRandomChance(0.6)) {
          const straightNeigbor = neighbors.find(neighbor => Vec3.equals(straight, neighbor));
          if (straightNeigbor) {
            neighbors = neighbors.filter(neighbor => !Vec3.equals(straightNeigbor, neighbor));
            to.push(straightNeigbor);
          }
        }
        for (let i = to.length; i < toLength; i++) {
          if (neighbors.length) {
            const coords = randomFromArray(neighbors);
            neighbors = neighbors.filter(neighbor => !Vec3.equals(coords, neighbor));
            to.push(coords);
          }
        }
        return to;
      }
      const generateRiver = (base, options) => {
        const {
          neighbors
        } = options;
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        const hex = new HexagonTile(null, toVec3(base.coords), HEX_OPTIONS);
        const rivers = findBiomeNeighbors(EBiomeTile.River, options);
        const waters = findWaterNeighbors(options);
        const water = waters.length ? waters[0] : null;
        if (!rivers.length) {
          const chance = 0.03 + 0.005 * waters.length;
          if (!isRandomChance(chance)) {
            return base;
          }
          const height = water?.tile.height || findMinHeight(neighbors) || base.height;
          if (height < TILE_SEA_LEVEL || height === TILE_HEIGHT_LIMITS[1]) {
            return base;
          }
          const from = water?.tile.coords || randomizeFrom(hex.neighbors, options);
          if (!from) {
            return base;
          }
          const to = randomizeTo(base.coords, from, hex.neighbors, options);
          if (to.every(toCoords => neighbors.some(neighbor => Vec3.equals(toCoords, neighbor.coords)))) {
            return base;
          }
          return {
            ...base,
            height,
            biomeTile: {
              id: guid(),
              key: EBiomeTile.River,
              size: randomizeRiverSize(),
              data: {
                from,
                to
              }
            }
          };
        }
        const coords = toVec3(base.coords);
        const riverTo = rivers.find(river => {
          const from = river.biome.data?.from;
          return from && Vec3.equals(coords, from);
        });
        if (riverTo) {
          const isEnding = riverTo.diff < 0;
          const height = randomizeRiverHeight(riverTo, 1);
          if (isEnding) {
            if (height > TILE_SEA_LEVEL && isRandomChance(0.5)) {
              base.height = height;
              return generateNewMountain(base);
            }
            if (isRandomChance(0.3)) {
              base.height = height;
              return generateNewLake(base, options);
            }
            base.height = clamp(riverTo.tile.height + 1, [TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS[1] - 1]);
            return base;
          }
          return {
            ...base,
            height: height,
            biomeTile: {
              id: riverTo.biome.id,
              key: EBiomeTile.River,
              size: riverTo.biome.size,
              data: {
                from: water?.tile.coords || randomizeFrom(hex.neighbors, options),
                to: [riverTo.tile.coords]
              }
            }
          };
        }
        const riverFrom = rivers.find(river => {
          const to = river.biome.data?.to;
          return to && to.some(toCoords => Vec3.equals(coords, toCoords));
        });
        if (riverFrom) {
          const isEnding = riverFrom.diff < 0;
          const height = randomizeRiverHeight(riverFrom, -1);
          if (isEnding) {
            if (height === TILE_SEA_LEVEL) {
              base.height = height;
              base = generateSea(base, options);
              if (base.biomeTile) {
                return base;
              }
            }
            const minHeight = findMinHeight(options.neighbors);
            if (!minHeight || minHeight < height && isRandomChance(0.5)) {
              base.height = height;
              return generateNewLake(base, options);
            }
          }
          let to = [];
          if (!isEnding) {
            if (waters.length) {
              to = randomizeTo(base.coords, riverFrom.tile.coords, waters.map(_ref3 => {
                let {
                  tile
                } = _ref3;
                return tile.coords;
              }), options);
            }
            if (!to.length) {
              to = randomizeTo(base.coords, riverFrom.tile.coords, hex.neighbors, options);
            }
          }
          const riverFromToIndex = riverFrom.biome.data?.to?.findIndex(toCoords => Vec3.equals(coords, toCoords));
          return {
            ...base,
            height,
            biomeTile: {
              id: !riverFromToIndex ? riverFrom.biome.id : guid(),
              key: EBiomeTile.River,
              size: !riverFromToIndex ? riverFrom.biome.size : randomizeRiverSize(),
              data: {
                from: riverFrom.tile.coords,
                to,
                ...(!riverFromToIndex ? {} : {
                  fromId: riverFrom.biome.id
                })
              }
            }
          };
        }
        return base;
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f6728mNeH5B/oosXh5Q+Zr1", "generateSand", undefined);
      const generateSand = (base, options) => {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        const sands = findBiomeNeighbors(EBiomeTile.Sand, options);
        const waters = findWaterNeighbors(options);
        if (!waters.length && sands.some(sand => sand.diff <= 0)) {
          return base;
        }
        const [sand] = sands;
        let chance = 0.002 + 0.1 * waters.length;
        if (waters.some(_ref => {
          let {
            biome
          } = _ref;
          return biome.key === EBiomeTile.Sea;
        })) {
          if (base.height > TILE_SEA_LEVEL) {
            return base;
          }
          chance = 0.9;
        } else if (sand?.size === 1) {
          chance = 1;
        } else if (sands.length && sands.length !== 1) {
          chance = 0.3 * sands.length;
        } else if (sand) {
          chance += 0.01 * clamp(sand.diff || 0, [0]);
        }
        if (!isRandomChance(chance)) {
          return base;
        }
        return {
          ...base,
          biomeTile: {
            id: sand?.biome.id || guid(),
            key: EBiomeTile.Sand,
            size: sand?.biome.size || randomizeBiomeSize([0.2, 0.5, 0.2, 0.1])
          }
        };
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d50e4zg9lxErrjttg7HXf8m", "generateBiomeTile", undefined);
      const generateBiomeTile = (base, options) => {
        let result = base;
        if (!result.height) {
          return result;
        }
        result = generateSea(result, options);
        if (!result.biomeTile) {
          result = generateRiver(result, options);
          if (result.biomeTile?.key === EBiomeTile.River) {
            for (const tile of options.chunkTiles || []) {
              if (!tile.biomeTile || tile.biomeTile.key !== EBiomeTile.River) {
                // If we already generated end or start of rivers
                const target = result.biomeTile.data?.from;
                if (target && Vec3.equals(target, tile.coords)) {
                  if (tile.height <= result.height) {
                    tile.height = clamp(result.height + 1, TILE_HEIGHT_LIMITS);
                  }
                }
              }
            }
          }
        }
        if (!result.biomeTile) {
          result = generateLake(result, options);
        }
        if (result.biomeTile && waterTiles.includes(result.biomeTile.key)) {
          const {
            height
          } = result;
          const {
            neighbors,
            chunkTiles
          } = options;
          const isSea = result.biomeTile.key === EBiomeTile.Sea;
          const minHeight = findMinHeight(neighbors);
          if (minHeight && minHeight < height) {
            // Water biomes cannot have neighboring tiles below, and old "neighbor"@" tiles cannot be changed
            result.biomeTile = undefined;
          } else {
            // Last chance to change what we've generated before this water tile – we can lower the height or try generating a dependent biome again
            for (const tile of chunkTiles || []) {
              if (tile.height < height) {
                tile.height = height;
              }
              if (isSea && !tile.biomeTile && !tile.biomeObject) {
                const {
                  biomeTile
                } = generateSand(tile, {
                  neighbors: [result]
                });
                tile.biomeTile = biomeTile;
              }
            }
          }
        }
        if (!result.biomeTile) {
          result = generateSand(result, options);
        }
        if (!result.biomeTile && !result.biomeObject) {
          result = generateClay(base, options);
        }
        return result;
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6632e7TiBBA15EP8BtSWXvY", "generateTileBaseHeight", undefined);
      const BASE_TILE_HEIGHTS = [2, 3, 4, 5];
      function generateTileBaseHeight() {
        return randomFromArray(BASE_TILE_HEIGHTS);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2172e4AgVxGbp7mEMw+k97o", "generateTileHeight", undefined);
      const CHANCES = [{
        name: 'higher',
        chance: height => {
          const diff = TILE_SEA_LEVEL - height;
          return 0.2 + 0.03 * diff;
        },
        fn: height => height + 1
      }, {
        name: 'lower',
        chance: height => {
          const diff = height - TILE_SEA_LEVEL;
          return 0.2 + 0.03 * diff;
        },
        fn: height => height - 1
      }, {
        name: 'same',
        chance: () => 1,
        fn: height => height
      }];
      function getMainNeighbor(neighbors) {
        const center = neighbors.find(_ref => {
          let {
            coords
          } = _ref;
          return Vec3.equals(WORLD_CENTER, coords);
        });
        if (center) {
          return center;
        }
        return randomFromArray(neighbors);
      }
      function generateTileHeight(options) {
        const {
          neighbors
        } = options;
        const waters = findWaterNeighbors(options);
        const main = getMainNeighbor(neighbors);
        const height = main?.height ?? TILE_SEA_LEVEL;
        const fn = randomChance(CHANCES, [height]);
        const resultHeight = clamp(fn(height), TILE_HEIGHT_LIMITS);
        if (waters.length) {
          const waterHeight = waters.reduce((result, water) => {
            if (!result || water.tile.height > result) {
              return water.tile.height;
            }
            return result;
          }, null);
          if (waterHeight && resultHeight < waterHeight) {
            return waterHeight;
          }
        }
        return resultHeight;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "189072WZf5DV4zq/xUerZr8", "generateTile", undefined);
      function generateTile(coords, options) {
        const height = generateTileHeight(options);
        const baseHeight = generateTileBaseHeight();
        let base = {
          coords,
          height,
          baseHeight
        };
        base = generateBiomeTile(base, options);
        base = generateBiomeObject(base, options);
        return base;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b913aYAJ/lCPp1Kx/1Sf0+4", "sortCoords", undefined);
      function sortCoords(coords) {
        return coords.slice().sort((a, b) => Vec3.distance(a, WORLD_CENTER) - Vec3.distance(b, WORLD_CENTER));
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "17433x+A2JNQ7ZXBmzhlpJB", "generateChunk", undefined);
      const BIOME_PRIORITY = {
        [EBiomeTile.River]: 1
      };
      function calcNeighborsScore(item) {
        const {
          tilesMap
        } = state.worldState;
        const neighbors = item.neighbors.map(coords => tilesMap.get(coords)).filter(Boolean);
        return neighbors.reduce((result, neighbor) => {
          const biomeKey = neighbor?.self.data?.biomeTile?.key;
          const score = biomeKey && BIOME_PRIORITY[biomeKey] || 0;
          return result + score;
        }, 0);
      }
      function generateChunk(center) {
        const chunk = new HexagonChunk(null, center, HEX_OPTIONS);
        const tiles = [];
        const sortedCoords = sortCoords(chunk.tiles);
        sortedCoords.map(tileCoords => new HexagonTile(null, tileCoords, HEX_OPTIONS)).sort((a, b) => calcNeighborsScore(b) - calcNeighborsScore(a)).forEach(fakeTile => {
          const neighbors = [fakeTile.coords, ...fakeTile.neighbors].reduce((result, nearCoords) => {
            const {
              tilesMap
            } = state.worldState;
            const tile = tilesMap.get(nearCoords);
            if (tile) {
              result.push(tile.self.data);
            } else {
              const alreadyAdded = tiles.find(_ref => {
                let {
                  coords
                } = _ref;
                return Vec3.equals(nearCoords, coords);
              });
              if (alreadyAdded) {
                result.push(alreadyAdded);
              }
            }
            return result;
          }, []);
          tiles.push(generateTile(fakeTile.coords, {
            neighbors,
            chunkTiles: tiles
          }));
        });
        return {
          coords: center,
          tiles
        };
      }
      cclegacy._RF.pop();
      var _dec$w, _class$F;
      cclegacy._RF.push({}, "43a2bVCLYFCiL+wNb5WvHFN", "ChunkNewButton", undefined);
      let ChunkNewButton = (_dec$w = ccclass$1('ChunkNewButton'), _dec$w(_class$F = class ChunkNewButton extends Observer {
        constructor() {
          super(...arguments);
          this.ui = void 0;
          this.hexHeight = void 0;
          this.hexRadius = void 0;
          this.onClick = void 0;
        }
        initialize(_ref) {
          let {
            hexHeight,
            hexRadius,
            onClick
          } = _ref;
          this.hexHeight = hexHeight;
          this.hexRadius = hexRadius;
          this.onClick = onClick;
        }
        onLoad() {
          this.node.setPosition(new Vec3(0, TILE_BASE_HEIGHT + TILE_HEIGHT_MULTIPLIER * TILE_SEA_LEVEL, 0));
          this.ui = factoryComponent(Ui3D, this.node, {
            sprite: 'newChunkButton',
            onTap: this.onClick,
            rotation: new Vec3(90, 30, 0)
          });
          this.ui.node.active = false;
        }
        render() {
          const isActive = Boolean(getBuildRoute()?.isChunkMode);
          if (this.ui) {
            this.ui.node.active = isActive;
          }
        }
      }) || _class$F);
      cclegacy._RF.pop();
      var _dec$x, _dec2$l, _class$G, _class2$s, _descriptor$p;
      cclegacy._RF.push({}, "32689hlOXFBX5YrLKIV3Tdr", "Chunk", undefined);
      let Chunk = (_dec$x = ccclass$1('Chunk'), _dec2$l = action.bound, _dec$x(_class$G = (_class2$s = class Chunk extends Observer {
        constructor() {
          super(...arguments);
          this.hex = void 0;
          this.tiles = [];
          _initializerDefineProperty(this, "data", _descriptor$p, this);
        }
        initialize(_ref) {
          let {
            coords,
            data
          } = _ref;
          const {
            chunksMap
          } = state.worldState;
          this.hex = chunksMap.add(coords, this);
          this.data = data;
        }
        draw() {
          if (!this.data) {
            factoryComponent(ChunkNewButton, this.node, {
              hexHeight: this.hex.hexHeight,
              hexRadius: this.hex.hexRadius,
              onClick: this.generate
            });
            return;
          }
          this.tiles = this.data.tiles.map(tileData => factoryComponent(Tile, this.node, {
            coords: toVec3(tileData.coords),
            chunk: this,
            data: tileData
          }));
          this.hex.neighbors.forEach(coords => {
            const {
              chunksMap
            } = state.worldState;
            if (!chunksMap.get(coords) && this.node.parent) {
              const chunk = factoryComponent(Chunk, this.node.parent, {
                coords,
                data: null
              });
              chunk.draw();
            }
          });
        }
        generate() {
          if (!this.data) {
            this.node.destroyAllChildren();
            this.data = generateChunk(this.hex.coords);
            this.draw();
          }
        }
        onLoad() {
          this.node.setWorldPosition(new Vec3(this.hex.positionX, 0, this.hex.positionZ));
        }
      }, (_descriptor$p = _applyDecoratedDescriptor(_class2$s.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$s.prototype, "generate", [_dec2$l], Object.getOwnPropertyDescriptor(_class2$s.prototype, "generate"), _class2$s.prototype)), _class2$s)) || _class$G);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d3147CSTXdEyp/MQNHJualU", "IChunkData", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5f275gAnLZBv73Q4pf+fR5w", "CustomBlurPass", undefined);
      const FORMAT = gfx.Format.RGBA8;
      class CustomBlurPass extends postProcess.SettingPass {
        constructor(settingClass) {
          super();
          this.settingClass = void 0;
          this.name = 'CustomBlurPass';
          this.outputNames = ['CustomBlurMap'];
          this.settingClass = settingClass;
        }
        get setting() {
          return this.getSetting(this.settingClass);
        }
        checkEnable(camera) {
          let enable = super.checkEnable(camera);
          if (postProcess.disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable && this.setting.material != null;
        }
        render(camera, _ppl) {
          const setting = this.setting;
          if (!setting.material) {
            return;
          }
          let passContext = this.context;
          passContext.material = setting.material;
          const cameraID = this.getCameraUniqueID(camera);
          passContext.clearBlack();
          let input = this.lastPass.slotName(camera, 0);
          for (let i = 0; i < setting.iterations; ++i) {
            passContext.updatePassViewPort().addRenderPass(`blur-x`, `blur-x${cameraID}`).setPassInput(input, 'outputResultMap').addRasterView('CustomBlurMap_TMP', FORMAT).blitScreen(0).version();
            passContext.updatePassViewPort().addRenderPass(`blur-y`, `blur-y${cameraID}`).setPassInput(input, 'outputResultMap').setPassInput('CustomBlurMap_TMP', 'outputResultMap').addRasterView(this.slotName(camera), FORMAT).blitScreen(1).version();
            input = this.slotName(camera);
          }
        }
      }
      cclegacy._RF.pop();
      var _dec$y, _dec2$m, _dec3$g, _dec4$c, _dec5$8, _class$H, _class2$t, _descriptor$q, _descriptor2$k, _descriptor3$e;
      cclegacy._RF.push({}, "b09c2CC1L5B9ZWbGAmawOR9", "CustomBlur", undefined);
      const {
        ccclass: ccclass$2,
        property: property$2,
        menu,
        executeInEditMode
      } = _decorator;
      let CustomBlur = (_dec$y = ccclass$2('CustomBlur'), _dec2$m = menu('PostProcess/CustomBlur'), _dec3$g = property$2(RenderTexture), _dec4$c = property$2(EffectAsset), _dec5$8 = property$2(EffectAsset), _dec$y(_class$H = _dec2$m(_class$H = executeInEditMode(_class$H = (_class2$t = class CustomBlur extends postProcess.PostProcessSetting {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "mask", _descriptor$q, this);
          _initializerDefineProperty(this, "_effectAsset", _descriptor2$k, this);
          _initializerDefineProperty(this, "iterations", _descriptor3$e, this);
          this._material = null;
          this._blurParams = new Vec4(4.0, 0.0, 0.0, 0.0);
        }
        get effect() {
          return this._effectAsset;
        }
        set effect(value) {
          this._effectAsset = value;
          if (!this._effectAsset) {
            this._material?.destroy();
            this._material = null;
          } else {
            if (this._material) {
              this._material.reset({
                effectAsset: this._effectAsset
              });
            } else {
              this._material = new Material();
              this._material.initialize({
                effectAsset: this._effectAsset
              });
            }
            this.updateMaterial();
          }
        }
        set blurRadius(value) {
          this._blurParams.x = value;
          this.updateMaterial();
        }
        get blurRadius() {
          return this._blurParams.x;
        }
        get material() {
          return this._material;
        }
        get blurParams() {
          return this._blurParams;
        }
        updateMaterial() {
          if (!this._material) {
            return;
          }
          if (this.mask) {
            this._material.setProperty('maskTexture', this.mask);
          }
          this._material.setProperty('blurParams', this.blurParams);
        }
        start() {
          if (!this._material) {
            this._material = new Material();
            this._material.initialize({
              effectAsset: this._effectAsset
            });
            this.updateMaterial();
          }
          let builder = rendering.getCustomPipeline('Custom');
          if (builder) {
            builder.insertPass(new CustomBlurPass(CustomBlur), postProcess.BlitScreenPass);
          }
        }
      }, (_descriptor$q = _applyDecoratedDescriptor(_class2$t.prototype, "mask", [_dec3$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$k = _applyDecoratedDescriptor(_class2$t.prototype, "_effectAsset", [_dec4$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$t.prototype, "effect", [_dec5$8], Object.getOwnPropertyDescriptor(_class2$t.prototype, "effect"), _class2$t.prototype), _descriptor3$e = _applyDecoratedDescriptor(_class2$t.prototype, "iterations", [property$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _applyDecoratedDescriptor(_class2$t.prototype, "blurRadius", [property$2], Object.getOwnPropertyDescriptor(_class2$t.prototype, "blurRadius"), _class2$t.prototype)), _class2$t)) || _class$H) || _class$H) || _class$H);
      cclegacy._RF.pop();
      var _dec$z, _class$I;
      cclegacy._RF.push({}, "3f4bclSvUNEfoooFgwIR97r", "LoadingUi", undefined);
      let LoadingUi = (_dec$z = ccclass$1('LoadingUi'), _dec$z(_class$I = class LoadingUi extends Ui {
        async onLoad() {
          await assets.wait;
          director.loadScene('WorldScene');
        }
      }) || _class$I);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "78e9dffiX9FkKY1sTQ8AhGP", "ITileData", undefined);
      cclegacy._RF.pop();
      var _dec$A, _dec2$n, _class$J, _class2$u, _descriptor$r, _descriptor2$l;
      cclegacy._RF.push({}, "e2f47MVBJ9E2KkO6ZMR9bj8", "UiActive", undefined);
      let UiActive = (_dec$A = ccclass$1('UiActive'), _dec2$n = property$1(ComponentPath), _dec$A(_class$J = (_class2$u = class UiActive extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "isActive", _descriptor$r, this);
          _initializerDefineProperty(this, "isReversed", _descriptor2$l, this);
        }
        render() {
          let isActive = Boolean(this.isActive.exec());
          if (this.isReversed) {
            isActive = !isActive;
          }
          this.node.active = isActive;
        }
      }, (_descriptor$r = _applyDecoratedDescriptor(_class2$u.prototype, "isActive", [_dec2$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$l = _applyDecoratedDescriptor(_class2$u.prototype, "isReversed", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2$u)) || _class$J);
      cclegacy._RF.pop();
      var _dec$B, _class$K, _class2$v, _descriptor$s, _descriptor2$m, _descriptor3$f, _descriptor4$9;
      cclegacy._RF.push({}, "0a38butx1lCrbVP01WssZJZ", "UiActiveAnimate", undefined);
      let UiActiveAnimate = (_dec$B = ccclass$1('UiActiveAnimate'), _dec$B(_class$K = (_class2$v = class UiActiveAnimate extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "from", _descriptor$s, this);
          _initializerDefineProperty(this, "to", _descriptor2$m, this);
          _initializerDefineProperty(this, "duration", _descriptor3$f, this);
          _initializerDefineProperty(this, "delay", _descriptor4$9, this);
        }
        onLoad() {
          this.node.active = this.from;
          tween(this.node).delay(this.delay).to(this.duration, {}).call(() => this.node.active = this.to).start();
        }
      }, (_descriptor$s = _applyDecoratedDescriptor(_class2$v.prototype, "from", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2$m = _applyDecoratedDescriptor(_class2$v.prototype, "to", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor3$f = _applyDecoratedDescriptor(_class2$v.prototype, "duration", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4$9 = _applyDecoratedDescriptor(_class2$v.prototype, "delay", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2$v)) || _class$K);
      cclegacy._RF.pop();
      var _dec$C, _dec2$o, _class$L, _class2$w, _descriptor$t, _descriptor2$n, _descriptor3$g, _descriptor4$a;
      cclegacy._RF.push({}, "22915YeWz5EhaB0gLuJO0jd", "UiPositionAnimate", undefined);
      let UiPositionAnimate = (_dec$C = ccclass$1('UiPositionAnimate'), _dec2$o = property$1(Vec3), _dec$C(_class$L = (_class2$w = class UiPositionAnimate extends Observer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "by", _descriptor$t, this);
          _initializerDefineProperty(this, "duration", _descriptor2$n, this);
          _initializerDefineProperty(this, "delay", _descriptor3$g, this);
          _initializerDefineProperty(this, "easing", _descriptor4$a, this);
        }
        onLoad() {
          const pos = this.node.position.clone();
          this.node.setPosition(pos.clone().add(this.by));
          tween(this.node).to(this.duration, {
            position: pos
          }, {
            easing: this.easing
          }).start();
        }
      }, (_descriptor$t = _applyDecoratedDescriptor(_class2$w.prototype, "by", [_dec2$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2$n = _applyDecoratedDescriptor(_class2$w.prototype, "duration", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3$g = _applyDecoratedDescriptor(_class2$w.prototype, "delay", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4$a = _applyDecoratedDescriptor(_class2$w.prototype, "easing", [property$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'cubicIn';
        }
      })), _class2$w)) || _class$L);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ffd76oUxTFPW5ZL83LGiHPV", "generateWorldCenterTile", undefined);
      function generateWorldCenterTile(coords) {
        return {
          coords,
          height: WORLD_CENTER_HEIGHT,
          baseHeight: generateTileBaseHeight(),
          building: {
            key: EBuilding.Castle
          }
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ea0d9B/ospIxawiryVKZG2L", "generateWorldCenterChunk", undefined);
      function generateWorldCenterChunk(center) {
        const chunk = new HexagonChunk(null, center, HEX_OPTIONS);
        const tiles = [generateWorldCenterTile(center)];
        chunk.tiles.forEach(coords => {
          if (coords.equals(center)) {
            return;
          }
          tiles.push(generateTile(coords, {
            neighbors: tiles
          }));
        });
        return {
          coords: center,
          tiles
        };
      }
      cclegacy._RF.pop();
      var _dec$D, _class$M;
      cclegacy._RF.push({}, "84a89e9iPxMErnCjRvaF7CE", "World", undefined);
      let World = (_dec$D = ccclass$1('World'), _dec$D(_class$M = class World extends Observer {
        onLoad() {
          const {
            node
          } = this;
          const centerChunk = generateWorldCenterChunk(WORLD_CENTER.clone());
          const chunk = factoryComponent(Chunk, node, {
            coords: WORLD_CENTER.clone(),
            data: centerChunk
          });
          chunk.draw();
        }
      }) || _class$M);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39534ODzEpN+oWEEKh7lZ8a", "consts", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a1da5baSRRIaraersDNU5Cc", "IGeneratorOptions", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "982b0840z5E5YKNJmKjyGuc", "INeigborBiome", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4d0d6ysnOhGyKU17zcJ0pPO", "TGenerator", undefined);
      cclegacy._RF.pop();
      var _class$N;
      cclegacy._RF.push({}, "db7a0SQlQFHe5ZB+stYh1gA", "Button", undefined);
      let Button = (_class$N = class Button extends Observer {
        get button() {
          return this.node.getComponent(Button$1);
        }
        get label() {
          return this.node.getComponentInChildren(Label);
        }
        onLoad() {
          if (!this.button) {
            throw new Error('Button component must be used only with buttons');
          }
          const clickEventHandler = new EventHandler();
          clickEventHandler.target = this.node;
          clickEventHandler.component = this.__classname__;
          clickEventHandler.handler = 'onClick';
          this.button.clickEvents.push(clickEventHandler);
        }
      }, _applyDecoratedDescriptor(_class$N.prototype, "button", [cached], Object.getOwnPropertyDescriptor(_class$N.prototype, "button"), _class$N.prototype), _class$N);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "44164HayQ9Mkr90Vh6cFnsP", "TemplateComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ef30dqx+ftBKKWf33k/Dpsa", "loadResources", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d7530y0ardF0a/Q4Y24KFCH", "index", undefined);
      game.frameRate = 30;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3fd3e2Xv+5PJLBXO++hkF/J", "ITapEvent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5fa36jCB6xJUb3JUljtacKZ", "TComponentClass", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3de6cYhNuxDxoKlhnRpwWbo", "isObject", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bfee9+RZ+hOW7+30DEoysnl", "isPromise", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2cc2eMQTBxEYLCNZE9zGSgU", "createFactory", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b98ca/+WMFNnLsSoE/OsqSG", "hashCode", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3cb4aS35J1C24RkXayQJiAc", "toQuat", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6342byz8QREb7zJQjgkaI6R", "IChance", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6fd2cXZwqFPz53OnOWXb3Lj", "EWorldRouteMode", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "93da1j4IupAuapkjeUnRY/3", "getWorldRoute", undefined);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});