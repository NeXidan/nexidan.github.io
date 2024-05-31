System.register("chunks:///main.js", ['cc'], function () {
  var cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button$1, director, MeshRenderer, MeshCollider, resources, SpriteFrame, Prefab, Material, Vec3, Vec2, toDegree, SpriteRenderer, BoxCollider, Layers, Camera, NodeEventType, PhysicsSystem, EventHandler, view, screen, ResolutionPolicy;
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
      MeshRenderer = module.MeshRenderer;
      MeshCollider = module.MeshCollider;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Material = module.Material;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      toDegree = module.toDegree;
      SpriteRenderer = module.SpriteRenderer;
      BoxCollider = module.BoxCollider;
      Layers = module.Layers;
      Camera = module.Camera;
      NodeEventType = module.NodeEventType;
      PhysicsSystem = module.PhysicsSystem;
      EventHandler = module.EventHandler;
      view = module.view;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
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
      cclegacy._RF.push({}, "d0614YbtoJLkKgcT3QGIb6x", "errors", undefined);
      // @ts-nocheck
      const niceErrors = {
        0: `Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'`,
        1(annotationType, key) {
          return `Cannot apply '${annotationType}' to '${key.toString()}': Field not found.`;
        },
        /*
        2(prop) {
            return `invalid decorator for '${prop.toString()}'`
        },
        3(prop) {
            return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
        },
        4(prop) {
            return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
        },
        */
        5: "'keys()' can only be used on observable objects, arrays, sets and maps",
        6: "'values()' can only be used on observable objects, arrays, sets and maps",
        7: "'entries()' can only be used on observable objects, arrays and maps",
        8: "'set()' can only be used on observable objects, arrays and maps",
        9: "'remove()' can only be used on observable objects, arrays and maps",
        10: "'has()' can only be used on observable objects, arrays and maps",
        11: "'get()' can only be used on observable objects, arrays and maps",
        12: `Invalid annotation`,
        13: `Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)`,
        14: "Intercept handlers should return nothing or a change object",
        15: `Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)`,
        16: `Modification exception: the internal structure of an observable array was changed.`,
        17(index, length) {
          return `[mobx.array] Index out of bounds, ${index} is larger than ${length}`;
        },
        18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
        19(other) {
          return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
        },
        20(other) {
          return "Cannot initialize map from " + other;
        },
        21(dataStructure) {
          return `Cannot convert to map from '${dataStructure}'`;
        },
        22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
        23: "It is not possible to get index atoms from arrays",
        24(thing) {
          return "Cannot obtain administration from " + thing;
        },
        25(property, name) {
          return `the entry '${property}' does not exist in the observable map '${name}'`;
        },
        26: "please specify a property",
        27(property, name) {
          return `no observable property '${property.toString()}' found on the observable object '${name}'`;
        },
        28(thing) {
          return "Cannot obtain atom from " + thing;
        },
        29: "Expecting some object",
        30: "invalid action stack. did you forget to finish an action?",
        31: "missing option for computed: get",
        32(name, derivation) {
          return `Cycle detected in computation ${name}: ${derivation}`;
        },
        33(name) {
          return `The setter of computed value '${name}' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?`;
        },
        34(name) {
          return `[ComputedValue '${name}'] It is not possible to assign a new value to a computed value.`;
        },
        35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
        36: "isolateGlobalState should be called before MobX is running any reactions",
        37(method) {
          return `[mobx] \`observableArray.${method}()\` mutates the array in-place, which is not allowed inside a derivation. Use \`array.slice().${method}()\` instead`;
        },
        38: "'ownKeys()' can only be used on observable objects",
        39: "'defineProperty()' can only be used on observable objects"
      };
      const errors = niceErrors;
      function die(error) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        {
          let e = typeof error === "string" ? error : errors[error];
          if (typeof e === "function") e = e.apply(null, args);
          throw new Error(`[MobX] ${e}`);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "50777MwC3tH/bsWMApBv3Vr", "global", undefined); // @ts-nocheck
      const mockGlobal = {};
      function getGlobal() {
        if (typeof globalThis !== "undefined") {
          return globalThis;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        return mockGlobal;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "988083COyRDYpeMbghFbUxQ", "utils", undefined);

      // We shorten anything used > 5 times
      const assign = Object.assign;
      const getDescriptor = Object.getOwnPropertyDescriptor;
      const defineProperty = Object.defineProperty;
      const objectPrototype = Object.prototype;
      const EMPTY_ARRAY = [];
      Object.freeze(EMPTY_ARRAY);
      const EMPTY_OBJECT = {};
      Object.freeze(EMPTY_OBJECT);
      const hasProxy = typeof Proxy !== "undefined";
      const plainObjectString = Object.toString();
      function assertProxies() {
        if (!hasProxy) {
          die("`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`");
        }
      }
      function warnAboutProxyRequirement(msg) {
        if (globalState.verifyProxies) {
          die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
        }
      }
      function getNextId() {
        return ++globalState.mobxGuid;
      }

      /**
       * Makes sure that the provided function is invoked at most once.
       */
      function once(func) {
        let invoked = false;
        return function () {
          if (invoked) {
            return;
          }
          invoked = true;
          return func.apply(this, arguments);
        };
      }
      const noop = () => {};
      function isFunction(fn) {
        return typeof fn === "function";
      }
      function isStringish(value) {
        const t = typeof value;
        switch (t) {
          case "string":
          case "symbol":
          case "number":
            return true;
        }
        return false;
      }
      function isObject(value) {
        return value !== null && typeof value === "object";
      }
      function isPlainObject(value) {
        if (!isObject(value)) {
          return false;
        }
        const proto = Object.getPrototypeOf(value);
        if (proto == null) {
          return true;
        }
        const protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
      }

      // https://stackoverflow.com/a/37865170
      function isGenerator(obj) {
        const constructor = obj?.constructor;
        if (!constructor) {
          return false;
        }
        if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
          return true;
        }
        return false;
      }
      function addHiddenProp(object, propName, value) {
        defineProperty(object, propName, {
          enumerable: false,
          writable: true,
          configurable: true,
          value
        });
      }
      function addHiddenFinalProp(object, propName, value) {
        defineProperty(object, propName, {
          enumerable: false,
          writable: false,
          configurable: true,
          value
        });
      }
      function createInstanceofPredicate(name, theClass) {
        const propName = "isMobX" + name;
        theClass.prototype[propName] = true;
        return function (x) {
          return isObject(x) && x[propName] === true;
        };
      }
      function isES6Map(thing) {
        return thing instanceof Map;
      }
      function isES6Set(thing) {
        return thing instanceof Set;
      }
      const hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";

      /**
       * Returns the following: own enumerable keys and symbols.
       */
      function getPlainObjectKeys(object) {
        const keys = Object.keys(object);
        // Not supported in IE, so there are not going to be symbol props anyway...
        if (!hasGetOwnPropertySymbols) {
          return keys;
        }
        const symbols = Object.getOwnPropertySymbols(object);
        if (!symbols.length) {
          return keys;
        }
        return [...keys, ...symbols.filter(s => objectPrototype.propertyIsEnumerable.call(object, s))];
      }

      // From Immer utils
      // Returns all own keys, including non-enumerable and symbolic
      const ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? obj => Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)) : /* istanbul ignore next */Object.getOwnPropertyNames;
      function stringifyKey(key) {
        if (typeof key === "string") {
          return key;
        }
        if (typeof key === "symbol") {
          return key.toString();
        }
        return new String(key).toString();
      }
      function toPrimitive(value) {
        return value === null ? null : typeof value === "object" ? "" + value : value;
      }
      function hasProp(target, prop) {
        return objectPrototype.hasOwnProperty.call(target, prop);
      }

      // From Immer utils
      const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
        // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
        const res = {};
        // Note: without polyfill for ownKeys, symbols won't be picked up
        ownKeys(target).forEach(key => {
          res[key] = getDescriptor(target, key);
        });
        return res;
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4896b0beNlE34mlMTPLrZ2E", "decorators", undefined);
      const storedAnnotationsSymbol = Symbol("mobx-stored-annotations");

      /**
       * Creates a function that acts as
       * - decorator
       * - annotation object
       */
      function createDecoratorAnnotation(annotation) {
        function decorator(target, property) {
          if (is20223Decorator(property)) {
            return annotation.decorate_20223_(target, property);
          } else {
            storeAnnotation(target, property, annotation);
          }
        }
        return Object.assign(decorator, annotation);
      }

      /**
       * Stores annotation to prototype,
       * so it can be inspected later by `makeObservable` called from constructor
       */
      function storeAnnotation(prototype, key, annotation) {
        if (!hasProp(prototype, storedAnnotationsSymbol)) {
          addHiddenProp(prototype, storedAnnotationsSymbol, {
            // Inherit annotations
            ...prototype[storedAnnotationsSymbol]
          });
        }
        // @override must override something
        if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
          const fieldName = `${prototype.constructor.name}.prototype.${key.toString()}`;
          die(`'${fieldName}' is decorated with 'override', ` + `but no such decorated member was found on prototype.`);
        }
        // Cannot re-decorate
        assertNotDecorated(prototype, annotation, key);

        // Ignore override
        if (!isOverride(annotation)) {
          prototype[storedAnnotationsSymbol][key] = annotation;
        }
      }
      function assertNotDecorated(prototype, annotation, key) {
        if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
          const fieldName = `${prototype.constructor.name}.prototype.${key.toString()}`;
          const currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
          const requestedAnnotationType = annotation.annotationType_;
          die(`Cannot apply '@${requestedAnnotationType}' to '${fieldName}':` + `\nThe field is already decorated with '@${currentAnnotationType}'.` + `\nRe-decorating fields is not allowed.` + `\nUse '@override' decorator for methods overridden by subclass.`);
        }
      }

      /**
       * Collects annotations from prototypes and stores them on target (instance)
       */
      function collectStoredAnnotations(target) {
        if (!hasProp(target, storedAnnotationsSymbol)) {
          // if (true && !target[storedAnnotationsSymbol]) {
          //     die(
          //         `No annotations were passed to makeObservable, but no decorated members have been found either`
          //     )
          // }
          // We need a copy as we will remove annotation from the list once it's applied.
          addHiddenProp(target, storedAnnotationsSymbol, {
            ...target[storedAnnotationsSymbol]
          });
        }
        return target[storedAnnotationsSymbol];
      }
      function is20223Decorator(context) {
        return typeof context == "object" && typeof context["kind"] == "string";
      }
      function assert20223DecoratorType(context, types) {
        if (!types.includes(context.kind)) {
          die(`The decorator applied to '${String(context.name)}' cannot be used on a ${context.kind} element`);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9ac42EabFdBgqW8ipQ8w3ly", "atom", undefined);
      const $mobx = Symbol("mobx administration");
      class Atom {
        /**
         * Create a new atom. For debugging purposes it is recommended to give it a name.
         * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
         */
        constructor(name_) {
          if (name_ === void 0) {
            name_ = "Atom@" + getNextId();
          }
          this.isPendingUnobservation_ = false;
          // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
          this.isBeingObserved_ = false;
          this.observers_ = new Set();
          this.diffValue_ = 0;
          this.lastAccessedBy_ = 0;
          this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
          // onBecomeObservedListeners
          this.onBOL = void 0;
          // onBecomeUnobservedListeners
          this.onBUOL = void 0;
          this.name_ = name_;
        }
        onBO() {
          if (this.onBOL) {
            this.onBOL.forEach(listener => listener());
          }
        }
        onBUO() {
          if (this.onBUOL) {
            this.onBUOL.forEach(listener => listener());
          }
        }

        /**
         * Invoke this method to notify mobx that your atom has been used somehow.
         * Returns true if there is currently a reactive context.
         */
        reportObserved() {
          return reportObserved(this);
        }

        /**
         * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
         */
        reportChanged() {
          startBatch();
          propagateChanged(this);
          endBatch();
        }
        toString() {
          return this.name_;
        }
      }
      const isAtom = createInstanceofPredicate("Atom", Atom);
      function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (onBecomeObservedHandler === void 0) {
          onBecomeObservedHandler = noop;
        }
        if (onBecomeUnobservedHandler === void 0) {
          onBecomeUnobservedHandler = noop;
        }
        const atom = new Atom(name);
        // default `noop` listener will not initialize the hook Set
        if (onBecomeObservedHandler !== noop) {
          onBecomeObserved(atom, onBecomeObservedHandler);
        }
        if (onBecomeUnobservedHandler !== noop) {
          onBecomeUnobserved(atom, onBecomeUnobservedHandler);
        }
        return atom;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4199b4PzrhP5LrAoei00M3/", "comparer", undefined);
      function identityComparer(a, b) {
        return a === b;
      }
      function structuralComparer(a, b) {
        return deepEqual(a, b);
      }
      function shallowComparer(a, b) {
        return deepEqual(a, b, 1);
      }
      function defaultComparer(a, b) {
        if (Object.is) {
          return Object.is(a, b);
        }
        return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
      }
      const comparer = {
        identity: identityComparer,
        structural: structuralComparer,
        default: defaultComparer,
        shallow: shallowComparer
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cce2fTunvpB25+S1o4Y4T6K", "modifiers", undefined);
      function deepEnhancer(v, _, name) {
        // it is an observable already, done
        if (isObservable(v)) {
          return v;
        }

        // something that can be converted and mutated?
        if (Array.isArray(v)) {
          return observable.array(v, {
            name
          });
        }
        if (isPlainObject(v)) {
          return observable.object(v, undefined, {
            name
          });
        }
        if (isES6Map(v)) {
          return observable.map(v, {
            name
          });
        }
        if (isES6Set(v)) {
          return observable.set(v, {
            name
          });
        }
        if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
          if (isGenerator(v)) {
            return flow(v);
          } else {
            return autoAction(name, v);
          }
        }
        return v;
      }
      function shallowEnhancer(v, _, name) {
        if (v === undefined || v === null) {
          return v;
        }
        if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
          return v;
        }
        if (Array.isArray(v)) {
          return observable.array(v, {
            name,
            deep: false
          });
        }
        if (isPlainObject(v)) {
          return observable.object(v, undefined, {
            name,
            deep: false
          });
        }
        if (isES6Map(v)) {
          return observable.map(v, {
            name,
            deep: false
          });
        }
        if (isES6Set(v)) {
          return observable.set(v, {
            name,
            deep: false
          });
        }
        {
          die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
        }
      }
      function referenceEnhancer(newValue) {
        // never turn into an observable
        return newValue;
      }
      function refStructEnhancer(v, oldValue) {
        if (isObservable(v)) {
          die(`observable.struct should not be used with observable values`);
        }
        if (deepEqual(v, oldValue)) {
          return oldValue;
        }
        return v;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5c49chP0rVMeaPU4IbS/6i3", "overrideannotation", undefined);
      const OVERRIDE = "override";
      const override = createDecoratorAnnotation({
        annotationType_: OVERRIDE,
        make_,
        extend_,
        decorate_20223_
      });
      function isOverride(annotation) {
        return annotation.annotationType_ === OVERRIDE;
      }
      function make_(adm, key) {
        // Must not be plain object
        if (adm.isPlainObject_) {
          die(`Cannot apply '${this.annotationType_}' to '${adm.name_}.${key.toString()}':` + `\n'${this.annotationType_}' cannot be used on plain objects.`);
        }
        // Must override something
        if (!hasProp(adm.appliedAnnotations_, key)) {
          die(`'${adm.name_}.${key.toString()}' is annotated with '${this.annotationType_}', ` + `but no such annotated member was found on prototype.`);
        }
        return MakeResult.Cancel;
      }
      function extend_(adm, key, descriptor, proxyTrap) {
        die(`'${this.annotationType_}' can only be used with 'makeObservable'`);
      }
      function decorate_20223_(desc, context) {
        console.warn(`'${this.annotationType_}' cannot be used with decorators - this is a no-op`);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "537bdmGGUtDXIvAtGzyyqRt", "actionannotation", undefined);
      function createActionAnnotation(name, options) {
        return {
          annotationType_: name,
          options_: options,
          make_: make_$1,
          extend_: extend_$1,
          decorate_20223_: decorate_20223_$1
        };
      }
      function make_$1(adm, key, descriptor, source) {
        // bound
        if (this.options_?.bound) {
          return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Break;
        }
        // own
        if (source === adm.target_) {
          return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Continue;
        }
        // prototype
        if (isAction(descriptor.value)) {
          // A prototype could have been annotated already by other constructor,
          // rest of the proto chain must be annotated already
          return MakeResult.Break;
        }
        const actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
        defineProperty(source, key, actionDescriptor);
        return MakeResult.Continue;
      }
      function extend_$1(adm, key, descriptor, proxyTrap) {
        const actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
        return adm.defineProperty_(key, actionDescriptor, proxyTrap);
      }
      function decorate_20223_$1(mthd, context) {
        {
          assert20223DecoratorType(context, ["method", "field"]);
        }
        const {
          kind,
          name,
          addInitializer
        } = context;
        const ann = this;
        const _createAction = m => createAction(ann.options_?.name ?? name.toString(), m, ann.options_?.autoAction ?? false);

        // Backwards/Legacy behavior, expects makeObservable(this)
        if (kind == "field") {
          addInitializer(function () {
            storeAnnotation(this, name, ann);
          });
          return;
        }
        if (kind == "method") {
          if (!isAction(mthd)) {
            mthd = _createAction(mthd);
          }
          if (this.options_?.bound) {
            addInitializer(function () {
              const self = this;
              const bound = self[name].bind(self);
              bound.isMobxAction = true;
              self[name] = bound;
            });
          }
          return mthd;
        }
        die(`Cannot apply '${ann.annotationType_}' to '${String(name)}' (kind: ${kind}):` + `\n'${ann.annotationType_}' can only be used on properties with a function value.`);
      }
      function assertActionDescriptor(adm, _ref, key, _ref2) {
        let {
          annotationType_
        } = _ref;
        let {
          value
        } = _ref2;
        if (!isFunction(value)) {
          die(`Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':` + `\n'${annotationType_}' can only be used on properties with a function value.`);
        }
      }
      function createActionDescriptor(adm, annotation, key, descriptor,
      // provides ability to disable safeDescriptors for prototypes
      safeDescriptors) {
        if (safeDescriptors === void 0) {
          safeDescriptors = globalState.safeDescriptors;
        }
        assertActionDescriptor(adm, annotation, key, descriptor);
        let {
          value
        } = descriptor;
        if (annotation.options_?.bound) {
          value = value.bind(adm.proxy_ ?? adm.target_);
        }
        return {
          value: createAction(annotation.options_?.name ?? key.toString(), value, annotation.options_?.autoAction ?? false,
          // https://github.com/mobxjs/mobx/discussions/3140
          annotation.options_?.bound ? adm.proxy_ ?? adm.target_ : undefined),
          // Non-configurable for classes
          // prevents accidental field redefinition in subclass
          configurable: safeDescriptors ? adm.isPlainObject_ : true,
          // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
          enumerable: false,
          // Non-obsevable, therefore non-writable
          // Also prevents rewriting in subclass constructor
          writable: safeDescriptors ? false : true
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "be3ebYQmlhE57h3XfgCSQ3c", "flowannotation", undefined);
      function createFlowAnnotation(name, options) {
        return {
          annotationType_: name,
          options_: options,
          make_: make_$2,
          extend_: extend_$2,
          decorate_20223_: decorate_20223_$2
        };
      }
      function make_$2(adm, key, descriptor, source) {
        // own
        if (source === adm.target_) {
          return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Continue;
        }
        // prototype
        // bound - must annotate protos to support super.flow()
        if (this.options_?.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
          if (this.extend_(adm, key, descriptor, false) === null) {
            return MakeResult.Cancel;
          }
        }
        if (isFlow(descriptor.value)) {
          // A prototype could have been annotated already by other constructor,
          // rest of the proto chain must be annotated already
          return MakeResult.Break;
        }
        const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
        defineProperty(source, key, flowDescriptor);
        return MakeResult.Continue;
      }
      function extend_$2(adm, key, descriptor, proxyTrap) {
        const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, this.options_?.bound);
        return adm.defineProperty_(key, flowDescriptor, proxyTrap);
      }
      function decorate_20223_$2(mthd, context) {
        {
          assert20223DecoratorType(context, ["method"]);
        }
        const {
          name,
          addInitializer
        } = context;
        if (!isFlow(mthd)) {
          mthd = flow(mthd);
        }
        if (this.options_?.bound) {
          addInitializer(function () {
            const self = this;
            const bound = self[name].bind(self);
            bound.isMobXFlow = true;
            self[name] = bound;
          });
        }
        return mthd;
      }
      function assertFlowDescriptor(adm, _ref, key, _ref2) {
        let {
          annotationType_
        } = _ref;
        let {
          value
        } = _ref2;
        if (!isFunction(value)) {
          die(`Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':` + `\n'${annotationType_}' can only be used on properties with a generator function value.`);
        }
      }
      function createFlowDescriptor(adm, annotation, key, descriptor, bound,
      // provides ability to disable safeDescriptors for prototypes
      safeDescriptors) {
        if (safeDescriptors === void 0) {
          safeDescriptors = globalState.safeDescriptors;
        }
        assertFlowDescriptor(adm, annotation, key, descriptor);
        let {
          value
        } = descriptor;
        // In case of flow.bound, the descriptor can be from already annotated prototype
        if (!isFlow(value)) {
          value = flow(value);
        }
        if (bound) {
          // We do not keep original function around, so we bind the existing flow
          value = value.bind(adm.proxy_ ?? adm.target_);
          // This is normally set by `flow`, but `bind` returns new function...
          value.isMobXFlow = true;
        }
        return {
          value,
          // Non-configurable for classes
          // prevents accidental field redefinition in subclass
          configurable: safeDescriptors ? adm.isPlainObject_ : true,
          // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
          enumerable: false,
          // Non-obsevable, therefore non-writable
          // Also prevents rewriting in subclass constructor
          writable: safeDescriptors ? false : true
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "edefdFjzDZBVbhJQMqDfPkG", "computedannotation", undefined);
      function createComputedAnnotation(name, options) {
        return {
          annotationType_: name,
          options_: options,
          make_: make_$3,
          extend_: extend_$3,
          decorate_20223_: decorate_20223_$3
        };
      }
      function make_$3(adm, key, descriptor) {
        return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Break;
      }
      function extend_$3(adm, key, descriptor, proxyTrap) {
        assertComputedDescriptor(adm, this, key, descriptor);
        return adm.defineComputedProperty_(key, {
          ...this.options_,
          get: descriptor.get,
          set: descriptor.set
        }, proxyTrap);
      }
      function decorate_20223_$3(get, context) {
        {
          assert20223DecoratorType(context, ["getter"]);
        }
        const ann = this;
        const {
          name: key,
          addInitializer
        } = context;
        addInitializer(function () {
          const adm = asObservableObject(this)[$mobx];
          const options = {
            ...ann.options_,
            get,
            context: this
          };
          options.name ||= `${adm.name_}.${key.toString()}`;
          adm.values_.set(key, new ComputedValue(options));
        });
        return function () {
          return this[$mobx].getObservablePropValue_(key);
        };
      }
      function assertComputedDescriptor(adm, _ref, key, _ref2) {
        let {
          annotationType_
        } = _ref;
        let {
          get
        } = _ref2;
        if (!get) {
          die(`Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':` + `\n'${annotationType_}' can only be used on getter(+setter) properties.`);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "74865c6GBtCQ4EhcSh1VFOU", "observableannotation", undefined);
      function createObservableAnnotation(name, options) {
        return {
          annotationType_: name,
          options_: options,
          make_: make_$4,
          extend_: extend_$4,
          decorate_20223_: decorate_20223_$4
        };
      }
      function make_$4(adm, key, descriptor) {
        return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Break;
      }
      function extend_$4(adm, key, descriptor, proxyTrap) {
        assertObservableDescriptor(adm, this, key, descriptor);
        return adm.defineObservableProperty_(key, descriptor.value, this.options_?.enhancer ?? deepEnhancer, proxyTrap);
      }
      function decorate_20223_$4(desc, context) {
        {
          if (context.kind === "field") {
            throw die(`Please use \`@observable accessor ${String(context.name)}\` instead of \`@observable ${String(context.name)}\``);
          }
          assert20223DecoratorType(context, ["accessor"]);
        }
        const ann = this;
        const {
          kind,
          name
        } = context;

        // The laziness here is not ideal... It's a workaround to how 2022.3 Decorators are implemented:
        //   `addInitializer` callbacks are executed _before_ any accessors are defined (instead of the ideal-for-us right after each).
        //   This means that, if we were to do our stuff in an `addInitializer`, we'd attempt to read a private slot
        //   before it has been initialized. The runtime doesn't like that and throws a `Cannot read private member
        //   from an object whose class did not declare it` error.
        // TODO: it seems that this will not be required anymore in the final version of the spec
        // See TODO: link
        const initializedObjects = new WeakSet();
        function initializeObservable(target, value) {
          const adm = asObservableObject(target)[$mobx];
          const observable = new ObservableValue(value, ann.options_?.enhancer ?? deepEnhancer, `${adm.name_}.${name.toString()}`, false);
          adm.values_.set(name, observable);
          initializedObjects.add(target);
        }
        if (kind == "accessor") {
          return {
            get() {
              if (!initializedObjects.has(this)) {
                initializeObservable(this, desc.get.call(this));
              }
              return this[$mobx].getObservablePropValue_(name);
            },
            set(value) {
              if (!initializedObjects.has(this)) {
                initializeObservable(this, value);
              }
              return this[$mobx].setObservablePropValue_(name, value);
            },
            init(value) {
              if (!initializedObjects.has(this)) {
                initializeObservable(this, value);
              }
              return value;
            }
          };
        }
        return;
      }
      function assertObservableDescriptor(adm, _ref, key, descriptor) {
        let {
          annotationType_
        } = _ref;
        if (!("value" in descriptor)) {
          die(`Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':` + `\n'${annotationType_}' cannot be used on getter/setter properties`);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0d39aEyzrFAdqoluYZU7yVq", "autoannotation", undefined);
      const AUTO = "true";
      const autoAnnotation = createAutoAnnotation();
      function createAutoAnnotation(options) {
        return {
          annotationType_: AUTO,
          options_: options,
          make_: make_$5,
          extend_: extend_$5,
          decorate_20223_: decorate_20223_$5
        };
      }
      function make_$5(adm, key, descriptor, source) {
        // getter -> computed
        if (descriptor.get) {
          return computed.make_(adm, key, descriptor, source);
        }
        // lone setter -> action setter
        if (descriptor.set) {
          // TODO make action applicable to setter and delegate to action.make_
          const set = createAction(key.toString(), descriptor.set);
          // own
          if (source === adm.target_) {
            return adm.defineProperty_(key, {
              configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
              set
            }) === null ? MakeResult.Cancel : MakeResult.Continue;
          }
          // proto
          defineProperty(source, key, {
            configurable: true,
            set
          });
          return MakeResult.Continue;
        }
        // function on proto -> autoAction/flow
        if (source !== adm.target_ && typeof descriptor.value === "function") {
          if (isGenerator(descriptor.value)) {
            const flowAnnotation = this.options_?.autoBind ? flow.bound : flow;
            return flowAnnotation.make_(adm, key, descriptor, source);
          }
          const actionAnnotation = this.options_?.autoBind ? autoAction.bound : autoAction;
          return actionAnnotation.make_(adm, key, descriptor, source);
        }
        // other -> observable
        // Copy props from proto as well, see test:
        // "decorate should work with Object.create"
        let observableAnnotation = this.options_?.deep === false ? observable.ref : observable;
        // if function respect autoBind option
        if (typeof descriptor.value === "function" && this.options_?.autoBind) {
          descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
        }
        return observableAnnotation.make_(adm, key, descriptor, source);
      }
      function extend_$5(adm, key, descriptor, proxyTrap) {
        // getter -> computed
        if (descriptor.get) {
          return computed.extend_(adm, key, descriptor, proxyTrap);
        }
        // lone setter -> action setter
        if (descriptor.set) {
          // TODO make action applicable to setter and delegate to action.extend_
          return adm.defineProperty_(key, {
            configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
            set: createAction(key.toString(), descriptor.set)
          }, proxyTrap);
        }
        // other -> observable
        // if function respect autoBind option
        if (typeof descriptor.value === "function" && this.options_?.autoBind) {
          descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
        }
        let observableAnnotation = this.options_?.deep === false ? observable.ref : observable;
        return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
      }
      function decorate_20223_$5(desc, context) {
        die(`'${this.annotationType_}' cannot be used as a decorator`);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "63a41UHF0BDVoAhGVzgYZwD", "generic-abort-signal", undefined); // @ts-nocheck
      // https://github.com/mobxjs/mobx/issues/3582
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b449aBbfIdET7FTk5m0VRFU", "observable", undefined);
      const OBSERVABLE = "observable";
      const OBSERVABLE_REF = "observable.ref";
      const OBSERVABLE_SHALLOW = "observable.shallow";
      const OBSERVABLE_STRUCT = "observable.struct";
      // Predefined bags of create observable options, to avoid allocating temporarily option objects
      // in the majority of cases
      const defaultCreateObservableOptions = {
        deep: true,
        name: undefined,
        defaultDecorator: undefined,
        proxy: true
      };
      Object.freeze(defaultCreateObservableOptions);
      function asCreateObservableOptions(thing) {
        return thing || defaultCreateObservableOptions;
      }
      const observableAnnotation = createObservableAnnotation(OBSERVABLE);
      const observableRefAnnotation = createObservableAnnotation(OBSERVABLE_REF, {
        enhancer: referenceEnhancer
      });
      const observableShallowAnnotation = createObservableAnnotation(OBSERVABLE_SHALLOW, {
        enhancer: shallowEnhancer
      });
      const observableStructAnnotation = createObservableAnnotation(OBSERVABLE_STRUCT, {
        enhancer: refStructEnhancer
      });
      const observableDecoratorAnnotation = createDecoratorAnnotation(observableAnnotation);
      function getEnhancerFromOptions(options) {
        return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
      }
      function getAnnotationFromOptions(options) {
        return options ? options.defaultDecorator ?? createAutoAnnotation(options) : undefined;
      }
      function getEnhancerFromAnnotation(annotation) {
        return !annotation ? deepEnhancer : annotation.options_?.enhancer ?? deepEnhancer;
      }

      /**
       * Turns an object, array or function into a reactive structure.
       * @param v the value which should become observable.
       */
      function createObservable(v, arg2, arg3) {
        // @observable someProp; (2022.3 Decorators)
        if (is20223Decorator(arg2)) {
          return observableAnnotation.decorate_20223_(v, arg2);
        }

        // @observable someProp;
        if (isStringish(arg2)) {
          storeAnnotation(v, arg2, observableAnnotation);
          return;
        }

        // already observable - ignore
        if (isObservable(v)) {
          return v;
        }

        // plain object
        if (isPlainObject(v)) {
          return observable.object(v, arg2, arg3);
        }

        // Array
        if (Array.isArray(v)) {
          return observable.array(v, arg2);
        }

        // Map
        if (isES6Map(v)) {
          return observable.map(v, arg2);
        }

        // Set
        if (isES6Set(v)) {
          return observable.set(v, arg2);
        }

        // other object - ignore
        if (typeof v === "object" && v !== null) {
          return v;
        }

        // anything else
        return observable.box(v, arg2);
      }
      assign(createObservable, observableDecoratorAnnotation);
      const observableFactories = {
        box(value, options) {
          const o = asCreateObservableOptions(options);
          return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
        },
        array(initialValues, options) {
          const o = asCreateObservableOptions(options);
          return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
        },
        map(initialValues, options) {
          const o = asCreateObservableOptions(options);
          return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
        },
        set(initialValues, options) {
          const o = asCreateObservableOptions(options);
          return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
        },
        object(props, decorators, options) {
          return initObservable(() => extendObservable(globalState.useProxies === false || options?.proxy === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators));
        },
        ref: createDecoratorAnnotation(observableRefAnnotation),
        shallow: createDecoratorAnnotation(observableShallowAnnotation),
        deep: observableDecoratorAnnotation,
        struct: createDecoratorAnnotation(observableStructAnnotation)
      };

      // eslint-disable-next-line
      var observable = assign(createObservable, observableFactories);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "33c088cwaBCAbpF0WrfNyJs", "computed", undefined);
      const COMPUTED = "computed";
      const COMPUTED_STRUCT = "computed.struct";
      const computedAnnotation = createComputedAnnotation(COMPUTED);
      const computedStructAnnotation = createComputedAnnotation(COMPUTED_STRUCT, {
        equals: comparer.structural
      });

      /**
       * Decorator for class properties: @computed get value() { return expr; }.
       * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
       */
      const computed = function computed(arg1, arg2) {
        if (is20223Decorator(arg2)) {
          // @computed (2022.3 Decorators)
          return computedAnnotation.decorate_20223_(arg1, arg2);
        }
        if (isStringish(arg2)) {
          // @computed
          return storeAnnotation(arg1, arg2, computedAnnotation);
        }
        if (isPlainObject(arg1)) {
          // @computed({ options })
          return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
        }

        // computed(expr, options?)
        {
          if (!isFunction(arg1)) {
            die("First argument to `computed` should be an expression.");
          }
          if (isFunction(arg2)) {
            die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
          }
        }
        const opts = isPlainObject(arg2) ? arg2 : {};
        opts.get = arg1;
        opts.name ||= arg1.name || ""; /* for generated name */

        return new ComputedValue(opts);
      };
      Object.assign(computed, computedAnnotation);
      computed.struct = createDecoratorAnnotation(computedStructAnnotation);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fad7d8d+Q5HOoXGpUCKUUbW", "action", undefined);

      // we don't use globalState for these in order to avoid possible issues with multiple
      // mobx versions
      let currentActionId = 0;
      let nextActionId = 1;
      const isFunctionNameConfigurable = getDescriptor(() => {}, "name")?.configurable ?? false;

      // we can safely recycle this object
      const tmpNameDescriptor = {
        value: "action",
        configurable: true,
        writable: false,
        enumerable: false
      };
      function createAction(actionName, fn, autoAction, ref) {
        if (autoAction === void 0) {
          autoAction = false;
        }
        {
          if (!isFunction(fn)) {
            die("`action` can only be invoked on functions");
          }
          if (typeof actionName !== "string" || !actionName) {
            die(`actions should have valid names, got: '${actionName}'`);
          }
        }
        function res() {
          return executeAction(actionName, autoAction, fn, ref || this, arguments);
        }
        res.isMobxAction = true;
        res.toString = () => fn.toString();
        if (isFunctionNameConfigurable) {
          tmpNameDescriptor.value = actionName;
          defineProperty(res, "name", tmpNameDescriptor);
        }
        return res;
      }
      function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
        const runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
        try {
          return fn.apply(scope, args);
        } catch (err) {
          runInfo.error_ = err;
          throw err;
        } finally {
          _endAction(runInfo);
        }
      }
      function _startAction(actionName, canRunAsDerivation,
      // true for autoAction
      scope, args) {
        const notifySpy_ = isSpyEnabled() && !!actionName;
        let startTime_ = 0;
        if (notifySpy_) {
          startTime_ = Date.now();
          const flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
          spyReportStart({
            type: ACTION,
            name: actionName,
            object: scope,
            arguments: flattenedArgs
          });
        }
        const prevDerivation_ = globalState.trackingDerivation;
        const runAsAction = !canRunAsDerivation || !prevDerivation_;
        startBatch();
        let prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow
        if (runAsAction) {
          untrackedStart();
          prevAllowStateChanges_ = allowStateChangesStart(true);
        }
        const prevAllowStateReads_ = allowStateReadsStart(true);
        const runInfo = {
          runAsAction_: runAsAction,
          prevDerivation_,
          prevAllowStateChanges_,
          prevAllowStateReads_,
          notifySpy_,
          startTime_,
          actionId_: nextActionId++,
          parentActionId_: currentActionId
        };
        currentActionId = runInfo.actionId_;
        return runInfo;
      }
      function _endAction(runInfo) {
        if (currentActionId !== runInfo.actionId_) {
          die(30);
        }
        currentActionId = runInfo.parentActionId_;
        if (runInfo.error_ !== undefined) {
          globalState.suppressReactionErrors = true;
        }
        allowStateChangesEnd(runInfo.prevAllowStateChanges_);
        allowStateReadsEnd(runInfo.prevAllowStateReads_);
        endBatch();
        if (runInfo.runAsAction_) {
          untrackedEnd(runInfo.prevDerivation_);
        }
        if (runInfo.notifySpy_) {
          spyReportEnd({
            time: Date.now() - runInfo.startTime_
          });
        }
        globalState.suppressReactionErrors = false;
      }
      function allowStateChanges(allowStateChanges, func) {
        const prev = allowStateChangesStart(allowStateChanges);
        try {
          return func();
        } finally {
          allowStateChangesEnd(prev);
        }
      }
      function allowStateChangesStart(allowStateChanges) {
        const prev = globalState.allowStateChanges;
        globalState.allowStateChanges = allowStateChanges;
        return prev;
      }
      function allowStateChangesEnd(prev) {
        globalState.allowStateChanges = prev;
      }
      cclegacy._RF.pop();
      let _Symbol$toPrimitive;
      cclegacy._RF.push({}, "83f85jxCh1Prp4l4T/OzYB1", "observablevalue", undefined);
      const CREATE = "create";
      _Symbol$toPrimitive = Symbol.toPrimitive;
      class ObservableValue extends Atom {
        constructor(value, enhancer, name_, notifySpy, equals) {
          if (name_ === void 0) {
            name_ = "ObservableValue@" + getNextId();
          }
          if (notifySpy === void 0) {
            notifySpy = true;
          }
          if (equals === void 0) {
            equals = comparer.default;
          }
          super(name_);
          this.hasUnreportedChange_ = false;
          this.interceptors_ = void 0;
          this.changeListeners_ = void 0;
          this.value_ = void 0;
          this.dehancer = void 0;
          this.enhancer = enhancer;
          this.name_ = name_;
          this.equals = equals;
          this.value_ = enhancer(value, undefined, name_);
          if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({
              type: CREATE,
              object: this,
              observableKind: "value",
              debugObjectName: this.name_,
              newValue: "" + this.value_
            });
          }
        }
        dehanceValue(value) {
          if (this.dehancer !== undefined) {
            return this.dehancer(value);
          }
          return value;
        }
        set(newValue) {
          const oldValue = this.value_;
          newValue = this.prepareNewValue_(newValue);
          if (newValue !== globalState.UNCHANGED) {
            const notifySpy = isSpyEnabled();
            if (notifySpy) {
              spyReportStart({
                type: UPDATE,
                object: this,
                observableKind: "value",
                debugObjectName: this.name_,
                newValue,
                oldValue
              });
            }
            this.setNewValue_(newValue);
            if (notifySpy) {
              spyReportEnd();
            }
          }
        }
        prepareNewValue_(newValue) {
          checkIfStateModificationsAreAllowed(this);
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              object: this,
              type: UPDATE,
              newValue
            });
            if (!change) {
              return globalState.UNCHANGED;
            }
            newValue = change.newValue;
          }
          // apply modifier
          newValue = this.enhancer(newValue, this.value_, this.name_);
          return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
        }
        setNewValue_(newValue) {
          const oldValue = this.value_;
          this.value_ = newValue;
          this.reportChanged();
          if (hasListeners(this)) {
            notifyListeners(this, {
              type: UPDATE,
              object: this,
              newValue,
              oldValue
            });
          }
        }
        get() {
          this.reportObserved();
          return this.dehanceValue(this.value_);
        }
        intercept_(handler) {
          return registerInterceptor(this, handler);
        }
        observe_(listener, fireImmediately) {
          if (fireImmediately) {
            listener({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: UPDATE,
              newValue: this.value_,
              oldValue: undefined
            });
          }
          return registerListener(this, listener);
        }
        raw() {
          // used by MST ot get undehanced value
          return this.value_;
        }
        toJSON() {
          return this.get();
        }
        toString() {
          return `${this.name_}[${this.value_}]`;
        }
        valueOf() {
          return toPrimitive(this.get());
        }
        [_Symbol$toPrimitive]() {
          return this.valueOf();
        }
      }
      const isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
      cclegacy._RF.pop();
      let _Symbol$toPrimitive$1;
      cclegacy._RF.push({}, "53cf9OmUHlEAo5G/2m9JRBm", "computedvalue", undefined);
      _Symbol$toPrimitive$1 = Symbol.toPrimitive;
      /**
       * A node in the state dependency root that observes other nodes, and can be observed itself.
       *
       * ComputedValue will remember the result of the computation for the duration of the batch, or
       * while being observed.
       *
       * During this time it will recompute only when one of its direct dependencies changed,
       * but only when it is being accessed with `ComputedValue.get()`.
       *
       * Implementation description:
       * 1. First time it's being accessed it will compute and remember result
       *    give back remembered result until 2. happens
       * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
       * 3. When it's being accessed, recompute if any shallow dependency changed.
       *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
       *    go to step 2. either way
       *
       * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
       */
      class ComputedValue {
        /**
         * Create a new computed value based on a function expression.
         *
         * The `name` property is for debug purposes only.
         *
         * The `equals` property specifies the comparer function to use to determine if a newly produced
         * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
         * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
         * Structural comparison can be convenient if you always produce a new aggregated object and
         * don't want to notify observers if it is structurally the same.
         * This is useful for working with vectors, mouse coordinates etc.
         */
        constructor(options) {
          this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
          this.observing_ = [];
          // nodes we are looking at. Our value depends on these nodes
          this.newObserving_ = null;
          // during tracking it's an array with new observed observers
          this.isBeingObserved_ = false;
          this.isPendingUnobservation_ = false;
          this.observers_ = new Set();
          this.diffValue_ = 0;
          this.runId_ = 0;
          this.lastAccessedBy_ = 0;
          this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
          this.unboundDepsCount_ = 0;
          this.value_ = new CaughtException(null);
          this.name_ = void 0;
          this.triggeredBy_ = void 0;
          this.isComputing_ = false;
          // to check for cycles
          this.isRunningSetter_ = false;
          this.derivation = void 0;
          // N.B: unminified as it is used by MST
          this.setter_ = void 0;
          this.isTracing_ = TraceMode.NONE;
          this.scope_ = void 0;
          this.equals_ = void 0;
          this.requiresReaction_ = void 0;
          this.keepAlive_ = void 0;
          this.onBOL = void 0;
          this.onBUOL = void 0;
          if (!options.get) {
            die(31);
          }
          this.derivation = options.get;
          this.name_ = options.name || "ComputedValue@" + getNextId();
          if (options.set) {
            this.setter_ = createAction(this.name_ + "-setter", options.set);
          }
          this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
          this.scope_ = options.context;
          this.requiresReaction_ = options.requiresReaction;
          this.keepAlive_ = !!options.keepAlive;
        }
        onBecomeStale_() {
          propagateMaybeChanged(this);
        }
        onBO() {
          if (this.onBOL) {
            this.onBOL.forEach(listener => listener());
          }
        }
        onBUO() {
          if (this.onBUOL) {
            this.onBUOL.forEach(listener => listener());
          }
        }

        /**
         * Returns the current value of this computed value.
         * Will evaluate its computation first if needed.
         */
        get() {
          if (this.isComputing_) {
            die(32, this.name_, this.derivation);
          }
          if (globalState.inBatch === 0 &&
          // !globalState.trackingDerivatpion &&
          this.observers_.size === 0 && !this.keepAlive_) {
            if (shouldCompute(this)) {
              this.warnAboutUntrackedRead_();
              startBatch(); // See perf test 'computed memoization'
              this.value_ = this.computeValue_(false);
              endBatch();
            }
          } else {
            reportObserved(this);
            if (shouldCompute(this)) {
              let prevTrackingContext = globalState.trackingContext;
              if (this.keepAlive_ && !prevTrackingContext) {
                globalState.trackingContext = this;
              }
              if (this.trackAndCompute()) {
                propagateChangeConfirmed(this);
              }
              globalState.trackingContext = prevTrackingContext;
            }
          }
          const result = this.value_;
          if (isCaughtException(result)) {
            throw result.cause;
          }
          return result;
        }
        set(value) {
          if (this.setter_) {
            if (this.isRunningSetter_) {
              die(33, this.name_);
            }
            this.isRunningSetter_ = true;
            try {
              this.setter_.call(this.scope_, value);
            } finally {
              this.isRunningSetter_ = false;
            }
          } else {
            die(34, this.name_);
          }
        }
        trackAndCompute() {
          // N.B: unminified as it is used by MST
          const oldValue = this.value_;
          const wasSuspended = /* see #1208 */this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
          const newValue = this.computeValue_(true);
          const changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
          if (changed) {
            this.value_ = newValue;
            if (isSpyEnabled()) {
              spyReport({
                observableKind: "computed",
                debugObjectName: this.name_,
                object: this.scope_,
                type: "update",
                oldValue,
                newValue
              });
            }
          }
          return changed;
        }
        computeValue_(track) {
          this.isComputing_ = true;
          // don't allow state changes during computation
          const prev = allowStateChangesStart(false);
          let res;
          if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope_);
          } else {
            if (globalState.disableErrorBoundaries === true) {
              res = this.derivation.call(this.scope_);
            } else {
              try {
                res = this.derivation.call(this.scope_);
              } catch (e) {
                res = new CaughtException(e);
              }
            }
          }
          allowStateChangesEnd(prev);
          this.isComputing_ = false;
          return res;
        }
        suspend_() {
          if (!this.keepAlive_) {
            clearObserving(this);
            this.value_ = undefined; // don't hold on to computed value!
            if (this.isTracing_ !== TraceMode.NONE) {
              console.log(`[mobx.trace] Computed value '${this.name_}' was suspended and it will recompute on the next access.`);
            }
          }
        }
        observe_(listener, fireImmediately) {
          let firstTime = true;
          let prevValue = undefined;
          return autorun(() => {
            // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
            let newValue = this.get();
            if (!firstTime || fireImmediately) {
              const prevU = untrackedStart();
              listener({
                observableKind: "computed",
                debugObjectName: this.name_,
                type: UPDATE,
                object: this,
                newValue,
                oldValue: prevValue
              });
              untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
          });
        }
        warnAboutUntrackedRead_() {
          if (this.isTracing_ !== TraceMode.NONE) {
            console.log(`[mobx.trace] Computed value '${this.name_}' is being read outside a reactive context. Doing a full recompute.`);
          }
          if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
            console.warn(`[mobx] Computed value '${this.name_}' is being read outside a reactive context. Doing a full recompute.`);
          }
        }
        toString() {
          return `${this.name_}[${this.derivation.toString()}]`;
        }
        valueOf() {
          return toPrimitive(this.get());
        }
        [_Symbol$toPrimitive$1]() {
          return this.valueOf();
        }
      }
      const isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a9eada6ADlMnLI5t0V6quvS", "derivation", undefined);
      let IDerivationState_ = /*#__PURE__*/function (IDerivationState_) {
        IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
        IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
        IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
        IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
        return IDerivationState_;
      }({});
      let TraceMode = /*#__PURE__*/function (TraceMode) {
        TraceMode[TraceMode["NONE"] = 0] = "NONE";
        TraceMode[TraceMode["LOG"] = 1] = "LOG";
        TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
        return TraceMode;
      }({});

      /**
       * A derivation is everything that can be derived from the state (all the atoms) in a pure manner.
       * See https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
       */

      class CaughtException {
        constructor(cause) {
          this.cause = cause;
        } // Empty
      }

      function isCaughtException(e) {
        return e instanceof CaughtException;
      }

      /**
       * Finds out whether any dependency of the derivation has actually changed.
       * If dependenciesState is 1 then it will recalculate dependencies,
       * if any dependency changed it will propagate it by changing dependenciesState to 2.
       *
       * By iterating over the dependencies in the same order that they were reported and
       * stopping on the first change, all the recalculations are only called for ComputedValues
       * that will be tracked by derivation. That is because we assume that if the first x
       * dependencies of the derivation doesn't change then the derivation should run the same way
       * up until accessing x-th dependency.
       */
      function shouldCompute(derivation) {
        switch (derivation.dependenciesState_) {
          case IDerivationState_.UP_TO_DATE_:
            return false;
          case IDerivationState_.NOT_TRACKING_:
          case IDerivationState_.STALE_:
            return true;
          case IDerivationState_.POSSIBLY_STALE_:
            {
              // state propagation can occur outside of action/reactive context #2195
              const prevAllowStateReads = allowStateReadsStart(true);
              const prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
              const obs = derivation.observing_,
                l = obs.length;
              for (let i = 0; i < l; i++) {
                const obj = obs[i];
                if (isComputedValue(obj)) {
                  if (globalState.disableErrorBoundaries) {
                    obj.get();
                  } else {
                    try {
                      obj.get();
                    } catch (e) {
                      // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                      untrackedEnd(prevUntracked);
                      allowStateReadsEnd(prevAllowStateReads);
                      return true;
                    }
                  }
                  // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                  // and `derivation` is an observer of `obj`
                  // invariantShouldCompute(derivation)
                  if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                    untrackedEnd(prevUntracked);
                    allowStateReadsEnd(prevAllowStateReads);
                    return true;
                  }
                }
              }
              changeDependenciesStateTo0(derivation);
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return false;
            }
        }
      }
      function checkIfStateModificationsAreAllowed(atom) {
        const hasObservers = atom.observers_.size > 0;
        // Should not be possible to change observed state outside strict mode, except during initialization, see #563
        if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
          console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
        }
      }
      function checkIfStateReadsAreAllowed(observable) {
        if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
          console.warn(`[mobx] Observable '${observable.name_}' being read outside a reactive context.`);
        }
      }

      /**
       * Executes the provided function `f` and tracks which observables are being accessed.
       * The tracking information is stored on the `derivation` object and the derivation is registered
       * as observer of any of the accessed observables.
       */
      function trackDerivedFunction(derivation, f, context) {
        const prevAllowStateReads = allowStateReadsStart(true);
        changeDependenciesStateTo0(derivation);
        // Preallocate array; will be trimmed by bindDependencies.
        derivation.newObserving_ = new Array(
        // Reserve constant space for initial dependencies, dynamic space otherwise.
        // See https://github.com/mobxjs/mobx/pull/3833
        derivation.runId_ === 0 ? 100 : derivation.observing_.length);
        derivation.unboundDepsCount_ = 0;
        derivation.runId_ = ++globalState.runId;
        const prevTracking = globalState.trackingDerivation;
        globalState.trackingDerivation = derivation;
        globalState.inBatch++;
        let result;
        if (globalState.disableErrorBoundaries === true) {
          result = f.call(context);
        } else {
          try {
            result = f.call(context);
          } catch (e) {
            result = new CaughtException(e);
          }
        }
        globalState.inBatch--;
        globalState.trackingDerivation = prevTracking;
        bindDependencies(derivation);
        warnAboutDerivationWithoutDependencies(derivation);
        allowStateReadsEnd(prevAllowStateReads);
        return result;
      }
      function warnAboutDerivationWithoutDependencies(derivation) {
        if (derivation.observing_.length !== 0) {
          return;
        }
        if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
          console.warn(`[mobx] Derivation '${derivation.name_}' is created/updated without reading any observable value.`);
        }
      }

      /**
       * diffs newObserving with observing.
       * update observing to be newObserving with unique observables
       * notify observers that become observed/unobserved
       */
      function bindDependencies(derivation) {
        // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
        const prevObserving = derivation.observing_;
        const observing = derivation.observing_ = derivation.newObserving_;
        let lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;

        // Go through all new observables and check diffValue: (this list can contain duplicates):
        //   0: first occurrence, change to 1 and keep it
        //   1: extra occurrence, drop it
        let i0 = 0,
          l = derivation.unboundDepsCount_;
        for (let i = 0; i < l; i++) {
          const dep = observing[i];
          if (dep.diffValue_ === 0) {
            dep.diffValue_ = 1;
            if (i0 !== i) {
              observing[i0] = dep;
            }
            i0++;
          }

          // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
          // not hitting the condition
          if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState_;
          }
        }
        observing.length = i0;
        derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)

        // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
        //   0: it's not in new observables, unobserve it
        //   1: it keeps being observed, don't want to notify it. change to 0
        l = prevObserving.length;
        while (l--) {
          const dep = prevObserving[l];
          if (dep.diffValue_ === 0) {
            removeObserver(dep, derivation);
          }
          dep.diffValue_ = 0;
        }

        // Go through all new observables and check diffValue: (now it should be unique)
        //   0: it was set to 0 in last loop. don't need to do anything.
        //   1: it wasn't observed, let's observe it. set back to 0
        while (i0--) {
          const dep = observing[i0];
          if (dep.diffValue_ === 1) {
            dep.diffValue_ = 0;
            addObserver(dep, derivation);
          }
        }

        // Some new observed derivations may become stale during this derivation computation
        // so they have had no chance to propagate staleness (#916)
        if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
          derivation.dependenciesState_ = lowestNewObservingDerivationState;
          derivation.onBecomeStale_();
        }
      }
      function clearObserving(derivation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
        const obs = derivation.observing_;
        derivation.observing_ = [];
        let i = obs.length;
        while (i--) {
          removeObserver(obs[i], derivation);
        }
        derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      }
      function untracked(action) {
        const prev = untrackedStart();
        try {
          return action();
        } finally {
          untrackedEnd(prev);
        }
      }
      function untrackedStart() {
        const prev = globalState.trackingDerivation;
        globalState.trackingDerivation = null;
        return prev;
      }
      function untrackedEnd(prev) {
        globalState.trackingDerivation = prev;
      }
      function allowStateReadsStart(allowStateReads) {
        const prev = globalState.allowStateReads;
        globalState.allowStateReads = allowStateReads;
        return prev;
      }
      function allowStateReadsEnd(prev) {
        globalState.allowStateReads = prev;
      }

      /**
       * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
       *
       */
      function changeDependenciesStateTo0(derivation) {
        if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
          return;
        }
        derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
        const obs = derivation.observing_;
        let i = obs.length;
        while (i--) {
          obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "512048gtJ5KN43XvY0wz2S5", "globalstate", undefined);
      class MobXGlobals {
        constructor() {
          /**
           * MobXGlobals version.
           * MobX compatiblity with other versions loaded in memory as long as this version matches.
           * It indicates that the global state still stores similar information
           *
           * N.B: this version is unrelated to the package version of MobX, and is only the version of the
           * internal state storage of MobX, and can be the same across many different package versions
           */
          this.version = 6;
          /**
           * globally unique token to signal unchanged
           */
          this.UNCHANGED = {};
          /**
           * Currently running derivation
           */
          this.trackingDerivation = null;
          /**
           * Currently running reaction. This determines if we currently have a reactive context.
           * (Tracking derivation is also set for temporal tracking of computed values inside actions,
           * but trackingReaction can only be set by a form of Reaction)
           */
          this.trackingContext = null;
          /**
           * Each time a derivation is tracked, it is assigned a unique run-id
           */
          this.runId = 0;
          /**
           * 'guid' for general purpose. Will be persisted amongst resets.
           */
          this.mobxGuid = 0;
          /**
           * Are we in a batch block? (and how many of them)
           */
          this.inBatch = 0;
          /**
           * Observables that don't have observers anymore, and are about to be
           * suspended, unless somebody else accesses it in the same batch
           *
           * @type {IObservable[]}
           */
          this.pendingUnobservations = [];
          /**
           * List of scheduled, not yet executed, reactions.
           */
          this.pendingReactions = [];
          /**
           * Are we currently processing reactions?
           */
          this.isRunningReactions = false;
          /**
           * Is it allowed to change observables at this point?
           * In general, MobX doesn't allow that when running computations and React.render.
           * To ensure that those functions stay pure.
           */
          this.allowStateChanges = false;
          /**
           * Is it allowed to read observables at this point?
           * Used to hold the state needed for `observableRequiresReaction`
           */
          this.allowStateReads = true;
          /**
           * If strict mode is enabled, state changes are by default not allowed
           */
          this.enforceActions = true;
          /**
           * Spy callbacks
           */
          this.spyListeners = [];
          /**
           * Globally attached error handlers that react specifically to errors in reactions
           */
          this.globalReactionErrorHandlers = [];
          /**
           * Warn if computed values are accessed outside a reactive context
           */
          this.computedRequiresReaction = false;
          /**
           * (Experimental)
           * Warn if you try to create to derivation / reactive context without accessing any observable.
           */
          this.reactionRequiresObservable = false;
          /**
           * (Experimental)
           * Warn if observables are accessed outside a reactive context
           */
          this.observableRequiresReaction = false;
          /*
           * Don't catch and rethrow exceptions. This is useful for inspecting the state of
           * the stack when an exception occurs while debugging.
           */
          this.disableErrorBoundaries = false;
          /*
           * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
           * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
           */
          this.suppressReactionErrors = false;
          this.useProxies = true;
          /*
           * print warnings about code that would fail if proxies weren't available
           */
          this.verifyProxies = false;
          /**
           * False forces all object's descriptors to
           * writable: true
           * configurable: true
           */
          this.safeDescriptors = true;
        }
      }
      let canMergeGlobalState = true;
      let globalState = function () {
        let global = getGlobal();
        if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
          canMergeGlobalState = false;
        }
        if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) {
          canMergeGlobalState = false;
        }
        if (!canMergeGlobalState) {
          // Because this is a IIFE we need to let isolateCalled a chance to change
          // so we run it after the event loop completed at least 1 iteration
          setTimeout(() => {
            {
              die(35);
            }
          }, 1);
          return new MobXGlobals();
        } else if (global.__mobxGlobals) {
          global.__mobxInstanceCount += 1;
          if (!global.__mobxGlobals.UNCHANGED) {
            global.__mobxGlobals.UNCHANGED = {};
          } // make merge backward compatible
          return global.__mobxGlobals;
        } else {
          global.__mobxInstanceCount = 1;
          return global.__mobxGlobals = new MobXGlobals();
        }
      }();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cfaeet1LD1IsK9A0BP26KWo", "observable", undefined);

      // function invariantObservers(observable: IObservable) {
      //     const list = observable.observers
      //     const map = observable.observersIndexes
      //     const l = list.length
      //     for (let i = 0; i < l; i++) {
      //         const id = list[i].__mapid
      //         if (i) {
      //             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
      //         } else {
      //             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
      //         }
      //     }
      //     invariant(
      //         list.length === 0 || Object.keys(map).length === list.length - 1,
      //         "INTERNAL ERROR there is no junk in map"
      //     )
      // }
      function addObserver(observable, node) {
        // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
        // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
        // invariantObservers(observable);

        observable.observers_.add(node);
        if (observable.lowestObserverState_ > node.dependenciesState_) {
          observable.lowestObserverState_ = node.dependenciesState_;
        }

        // invariantObservers(observable);
        // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
      }

      function removeObserver(observable, node) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
        // invariantObservers(observable);
        observable.observers_.delete(node);
        if (observable.observers_.size === 0) {
          // deleting last observer
          queueForUnobservation(observable);
        }
        // invariantObservers(observable);
        // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
      }

      function queueForUnobservation(observable) {
        if (observable.isPendingUnobservation_ === false) {
          // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
          observable.isPendingUnobservation_ = true;
          globalState.pendingUnobservations.push(observable);
        }
      }

      /**
       * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
       * During a batch `onBecomeUnobserved` will be called at most once per observable.
       * Avoids unnecessary recalculations.
       */
      function startBatch() {
        globalState.inBatch++;
      }
      function endBatch() {
        if (--globalState.inBatch === 0) {
          runReactions();
          // the batch is actually about to finish, all unobserving should happen here.
          const list = globalState.pendingUnobservations;
          for (let i = 0; i < list.length; i++) {
            const observable = list[i];
            observable.isPendingUnobservation_ = false;
            if (observable.observers_.size === 0) {
              if (observable.isBeingObserved_) {
                // if this observable had reactive observers, trigger the hooks
                observable.isBeingObserved_ = false;
                observable.onBUO();
              }
              if (observable instanceof ComputedValue) {
                // computed values are automatically teared down when the last observer leaves
                // this process happens recursively, this computed might be the last observabe of another, etc..
                observable.suspend_();
              }
            }
          }
          globalState.pendingUnobservations = [];
        }
      }
      function reportObserved(observable) {
        checkIfStateReadsAreAllowed(observable);
        const derivation = globalState.trackingDerivation;
        if (derivation !== null) {
          /**
           * Simple optimization, give each derivation run an unique id (runId)
           * Check if last time this observable was accessed the same runId is used
           * if this is the case, the relation is already known
           */
          if (derivation.runId_ !== observable.lastAccessedBy_) {
            observable.lastAccessedBy_ = derivation.runId_;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
            if (!observable.isBeingObserved_ && globalState.trackingContext) {
              observable.isBeingObserved_ = true;
              observable.onBO();
            }
          }
          return observable.isBeingObserved_;
        } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
          queueForUnobservation(observable);
        }
        return false;
      }

      // function invariantLOS(observable: IObservable, msg: string) {
      //     // it's expensive so better not run it in produciton. but temporarily helpful for testing
      //     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
      //     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
      //     throw new Error(
      //         "lowestObserverState is wrong for " +
      //             msg +
      //             " because " +
      //             min +
      //             " < " +
      //             observable.lowestObserverState
      //     )
      // }

      /**
       * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
       * It will propagate changes to observers from previous run
       * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
       * Hopefully self reruning autoruns aren't a feature people should depend on
       * Also most basic use cases should be ok
       */

      // Called by Atom when its value changes
      function propagateChanged(observable) {
        // invariantLOS(observable, "changed start");
        if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
          return;
        }
        observable.lowestObserverState_ = IDerivationState_.STALE_;

        // Ideally we use for..of here, but the downcompiled version is really slow...
        observable.observers_.forEach(d => {
          if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            if (d.isTracing_ !== TraceMode.NONE) {
              logTraceInfo(d, observable);
            }
            d.onBecomeStale_();
          }
          d.dependenciesState_ = IDerivationState_.STALE_;
        });
        // invariantLOS(observable, "changed end");
      }

      // Called by ComputedValue when it recalculate and its value changed
      function propagateChangeConfirmed(observable) {
        // invariantLOS(observable, "confirmed start");
        if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
          return;
        }
        observable.lowestObserverState_ = IDerivationState_.STALE_;
        observable.observers_.forEach(d => {
          if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
            d.dependenciesState_ = IDerivationState_.STALE_;
            if (d.isTracing_ !== TraceMode.NONE) {
              logTraceInfo(d, observable);
            }
          } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
          ) {
            observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
          }
        });
        // invariantLOS(observable, "confirmed end");
      }

      // Used by computed when its dependency changed, but we don't wan't to immediately recompute.
      function propagateMaybeChanged(observable) {
        // invariantLOS(observable, "maybe start");
        if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
          return;
        }
        observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
        observable.observers_.forEach(d => {
          if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
            d.onBecomeStale_();
          }
        });
        // invariantLOS(observable, "maybe end");
      }

      function logTraceInfo(derivation, observable) {
        console.log(`[mobx.trace] '${derivation.name_}' is invalidated due to a change in: '${observable.name_}'`);
        if (derivation.isTracing_ === TraceMode.BREAK) {
          const lines = [];
          printDepTree(getDependencyTree(derivation), lines, 1);

          // prettier-ignore
          new Function(`debugger;
/*
Tracing '${derivation.name_}'

You are entering this break point because derivation '${derivation.name_}' is being traced and '${observable.name_}' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

${derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : ""}

The dependencies for this derivation are:

${lines.join("\n")}
*/
    `)();
        }
      }
      function printDepTree(tree, lines, depth) {
        if (lines.length >= 1000) {
          lines.push("(and many more)");
          return;
        }
        lines.push(`${"\t".repeat(depth - 1)}${tree.name}`);
        if (tree.dependencies) {
          tree.dependencies.forEach(child => printDepTree(child, lines, depth + 1));
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cf792Tldp5NDbqtjSqCE8lZ", "reaction", undefined);

      /**
       * Reactions are a special kind of derivations. Several things distinguishes them from normal reactive computations
       *
       * 1) They will always run, whether they are used by other computations or not.
       * This means that they are very suitable for triggering side effects like logging, updating the DOM and making network requests.
       * 2) They are not observable themselves
       * 3) They will always run after any 'normal' derivations
       * 4) They are allowed to change the state and thereby triggering themselves again, as long as they make sure the state propagates to a stable state in a reasonable amount of iterations.
       *
       * The state machine of a Reaction is as follows:
       *
       * 1) after creating, the reaction should be started by calling `runReaction` or by scheduling it (see also `autorun`)
       * 2) the `onInvalidate` handler should somehow result in a call to `this.track(someFunction)`
       * 3) all observables accessed in `someFunction` will be observed by this reaction.
       * 4) as soon as some of the dependencies has changed the Reaction will be rescheduled for another run (after the current mutation or transaction). `isScheduled` will yield true once a dependency is stale and during this period
       * 5) `onInvalidate` will be called, and we are back at step 1.
       *
       */

      class Reaction {
        constructor(name_, onInvalidate_, errorHandler_, requiresObservable_) {
          if (name_ === void 0) {
            name_ = "Reaction@" + getNextId();
          }
          this.observing_ = [];
          // nodes we are looking at. Our value depends on these nodes
          this.newObserving_ = [];
          this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
          this.diffValue_ = 0;
          this.runId_ = 0;
          this.unboundDepsCount_ = 0;
          this.isDisposed_ = false;
          this.isScheduled_ = false;
          this.isTrackPending_ = false;
          this.isRunning_ = false;
          this.isTracing_ = TraceMode.NONE;
          this.name_ = name_;
          this.onInvalidate_ = onInvalidate_;
          this.errorHandler_ = errorHandler_;
          this.requiresObservable_ = requiresObservable_;
        }
        onBecomeStale_() {
          this.schedule_();
        }
        schedule_() {
          if (!this.isScheduled_) {
            this.isScheduled_ = true;
            globalState.pendingReactions.push(this);
            runReactions();
          }
        }
        isScheduled() {
          return this.isScheduled_;
        }

        /**
         * internal, use schedule() if you intend to kick off a reaction
         */
        runReaction_() {
          if (!this.isDisposed_) {
            startBatch();
            this.isScheduled_ = false;
            const prev = globalState.trackingContext;
            globalState.trackingContext = this;
            if (shouldCompute(this)) {
              this.isTrackPending_ = true;
              try {
                this.onInvalidate_();
                if (true && this.isTrackPending_ && isSpyEnabled()) {
                  // onInvalidate didn't trigger track right away..
                  spyReport({
                    name: this.name_,
                    type: "scheduled-reaction"
                  });
                }
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            globalState.trackingContext = prev;
            endBatch();
          }
        }
        track(fn) {
          if (this.isDisposed_) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
          }

          startBatch();
          const notify = isSpyEnabled();
          let startTime;
          if (notify) {
            startTime = Date.now();
            spyReportStart({
              name: this.name_,
              type: "reaction"
            });
          }
          this.isRunning_ = true;
          const prevReaction = globalState.trackingContext; // reactions could create reactions...
          globalState.trackingContext = this;
          const result = trackDerivedFunction(this, fn, undefined);
          globalState.trackingContext = prevReaction;
          this.isRunning_ = false;
          this.isTrackPending_ = false;
          if (this.isDisposed_) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
          }
          if (isCaughtException(result)) {
            this.reportExceptionInDerivation_(result.cause);
          }
          if (notify) {
            spyReportEnd({
              time: Date.now() - startTime
            });
          }
          endBatch();
        }
        reportExceptionInDerivation_(error) {
          if (this.errorHandler_) {
            this.errorHandler_(error, this);
            return;
          }
          if (globalState.disableErrorBoundaries) {
            throw error;
          }
          const message = `[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '${this}'`;
          if (!globalState.suppressReactionErrors) {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
          } else {
            console.warn(`[mobx] (error in reaction '${this.name_}' suppressed, fix error of causing action below)`);
          } // prettier-ignore

          if (isSpyEnabled()) {
            spyReport({
              type: "error",
              name: this.name_,
              message,
              error: "" + error
            });
          }
          globalState.globalReactionErrorHandlers.forEach(f => f(error, this));
        }
        dispose() {
          if (!this.isDisposed_) {
            this.isDisposed_ = true;
            if (!this.isRunning_) {
              // if disposed while running, clean up later. Maybe not optimal, but rare case
              startBatch();
              clearObserving(this);
              endBatch();
            }
          }
        }
        getDisposer_(abortSignal) {
          const dispose = () => {
            this.dispose();
            abortSignal?.removeEventListener?.("abort", dispose);
          };
          abortSignal?.addEventListener?.("abort", dispose);
          dispose[$mobx] = this;
          return dispose;
        }
        toString() {
          return `Reaction[${this.name_}]`;
        }
        trace(enterBreakPoint) {
          if (enterBreakPoint === void 0) {
            enterBreakPoint = false;
          }
          trace(this, enterBreakPoint);
        }
      }

      /**
       * Magic number alert!
       * Defines within how many times a reaction is allowed to re-trigger itself
       * until it is assumed that this is gonna be a never ending loop...
       */
      const MAX_REACTION_ITERATIONS = 100;
      let reactionScheduler = f => f();
      function runReactions() {
        // Trampolining, if runReactions are already running, new reactions will be picked up
        if (globalState.inBatch > 0 || globalState.isRunningReactions) {
          return;
        }
        reactionScheduler(runReactionsHelper);
      }
      function runReactionsHelper() {
        globalState.isRunningReactions = true;
        const allReactions = globalState.pendingReactions;
        let iterations = 0;

        // While running reactions, new reactions might be triggered.
        // Hence we work with two variables and check whether
        // we converge to no remaining reactions after a while.
        while (allReactions.length > 0) {
          if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error(`Reaction doesn't converge to a stable state after ${MAX_REACTION_ITERATIONS} iterations.` + ` Probably there is a cycle in the reactive function: ${allReactions[0]}`);
            allReactions.splice(0); // clear reactions
          }

          let remainingReactions = allReactions.splice(0);
          for (let i = 0, l = remainingReactions.length; i < l; i++) {
            remainingReactions[i].runReaction_();
          }
        }
        globalState.isRunningReactions = false;
      }
      const isReaction = createInstanceofPredicate("Reaction", Reaction);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "696ccvRZv1Bdad7SLPi5PUH", "spy", undefined); // @ts-nocheck
      function isSpyEnabled() {
        return !!globalState.spyListeners.length;
      }
      function spyReport(event) {
        if (!globalState.spyListeners.length) {
          return;
        }
        const listeners = globalState.spyListeners;
        for (let i = 0, l = listeners.length; i < l; i++) {
          listeners[i](event);
        }
      }
      function spyReportStart(event) {
        const change = {
          ...event,
          spyReportStart: true
        };
        spyReport(change);
      }
      const END_EVENT = {
        type: "report-end",
        spyReportEnd: true
      };
      function spyReportEnd(change) {
        if (change) {
          spyReport({
            ...change,
            type: "report-end",
            spyReportEnd: true
          });
        } else {
          spyReport(END_EVENT);
        }
      }
      function spy(listener) {
        {
          globalState.spyListeners.push(listener);
          return once(() => {
            globalState.spyListeners = globalState.spyListeners.filter(l => l !== listener);
          });
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e1a47+ne8FLkpjJCNXpFRst", "action", undefined);
      const ACTION = "action";
      const ACTION_BOUND = "action.bound";
      const AUTOACTION = "autoAction";
      const AUTOACTION_BOUND = "autoAction.bound";
      const DEFAULT_ACTION_NAME = "<unnamed action>";
      const actionAnnotation = createActionAnnotation(ACTION);
      const actionBoundAnnotation = createActionAnnotation(ACTION_BOUND, {
        bound: true
      });
      const autoActionAnnotation = createActionAnnotation(AUTOACTION, {
        autoAction: true
      });
      const autoActionBoundAnnotation = createActionAnnotation(AUTOACTION_BOUND, {
        autoAction: true,
        bound: true
      });
      function createActionFactory(autoAction) {
        const res = function action(arg1, arg2) {
          // action(fn() {})
          if (isFunction(arg1)) {
            return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
          }
          // action("name", fn() {})
          if (isFunction(arg2)) {
            return createAction(arg1, arg2, autoAction);
          }
          // @action (2022.3 Decorators)
          if (is20223Decorator(arg2)) {
            return (autoAction ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
          }
          // @action
          if (isStringish(arg2)) {
            return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
          }
          // action("name") & @action("name")
          if (isStringish(arg1)) {
            return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
              name: arg1,
              autoAction
            }));
          }
          {
            die("Invalid arguments for `action`");
          }
        };
        return res;
      }
      const action = createActionFactory(false);
      Object.assign(action, actionAnnotation);
      const autoAction = createActionFactory(true);
      Object.assign(autoAction, autoActionAnnotation);
      action.bound = createDecoratorAnnotation(actionBoundAnnotation);
      autoAction.bound = createDecoratorAnnotation(autoActionBoundAnnotation);
      function runInAction(fn) {
        return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
      }
      function isAction(thing) {
        return isFunction(thing) && thing.isMobxAction === true;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e83dfy7VhhCvbuoSVdHFm1H", "autorun", undefined);
      /**
       * Creates a named reactive view and keeps it alive, so that the view is always
       * updated if one of the dependencies changes, even when the view is not further used by something else.
       * @param view The reactive view
       * @returns disposer function, which can be used to stop the view from being updated in the future.
       */
      function autorun(view, opts) {
        if (opts === void 0) {
          opts = EMPTY_OBJECT;
        }
        {
          if (!isFunction(view)) {
            die("Autorun expects a function as first argument");
          }
          if (isAction(view)) {
            die("Autorun does not accept actions since actions are untrackable");
          }
        }
        const name = opts?.name ?? (view.name || "Autorun@" + getNextId());
        const runSync = !opts.scheduler && !opts.delay;
        let reaction;
        if (runSync) {
          // normal autorun
          reaction = new Reaction(name, function () {
            this.track(reactionRunner);
          }, opts.onError, opts.requiresObservable);
        } else {
          const scheduler = createSchedulerFromOptions(opts);
          // debounced autorun
          let isScheduled = false;
          reaction = new Reaction(name, () => {
            if (!isScheduled) {
              isScheduled = true;
              scheduler(() => {
                isScheduled = false;
                if (!reaction.isDisposed_) {
                  reaction.track(reactionRunner);
                }
              });
            }
          }, opts.onError, opts.requiresObservable);
        }
        function reactionRunner() {
          view(reaction);
        }
        if (!opts?.signal?.aborted) {
          reaction.schedule_();
        }
        return reaction.getDisposer_(opts?.signal);
      }
      const run = f => f();
      function createSchedulerFromOptions(opts) {
        return opts.scheduler ? opts.scheduler : opts.delay ? f => setTimeout(f, opts.delay) : run;
      }
      function reaction(expression, effect, opts) {
        if (opts === void 0) {
          opts = EMPTY_OBJECT;
        }
        {
          if (!isFunction(expression) || !isFunction(effect)) {
            die("First and second argument to reaction should be functions");
          }
          if (!isPlainObject(opts)) {
            die("Third argument of reactions should be an object");
          }
        }
        const name = opts.name ?? "Reaction@" + getNextId();
        const effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
        const runSync = !opts.scheduler && !opts.delay;
        const scheduler = createSchedulerFromOptions(opts);
        let firstTime = true;
        let isScheduled = false;
        let value;
        const equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
        const r = new Reaction(name, () => {
          if (firstTime || runSync) {
            reactionRunner();
          } else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
          }
        }, opts.onError, opts.requiresObservable);
        function reactionRunner() {
          isScheduled = false;
          if (r.isDisposed_) {
            return;
          }
          let changed = false;
          const oldValue = value;
          r.track(() => {
            const nextValue = allowStateChanges(false, () => expression(r));
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
          });

          // This casting is nesessary as TS cannot infer proper type in current function implementation

          if (firstTime && opts.fireImmediately) {
            effectAction(value, oldValue, r);
          } else if (!firstTime && changed) {
            effectAction(value, oldValue, r);
          }
          firstTime = false;
        }
        if (!opts?.signal?.aborted) {
          r.schedule_();
        }
        return r.getDisposer_(opts?.signal);
      }
      function wrapErrorHandler(errorHandler, baseFn) {
        return function () {
          try {
            return baseFn.apply(this, arguments);
          } catch (e) {
            errorHandler.call(this, e);
          }
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "55465y62jZJB6JdN+kZdiLT", "become-observed", undefined);
      const ON_BECOME_OBSERVED = "onBO";
      const ON_BECOME_UNOBSERVED = "onBUO";
      function onBecomeObserved(thing, arg2, arg3) {
        return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
      }
      function onBecomeUnobserved(thing, arg2, arg3) {
        return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
      }
      function interceptHook(hook, thing, arg2, arg3) {
        const atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
        const cb = isFunction(arg3) ? arg3 : arg2;
        const listenersKey = `${hook}L`;
        if (atom[listenersKey]) {
          atom[listenersKey].add(cb);
        } else {
          atom[listenersKey] = new Set([cb]);
        }
        return function () {
          const hookListeners = atom[listenersKey];
          if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
              delete atom[listenersKey];
            }
          }
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9a03aBh/C9Jap2urFOIH4Sz", "configure", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "561212kmQ1PgbhSzr3ZlsRS", "extendobservable", undefined);
      function extendObservable(target, properties, annotations, options) {
        {
          if (arguments.length > 4) {
            die("'extendObservable' expected 2-4 arguments");
          }
          if (typeof target !== "object") {
            die("'extendObservable' expects an object as first argument");
          }
          if (isObservableMap(target)) {
            die("'extendObservable' should not be used on maps, use map.merge instead");
          }
          if (!isPlainObject(properties)) {
            die(`'extendObservable' only accepts plain objects as second argument`);
          }
          if (isObservable(properties) || isObservable(annotations)) {
            die(`Extending an object with another observable (object) is not supported`);
          }
        }
        // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)
        const descriptors = getOwnPropertyDescriptors(properties);
        initObservable(() => {
          const adm = asObservableObject(target, options)[$mobx];
          ownKeys(descriptors).forEach(key => {
            adm.extend_(key, descriptors[key],
            // must pass "undefined" for { key: undefined }
            !annotations ? true : key in annotations ? annotations[key] : true);
          });
        });
        return target;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "78db1yffw9I9J/VUknS21a6", "extras", undefined);
      function getDependencyTree(thing, property) {
        return nodeToDependencyTree(getAtom(thing, property));
      }
      function nodeToDependencyTree(node) {
        const result = {
          name: node.name_
        };
        if (node.observing_ && node.observing_.length > 0) {
          result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
        }
        return result;
      }
      function unique(list) {
        return Array.from(new Set(list));
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "65d86iKVvZLgoiMG5sZYSJF", "flow", undefined);
      let generatorId = 0;
      function FlowCancellationError() {
        this.message = "FLOW_CANCELLED";
      }
      FlowCancellationError.prototype = Object.create(Error.prototype);
      const flowAnnotation = createFlowAnnotation("flow");
      const flowBoundAnnotation = createFlowAnnotation("flow.bound", {
        bound: true
      });
      const flow = Object.assign(function flow(arg1, arg2) {
        // @flow (2022.3 Decorators)
        if (is20223Decorator(arg2)) {
          return flowAnnotation.decorate_20223_(arg1, arg2);
        }
        // @flow
        if (isStringish(arg2)) {
          return storeAnnotation(arg1, arg2, flowAnnotation);
        }
        // flow(fn)
        if (arguments.length !== 1) {
          die(`Flow expects single argument with generator function`);
        }
        const generator = arg1;
        const name = generator.name || "<unnamed flow>";

        // Implementation based on https://github.com/tj/co/blob/master/index.js
        const res = function () {
          const ctx = this;
          const args = arguments;
          const runId = ++generatorId;
          const gen = action(`${name} - runid: ${runId} - init`, generator).apply(ctx, args);
          let rejector;
          let pendingPromise = undefined;
          const promise = new Promise(function (resolve, reject) {
            let stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
              pendingPromise = undefined;
              let ret;
              try {
                ret = action(`${name} - runid: ${runId} - yield ${stepId++}`, gen.next).call(gen, res);
              } catch (e) {
                return reject(e);
              }
              next(ret);
            }
            function onRejected(err) {
              pendingPromise = undefined;
              let ret;
              try {
                ret = action(`${name} - runid: ${runId} - yield ${stepId++}`, gen.throw).call(gen, err);
              } catch (e) {
                return reject(e);
              }
              next(ret);
            }
            function next(ret) {
              if (isFunction(ret?.then)) {
                // an async iterator
                ret.then(next, reject);
                return;
              }
              if (ret.done) {
                return resolve(ret.value);
              }
              pendingPromise = Promise.resolve(ret.value);
              return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
          });

          promise.cancel = action(`${name} - runid: ${runId} - cancel`, function () {
            try {
              if (pendingPromise) {
                cancelPromise(pendingPromise);
              }
              // Finally block can return (or yield) stuff..
              const res = gen.return(undefined);
              // eat anything that promise would do, it's cancelled!
              const yieldedPromise = Promise.resolve(res.value);
              yieldedPromise.then(noop, noop);
              cancelPromise(yieldedPromise); // maybe it can be cancelled :)
              // reject our original promise
              rejector(new FlowCancellationError());
            } catch (e) {
              rejector(e); // there could be a throwing finally block
            }
          });

          return promise;
        };
        res.isMobXFlow = true;
        return res;
      }, flowAnnotation);
      flow.bound = createDecoratorAnnotation(flowBoundAnnotation);
      function cancelPromise(promise) {
        if (isFunction(promise.cancel)) {
          promise.cancel();
        }
      }
      function isFlow(fn) {
        return fn?.isMobXFlow === true;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5e0d1eA/qJBLK4X9T+Znk8y", "intercept-read", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3300c1DYaVMlZs6KQOt4isU", "intercept", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "447ffO9xexMGqTeciEQ4pCN", "iscomputed", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0a391mVehBAO4uVjXQ+Ig+e", "isobservable", undefined);
      function _isObservable(value, property) {
        if (!value) {
          return false;
        }
        if (property !== undefined) {
          if (isObservableMap(value) || isObservableArray(value)) {
            return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
          }
          if (isObservableObject(value)) {
            return value[$mobx].values_.has(property);
          }
          return false;
        }
        // For first check, see #701
        return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
      }
      function isObservable(value) {
        if (arguments.length !== 1) {
          die(`isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property`);
        }
        return _isObservable(value);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c0d701hJWdITIKkCm0dxZVe", "object-api", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3588akXLBpFopAUobGS345j", "observe", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f5762EUvDVNSpAosFndyYuI", "tojs", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6bd6f5u1hBN17UM7yGy8woO", "trace", undefined);
      function trace() {
        let enterBreakPoint = false;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (typeof args[args.length - 1] === "boolean") {
          enterBreakPoint = args.pop();
        }
        const derivation = getAtomFromArgs(args);
        if (!derivation) {
          return die(`'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly`);
        }
        if (derivation.isTracing_ === TraceMode.NONE) {
          console.log(`[mobx.trace] '${derivation.name_}' tracing enabled`);
        }
        derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
      }
      function getAtomFromArgs(args) {
        switch (args.length) {
          case 0:
            return globalState.trackingDerivation;
          case 1:
            return getAtom(args[0]);
          case 2:
            return getAtom(args[0], args[1]);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "09ee4hzmsNIopNXlS5ghwS8", "transaction", undefined);

      /**
       * During a transaction no views are updated until the end of the transaction.
       * The transaction will be run synchronously nonetheless.
       *
       * @param action a function that updates some reactive state
       * @returns any value that was returned by the 'action' parameter.
       */
      function transaction(action, thisArg) {
        if (thisArg === void 0) {
          thisArg = undefined;
        }
        startBatch();
        try {
          return action.apply(thisArg);
        } finally {
          endBatch();
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bdfcdPeeIVHEbPoc/MwTftZ", "when", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ed7b7IWyIhDjq2xZp84W0Z4", "dynamicobject", undefined);
      function getAdm(target) {
        return target[$mobx];
      }

      // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
      // and skip either the internal values map, or the base object with its property descriptors!
      const objectProxyTraps = {
        has(target, name) {
          if (globalState.trackingDerivation) {
            warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
          }
          return getAdm(target).has_(name);
        },
        get(target, name) {
          return getAdm(target).get_(name);
        },
        set(target, name, value) {
          if (!isStringish(name)) {
            return false;
          }
          if (!getAdm(target).values_.has(name)) {
            warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
          }
          // null (intercepted) -> true (success)
          return getAdm(target).set_(name, value, true) ?? true;
        },
        deleteProperty(target, name) {
          {
            warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
          }
          if (!isStringish(name)) {
            return false;
          }
          // null (intercepted) -> true (success)
          return getAdm(target).delete_(name, true) ?? true;
        },
        defineProperty(target, name, descriptor) {
          {
            warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
          }
          // null (intercepted) -> true (success)
          return getAdm(target).defineProperty_(name, descriptor) ?? true;
        },
        ownKeys(target) {
          if (globalState.trackingDerivation) {
            warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
          }
          return getAdm(target).ownKeys_();
        },
        preventExtensions(target) {
          die(13);
        }
      };
      function asDynamicObservableObject(target, options) {
        assertProxies();
        target = asObservableObject(target, options);
        return target[$mobx].proxy_ ??= new Proxy(target, objectProxyTraps);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e44b4zYohdHFIXq276MZ+3e", "intercept-utils", undefined);
      function hasInterceptors(interceptable) {
        return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
      }
      function registerInterceptor(interceptable, handler) {
        const interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
        interceptors.push(handler);
        return once(() => {
          const idx = interceptors.indexOf(handler);
          if (idx !== -1) {
            interceptors.splice(idx, 1);
          }
        });
      }
      function interceptChange(interceptable, change) {
        const prevU = untrackedStart();
        try {
          // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
          const interceptors = [...(interceptable.interceptors_ || [])];
          for (let i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            if (change && !change.type) {
              die(14);
            }
            if (!change) {
              break;
            }
          }
          return change;
        } finally {
          untrackedEnd(prevU);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ac428/rCztDxb0u8H05D4gJ", "listen-utils", undefined);
      function hasListeners(listenable) {
        return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
      }
      function registerListener(listenable, handler) {
        const listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
        listeners.push(handler);
        return once(() => {
          const idx = listeners.indexOf(handler);
          if (idx !== -1) {
            listeners.splice(idx, 1);
          }
        });
      }
      function notifyListeners(listenable, change) {
        const prevU = untrackedStart();
        let listeners = listenable.changeListeners_;
        if (!listeners) {
          return;
        }
        listeners = listeners.slice();
        for (let i = 0, l = listeners.length; i < l; i++) {
          listeners[i](change);
        }
        untrackedEnd(prevU);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3a69dZCXjdAzIwio+61i1Z3", "makeObservable", undefined);

      // Hack based on https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-322267089
      // We need this, because otherwise, AdditionalKeys is going to be inferred to be any
      // set of superfluous keys. But, we rather want to get a compile error unless AdditionalKeys is
      // _explicity_ passed as generic argument
      // Fixes: https://github.com/mobxjs/mobx/issues/2325#issuecomment-691070022
      function makeObservable(target, annotations, options) {
        initObservable(() => {
          const adm = asObservableObject(target, options)[$mobx];
          if (true && annotations && target[storedAnnotationsSymbol]) {
            die(`makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.`);
          }
          // Default to decorators
          annotations ??= collectStoredAnnotations(target);

          // Annotate
          ownKeys(annotations).forEach(key => adm.make_(key, annotations[key]));
        });
        return target;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "732bc4Y30RCT6gil5ZFKja5", "observablearray", undefined);
      const SPLICE = "splice";
      const UPDATE = "update";
      const MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

      const arrayTraps = {
        get(target, name) {
          const adm = target[$mobx];
          if (name === $mobx) {
            return adm;
          }
          if (name === "length") {
            return adm.getArrayLength_();
          }
          if (typeof name === "string" && !isNaN(name)) {
            return adm.get_(parseInt(name));
          }
          if (hasProp(arrayExtensions, name)) {
            return arrayExtensions[name];
          }
          return target[name];
        },
        set(target, name, value) {
          const adm = target[$mobx];
          if (name === "length") {
            adm.setArrayLength_(value);
          }
          if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
          } else {
            // numeric string
            adm.set_(parseInt(name), value);
          }
          return true;
        },
        preventExtensions() {
          die(15);
        }
      };
      class ObservableArrayAdministration {
        constructor(name, enhancer, owned_, legacyMode_) {
          if (name === void 0) {
            name = "ObservableArray@" + getNextId();
          }
          this.atom_ = void 0;
          this.values_ = [];
          // this is the prop that gets proxied, so can't replace it!
          this.interceptors_ = void 0;
          this.changeListeners_ = void 0;
          this.enhancer_ = void 0;
          this.dehancer = void 0;
          this.proxy_ = void 0;
          this.lastKnownLength_ = 0;
          this.owned_ = owned_;
          this.legacyMode_ = legacyMode_;
          this.atom_ = new Atom(name);
          this.enhancer_ = (newV, oldV) => enhancer(newV, oldV, name + "[..]");
        }
        dehanceValue_(value) {
          if (this.dehancer !== undefined) {
            return this.dehancer(value);
          }
          return value;
        }
        dehanceValues_(values) {
          if (this.dehancer !== undefined && values.length > 0) {
            return values.map(this.dehancer);
          }
          return values;
        }
        intercept_(handler) {
          return registerInterceptor(this, handler);
        }
        observe_(listener, fireImmediately) {
          if (fireImmediately === void 0) {
            fireImmediately = false;
          }
          if (fireImmediately) {
            listener({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0
            });
          }
          return registerListener(this, listener);
        }
        getArrayLength_() {
          this.atom_.reportObserved();
          return this.values_.length;
        }
        setArrayLength_(newLength) {
          if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
            die("Out of range: " + newLength);
          }
          let currentLength = this.values_.length;
          if (newLength === currentLength) {
            return;
          } else if (newLength > currentLength) {
            const newItems = new Array(newLength - currentLength);
            for (let i = 0; i < newLength - currentLength; i++) {
              newItems[i] = undefined;
            } // No Array.fill everywhere...
            this.spliceWithArray_(currentLength, 0, newItems);
          } else {
            this.spliceWithArray_(newLength, currentLength - newLength);
          }
        }
        updateArrayLength_(oldLength, delta) {
          if (oldLength !== this.lastKnownLength_) {
            die(16);
          }
          this.lastKnownLength_ += delta;
          if (this.legacyMode_ && delta > 0) {
            reserveArrayBuffer(oldLength + delta + 1);
          }
        }
        spliceWithArray_(index, deleteCount, newItems) {
          checkIfStateModificationsAreAllowed(this.atom_);
          const length = this.values_.length;
          if (index === undefined) {
            index = 0;
          } else if (index > length) {
            index = length;
          } else if (index < 0) {
            index = Math.max(0, length + index);
          }
          if (arguments.length === 1) {
            deleteCount = length - index;
          } else if (deleteCount === undefined || deleteCount === null) {
            deleteCount = 0;
          } else {
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
          }
          if (newItems === undefined) {
            newItems = EMPTY_ARRAY;
          }
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              object: this.proxy_,
              type: SPLICE,
              index,
              removedCount: deleteCount,
              added: newItems
            });
            if (!change) {
              return EMPTY_ARRAY;
            }
            deleteCount = change.removedCount;
            newItems = change.added;
          }
          newItems = newItems.length === 0 ? newItems : newItems.map(v => this.enhancer_(v, undefined));
          if (this.legacyMode_ || true) {
            const lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
          }

          const res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
          if (deleteCount !== 0 || newItems.length !== 0) {
            this.notifyArraySplice_(index, newItems, res);
          }
          return this.dehanceValues_(res);
        }
        spliceItemsIntoValues_(index, deleteCount, newItems) {
          if (newItems.length < MAX_SPLICE_SIZE) {
            return this.values_.splice(index, deleteCount, ...newItems);
          } else {
            // The items removed by the splice
            const res = this.values_.slice(index, index + deleteCount);
            // The items that that should remain at the end of the array
            let oldItems = this.values_.slice(index + deleteCount);
            // New length is the previous length + addition count - deletion count
            this.values_.length += newItems.length - deleteCount;
            for (let i = 0; i < newItems.length; i++) {
              this.values_[index + i] = newItems[i];
            }
            for (let i = 0; i < oldItems.length; i++) {
              this.values_[index + newItems.length + i] = oldItems[i];
            }
            return res;
          }
        }
        notifyArrayChildUpdate_(index, newValue, oldValue) {
          const notifySpy = !this.owned_ && isSpyEnabled();
          const notify = hasListeners(this);
          const change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            type: UPDATE,
            debugObjectName: this.atom_.name_,
            index,
            newValue,
            oldValue
          } : null;

          // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
          // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
          if (notifySpy) {
            spyReportStart(change);
          }
          this.atom_.reportChanged();
          if (notify) {
            notifyListeners(this, change);
          }
          if (notifySpy) {
            spyReportEnd();
          }
        }
        notifyArraySplice_(index, added, removed) {
          const notifySpy = !this.owned_ && isSpyEnabled();
          const notify = hasListeners(this);
          const change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: SPLICE,
            index,
            removed,
            added,
            removedCount: removed.length,
            addedCount: added.length
          } : null;
          if (notifySpy) {
            spyReportStart(change);
          }
          this.atom_.reportChanged();
          // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
          if (notify) {
            notifyListeners(this, change);
          }
          if (notifySpy) {
            spyReportEnd();
          }
        }
        get_(index) {
          if (this.legacyMode_ && index >= this.values_.length) {
            console.warn(`[mobx.array] Attempt to read an array index (${index}) that is out of bounds (${this.values_.length}). Please check length first. Out of bound indices will not be tracked by MobX`);
            return undefined;
          }
          this.atom_.reportObserved();
          return this.dehanceValue_(this.values_[index]);
        }
        set_(index, newValue) {
          const values = this.values_;
          if (this.legacyMode_ && index > values.length) {
            // out of bounds
            die(17, index, values.length);
          }
          if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(this.atom_);
            const oldValue = values[index];
            if (hasInterceptors(this)) {
              const change = interceptChange(this, {
                type: UPDATE,
                object: this.proxy_,
                // since "this" is the real array we need to pass its proxy
                index,
                newValue
              });
              if (!change) {
                return;
              }
              newValue = change.newValue;
            }
            newValue = this.enhancer_(newValue, oldValue);
            const changed = newValue !== oldValue;
            if (changed) {
              values[index] = newValue;
              this.notifyArrayChildUpdate_(index, newValue, oldValue);
            }
          } else {
            // For out of bound index, we don't create an actual sparse array,
            // but rather fill the holes with undefined (same as setArrayLength_).
            // This could be considered a bug.
            const newItems = new Array(index + 1 - values.length);
            for (let i = 0; i < newItems.length - 1; i++) {
              newItems[i] = undefined;
            } // No Array.fill everywhere...
            newItems[newItems.length - 1] = newValue;
            this.spliceWithArray_(values.length, 0, newItems);
          }
        }
      }
      function createObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) {
          name = "ObservableArray@" + getNextId();
        }
        if (owned === void 0) {
          owned = false;
        }
        assertProxies();
        return initObservable(() => {
          const adm = new ObservableArrayAdministration(name, enhancer, owned, false);
          addHiddenFinalProp(adm.values_, $mobx, adm);
          const proxy = new Proxy(adm.values_, arrayTraps);
          adm.proxy_ = proxy;
          if (initialValues && initialValues.length) {
            adm.spliceWithArray_(0, 0, initialValues);
          }
          return proxy;
        });
      }

      // eslint-disable-next-line
      var arrayExtensions = {
        clear() {
          return this.splice(0);
        },
        replace(newItems) {
          const adm = this[$mobx];
          return adm.spliceWithArray_(0, adm.values_.length, newItems);
        },
        // Used by JSON.stringify
        toJSON() {
          return this.slice();
        },
        /*
         * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
         * since these functions alter the inner structure of the array, the have side effects.
         * Because the have side effects, they should not be used in computed function,
         * and for that reason the do not call dependencyState.notifyObserved
         */
        splice(index, deleteCount) {
          for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            newItems[_key - 2] = arguments[_key];
          }
          const adm = this[$mobx];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return adm.spliceWithArray_(index);
            case 2:
              return adm.spliceWithArray_(index, deleteCount);
          }
          return adm.spliceWithArray_(index, deleteCount, newItems);
        },
        spliceWithArray(index, deleteCount, newItems) {
          return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
        },
        push() {
          const adm = this[$mobx];
          for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            items[_key2] = arguments[_key2];
          }
          adm.spliceWithArray_(adm.values_.length, 0, items);
          return adm.values_.length;
        },
        pop() {
          return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
        },
        shift() {
          return this.splice(0, 1)[0];
        },
        unshift() {
          const adm = this[$mobx];
          for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            items[_key3] = arguments[_key3];
          }
          adm.spliceWithArray_(0, 0, items);
          return adm.values_.length;
        },
        reverse() {
          // reverse by default mutates in place before returning the result
          // which makes it both a 'derivation' and a 'mutation'.
          if (globalState.trackingDerivation) {
            die(37, "reverse");
          }
          this.replace(this.slice().reverse());
          return this;
        },
        sort() {
          // sort by default mutates in place before returning the result
          // which goes against all good practices. Let's not change the array in place!
          if (globalState.trackingDerivation) {
            die(37, "sort");
          }
          const copy = this.slice();
          copy.sort.apply(copy, arguments);
          this.replace(copy);
          return this;
        },
        remove(value) {
          const adm = this[$mobx];
          const idx = adm.dehanceValues_(adm.values_).indexOf(value);
          if (idx > -1) {
            this.splice(idx, 1);
            return true;
          }
          return false;
        }
      };

      /**
       * Wrap function from prototype
       * Without this, everything works as well, but this works
       * faster as everything works on unproxied values
       */
      addArrayExtension("at", simpleFunc);
      addArrayExtension("concat", simpleFunc);
      addArrayExtension("flat", simpleFunc);
      addArrayExtension("includes", simpleFunc);
      addArrayExtension("indexOf", simpleFunc);
      addArrayExtension("join", simpleFunc);
      addArrayExtension("lastIndexOf", simpleFunc);
      addArrayExtension("slice", simpleFunc);
      addArrayExtension("toString", simpleFunc);
      addArrayExtension("toLocaleString", simpleFunc);
      addArrayExtension("toSorted", simpleFunc);
      addArrayExtension("toSpliced", simpleFunc);
      addArrayExtension("with", simpleFunc);
      // map
      addArrayExtension("every", mapLikeFunc);
      addArrayExtension("filter", mapLikeFunc);
      addArrayExtension("find", mapLikeFunc);
      addArrayExtension("findIndex", mapLikeFunc);
      addArrayExtension("findLast", mapLikeFunc);
      addArrayExtension("findLastIndex", mapLikeFunc);
      addArrayExtension("flatMap", mapLikeFunc);
      addArrayExtension("forEach", mapLikeFunc);
      addArrayExtension("map", mapLikeFunc);
      addArrayExtension("some", mapLikeFunc);
      addArrayExtension("toReversed", mapLikeFunc);
      // reduce
      addArrayExtension("reduce", reduceLikeFunc);
      addArrayExtension("reduceRight", reduceLikeFunc);
      function addArrayExtension(funcName, funcFactory) {
        if (typeof Array.prototype[funcName] === "function") {
          arrayExtensions[funcName] = funcFactory(funcName);
        }
      }

      // Report and delegate to dehanced array
      function simpleFunc(funcName) {
        return function () {
          const adm = this[$mobx];
          adm.atom_.reportObserved();
          const dehancedValues = adm.dehanceValues_(adm.values_);
          return dehancedValues[funcName].apply(dehancedValues, arguments);
        };
      }

      // Make sure callbacks receive correct array arg #2326
      function mapLikeFunc(funcName) {
        return function (callback, thisArg) {
          const adm = this[$mobx];
          adm.atom_.reportObserved();
          const dehancedValues = adm.dehanceValues_(adm.values_);
          return dehancedValues[funcName]((element, index) => {
            return callback.call(thisArg, element, index, this);
          });
        };
      }

      // Make sure callbacks receive correct array arg #2326
      function reduceLikeFunc(funcName) {
        return function () {
          const adm = this[$mobx];
          adm.atom_.reportObserved();
          const dehancedValues = adm.dehanceValues_(adm.values_);
          // #2432 - reduce behavior depends on arguments.length
          const callback = arguments[0];
          arguments[0] = (accumulator, currentValue, index) => {
            return callback(accumulator, currentValue, index, this);
          };
          return dehancedValues[funcName].apply(dehancedValues, arguments);
        };
      }
      const isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
      function isObservableArray(thing) {
        return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
      }
      cclegacy._RF.pop();
      let _Symbol$iterator, _Symbol$toStringTag;
      cclegacy._RF.push({}, "9215912IslHhao4edytFE0P", "observablemap", undefined);
      const ObservableMapMarker = {};
      const ADD = "add";
      const DELETE = "delete";
      _Symbol$iterator = Symbol.iterator;
      _Symbol$toStringTag = Symbol.toStringTag;
      // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
      // But: https://github.com/mobxjs/mobx/issues/1556
      class ObservableMap {
        constructor(initialData, enhancer_, name_) {
          if (enhancer_ === void 0) {
            enhancer_ = deepEnhancer;
          }
          if (name_ === void 0) {
            name_ = "ObservableMap@" + getNextId();
          }
          this[$mobx] = ObservableMapMarker;
          this.data_ = void 0;
          this.hasMap_ = void 0;
          // hasMap, not hashMap >-).
          this.keysAtom_ = void 0;
          this.interceptors_ = void 0;
          this.changeListeners_ = void 0;
          this.dehancer = void 0;
          this.enhancer_ = enhancer_;
          this.name_ = name_;
          if (!isFunction(Map)) {
            die(18);
          }
          initObservable(() => {
            this.keysAtom_ = createAtom(true ? `${this.name_}.keys()` : "ObservableMap.keys()");
            this.data_ = new Map();
            this.hasMap_ = new Map();
            if (initialData) {
              this.merge(initialData);
            }
          });
        }
        has_(key) {
          return this.data_.has(key);
        }
        has(key) {
          if (!globalState.trackingDerivation) {
            return this.has_(key);
          }
          let entry = this.hasMap_.get(key);
          if (!entry) {
            const newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, `${this.name_}.${stringifyKey(key)}?`, false);
            this.hasMap_.set(key, newEntry);
            onBecomeUnobserved(newEntry, () => this.hasMap_.delete(key));
          }
          return entry.get();
        }
        set(key, value) {
          const hasKey = this.has_(key);
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              type: hasKey ? UPDATE : ADD,
              object: this,
              newValue: value,
              name: key
            });
            if (!change) {
              return this;
            }
            value = change.newValue;
          }
          if (hasKey) {
            this.updateValue_(key, value);
          } else {
            this.addValue_(key, value);
          }
          return this;
        }
        delete(key) {
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              type: DELETE,
              object: this,
              name: key
            });
            if (!change) {
              return false;
            }
          }
          if (this.has_(key)) {
            const notifySpy = isSpyEnabled();
            const notify = hasListeners(this);
            const change = notify || notifySpy ? {
              observableKind: "map",
              debugObjectName: this.name_,
              type: DELETE,
              object: this,
              oldValue: this.data_.get(key).value_,
              name: key
            } : null;
            if (notifySpy) {
              spyReportStart(change);
            } // TODO fix type
            transaction(() => {
              this.keysAtom_.reportChanged();
              this.hasMap_.get(key)?.setNewValue_(false);
              const observable = this.data_.get(key);
              observable.setNewValue_(undefined);
              this.data_.delete(key);
            });
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy) {
              spyReportEnd();
            }
            return true;
          }
          return false;
        }
        updateValue_(key, newValue) {
          const observable = this.data_.get(key);
          newValue = observable.prepareNewValue_(newValue);
          if (newValue !== globalState.UNCHANGED) {
            const notifySpy = isSpyEnabled();
            const notify = hasListeners(this);
            const change = notify || notifySpy ? {
              observableKind: "map",
              debugObjectName: this.name_,
              type: UPDATE,
              object: this,
              oldValue: observable.value_,
              name: key,
              newValue
            } : null;
            if (notifySpy) {
              spyReportStart(change);
            } // TODO fix type
            observable.setNewValue_(newValue);
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy) {
              spyReportEnd();
            }
          }
        }
        addValue_(key, newValue) {
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          transaction(() => {
            const observable = new ObservableValue(newValue, this.enhancer_, `${this.name_}.${stringifyKey(key)}`, false);
            this.data_.set(key, observable);
            newValue = observable.value_; // value might have been changed
            this.hasMap_.get(key)?.setNewValue_(true);
            this.keysAtom_.reportChanged();
          });
          const notifySpy = isSpyEnabled();
          const notify = hasListeners(this);
          const change = notify || notifySpy ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: ADD,
            object: this,
            name: key,
            newValue
          } : null;
          if (notifySpy) {
            spyReportStart(change);
          } // TODO fix type
          if (notify) {
            notifyListeners(this, change);
          }
          if (notifySpy) {
            spyReportEnd();
          }
        }
        get(key) {
          if (this.has(key)) {
            return this.dehanceValue_(this.data_.get(key).get());
          }
          return this.dehanceValue_(undefined);
        }
        dehanceValue_(value) {
          if (this.dehancer !== undefined) {
            return this.dehancer(value);
          }
          return value;
        }
        keys() {
          this.keysAtom_.reportObserved();
          return this.data_.keys();
        }
        values() {
          const self = this;
          const keys = this.keys();
          return makeIterable({
            next() {
              const {
                done,
                value
              } = keys.next();
              return {
                done,
                value: done ? undefined : self.get(value)
              };
            }
          });
        }
        entries() {
          const self = this;
          const keys = this.keys();
          return makeIterable({
            next() {
              const {
                done,
                value
              } = keys.next();
              return {
                done,
                value: done ? undefined : [value, self.get(value)]
              };
            }
          });
        }
        [_Symbol$iterator]() {
          return this.entries();
        }
        forEach(callback, thisArg) {
          for (const [key, value] of this) {
            callback.call(thisArg, value, key, this);
          }
        }

        /** Merge another object into this object, returns this. */
        merge(other) {
          if (isObservableMap(other)) {
            other = new Map(other);
          }
          transaction(() => {
            if (isPlainObject(other)) {
              getPlainObjectKeys(other).forEach(key => this.set(key, other[key]));
            } else if (Array.isArray(other)) {
              other.forEach(_ref => {
                let [key, value] = _ref;
                return this.set(key, value);
              });
            } else if (isES6Map(other)) {
              if (other.constructor !== Map) {
                die(19, other);
              }
              other.forEach((value, key) => this.set(key, value));
            } else if (other !== null && other !== undefined) {
              die(20, other);
            }
          });
          return this;
        }
        clear() {
          transaction(() => {
            untracked(() => {
              for (const key of this.keys()) {
                this.delete(key);
              }
            });
          });
        }
        replace(values) {
          // Implementation requirements:
          // - respect ordering of replacement map
          // - allow interceptors to run and potentially prevent individual operations
          // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
          // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
          // - note that result map may differ from replacement map due to the interceptors
          transaction(() => {
            // Convert to map so we can do quick key lookups
            const replacementMap = convertToMap(values);
            const orderedData = new Map();
            // Used for optimization
            let keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            for (const key of this.data_.keys()) {
              // Concurrently iterating/deleting keys
              // iterator should handle this correctly
              if (!replacementMap.has(key)) {
                const deleted = this.delete(key);
                // Was the key removed?
                if (deleted) {
                  // _keysAtom.reportChanged() was already called
                  keysReportChangedCalled = true;
                } else {
                  // Delete prevented by interceptor
                  const value = this.data_.get(key);
                  orderedData.set(key, value);
                }
              }
            }
            // Merge entries
            for (const [key, value] of replacementMap.entries()) {
              // We will want to know whether a new key is added
              const keyExisted = this.data_.has(key);
              // Add or update value
              this.set(key, value);
              // The addition could have been prevent by interceptor
              if (this.data_.has(key)) {
                // The update could have been prevented by interceptor
                // and also we want to preserve existing values
                // so use value from _data map (instead of replacement map)
                const value = this.data_.get(key);
                orderedData.set(key, value);
                // Was a new key added?
                if (!keyExisted) {
                  // _keysAtom.reportChanged() was already called
                  keysReportChangedCalled = true;
                }
              }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
              if (this.data_.size !== orderedData.size) {
                // If size differs, keys are definitely modified
                this.keysAtom_.reportChanged();
              } else {
                const iter1 = this.data_.keys();
                const iter2 = orderedData.keys();
                let next1 = iter1.next();
                let next2 = iter2.next();
                while (!next1.done) {
                  if (next1.value !== next2.value) {
                    this.keysAtom_.reportChanged();
                    break;
                  }
                  next1 = iter1.next();
                  next2 = iter2.next();
                }
              }
            }
            // Use correctly ordered map
            this.data_ = orderedData;
          });
          return this;
        }
        get size() {
          this.keysAtom_.reportObserved();
          return this.data_.size;
        }
        toString() {
          return "[object ObservableMap]";
        }
        toJSON() {
          return Array.from(this);
        }
        get [_Symbol$toStringTag]() {
          return "Map";
        }

        /**
         * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
         * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
         * for callback details
         */
        observe_(listener, fireImmediately) {
          if (fireImmediately === true) {
            die("`observe` doesn't support fireImmediately=true in combination with maps.");
          }
          return registerListener(this, listener);
        }
        intercept_(handler) {
          return registerInterceptor(this, handler);
        }
      }

      // eslint-disable-next-line
      var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
      function convertToMap(dataStructure) {
        if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
          return dataStructure;
        } else if (Array.isArray(dataStructure)) {
          return new Map(dataStructure);
        } else if (isPlainObject(dataStructure)) {
          const map = new Map();
          for (const key in dataStructure) {
            map.set(key, dataStructure[key]);
          }
          return map;
        } else {
          return die(21, dataStructure);
        }
      }
      cclegacy._RF.pop();
      let _Symbol$iterator$1, _Symbol$toStringTag$1;
      cclegacy._RF.push({}, "354751+w/hF6aohBTi8omH8", "observableset", undefined);
      const ObservableSetMarker = {};
      _Symbol$iterator$1 = Symbol.iterator;
      _Symbol$toStringTag$1 = Symbol.toStringTag;
      class ObservableSet {
        constructor(initialData, enhancer, name_) {
          if (enhancer === void 0) {
            enhancer = deepEnhancer;
          }
          if (name_ === void 0) {
            name_ = "ObservableSet@" + getNextId();
          }
          this[$mobx] = ObservableSetMarker;
          this.data_ = new Set();
          this.atom_ = void 0;
          this.changeListeners_ = void 0;
          this.interceptors_ = void 0;
          this.dehancer = void 0;
          this.enhancer_ = void 0;
          this.name_ = name_;
          if (!isFunction(Set)) {
            die(22);
          }
          this.enhancer_ = (newV, oldV) => enhancer(newV, oldV, name_);
          initObservable(() => {
            this.atom_ = createAtom(this.name_);
            if (initialData) {
              this.replace(initialData);
            }
          });
        }
        dehanceValue_(value) {
          if (this.dehancer !== undefined) {
            return this.dehancer(value);
          }
          return value;
        }
        clear() {
          transaction(() => {
            untracked(() => {
              for (const value of this.data_.values()) {
                this.delete(value);
              }
            });
          });
        }
        forEach(callbackFn, thisArg) {
          for (const value of this) {
            callbackFn.call(thisArg, value, value, this);
          }
        }
        get size() {
          this.atom_.reportObserved();
          return this.data_.size;
        }
        add(value) {
          checkIfStateModificationsAreAllowed(this.atom_);
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              type: ADD,
              object: this,
              newValue: value
            });
            if (!change) {
              return this;
            }
            // ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
          }

          if (!this.has(value)) {
            transaction(() => {
              this.data_.add(this.enhancer_(value, undefined));
              this.atom_.reportChanged();
            });
            const notifySpy = isSpyEnabled();
            const notify = hasListeners(this);
            const change = notify || notifySpy ? {
              observableKind: "set",
              debugObjectName: this.name_,
              type: ADD,
              object: this,
              newValue: value
            } : null;
            if (notifySpy && true) {
              spyReportStart(change);
            }
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy && true) {
              spyReportEnd();
            }
          }
          return this;
        }
        delete(value) {
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              type: DELETE,
              object: this,
              oldValue: value
            });
            if (!change) {
              return false;
            }
          }
          if (this.has(value)) {
            const notifySpy = isSpyEnabled();
            const notify = hasListeners(this);
            const change = notify || notifySpy ? {
              observableKind: "set",
              debugObjectName: this.name_,
              type: DELETE,
              object: this,
              oldValue: value
            } : null;
            if (notifySpy && true) {
              spyReportStart(change);
            }
            transaction(() => {
              this.atom_.reportChanged();
              this.data_.delete(value);
            });
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy && true) {
              spyReportEnd();
            }
            return true;
          }
          return false;
        }
        has(value) {
          this.atom_.reportObserved();
          return this.data_.has(this.dehanceValue_(value));
        }
        entries() {
          let nextIndex = 0;
          const keys = Array.from(this.keys());
          const values = Array.from(this.values());
          return makeIterable({
            next() {
              const index = nextIndex;
              nextIndex += 1;
              return index < values.length ? {
                value: [keys[index], values[index]],
                done: false
              } : {
                done: true
              };
            }
          });
        }
        keys() {
          return this.values();
        }
        values() {
          this.atom_.reportObserved();
          const self = this;
          let nextIndex = 0;
          const observableValues = Array.from(this.data_.values());
          return makeIterable({
            next() {
              return nextIndex < observableValues.length ? {
                value: self.dehanceValue_(observableValues[nextIndex++]),
                done: false
              } : {
                done: true
              };
            }
          });
        }
        replace(other) {
          if (isObservableSet(other)) {
            other = new Set(other);
          }
          transaction(() => {
            if (Array.isArray(other)) {
              this.clear();
              other.forEach(value => this.add(value));
            } else if (isES6Set(other)) {
              this.clear();
              other.forEach(value => this.add(value));
            } else if (other !== null && other !== undefined) {
              die("Cannot initialize set from " + other);
            }
          });
          return this;
        }
        observe_(listener, fireImmediately) {
          // ... 'fireImmediately' could also be true?
          if (fireImmediately === true) {
            die("`observe` doesn't support fireImmediately=true in combination with sets.");
          }
          return registerListener(this, listener);
        }
        intercept_(handler) {
          return registerInterceptor(this, handler);
        }
        toJSON() {
          return Array.from(this);
        }
        toString() {
          return "[object ObservableSet]";
        }
        [_Symbol$iterator$1]() {
          return this.values();
        }
        get [_Symbol$toStringTag$1]() {
          return "Set";
        }
      }

      // eslint-disable-next-line
      var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6369316B4tIvrEGfuprL7jq", "observableobject", undefined);
      const descriptorCache = Object.create(null);
      const REMOVE = "remove";
      class ObservableObjectAdministration {
        constructor(target_, values_, name_,
        // Used anytime annotation is not explicitely provided
        defaultAnnotation_) {
          if (values_ === void 0) {
            values_ = new Map();
          }
          if (defaultAnnotation_ === void 0) {
            defaultAnnotation_ = autoAnnotation;
          }
          this.keysAtom_ = void 0;
          this.changeListeners_ = void 0;
          this.interceptors_ = void 0;
          this.proxy_ = void 0;
          this.isPlainObject_ = void 0;
          this.appliedAnnotations_ = void 0;
          this.pendingKeys_ = void 0;
          this.target_ = target_;
          this.values_ = values_;
          this.name_ = name_;
          this.defaultAnnotation_ = defaultAnnotation_;
          this.keysAtom_ = new Atom(`${this.name_}.keys`);
          // Optimization: we use this frequently
          this.isPlainObject_ = isPlainObject(this.target_);
          if (!isAnnotation(this.defaultAnnotation_)) {
            die(`defaultAnnotation must be valid annotation`);
          }
          {
            // Prepare structure for tracking which fields were already annotated
            this.appliedAnnotations_ = {};
          }
        }
        getObservablePropValue_(key) {
          return this.values_.get(key).get();
        }
        setObservablePropValue_(key, newValue) {
          const observable = this.values_.get(key);
          if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return true;
          }

          // intercept
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              type: UPDATE,
              object: this.proxy_ || this.target_,
              name: key,
              newValue
            });
            if (!change) {
              return null;
            }
            newValue = change.newValue;
          }
          newValue = observable.prepareNewValue_(newValue);

          // notify spy & observers
          if (newValue !== globalState.UNCHANGED) {
            const notify = hasListeners(this);
            const notifySpy = isSpyEnabled();
            const change = notify || notifySpy ? {
              type: UPDATE,
              observableKind: "object",
              debugObjectName: this.name_,
              object: this.proxy_ || this.target_,
              oldValue: observable.value_,
              name: key,
              newValue
            } : null;
            if (notifySpy) {
              spyReportStart(change);
            }
            observable.setNewValue_(newValue);
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy) {
              spyReportEnd();
            }
          }
          return true;
        }
        get_(key) {
          if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
            // Key doesn't exist yet, subscribe for it in case it's added later
            this.has_(key);
          }
          return this.target_[key];
        }

        /**
         * @param {PropertyKey} key
         * @param {any} value
         * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
         * @param {boolean} proxyTrap whether it's called from proxy trap
         * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
         */
        set_(key, value, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          // Don't use .has(key) - we care about own
          if (hasProp(this.target_, key)) {
            // Existing prop
            if (this.values_.has(key)) {
              // Observable (can be intercepted)
              return this.setObservablePropValue_(key, value);
            } else if (proxyTrap) {
              // Non-observable - proxy
              return Reflect.set(this.target_, key, value);
            } else {
              // Non-observable
              this.target_[key] = value;
              return true;
            }
          } else {
            // New prop
            return this.extend_(key, {
              value,
              enumerable: true,
              writable: true,
              configurable: true
            }, this.defaultAnnotation_, proxyTrap);
          }
        }

        // Trap for "in"
        has_(key) {
          if (!globalState.trackingDerivation) {
            // Skip key subscription outside derivation
            return key in this.target_;
          }
          this.pendingKeys_ ||= new Map();
          let entry = this.pendingKeys_.get(key);
          if (!entry) {
            entry = new ObservableValue(key in this.target_, referenceEnhancer, `${this.name_}.${stringifyKey(key)}?`, false);
            this.pendingKeys_.set(key, entry);
          }
          return entry.get();
        }

        /**
         * @param {PropertyKey} key
         * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
         */
        make_(key, annotation) {
          if (annotation === true) {
            annotation = this.defaultAnnotation_;
          }
          if (annotation === false) {
            return;
          }
          assertAnnotable(this, annotation, key);
          if (!(key in this.target_)) {
            // Throw on missing key, except for decorators:
            // Decorator annotations are collected from whole prototype chain.
            // When called from super() some props may not exist yet.
            // However we don't have to worry about missing prop,
            // because the decorator must have been applied to something.
            if (this.target_[storedAnnotationsSymbol]?.[key]) {
              return; // will be annotated by subclass constructor
            } else {
              die(1, annotation.annotationType_, `${this.name_}.${key.toString()}`);
            }
          }
          let source = this.target_;
          while (source && source !== objectPrototype) {
            const descriptor = getDescriptor(source, key);
            if (descriptor) {
              const outcome = annotation.make_(this, key, descriptor, source);
              if (outcome === MakeResult.Cancel) {
                return;
              }
              if (outcome === MakeResult.Break) {
                break;
              }
            }
            source = Object.getPrototypeOf(source);
          }
          recordAnnotationApplied(this, annotation, key);
        }

        /**
         * @param {PropertyKey} key
         * @param {PropertyDescriptor} descriptor
         * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
         * @param {boolean} proxyTrap whether it's called from proxy trap
         * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
         */
        extend_(key, descriptor, annotation, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          if (annotation === true) {
            annotation = this.defaultAnnotation_;
          }
          if (annotation === false) {
            return this.defineProperty_(key, descriptor, proxyTrap);
          }
          assertAnnotable(this, annotation, key);
          const outcome = annotation.extend_(this, key, descriptor, proxyTrap);
          if (outcome) {
            recordAnnotationApplied(this, annotation, key);
          }
          return outcome;
        }

        /**
         * @param {PropertyKey} key
         * @param {PropertyDescriptor} descriptor
         * @param {boolean} proxyTrap whether it's called from proxy trap
         * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
         */
        defineProperty_(key, descriptor, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          try {
            startBatch();

            // Delete
            const deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
              // Failure or intercepted
              return deleteOutcome;
            }

            // ADD interceptor
            if (hasInterceptors(this)) {
              const change = interceptChange(this, {
                object: this.proxy_ || this.target_,
                name: key,
                type: ADD,
                newValue: descriptor.value
              });
              if (!change) {
                return null;
              }
              const {
                newValue
              } = change;
              if (descriptor.value !== newValue) {
                descriptor = {
                  ...descriptor,
                  value: newValue
                };
              }
            }

            // Define
            if (proxyTrap) {
              if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                return false;
              }
            } else {
              defineProperty(this.target_, key, descriptor);
            }

            // Notify
            this.notifyPropertyAddition_(key, descriptor.value);
          } finally {
            endBatch();
          }
          return true;
        }

        // If original descriptor becomes relevant, move this to annotation directly
        defineObservableProperty_(key, value, enhancer, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          try {
            startBatch();

            // Delete
            const deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
              // Failure or intercepted
              return deleteOutcome;
            }

            // ADD interceptor
            if (hasInterceptors(this)) {
              const change = interceptChange(this, {
                object: this.proxy_ || this.target_,
                name: key,
                type: ADD,
                newValue: value
              });
              if (!change) {
                return null;
              }
              value = change.newValue;
            }
            const cachedDescriptor = getCachedObservablePropDescriptor(key);
            const descriptor = {
              configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
              enumerable: true,
              get: cachedDescriptor.get,
              set: cachedDescriptor.set
            };

            // Define
            if (proxyTrap) {
              if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                return false;
              }
            } else {
              defineProperty(this.target_, key, descriptor);
            }
            const observable = new ObservableValue(value, enhancer, true ? `${this.name_}.${key.toString()}` : "ObservableObject.key", false);
            this.values_.set(key, observable);

            // Notify (value possibly changed by ObservableValue)
            this.notifyPropertyAddition_(key, observable.value_);
          } finally {
            endBatch();
          }
          return true;
        }

        // If original descriptor becomes relevant, move this to annotation directly
        defineComputedProperty_(key, options, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          try {
            startBatch();

            // Delete
            const deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
              // Failure or intercepted
              return deleteOutcome;
            }

            // ADD interceptor
            if (hasInterceptors(this)) {
              const change = interceptChange(this, {
                object: this.proxy_ || this.target_,
                name: key,
                type: ADD,
                newValue: undefined
              });
              if (!change) {
                return null;
              }
            }
            options.name ||= true ? `${this.name_}.${key.toString()}` : "ObservableObject.key";
            options.context = this.proxy_ || this.target_;
            const cachedDescriptor = getCachedObservablePropDescriptor(key);
            const descriptor = {
              configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
              enumerable: false,
              get: cachedDescriptor.get,
              set: cachedDescriptor.set
            };

            // Define
            if (proxyTrap) {
              if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                return false;
              }
            } else {
              defineProperty(this.target_, key, descriptor);
            }
            this.values_.set(key, new ComputedValue(options));

            // Notify
            this.notifyPropertyAddition_(key, undefined);
          } finally {
            endBatch();
          }
          return true;
        }

        /**
         * @param {PropertyKey} key
         * @param {PropertyDescriptor} descriptor
         * @param {boolean} proxyTrap whether it's called from proxy trap
         * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
         */
        delete_(key, proxyTrap) {
          if (proxyTrap === void 0) {
            proxyTrap = false;
          }
          checkIfStateModificationsAreAllowed(this.keysAtom_);
          // No such prop
          if (!hasProp(this.target_, key)) {
            return true;
          }

          // Intercept
          if (hasInterceptors(this)) {
            const change = interceptChange(this, {
              object: this.proxy_ || this.target_,
              name: key,
              type: REMOVE
            });
            // Cancelled
            if (!change) {
              return null;
            }
          }

          // Delete
          try {
            startBatch();
            const notify = hasListeners(this);
            const notifySpy = true && isSpyEnabled();
            const observable = this.values_.get(key);
            // Value needed for spies/listeners
            let value = undefined;
            // Optimization: don't pull the value unless we will need it
            if (!observable && (notify || notifySpy)) {
              value = getDescriptor(this.target_, key)?.value;
            }
            // delete prop (do first, may fail)
            if (proxyTrap) {
              if (!Reflect.deleteProperty(this.target_, key)) {
                return false;
              }
            } else {
              delete this.target_[key];
            }
            // Allow re-annotating this field
            if (true) {
              delete this.appliedAnnotations_[key];
            }
            // Clear observable
            if (observable) {
              this.values_.delete(key);
              // for computed, value is undefined
              if (observable instanceof ObservableValue) {
                value = observable.value_;
              }
              // Notify: autorun(() => obj[key]), see #1796
              propagateChanged(observable);
            }
            // Notify "keys/entries/values" observers
            this.keysAtom_.reportChanged();

            // Notify "has" observers
            // "in" as it may still exist in proto
            this.pendingKeys_?.get(key)?.set(key in this.target_);

            // Notify spies/listeners
            if (notify || notifySpy) {
              const change = {
                type: REMOVE,
                observableKind: "object",
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: value,
                name: key
              };
              if (true && notifySpy) {
                spyReportStart(change);
              }
              if (notify) {
                notifyListeners(this, change);
              }
              if (true && notifySpy) {
                spyReportEnd();
              }
            }
          } finally {
            endBatch();
          }
          return true;
        }

        /**
         * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
         * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
         * for callback details
         */
        observe_(callback, fireImmediately) {
          if (fireImmediately === true) {
            die("`observe` doesn't support the fire immediately property for observable objects.");
          }
          return registerListener(this, callback);
        }
        intercept_(handler) {
          return registerInterceptor(this, handler);
        }
        notifyPropertyAddition_(key, value) {
          const notify = hasListeners(this);
          const notifySpy = isSpyEnabled();
          if (notify || notifySpy) {
            const change = notify || notifySpy ? {
              type: ADD,
              observableKind: "object",
              debugObjectName: this.name_,
              object: this.proxy_ || this.target_,
              name: key,
              newValue: value
            } : null;
            if (notifySpy) {
              spyReportStart(change);
            }
            if (notify) {
              notifyListeners(this, change);
            }
            if (notifySpy) {
              spyReportEnd();
            }
          }
          this.pendingKeys_?.get(key)?.set(true);

          // Notify "keys/entries/values" observers
          this.keysAtom_.reportChanged();
        }
        ownKeys_() {
          this.keysAtom_.reportObserved();
          return ownKeys(this.target_);
        }
        keys_() {
          // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
          // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
          // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
          // We choose to over-report in Object.keys(object), because:
          // - typically it's used with simple data objects
          // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
          this.keysAtom_.reportObserved();
          return Object.keys(this.target_);
        }
      }
      function asObservableObject(target, options) {
        if (options && isObservableObject(target)) {
          die(`Options can't be provided for already observable objects.`);
        }
        if (hasProp(target, $mobx)) {
          if (!(getAdministration(target) instanceof ObservableObjectAdministration)) {
            die(`Cannot convert '${getDebugName(target)}' into observable object:` + `\nThe target is already observable of different type.` + `\nExtending builtins is not supported.`);
          }
          return target;
        }
        if (!Object.isExtensible(target)) {
          die("Cannot make the designated object observable; it is not extensible");
        }
        const name = options?.name ?? `${isPlainObject(target) ? "ObservableObject" : target.constructor.name}@${getNextId()}`;
        const adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
        addHiddenProp(target, $mobx, adm);
        return target;
      }
      const isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
      function getCachedObservablePropDescriptor(key) {
        return descriptorCache[key] || (descriptorCache[key] = {
          get() {
            return this[$mobx].getObservablePropValue_(key);
          },
          set(value) {
            return this[$mobx].setObservablePropValue_(key, value);
          }
        });
      }
      function isObservableObject(thing) {
        if (isObject(thing)) {
          return isObservableObjectAdministration(thing[$mobx]);
        }
        return false;
      }
      function recordAnnotationApplied(adm, annotation, key) {
        {
          adm.appliedAnnotations_[key] = annotation;
        }
        // Remove applied decorator annotation so we don't try to apply it again in subclass constructor
        delete adm.target_[storedAnnotationsSymbol]?.[key];
      }
      function assertAnnotable(adm, annotation, key) {
        // Valid annotation
        if (!isAnnotation(annotation)) {
          die(`Cannot annotate '${adm.name_}.${key.toString()}': Invalid annotation.`);
        }

        /*
        // Configurable, not sealed, not frozen
        // Possibly not needed, just a little better error then the one thrown by engine.
        // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
        if (true) {
            const configurable = getDescriptor(adm.target_, key)?.configurable
            const frozen = Object.isFrozen(adm.target_)
            const sealed = Object.isSealed(adm.target_)
            if (!configurable || frozen || sealed) {
                const fieldName = `${adm.name_}.${key.toString()}`
                const requestedAnnotationType = annotation.annotationType_
                let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
                if (frozen) {
                    error += `\nObject is frozen.`
                }
                if (sealed) {
                    error += `\nObject is sealed.`
                }
                if (!configurable) {
                    error += `\nproperty is not configurable.`
                    // Mention only if caused by us to avoid confusion
                    if (hasProp(adm.appliedAnnotations!, key)) {
                        error += `\nTo prevent accidental re-definition of a field by a subclass, `
                        error += `all annotated fields of non-plain objects (classes) are not configurable.`
                    }
                }
                die(error)
            }
        }
        */

        // Not annotated
        if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
          const fieldName = `${adm.name_}.${key.toString()}`;
          const currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
          const requestedAnnotationType = annotation.annotationType_;
          die(`Cannot apply '${requestedAnnotationType}' to '${fieldName}':` + `\nThe field is already annotated with '${currentAnnotationType}'.` + `\nRe-annotating fields is not allowed.` + `\nUse 'override' annotation for methods overridden by subclass.`);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "44243VJltRKPadSywdBS0a+", "legacyobservablearray", undefined);

      // Bug in safari 9.* (or iOS 9 safari mobile). See #364
      const ENTRY_0 = createArrayEntryDescriptor(0);
      const safariPrototypeSetterInheritanceBug = (() => {
        let v = false;
        const p = {};
        Object.defineProperty(p, "0", {
          set: () => {
            v = true;
          }
        });
        Object.create(p)["0"] = 1;
        return v === false;
      })();

      /**
       * This array buffer contains two lists of properties, so that all arrays
       * can recycle their property definitions, which significantly improves performance of creating
       * properties on the fly.
       */
      let OBSERVABLE_ARRAY_BUFFER_SIZE = 0;

      // Typescript workaround to make sure ObservableArray extends Array
      class StubArray {}
      function inherit(ctor, proto) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(ctor.prototype, proto);
        } else if (ctor.prototype.__proto__ !== undefined) {
          ctor.prototype.__proto__ = proto;
        } else {
          ctor.prototype = proto;
        }
      }
      inherit(StubArray, Array.prototype);

      // Weex proto freeze protection was here,
      // but it is unclear why the hack is need as MobX never changed the prototype
      // anyway, so removed it in V6

      class LegacyObservableArray extends StubArray {
        constructor(initialValues, enhancer, name, owned) {
          if (name === void 0) {
            name = "ObservableArray@" + getNextId();
          }
          if (owned === void 0) {
            owned = false;
          }
          super();
          initObservable(() => {
            const adm = new ObservableArrayAdministration(name, enhancer, owned, true);
            adm.proxy_ = this;
            addHiddenFinalProp(this, $mobx, adm);
            if (initialValues && initialValues.length) {
              // @ts-ignore
              this.spliceWithArray(0, 0, initialValues);
            }
            if (safariPrototypeSetterInheritanceBug) {
              // Seems that Safari won't use numeric prototype setter until any * numeric property is
              // defined on the instance. After that it works fine, even if this property is deleted.
              Object.defineProperty(this, "0", ENTRY_0);
            }
          });
        }
        concat() {
          this[$mobx].atom_.reportObserved();
          for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
            arrays[_key] = arguments[_key];
          }
          return Array.prototype.concat.apply(this.slice(),
          //@ts-ignore
          arrays.map(a => isObservableArray(a) ? a.slice() : a));
        }
        get length() {
          return this[$mobx].getArrayLength_();
        }
        set length(newLength) {
          this[$mobx].setArrayLength_(newLength);
        }
        get [Symbol.toStringTag]() {
          return "Array";
        }
        [Symbol.iterator]() {
          const self = this;
          let nextIndex = 0;
          return makeIterable({
            next() {
              return nextIndex < self.length ? {
                value: self[nextIndex++],
                done: false
              } : {
                done: true,
                value: undefined
              };
            }
          });
        }
      }
      Object.entries(arrayExtensions).forEach(_ref => {
        let [prop, fn] = _ref;
        if (prop !== "concat") {
          addHiddenProp(LegacyObservableArray.prototype, prop, fn);
        }
      });
      function createArrayEntryDescriptor(index) {
        return {
          enumerable: false,
          configurable: true,
          get: function () {
            return this[$mobx].get_(index);
          },
          set: function (value) {
            this[$mobx].set_(index, value);
          }
        };
      }
      function createArrayBufferItem(index) {
        defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
      }
      function reserveArrayBuffer(max) {
        if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
          for (let index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
            createArrayBufferItem(index);
          }
          OBSERVABLE_ARRAY_BUFFER_SIZE = max;
        }
      }
      reserveArrayBuffer(1000);
      function createLegacyArray(initialValues, enhancer, name) {
        return new LegacyObservableArray(initialValues, enhancer, name);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "20728UX/SVAAIXJiBhKTlhh", "type-utils", undefined);
      function getAtom(thing, property) {
        if (typeof thing === "object" && thing !== null) {
          if (isObservableArray(thing)) {
            if (property !== undefined) {
              die(23);
            }
            return thing[$mobx].atom_;
          }
          if (isObservableSet(thing)) {
            return thing.atom_;
          }
          if (isObservableMap(thing)) {
            if (property === undefined) {
              return thing.keysAtom_;
            }
            const observable = thing.data_.get(property) || thing.hasMap_.get(property);
            if (!observable) {
              die(25, property, getDebugName(thing));
            }
            return observable;
          }
          if (property && !thing[$mobx]) {
            thing[property];
          } // See #1072
          if (isObservableObject(thing)) {
            if (!property) {
              return die(26);
            }
            const observable = thing[$mobx].values_.get(property);
            if (!observable) {
              die(27, property, getDebugName(thing));
            }
            return observable;
          }
          if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
          }
        } else if (isFunction(thing)) {
          if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
          }
        }
        die(28);
      }
      function getAdministration(thing, property) {
        if (!thing) {
          die(29);
        }
        if (property !== undefined) {
          return getAdministration(getAtom(thing, property));
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
          return thing;
        }
        if (isObservableMap(thing) || isObservableSet(thing)) {
          return thing;
        }
        if (thing[$mobx]) {
          return thing[$mobx];
        }
        die(24, thing);
      }
      function getDebugName(thing, property) {
        let named;
        if (property !== undefined) {
          named = getAtom(thing, property);
        } else if (isAction(thing)) {
          return thing.name;
        } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
          named = getAdministration(thing);
        } else {
          // valid for arrays as well
          named = getAtom(thing);
        }
        return named.name_;
      }

      /**
       * Helper function for initializing observable structures, it applies:
       * 1. allowStateChanges so we don't violate enforceActions.
       * 2. untracked so we don't accidentaly subscribe to anything observable accessed during init in case the observable is created inside derivation.
       * 3. batch to avoid state version updates
       */
      function initObservable(cb) {
        const derivation = untrackedStart();
        const allowStateChanges = allowStateChangesStart(true);
        startBatch();
        try {
          return cb();
        } finally {
          endBatch();
          allowStateChangesEnd(allowStateChanges);
          untrackedEnd(derivation);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "233c1gONqBEXqa1qytdaaEK", "eq", undefined);
      const toString = objectPrototype.toString;
      function deepEqual(a, b, depth) {
        if (depth === void 0) {
          depth = -1;
        }
        return eq(a, b, depth);
      }

      // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
      // Internal recursive comparison function for `isEqual`.
      function eq(a, b, depth, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) {
          return a !== 0 || 1 / a === 1 / b;
        }
        // `null` or `undefined` only equal to itself (strict comparison).
        if (a == null || b == null) {
          return false;
        }
        // `NaN`s are equivalent, but non-reflexive.
        if (a !== a) {
          return b !== b;
        }
        // Exhaust primitive checks
        const type = typeof a;
        if (type !== "function" && type !== "object" && typeof b != "object") {
          return false;
        }

        // Compare `[[Class]]` names.
        const className = toString.call(a);
        if (className !== toString.call(b)) {
          return false;
        }
        switch (className) {
          // Strings, numbers, regular expressions, dates, and booleans are compared by value.
          case "[object RegExp]":
          // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
          case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
          case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) {
              return +b !== +b;
            }
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
          case "[object Date]":
          case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
          case "[object Symbol]":
            return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
          case "[object Map]":
          case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
              depth++;
            }
            break;
        }
        // Unwrap any wrapped objects.
        a = unwrap(a);
        b = unwrap(b);
        const areArrays = className === "[object Array]";
        if (!areArrays) {
          if (typeof a != "object" || typeof b != "object") {
            return false;
          }

          // Objects with different constructors are not equivalent, but `Object`s or `Array`s
          // from different frames are.
          const aCtor = a.constructor,
            bCtor = b.constructor;
          if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
            return false;
          }
        }
        if (depth === 0) {
          return false;
        } else if (depth < 0) {
          depth = -1;
        }

        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        let length = aStack.length;
        while (length--) {
          // Linear search. Performance is inversely proportional to the number of
          // unique nested structures.
          if (aStack[length] === a) {
            return bStack[length] === b;
          }
        }

        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);

        // Recursively compare objects and arrays.
        if (areArrays) {
          // Compare array lengths to determine if a deep comparison is necessary.
          length = a.length;
          if (length !== b.length) {
            return false;
          }
          // Deep compare the contents, ignoring non-numeric properties.
          while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
              return false;
            }
          }
        } else {
          // Deep compare objects.
          const keys = Object.keys(a);
          let key;
          length = keys.length;
          // Ensure that both objects contain the same number of properties before comparing deep equality.
          if (Object.keys(b).length !== length) {
            return false;
          }
          while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
              return false;
            }
          }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
      }
      function unwrap(a) {
        if (isObservableArray(a)) {
          return a.slice();
        }
        if (isES6Map(a) || isObservableMap(a)) {
          return Array.from(a.entries());
        }
        if (isES6Set(a) || isObservableSet(a)) {
          return Array.from(a.entries());
        }
        return a;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8da60ZMOklFmZHye+ncfBXP", "iterable", undefined);
      // @ts-nocheck
      function makeIterable(iterator) {
        iterator[Symbol.iterator] = getSelf;
        return iterator;
      }
      function getSelf() {
        return this;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8956e+gAIVIRpV4YPMLtWje", "annotation", undefined);
      const MakeResult = {
        Cancel: 0,
        Break: 1,
        Continue: 2
      };

      /* don't decorate this property */

      // AdditionalFields can be used to declare additional keys that can be used, for example to be able to
      // declare annotations for private/ protected members, see #2339
      function isAnnotation(thing) {
        return (
          // Can be function
          thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
        );
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c5183BXvuZNra546xocA6/D", "internal", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1a89cmoIxpDHZJSEOm4WCrl", "mobx", undefined);
      ["Symbol", "Map", "Set"].forEach(m => {
        let g = getGlobal();
        if (typeof g[m] === "undefined") {
          die(`MobX requires global '${m}' to be available or polyfilled`);
        }
      });

      // Devtools support

      if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
        // See: https://github.com/andykog/mobx-devtools/
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy,
          extras: {
            getDebugName
          },
          $mobx
        });
      }
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
      cclegacy._RF.push({}, "8b0a3wQ5wNNjqGxjmtjnoMg", "EEventName", undefined);
      let EEventName = /*#__PURE__*/function (EEventName) {
        EEventName["Tap"] = "tap";
        return EEventName;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2bf30FLP3BFoo8nUUsu4BwV", "addMeshCollider", undefined);
      function addMeshCollider(node, options) {
        const mesh = node.getComponent(MeshRenderer) || node.getComponentInChildren(MeshRenderer);
        const collider = node.addComponent(MeshCollider);
        if (mesh) {
          collider.mesh = mesh.mesh;
        }
        collider.isTrigger = Boolean(options.isTrigger);
        return collider;
      }
      cclegacy._RF.pop();
      var _class$1, _descriptor$1;
      cclegacy._RF.push({}, "3b67212M9tOb7cqRO99qIW+", "Biome", undefined);
      let Biome = (_class$1 = class Biome extends Observer {
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
        initializeCollider(node) {
          addMeshCollider(node, {
            isTrigger: true
          });
          if (this.onTap) {
            node.on(EEventName.Tap, this.onTap);
          }
        }
        render() {
          if (this.renderNode) {
            this.renderNode.destroy();
            this.renderNode = null;
          }
          this.renderNode = this.createRenderNode();
          if (this.renderNode) {
            this.initializeCollider(this.renderNode);
          }
        }
      }, _descriptor$1 = _applyDecoratedDescriptor(_class$1.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class$1);
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
      cclegacy._RF.push({}, "e75f2p2j6xOJ6yRWmcc/747", "createPrefabNode", undefined);
      function createPrefabNode(prefab, _ref) {
        let {
          parent,
          materials,
          position,
          scale,
          rotation,
          castShadows,
          receiveShadows
        } = _ref;
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
        parent.addChild(node);
        return node;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c58da6R6rFFaoXfd8mCEgxB", "cocos", undefined);
      const {
        ccclass: ccclass$1,
        property: property$1
      } = _decorator;
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
              value: bound,
              configurable: true,
              writable: true
            });
            return binded;
          }
        };
      }
      cclegacy._RF.pop();
      var _class$2;
      cclegacy._RF.push({}, "bbf41sacyFEj7TPFXnUxbFE", "assets", undefined);
      const LOAD_METHOD_REGEX = /^load/;
      let Assets = (_class$2 = class Assets {
        constructor() {
          this.wait = void 0;
          this.materials = new Map();
          this.sprites = new Map();
          this.prefabs = new Map();
          this.wait = this.waitAssets();
        }
        get(map, names) {
          return names.map(name => {
            const resource = map.get(name);
            if (!resource) {
              throw new Error(`Cannot find resource asset with name ${name}`);
            }
            return resource;
          });
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
          const materials = await loadResourcesDir('materials', Material);
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
      }, (_applyDecoratedDescriptor(_class$2.prototype, "loadMaterials", [bound], Object.getOwnPropertyDescriptor(_class$2.prototype, "loadMaterials"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "loadSprites", [bound], Object.getOwnPropertyDescriptor(_class$2.prototype, "loadSprites"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "loadPrefabs", [bound], Object.getOwnPropertyDescriptor(_class$2.prototype, "loadPrefabs"), _class$2.prototype)), _class$2);
      const assets = new Assets();
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
          const [prefab] = assets.getPrefabs([this.prefab]);
          return createPrefabNode(prefab, {
            parent: this.node,
            rotation: this.data.rotate ? new Vec3(0, this.data.rotate, 0) : undefined,
            scale: this.data.scale ? new Vec3(1, this.data.scale, 1) : undefined,
            castShadows: true,
            receiveShadows: true
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
          const [prefab] = assets.getPrefabs([this.prefab]);
          const [material] = assets.getMaterials([this.material]);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            scale: new Vec3(1, this.biomeY, 1),
            receiveShadows: this.receiveShadows,
            castShadows: this.castShadows
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
      var _dec$3, _dec2$1, _class$5, _descriptor$2, _descriptor2$1, _descriptor3$1, _descriptor4;
      cclegacy._RF.push({}, "0f694fs2cpEcq8o5R+6yN7R", "HexagonMap", undefined);
      let HexagonMap = (_dec$3 = action.bound, _dec2$1 = action.bound, (_class$5 = class HexagonMap {
        constructor(Hex, options) {
          this.map = observable.map();
          _initializerDefineProperty(this, "maxX", _descriptor$2, this);
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
      }, (_descriptor$2 = _applyDecoratedDescriptor(_class$5.prototype, "maxX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class$5.prototype, "maxZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class$5.prototype, "minX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class$5.prototype, "minZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class$5.prototype, "values", [computed], Object.getOwnPropertyDescriptor(_class$5.prototype, "values"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "get", [_dec$3], Object.getOwnPropertyDescriptor(_class$5.prototype, "get"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "add", [_dec2$1], Object.getOwnPropertyDescriptor(_class$5.prototype, "add"), _class$5.prototype)), _class$5));
      cclegacy._RF.pop();
      var _class$6;
      cclegacy._RF.push({}, "4a2a90ANDdC97iQC1asX1AG", "Hexagon", undefined);
      let Hexagon = (_class$6 = class Hexagon {
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
      }, (_applyDecoratedDescriptor(_class$6.prototype, "neighbors", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "neighbors"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "positionX", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "positionX"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "positionZ", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "positionZ"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "key", [cached], Object.getOwnPropertyDescriptor(_class$6.prototype, "key"), _class$6.prototype)), _class$6);
      cclegacy._RF.pop();
      var _class$7;
      cclegacy._RF.push({}, "5b8c48dPQFKJJQqjNKNZfbv", "HexagonTile", undefined);
      let HexagonTile = (_class$7 = class HexagonTile extends Hexagon {
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
      }, (_applyDecoratedDescriptor(_class$7.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "right"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "topRight"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "topLeft"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "left"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "bottomLeft"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "bottomRight"), _class$7.prototype)), _class$7);
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
      cclegacy._RF.push({}, "8b595kzo2BL27ashGyH8/MT", "tilesMap", undefined);
      const tilesMap = new HexagonMap(HexagonTile, HEX_OPTIONS);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e97e3d6UHpKhI4AV89XN5LD", "filterNullable", undefined);
      function filterNullable(arr) {
        return arr.filter(item => Boolean(item) || item === 0);
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "90f30yGi89GeIpUMRAlKT09", "toVec3", undefined);
      function toVec3(vec) {
        return new Vec3(vec.x, vec.y, vec.z);
      }
      cclegacy._RF.pop();
      var _dec$4, _class$8, _class2$3;
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
      let BiomeTileRiver = (_dec$4 = ccclass$1('BiomeTileRiver'), _dec$4(_class$8 = (_class2$3 = class BiomeTileRiver extends BiomeTile {
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
          const [riverPrefab] = assets.getPrefabs([this.prefab]);
          const [waterMaterial, riverMaterial] = assets.getMaterials([this.material, this.groundMaterial]);
          return createPrefabNode(riverPrefab, {
            parent: this.node,
            materials: [riverMaterial, waterMaterial],
            scale: new Vec3(1, this.biomeY, 1),
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            rotation: new Vec3(0, this.rotation, 0),
            receiveShadows: true
          });
        }
      }, (_applyDecoratedDescriptor(_class2$3.prototype, "defaultFrom", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "defaultFrom"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "rotation", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "rotation"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "from", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "from"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "to", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "to"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "directions", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "directions"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "directionsTiles", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "directionsTiles"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "prefabKey", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "prefabKey"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "prefab"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "material"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "groundMaterial", [computed], Object.getOwnPropertyDescriptor(_class2$3.prototype, "groundMaterial"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "receiveShadows"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2$3.prototype, "castShadows"), _class2$3.prototype)), _class2$3)) || _class$8);
      cclegacy._RF.pop();
      var _dec$5, _class$9, _class2$4;
      cclegacy._RF.push({}, "4c4a0SIrDhPmaz5dL9TJkii", "BiomeTileWater", undefined);
      let BiomeTileWater = (_dec$5 = ccclass$1('BiomeTileWater'), _dec$5(_class$9 = (_class2$4 = class BiomeTileWater extends BiomeTile {
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
          const [prefab] = assets.getPrefabs([this.prefab]);
          const [material] = assets.getMaterials([this.material]);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            receiveShadows: true
          });
        }
      }, (_applyDecoratedDescriptor(_class2$4.prototype, "prefab", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "prefab"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "material"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "receiveShadows"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2$4.prototype, "castShadows"), _class2$4.prototype)), _class2$4)) || _class$9);
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
      cclegacy._RF.push({}, "0eb53LI60pIrL0uwCfhZFgW", "EBuilding", undefined);
      let EBuilding = /*#__PURE__*/function (EBuilding) {
        EBuilding["Castle"] = "castle";
        EBuilding["Test"] = "test";
        return EBuilding;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39b2eVu3q5KWKcNftXVPSVP", "buildingPrefabs", undefined);
      const buildingPrefabs = {
        [EBuilding.Castle]: 'building_destroyed',
        [EBuilding.Test]: 'building_workshop_blue'
      };
      cclegacy._RF.pop();
      var _dec$6, _class$a, _class2$5, _descriptor$3;
      cclegacy._RF.push({}, "e2f4aiB81NAc4XbQnjgx5h7", "Building", undefined);
      let Building = (_dec$6 = ccclass$1('Building'), _dec$6(_class$a = (_class2$5 = class Building extends Observer {
        constructor() {
          super(...arguments);
          this.renderNode = null;
          _initializerDefineProperty(this, "data", _descriptor$3, this);
          this.tile = void 0;
          this.onTap = void 0;
        }
        get prefab() {
          return buildingPrefabs[this.data.key];
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
        initializeCollider(node) {
          addMeshCollider(node, {
            isTrigger: true
          });
          if (this.onTap) {
            node.on(EEventName.Tap, this.onTap);
          }
        }
        createRenderNode() {
          const [prefab] = assets.getPrefabs([this.prefab]);
          return createPrefabNode(prefab, {
            parent: this.node,
            castShadows: true,
            receiveShadows: true
          });
        }
        render() {
          if (this.renderNode) {
            this.renderNode.destroy();
            this.renderNode = null;
          }
          this.renderNode = this.createRenderNode();
          if (this.renderNode) {
            this.initializeCollider(this.renderNode);
          }
        }
        onLoad() {
          this.node.setPosition(new Vec3(0, this.tile.groundY, 0));
        }
      }, (_descriptor$3 = _applyDecoratedDescriptor(_class2$5.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$5.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2$5.prototype, "prefab"), _class2$5.prototype)), _class2$5)) || _class$a);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "aa3014a3bdG5IVqFwvlMy+w", "IBuildingData", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "557edLmAmtPEoBvNJ7CbRLY", "ERoute", undefined);
      let ERoute = /*#__PURE__*/function (ERoute) {
        ERoute["World"] = "world";
        return ERoute;
      }({});
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e32d9U3xIZPMI5coCr7ehHD", "AbstractPage", undefined);
      class AbstractPage {}
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "48d7cVIbGtEGoze6JRPhlI7", "EWorldPageMode", undefined);
      let EWorldPageMode = /*#__PURE__*/function (EWorldPageMode) {
        EWorldPageMode["Add"] = "add";
        EWorldPageMode["Build"] = "build";
        EWorldPageMode["View"] = "view";
        return EWorldPageMode;
      }({});
      cclegacy._RF.pop();
      var _dec$7, _dec2$2, _class$b, _descriptor$4, _descriptor2$2, _descriptor3$2;
      cclegacy._RF.push({}, "274e9fEFpBHxphBcC2DxifD", "WorldPage", undefined);
      let WorldPage = (_dec$7 = observable.ref, _dec2$2 = observable.ref, (_class$b = class WorldPage extends AbstractPage {
        constructor(_options) {
          super();
          this.name = ERoute.World;
          _initializerDefineProperty(this, "mode", _descriptor$4, this);
          _initializerDefineProperty(this, "tileTest", _descriptor2$2, this);
          _initializerDefineProperty(this, "onTileTap", _descriptor3$2, this);
          this.camera = null;
          makeObservable(this);
        }
      }, (_descriptor$4 = _applyDecoratedDescriptor(_class$b.prototype, "mode", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return EWorldPageMode.View;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class$b.prototype, "tileTest", [_dec$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class$b.prototype, "onTileTap", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class$b));
      cclegacy._RF.pop();
      var _dec$8, _class$c, _descriptor$5;
      cclegacy._RF.push({}, "cd7f6FLaQ5EZp22cx6hRl3m", "router", undefined);
      const routes = {
        [ERoute.World]: WorldPage
      };
      let Router = (_dec$8 = action.bound, (_class$c = class Router {
        constructor() {
          _initializerDefineProperty(this, "page", _descriptor$5, this);
          makeObservable(this);

          // default route
          this.navigate(ERoute.World);
        }
        get route() {
          return this.page.name;
        }
        navigate(route, options) {
          const Page = routes[route];
          this.page = new Page(options);
        }
        getPage(name) {
          if (this.route === name) {
            return this.page;
          }
          return null;
        }
      }, (_applyDecoratedDescriptor(_class$c.prototype, "route", [computed], Object.getOwnPropertyDescriptor(_class$c.prototype, "route"), _class$c.prototype), _descriptor$5 = _applyDecoratedDescriptor(_class$c.prototype, "page", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class$c.prototype, "navigate", [_dec$8], Object.getOwnPropertyDescriptor(_class$c.prototype, "navigate"), _class$c.prototype)), _class$c));
      const router = new Router();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39664pOtPZPzYHPzJrhd4KM", "getWorldPage", undefined);
      function getWorldPage() {
        return router.getPage(ERoute.World);
      }
      cclegacy._RF.pop();
      var _dec$9, _class$d;
      cclegacy._RF.push({}, "384e0JsJ3JM34fxDy7IOKLv", "NewChunkButton", undefined);
      let NewChunkButton = (_dec$9 = ccclass$1('NewChunkButton'), _dec$9(_class$d = class NewChunkButton extends Observer {
        constructor() {
          super(...arguments);
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
          const {
            node
          } = this;
          const [spriteMaterial] = assets.getMaterials(['sprite']);
          const [newChunk] = assets.getSprites(['newChunkButton']);
          const sprite = node.addComponent(SpriteRenderer);
          sprite.spriteFrame = newChunk;
          sprite.setSharedMaterial(spriteMaterial, 0);
          const collider = node.addComponent(BoxCollider);
          collider.isTrigger = true;
          collider.size = new Vec3(this.hexHeight * 6, this.hexRadius * 5, 0.01);
          node.setPosition(new Vec3(0, TILE_BASE_HEIGHT + TILE_HEIGHT_MULTIPLIER * TILE_SEA_LEVEL, 0));
          node.setRotationFromEuler(new Vec3(90, 30, 0));
          node.layer = Layers.Enum.UI_3D;
          node.on(EEventName.Tap, this.onClick);
        }
        render() {
          this.node.active = Boolean(getWorldPage()?.mode === EWorldPageMode.Add);
        }
      }) || _class$d);
      cclegacy._RF.pop();
      var _class$e;
      cclegacy._RF.push({}, "6f82dr+ONNFkKs/rJYfAp8v", "HexagonChunk", undefined);
      let HexagonChunk = (_class$e = class HexagonChunk extends Hexagon {
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
      }, (_applyDecoratedDescriptor(_class$e.prototype, "tiles", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "tiles"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "right"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "topRight"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "topLeft"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "left"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "bottomLeft"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "bottomRight"), _class$e.prototype)), _class$e);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f9879gG2C1OC6nSCRZjStOv", "chunksMap", undefined);
      const chunksMap = new HexagonMap(HexagonChunk, HEX_OPTIONS);
      cclegacy._RF.pop();
      var _dec$a, _class$f, _class2$6;
      cclegacy._RF.push({}, "cc834UUq+1NL7rgW0QmvKdx", "TileTest", undefined);
      const SCALE = new Vec3(0.96, 1, 0.96);
      let TileTest = (_dec$a = ccclass$1('TileTest'), _dec$a(_class$f = (_class2$6 = class TileTest extends Observer {
        constructor() {
          super(...arguments);
          this.tile = void 0;
          this.testNode = void 0;
        }
        get testFunc() {
          return getWorldPage()?.tileTest;
        }
        initialize(_ref) {
          let {
            tile
          } = _ref;
          this.tile = tile;
        }
        render() {
          if (this.testNode) {
            this.testNode.active = Boolean(this.testFunc?.(this.tile));
          }
        }
        onLoad() {
          const [prefab] = assets.getPrefabs(['hex_plane']);
          const [material] = assets.getMaterials(['ui-white-50']);
          this.testNode = createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            scale: SCALE,
            position: new Vec3(0, this.tile.groundY + 0.01, 0)
          });
          this.testNode.active = false;
        }
      }, _applyDecoratedDescriptor(_class2$6.prototype, "testFunc", [computed], Object.getOwnPropertyDescriptor(_class2$6.prototype, "testFunc"), _class2$6.prototype), _class2$6)) || _class$f);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "87c84EFuo9EqI/YhkUTbIwF", "factoryComponent", undefined);
      function factoryComponent(Comp, parent, props) {
        const node = new Node();
        const component = node.addComponent(Comp);
        component.initialize?.(props);
        parent.addChild(node);
        return component;
      }
      cclegacy._RF.pop();
      var _dec$b, _dec2$3, _class$g, _class2$7, _descriptor$6;
      cclegacy._RF.push({}, "493fbN2t0ZDeaQ+Cfxxi1J2", "Tile", undefined);
      let Tile = (_dec$b = ccclass$1('Tile'), _dec2$3 = action.bound, _dec$b(_class$g = (_class2$7 = class Tile extends Observer {
        constructor() {
          super(...arguments);
          this.hex = void 0;
          this.chunk = void 0;
          _initializerDefineProperty(this, "data", _descriptor$6, this);
        }
        get groundY() {
          return this.data.height * TILE_HEIGHT_MULTIPLIER + 1;
        }
        get biomeTile() {
          return this.data.biomeTile && biomeTiles[this.data.biomeTile.key] || BiomeTile;
        }
        initialize(_ref) {
          let {
            coords,
            chunk,
            data
          } = _ref;
          this.chunk = chunk;
          this.data = data;
          this.hex = tilesMap.add(coords, this);
        }
        onTap() {
          const page = getWorldPage();
          if (page?.tileTest?.(this)) {
            page?.onTileTap?.(this);
          }
        }
        render() {
          this.node.destroyAllChildren();
          factoryComponent(this.biomeTile, this.node, {
            tile: this,
            data: this.data.biomeTile,
            onTap: this.onTap
          });
          factoryComponent(TileTest, this.node, {
            tile: this
          });
          if (this.data.building) {
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
        }
        onLoad() {
          this.node.setWorldPosition(new Vec3(this.hex.positionX, 0, this.hex.positionZ));
        }
      }, (_descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$7.prototype, "groundY", [cached], Object.getOwnPropertyDescriptor(_class2$7.prototype, "groundY"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "biomeTile", [cached], Object.getOwnPropertyDescriptor(_class2$7.prototype, "biomeTile"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "onTap", [_dec2$3], Object.getOwnPropertyDescriptor(_class2$7.prototype, "onTap"), _class2$7.prototype)), _class2$7)) || _class$g);
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
      cclegacy._RF.push({}, "1f71fpsU01PWoFgJzye25j0", "toFixedNumber", undefined);
      function toFixedNumber(num, digits, base) {
        if (base === void 0) {
          base = 10;
        }
        const pow = base ** digits;
        return Math.round(num * pow) / pow;
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
      cclegacy._RF.push({}, "f988buKiNJE1qnCi1/vomud", "clamp", undefined);
      function clamp(value, _ref) {
        let [min, max] = _ref;
        return Math.max(min || -Infinity, Math.min(value, max || Infinity));
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
      var _dec$c, _dec2$4, _class$h, _class2$8, _descriptor$7;
      cclegacy._RF.push({}, "32689hlOXFBX5YrLKIV3Tdr", "Chunk", undefined);
      let Chunk = (_dec$c = ccclass$1('Chunk'), _dec2$4 = action.bound, _dec$c(_class$h = (_class2$8 = class Chunk extends Observer {
        constructor() {
          super(...arguments);
          this.hex = void 0;
          this.tiles = [];
          _initializerDefineProperty(this, "data", _descriptor$7, this);
        }
        initialize(_ref) {
          let {
            coords,
            data
          } = _ref;
          this.hex = chunksMap.add(coords, this);
          this.data = data;
        }
        draw() {
          if (!this.data) {
            factoryComponent(NewChunkButton, this.node, {
              hexHeight: this.hex.hexHeight,
              hexRadius: this.hex.hexRadius,
              onClick: this.generate
            });
            return;
          }
          this.tiles = this.data.tiles.map(tileData => factoryComponent(Tile, this.node, {
            coords: new Vec3(tileData.coords.x, tileData.coords.y, tileData.coords.z),
            chunk: this,
            data: tileData
          }));
          this.hex.neighbors.forEach(coords => {
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
      }, (_descriptor$7 = _applyDecoratedDescriptor(_class2$8.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$8.prototype, "generate", [_dec2$4], Object.getOwnPropertyDescriptor(_class2$8.prototype, "generate"), _class2$8.prototype)), _class2$8)) || _class$h);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d3147CSTXdEyp/MQNHJualU", "IChunkData", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "78e9dffiX9FkKY1sTQ8AhGP", "ITileData", undefined);
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
      var _dec$d, _class$i;
      cclegacy._RF.push({}, "84a89e9iPxMErnCjRvaF7CE", "World", undefined);
      let World = (_dec$d = ccclass$1('World'), _dec$d(_class$i = class World extends Observer {
        async onLoad() {
          await assets.wait;
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
      }) || _class$i);
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
      var _dec$e, _dec2$5, _dec3$1, _dec4$1, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class$j, _class2$9, _descriptor$8, _descriptor2$3, _descriptor3$3, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "33eaaIU0o5D8I0ctpi/Us/Q", "WorldCamera", undefined);
      let WorldCamera = (_dec$e = ccclass$1('WorldCamera'), _dec2$5 = property$1(Canvas), _dec3$1 = property$1(Camera), _dec4$1 = action.bound, _dec5 = action.bound, _dec6 = action.bound, _dec7 = action.bound, _dec8 = action.bound, _dec9 = action.bound, _dec10 = action.bound, _dec11 = action.bound, _dec12 = action.bound, _dec$e(_class$j = (_class2$9 = class WorldCamera extends Observer {
        constructor(name) {
          super(name);
          this.disposePageListen = void 0;
          _initializerDefineProperty(this, "canvas", _descriptor$8, this);
          _initializerDefineProperty(this, "camera", _descriptor2$3, this);
          this.touchSize = void 0;
          this.movedTimes = 0;
          this.raycastTimer = null;
          _initializerDefineProperty(this, "touchCount", _descriptor3$3, this);
          _initializerDefineProperty(this, "touchTimes", _descriptor4$1, this);
          _initializerDefineProperty(this, "touchImpulse", _descriptor5, this);
          this.impulseDuration = 0;
          _initializerDefineProperty(this, "targetPosition", _descriptor6, this);
          _initializerDefineProperty(this, "targetInitRotation", _descriptor7, this);
          _initializerDefineProperty(this, "cameraInitPosition", _descriptor8, this);
          _initializerDefineProperty(this, "cameraInitRotation", _descriptor9, this);
          _initializerDefineProperty(this, "zooming", _descriptor10, this);
          _initializerDefineProperty(this, "rotation", _descriptor11, this);
          this.navigateDuration = 0;
          this.navigateFrom = null;
          _initializerDefineProperty(this, "navigateTo", _descriptor12, this);
          this.disposeTouchListen = void 0;
          this.disposePageListen = reaction(() => getWorldPage(), page => {
            if (page) {
              page.camera = this;
            }
          }, {
            fireImmediately: true
          });
        }
        get moveLimit() {
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
      }, (_descriptor$8 = _applyDecoratedDescriptor(_class2$9.prototype, "canvas", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$9.prototype, "camera", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2$9.prototype, "moveLimit", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "moveLimit"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "moveType", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "moveType"), _class2$9.prototype), _descriptor3$3 = _applyDecoratedDescriptor(_class2$9.prototype, "touchCount", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$9.prototype, "touchTimes", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [null, null];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$9.prototype, "touchImpulse", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$9.prototype, "targetPosition", [observable], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$9.prototype, "targetInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$9.prototype, "cameraInitPosition", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$9.prototype, "cameraInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$9.prototype, "zooming", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$9.prototype, "rotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$9.prototype, "navigateTo", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$9.prototype, "targetRotation", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "targetRotation"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "cameraPosition", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "cameraPosition"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "cameraRotation", [computed], Object.getOwnPropertyDescriptor(_class2$9.prototype, "cameraRotation"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "init", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$9.prototype, "init"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "initTarget", [_dec5], Object.getOwnPropertyDescriptor(_class2$9.prototype, "initTarget"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "move", [_dec6], Object.getOwnPropertyDescriptor(_class2$9.prototype, "move"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "zoom", [_dec7], Object.getOwnPropertyDescriptor(_class2$9.prototype, "zoom"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "rotate", [_dec8], Object.getOwnPropertyDescriptor(_class2$9.prototype, "rotate"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "onTouchStart", [_dec9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "onTouchStart"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "onTouchMove", [_dec10], Object.getOwnPropertyDescriptor(_class2$9.prototype, "onTouchMove"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "onTouchEnd", [_dec11], Object.getOwnPropertyDescriptor(_class2$9.prototype, "onTouchEnd"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "navigate", [_dec12], Object.getOwnPropertyDescriptor(_class2$9.prototype, "navigate"), _class2$9.prototype)), _class2$9)) || _class$j);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39534ODzEpN+oWEEKh7lZ8a", "consts", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a1da5baSRRIaraersDNU5Cc", "IGeneratorOptions", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "982b0840z5E5YKNJmKjyGuc", "INeigborBiome", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4d0d6ysnOhGyKU17zcJ0pPO", "TGenerator", undefined);
      cclegacy._RF.pop();
      var _class$k;
      cclegacy._RF.push({}, "db7a0SQlQFHe5ZB+stYh1gA", "Button", undefined);
      let Button = (_class$k = class Button extends Observer {
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
      }, _applyDecoratedDescriptor(_class$k.prototype, "button", [cached], Object.getOwnPropertyDescriptor(_class$k.prototype, "button"), _class$k.prototype), _class$k);
      cclegacy._RF.pop();
      var _dec$f, _dec2$6, _class$l, _class2$a;
      cclegacy._RF.push({}, "96579tt/6FLfbpKNRY9Nb1e", "AddModeButton", undefined);
      let AddModeButton = (_dec$f = ccclass$1('AddModeButton'), _dec2$6 = action.bound, _dec$f(_class$l = (_class2$a = class AddModeButton extends Button {
        onClick() {
          const page = getWorldPage();
          if (!page) {
            return;
          }
          if (page.mode !== EWorldPageMode.Add) {
            page.mode = EWorldPageMode.Add;
          } else {
            page.mode = EWorldPageMode.View;
          }
        }
        render() {
          const isToggled = getWorldPage()?.mode === EWorldPageMode.Add;
          if (this.label) {
            this.label.string = isToggled ? '❌' : '🛠';
          }
        }
      }, _applyDecoratedDescriptor(_class2$a.prototype, "onClick", [_dec2$6], Object.getOwnPropertyDescriptor(_class2$a.prototype, "onClick"), _class2$a.prototype), _class2$a)) || _class$l);
      cclegacy._RF.pop();
      var _dec$g, _dec2$7, _class$m, _class2$b, _descriptor$9;
      cclegacy._RF.push({}, "5a9ccTxJW1LRq4p7a1w6/qC", "BuildButton", undefined);
      let BuildButton = (_dec$g = ccclass$1('BuildButton'), _dec2$7 = action.bound, _dec$g(_class$m = (_class2$b = class BuildButton extends Button {
        constructor() {
          super(...arguments);
          this.disposeToggleListen = void 0;
          this.disposeModeListen = void 0;
          _initializerDefineProperty(this, "isToggled", _descriptor$9, this);
        }
        get page() {
          return getWorldPage();
        }
        onLoad() {
          this.disposeToggleListen = reaction(() => this.isToggled, action(isToggled => {
            if (!this.page) {
              return;
            }
            if (isToggled) {
              const {
                camera
              } = this.page;
              this.page.tileTest = tile => {
                const {
                  data
                } = tile;
                return !data.building && !data.biomeObject && (!data.biomeTile || [EBiomeTile.Sand, EBiomeTile.Clay].includes(data.biomeTile.key));
              };
              this.page.onTileTap = action(tile => {
                this.isToggled = false;
                tile.data.building = {
                  key: EBuilding.Test
                };
                camera?.navigate({
                  zooming: -0.5,
                  position: fromVec3ToVec2(tile.node.getWorldPosition())
                });
              });
            } else {
              this.page.tileTest = null;
              this.page.onTileTap = null;
            }
          }));
          this.disposeModeListen = reaction(() => this.page?.mode, action(mode => {
            if (this.isToggled && mode !== EWorldPageMode.Add) {
              this.isToggled = false;
            }
          }));
          super.onLoad();
        }
        onClick() {
          this.isToggled = !this.isToggled;
        }
        render() {
          this.node.active = this.page?.mode === EWorldPageMode.Add;
          if (this.label) {
            this.label.string = this.isToggled ? '❌' : '🏠';
          }
        }
      }, (_descriptor$9 = _applyDecoratedDescriptor(_class2$b.prototype, "isToggled", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "page", [computed], Object.getOwnPropertyDescriptor(_class2$b.prototype, "page"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "onClick", [_dec2$7], Object.getOwnPropertyDescriptor(_class2$b.prototype, "onClick"), _class2$b.prototype)), _class2$b)) || _class$m);
      cclegacy._RF.pop();
      var _dec$h, _class$n;
      cclegacy._RF.push({}, "c7bf2Y3vPxFmLWUg2h0FVaE", "WorldUI", undefined);
      let WorldUI = (_dec$h = ccclass$1('WorldUI'), _dec$h(_class$n = class WorldUI extends Observer {
        constructor() {
          super(...arguments);
          this.disposeListenResolution = void 0;
          this.size = void 0;
        }
        onLoad() {
          this.size = view.getDesignResolutionSize();
          this.updateResolution();
          this.disposeListenResolution = listen(() => {
            screen.on('window-resize', this.updateResolution, this);
            return () => screen.off('window-resize', this.updateResolution, this);
          });
        }
        updateResolution() {
          const realSize = screen.resolution;
          const ratio = realSize.height / realSize.width;
          if (ratio > 1) {
            view.setDesignResolutionSize(this.size.width, this.size.width * ratio, ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setDesignResolutionSize(realSize.width, realSize.height, ResolutionPolicy.FIXED_WIDTH);
          }
        }
      }) || _class$n);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ef30dqx+ftBKKWf33k/Dpsa", "loadResources", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3fd3e2Xv+5PJLBXO++hkF/J", "ITapEvent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3de6cYhNuxDxoKlhnRpwWbo", "isObject", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bfee9+RZ+hOW7+30DEoysnl", "isPromise", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2cc2eMQTBxEYLCNZE9zGSgU", "createFactory", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3cb4aS35J1C24RkXayQJiAc", "toQuat", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6342byz8QREb7zJQjgkaI6R", "IChance", undefined);
      cclegacy._RF.pop();
      var _dec$i, _class$o;
      cclegacy._RF.push({}, "179bcV306JBRIVS4FogPGKr", "Size", undefined);
      let Size = (_dec$i = ccclass$1('Size'), _dec$i(_class$o = class Size extends Component {
        start() {
          const mesh = this.node.getComponent(MeshRenderer) || this.node.getComponentInChildren(MeshRenderer);
          if (mesh) {
            const {
              model
            } = mesh;
            console.log(model, model?.worldBounds);
          }
        }
      }) || _class$o);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b2a00E2oBhJgZzWMQgeA+FJ", "decorator_fills", undefined); // @ts-nocheck
      // Hopefully these will be main-lined into Typescipt, but at the moment TS only declares the Contexts
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