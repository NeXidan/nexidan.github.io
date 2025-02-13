System.register("chunks:///_virtual/AbstractRoute.ts", ['cc', './index.ts'], function (exports) {
  var cclegacy, makeObservable;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      makeObservable = module.makeObservable;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a839al+X1FlbiRJf2wF5vc", "AbstractRoute", undefined);
      var AbstractRoute = exports('AbstractRoute', /*#__PURE__*/function () {
        function AbstractRoute() {
          this.hasUiOverlay = false;
          this.hasUiHeader = true;
        }
        var _proto = AbstractRoute.prototype;
        _proto.initialize = function initialize(options) {
          Object.assign(this, options);
          makeObservable(this);
          return this;
        };
        _proto.destroy = function destroy() {
          // no-op
        };
        return AbstractRoute;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiOpacityAnimate.ts', './Observer.ts', './router.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, UIOpacity, UiOpacityAnimate, Observer, router, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      UiOpacityAnimate = module.UiOpacityAnimate;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      router = module.router;
    }, function (module) {
      computed = module.computed;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "92f7e1tQcVKjYepmydCZx1p", "AbstractScreen", undefined);
      var AbstractScreen = exports('AbstractScreen', (_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(AbstractScreen, _Observer);
        function AbstractScreen() {
          return _Observer.apply(this, arguments) || this;
        }
        var _proto = AbstractScreen.prototype;
        _proto.initialize = function initialize() {
          var opacity = this.node.addComponent(UIOpacity);
          opacity.opacity = 0;
          var animate = this.node.addComponent(UiOpacityAnimate);
          animate.duration = 0.1;
          animate.easing = 'cubicInOut';
        };
        _createClass(AbstractScreen, [{
          key: "route",
          get: function get() {
            return router.getRoute(this.routeName);
          }
        }]);
        return AbstractScreen;
      }(Observer), _applyDecoratedDescriptor(_class.prototype, "route", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "route"), _class.prototype), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractState.ts", ['cc', './index.ts'], function (exports) {
  var cclegacy, makeObservable;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      makeObservable = module.makeObservable;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f185dz1EK5LWIq3+5gcGlai", "AbstractState", undefined);
      var AbstractState = exports('AbstractState', /*#__PURE__*/function () {
        function AbstractState(state) {
          this.state = void 0;
          this.state = state;
        }
        var _proto = AbstractState.prototype;
        _proto.destroy = function destroy() {
          // no-op
        };
        _proto.initialize = function initialize(_data) {
          makeObservable(this);
          return this;
        };
        return AbstractState;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/addMeshCollider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './getAllComponents.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, MeshRenderer, MeshCollider, getAllComponents;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      MeshRenderer = module.MeshRenderer;
      MeshCollider = module.MeshCollider;
    }, function (module) {
      getAllComponents = module.getAllComponents;
    }],
    execute: function () {
      exports('addMeshCollider', addMeshCollider);
      cclegacy._RF.push({}, "2bf30FLP3BFoo8nUUsu4BwV", "addMeshCollider", undefined);
      function addMeshCollider(node, options) {
        var meshes = getAllComponents(node, MeshRenderer);
        var colliders = [];
        for (var _iterator = _createForOfIteratorHelperLoose(meshes), _step; !(_step = _iterator()).done;) {
          var mesh = _step.value;
          var collider = mesh.node.addComponent(MeshCollider);
          if (mesh) {
            collider.mesh = mesh.mesh;
          }
          collider.isTrigger = Boolean(options.isTrigger);
          colliders.push(collider);
        }
        return colliders;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/assets.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './loadResourcesDir.ts', './bound.ts', './prepareMaterial.ts'], function (exports) {
  var _applyDecoratedDescriptor, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Material, SpriteFrame, Prefab, Font, loadResourcesDir, bound, prepareMaterial;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Material = module.Material;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Font = module.Font;
    }, function (module) {
      loadResourcesDir = module.loadResourcesDir;
    }, function (module) {
      bound = module.bound;
    }, function (module) {
      prepareMaterial = module.prepareMaterial;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "bbf41sacyFEj7TPFXnUxbFE", "assets", undefined);
      var LOAD_METHOD_REGEX = /^load/;
      var Assets = (_class = /*#__PURE__*/function () {
        function Assets() {
          this.wait = void 0;
          this.materials = new Map();
          this.sprites = new Map();
          this.prefabs = new Map();
          this.fonts = new Map();
          this.wait = this.waitAssets()["catch"](function (err) {
            return console.error(err);
          });
        }
        var _proto = Assets.prototype;
        _proto.get = function get(map, names) {
          var get = function get(name) {
            var resource = map.get(name);
            if (!resource) {
              throw new Error("Cannot find resource asset with name " + name);
            }
            return resource;
          };
          if (Array.isArray(names)) {
            return names.map(function (name) {
              return get(name);
            });
          }
          return get(names);
        };
        _proto.getMaterials = function getMaterials(names) {
          return this.get(this.materials, names);
        };
        _proto.getSprites = function getSprites(names) {
          return this.get(this.sprites, names);
        };
        _proto.getPrefabs = function getPrefabs(names) {
          return this.get(this.prefabs, names);
        };
        _proto.getFonts = function getFonts(names) {
          return this.get(this.fonts, names);
        };
        _proto.waitAssets = /*#__PURE__*/function () {
          var _waitAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            var promises, methods;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  promises = [];
                  methods = [].concat(Object.getOwnPropertyNames(this), Object.getOwnPropertyNames(Object.getPrototypeOf(this)));
                  methods.forEach(function (method) {
                    if (LOAD_METHOD_REGEX.test(method)) {
                      var func = _this[method];
                      if (func) {
                        promises.push(func());
                      }
                    }
                  });
                  _context.next = 5;
                  return Promise.all(promises);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function waitAssets() {
            return _waitAssets.apply(this, arguments);
          }
          return waitAssets;
        }();
        _proto.loadMaterials = /*#__PURE__*/function () {
          var _loadMaterials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var materials, _iterator, _step, material;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return loadResourcesDir('materials', Material);
                case 2:
                  materials = _context2.sent.map(prepareMaterial);
                  for (_iterator = _createForOfIteratorHelperLoose(materials); !(_step = _iterator()).done;) {
                    material = _step.value;
                    this.materials.set(material.name, material);
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadMaterials() {
            return _loadMaterials.apply(this, arguments);
          }
          return loadMaterials;
        }();
        _proto.loadSprites = /*#__PURE__*/function () {
          var _loadSprites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var sprites, _iterator2, _step2, sprite;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return loadResourcesDir('ui', SpriteFrame);
                case 2:
                  sprites = _context3.sent;
                  for (_iterator2 = _createForOfIteratorHelperLoose(sprites); !(_step2 = _iterator2()).done;) {
                    sprite = _step2.value;
                    this.sprites.set(sprite.name, sprite);
                  }
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadSprites() {
            return _loadSprites.apply(this, arguments);
          }
          return loadSprites;
        }();
        _proto.loadPrefabs = /*#__PURE__*/function () {
          var _loadPrefabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var prefabs, _iterator3, _step3, prefab;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return loadResourcesDir('prefabs', Prefab);
                case 2:
                  prefabs = _context4.sent;
                  for (_iterator3 = _createForOfIteratorHelperLoose(prefabs); !(_step3 = _iterator3()).done;) {
                    prefab = _step3.value;
                    this.prefabs.set(prefab.data.name, prefab);
                  }
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function loadPrefabs() {
            return _loadPrefabs.apply(this, arguments);
          }
          return loadPrefabs;
        }();
        _proto.loadFonts = /*#__PURE__*/function () {
          var _loadFonts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var fonts, _iterator4, _step4, font;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return loadResourcesDir('fonts', Font);
                case 2:
                  fonts = _context5.sent;
                  for (_iterator4 = _createForOfIteratorHelperLoose(fonts); !(_step4 = _iterator4()).done;) {
                    font = _step4.value;
                    this.fonts.set(font.name, font);
                  }
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function loadFonts() {
            return _loadFonts.apply(this, arguments);
          }
          return loadFonts;
        }();
        return Assets;
      }(), (_applyDecoratedDescriptor(_class.prototype, "loadMaterials", [bound], Object.getOwnPropertyDescriptor(_class.prototype, "loadMaterials"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadSprites", [bound], Object.getOwnPropertyDescriptor(_class.prototype, "loadSprites"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadPrefabs", [bound], Object.getOwnPropertyDescriptor(_class.prototype, "loadPrefabs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadFonts", [bound], Object.getOwnPropertyDescriptor(_class.prototype, "loadFonts"), _class.prototype)), _class);
      var assets = exports('assets', new Assets());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Biome.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Observer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, action, observable, Observer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      action = module.action;
      observable = module.observable;
    }, function (module) {
      Observer = module.Observer;
    }],
    execute: function () {
      var _dec, _class, _descriptor;
      cclegacy._RF.push({}, "3b67212M9tOb7cqRO99qIW+", "Biome", undefined);
      var Biome = exports('Biome', (_dec = action.bound, (_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Biome, _Observer);
        function Biome() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.renderNode = null;
          _initializerDefineProperty(_this, "data", _descriptor, _assertThisInitialized(_this));
          _this.tile = void 0;
          _this.onTap = void 0;
          return _this;
        }
        var _proto = Biome.prototype;
        _proto.initialize = function initialize(_ref) {
          var data = _ref.data,
            tile = _ref.tile,
            onTap = _ref.onTap;
          this.data = data;
          this.tile = tile;
          this.onTap = onTap;
        };
        _proto.render = function render() {
          if (this.renderNode) {
            this.renderNode.destroy();
            this.renderNode = null;
          }
          this.renderNode = this.createRenderNode();
        };
        return Biome;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class.prototype, "initialize", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BiomeObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Biome.ts', './biomeObjectsPrefabs.ts', './createPrefabNode.ts', './cocos.ts', './assets.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Vec3, computed, Biome, biomeObjectPrefabs, createPrefabNode, ccclass, assets;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      computed = module.computed;
    }, function (module) {
      Biome = module.Biome;
    }, function (module) {
      biomeObjectPrefabs = module.biomeObjectPrefabs;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "825018d0IxJ/KuzT1bUInto", "BiomeObject", undefined);
      var BiomeObject = exports('BiomeObject', (_dec = ccclass('BiomeObject'), _dec(_class = (_class2 = /*#__PURE__*/function (_Biome) {
        _inheritsLoose(BiomeObject, _Biome);
        function BiomeObject() {
          return _Biome.apply(this, arguments) || this;
        }
        var _proto = BiomeObject.prototype;
        _proto.createRenderNode = function createRenderNode() {
          if (!this.prefab) {
            return null;
          }
          var prefab = assets.getPrefabs(this.prefab);
          return createPrefabNode(prefab, {
            parent: this.node,
            rotation: this.data.rotate ? new Vec3(0, this.data.rotate, 0) : undefined,
            scale: this.data.scale ? new Vec3(1, this.data.scale, 1) : undefined,
            castShadows: true,
            receiveShadows: true,
            onTap: this.onTap
          });
        };
        _proto.onLoad = function onLoad() {
          this.node.setPosition(new Vec3(0, this.tile.groundY, 0));
        };
        _createClass(BiomeObject, [{
          key: "prefab",
          get: function get() {
            var _biomeObjectPrefabs$t;
            return (_biomeObjectPrefabs$t = biomeObjectPrefabs[this.data.key]) == null ? void 0 : _biomeObjectPrefabs$t.call(biomeObjectPrefabs, this.data);
          }
        }]);
        return BiomeObject;
      }(Biome), _applyDecoratedDescriptor(_class2.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/biomeObjectsPrefabs.ts", ['cc', './EBiome.ts', './EBiomeSize.ts'], function (exports) {
  var cclegacy, EBiomeObject, EBiomeSize;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      EBiomeSize = module.EBiomeSize;
    }],
    execute: function () {
      var _biomeObjectPrefabs;
      cclegacy._RF.push({}, "365265gf0dO3om/gG6+8oW2", "biomeObjectsPrefabs", undefined);
      var biomeObjectPrefabs = exports('biomeObjectPrefabs', (_biomeObjectPrefabs = {}, _biomeObjectPrefabs[EBiomeObject.Mountain] = function () {
        return 'mountain';
      }, _biomeObjectPrefabs[EBiomeObject.Forest] = function () {
        return 'forest';
      }, _biomeObjectPrefabs[EBiomeObject.ForestRocks] = function (_ref) {
        var size = _ref.size;
        return size === EBiomeSize.Tiny ? 'forest_rocks_tiny' : 'forest_rocks_small';
      }, _biomeObjectPrefabs[EBiomeObject.Rocks] = function (_ref2) {
        var data = _ref2.data;
        return data != null && data.small ? 'rocks_small' : 'rocks';
      }, _biomeObjectPrefabs[EBiomeObject.Hill] = function () {
        return 'hill';
      }, _biomeObjectPrefabs));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/biomeSizeMaps.ts", ['cc', './EBiome.ts', './EBiomeSize.ts'], function (exports) {
  var cclegacy, EBiomeObject, EBiomeTile, EBiomeSize;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      EBiomeSize = module.EBiomeSize;
    }],
    execute: function () {
      var _EBiomeObject$Forest, _EBiomeObject$Mountai, _EBiomeTile$Clay, _EBiomeObject$ForestR, _EBiomeObject$Rocks, _EBiomeTile$Sand, _EBiomeTile$Lake, _EBiomeTile$Sea, _EBiomeTile$River, _biomeSizeMaps;
      cclegacy._RF.push({}, "8b1892PXaZNRoyywBFyf/4K", "biomeSizeMaps", undefined);
      var biomeSizeMaps = exports('biomeSizeMaps', (_biomeSizeMaps = {}, _biomeSizeMaps[EBiomeObject.Forest] = (_EBiomeObject$Forest = {}, _EBiomeObject$Forest[EBiomeSize.Tiny] = 1, _EBiomeObject$Forest[EBiomeSize.Small] = 3, _EBiomeObject$Forest[EBiomeSize.Medium] = 5, _EBiomeObject$Forest[EBiomeSize.Large] = 10, _EBiomeObject$Forest), _biomeSizeMaps[EBiomeObject.Mountain] = (_EBiomeObject$Mountai = {}, _EBiomeObject$Mountai[EBiomeSize.Tiny] = 1, _EBiomeObject$Mountai[EBiomeSize.Small] = 2, _EBiomeObject$Mountai[EBiomeSize.Medium] = 3, _EBiomeObject$Mountai[EBiomeSize.Large] = 5, _EBiomeObject$Mountai), _biomeSizeMaps[EBiomeTile.Clay] = (_EBiomeTile$Clay = {}, _EBiomeTile$Clay[EBiomeSize.Tiny] = 1, _EBiomeTile$Clay[EBiomeSize.Small] = 3, _EBiomeTile$Clay[EBiomeSize.Medium] = 5, _EBiomeTile$Clay[EBiomeSize.Large] = 7, _EBiomeTile$Clay), _biomeSizeMaps[EBiomeObject.ForestRocks] = (_EBiomeObject$ForestR = {}, _EBiomeObject$ForestR[EBiomeSize.Tiny] = 1, _EBiomeObject$ForestR[EBiomeSize.Small] = 1, _EBiomeObject$ForestR), _biomeSizeMaps[EBiomeObject.Rocks] = (_EBiomeObject$Rocks = {}, _EBiomeObject$Rocks[EBiomeSize.Tiny] = 1, _EBiomeObject$Rocks[EBiomeSize.Small] = 2, _EBiomeObject$Rocks[EBiomeSize.Medium] = 3, _EBiomeObject$Rocks[EBiomeSize.Large] = 4, _EBiomeObject$Rocks), _biomeSizeMaps[EBiomeTile.Sand] = (_EBiomeTile$Sand = {}, _EBiomeTile$Sand[EBiomeSize.Tiny] = 1, _EBiomeTile$Sand[EBiomeSize.Small] = 3, _EBiomeTile$Sand[EBiomeSize.Medium] = 7, _EBiomeTile$Sand[EBiomeSize.Large] = 15, _EBiomeTile$Sand), _biomeSizeMaps[EBiomeTile.Lake] = (_EBiomeTile$Lake = {}, _EBiomeTile$Lake[EBiomeSize.Tiny] = 1, _EBiomeTile$Lake[EBiomeSize.Small] = 4, _EBiomeTile$Lake[EBiomeSize.Medium] = 5, _EBiomeTile$Lake[EBiomeSize.Large] = 7, _EBiomeTile$Lake), _biomeSizeMaps[EBiomeTile.Sea] = (_EBiomeTile$Sea = {}, _EBiomeTile$Sea[EBiomeSize.Large] = 200, _EBiomeTile$Sea), _biomeSizeMaps[EBiomeTile.River] = (_EBiomeTile$River = {}, _EBiomeTile$River[EBiomeSize.Tiny] = 5, _EBiomeTile$River[EBiomeSize.Small] = 10, _EBiomeTile$River[EBiomeSize.Medium] = 20, _EBiomeTile$River[EBiomeSize.Large] = 30, _EBiomeTile$River), _biomeSizeMaps));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BiomeTile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Biome.ts', './consts3.ts', './EBiome.ts', './consts9.ts', './createPrefabNode.ts', './cached.ts', './cocos.ts', './assets.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Vec3, Biome, MAX_BIOME_TILE_HEIGHT, EBiomeTile, TILE_HEIGHT_MULTIPLIER, createPrefabNode, cached, ccclass, assets;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      Biome = module.Biome;
    }, function (module) {
      MAX_BIOME_TILE_HEIGHT = module.MAX_BIOME_TILE_HEIGHT;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      TILE_HEIGHT_MULTIPLIER = module.TILE_HEIGHT_MULTIPLIER;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "1ec2d3dkdVE06BWlaUUd6aB", "BiomeTile", undefined);
      var MIN_DIRT_HEIGHT = 3;
      var BiomeTile = exports('BiomeTile', (_dec = ccclass('BiomeTile'), _dec(_class = (_class2 = /*#__PURE__*/function (_Biome) {
        _inheritsLoose(BiomeTile, _Biome);
        function BiomeTile() {
          return _Biome.apply(this, arguments) || this;
        }
        var _proto = BiomeTile.prototype;
        _proto.createRenderNode = function createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          var prefab = assets.getPrefabs(this.prefab);
          var material = assets.getMaterials(this.material);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            scale: new Vec3(1, this.biomeY, 1),
            receiveShadows: this.receiveShadows,
            castShadows: this.castShadows,
            onTap: this.onTap
          });
        };
        _proto.onLoad = function onLoad() {
          var _assets$getPrefabs = assets.getPrefabs(['hex_base', 'hex']),
            hexBase = _assets$getPrefabs[0],
            hex = _assets$getPrefabs[1];
          var _assets$getMaterials = assets.getMaterials(['rock', 'dirt']),
            rock = _assets$getMaterials[0],
            dirt = _assets$getMaterials[1];

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
        };
        _createClass(BiomeTile, [{
          key: "prefab",
          get: function get() {
            return 'hex';
          }
        }, {
          key: "material",
          get: function get() {
            var _this$data, _this$data2;
            if (((_this$data = this.data) == null ? void 0 : _this$data.key) === EBiomeTile.Clay) {
              return 'clay';
            }
            if (((_this$data2 = this.data) == null ? void 0 : _this$data2.key) === EBiomeTile.Sand) {
              return 'sand';
            }
            return 'grass';
          }
        }, {
          key: "biomeY",
          get: function get() {
            return Math.min(this.tile.data.height, MAX_BIOME_TILE_HEIGHT) * TILE_HEIGHT_MULTIPLIER;
          }
        }, {
          key: "dirtY",
          get: function get() {
            return this.tile.groundY - this.rockY - this.biomeY;
          }
        }, {
          key: "rockY",
          get: function get() {
            if (this.tile.data.height - MAX_BIOME_TILE_HEIGHT < MIN_DIRT_HEIGHT) {
              return 0;
            }
            return this.tile.data.baseHeight * TILE_HEIGHT_MULTIPLIER;
          }
        }, {
          key: "receiveShadows",
          get: function get() {
            return true;
          }
        }, {
          key: "castShadows",
          get: function get() {
            return true;
          }
        }]);
        return BiomeTile;
      }(Biome), (_applyDecoratedDescriptor(_class2.prototype, "prefab", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "biomeY", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "biomeY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dirtY", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "dirtY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rockY", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "rockY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "receiveShadows"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "castShadows"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BiomeTileRiver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './BiomeTile.ts', './consts3.ts', './EBiome.ts', './waterTiles.ts', './createPrefabNode.ts', './cached.ts', './cocos.ts', './filterNullable.ts', './HexagonTile.ts', './toVec3.ts', './assets.ts', './consts8.ts', './state.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Vec3, Vec2, toDegree, computed, BiomeTile, MAX_BIOME_TILE_HEIGHT, EBiomeTile, EBiomeObject, waterTiles, createPrefabNode, cached, ccclass, filterNullable, HexagonTile, toVec3, assets, HEX_OPTIONS, state;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      toDegree = module.toDegree;
    }, function (module) {
      computed = module.computed;
    }, function (module) {
      BiomeTile = module.BiomeTile;
    }, function (module) {
      MAX_BIOME_TILE_HEIGHT = module.MAX_BIOME_TILE_HEIGHT;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      waterTiles = module.waterTiles;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      filterNullable = module.filterNullable;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "13851i6cZtNV7AYKIsOYSxD", "BiomeTileRiver", undefined);
      var RIVER_PREFABS = {
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
      var BiomeTileRiver = exports('BiomeTileRiver', (_dec = ccclass('BiomeTileRiver'), _dec(_class = (_class2 = /*#__PURE__*/function (_BiomeTile) {
        _inheritsLoose(BiomeTileRiver, _BiomeTile);
        function BiomeTileRiver() {
          return _BiomeTile.apply(this, arguments) || this;
        }
        var _proto = BiomeTileRiver.prototype;
        _proto.createRenderNode = function createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          var riverPrefab = assets.getPrefabs(this.prefab);
          var _assets$getMaterials = assets.getMaterials([this.material, this.groundMaterial]),
            waterMaterial = _assets$getMaterials[0],
            riverMaterial = _assets$getMaterials[1];
          return createPrefabNode(riverPrefab, {
            parent: this.node,
            materials: [riverMaterial, waterMaterial],
            scale: new Vec3(1, this.biomeY, 1),
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            rotation: new Vec3(0, this.rotation, 0),
            receiveShadows: true,
            onTap: this.onTap
          });
        };
        _createClass(BiomeTileRiver, [{
          key: "defaultFrom",
          get: function get() {
            return this.tile.hex.topLeft;
          }
        }, {
          key: "rotation",
          get: function get() {
            var _RIVER_PREFABS$this$p;
            var rotation = ((_RIVER_PREFABS$this$p = RIVER_PREFABS[this.prefabKey]) == null ? void 0 : _RIVER_PREFABS$this$p[1]) || 0;
            if (!this.from) {
              return rotation;
            }
            var defaultFromNeighbor = new HexagonTile(null, this.defaultFrom, HEX_OPTIONS);
            var fromNeighbor = new HexagonTile(null, toVec3(this.from), HEX_OPTIONS);
            var center = new Vec2(this.tile.hex.positionX, this.tile.hex.positionZ);
            var defaultFrom = new Vec2(defaultFromNeighbor.positionX, defaultFromNeighbor.positionZ).subtract(center);
            var from = new Vec2(fromNeighbor.positionX, fromNeighbor.positionZ).subtract(center);
            var angle = from.signAngle(defaultFrom);
            return rotation + Math.round(toDegree(angle));
          }
        }, {
          key: "from",
          get: function get() {
            var _this$data;
            var from = (_this$data = this.data) == null || (_this$data = _this$data.data) == null ? void 0 : _this$data.from;
            if (!from) {
              return this.to[0] || null;
            }
            return from || null;
          }
        }, {
          key: "to",
          get: function get() {
            var _this$data2;
            return ((_this$data2 = this.data) == null || (_this$data2 = _this$data2.data) == null ? void 0 : _this$data2.to) || [];
          }
        }, {
          key: "directions",
          get: function get() {
            var _this = this;
            var directions = filterNullable([this.from].concat(this.to));
            var coords = this.tile.hex.coords;
            var sortedNeighbors = this.tile.hex.getOrderedNeigbors(this.from);
            return sortedNeighbors.map(function (neighbor) {
              var tilesMap = state.worldState.tilesMap;
              var tile = tilesMap.get(neighbor);
              var isDirection = directions.some(function (river) {
                return Vec3.equals(river, neighbor);
              });
              if (tile) {
                var heightDiff = Math.abs(tile.self.data.height - _this.tile.data.height);
                if (heightDiff > MAX_BIOME_TILE_HEIGHT) {
                  return null;
                }
                var _tile$self$data = tile.self.data,
                  biomeTile = _tile$self$data.biomeTile,
                  biomeObject = _tile$self$data.biomeObject;
                var biomeTileKey = biomeTile == null ? void 0 : biomeTile.key;
                var biomeObjectKey = biomeObject == null ? void 0 : biomeObject.key;
                var isRiver = biomeTileKey === EBiomeTile.River;
                var isWater = biomeTileKey && waterTiles.includes(biomeTileKey);
                if (isDirection) {
                  if (isRiver || isWater || heightDiff || biomeObjectKey === EBiomeObject.Mountain) {
                    return tile.coords;
                  }
                  return null;
                }
                if (isRiver) {
                  var _currentBiomeTile$dat, _currentBiomeTile$dat2, _biomeTile$data, _biomeTile$data2, _biomeTile$data3;
                  var currentBiomeTile = _this.tile.data.biomeTile;
                  var isOtherRiver = biomeTile && currentBiomeTile && biomeTile.id !== currentBiomeTile.id && (!((_currentBiomeTile$dat = currentBiomeTile.data) != null && _currentBiomeTile$dat.fromId) || ((_currentBiomeTile$dat2 = currentBiomeTile.data) == null ? void 0 : _currentBiomeTile$dat2.fromId) !== biomeTile.id) && (!((_biomeTile$data = biomeTile.data) != null && _biomeTile$data.fromId) || ((_biomeTile$data2 = biomeTile.data) == null ? void 0 : _biomeTile$data2.fromId) !== currentBiomeTile.id);
                  if (isOtherRiver) {
                    return tile.coords;
                  }
                  var isToDirection = biomeTile == null || (_biomeTile$data3 = biomeTile.data) == null || (_biomeTile$data3 = _biomeTile$data3.to) == null ? void 0 : _biomeTile$data3.some(function (toCoords) {
                    return Vec3.equals(toCoords, coords);
                  });
                  if (isToDirection) {
                    return tile.coords;
                  }
                  return null;
                }
                if (isWater) {
                  if (!_this.to.length) {
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
        }, {
          key: "directionsTiles",
          get: function get() {
            var tilesMap = state.worldState.tilesMap;
            return filterNullable(this.directions.map(function (coords) {
              return coords ? tilesMap.get(coords) : coords;
            }));
          }
        }, {
          key: "prefabKey",
          get: function get() {
            return this.directions.reduce(function (result, item) {
              return result + (item ? '1' : '0');
            }, '');
          }
        }, {
          key: "prefab",
          get: function get() {
            var _this2 = this;
            var _ref = RIVER_PREFABS[this.prefabKey] || [],
              prefab = _ref[0];
            if (prefab) {
              return prefab;
            }
            if (this.directionsTiles.some(function (tile) {
              return tile.self.data.height < _this2.tile.data.height;
            })) {
              return 'hex_river_1';
            }
            return 'hex_river_1_curvy';
          }
        }, {
          key: "material",
          get: function get() {
            return 'water';
          }
        }, {
          key: "groundMaterial",
          get: function get() {
            var tilesMap = state.worldState.tilesMap;
            var neighbors = filterNullable(this.tile.hex.neighbors.map(function (neigbor) {
              return tilesMap.get(neigbor);
            }));
            if (neighbors.some(function (tile) {
              var _tile$self$data$biome;
              return ((_tile$self$data$biome = tile.self.data.biomeTile) == null ? void 0 : _tile$self$data$biome.key) === EBiomeTile.Sand;
            })) {
              return 'sand';
            }
            return 'grass';
          }
        }, {
          key: "receiveShadows",
          get: function get() {
            return false;
          }
        }, {
          key: "castShadows",
          get: function get() {
            return false;
          }
        }]);
        return BiomeTileRiver;
      }(BiomeTile), (_applyDecoratedDescriptor(_class2.prototype, "defaultFrom", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "defaultFrom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rotation", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "from", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "from"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "to", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "to"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "directions", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "directions"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "directionsTiles", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "directionsTiles"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "prefabKey", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "prefabKey"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "groundMaterial", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "groundMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "receiveShadows"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "castShadows"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/biomeTiles.ts", ['cc', './BiomeTileRiver.ts', './BiomeTileWater.ts', './EBiome.ts'], function (exports) {
  var cclegacy, BiomeTileRiver, BiomeTileWater, EBiomeTile;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BiomeTileRiver = module.BiomeTileRiver;
    }, function (module) {
      BiomeTileWater = module.BiomeTileWater;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }],
    execute: function () {
      var _biomeTiles;
      cclegacy._RF.push({}, "a4588hOtpVHjq+Qm4VYLiWS", "biomeTiles", undefined);
      var biomeTiles = exports('biomeTiles', (_biomeTiles = {}, _biomeTiles[EBiomeTile.Lake] = BiomeTileWater, _biomeTiles[EBiomeTile.Sea] = BiomeTileWater, _biomeTiles[EBiomeTile.River] = BiomeTileRiver, _biomeTiles));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BiomeTileWater.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BiomeTile.ts', './createPrefabNode.ts', './cached.ts', './cocos.ts', './assets.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Vec3, BiomeTile, createPrefabNode, cached, ccclass, assets;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      BiomeTile = module.BiomeTile;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "4c4a0SIrDhPmaz5dL9TJkii", "BiomeTileWater", undefined);
      var BiomeTileWater = exports('BiomeTileWater', (_dec = ccclass('BiomeTileWater'), _dec(_class = (_class2 = /*#__PURE__*/function (_BiomeTile) {
        _inheritsLoose(BiomeTileWater, _BiomeTile);
        function BiomeTileWater() {
          return _BiomeTile.apply(this, arguments) || this;
        }
        var _proto = BiomeTileWater.prototype;
        _proto.createRenderNode = function createRenderNode() {
          if (!this.biomeY) {
            return null;
          }
          var prefab = assets.getPrefabs(this.prefab);
          var material = assets.getMaterials(this.material);
          return createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            position: new Vec3(0, this.rockY + this.dirtY, 0),
            receiveShadows: true,
            onTap: this.onTap
          });
        };
        _createClass(BiomeTileWater, [{
          key: "prefab",
          get: function get() {
            return 'hex_water';
          }
        }, {
          key: "material",
          get: function get() {
            return 'water';
          }
        }, {
          key: "receiveShadows",
          get: function get() {
            return false;
          }
        }, {
          key: "castShadows",
          get: function get() {
            return false;
          }
        }]);
        return BiomeTileWater;
      }(BiomeTile), (_applyDecoratedDescriptor(_class2.prototype, "prefab", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "material", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "receiveShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "receiveShadows"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "castShadows", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "castShadows"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bound.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('bound', bound);
      cclegacy._RF.push({}, "f8436JgjQdLor/F592tTfO1", "bound", undefined);
      function bound(_target, propertyKey, descriptor) {
        if (!descriptor || typeof descriptor.value !== 'function') {
          throw new TypeError("Only methods can be decorated with @bound. <" + propertyKey + "> is not a method!");
        }
        return {
          configurable: true,
          get: function get() {
            var binded = descriptor.value.bind(this);
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
    }
  };
});

System.register("chunks:///_virtual/BuildCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuildingsDB.ts', './EBuilding.ts', './PhotoboothIcon.ts', './UiLabel.ts', './Observer.ts', './cocos.ts', './toCocosEnum.ts', './assets.ts', './index.ts', './state.ts', './factoryTemplateComponent.ts', './ResourceAmount.ts', './updateNodeLayout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Sprite, Node, Label, BuildingsDB, EBuilding, PhotoboothIcon, UiLabel, Observer, ccclass, property, toCocosEnum, assets, action, computed, observable, state, factoryTemplateComponent, ResourceAmount, updateNodeLayout;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
    }, function (module) {
      BuildingsDB = module.BuildingsDB;
    }, function (module) {
      EBuilding = module.EBuilding;
    }, function (module) {
      PhotoboothIcon = module.PhotoboothIcon;
    }, function (module) {
      UiLabel = module.UiLabel;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      toCocosEnum = module.toCocosEnum;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }, function (module) {
      state = module.state;
    }, function (module) {
      factoryTemplateComponent = module.factoryTemplateComponent;
    }, function (module) {
      ResourceAmount = module.ResourceAmount;
    }, function (module) {
      updateNodeLayout = module.updateNodeLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "4d13doGp95Fmrtire4TB7la", "BuildCard", undefined);
      var BuildCard = exports('BuildCard', (_dec = ccclass('BuildCard'), _dec2 = property({
        type: toCocosEnum(EBuilding)
      }), _dec3 = property(Sprite), _dec4 = property(PhotoboothIcon), _dec5 = property(UiLabel), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = action.bound, _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(BuildCard, _Observer);
        function BuildCard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "building", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coloredBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "border", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "allCount", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addCount", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resources", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selected", _descriptor10, _assertThisInitialized(_this));
          _this.onClick = void 0;
          return _this;
        }
        var _proto = BuildCard.prototype;
        _proto.onLoad = function onLoad() {
          var data = this.buildingData;
          if (!data || !data.buildOptions) {
            return;
          }
          var prefab = assets.getPrefabs(data.prefab);
          if (data.buildOptions.iconScale) {
            this.icon.scale = data.buildOptions.iconScale;
          }
          this.icon.shootPrefab = prefab;
          this.title.string = data.title;
          this.coloredBg.color = data.buildOptions.iconColor;
          var resources = Object.keys(data.buildOptions.price);
          for (var _i = 0, _resources = resources; _i < _resources.length; _i++) {
            var resource = _resources[_i];
            var count = data.buildOptions.price[resource];
            factoryTemplateComponent(ResourceAmount, this.resources, {
              resource: resource,
              count: count
            });
          }
          var resourcesBg = this.resources.getComponent(Sprite);
          if (resourcesBg) {
            resourcesBg.color = this.priceColor;
          }
        };
        _proto.render = function render() {
          this.border.active = this.selected;
          this.count.string = this.buildedCount ? "" + this.buildedCount : '';
          this.addCount.string = this.buildQueueCount ? "+" + this.buildQueueCount : '';
          this.allCount.string = this.count.string + this.addCount.string;
          this.allCount.node.active = Boolean(this.allCount.string);
          updateNodeLayout(this);
        };
        _proto.initialize = function initialize(_ref) {
          var building = _ref.building,
            onClick = _ref.onClick;
          this.building = building;
          this.onClick = onClick;
        };
        _proto.onCardClick = function onCardClick() {
          var key = this.buildingKey;
          if (key) {
            var _this$onClick;
            (_this$onClick = this.onClick) == null || _this$onClick.call(this, this.buildingKey);
          }
        };
        _createClass(BuildCard, [{
          key: "buildedCount",
          get: function get() {
            return this.buildingKey && state.worldState.buildedCount[this.buildingKey] || 0;
          }
        }, {
          key: "buildQueueCount",
          get: function get() {
            return this.buildingKey && state.worldState.buildQueueCount[this.buildingKey] || 0;
          }
        }, {
          key: "priceColor",
          get: function get() {
            var _this$buildingData;
            if ((_this$buildingData = this.buildingData) != null && _this$buildingData.buildOptions) {
              var resources = state.resourcesState.resources;
              var price = this.buildingData.buildOptions.price;
              var priceEntries = Object.entries(price);
              var affordable = 0;
              for (var _i2 = 0, _priceEntries = priceEntries; _i2 < _priceEntries.length; _i2++) {
                var _priceEntries$_i = _priceEntries[_i2],
                  resource = _priceEntries$_i[0],
                  value = _priceEntries$_i[1];
                var currentResource = resources[resource];
                if (currentResource === undefined) {
                  return ResourceAmount.NEGATIVE_COLOR;
                }
                if (currentResource + value >= 0) {
                  affordable++;
                }
              }
              if (!affordable) {
                return ResourceAmount.NEGATIVE_COLOR;
              }
              if (affordable < priceEntries.length) {
                return ResourceAmount.NEGATIVE_COLOR;
              }
            }
            return ResourceAmount.POSITIVE_COLOR;
          }
        }, {
          key: "buildingKey",
          get: function get() {
            if (this.building) {
              return this.building;
            }
            return null;
          }
        }, {
          key: "buildingData",
          get: function get() {
            return this.buildingKey && BuildingsDB[this.buildingKey];
          }
        }]);
        return BuildCard;
      }(Observer), _class3.template = 'BuildCard', _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "building", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coloredBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "border", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "allCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addCount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "resources", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "selected", [property, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "buildedCount", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "buildedCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "buildQueueCount", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "buildQueueCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "priceColor", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "priceColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "buildingData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "initialize", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "initialize"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Building.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './bound.ts', './BuildingComponent.ts', './cached.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, ccclass, bound, BuildingComponent, cached, action, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      bound = module.bound;
    }, function (module) {
      BuildingComponent = module.BuildingComponent;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      action = module.action;
      computed = module.computed;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "e2f4aiB81NAc4XbQnjgx5h7", "Building", undefined);
      var Building = exports('Building', (_dec = ccclass('Building'), _dec2 = action.bound, _dec(_class = (_class2 = /*#__PURE__*/function (_BuildingComponent) {
        _inheritsLoose(Building, _BuildingComponent);
        function Building() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BuildingComponent.call.apply(_BuildingComponent, [this].concat(args)) || this;
          _this.onTap = void 0;
          return _this;
        }
        var _proto = Building.prototype;
        _proto.onBuildingTap = function onBuildingTap(event) {
          var _this$onTap;
          (_this$onTap = this.onTap) == null || _this$onTap.call(this, event);
        };
        _proto.initialize = function initialize(_ref) {
          var data = _ref.data,
            tile = _ref.tile,
            onTap = _ref.onTap;
          _BuildingComponent.prototype.initialize.call(this, {
            data: data,
            tile: tile
          });
          this.onTap = onTap;
        };
        _createClass(Building, [{
          key: "buildingData",
          get: function get() {
            return this.data;
          }
        }, {
          key: "materials",
          get: function get() {
            return [];
          }
        }]);
        return Building;
      }(BuildingComponent), (_applyDecoratedDescriptor(_class2.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "buildingData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "materials", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "materials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onBuildingTap", [bound], Object.getOwnPropertyDescriptor(_class2.prototype, "onBuildingTap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "initialize", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "initialize"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Observer.ts', './createPrefabNode.ts', './assets.ts', './BuildingsDB.ts', './consts.ts', './clamp.ts', './getAllComponents.ts', './Ui3D.ts', './factoryComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Vec3, MeshRenderer, action, computed, observable, Observer, createPrefabNode, assets, BuildingsDB, BUILD_PROGRESS_MAX, BUILD_PROGRESS_STAGES, BUILDING_ROTATION_INIT, clamp, getAllComponents, Ui3D, factoryComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      BuildingsDB = module.BuildingsDB;
    }, function (module) {
      BUILD_PROGRESS_MAX = module.BUILD_PROGRESS_MAX;
      BUILD_PROGRESS_STAGES = module.BUILD_PROGRESS_STAGES;
      BUILDING_ROTATION_INIT = module.BUILDING_ROTATION_INIT;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      getAllComponents = module.getAllComponents;
    }, function (module) {
      Ui3D = module.Ui3D;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }],
    execute: function () {
      var _dec, _class, _descriptor;
      cclegacy._RF.push({}, "aa8ccNNzQhKBq7n8Sv1+z+c", "BuildingComponent", undefined);
      var UI_3D_BUTTON_BORDERS = [1, 10];
      var BuildingComponent = exports('BuildingComponent', (_dec = action.bound, (_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(BuildingComponent, _Observer);
        function BuildingComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.building = void 0;
          _this.turnsLeftUi = void 0;
          _initializerDefineProperty(_this, "data", _descriptor, _assertThisInitialized(_this));
          _this.tile = void 0;
          return _this;
        }
        var _proto = BuildingComponent.prototype;
        _proto.render = function render() {
          var _this$building;
          (_this$building = this.building) == null || _this$building.destroy();
          this.building = undefined;
          this.building = createPrefabNode(this.prefab, {
            parent: this.node,
            rotation: this.rotation,
            materials: this.materials,
            castShadows: true,
            receiveShadows: true,
            onTap: this.onBuildingTap.bind(this)
          });
          if (this.isConstructing) {
            var props = {
              sprite: "BubbleTurns" + clamp(this.constructionStepsLeft, UI_3D_BUTTON_BORDERS),
              onTap: this.onBuildingTap,
              position: new Vec3(0, this.buildingHeight, 0)
            };
            if (!this.turnsLeftUi) {
              this.turnsLeftUi = factoryComponent(Ui3D, this.node, props);
            } else {
              this.turnsLeftUi.initialize(props);
            }
          } else {
            if (this.turnsLeftUi) {
              this.turnsLeftUi.node.destroy();
              this.turnsLeftUi = undefined;
            }
          }
        };
        _proto.onLoad = function onLoad() {
          this.node.setPosition(new Vec3(0, this.tile.groundY, 0));
        };
        _proto.initialize = function initialize(_ref) {
          var data = _ref.data,
            tile = _ref.tile;
          this.data = data;
          this.tile = tile;
        };
        _createClass(BuildingComponent, [{
          key: "buildingKey",
          get: function get() {
            return this.buildingData.key;
          }
        }, {
          key: "isConstructing",
          get: function get() {
            var progress = this.buildingData.progress;
            return Boolean(progress < BUILD_PROGRESS_MAX);
          }
        }, {
          key: "constructionSpeed",
          get: function get() {
            var buildOptions = this.buildingDb.buildOptions;
            return BUILD_PROGRESS_MAX / (buildOptions ? buildOptions.turns : BUILD_PROGRESS_MAX);
          }
        }, {
          key: "constructionStepsLeft",
          get: function get() {
            if (!this.isConstructing) {
              return 0;
            }
            var progress = this.buildingData.progress;
            var turnsLeft = (BUILD_PROGRESS_MAX - progress) / this.constructionSpeed;
            return Math.ceil(parseFloat(turnsLeft.toFixed(2)));
          }
        }, {
          key: "prefab",
          get: function get() {
            var prefab = this.buildingDb.prefab;
            if (this.isConstructing) {
              var progress = this.buildingData.progress;
              var step = BUILD_PROGRESS_MAX / BUILD_PROGRESS_STAGES.length;
              var stageIndex = clamp(Math.floor(progress / step), [0, BUILD_PROGRESS_STAGES.length - 1]);
              prefab = BUILD_PROGRESS_STAGES[stageIndex];
            }
            return assets.getPrefabs(prefab);
          }
        }, {
          key: "rotation",
          get: function get() {
            return new Vec3(0, BUILDING_ROTATION_INIT + (this.buildingData.rotate || 0), 0);
          }
        }, {
          key: "buildingDb",
          get: function get() {
            return BuildingsDB[this.buildingKey];
          }
        }, {
          key: "buildingHeight",
          get: function get() {
            if (!this.prefab || !this.building) {
              return 0;
            }
            var meshes = getAllComponents(this.building, MeshRenderer);
            var _meshes$reduce = meshes.reduce(function (_ref2, mesh) {
                var min = _ref2[0],
                  max = _ref2[1];
                var model = mesh.model;
                var bounds = model == null ? void 0 : model.worldBounds;
                if (bounds) {
                  var minVec = new Vec3();
                  var maxVec = new Vec3();
                  bounds.getBoundary(minVec, maxVec);
                  return [min !== null ? Math.min(min, minVec.y) : minVec.y, max !== null ? Math.max(max, maxVec.y) : maxVec.y];
                }
                return [min, max];
              }, [null, null]),
              min = _meshes$reduce[0],
              max = _meshes$reduce[1];
            return (max || 0) - (min || 0);
          }
        }]);
        return BuildingComponent;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class.prototype, "buildingKey", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingKey"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isConstructing", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "isConstructing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "constructionSpeed", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "constructionSpeed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "constructionStepsLeft", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "constructionStepsLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prefab", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "prefab"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rotation", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "rotation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildingDb", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingDb"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildingHeight", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingHeight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initialize", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/buildingPrefabs.ts", ['cc', './EBuilding.ts'], function (exports) {
  var cclegacy, EBuilding;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBuilding = module.EBuilding;
    }],
    execute: function () {
      var _buildingPrefabs;
      cclegacy._RF.push({}, "39b2eVu3q5KWKcNftXVPSVP", "buildingPrefabs", undefined);
      var buildingPrefabs = exports('buildingPrefabs', (_buildingPrefabs = {}, _buildingPrefabs[EBuilding.Castle] = 'building_destroyed', _buildingPrefabs[EBuilding.Lumberjack] = 'building_tent', _buildingPrefabs[EBuilding.Sawmill] = 'building_lumbermill', _buildingPrefabs[EBuilding.Quarry] = 'building_scaffolding', _buildingPrefabs));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingPreview.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './assets.ts', './index.ts', './factoryComponent.ts', './Ui3D.ts', './bound.ts', './consts.ts', './cached.ts', './BuildingComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _extends, cclegacy, Vec3, ccclass, assets, computed, runInAction, factoryComponent, Ui3D, bound, BUILD_PROGRESS_MAX, cached, BuildingComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      computed = module.computed;
      runInAction = module.runInAction;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }, function (module) {
      Ui3D = module.Ui3D;
    }, function (module) {
      bound = module.bound;
    }, function (module) {
      BUILD_PROGRESS_MAX = module.BUILD_PROGRESS_MAX;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      BuildingComponent = module.BuildingComponent;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "53df1Pl7AJLFLhg81ZeScmA", "BuildingPreview", undefined);
      var BuildingPreview = exports('BuildingPreview', (_dec = ccclass('BuildingPreview'), _dec(_class = (_class2 = /*#__PURE__*/function (_BuildingComponent) {
        _inheritsLoose(BuildingPreview, _BuildingComponent);
        function BuildingPreview() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BuildingComponent.call.apply(_BuildingComponent, [this].concat(args)) || this;
          _this.rotateButton = void 0;
          return _this;
        }
        var _proto = BuildingPreview.prototype;
        _proto.onBuildingTap = function onBuildingTap(event) {
          this.rotateButton.onClick(event);
        };
        _proto.render = function render() {
          var _this2 = this;
          _BuildingComponent.prototype.render.call(this);
          if (!this.rotateButton) {
            this.rotateButton = factoryComponent(Ui3D, this.node, {
              sprite: 'BubbleRotate',
              onTap: this.onBuildingTap
            });
          }
          runInAction(function () {
            _this2.rotateButton.position = new Vec3(0, _this2.buildingHeight, 0);
          });
        };
        _createClass(BuildingPreview, [{
          key: "buildingData",
          get: function get() {
            return _extends({}, this.data, {
              progress: BUILD_PROGRESS_MAX
            });
          }
        }, {
          key: "materials",
          get: function get() {
            var material = assets.getMaterials('white');
            return [material];
          }
        }]);
        return BuildingPreview;
      }(BuildingComponent), (_applyDecoratedDescriptor(_class2.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "buildingData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "materials", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "materials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onBuildingTap", [bound], Object.getOwnPropertyDescriptor(_class2.prototype, "onBuildingTap"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingsDB.ts", ['cc', './EBiome.ts', './EBuilding.ts', './EResource.ts', './tileHasBiomeObjects.ts', './tileNotWater.ts', './tileWithoutObject.ts', './hexColor.ts'], function (exports) {
  var cclegacy, EBiomeObject, EBuilding, EResource, tileHasBiomeObjects, tileNotWater, tileWithoutObject, hexColor;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      EBuilding = module.EBuilding;
    }, function (module) {
      EResource = module.EResource;
    }, function (module) {
      tileHasBiomeObjects = module.tileHasBiomeObjects;
    }, function (module) {
      tileNotWater = module.tileNotWater;
    }, function (module) {
      tileWithoutObject = module.tileWithoutObject;
    }, function (module) {
      hexColor = module.hexColor;
    }],
    execute: function () {
      var _resources, _resources2, _price, _resources3, _price2, _resources4, _price3, _BuildingsDB;
      cclegacy._RF.push({}, "6b9cc8hS+BLmKM3KZ9XzOjo", "BuildingsDB", undefined);
      var BuildingsDB = exports('BuildingsDB', (_BuildingsDB = {}, _BuildingsDB[EBuilding.Castle] = {
        title: 'Castle',
        prefab: 'building_castle',
        resources: (_resources = {}, _resources[EResource.Log] = +2, _resources)
      }, _BuildingsDB[EBuilding.Lumberjack] = {
        title: 'Lumberjack',
        prefab: 'building_tent',
        resources: (_resources2 = {}, _resources2[EResource.Log] = +1, _resources2),
        buildOptions: {
          iconColor: hexColor('D5B089', 0.5),
          turns: 1,
          price: (_price = {}, _price[EResource.Log] = -1, _price)
        },
        tileTest: function tileTest(tile) {
          return tileWithoutObject(tile) && tileNotWater(tile) && tile.neighborsTiles.some(function (neighbor) {
            return tileHasBiomeObjects(neighbor, [EBiomeObject.Forest]);
          });
        }
      }, _BuildingsDB[EBuilding.Quarry] = {
        title: 'Quarry',
        prefab: 'building_scaffolding',
        resources: (_resources3 = {}, _resources3[EResource.Stone] = +1, _resources3),
        buildOptions: {
          iconColor: hexColor('708695', 0.5),
          turns: 1,
          price: (_price2 = {}, _price2[EResource.Log] = -1, _price2[EResource.Plank] = -1, _price2)
        },
        tileTest: function tileTest(tile) {
          return tileWithoutObject(tile) && tileNotWater(tile) && tile.neighborsTiles.some(function (neighbor) {
            return tileHasBiomeObjects(neighbor, [EBiomeObject.Mountain, EBiomeObject.Rocks]);
          });
        }
      }, _BuildingsDB[EBuilding.Sawmill] = {
        title: 'Sawmill',
        prefab: 'building_lumbermill',
        resources: (_resources4 = {}, _resources4[EResource.Log] = -1, _resources4[EResource.Plank] = +1, _resources4),
        buildOptions: {
          iconColor: hexColor('D5B089', 0.5),
          turns: 3,
          price: (_price3 = {}, _price3[EResource.Log] = -2, _price3)
        },
        tileTest: function tileTest(tile) {
          return tileWithoutObject(tile) && tileNotWater(tile);
        }
      }, _BuildingsDB));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildRoute.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuildingsDB.ts', './DiWorld.ts', './fromVec3ToVec2.ts', './AbstractRoute.ts', './ERouteName.ts', './BuildScreen.ts', './state.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, BuildingsDB, DiWorld, fromVec3ToVec2, AbstractRoute, ERouteName, BuildScreen, state, observable, computed, reaction, action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BuildingsDB = module.BuildingsDB;
    }, function (module) {
      DiWorld = module.DiWorld;
    }, function (module) {
      fromVec3ToVec2 = module.fromVec3ToVec2;
    }, function (module) {
      AbstractRoute = module.AbstractRoute;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      BuildScreen = module.BuildScreen;
    }, function (module) {
      state = module.state;
    }, function (module) {
      observable = module.observable;
      computed = module.computed;
      reaction = module.reaction;
      action = module.action;
    }],
    execute: function () {
      var _dec, _class, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "3d96fqiWYVGzb0XVc4uc32E", "BuildRoute", undefined);
      var BuildRoute = exports('BuildRoute', (_dec = observable.ref, (_class = /*#__PURE__*/function (_AbstractRoute) {
        _inheritsLoose(BuildRoute, _AbstractRoute);
        function BuildRoute() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractRoute.call.apply(_AbstractRoute, [this].concat(args)) || this;
          _this.name = ERouteName.Build;
          _this.screen = BuildScreen;
          _initializerDefineProperty(_this, "building", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingRotate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingCoords", _descriptor3, _assertThisInitialized(_this));
          _this.disposeBuildingListen = void 0;
          _this.disposeBuildingPositionListen = void 0;
          return _this;
        }
        var _proto = BuildRoute.prototype;
        _proto.zoomIn = function zoomIn() {
          if (this.buildingTile) {
            var camera = DiWorld.worldCamera;
            camera.navigate({
              zooming: -0.5,
              position: fromVec3ToVec2(this.buildingTile.node.getWorldPosition())
            });
          }
        };
        _proto.zoomOut = function zoomOut() {
          var camera = DiWorld.worldCamera;
          if (camera.zooming < 0) {
            camera.navigate({
              zooming: 0
            });
          }
        };
        _proto.serialize = function serialize() {
          return {
            building: this.building,
            buildingCoords: this.buildingCoords
          };
        };
        _proto.initialize = function initialize(options) {
          var _this2 = this;
          _AbstractRoute.prototype.initialize.call(this, options);
          this.disposeBuildingListen = reaction(function () {
            return _this2.building;
          }, action(function () {
            _this2.buildingCoords = null;
            _this2.zoomOut();
          }));
          this.disposeBuildingPositionListen = reaction(function () {
            return _this2.buildingCoords;
          }, function () {
            _this2.zoomIn();
          });
          return this;
        };
        _proto.destroy = function destroy() {
          var _this$disposeBuilding, _this$disposeBuilding2;
          (_this$disposeBuilding = this.disposeBuildingListen) == null || _this$disposeBuilding.call(this);
          (_this$disposeBuilding2 = this.disposeBuildingPositionListen) == null || _this$disposeBuilding2.call(this);
        };
        _createClass(BuildRoute, [{
          key: "buildingTile",
          get: function get() {
            var tilesMap = state.worldState.tilesMap;
            if (this.buildingCoords) {
              var _tilesMap$get;
              return ((_tilesMap$get = tilesMap.get(this.buildingCoords)) == null ? void 0 : _tilesMap$get.self) || null;
            }
            return null;
          }
        }, {
          key: "buildingData",
          get: function get() {
            if (!this.building) {
              return undefined;
            }
            return {
              key: this.building,
              rotate: this.buildingRotate,
              progress: 0
            };
          }
        }, {
          key: "buildingDb",
          get: function get() {
            return this.building && BuildingsDB[this.building] || null;
          }
        }, {
          key: "isChunkMode",
          get: function get() {
            return !this.isBuildingPositionMode && !this.isBuildingPreviewMode;
          }
        }, {
          key: "isBuildingPositionMode",
          get: function get() {
            return Boolean(this.building && !this.isBuildingPreviewMode);
          }
        }, {
          key: "isBuildingPreviewMode",
          get: function get() {
            return Boolean(this.building && this.buildingCoords);
          }
        }]);
        return BuildRoute;
      }(AbstractRoute), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "building", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "buildingRotate", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "buildingCoords", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class.prototype, "buildingTile", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingTile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildingData", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildingDb", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildingDb"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isChunkMode", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "isChunkMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isBuildingPositionMode", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "isBuildingPositionMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isBuildingPreviewMode", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "isBuildingPreviewMode"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuildCard.ts', './EBuilding.ts', './factoryTemplateComponent.ts', './cocos.ts', './AbstractScreen.ts', './ERouteName.ts', './router.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, Node, BuildCard, EBuilding, factoryTemplateComponent, ccclass, property, AbstractScreen, ERouteName, router, observable, action, computed, runInAction;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }, function (module) {
      BuildCard = module.BuildCard;
    }, function (module) {
      EBuilding = module.EBuilding;
    }, function (module) {
      factoryTemplateComponent = module.factoryTemplateComponent;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      AbstractScreen = module.AbstractScreen;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }, function (module) {
      observable = module.observable;
      action = module.action;
      computed = module.computed;
      runInAction = module.runInAction;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "69210hpIv1AbYLmEWFK2XQb", "BuildScreen", undefined);
      var BUILDINGS = [EBuilding.Lumberjack, EBuilding.Sawmill, EBuilding.Quarry];
      var BuildScreen = exports('BuildScreen', (_dec = ccclass('BuildScreen'), _dec2 = property(Node), _dec3 = observable.shallow, _dec4 = action.bound, _dec5 = action.bound, _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AbstractScreen) {
        _inheritsLoose(BuildScreen, _AbstractScreen);
        function BuildScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractScreen.call.apply(_AbstractScreen, [this].concat(args)) || this;
          _this.routeName = ERouteName.Build;
          _initializerDefineProperty(_this, "buildingsNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildCards", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BuildScreen.prototype;
        _proto.onLoad = function onLoad() {
          for (var _i = 0, _BUILDINGS = BUILDINGS; _i < _BUILDINGS.length; _i++) {
            var building = _BUILDINGS[_i];
            var card = factoryTemplateComponent(BuildCard, this.buildingsNode, {
              building: building,
              onClick: this.onSelectBuilding
            });
            this.buildCards.push(card);
          }
        };
        _proto.onSelectBuilding = function onSelectBuilding(building) {
          if (this.route) {
            this.route.building = this.route.building === building ? null : building;
          }
        };
        _proto.onBuildClick = function onBuildClick() {
          if (!this.route) {
            return;
          }
          var tile = this.route.buildingTile;
          if (tile) {
            this.route.zoomOut();
            router.navigateBack();
            if (tile.buildingPreview) {
              tile.buildingPreview.node.active = false;
            }
            tile.data.building = this.route.buildingData;
          }
        };
        _proto.onCancelClick = function onCancelClick() {
          var isNavigated = router.navigateBack();
          if (!isNavigated) {
            router.navigate(ERouteName.World);
          }
        };
        _proto.render = function render() {
          var _this$route,
            _this2 = this;
          var selectedBuilding = (_this$route = this.route) == null ? void 0 : _this$route.building;
          runInAction(function () {
            for (var _iterator = _createForOfIteratorHelperLoose(_this2.buildCards), _step; !(_step = _iterator()).done;) {
              var card = _step.value;
              card.selected = card.building === selectedBuilding;
            }
          });
        };
        _createClass(BuildScreen, [{
          key: "isBuildingSelected",
          get: function get() {
            var _this$route2;
            return Boolean((_this$route2 = this.route) == null ? void 0 : _this$route2.building);
          }
        }, {
          key: "isReadyToBuild",
          get: function get() {
            var _this$route3;
            return (_this$route3 = this.route) == null ? void 0 : _this$route3.isBuildingPreviewMode;
          }
        }]);
        return BuildScreen;
      }(AbstractScreen), _class3.template = 'BuildScreen', _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildingsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildCards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onSelectBuilding", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "onSelectBuilding"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onBuildClick", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "onBuildClick"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isBuildingSelected", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "isBuildingSelected"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isReadyToBuild", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "isReadyToBuild"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Button.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './cached.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, EventHandler, Button$1, Label, Observer, cached;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventHandler = module.EventHandler;
      Button$1 = module.Button;
      Label = module.Label;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      cached = module.cached;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "db7a0SQlQFHe5ZB+stYh1gA", "Button", undefined);
      var Button = exports('Button', (_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Button, _Observer);
        function Button() {
          return _Observer.apply(this, arguments) || this;
        }
        var _proto = Button.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.button) {
            throw new Error('Button component must be used only with buttons');
          }
          var clickEventHandler = new EventHandler();
          clickEventHandler.target = this.node;
          clickEventHandler.component = this.__classname__;
          clickEventHandler.handler = 'onClick';
          this.button.clickEvents.push(clickEventHandler);
        };
        _createClass(Button, [{
          key: "button",
          get: function get() {
            return this.node.getComponent(Button$1);
          }
        }, {
          key: "label",
          get: function get() {
            return this.node.getComponentInChildren(Label);
          }
        }]);
        return Button;
      }(Observer), _applyDecoratedDescriptor(_class.prototype, "button", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "button"), _class.prototype), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonAction.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './consts6.ts', './EButtonSize.ts', './UiBackground.ts', './UiLabel.ts', './Observer.ts', './ELayer.ts', './factoryChildNode.ts', './factorySprite.ts', './cached.ts', './cocos.ts', './hexRadius.ts', './assets.ts', './index.ts', './getAllComponents.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Color, EventHandler, CCString, SpriteFrame, CCInteger, CCBoolean, Button, UITransform, Layout, Widget, instantiate, Sprite, BlockInputEvents, BUTTON_TRANSITION_SCALE, BUTTON_TRANSITION_TIME, EButtonSize, UiBackground, UiLabel, Observer, ELayer, factoryChildNode, factorySprite, cached, ccclass, property, hexRadius, assets, observable, getAllComponents;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      EventHandler = module.EventHandler;
      CCString = module.CCString;
      SpriteFrame = module.SpriteFrame;
      CCInteger = module.CCInteger;
      CCBoolean = module.CCBoolean;
      Button = module.Button;
      UITransform = module.UITransform;
      Layout = module.Layout;
      Widget = module.Widget;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      BlockInputEvents = module.BlockInputEvents;
    }, function (module) {
      BUTTON_TRANSITION_SCALE = module.BUTTON_TRANSITION_SCALE;
      BUTTON_TRANSITION_TIME = module.BUTTON_TRANSITION_TIME;
    }, function (module) {
      EButtonSize = module.EButtonSize;
    }, function (module) {
      UiBackground = module.UiBackground;
    }, function (module) {
      UiLabel = module.UiLabel;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ELayer = module.ELayer;
    }, function (module) {
      factoryChildNode = module.factoryChildNode;
    }, function (module) {
      factorySprite = module.factorySprite;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      hexRadius = module.hexRadius;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      observable = module.observable;
    }, function (module) {
      getAllComponents = module.getAllComponents;
    }],
    execute: function () {
      var _ButtonSizeMap, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "755b9jEOORFtqOHD29h5paX", "ButtonAction", undefined);
      var AvailableSizes = [EButtonSize.S80, EButtonSize.S100];
      var ButtonSizeMap = (_ButtonSizeMap = {}, _ButtonSizeMap[EButtonSize.S80] = {
        leftBg: 'ButtonActionLeft_80',
        rightBg: 'ButtonActionRight_80',
        iconOnlyBg: 'ButtonActionIcon_80',
        contentSize: 36
      }, _ButtonSizeMap[EButtonSize.S100] = {
        leftBg: 'ButtonActionLeft_100',
        rightBg: 'ButtonActionRight_100',
        iconOnlyBg: 'ButtonActionIcon_100',
        contentSize: 42
      }, _ButtonSizeMap);
      var DISABLED_COLOR = new Color(32, 35, 51, 51);
      var DISABLED_LABEL_COLOR = new Color(DISABLED_COLOR.r, DISABLED_COLOR.g, DISABLED_COLOR.b, 76);
      var ButtonAction = exports('ButtonAction', (_dec = ccclass('ButtonAction'), _dec2 = property({
        type: [EventHandler],
        displayOrder: 20
      }), _dec3 = property(Color), _dec4 = property(CCString), _dec5 = property({
        visible: function visible() {
          return Boolean(this.label);
        }
      }), _dec6 = property(SpriteFrame), _dec7 = property({
        visible: function visible() {
          return Boolean(this.icon);
        }
      }), _dec8 = property({
        type: CCInteger,
        visible: function visible() {
          return Boolean(this.icon && !this.label);
        }
      }), _dec9 = property({
        type: CCBoolean,
        visible: function visible() {
          return Boolean(this.icon && !this.label);
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(ButtonAction, _Observer);
        function ButtonAction() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.iconComponent = null;
          _this.labelComponent = null;
          _this.buttonComponent = null;
          _this.bgComponent = null;
          _this.bgNode = null;
          _this.disabledBgNode = null;
          _initializerDefineProperty(_this, "disabled", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEvents", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconColor", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSize", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBgRotated", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "castShadow", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ButtonAction.prototype;
        _proto.__preload = function __preload() {
          var _this2 = this;
          this.buttonComponent = this.addComponent(Button);
          if (this.buttonComponent) {
            this.buttonComponent.clickEvents = this.clickEvents.slice();
            this.buttonComponent.transition = Button.Transition.SCALE;
            this.buttonComponent.zoomScale = BUTTON_TRANSITION_SCALE;
            this.buttonComponent.duration = BUTTON_TRANSITION_TIME;
          }
          var _ButtonSizeMap$this$s = ButtonSizeMap[this.size],
            leftBg = _ButtonSizeMap$this$s.leftBg,
            rightBg = _ButtonSizeMap$this$s.rightBg,
            iconOnlyBg = _ButtonSizeMap$this$s.iconOnlyBg,
            contentSize = _ButtonSizeMap$this$s.contentSize;
          this.bgNode = factoryChildNode(this.node, function (bgNode) {
            if (_this2.label) {
              var _assets$getSprites = assets.getSprites([leftBg, rightBg]),
                startSprite = _assets$getSprites[0],
                endSprite = _assets$getSprites[1];
              _this2.bgComponent = bgNode.addComponent(UiBackground);
              _this2.bgComponent.initialize({
                startSprite: startSprite,
                endSprite: endSprite,
                color: _this2.color.clone(),
                castShadow: _this2.castShadow
              });
            } else {
              if (_this2.iconBgRotated) {
                bgNode.angle = 90;
              }
              var bgSprite = assets.getSprites(iconOnlyBg);
              if (_this2.castShadow) {
                bgNode.layer = ELayer.UI_2D_SHADOW_CAST;
              }
              var bgTransform = bgNode.addComponent(UITransform);
              bgTransform.height = _this2.size;
              bgTransform.width = Math.round(hexRadius(bgTransform.height));
              _this2.bgComponent = factorySprite(bgNode, bgSprite, _this2.color);
            }
          });
          if (this.label || this.icon) {
            factoryChildNode(this.node, function (wrapperNode) {
              var wrapperLayout = wrapperNode.addComponent(Layout);
              wrapperLayout.type = Layout.Type.HORIZONTAL;
              wrapperLayout.resizeMode = Layout.ResizeMode.CONTAINER;
              wrapperLayout.spacingX = 8;
              var wrapperWidget = wrapperNode.addComponent(Widget);
              wrapperWidget.isAlignHorizontalCenter = true;
              wrapperWidget.horizontalCenter = 0;
              wrapperWidget.isAlignVerticalCenter = true;
              wrapperWidget.verticalCenter = 0;
              if (_this2.icon) {
                factoryChildNode(wrapperNode, function (iconNode) {
                  var iconTransform = iconNode.addComponent(UITransform);
                  iconTransform.width = iconTransform.height = _this2.label ? contentSize : _this2.iconSize;
                  _this2.iconComponent = factorySprite(iconNode, _this2.icon, _this2.iconColor);
                });
              }
              if (_this2.label) {
                factoryChildNode(wrapperNode, function (labelNode) {
                  var font = assets.getFonts('Nunito-Bold');
                  _this2.labelComponent = labelNode.addComponent(UiLabel);
                  _this2.labelComponent.enableWrapText = false;
                  _this2.labelComponent.font = font;
                  _this2.labelComponent.color = _this2.labelColor;
                  _this2.labelComponent.fontSize = _this2.labelComponent.lineHeight = contentSize;
                  _this2.labelComponent.string = _this2.label;
                });
              }
            });
          }
          _Observer.prototype.__preload.call(this);
        };
        _proto.render = function render() {
          var isEnabled = !this.disabled;
          if (this.buttonComponent && this.buttonComponent.interactable !== isEnabled) {
            this.buttonComponent.interactable = isEnabled;
            if (this.labelComponent) {
              this.labelComponent.color = isEnabled ? this.labelColor : DISABLED_LABEL_COLOR;
            }
            if (!this.disabledBgNode && this.bgNode) {
              this.disabledBgNode = instantiate(this.bgNode);
              var sprites = getAllComponents(this.disabledBgNode, Sprite);
              sprites.forEach(function (sprite) {
                return sprite.color = DISABLED_COLOR.clone();
              });
              var disabledBg = this.disabledBgNode.getComponent(UiBackground);
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
        };
        _createClass(ButtonAction, [{
          key: "uiTransform",
          get: function get() {
            return this.getComponent(UITransform);
          }
        }, {
          key: "size",
          get: function get() {
            var _this$uiTransform$hei, _this$uiTransform;
            var height = (_this$uiTransform$hei = (_this$uiTransform = this.uiTransform) == null ? void 0 : _this$uiTransform.height) != null ? _this$uiTransform$hei : 0;
            var sizes = AvailableSizes.slice().sort(function (a, b) {
              return a - b;
            });
            var i = 0;
            while (sizes[i + 1] && sizes[i + 1] <= height) {
              i++;
            }
            return sizes[i];
          }
        }]);
        return ButtonAction;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "disabled", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec6, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconColor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconSize", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 36;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconBgRotated", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "castShadow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "uiTransform", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "uiTransform"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "size", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonDisabled.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonAction.ts', './ComponentPath.ts', './Observer.ts', './cached.ts', './cocos.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, ButtonAction, ComponentPath, Observer, cached, ccclass, property, runInAction;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ButtonAction = module.ButtonAction;
    }, function (module) {
      ComponentPath = module.ComponentPath;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      runInAction = module.runInAction;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "104deVJP51N9YYi1f8x0Dcs", "ButtonDisabled", undefined);
      var ButtonDisabled = exports('ButtonDisabled', (_dec = ccclass('ButtonDisabled'), _dec2 = property(ComponentPath), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(ButtonDisabled, _Observer);
        function ButtonDisabled() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isDisabled", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isReversed", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ButtonDisabled.prototype;
        _proto.render = function render() {
          var _this2 = this;
          var isDisabled = Boolean(this.isDisabled.exec());
          if (this.isReversed) {
            isDisabled = !isDisabled;
          }
          runInAction(function () {
            if (_this2.button) {
              _this2.button.disabled = isDisabled;
            }
          });
        };
        _createClass(ButtonDisabled, [{
          key: "button",
          get: function get() {
            return this.node.getComponent(ButtonAction);
          }
        }]);
        return ButtonDisabled;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isDisabled", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isReversed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "button", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "button"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonTurn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DiWorld.ts', './Observer.ts', './cached.ts', './cocos.ts', './state.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Node, Widget, tween, Label, DiWorld, Observer, cached, ccclass, property, state, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Widget = module.Widget;
      tween = module.tween;
      Label = module.Label;
    }, function (module) {
      DiWorld = module.DiWorld;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      state = module.state;
    }, function (module) {
      computed = module.computed;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "27b69+r4cZJcLFl4ulxqjjE", "ButtonTurn", undefined);
      var ROTATE_DURATION = 1;
      var ButtonTurn = exports('ButtonTurn', (_dec = ccclass('ButtonTurn'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(ButtonTurn, _Observer);
        function ButtonTurn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "outer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inner", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor3, _assertThisInitialized(_this));
          _this.fullTurn = 0;
          _this.turnAnimation = null;
          return _this;
        }
        var _proto = ButtonTurn.prototype;
        _proto.onLoad = function onLoad() {
          var worldUi = DiWorld.worldUi;
          var wrapperWidget = worldUi.contentNode.getComponent(Widget);
          var widget = this.node.getComponent(Widget);
          if (widget && wrapperWidget) {
            widget.bottom -= wrapperWidget.bottom;
            widget.updateAlignment();
          }
          if (this.labelComponent) {
            this.labelComponent.string = state.turnState.date;
          }
        };
        _proto.render = function render() {
          var _this2 = this;
          if (this.turnAnimation) {
            this.turnAnimation.stop();
            this.turnAnimation = null;
          }
          this.turnAnimation = tween(this.outer).to(ROTATE_DURATION, {
            angle: this.angle
          }, {
            easing: 'cubicInOut'
          }).call(function () {
            if (_this2.outer.angle <= -360) {
              _this2.fullTurn += Math.floor(Math.abs(_this2.outer.angle / 360));
              _this2.outer.angle = _this2.outer.angle % 360;
            }
            if (_this2.labelComponent) {
              _this2.labelComponent.string = state.turnState.date;
            }
          }).start();
        };
        _createClass(ButtonTurn, [{
          key: "startTurn",
          get: function get() {
            return state.turnState.turn;
          }
        }, {
          key: "angle",
          get: function get() {
            return -60 * (state.turnState.turn - this.startTurn) + this.fullTurn * 360;
          }
        }, {
          key: "labelComponent",
          get: function get() {
            return this.label.getComponent(Label);
          }
        }]);
        return ButtonTurn;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "outer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inner", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "startTurn", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "startTurn"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angle", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "angle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "labelComponent", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "labelComponent"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cached.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('cached', cached);
      cclegacy._RF.push({}, "c6138zCp8FOcKdqd1rs7OYR", "cached", undefined);
      function cached(_target, name, descriptor) {
        var getter = descriptor.get;
        if (!getter) throw new TypeError('Getter property descriptor expected');
        return {
          configurable: true,
          get: function get() {
            var value = getter.call(this);
            Object.defineProperty(this, name, {
              configurable: descriptor.configurable,
              enumerable: descriptor.enumerable,
              writable: false,
              value: value
            });
            return value;
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Chunk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Tile.ts', './generateChunk.ts', './Observer.ts', './factoryComponent.ts', './cocos.ts', './toVec3.ts', './state.ts', './ChunkNewButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Vec3, action, observable, Tile, generateChunk, Observer, factoryComponent, ccclass, toVec3, state, ChunkNewButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      action = module.action;
      observable = module.observable;
    }, function (module) {
      Tile = module.Tile;
    }, function (module) {
      generateChunk = module.generateChunk;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      state = module.state;
    }, function (module) {
      ChunkNewButton = module.ChunkNewButton;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "32689hlOXFBX5YrLKIV3Tdr", "Chunk", undefined);
      var Chunk = exports('Chunk', (_dec = ccclass('Chunk'), _dec2 = action.bound, _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Chunk, _Observer);
        function Chunk() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.hex = void 0;
          _this.tiles = [];
          _initializerDefineProperty(_this, "data", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Chunk.prototype;
        _proto.initialize = function initialize(_ref) {
          var coords = _ref.coords,
            data = _ref.data;
          var chunksMap = state.worldState.chunksMap;
          this.hex = chunksMap.add(coords, this);
          this.data = data;
        };
        _proto.draw = function draw() {
          var _this2 = this;
          if (!this.data) {
            factoryComponent(ChunkNewButton, this.node, {
              hexHeight: this.hex.hexHeight,
              hexRadius: this.hex.hexRadius,
              onClick: this.generate
            });
            return;
          }
          this.tiles = this.data.tiles.map(function (tileData) {
            return factoryComponent(Tile, _this2.node, {
              coords: toVec3(tileData.coords),
              chunk: _this2,
              data: tileData
            });
          });
          this.hex.neighbors.forEach(function (coords) {
            var chunksMap = state.worldState.chunksMap;
            if (!chunksMap.get(coords) && _this2.node.parent) {
              var chunk = factoryComponent(Chunk, _this2.node.parent, {
                coords: coords,
                data: null
              });
              chunk.draw();
            }
          });
        };
        _proto.generate = function generate() {
          if (!this.data) {
            this.node.destroyAllChildren();
            this.data = generateChunk(this.hex.coords);
            this.draw();
          }
        };
        _proto.onLoad = function onLoad() {
          this.node.setWorldPosition(new Vec3(this.hex.positionX, 0, this.hex.positionZ));
        };
        return Chunk;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "generate", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "generate"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChunkNewButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './consts9.ts', './Observer.ts', './cocos.ts', './getBuildRoute.ts', './factoryComponent.ts', './Ui3D.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, TILE_BASE_HEIGHT, TILE_HEIGHT_MULTIPLIER, TILE_SEA_LEVEL, Observer, ccclass, getBuildRoute, factoryComponent, Ui3D;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      TILE_BASE_HEIGHT = module.TILE_BASE_HEIGHT;
      TILE_HEIGHT_MULTIPLIER = module.TILE_HEIGHT_MULTIPLIER;
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      getBuildRoute = module.getBuildRoute;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }, function (module) {
      Ui3D = module.Ui3D;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "43a2bVCLYFCiL+wNb5WvHFN", "ChunkNewButton", undefined);
      var ChunkNewButton = exports('ChunkNewButton', (_dec = ccclass('ChunkNewButton'), _dec(_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(ChunkNewButton, _Observer);
        function ChunkNewButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.ui = void 0;
          _this.hexHeight = void 0;
          _this.hexRadius = void 0;
          _this.onClick = void 0;
          return _this;
        }
        var _proto = ChunkNewButton.prototype;
        _proto.initialize = function initialize(_ref) {
          var hexHeight = _ref.hexHeight,
            hexRadius = _ref.hexRadius,
            onClick = _ref.onClick;
          this.hexHeight = hexHeight;
          this.hexRadius = hexRadius;
          this.onClick = onClick;
        };
        _proto.onLoad = function onLoad() {
          this.node.setPosition(new Vec3(0, TILE_BASE_HEIGHT + TILE_HEIGHT_MULTIPLIER * TILE_SEA_LEVEL, 0));
          this.ui = factoryComponent(Ui3D, this.node, {
            sprite: 'newChunkButton',
            onTap: this.onClick,
            rotation: new Vec3(90, 30, 0)
          });
          this.ui.node.active = false;
        };
        _proto.render = function render() {
          var _getBuildRoute;
          var isActive = Boolean((_getBuildRoute = getBuildRoute()) == null ? void 0 : _getBuildRoute.isChunkMode);
          if (this.ui) {
            this.ui.node.active = isActive;
          }
        };
        return ChunkNewButton;
      }(Observer)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/clamp.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('clamp', clamp);
      cclegacy._RF.push({}, "f988buKiNJE1qnCi1/vomud", "clamp", undefined);
      function clamp(value, _ref) {
        var min = _ref[0],
          max = _ref[1];
        return Math.max(min || -Infinity, Math.min(value, max || Infinity));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cocos.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c58da6R6rFFaoXfd8mCEgxB", "cocos", undefined);
      var ccclass = exports('ccclass', _decorator.ccclass),
        property = exports('property', _decorator.property);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ComponentPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './getAllPropertyDescriptors.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, cclegacy, Node, Enum, CCClass, ccclass, property, getAllPropertyDescriptors;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Enum = module.Enum;
      CCClass = module.CCClass;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      getAllPropertyDescriptors = module.getAllPropertyDescriptors;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e4fa5U7an9KA7cME7ckjsyX", "ComponentPath", undefined);
      var ComponentPath = exports('ComponentPath', (_dec = ccclass('ComponentPath'), _dec2 = property(Node), _dec3 = property({
        type: Enum({}),
        visible: function visible() {
          var visible = Boolean(this.target);
          if (visible) {
            CCClass.Attr.setClassAttr(this, 'component', 'enumList', this.targetComponents);
          }
          return visible;
        }
      }), _dec4 = property({
        type: Enum({}),
        visible: function visible() {
          var visible = Boolean(this.realComponent);
          if (visible) {
            CCClass.Attr.setClassAttr(this, 'property', 'enumList', this.componentProperties);
          }
          return visible;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function ComponentPath() {
          _initializerDefineProperty(this, "target", _descriptor, this);
          _initializerDefineProperty(this, "component", _descriptor2, this);
          _initializerDefineProperty(this, "property", _descriptor3, this);
        }
        var _proto = ComponentPath.prototype;
        _proto.exec = function exec() {
          var component = this.realComponent,
            property = this.property;
          if (component && property in component) {
            return component[property];
          }
          console.error("Cannot find path " + property + " in " + this.component);
          return null;
        };
        _createClass(ComponentPath, [{
          key: "targetComponents",
          get: function get() {
            if (!this.target) {
              return [];
            }
            var components = this.target.components;
            return components.map(function (component) {
              var name = component.constructor.name;
              return {
                name: name,
                value: name
              };
            });
          }
        }, {
          key: "realComponent",
          get: function get() {
            if (this.component) {
              return this.target.getComponent(this.component);
            }
            return null;
          }
        }, {
          key: "componentProperties",
          get: function get() {
            var component = this.realComponent;
            if (!component) {
              return [];
            }
            var properties = getAllPropertyDescriptors(component, 1);
            return Object.entries(properties).filter(function (_ref) {
              var desc = _ref[1];
              return Boolean(desc.get);
            }).map(function (_ref2) {
              var name = _ref2[0];
              return {
                name: name,
                value: name
              };
            });
          }
        }]);
        return ComponentPath;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "component", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "property", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "10036EoNa1Lwafrc7tlAhDY", "consts", undefined);
      var BUILD_PROGRESS_LIMITS = exports('BUILD_PROGRESS_LIMITS', [0, 1]);
      var BUILD_PROGRESS_MAX = exports('BUILD_PROGRESS_MAX', BUILD_PROGRESS_LIMITS[1]);
      var BUILD_PROGRESS_STAGES = exports('BUILD_PROGRESS_STAGES', ['building_stage_A', 'building_stage_B', 'building_stage_C']);
      var BUILDING_ROTATION_INIT = exports('BUILDING_ROTATION_INIT', 30);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39534ODzEpN+oWEEKh7lZ8a", "consts", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts3.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e13cmrjrlHmpINJM/Xz9wg", "consts", undefined);
      var MAX_BIOME_TILE_HEIGHT = exports('MAX_BIOME_TILE_HEIGHT', 2);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts4.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "785e72NMARG0bBTvGVy+hVa", "consts", undefined);
      var LIMITS = exports('LIMITS', [-1, 1]); // zoom and rotation can be from -1 to 1
      var CAMERA_POSITION_OFFSET = exports('CAMERA_POSITION_OFFSET', 15); // difference in position for camera Y/Z
      var CAMERA_ROTATION_OFFSET = exports('CAMERA_ROTATION_OFFSET', 10); // degrees for zoom difference in camera Y rotation

      var TARGET_ROTATE_OFFSET = exports('TARGET_ROTATE_OFFSET', 180); // half the circle, for rotation from -180 to 180

      var MOVE_DIVIDER = exports('MOVE_DIVIDER', 14); // if biger, then faster
      var ZOOM_MOVE_INFLUENCE = exports('ZOOM_MOVE_INFLUENCE', 8); // different zooms levels multiplies speed
      var DOUBLE_TOUCH_TIME = exports('DOUBLE_TOUCH_TIME', 250); // ms to activate double touch type

      var MOVE_SAFEZONE = exports('MOVE_SAFEZONE', 20); // safe zone from farthest chunk

      var IMPULSE_DURATION = exports('IMPULSE_DURATION', 4); // seconds, duration of move implulse animation
      var IMPULSE_STRENGTH = exports('IMPULSE_STRENGTH', 1.5); // we multiply touch impulse by that strength
      var IMPULSE_LENGTH = exports('IMPULSE_LENGTH', 0.05); // delta vector must have such length to activate impulse

      var DEFAULT_NAVIGATE_DURATION = exports('DEFAULT_NAVIGATE_DURATION', 1); // seconds, default navigation time

      var ROTATE_SPEED = exports('ROTATE_SPEED', 8); // the bigger - the slower is rotate

      var FIXED_ROTATE_LIMIT = exports('FIXED_ROTATE_LIMIT', 5); // we convert angles with toFixed()
      var FIXED_POSITION_LIMIT = exports('FIXED_POSITION_LIMIT', 20); // we convert position with toFixed()

      var TAP_MAX_MOVED_TIMES = exports('TAP_MAX_MOVED_TIMES', 50); // if we move faster than this, we will not tap
      var TAP_TIME = exports('TAP_TIME', 100); // if we released touch event fewer than this, we will tap

      var MAX_TOUCH_SIZE = exports('MAX_TOUCH_SIZE', 720); // same as x2 base screen width
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts5.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "85c4e3TW5ZCgb0+LuX8kOC/", "consts", undefined);
      var WORLD_CENTER = exports('WORLD_CENTER', new Vec3(0, 0, 0));
      var WORLD_CENTER_HEIGHT = exports('WORLD_CENTER_HEIGHT', 6);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts6.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a003esrr0tPzI21OkPhQAUo", "consts", undefined);
      var BUTTON_TRANSITION_TIME = exports('BUTTON_TRANSITION_TIME', 0.1);
      var BUTTON_TRANSITION_SCALE = exports('BUTTON_TRANSITION_SCALE', 0.96);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts7.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b406a2+7PdE4qg37dd5HRlQ", "consts", undefined);
      var START_YEAR = exports('START_YEAR', 1554);
      var START_MONTH = exports('START_MONTH', 2);
      var MONTHS = exports('MONTHS', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
      var YEAR_LENGTH = exports('YEAR_LENGTH', MONTHS.length);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts8.ts", ['cc', './hexRadius.ts'], function (exports) {
  var cclegacy, hexRadius;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      hexRadius = module.hexRadius;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c107f9SXpFI6qtMIQrv5Ak4", "consts", undefined);
      var HEX_HEIGHT = exports('HEX_HEIGHT', 1);
      var HEX_RADIUS = exports('HEX_RADIUS', hexRadius(HEX_HEIGHT));
      var HEX_OPTIONS = exports('HEX_OPTIONS', {
        hexHeight: HEX_HEIGHT,
        hexRadius: HEX_RADIUS
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/consts9.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cc396ZoHNFKdZ2jUL1zieeD", "consts", undefined);
      var TILE_HEIGHT_MULTIPLIER = exports('TILE_HEIGHT_MULTIPLIER', 0.2);
      var TILE_SEA_LEVEL = exports('TILE_SEA_LEVEL', 5);
      var TILE_HEIGHT_LIMITS = exports('TILE_HEIGHT_LIMITS', [0, 10]);
      var TILE_BASE_HEIGHT = exports('TILE_BASE_HEIGHT', 1);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/createFactory.ts", ['cc', './isPromise.ts'], function (exports) {
  var cclegacy, isPromise;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      isPromise = module.isPromise;
    }],
    execute: function () {
      exports('createFactory', createFactory);
      cclegacy._RF.push({}, "2cc2eMQTBxEYLCNZE9zGSgU", "createFactory", undefined);
      function createFactory(init) {
        var instance = null;
        return function () {
          if (!instance) {
            var value = init();
            if (isPromise(value)) {
              return Promise.resolve(init()).then(function (v) {
                instance = v;
                return instance;
              });
            }
            instance = value;
          }
          return instance;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/createPrefabNode.ts", ['cc', './EEventName.ts', './addMeshCollider.ts'], function (exports) {
  var cclegacy, instantiate, MeshRenderer, EEventName, addMeshCollider;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
    }, function (module) {
      EEventName = module.EEventName;
    }, function (module) {
      addMeshCollider = module.addMeshCollider;
    }],
    execute: function () {
      exports('createPrefabNode', createPrefabNode);
      cclegacy._RF.push({}, "e75f2p2j6xOJ6yRWmcc/747", "createPrefabNode", undefined);
      function createPrefabNode(prefab, _temp) {
        var _ref = _temp === void 0 ? {} : _temp,
          parent = _ref.parent,
          materials = _ref.materials,
          position = _ref.position,
          scale = _ref.scale,
          rotation = _ref.rotation,
          castShadows = _ref.castShadows,
          receiveShadows = _ref.receiveShadows,
          onTap = _ref.onTap;
        var node = instantiate(prefab);
        var meshes = node.getComponentsInChildren(MeshRenderer);
        if (materials != null && materials.length) {
          materials.forEach(function (material, index) {
            meshes.forEach(function (mesh) {
              return mesh.setSharedMaterial(material, index);
            });
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
          meshes.forEach(function (mesh) {
            mesh.shadowCastingMode = castShadows ? 1 : 0;
            mesh.receiveShadow = receiveShadows ? 1 : 0;
          });
        }
        if (onTap) {
          var colliders = addMeshCollider(node, {
            isTrigger: true
          });
          colliders.forEach(function (collider) {
            collider.node.on(EEventName.Tap, onTap);
          });
        }
        if (parent) {
          parent.addChild(node);
        }
        return node;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CustomBlur.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CustomBlurPass.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RenderTexture, EffectAsset, Material, rendering, postProcess, Vec4, CustomBlurPass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RenderTexture = module.RenderTexture;
      EffectAsset = module.EffectAsset;
      Material = module.Material;
      rendering = module.rendering;
      postProcess = module.postProcess;
      Vec4 = module.Vec4;
    }, function (module) {
      CustomBlurPass = module.CustomBlurPass;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b09c2CC1L5B9ZWbGAmawOR9", "CustomBlur", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var CustomBlur = exports('CustomBlur', (_dec = ccclass('CustomBlur'), _dec2 = menu('PostProcess/CustomBlur'), _dec3 = property(RenderTexture), _dec4 = property(EffectAsset), _dec5 = property(EffectAsset), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_postProcess$PostProc) {
        _inheritsLoose(CustomBlur, _postProcess$PostProc);
        function CustomBlur() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _postProcess$PostProc.call.apply(_postProcess$PostProc, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_effectAsset", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iterations", _descriptor3, _assertThisInitialized(_this));
          _this._material = null;
          _this._blurParams = new Vec4(4.0, 0.0, 0.0, 0.0);
          return _this;
        }
        var _proto = CustomBlur.prototype;
        _proto.updateMaterial = function updateMaterial() {
          if (!this._material) {
            return;
          }
          if (this.mask) {
            this._material.setProperty('maskTexture', this.mask);
          }
          this._material.setProperty('blurParams', this.blurParams);
        };
        _proto.start = function start() {
          if (!this._material) {
            this._material = new Material();
            this._material.initialize({
              effectAsset: this._effectAsset
            });
            this.updateMaterial();
          }
          var builder = rendering.getCustomPipeline('Custom');
          if (builder) {
            builder.insertPass(new CustomBlurPass(CustomBlur), postProcess.BlitScreenPass);
          }
        };
        _createClass(CustomBlur, [{
          key: "effect",
          get: function get() {
            return this._effectAsset;
          },
          set: function set(value) {
            this._effectAsset = value;
            if (!this._effectAsset) {
              var _this$_material;
              (_this$_material = this._material) == null || _this$_material.destroy();
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
        }, {
          key: "blurRadius",
          get: function get() {
            return this._blurParams.x;
          },
          set: function set(value) {
            this._blurParams.x = value;
            this.updateMaterial();
          }
        }, {
          key: "material",
          get: function get() {
            return this._material;
          }
        }, {
          key: "blurParams",
          get: function get() {
            return this._blurParams;
          }
        }]);
        return CustomBlur;
      }(postProcess.PostProcessSetting), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_effectAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "effect"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iterations", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurRadius", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "blurRadius"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CustomBlurPass.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, gfx, postProcess;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      postProcess = module.postProcess;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f275gAnLZBv73Q4pf+fR5w", "CustomBlurPass", undefined);
      var FORMAT = gfx.Format.RGBA8;
      var CustomBlurPass = exports('CustomBlurPass', /*#__PURE__*/function (_postProcess$SettingP) {
        _inheritsLoose(CustomBlurPass, _postProcess$SettingP);
        function CustomBlurPass(settingClass) {
          var _this;
          _this = _postProcess$SettingP.call(this) || this;
          _this.settingClass = void 0;
          _this.name = 'CustomBlurPass';
          _this.outputNames = ['CustomBlurMap'];
          _this.settingClass = settingClass;
          return _this;
        }
        var _proto = CustomBlurPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _postProcess$SettingP.prototype.checkEnable.call(this, camera);
          if (postProcess.disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable && this.setting.material != null;
        };
        _proto.render = function render(camera, _ppl) {
          var setting = this.setting;
          if (!setting.material) {
            return;
          }
          var passContext = this.context;
          passContext.material = setting.material;
          var cameraID = this.getCameraUniqueID(camera);
          passContext.clearBlack();
          var input = this.lastPass.slotName(camera, 0);
          for (var i = 0; i < setting.iterations; ++i) {
            passContext.updatePassViewPort().addRenderPass("blur-x", "blur-x" + cameraID).setPassInput(input, 'outputResultMap').addRasterView('CustomBlurMap_TMP', FORMAT).blitScreen(0).version();
            passContext.updatePassViewPort().addRenderPass("blur-y", "blur-y" + cameraID).setPassInput(input, 'outputResultMap').setPassInput('CustomBlurMap_TMP', 'outputResultMap').addRasterView(this.slotName(camera), FORMAT).blitScreen(1).version();
            input = this.slotName(camera);
          }
        };
        _createClass(CustomBlurPass, [{
          key: "setting",
          get: function get() {
            return this.getSetting(this.settingClass);
          }
        }]);
        return CustomBlurPass;
      }(postProcess.SettingPass));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/degreeToRadian.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('degreeToRadian', degreeToRadian);
      cclegacy._RF.push({}, "f02969jNRhHRoy1w98rtSrb", "degreeToRadian", undefined);
      var HALF_CIRCLE = 180;
      function degreeToRadian(degree) {
        return degree * (Math.PI / HALF_CIRCLE);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiTemplate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Prefab, Component, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "68ce6CcZNBEPJYIEWp7XG3A", "DiTemplate", undefined);
      var DiTemplate = exports('DiTemplate', (_dec = ccclass('DiTemplate'), _dec2 = property([Prefab]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiTemplate, _Component);
        function DiTemplate(name) {
          var _this;
          _this = _Component.call(this, name) || this;
          _initializerDefineProperty(_this, "templates", _descriptor, _assertThisInitialized(_this));
          DiTemplate.instance = _assertThisInitialized(_this);
          return _this;
        }
        var _proto = DiTemplate.prototype;
        _proto.getTemplate = function getTemplate(template) {
          return this.templates.find(function (prefab) {
            return prefab.data.name === template;
          });
        };
        DiTemplate.get = function get(template) {
          if (!DiTemplate.instance) {
            throw new Error('Di template is not initalized!');
          }
          var prefab = DiTemplate.instance.getTemplate(template);
          if (!prefab) {
            throw new Error("Di template " + template + " not found!");
          }
          return prefab;
        };
        return DiTemplate;
      }(Component), _class3.instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "templates", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiWorld.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WorldCamera.ts', './WorldUi.ts', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Component, WorldCamera, WorldUi, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      WorldCamera = module.WorldCamera;
    }, function (module) {
      WorldUi = module.WorldUi;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "a5ddcbI8SVC9YwxjAzAIv37", "DiWorld", undefined);
      var DI_MAP_DATA = [[WorldCamera, 'worldCamera'], [WorldUi, 'worldUi']];
      var DI_MAP = new Map(DI_MAP_DATA);
      var DiWorld = exports('DiWorld', (_dec = ccclass('DiWorld'), _dec2 = property(WorldCamera), _dec3 = property(WorldUi), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiWorld, _Component);
        function DiWorld(name) {
          var _this;
          _this = _Component.call(this, name) || this;
          _initializerDefineProperty(_this, "worldCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "worldUi", _descriptor2, _assertThisInitialized(_this));
          DiWorld.instance = _assertThisInitialized(_this);
          return _this;
        }
        DiWorld.get = function get(Comp) {
          if (!DiWorld.instance) {
            throw new Error('Di is not initalized!');
          }
          var key = DI_MAP.get(Comp);
          if (!key) {
            throw new Error("Di key " + key + " do not exist!");
          }
          return DiWorld.instance[key];
        };
        _createClass(DiWorld, null, [{
          key: "worldCamera",
          get: function get() {
            return DiWorld.get(WorldCamera);
          }
        }, {
          key: "worldUi",
          get: function get() {
            return DiWorld.get(WorldUi);
          }
        }]);
        return DiWorld;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "worldCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "worldUi", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/easeOutSine.ts", ['cc', './clamp.ts'], function (exports) {
  var cclegacy, clamp;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      clamp = module.clamp;
    }],
    execute: function () {
      exports('easeOutSine', easeOutSine);
      cclegacy._RF.push({}, "d9db3BLvVJEwr+59bqTRyPL", "easeOutSine", undefined);
      var LIMTIS = [0, 1];
      function easeOutSine(x) {
        return Math.sin(clamp(x, LIMTIS) * Math.PI / 2);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EBiome.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64f35h4gaZPwIvDdQDX2zrM", "EBiome", undefined);
      var EBiomeObject = exports('EBiomeObject', /*#__PURE__*/function (EBiomeObject) {
        EBiomeObject["Forest"] = "forest";
        EBiomeObject["ForestRocks"] = "forest-rocks";
        EBiomeObject["Mountain"] = "mountain";
        EBiomeObject["Rocks"] = "rocks";
        EBiomeObject["Hill"] = "hill";
        return EBiomeObject;
      }({}));
      var EBiomeTile = exports('EBiomeTile', /*#__PURE__*/function (EBiomeTile) {
        EBiomeTile["Clay"] = "clay";
        EBiomeTile["Sand"] = "sand";
        EBiomeTile["Sea"] = "sea";
        EBiomeTile["River"] = "river";
        EBiomeTile["Lake"] = "lake";
        return EBiomeTile;
      }({}));
      var BIOME_OBJECT_KEYS = exports('BIOME_OBJECT_KEYS', Object.values(EBiomeObject));
      var BIOME_TILE_KEYS = exports('BIOME_TILE_KEYS', Object.values(EBiomeTile));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EBiomeSize.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b472+n1UBMhJyOdXD6/ZWW", "EBiomeSize", undefined);
      var EBiomeSize = exports('EBiomeSize', /*#__PURE__*/function (EBiomeSize) {
        EBiomeSize["Tiny"] = "tiny";
        EBiomeSize["Small"] = "small";
        EBiomeSize["Medium"] = "medium";
        EBiomeSize["Large"] = "large";
        return EBiomeSize;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EBuilding.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0eb53LI60pIrL0uwCfhZFgW", "EBuilding", undefined);
      var EBuilding = exports('EBuilding', /*#__PURE__*/function (EBuilding) {
        EBuilding["Lumberjack"] = "lumberjack";
        EBuilding["Sawmill"] = "sawmill";
        EBuilding["Quarry"] = "quarry";
        EBuilding["Castle"] = "castle";
        return EBuilding;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EButtonSize.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "69cc7G2DHFDjKJvL83KxwDc", "EButtonSize", undefined);
      var EButtonSize = exports('EButtonSize', /*#__PURE__*/function (EButtonSize) {
        EButtonSize[EButtonSize["S80"] = 80] = "S80";
        EButtonSize[EButtonSize["S100"] = 100] = "S100";
        return EButtonSize;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EEventName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8b0a3wQ5wNNjqGxjmtjnoMg", "EEventName", undefined);
      var EEventName = exports('EEventName', /*#__PURE__*/function (EEventName) {
        EEventName["Tap"] = "tap";
        return EEventName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ELayer.ts", ['cc'], function (exports) {
  var cclegacy, Layers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Layers = module.Layers;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a737aa/zWlNS7IsrP3vt8dk", "ELayer", undefined);
      var ELayer = exports('ELayer', Layers.Enum);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EMoveType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d4d8PNb4xERYvJKhdGsH8N", "EMoveType", undefined);
      var EMoveType = exports('EMoveType', /*#__PURE__*/function (EMoveType) {
        EMoveType[EMoveType["Default"] = 1] = "Default";
        EMoveType[EMoveType["TwoFinger"] = 2] = "TwoFinger";
        EMoveType[EMoveType["DoubleTouch"] = 3] = "DoubleTouch";
        EMoveType[EMoveType["Impulse"] = 4] = "Impulse";
        EMoveType[EMoveType["Rotate"] = 5] = "Rotate";
        EMoveType[EMoveType["Navigate"] = 6] = "Navigate";
        return EMoveType;
      }({})); // camera navigation
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EResource.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c0f1GYJUVFLZvz9HMolzGW", "EResource", undefined);
      var EResource = exports('EResource', /*#__PURE__*/function (EResource) {
        EResource["Log"] = "log";
        EResource["Plank"] = "plank";
        EResource["Stone"] = "stone";
        return EResource;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ERouteName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b10247WjhxCkLaqZBAP0zO8", "ERouteName", undefined);
      var ERouteName = exports('ERouteName', /*#__PURE__*/function (ERouteName) {
        ERouteName["Pause"] = "pause";
        ERouteName["World"] = "world";
        ERouteName["Build"] = "build";
        ERouteName["Resources"] = "resources";
        return ERouteName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EWorldRouteMode.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6fd2cXZwqFPz53OnOWXb3Lj", "EWorldRouteMode", undefined);
      var EWorldRouteMode = exports('EWorldRouteMode', /*#__PURE__*/function (EWorldRouteMode) {
        EWorldRouteMode["Add"] = "add";
        EWorldRouteMode["Build"] = "build";
        EWorldRouteMode["View"] = "view";
        return EWorldRouteMode;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/factoryChildNode.ts", ['cc'], function (exports) {
  var cclegacy, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }],
    execute: function () {
      exports('factoryChildNode', factoryChildNode);
      cclegacy._RF.push({}, "3d597WkGhhL94YQOldEkEU9", "factoryChildNode", undefined);
      function factoryChildNode(parent, setup) {
        var node = new Node();
        node.layer = parent.layer;
        setup == null || setup(node);
        parent.addChild(node);
        return node;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/factoryComponent.ts", ['cc'], function (exports) {
  var cclegacy, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }],
    execute: function () {
      exports('factoryComponent', factoryComponent);
      cclegacy._RF.push({}, "87c84EFuo9EqI/YhkUTbIwF", "factoryComponent", undefined);
      function factoryComponent(Comp, parent, props) {
        var node = new Node();
        node.layer = parent.layer;
        var component = node.addComponent(Comp);
        component.initialize == null || component.initialize(props);
        parent.addChild(node);
        return component;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/factorySprite.ts", ['cc'], function (exports) {
  var cclegacy, Color, Sprite;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Sprite = module.Sprite;
    }],
    execute: function () {
      exports('factorySprite', factorySprite);
      cclegacy._RF.push({}, "792fbO8DWJLRK83jwagdKKQ", "factorySprite", undefined);
      function factorySprite(node, spriteFrame, color) {
        if (color === void 0) {
          color = Color.WHITE;
        }
        var component = node.addComponent(Sprite);
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
    }
  };
});

System.register("chunks:///_virtual/factoryTemplateComponent.ts", ['cc', './DiTemplate.ts'], function (exports) {
  var cclegacy, instantiate, DiTemplate;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      DiTemplate = module.DiTemplate;
    }],
    execute: function () {
      exports('factoryTemplateComponent', factoryTemplateComponent);
      cclegacy._RF.push({}, "868ee6fiMdO+qwIWQTPAXVO", "factoryTemplateComponent", undefined);
      function factoryTemplateComponent(Comp, parent, props) {
        var template = DiTemplate.get(Comp.template);
        var node = instantiate(template);
        var component = node.getComponent(Comp);
        if (!component) {
          throw new Error("Cannot find " + component + " in template " + Comp.template + "!");
        }
        if (props) {
          component.initialize == null || component.initialize(props);
        }
        node.layer = parent.layer;
        parent.addChild(node);
        return component;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/filterNullable.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('filterNullable', filterNullable);
      cclegacy._RF.push({}, "e97e3d6UHpKhI4AV89XN5LD", "filterNullable", undefined);
      function filterNullable(arr) {
        return arr.filter(function (item) {
          return Boolean(item) || item === 0;
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/findBiomeNeighbors.ts", ['cc', './biomeSizeMaps.ts', './EBiome.ts', './getBiomeActualSize.ts'], function (exports) {
  var cclegacy, biomeSizeMaps, BIOME_OBJECT_KEYS, getBiomeActualSize;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      biomeSizeMaps = module.biomeSizeMaps;
    }, function (module) {
      BIOME_OBJECT_KEYS = module.BIOME_OBJECT_KEYS;
    }, function (module) {
      getBiomeActualSize = module.getBiomeActualSize;
    }],
    execute: function () {
      exports('findBiomeNeighbors', findBiomeNeighbors);
      cclegacy._RF.push({}, "938d6xiAHxCKrcSP4n+xKTh", "findBiomeNeighbors", undefined);
      function findBiomeNeighbors(biomeKey, _ref) {
        var neighbors = _ref.neighbors;
        var sizeMap = biomeSizeMaps[biomeKey];
        var isObject = BIOME_OBJECT_KEYS.includes(biomeKey);
        var biomeNeighbors = neighbors.reduce(function (result, tile) {
          var biome = isObject ? tile.biomeObject : tile.biomeTile;
          if ((biome == null ? void 0 : biome.key) === biomeKey) {
            var _getBiomeActualSize = getBiomeActualSize(tile.coords, biome.id, biomeKey, neighbors),
              size = _getBiomeActualSize.size,
              bordersSize = _getBiomeActualSize.bordersSize;
            result.push({
              biome: biome,
              size: size,
              bordersSize: bordersSize,
              diff: ((sizeMap == null ? void 0 : sizeMap[biome.size]) || 0) - size,
              tile: tile
            });
          }
          return result;
        }, []);
        return biomeNeighbors.sort(function (a, b) {
          return b.diff - a.diff;
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/findMinHeight.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('findMinHeight', findMinHeight);
      cclegacy._RF.push({}, "85e1ciGQ01C/6h8hmeW/E+i", "findMinHeight", undefined);
      function findMinHeight(tiles) {
        return (tiles || []).reduce(function (result, tile) {
          if (!result || tile.height < result) {
            return tile.height;
          }
          return result;
        }, null);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/findWaterNeighbors.ts", ['cc', './waterTiles.ts', './findBiomeNeighbors.ts'], function (exports) {
  var cclegacy, waterTiles, findBiomeNeighbors;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      waterTiles = module.waterTiles;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }],
    execute: function () {
      exports('findWaterNeighbors', findWaterNeighbors);
      cclegacy._RF.push({}, "18207bYyGhBHJM3JUYNwX3s", "findWaterNeighbors", undefined);
      function findWaterNeighbors(options) {
        return waterTiles.reduce(function (result, biome) {
          return [].concat(result, findBiomeNeighbors(biome, options));
        }, []);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fromQuat.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      exports('fromQuat', fromQuat);
      cclegacy._RF.push({}, "35ec4HUPW5H0InlL9DprArB", "fromQuat", undefined);
      function fromQuat(quat) {
        return quat.getEulerAngles(new Vec3());
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fromVec3.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('fromVec3', fromVec3);
      cclegacy._RF.push({}, "a6a7dFbW/VMrooS/vvXmGAQ", "fromVec3", undefined);
      function fromVec3(vec) {
        return {
          x: vec.x,
          y: vec.y,
          z: vec.z
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fromVec3ToVec2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('fromVec3ToVec2', fromVec3ToVec2);
      cclegacy._RF.push({}, "0fe24ULx/dKhKUgpQM7OPD9", "fromVec3ToVec2", undefined);
      function fromVec3ToVec2(vec) {
        return {
          x: vec.x,
          y: vec.z
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameState.ts", ['cc', './ResourcesState.ts', './TurnState.ts', './WorldState.ts'], function (exports) {
  var cclegacy, ResourcesState, TurnState, WorldState;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ResourcesState = module.ResourcesState;
    }, function (module) {
      TurnState = module.TurnState;
    }, function (module) {
      WorldState = module.WorldState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05109Z3qOVPN7Vx0/iiR53n", "GameState", undefined);
      var GameState = exports('GameState', /*#__PURE__*/function () {
        function GameState(_ref) {
          var turnState = _ref.turnState,
            worldState = _ref.worldState,
            resourcesState = _ref.resourcesState;
          this.turnState = void 0;
          this.worldState = void 0;
          this.resourcesState = void 0;
          this.turnState = new TurnState(this).initialize(turnState);
          this.worldState = new WorldState(this).initialize(worldState);
          this.resourcesState = new ResourcesState(this).initialize(resourcesState);
        }
        var _proto = GameState.prototype;
        _proto.destroy = function destroy() {
          this.turnState.destroy();
          this.worldState.destroy();
          this.resourcesState.destroy();
        };
        _proto.serialize = function serialize() {
          return {
            turnState: this.turnState.serialize(),
            worldState: this.worldState.serialize(),
            resourcesState: this.resourcesState.serialize()
          };
        };
        return GameState;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateBiomeObject.ts", ['cc', './EBiome.ts', './generateForest.ts', './generateForestRocks.ts', './generateHill.ts', './generateMountain.ts', './generateRocks.ts'], function (exports) {
  var cclegacy, EBiomeTile, generateForest, generateForestRocks, generateHill, generateMountain, generateRocks;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      generateForest = module.generateForest;
    }, function (module) {
      generateForestRocks = module.generateForestRocks;
    }, function (module) {
      generateHill = module.generateHill;
    }, function (module) {
      generateMountain = module.generateMountain;
    }, function (module) {
      generateRocks = module.generateRocks;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d9e1CukQ1Cp6TyiLqwjiVh", "generateBiomeObject", undefined);
      var generateBiomeObject = exports('generateBiomeObject', function generateBiomeObject(base, options) {
        var result = base;
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
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateBiomeTile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './waterTiles.ts', './consts9.ts', './generateClay.ts', './generateLake.ts', './generateRiver.ts', './generateSand.ts', './generateSea.ts', './findMinHeight.ts', './clamp.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, Vec3, EBiomeTile, waterTiles, TILE_HEIGHT_LIMITS, generateClay, generateLake, generateRiver, generateSand, generateSea, findMinHeight, clamp;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      waterTiles = module.waterTiles;
    }, function (module) {
      TILE_HEIGHT_LIMITS = module.TILE_HEIGHT_LIMITS;
    }, function (module) {
      generateClay = module.generateClay;
    }, function (module) {
      generateLake = module.generateLake;
    }, function (module) {
      generateRiver = module.generateRiver;
    }, function (module) {
      generateSand = module.generateSand;
    }, function (module) {
      generateSea = module.generateSea;
    }, function (module) {
      findMinHeight = module.findMinHeight;
    }, function (module) {
      clamp = module.clamp;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d50e4zg9lxErrjttg7HXf8m", "generateBiomeTile", undefined);
      var generateBiomeTile = exports('generateBiomeTile', function generateBiomeTile(base, options) {
        var result = base;
        if (!result.height) {
          return result;
        }
        result = generateSea(result, options);
        if (!result.biomeTile) {
          var _result$biomeTile;
          result = generateRiver(result, options);
          if (((_result$biomeTile = result.biomeTile) == null ? void 0 : _result$biomeTile.key) === EBiomeTile.River) {
            for (var _iterator = _createForOfIteratorHelperLoose(options.chunkTiles || []), _step; !(_step = _iterator()).done;) {
              var tile = _step.value;
              if (!tile.biomeTile || tile.biomeTile.key !== EBiomeTile.River) {
                var _result$biomeTile$dat;
                // If we already generated end or start of rivers
                var target = (_result$biomeTile$dat = result.biomeTile.data) == null ? void 0 : _result$biomeTile$dat.from;
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
          var _result = result,
            height = _result.height;
          var neighbors = options.neighbors,
            chunkTiles = options.chunkTiles;
          var isSea = result.biomeTile.key === EBiomeTile.Sea;
          var minHeight = findMinHeight(neighbors);
          if (minHeight && minHeight < height) {
            // Water biomes cannot have neighboring tiles below, and old "neighbor"@" tiles cannot be changed
            result.biomeTile = undefined;
          } else {
            // Last chance to change what we've generated before this water tile – we can lower the height or try generating a dependent biome again
            for (var _iterator2 = _createForOfIteratorHelperLoose(chunkTiles || []), _step2; !(_step2 = _iterator2()).done;) {
              var _tile = _step2.value;
              if (_tile.height < height) {
                _tile.height = height;
              }
              if (isSea && !_tile.biomeTile && !_tile.biomeObject) {
                var _generateSand = generateSand(_tile, {
                    neighbors: [result]
                  }),
                  biomeTile = _generateSand.biomeTile;
                _tile.biomeTile = biomeTile;
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
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateChunk.ts", ['cc', './EBiome.ts', './generateTile.ts', './sortCoords.ts', './HexagonChunk.ts', './HexagonTile.ts', './consts8.ts', './state.ts'], function (exports) {
  var cclegacy, Vec3, EBiomeTile, generateTile, sortCoords, HexagonChunk, HexagonTile, HEX_OPTIONS, state;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      generateTile = module.generateTile;
    }, function (module) {
      sortCoords = module.sortCoords;
    }, function (module) {
      HexagonChunk = module.HexagonChunk;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      exports('generateChunk', generateChunk);
      var _BIOME_PRIORITY;
      cclegacy._RF.push({}, "17433x+A2JNQ7ZXBmzhlpJB", "generateChunk", undefined);
      var BIOME_PRIORITY = (_BIOME_PRIORITY = {}, _BIOME_PRIORITY[EBiomeTile.River] = 1, _BIOME_PRIORITY);
      function calcNeighborsScore(item) {
        var tilesMap = state.worldState.tilesMap;
        var neighbors = item.neighbors.map(function (coords) {
          return tilesMap.get(coords);
        }).filter(Boolean);
        return neighbors.reduce(function (result, neighbor) {
          var _neighbor$self$data;
          var biomeKey = neighbor == null || (_neighbor$self$data = neighbor.self.data) == null || (_neighbor$self$data = _neighbor$self$data.biomeTile) == null ? void 0 : _neighbor$self$data.key;
          var score = biomeKey && BIOME_PRIORITY[biomeKey] || 0;
          return result + score;
        }, 0);
      }
      function generateChunk(center) {
        var chunk = new HexagonChunk(null, center, HEX_OPTIONS);
        var tiles = [];
        var sortedCoords = sortCoords(chunk.tiles);
        sortedCoords.map(function (tileCoords) {
          return new HexagonTile(null, tileCoords, HEX_OPTIONS);
        }).sort(function (a, b) {
          return calcNeighborsScore(b) - calcNeighborsScore(a);
        }).forEach(function (fakeTile) {
          var neighbors = [fakeTile.coords].concat(fakeTile.neighbors).reduce(function (result, nearCoords) {
            var tilesMap = state.worldState.tilesMap;
            var tile = tilesMap.get(nearCoords);
            if (tile) {
              result.push(tile.self.data);
            } else {
              var alreadyAdded = tiles.find(function (_ref) {
                var coords = _ref.coords;
                return Vec3.equals(nearCoords, coords);
              });
              if (alreadyAdded) {
                result.push(alreadyAdded);
              }
            }
            return result;
          }, []);
          tiles.push(generateTile(fakeTile.coords, {
            neighbors: neighbors,
            chunkTiles: tiles
          }));
        });
        return {
          coords: center,
          tiles: tiles
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateClay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './consts9.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './isNearCenter.ts', './guid.ts', './isRandomChance.ts'], function (exports) {
  var _extends, cclegacy, EBiomeTile, TILE_SEA_LEVEL, findBiomeNeighbors, randomizeBiomeSize, isNearWorldCenter, guid, isRandomChance;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      isNearWorldCenter = module.isNearWorldCenter;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4c2a3fWrVOMoM2CkLm4jc9", "generateClay", undefined);
      var generateClay = exports('generateClay', function generateClay(base, options) {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        var clays = findBiomeNeighbors(EBiomeTile.Clay, options);
        if (clays.some(function (clay) {
          return clay.diff <= 0;
        })) {
          return base;
        }
        var clay = clays[0];
        var heightDiff = TILE_SEA_LEVEL - base.height;
        if (heightDiff < 0) {
          return base;
        }
        var chance = 0.02 * heightDiff;
        if ((clay == null ? void 0 : clay.size) === 1) {
          chance = 1;
        } else if (clays.length && clays.length !== 1) {
          chance = 0.3 * clays.length;
        } else if (clay) {
          chance += 0.01 * (clay.diff || 0);
        }
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeTile: {
            id: (clay == null ? void 0 : clay.biome.id) || guid(),
            key: EBiomeTile.Clay,
            size: (clay == null ? void 0 : clay.biome.size) || randomizeBiomeSize([0.15, 0.5, 0.3, 0.05])
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateForest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './guid.ts', './isRandomChance.ts', './randomFromRange.ts'], function (exports) {
  var _extends, cclegacy, EBiomeObject, findBiomeNeighbors, randomizeBiomeSize, guid, isRandomChance, randomFromRange;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromRange = module.randomFromRange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b0d4MwN6BH7aC/unRbp7PG", "generateForest", undefined);
      var generateForest = exports('generateForest', function generateForest(base, options) {
        var forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        if (forests.some(function (forest) {
          return forest.diff <= 0;
        })) {
          return base;
        }
        var forest = forests[0];
        var diff = (forest == null ? void 0 : forest.diff) || 0;
        var chance = 0.1 + 0.2 * diff;
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeObject: {
            id: (forest == null ? void 0 : forest.biome.id) || guid(),
            key: EBiomeObject.Forest,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: (forest == null ? void 0 : forest.biome.size) || randomizeBiomeSize([0.1, 0.5, 0.35, 0.05])
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateForestRocks.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './guid.ts', './isRandomChance.ts', './randomFromRange.ts'], function (exports) {
  var _extends, cclegacy, EBiomeObject, findBiomeNeighbors, randomizeBiomeSize, guid, isRandomChance, randomFromRange;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromRange = module.randomFromRange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "851b5Z3euBMRrYmOWFVETLE", "generateForestRocks", undefined);
      var generateForestRocks = exports('generateForestRocks', function generateForestRocks(base, options) {
        var _forestRocks$;
        var forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        var forestRocks = findBiomeNeighbors(EBiomeObject.ForestRocks, options);
        if (forestRocks.some(function (forestRock) {
          return forestRock.diff <= 0;
        })) {
          return base;
        }
        var chance = 0.05 + 0.1 * forests.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeObject: {
            id: ((_forestRocks$ = forestRocks[0]) == null ? void 0 : _forestRocks$.biome.id) || guid(),
            key: EBiomeObject.ForestRocks,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.8, 1.2], 1),
            size: randomizeBiomeSize([0.5, 0.5])
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateHill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './EBiomeSize.ts', './consts9.ts', './findBiomeNeighbors.ts', './guid.ts', './isRandomChance.ts', './randomFromRange.ts'], function (exports) {
  var _extends, cclegacy, EBiomeObject, EBiomeSize, TILE_SEA_LEVEL, findBiomeNeighbors, guid, isRandomChance, randomFromRange;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      EBiomeSize = module.EBiomeSize;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromRange = module.randomFromRange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49d2ftw2cZHh4RRd+JcOIiA", "generateHill", undefined);
      var generateHill = exports('generateHill', function generateHill(base, options) {
        if (base.height < TILE_SEA_LEVEL) {
          return base;
        }
        var forests = findBiomeNeighbors(EBiomeObject.Forest, options);
        var hills = findBiomeNeighbors(EBiomeObject.Hill, options);
        if (hills.some(function (hill) {
          return hill.diff <= 0;
        })) {
          return base;
        }
        var chance = 0.01 + 0.03 * forests.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeObject: {
            id: guid(),
            key: EBiomeObject.Hill,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: EBiomeSize.Tiny
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateLake.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './consts9.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './isNearCenter.ts', './findMinHeight.ts', './guid.ts', './isRandomChance.ts'], function (exports) {
  var _extends, cclegacy, EBiomeTile, TILE_HEIGHT_LIMITS, TILE_SEA_LEVEL, findBiomeNeighbors, randomizeBiomeSize, isNearWorldCenter, findMinHeight, guid, isRandomChance;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      TILE_HEIGHT_LIMITS = module.TILE_HEIGHT_LIMITS;
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      isNearWorldCenter = module.isNearWorldCenter;
    }, function (module) {
      findMinHeight = module.findMinHeight;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d7d3QDX6JCxKxp5T2Pu9Wn", "generateLake", undefined);
      var generateNewLake = exports('generateNewLake', function generateNewLake(base, options) {
        return _extends({}, base, {
          height: findMinHeight(options.neighbors) || base.height,
          biomeTile: {
            id: guid(),
            key: EBiomeTile.Lake,
            size: randomizeBiomeSize([0.2, 0.5, 0.2, 0.1])
          }
        });
      });
      var generateLake = exports('generateLake', function generateLake(base, options) {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        var seas = findBiomeNeighbors(EBiomeTile.Sea, options);
        if (seas.length) {
          return base;
        }
        var lakes = findBiomeNeighbors(EBiomeTile.Lake, options);
        if (lakes.some(function (lake) {
          return lake.diff <= 0;
        })) {
          return base;
        }
        var lake = lakes[0];
        var heightDiff = TILE_HEIGHT_LIMITS[1] / 2 - Math.abs(base.height - TILE_SEA_LEVEL);
        var chance = heightDiff * 0.001;
        if ((lake == null ? void 0 : lake.size) === 1) {
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
          return _extends({}, base, {
            height: lake.tile.height,
            biomeTile: {
              id: lake.biome.id,
              key: EBiomeTile.Lake,
              size: lake.biome.size
            }
          });
        }
        return generateNewLake(base, options);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateMountain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './consts9.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './isNearCenter.ts', './guid.ts', './isRandomChance.ts', './randomFromRange.ts'], function (exports) {
  var _extends, cclegacy, EBiomeObject, TILE_SEA_LEVEL, findBiomeNeighbors, randomizeBiomeSize, isNearWorldCenter, guid, isRandomChance, randomFromRange;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      isNearWorldCenter = module.isNearWorldCenter;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromRange = module.randomFromRange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8dde6+kFJpES5xyjV7vWZ5c", "generateMountain", undefined);
      var generateNewMountain = exports('generateNewMountain', function generateNewMountain(base) {
        return _extends({}, base, {
          biomeObject: {
            id: guid(),
            key: EBiomeObject.Mountain,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([1, 2], 1),
            size: randomizeBiomeSize([0.6, 0.25, 0.2, 0.05])
          }
        });
      });
      var generateMountain = exports('generateMountain', function generateMountain(base, options) {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        var mountains = findBiomeNeighbors(EBiomeObject.Mountain, options);
        if (mountains.some(function (mountain) {
          return mountain.diff <= 0;
        })) {
          return base;
        }
        var mountain = mountains[0];
        var diff = (mountain == null ? void 0 : mountain.diff) || 0;
        var height = base.height - TILE_SEA_LEVEL;
        var chance = 0.015 * height + 0.2 * diff;
        if (!isRandomChance(chance)) {
          return base;
        }
        base = generateMountain(base, options);
        if (mountain && base.biomeObject) {
          base.biomeObject.size = mountain.biome.size;
          base.biomeObject.id = mountain.biome.id;
        }
        return base;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateRiver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './consts9.ts', './findBiomeNeighbors.ts', './findWaterNeighbors.ts', './generateLake.ts', './generateMountain.ts', './generateSea.ts', './randomizeBiomeSize.ts', './isNearCenter.ts', './findMinHeight.ts', './guid.ts', './HexagonTile.ts', './clamp.ts', './toVec3.ts', './isRandomChance.ts', './randomFromArray.ts', './consts8.ts'], function (exports) {
  var _extends, cclegacy, Vec3, EBiomeTile, TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS, findBiomeNeighbors, findWaterNeighbors, generateNewLake, generateNewMountain, generateSea, randomizeBiomeSize, isNearWorldCenter, findMinHeight, guid, HexagonTile, clamp, toVec3, isRandomChance, randomFromArray, HEX_OPTIONS;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
      TILE_HEIGHT_LIMITS = module.TILE_HEIGHT_LIMITS;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      findWaterNeighbors = module.findWaterNeighbors;
    }, function (module) {
      generateNewLake = module.generateNewLake;
    }, function (module) {
      generateNewMountain = module.generateNewMountain;
    }, function (module) {
      generateSea = module.generateSea;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      isNearWorldCenter = module.isNearWorldCenter;
    }, function (module) {
      findMinHeight = module.findMinHeight;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromArray = module.randomFromArray;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eea01XqEmpDgpCpMntAOWV1", "generateRiver", undefined);
      function randomizeRiverSize() {
        return randomizeBiomeSize([0.2, 0.5, 0.2, 0.1]);
      }
      function randomizeRiverHeight(river, diff) {
        var _river$biome$data;
        var height = river.tile.height;
        if (((_river$biome$data = river.biome.data) == null || (_river$biome$data = _river$biome$data.to) == null ? void 0 : _river$biome$data.length) > 1) {
          return height;
        }
        if (isRandomChance(0.1)) {
          return clamp(height + diff, [TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS[1] - 1]);
        }
        return height;
      }
      function randomizeFrom(neighbors, options) {
        var candidates = neighbors.filter(function (neighbor) {
          if (options.neighbors.some(function (_ref) {
            var coords = _ref.coords;
            return Vec3.equals(neighbor, coords);
          })) {
            return false;
          }
          return true;
        });
        if (!candidates.length) {
          return null;
        }
        var from = randomFromArray(candidates);
        return from;
      }
      function randomizeTo(baseCoords, from, neighbors, options) {
        neighbors = neighbors.filter(function (neighbor) {
          if (Vec3.equals(neighbor, from)) {
            return false;
          }
          if (options.neighbors.some(function (_ref2) {
            var coords = _ref2.coords;
            return Vec3.equals(neighbor, coords);
          })) {
            return false;
          }
          return true;
        });
        var toLength = isRandomChance(0.04) ? 2 : 1;
        var to = [];

        // straight
        var straight = toVec3(from).subtract3f(baseCoords.x, baseCoords.y, baseCoords.z).negative().add3f(baseCoords.x, baseCoords.y, baseCoords.z);
        neighbors = neighbors.filter(function (neighbor) {
          if (Vec3.distance(straight, neighbor) < 2) {
            return true;
          }
          return false;
        });
        if (isRandomChance(0.6)) {
          var straightNeigbor = neighbors.find(function (neighbor) {
            return Vec3.equals(straight, neighbor);
          });
          if (straightNeigbor) {
            neighbors = neighbors.filter(function (neighbor) {
              return !Vec3.equals(straightNeigbor, neighbor);
            });
            to.push(straightNeigbor);
          }
        }
        var _loop = function _loop() {
          if (neighbors.length) {
            var coords = randomFromArray(neighbors);
            neighbors = neighbors.filter(function (neighbor) {
              return !Vec3.equals(coords, neighbor);
            });
            to.push(coords);
          }
        };
        for (var i = to.length; i < toLength; i++) {
          _loop();
        }
        return to;
      }
      var generateRiver = exports('generateRiver', function generateRiver(base, options) {
        var neighbors = options.neighbors;
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        var hex = new HexagonTile(null, toVec3(base.coords), HEX_OPTIONS);
        var rivers = findBiomeNeighbors(EBiomeTile.River, options);
        var waters = findWaterNeighbors(options);
        var water = waters.length ? waters[0] : null;
        if (!rivers.length) {
          var chance = 0.03 + 0.005 * waters.length;
          if (!isRandomChance(chance)) {
            return base;
          }
          var height = (water == null ? void 0 : water.tile.height) || findMinHeight(neighbors) || base.height;
          if (height < TILE_SEA_LEVEL || height === TILE_HEIGHT_LIMITS[1]) {
            return base;
          }
          var from = (water == null ? void 0 : water.tile.coords) || randomizeFrom(hex.neighbors, options);
          if (!from) {
            return base;
          }
          var to = randomizeTo(base.coords, from, hex.neighbors, options);
          if (to.every(function (toCoords) {
            return neighbors.some(function (neighbor) {
              return Vec3.equals(toCoords, neighbor.coords);
            });
          })) {
            return base;
          }
          return _extends({}, base, {
            height: height,
            biomeTile: {
              id: guid(),
              key: EBiomeTile.River,
              size: randomizeRiverSize(),
              data: {
                from: from,
                to: to
              }
            }
          });
        }
        var coords = toVec3(base.coords);
        var riverTo = rivers.find(function (river) {
          var _river$biome$data2;
          var from = (_river$biome$data2 = river.biome.data) == null ? void 0 : _river$biome$data2.from;
          return from && Vec3.equals(coords, from);
        });
        if (riverTo) {
          var isEnding = riverTo.diff < 0;
          var _height = randomizeRiverHeight(riverTo, 1);
          if (isEnding) {
            if (_height > TILE_SEA_LEVEL && isRandomChance(0.5)) {
              base.height = _height;
              return generateNewMountain(base);
            }
            if (isRandomChance(0.3)) {
              base.height = _height;
              return generateNewLake(base, options);
            }
            base.height = clamp(riverTo.tile.height + 1, [TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS[1] - 1]);
            return base;
          }
          return _extends({}, base, {
            height: _height,
            biomeTile: {
              id: riverTo.biome.id,
              key: EBiomeTile.River,
              size: riverTo.biome.size,
              data: {
                from: (water == null ? void 0 : water.tile.coords) || randomizeFrom(hex.neighbors, options),
                to: [riverTo.tile.coords]
              }
            }
          });
        }
        var riverFrom = rivers.find(function (river) {
          var _river$biome$data3;
          var to = (_river$biome$data3 = river.biome.data) == null ? void 0 : _river$biome$data3.to;
          return to && to.some(function (toCoords) {
            return Vec3.equals(coords, toCoords);
          });
        });
        if (riverFrom) {
          var _riverFrom$biome$data;
          var _isEnding = riverFrom.diff < 0;
          var _height2 = randomizeRiverHeight(riverFrom, -1);
          if (_isEnding) {
            if (_height2 === TILE_SEA_LEVEL) {
              base.height = _height2;
              base = generateSea(base, options);
              if (base.biomeTile) {
                return base;
              }
            }
            var minHeight = findMinHeight(options.neighbors);
            if (!minHeight || minHeight < _height2 && isRandomChance(0.5)) {
              base.height = _height2;
              return generateNewLake(base, options);
            }
          }
          var _to = [];
          if (!_isEnding) {
            if (waters.length) {
              _to = randomizeTo(base.coords, riverFrom.tile.coords, waters.map(function (_ref3) {
                var tile = _ref3.tile;
                return tile.coords;
              }), options);
            }
            if (!_to.length) {
              _to = randomizeTo(base.coords, riverFrom.tile.coords, hex.neighbors, options);
            }
          }
          var riverFromToIndex = (_riverFrom$biome$data = riverFrom.biome.data) == null || (_riverFrom$biome$data = _riverFrom$biome$data.to) == null ? void 0 : _riverFrom$biome$data.findIndex(function (toCoords) {
            return Vec3.equals(coords, toCoords);
          });
          return _extends({}, base, {
            height: _height2,
            biomeTile: {
              id: !riverFromToIndex ? riverFrom.biome.id : guid(),
              key: EBiomeTile.River,
              size: !riverFromToIndex ? riverFrom.biome.size : randomizeRiverSize(),
              data: _extends({
                from: riverFrom.tile.coords,
                to: _to
              }, !riverFromToIndex ? {} : {
                fromId: riverFrom.biome.id
              })
            }
          });
        }
        return base;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateRocks.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './findBiomeNeighbors.ts', './randomizeBiomeSize.ts', './guid.ts', './isRandomChance.ts', './randomFromRange.ts'], function (exports) {
  var _extends, cclegacy, EBiomeObject, EBiomeTile, findBiomeNeighbors, randomizeBiomeSize, guid, isRandomChance, randomFromRange;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeObject = module.EBiomeObject;
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      randomFromRange = module.randomFromRange;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93a7570HAJHZLDET6FqNzWb", "generateRocks", undefined);
      var generateRocks = exports('generateRocks', function generateRocks(base, options) {
        var _base$biomeTile;
        var mountains = findBiomeNeighbors(EBiomeObject.Mountain, options);
        var rocks = findBiomeNeighbors(EBiomeObject.Rocks, options);
        if (rocks.some(function (rock) {
          return rock.diff <= 0;
        })) {
          return base;
        }
        var rock = rocks[0];
        var diff = (rock == null ? void 0 : rock.diff) || 0;
        var chance = ((_base$biomeTile = base.biomeTile) == null ? void 0 : _base$biomeTile.key) === EBiomeTile.Sand ? 0.1 : 0.05 + 0.2 * diff + 0.1 * mountains.length;
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeObject: {
            id: (rock == null ? void 0 : rock.biome.id) || guid(),
            key: EBiomeObject.Rocks,
            rotate: randomFromRange([-180, 180]),
            scale: randomFromRange([0.7, 1.3], 1),
            size: (rock == null ? void 0 : rock.biome.size) || randomizeBiomeSize([0.5, 0.3, 0.15, 0.05]),
            data: isRandomChance(0.3) ? {
              small: true
            } : undefined
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateSand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './consts9.ts', './findBiomeNeighbors.ts', './findWaterNeighbors.ts', './randomizeBiomeSize.ts', './isNearCenter.ts', './guid.ts', './clamp.ts', './isRandomChance.ts'], function (exports) {
  var _extends, cclegacy, EBiomeTile, TILE_SEA_LEVEL, findBiomeNeighbors, findWaterNeighbors, randomizeBiomeSize, isNearWorldCenter, guid, clamp, isRandomChance;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      findWaterNeighbors = module.findWaterNeighbors;
    }, function (module) {
      randomizeBiomeSize = module.randomizeBiomeSize;
    }, function (module) {
      isNearWorldCenter = module.isNearWorldCenter;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f6728mNeH5B/oosXh5Q+Zr1", "generateSand", undefined);
      var generateSand = exports('generateSand', function generateSand(base, options) {
        if (isNearWorldCenter(base.coords)) {
          return base;
        }
        var sands = findBiomeNeighbors(EBiomeTile.Sand, options);
        var waters = findWaterNeighbors(options);
        if (!waters.length && sands.some(function (sand) {
          return sand.diff <= 0;
        })) {
          return base;
        }
        var sand = sands[0];
        var chance = 0.002 + 0.1 * waters.length;
        if (waters.some(function (_ref) {
          var biome = _ref.biome;
          return biome.key === EBiomeTile.Sea;
        })) {
          if (base.height > TILE_SEA_LEVEL) {
            return base;
          }
          chance = 0.9;
        } else if ((sand == null ? void 0 : sand.size) === 1) {
          chance = 1;
        } else if (sands.length && sands.length !== 1) {
          chance = 0.3 * sands.length;
        } else if (sand) {
          chance += 0.01 * clamp(sand.diff || 0, [0, null]);
        }
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          biomeTile: {
            id: (sand == null ? void 0 : sand.biome.id) || guid(),
            key: EBiomeTile.Sand,
            size: (sand == null ? void 0 : sand.biome.size) || randomizeBiomeSize([0.2, 0.5, 0.2, 0.1])
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateSea.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EBiome.ts', './EBiomeSize.ts', './consts9.ts', './consts5.ts', './findBiomeNeighbors.ts', './findMinHeight.ts', './guid.ts', './clamp.ts', './isRandomChance.ts', './state.ts'], function (exports) {
  var _extends, cclegacy, Vec3, EBiomeTile, EBiomeSize, TILE_SEA_LEVEL, WORLD_CENTER, findBiomeNeighbors, findMinHeight, guid, clamp, isRandomChance, state;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      EBiomeSize = module.EBiomeSize;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
    }, function (module) {
      WORLD_CENTER = module.WORLD_CENTER;
    }, function (module) {
      findBiomeNeighbors = module.findBiomeNeighbors;
    }, function (module) {
      findMinHeight = module.findMinHeight;
    }, function (module) {
      guid = module.guid;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      isRandomChance = module.isRandomChance;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48985ketEJEsoXCI5eSW8vM", "generateSea", undefined);
      var MIN_SEA_DISTANCE = 4;
      var generateSea = exports('generateSea', function generateSea(base, options) {
        var neighbors = options.neighbors;
        var distance = Vec3.distance(base.coords, WORLD_CENTER);
        if (distance < MIN_SEA_DISTANCE) {
          return base;
        }
        var minHeight = findMinHeight(neighbors);
        if (minHeight && minHeight < TILE_SEA_LEVEL) {
          return base;
        }
        var lakes = findBiomeNeighbors(EBiomeTile.Lake, options);
        if (lakes.length) {
          return base;
        }
        var seas = findBiomeNeighbors(EBiomeTile.Sea, options);
        var rivers = findBiomeNeighbors(EBiomeTile.River, options);
        if (!seas.length) {
          var tilesMap = state.worldState.tilesMap;
          var hasSea = tilesMap.values.some(function (hex) {
            var _hex$self$data$biomeT;
            return ((_hex$self$data$biomeT = hex.self.data.biomeTile) == null ? void 0 : _hex$self$data$biomeT.key) === EBiomeTile.Sea;
          });
          if (hasSea) {
            return base;
          }
          var riversSize = rivers.reduce(function (result, _ref) {
            var size = _ref.size;
            return result + size;
          }, 0);
          var _chance = 0.0001 * distance + riversSize * 0.0005;
          if (!isRandomChance(_chance)) {
            return base;
          }
          return _extends({}, base, {
            height: TILE_SEA_LEVEL,
            biomeTile: {
              id: guid(),
              key: EBiomeTile.Sea,
              size: EBiomeSize.Large
            }
          });
        }
        var sea = seas[0];
        var chance = seas.length * 0.6 + clamp(sea.diff, [-10, null]) * 0.05 + clamp(20 - sea.bordersSize, [0, null]) * 0.1;
        if (!isRandomChance(chance)) {
          return base;
        }
        return _extends({}, base, {
          height: TILE_SEA_LEVEL,
          biomeTile: {
            id: sea.biome.id,
            key: EBiomeTile.Sea,
            size: EBiomeSize.Large
          }
        });
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateTile.ts", ['cc', './generateBiomeObject.ts', './generateBiomeTile.ts', './generateTileBaseHeight.ts', './generateTileHeight.ts'], function (exports) {
  var cclegacy, generateBiomeObject, generateBiomeTile, generateTileBaseHeight, generateTileHeight;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      generateBiomeObject = module.generateBiomeObject;
    }, function (module) {
      generateBiomeTile = module.generateBiomeTile;
    }, function (module) {
      generateTileBaseHeight = module.generateTileBaseHeight;
    }, function (module) {
      generateTileHeight = module.generateTileHeight;
    }],
    execute: function () {
      exports('generateTile', generateTile);
      cclegacy._RF.push({}, "189072WZf5DV4zq/xUerZr8", "generateTile", undefined);
      function generateTile(coords, options) {
        var height = generateTileHeight(options);
        var baseHeight = generateTileBaseHeight();
        var base = {
          coords: coords,
          height: height,
          baseHeight: baseHeight
        };
        base = generateBiomeTile(base, options);
        base = generateBiomeObject(base, options);
        return base;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateTileBaseHeight.ts", ['cc', './randomFromArray.ts'], function (exports) {
  var cclegacy, randomFromArray;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      randomFromArray = module.randomFromArray;
    }],
    execute: function () {
      exports('generateTileBaseHeight', generateTileBaseHeight);
      cclegacy._RF.push({}, "6632e7TiBBA15EP8BtSWXvY", "generateTileBaseHeight", undefined);
      var BASE_TILE_HEIGHTS = [2, 3, 4, 5];
      function generateTileBaseHeight() {
        return randomFromArray(BASE_TILE_HEIGHTS);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateTileHeight.ts", ['cc', './consts9.ts', './consts5.ts', './findWaterNeighbors.ts', './clamp.ts', './randomChance.ts', './randomFromArray.ts'], function (exports) {
  var cclegacy, Vec3, TILE_SEA_LEVEL, TILE_HEIGHT_LIMITS, WORLD_CENTER, findWaterNeighbors, clamp, randomChance, randomFromArray;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      TILE_SEA_LEVEL = module.TILE_SEA_LEVEL;
      TILE_HEIGHT_LIMITS = module.TILE_HEIGHT_LIMITS;
    }, function (module) {
      WORLD_CENTER = module.WORLD_CENTER;
    }, function (module) {
      findWaterNeighbors = module.findWaterNeighbors;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      randomChance = module.randomChance;
    }, function (module) {
      randomFromArray = module.randomFromArray;
    }],
    execute: function () {
      exports('generateTileHeight', generateTileHeight);
      cclegacy._RF.push({}, "2172e4AgVxGbp7mEMw+k97o", "generateTileHeight", undefined);
      var CHANCES = [{
        name: 'higher',
        chance: function chance(height) {
          var diff = TILE_SEA_LEVEL - height;
          return 0.2 + 0.03 * diff;
        },
        fn: function fn(height) {
          return height + 1;
        }
      }, {
        name: 'lower',
        chance: function chance(height) {
          var diff = height - TILE_SEA_LEVEL;
          return 0.2 + 0.03 * diff;
        },
        fn: function fn(height) {
          return height - 1;
        }
      }, {
        name: 'same',
        chance: function chance() {
          return 1;
        },
        fn: function fn(height) {
          return height;
        }
      }];
      function getMainNeighbor(neighbors) {
        var center = neighbors.find(function (_ref) {
          var coords = _ref.coords;
          return Vec3.equals(WORLD_CENTER, coords);
        });
        if (center) {
          return center;
        }
        return randomFromArray(neighbors);
      }
      function generateTileHeight(options) {
        var _main$height;
        var neighbors = options.neighbors;
        var waters = findWaterNeighbors(options);
        var main = getMainNeighbor(neighbors);
        var height = (_main$height = main == null ? void 0 : main.height) != null ? _main$height : TILE_SEA_LEVEL;
        var fn = randomChance(CHANCES, [height]);
        var resultHeight = clamp(fn(height), TILE_HEIGHT_LIMITS);
        if (waters.length) {
          var waterHeight = waters.reduce(function (result, water) {
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
    }
  };
});

System.register("chunks:///_virtual/generateWorldCenterChunk.ts", ['cc', './generateWorldCenterTile.ts', './generateTile.ts', './HexagonChunk.ts', './consts8.ts'], function (exports) {
  var cclegacy, generateWorldCenterTile, generateTile, HexagonChunk, HEX_OPTIONS;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      generateWorldCenterTile = module.generateWorldCenterTile;
    }, function (module) {
      generateTile = module.generateTile;
    }, function (module) {
      HexagonChunk = module.HexagonChunk;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }],
    execute: function () {
      exports('generateWorldCenterChunk', generateWorldCenterChunk);
      cclegacy._RF.push({}, "ea0d9B/ospIxawiryVKZG2L", "generateWorldCenterChunk", undefined);
      function generateWorldCenterChunk(center) {
        var chunk = new HexagonChunk(null, center, HEX_OPTIONS);
        var tiles = [generateWorldCenterTile(center)];
        chunk.tiles.forEach(function (coords) {
          if (coords.equals(center)) {
            return;
          }
          tiles.push(generateTile(coords, {
            neighbors: tiles
          }));
        });
        return {
          coords: center,
          tiles: tiles
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/generateWorldCenterTile.ts", ['cc', './EBuilding.ts', './consts5.ts', './generateTileBaseHeight.ts'], function (exports) {
  var cclegacy, EBuilding, WORLD_CENTER_HEIGHT, generateTileBaseHeight;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBuilding = module.EBuilding;
    }, function (module) {
      WORLD_CENTER_HEIGHT = module.WORLD_CENTER_HEIGHT;
    }, function (module) {
      generateTileBaseHeight = module.generateTileBaseHeight;
    }],
    execute: function () {
      exports('generateWorldCenterTile', generateWorldCenterTile);
      cclegacy._RF.push({}, "ffd76oUxTFPW5ZL83LGiHPV", "generateWorldCenterTile", undefined);
      function generateWorldCenterTile(coords) {
        return {
          coords: coords,
          height: WORLD_CENTER_HEIGHT,
          baseHeight: generateTileBaseHeight(),
          building: {
            key: EBuilding.Castle,
            progress: 1
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getAllComponents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('getAllComponents', getAllComponents);
      cclegacy._RF.push({}, "fb45fZq6ENCaKDPG7BT5UTf", "getAllComponents", undefined);
      function getAllComponents(node, Comp) {
        return [].concat(node.getComponents(Comp), node.getComponentsInChildren(Comp));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getAllPropertyDescriptors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('getAllPropertyDescriptors', getAllPropertyDescriptors);
      cclegacy._RF.push({}, "d8a96EY59NLuqPMPXDCgws+", "getAllPropertyDescriptors", undefined);
      function getAllPropertyDescriptors(obj, level) {
        if (level === void 0) {
          level = 0;
        }
        var prototype = Object.getPrototypeOf(obj);
        return _extends({}, Object.getOwnPropertyDescriptors(obj), prototype && level > 0 ? getAllPropertyDescriptors(prototype, level - 1) : {});
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getBiomeActualSize.ts", ['cc', './EBiome.ts', './HexagonTile.ts', './toVec3.ts', './consts8.ts', './state.ts'], function (exports) {
  var cclegacy, Vec3, BIOME_OBJECT_KEYS, HexagonTile, toVec3, HEX_OPTIONS, state;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      BIOME_OBJECT_KEYS = module.BIOME_OBJECT_KEYS;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      exports('getBiomeActualSize', getBiomeActualSize);
      cclegacy._RF.push({}, "c5c8chmF8hJwYh7R+HwmI9m", "getBiomeActualSize", undefined);
      function getBiomeActualSize(coords, biomeId, biomeKey, neighbors) {
        if (neighbors === void 0) {
          neighbors = [];
        }
        var size = 0;
        var bordersSize = 0;
        var isObject = BIOME_OBJECT_KEYS.includes(biomeKey);
        var visited = new Map();
        var calculate = function calculate(tileCoords) {
          var _tile;
          var key = toVec3(tileCoords).toString();
          if (visited.has(key)) {
            return;
          }
          visited.set(key, true);
          var tilesMap = state.worldState.tilesMap;
          var tile = tilesMap.get(tileCoords);
          var tileData = (_tile = tile) == null || (_tile = _tile.self) == null ? void 0 : _tile.data;
          if (!tileData) {
            tileData = neighbors.find(function (nearTile) {
              return Vec3.equals(nearTile.coords, tileCoords);
            });
            if (tileData) {
              tile = new HexagonTile(null, toVec3(tileCoords), HEX_OPTIONS);
            }
          }
          if (!tile || !tileData) {
            bordersSize++;
            return;
          }
          var biome = isObject ? tileData.biomeObject : tileData.biomeTile;
          if ((biome == null ? void 0 : biome.key) === biomeKey && biome.id === biomeId) {
            size++;
            tile.neighbors.forEach(function (nearCoords) {
              calculate(nearCoords);
            });
          }
        };
        calculate(coords);
        neighbors.forEach(function (tile) {
          return calculate(tile.coords);
        });
        return {
          size: size,
          bordersSize: bordersSize
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getBuildRoute.ts", ['cc', './ERouteName.ts', './router.ts'], function (exports) {
  var cclegacy, ERouteName, router;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }],
    execute: function () {
      exports('getBuildRoute', getBuildRoute);
      cclegacy._RF.push({}, "a7629NGsqpLY5Qvl1zO4/8n", "getBuildRoute", undefined);
      function getBuildRoute() {
        return router.getRoute(ERouteName.Build);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getWorldRoute.ts", ['cc', './ERouteName.ts', './router.ts'], function (exports) {
  var cclegacy, ERouteName, router;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }],
    execute: function () {
      exports('getWorldRoute', getWorldRoute);
      cclegacy._RF.push({}, "93da1j4IupAuapkjeUnRY/3", "getWorldRoute", undefined);
      function getWorldRoute() {
        return router.getRoute(ERouteName.World);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/guid.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('guid', guid);
      cclegacy._RF.push({}, "5f059H66OJMNLJAuRItGYep", "guid", undefined);
      /* eslint-disable no-bitwise */

      function guid() {
        var d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hashCode.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('hashCode', hashCode);
      cclegacy._RF.push({}, "b98ca/+WMFNnLsSoE/OsqSG", "hashCode", undefined);
      function hashCode(str) {
        var hash = 0;
        if (str.length === 0) {
          return hash;
        }
        for (var i = 0; i < str.length; i++) {
          var chr = str.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0; // Convert to 32bit integer
        }

        return hash;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Hexagon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cached.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, cclegacy, Vec3, cached;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      cached = module.cached;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "4a2a90ANDdC97iQC1asX1AG", "Hexagon", undefined);
      var Hexagon = exports('Hexagon', (_class = /*#__PURE__*/function () {
        function Hexagon(self, coords, _ref) {
          var hexHeight = _ref.hexHeight,
            hexRadius = _ref.hexRadius;
          this.self = void 0;
          this.coords = void 0;
          this.hexHeight = void 0;
          this.hexRadius = void 0;
          this.self = self;
          this.coords = coords;
          this.hexHeight = hexHeight;
          this.hexRadius = hexRadius;
        }
        var _proto = Hexagon.prototype;
        _proto.getNeighbor = function getNeighbor(coords) {
          return this.neighbors.find(function (neighbor) {
            return Vec3.equals(neighbor, coords);
          });
        };
        _proto.getOrderedNeigbors = function getOrderedNeigbors(from) {
          var fromIndex = from ? this.neighbors.findIndex(function (neighbor) {
            return Vec3.equals(neighbor, from);
          }) : -1;
          if (fromIndex < 0) {
            return this.neighbors.slice();
          }
          var start = this.neighbors.slice(fromIndex);
          var end = this.neighbors.slice(0, fromIndex);
          return [].concat(start, end);
        };
        _createClass(Hexagon, [{
          key: "neighbors",
          get: function get() {
            return [this.right, this.topRight, this.topLeft, this.left, this.bottomLeft, this.bottomRight];
          }
        }, {
          key: "positionX",
          get: function get() {
            var x = this.coords.x;
            var absX = Math.abs(x);
            return Math.sign(x) * this.hexRadius * (absX + (Math.floor(absX - 1) + 1) / 2);
          }
        }, {
          key: "positionZ",
          get: function get() {
            var _this$coords = this.coords,
              y = _this$coords.y,
              z = _this$coords.z;
            return (y + z) * this.hexHeight;
          }
        }, {
          key: "key",
          get: function get() {
            return this.coords.toString();
          }
        }]);
        return Hexagon;
      }(), (_applyDecoratedDescriptor(_class.prototype, "neighbors", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "neighbors"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "positionX", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "positionX"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "positionZ", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "positionZ"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "key", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "key"), _class.prototype)), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexagonChunk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cached.ts', './Hexagon.ts', './HexagonTile.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, cached, Hexagon, HexagonTile;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      Hexagon = module.Hexagon;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "6f82dr+ONNFkKs/rJYfAp8v", "HexagonChunk", undefined);
      var HexagonChunk = exports('HexagonChunk', (_class = /*#__PURE__*/function (_Hexagon) {
        _inheritsLoose(HexagonChunk, _Hexagon);
        function HexagonChunk() {
          return _Hexagon.apply(this, arguments) || this;
        }
        _createClass(HexagonChunk, [{
          key: "tiles",
          get: function get() {
            var center = new HexagonTile(null, this.coords.clone(), {
              hexHeight: this.hexHeight,
              hexRadius: this.hexRadius
            });
            return [center.coords].concat(center.neighbors);
          }
        }, {
          key: "right",
          get: function get() {
            return this.coords.clone().add3f(3, 2, -1);
          }
        }, {
          key: "topRight",
          get: function get() {
            return this.coords.clone().add3f(1, 3, 2);
          }
        }, {
          key: "topLeft",
          get: function get() {
            return this.coords.clone().add3f(-2, 1, 3);
          }
        }, {
          key: "left",
          get: function get() {
            return this.coords.clone().add3f(-3, -2, 1);
          }
        }, {
          key: "bottomLeft",
          get: function get() {
            return this.coords.clone().add3f(-1, -3, -2);
          }
        }, {
          key: "bottomRight",
          get: function get() {
            return this.coords.clone().add3f(2, -1, -3);
          }
        }]);
        return HexagonChunk;
      }(Hexagon), (_applyDecoratedDescriptor(_class.prototype, "tiles", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "tiles"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "right"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "topRight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "topLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "left"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "bottomLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "bottomRight"), _class.prototype)), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexagonMap.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _createForOfIteratorHelperLoose, _initializerDefineProperty, cclegacy, action, computed, observable;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }],
    execute: function () {
      var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0f694fs2cpEcq8o5R+6yN7R", "HexagonMap", undefined);
      var HexagonMap = exports('HexagonMap', (_dec = action.bound, _dec2 = action.bound, (_class = /*#__PURE__*/function () {
        function HexagonMap(Hex, options) {
          this.map = observable.map();
          _initializerDefineProperty(this, "maxX", _descriptor, this);
          _initializerDefineProperty(this, "maxZ", _descriptor2, this);
          _initializerDefineProperty(this, "minX", _descriptor3, this);
          _initializerDefineProperty(this, "minZ", _descriptor4, this);
          this.options = void 0;
          this.Hex = void 0;
          this.options = options;
          this.Hex = Hex;
        }
        var _proto = HexagonMap.prototype;
        _proto.get = function get(coords) {
          var x = coords.x,
            y = coords.y,
            z = coords.z;
          var yMap = this.map.get(x);
          if (!yMap) {
            this.map.set(x, yMap = observable.map());
          }
          var zMap = yMap.get(y);
          if (!zMap) {
            yMap.set(y, zMap = observable.map());
          }
          return zMap.get(z);
        };
        _proto.add = function add(coords, item) {
          var hex = new this.Hex(item, coords, this.options);
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
          var _hex$coords = hex.coords,
            x = _hex$coords.x,
            y = _hex$coords.y,
            z = _hex$coords.z;
          var yMap = this.map.get(x);
          if (!yMap) {
            this.map.set(x, yMap = observable.map());
          }
          var zMap = yMap.get(y);
          if (!zMap) {
            yMap.set(y, zMap = observable.map());
          }
          var old = zMap.get(z);
          if (old) {
            old.destroy == null || old.destroy();
          }
          zMap.set(z, hex);
          return hex;
        };
        _createClass(HexagonMap, [{
          key: "values",
          get: function get() {
            var result = [];
            for (var _iterator = _createForOfIteratorHelperLoose(this.map.values()), _step; !(_step = _iterator()).done;) {
              var yMap = _step.value;
              for (var _iterator2 = _createForOfIteratorHelperLoose(yMap.values()), _step2; !(_step2 = _iterator2()).done;) {
                var zMap = _step2.value;
                for (var _iterator3 = _createForOfIteratorHelperLoose(zMap.values()), _step3; !(_step3 = _iterator3()).done;) {
                  var val = _step3.value;
                  result.push(val);
                }
              }
            }
            return result;
          }
        }]);
        return HexagonMap;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "maxX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "maxZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "minX", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "minZ", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class.prototype, "values", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "values"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "get", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "add", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexagonTile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cached.ts', './Hexagon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, cached, Hexagon;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      Hexagon = module.Hexagon;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "5b8c48dPQFKJJQqjNKNZfbv", "HexagonTile", undefined);
      var HexagonTile = exports('HexagonTile', (_class = /*#__PURE__*/function (_Hexagon) {
        _inheritsLoose(HexagonTile, _Hexagon);
        function HexagonTile() {
          return _Hexagon.apply(this, arguments) || this;
        }
        _createClass(HexagonTile, [{
          key: "right",
          get: function get() {
            return this.coords.clone().add3f(1, 1, 0);
          }
        }, {
          key: "topRight",
          get: function get() {
            return this.coords.clone().add3f(0, 1, 1);
          }
        }, {
          key: "topLeft",
          get: function get() {
            return this.coords.clone().add3f(-1, 0, 1);
          }
        }, {
          key: "left",
          get: function get() {
            return this.coords.clone().add3f(-1, -1, 0);
          }
        }, {
          key: "bottomLeft",
          get: function get() {
            return this.coords.clone().add3f(0, -1, -1);
          }
        }, {
          key: "bottomRight",
          get: function get() {
            return this.coords.clone().add3f(1, 0, -1);
          }
        }]);
        return HexagonTile;
      }(Hexagon), (_applyDecoratedDescriptor(_class.prototype, "right", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "right"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "topRight", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "topRight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "topLeft", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "topLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "left", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "left"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bottomLeft", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "bottomLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bottomRight", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "bottomRight"), _class.prototype)), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hexColor.ts", ['cc'], function (exports) {
  var cclegacy, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
    }],
    execute: function () {
      exports('hexColor', hexColor);
      cclegacy._RF.push({}, "89d03nht+FEUqB57hpirUd1", "hexColor", undefined);
      function hexColor(hex, opacity) {
        if (opacity === void 0) {
          opacity = 1;
        }
        if (opacity !== 1) {
          var alpha = Math.round(opacity * 255).toString(16);
          hex = hex + alpha;
        }
        return Color.fromHEX(new Color(), hex);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hexRadius.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('hexRadius', hexRadius);
      cclegacy._RF.push({}, "b688bsV6xtKPp2CtA7uFHE+", "hexRadius", undefined);
      function hexRadius(h) {
        return 2 * h / Math.sqrt(3);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/i18n.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('i18n', i18n);
      cclegacy._RF.push({}, "c2824H954hCspLqX6Yl7mQy", "i18n", undefined);
      function i18n(key) {
        return key;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBiomeData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0495cH9hMVAbaAFfMG2aSb1", "IBiomeData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBuildingData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa3014a3bdG5IVqFwvlMy+w", "IBuildingData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IChance.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6342byz8QREb7zJQjgkaI6R", "IChance", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IChunkData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d3147CSTXdEyp/MQNHJualU", "IChunkData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGeneratorOptions.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1da5baSRRIaraersDNU5Cc", "IGeneratorOptions", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "418360ZSfNHWLT9dKAdyyNV", "index", undefined);
      var _window$mobx = window.mobx,
        observable = exports('observable', _window$mobx.observable),
        computed = exports('computed', _window$mobx.computed),
        action = exports('action', _window$mobx.action),
        runInAction = exports('runInAction', _window$mobx.runInAction),
        reaction = exports('reaction', _window$mobx.reaction),
        makeObservable = exports('makeObservable', _window$mobx.makeObservable),
        autorun = exports('autorun', _window$mobx.autorun);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc'], function () {
  var cclegacy, game;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7530y0ardF0a/Q4Y24KFCH", "index", undefined);
      game.frameRate = 120;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/INeigborBiome.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "982b0840z5E5YKNJmKjyGuc", "INeigborBiome", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/isNearCenter.ts", ['cc', './consts5.ts'], function (exports) {
  var cclegacy, Vec3, WORLD_CENTER;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      WORLD_CENTER = module.WORLD_CENTER;
    }],
    execute: function () {
      exports('isNearWorldCenter', isNearWorldCenter);
      cclegacy._RF.push({}, "8541ae42y5P+6X1wkrNo3q2", "isNearCenter", undefined);
      function isNearWorldCenter(coords, distance) {
        if (distance === void 0) {
          distance = 2;
        }
        return Vec3.distance(coords, WORLD_CENTER) <= distance;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/isNumber.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('isNumber', isNumber);
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
    }
  };
});

System.register("chunks:///_virtual/isObject.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', isObject);
      cclegacy._RF.push({}, "3de6cYhNuxDxoKlhnRpwWbo", "isObject", undefined);
      // https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11743-L11746

      function isObject(value) {
        var type = typeof value;
        return value != null && (type === 'object' || type === 'function');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/isPromise.ts", ['cc', './isObject.ts'], function (exports) {
  var cclegacy, isObject;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      isObject = module.default;
    }],
    execute: function () {
      exports('isPromise', isPromise);
      cclegacy._RF.push({}, "bfee9+RZ+hOW7+30DEoysnl", "isPromise", undefined);
      function isPromise(value) {
        return isObject(value) && typeof value.then === 'function';
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/isRandomChance.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('isRandomChance', isRandomChance);
      cclegacy._RF.push({}, "799a5CnYptCS6YKiRiXw05i", "isRandomChance", undefined);
      function isRandomChance(chance) {
        return Math.random() <= chance;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITapEvent.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3fd3e2Xv+5PJLBXO++hkF/J", "ITapEvent", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITileData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "78e9dffiX9FkKY1sTQ8AhGP", "ITileData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/listen.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('listen', listen);
      cclegacy._RF.push({}, "2d0a8UkkNNNV6nCrOwWYFr/", "listen", undefined);
      function listen(func) {
        return func();
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingUi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Ui.ts', './cocos.ts', './assets.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, Ui, ccclass, assets;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      Ui = module.Ui;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3f4bclSvUNEfoooFgwIR97r", "LoadingUi", undefined);
      var LoadingUi = exports('LoadingUi', (_dec = ccclass('LoadingUi'), _dec(_class = /*#__PURE__*/function (_Ui) {
        _inheritsLoose(LoadingUi, _Ui);
        function LoadingUi() {
          return _Ui.apply(this, arguments) || this;
        }
        var _proto = LoadingUi.prototype;
        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return assets.wait;
                case 2:
                  director.loadScene('WorldScene');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onLoad() {
            return _onLoad.apply(this, arguments);
          }
          return onLoad;
        }();
        return LoadingUi;
      }(Ui)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadResources.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
    }],
    execute: function () {
      exports('loadResources', loadResources);
      cclegacy._RF.push({}, "ef30dqx+ftBKKWf33k/Dpsa", "loadResources", undefined);
      function loadResources(_x, _x2) {
        return _loadResources.apply(this, arguments);
      }
      function _loadResources() {
        _loadResources = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(paths, type) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  resources.load(paths, type, function (err, data) {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(data);
                  });
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _loadResources.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadResourcesDir.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
    }],
    execute: function () {
      exports('loadResourcesDir', loadResourcesDir);
      cclegacy._RF.push({}, "45643QK1BFO7ZWuZCCht1Th", "loadResourcesDir", undefined);
      function loadResourcesDir(_x, _x2) {
        return _loadResourcesDir.apply(this, arguments);
      }
      function _loadResourcesDir() {
        _loadResourcesDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path, type) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  resources.loadDir(path, type, function (err, data) {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(data);
                  });
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _loadResourcesDir.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./assets.ts', './Biome.ts', './BiomeObject.ts', './BiomeTile.ts', './BiomeTileRiver.ts', './BiomeTileWater.ts', './EBiome.ts', './EBiomeSize.ts', './biomeObjectsPrefabs.ts', './biomeSizeMaps.ts', './biomeTiles.ts', './consts3.ts', './waterTiles.ts', './getBiomeActualSize.ts', './IBiomeData.ts', './TBiomeSizeMap.ts', './BuildCard.ts', './Building.ts', './BuildingComponent.ts', './BuildingPreview.ts', './BuildingsDB.ts', './EBuilding.ts', './buildingPrefabs.ts', './consts.ts', './IBuildingData.ts', './ButtonAction.ts', './ButtonDisabled.ts', './ButtonTurn.ts', './EButtonSize.ts', './consts6.ts', './Chunk.ts', './ChunkNewButton.ts', './IChunkData.ts', './CustomBlur.ts', './CustomBlurPass.ts', './DiTemplate.ts', './DiWorld.ts', './consts8.ts', './LoadingUi.ts', './Photobooth.ts', './PhotoboothIcon.ts', './ResourceAmount.ts', './ResourceCard.ts', './ResourceComponent.ts', './EResource.ts', './ResourcesDB.ts', './ResourcesStart.ts', './Tile.ts', './TileTest.ts', './consts9.ts', './tileHasBiomeObjects.ts', './tileHasBiomeTiles.ts', './tileNotWater.ts', './tileWithoutObject.ts', './ITileData.ts', './Ui.ts', './Ui3D.ts', './UiActive.ts', './UiBackground.ts', './UiLabel.ts', './UiActiveAnimate.ts', './UiOpacityAnimate.ts', './UiPositionAnimate.ts', './World.ts', './consts5.ts', './WorldCamera.ts', './EMoveType.ts', './consts4.ts', './consts2.ts', './findBiomeNeighbors.ts', './findWaterNeighbors.ts', './generateBiomeObject.ts', './generateBiomeTile.ts', './generateClay.ts', './generateForest.ts', './generateForestRocks.ts', './generateHill.ts', './generateLake.ts', './generateMountain.ts', './generateRiver.ts', './generateRocks.ts', './generateSand.ts', './generateSea.ts', './randomizeBiomeSize.ts', './generateWorldCenterChunk.ts', './generateWorldCenterTile.ts', './isNearCenter.ts', './findMinHeight.ts', './generateChunk.ts', './generateTile.ts', './generateTileBaseHeight.ts', './generateTileHeight.ts', './sortCoords.ts', './IGeneratorOptions.ts', './INeigborBiome.ts', './TGenerator.ts', './WorldUi.ts', './promiseTimeout.ts', './wait.ts', './waitForFrame.ts', './Button.ts', './ComponentPath.ts', './Observer.ts', './TemplateComponent.ts', './EEventName.ts', './ELayer.ts', './addMeshCollider.ts', './createPrefabNode.ts', './factoryChildNode.ts', './factoryComponent.ts', './factorySprite.ts', './factoryTemplateComponent.ts', './getAllComponents.ts', './loadResources.ts', './loadResourcesDir.ts', './setNodeLayer.ts', './toCocosEnum.ts', './updateNodeLayout.ts', './index2.ts', './ITapEvent.ts', './TComponentClass.ts', './bound.ts', './cached.ts', './cocos.ts', './createFactory.ts', './filterNullable.ts', './getAllPropertyDescriptors.ts', './guid.ts', './hashCode.ts', './hexColor.ts', './isNumber.ts', './isObject.ts', './isPromise.ts', './listen.ts', './prepareMaterial.ts', './Hexagon.ts', './HexagonChunk.ts', './HexagonMap.ts', './HexagonTile.ts', './i18n.ts', './clamp.ts', './degreeToRadian.ts', './easeOutSine.ts', './fromQuat.ts', './fromVec3.ts', './fromVec3ToVec2.ts', './hexRadius.ts', './toFixedNumber.ts', './toQuat.ts', './toVec3.ts', './IChance.ts', './isRandomChance.ts', './randomChance.ts', './randomFromArray.ts', './randomFromRange.ts', './Semaphore.ts', './AbstractRoute.ts', './AbstractScreen.ts', './ERouteName.ts', './BuildRoute.ts', './BuildScreen.ts', './getBuildRoute.ts', './PauseRoute.ts', './PauseScreen.ts', './ResourcesRoute.ts', './ResourcesScreen.ts', './WorldRoute.ts', './WorldScreen.ts', './EWorldRouteMode.ts', './getWorldRoute.ts', './router.ts', './AbstractState.ts', './GameState.ts', './ResourcesState.ts', './TurnState.ts', './consts7.ts', './WorldState.ts', './state.ts', './index.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Observer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Component, makeObservable, autorun;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      makeObservable = module.makeObservable;
      autorun = module.autorun;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae412NL8T9IL7DlaWHxK8tw", "Observer", undefined);
      var UNMOUNT_METHOD_REGEX = /^dispose/;
      var Observer = exports('Observer', /*#__PURE__*/function (_Component) {
        _inheritsLoose(Observer, _Component);
        function Observer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.disposeRender = null;
          return _this;
        }
        var _proto = Observer.prototype;
        _proto.__preload = function __preload() {
          makeObservable(this);
          if (this.render) {
            this.disposeRender = autorun(this.render.bind(this));
          }
        };
        _proto.onDestroy = function onDestroy() {
          var _this2 = this;
          var methods = [].concat(Object.getOwnPropertyNames(this), Object.getOwnPropertyNames(Object.getPrototypeOf(this)));
          methods.forEach(function (method) {
            if (UNMOUNT_METHOD_REGEX.test(method)) {
              var func = _this2[method];
              if (func) {
                func();
              }
            }
          });
        };
        return Observer;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PauseRoute.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractRoute.ts', './ERouteName.ts', './PauseScreen.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractRoute, ERouteName, PauseScreen;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractRoute = module.AbstractRoute;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      PauseScreen = module.PauseScreen;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fba989evB1Fx5aB2bdIY4XZ", "PauseRoute", undefined);
      var PauseRoute = exports('PauseRoute', /*#__PURE__*/function (_AbstractRoute) {
        _inheritsLoose(PauseRoute, _AbstractRoute);
        function PauseRoute() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractRoute.call.apply(_AbstractRoute, [this].concat(args)) || this;
          _this.name = ERouteName.Pause;
          _this.screen = PauseScreen;
          _this.hasUiOverlay = true;
          _this.hasUiHeader = false;
          _this.isIntro = void 0;
          return _this;
        }
        var _proto = PauseRoute.prototype;
        _proto.serialize = function serialize() {
          return {
            isIntro: this.isIntro
          };
        };
        return PauseRoute;
      }(AbstractRoute));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PauseScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './AbstractScreen.ts', './ERouteName.ts', './router.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, ccclass, AbstractScreen, ERouteName, router, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      AbstractScreen = module.AbstractScreen;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }, function (module) {
      computed = module.computed;
    }],
    execute: function () {
      var _dec, _class, _class2, _class3;
      cclegacy._RF.push({}, "61c151/eI1JGIitKRzcpUJn", "PauseScreen", undefined);
      var PauseScreen = exports('PauseScreen', (_dec = ccclass('PauseScreen'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AbstractScreen) {
        _inheritsLoose(PauseScreen, _AbstractScreen);
        function PauseScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractScreen.call.apply(_AbstractScreen, [this].concat(args)) || this;
          _this.routeName = ERouteName.Pause;
          return _this;
        }
        var _proto = PauseScreen.prototype;
        _proto.onStartClick = function onStartClick() {};
        _proto.onContinueClick = function onContinueClick() {
          router.navigate(ERouteName.World);
        };
        _proto.onResumeClick = function onResumeClick() {
          var isNavigated = router.navigateBack();
          if (!isNavigated) {
            this.onContinueClick();
          }
        };
        _proto.onStartOverClick = function onStartOverClick() {};
        _proto.onSettingsClick = function onSettingsClick() {};
        _createClass(PauseScreen, [{
          key: "isContinueActive",
          get: function get() {
            var _this$route;
            return Boolean((_this$route = this.route) == null ? void 0 : _this$route.isIntro);
          }
        }, {
          key: "isResumeActive",
          get: function get() {
            return !this.isContinueActive;
          }
        }, {
          key: "isPaused",
          get: function get() {
            var _this$route2;
            return !((_this$route2 = this.route) != null && _this$route2.isIntro);
          }
        }]);
        return PauseScreen;
      }(AbstractScreen), _class3.template = 'PauseScreen', _class3), (_applyDecoratedDescriptor(_class2.prototype, "isContinueActive", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "isContinueActive"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isResumeActive", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "isResumeActive"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Photobooth.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './setNodeLayer.ts', './cached.ts', './cocos.ts', './Semaphore.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Node, Camera, director, Texture2D, SpriteFrame, sys, Vec3, MeshRenderer, Observer, setNodeLayer, cached, ccclass, property, Semaphore;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Camera = module.Camera;
      director = module.director;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      sys = module.sys;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      setNodeLayer = module.setNodeLayer;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      Semaphore = module.Semaphore;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "6eda4E3ZZVDFIsX8XKfaZbz", "Photobooth", undefined);
      var Photobooth = exports('Photobooth', (_dec = ccclass('Photobooth'), _dec2 = property(Node), _dec3 = property(Camera), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Photobooth, _Observer);
        function Photobooth() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "root", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));
          _this.semaphore = new Semaphore();
          _this.updateCallback = null;
          return _this;
        }
        var _proto = Photobooth.prototype;
        _proto.waitForUpdate = /*#__PURE__*/function () {
          var _waitForUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return new Promise(function (resolve) {
                    _this2.updateCallback = resolve;
                  });
                case 2:
                  this.updateCallback = null;
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function waitForUpdate() {
            return _waitForUpdate.apply(this, arguments);
          }
          return waitForUpdate;
        }();
        _proto.capture = /*#__PURE__*/function () {
          var _capture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(node, _temp) {
            var _this3 = this;
            var _ref, scale;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _ref = _temp === void 0 ? {} : _temp, scale = _ref.scale;
                  return _context3.abrupt("return", this.semaphore.execute( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    var _this3$camera$node$pa, _node$getComponentInC;
                    var bounds, _this3$camera$node$pa2, pbuffer, texture, spriteFrame;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _this3.root.destroyAllChildren();
                          (_this3$camera$node$pa = _this3.camera.node.parent) == null || _this3$camera$node$pa.setPosition(new Vec3(0, 0, 0));
                          setNodeLayer(node, _this3.root.layer);
                          if (scale) {
                            node.setScale(new Vec3(scale, scale, scale));
                          }
                          _this3.root.addChild(node);
                          bounds = (_node$getComponentInC = node.getComponentInChildren(MeshRenderer)) == null || (_node$getComponentInC = _node$getComponentInC.model) == null ? void 0 : _node$getComponentInC.worldBounds;
                          if (bounds) {
                            (_this3$camera$node$pa2 = _this3.camera.node.parent) == null || _this3$camera$node$pa2.setPosition(new Vec3(0, bounds.center.y + bounds.halfExtents.y, 0));
                          }
                          _context2.next = 9;
                          return _this3.waitForUpdate();
                        case 9:
                          if (_this3.rt) {
                            _context2.next = 11;
                            break;
                          }
                          return _context2.abrupt("return", null);
                        case 11:
                          pbuffer = _this3.rt.readPixels();
                          if (pbuffer) {
                            _context2.next = 14;
                            break;
                          }
                          return _context2.abrupt("return", null);
                        case 14:
                          texture = new Texture2D();
                          texture.reset({
                            width: _this3.rt.width,
                            height: _this3.rt.height,
                            format: _this3.rt.getPixelFormat()
                          });
                          texture.uploadData(pbuffer);
                          spriteFrame = new SpriteFrame();
                          spriteFrame.texture = texture;
                          spriteFrame.flipUVY = !sys.isNative;
                          return _context2.abrupt("return", spriteFrame);
                        case 21:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }))));
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function capture(_x, _x2) {
            return _capture.apply(this, arguments);
          }
          return capture;
        }();
        _proto.update = function update() {
          var _this$updateCallback;
          (_this$updateCallback = this.updateCallback) == null || _this$updateCallback.call(this);
        };
        Photobooth.factory = function factory() {
          if (!this.instance || !this.instance.node.activeInHierarchy) {
            var _scene$getComponentIn;
            var scene = director.getScene();
            this.instance = (_scene$getComponentIn = scene == null ? void 0 : scene.getComponentInChildren(Photobooth)) != null ? _scene$getComponentIn : null;
          }
          return this.instance;
        };
        _createClass(Photobooth, [{
          key: "rt",
          get: function get() {
            return this.camera.targetTexture;
          }
        }]);
        return Photobooth;
      }(Observer), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "root", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "rt", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "rt"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PhotoboothIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Photobooth.ts', './Observer.ts', './createPrefabNode.ts', './factorySprite.ts', './cocos.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, Prefab, Node, CCFloat, Photobooth, Observer, createPrefabNode, factorySprite, ccclass, property, observable, computed, autorun, runInAction;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      Node = module.Node;
      CCFloat = module.CCFloat;
    }, function (module) {
      Photobooth = module.Photobooth;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      factorySprite = module.factorySprite;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      observable = module.observable;
      computed = module.computed;
      autorun = module.autorun;
      runInAction = module.runInAction;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "9950cXlk+NHPbkzuDlrJGsu", "PhotoboothIcon", undefined);
      var SHOOT_CACHE = observable.map();
      var PhotoboothIcon = exports('PhotoboothIcon', (_dec = ccclass('PhotoboothIcon'), _dec2 = observable.ref, _dec3 = property({
        type: Prefab,
        visible: function visible() {
          return !this.shootNode;
        }
      }), _dec4 = observable.ref, _dec5 = property({
        type: Node,
        visible: function visible() {
          return !this.shootPrefab;
        }
      }), _dec6 = observable.ref, _dec7 = property(CCFloat), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(PhotoboothIcon, _Observer);
        function PhotoboothIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.spriteComponent = null;
          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shootPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shootNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scale", _descriptor4, _assertThisInitialized(_this));
          _this.disposeSpriteShoot = autorun( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var node, _Photobooth$factory, sprite;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!_this.cachedSprite) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  node = _this.createShootTarget();
                  if (!node) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 6;
                  return (_Photobooth$factory = Photobooth.factory()) == null ? void 0 : _Photobooth$factory.capture(node, {
                    scale: _this.scale
                  });
                case 6:
                  sprite = _context.sent;
                  if (sprite) {
                    runInAction(function () {
                      _this.sprite = sprite;
                      if (_this.cacheKey) {
                        SHOOT_CACHE.set(_this.cacheKey, sprite);
                      }
                    });
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
          return _this;
        }
        var _proto = PhotoboothIcon.prototype;
        _proto.createShootTarget = function createShootTarget() {
          if (this.shootNode) {
            return this.shootNode;
          }
          if (this.shootPrefab) {
            var prefabNode = createPrefabNode(this.shootPrefab);
            return prefabNode;
          }
          return null;
        };
        _proto.onLoad = function onLoad() {
          this.spriteComponent = factorySprite(this.node, this.cachedSprite || this.sprite);
        };
        _proto.render = function render() {
          var sprite = this.cachedSprite || this.sprite;
          if (this.spriteComponent && this.spriteComponent.spriteFrame !== sprite) {
            this.spriteComponent.spriteFrame = sprite;
          }
        };
        _createClass(PhotoboothIcon, [{
          key: "cacheKey",
          get: function get() {
            var _this$shootNode, _this$shootPrefab;
            return ((_this$shootNode = this.shootNode) == null ? void 0 : _this$shootNode.uuid) || ((_this$shootPrefab = this.shootPrefab) == null ? void 0 : _this$shootPrefab.uuid);
          }
        }, {
          key: "cachedSprite",
          get: function get() {
            return this.cacheKey && SHOOT_CACHE.get(this.cacheKey) || null;
          }
        }]);
        return PhotoboothIcon;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shootPrefab", [_dec3, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shootNode", [_dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "cacheKey", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "cacheKey"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cachedSprite", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "cachedSprite"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prepareMaterial.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      exports('prepareMaterial', prepareMaterial);
      cclegacy._RF.push({}, "27c8dcOx3hOXqna/Q1FXIe5", "prepareMaterial", undefined);
      function prepareMaterial(material) {
        var warn = console.warn;
        try {
          console.warn = function () {};
          material.setProperty('u_globalDirection', sys.isNative ? -1.0 : 1.0);
        } catch (err) {
          warn(err);
        } finally {
          console.warn = warn;
        }
        return material;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/promiseTimeout.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('promiseTimeout', promiseTimeout);
      cclegacy._RF.push({}, "36379iVLA1AzoZPCDaV0RCa", "promiseTimeout", undefined);
      function promiseTimeout(ms, promise, onTimeout) {
        return new Promise(function (resolve, reject) {
          var timer = setTimeout(function () {
            onTimeout == null || onTimeout();
            reject(new Error('Promise Timed Out'));
          }, ms);
          promise.then(function (res) {
            clearTimeout(timer);
            resolve(res);
          })["catch"](function (err) {
            clearTimeout(timer);
            reject(err);
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomChance.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('randomChance', randomChance);
      cclegacy._RF.push({}, "bf232iUqyFASrpBLMMrmZw/", "randomChance", undefined);
      function randomChance(chances, args) {
        if (args === void 0) {
          args = [];
        }
        var rand = Math.random();
        for (var _iterator = _createForOfIteratorHelperLoose(chances), _step; !(_step = _iterator()).done;) {
          var chance = _step.value;
          var check = chance.chance.apply(chance, args);
          if (rand <= check) {
            return chance.fn;
          }
          rand -= check;
        }
        return chances[chances.length - 1].fn;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomFromArray.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('randomFromArray', randomFromArray);
      cclegacy._RF.push({}, "bdfa1yU4XBMSIsIw/hupcCp", "randomFromArray", undefined);
      function randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomFromRange.ts", ['cc', './toFixedNumber.ts'], function (exports) {
  var cclegacy, toFixedNumber;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      toFixedNumber = module.toFixedNumber;
    }],
    execute: function () {
      exports('randomFromRange', randomFromRange);
      cclegacy._RF.push({}, "07603MAKQpIurSgq/khjzkq", "randomFromRange", undefined);
      function randomFromRange(range, digits) {
        if (digits === void 0) {
          digits = 0;
        }
        var min = range[0],
          max = range[1];
        if (!digits) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return toFixedNumber(Math.random() * (max - min) + min, digits);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomizeBiomeSize.ts", ['cc', './EBiomeSize.ts', './randomChance.ts'], function (exports) {
  var cclegacy, EBiomeSize, randomChance;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeSize = module.EBiomeSize;
    }, function (module) {
      randomChance = module.randomChance;
    }],
    execute: function () {
      exports('randomizeBiomeSize', randomizeBiomeSize);
      cclegacy._RF.push({}, "1bfdef9CplL7YDamG2jIVM3", "randomizeBiomeSize", undefined);
      function randomizeBiomeSize(chances) {
        var tinyChance = chances[0],
          smallChance = chances[1],
          mediumChange = chances[2],
          largeChance = chances[3];
        var randomize = [{
          name: 'large',
          chance: function chance() {
            return largeChance || 0;
          },
          fn: function fn() {
            return EBiomeSize.Large;
          }
        }, {
          name: 'medium',
          chance: function chance() {
            return mediumChange || 0;
          },
          fn: function fn() {
            return EBiomeSize.Medium;
          }
        }, {
          name: 'small',
          chance: function chance() {
            return smallChance || 0;
          },
          fn: function fn() {
            return EBiomeSize.Small;
          }
        }, {
          name: 'tiny',
          chance: function chance() {
            return tinyChance || 0;
          },
          fn: function fn() {
            return EBiomeSize.Tiny;
          }
        }];
        return randomChance(randomize)();
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceAmount.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceComponent.ts', './cocos.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ResourceComponent, ccclass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ResourceComponent = module.ResourceComponent;
    }, function (module) {
      ccclass = module.ccclass;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "34161JKJkJDyKwuJRTGfyFZ", "ResourceAmount", undefined);
      var ResourceAmount = exports('ResourceAmount', (_dec = ccclass('ResourceAmount'), _dec(_class = (_class2 = /*#__PURE__*/function (_ResourceComponent) {
        _inheritsLoose(ResourceAmount, _ResourceComponent);
        function ResourceAmount() {
          return _ResourceComponent.apply(this, arguments) || this;
        }
        return ResourceAmount;
      }(ResourceComponent), _class2.template = 'ResourceAmount', _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceComponent.ts', './updateNodeLayout.ts', './cocos.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Sprite, ResourceComponent, updateNodeLayout, ccclass, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
    }, function (module) {
      ResourceComponent = module.ResourceComponent;
    }, function (module) {
      updateNodeLayout = module.updateNodeLayout;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      computed = module.computed;
    }],
    execute: function () {
      var _dec, _class, _class2, _class3;
      cclegacy._RF.push({}, "bb4a6Tb8jpI3qs2DoCw9P95", "ResourceCard", undefined);
      var ResourceCard = exports('ResourceCard', (_dec = ccclass('ResourceCard'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_ResourceComponent) {
        _inheritsLoose(ResourceCard, _ResourceComponent);
        function ResourceCard() {
          return _ResourceComponent.apply(this, arguments) || this;
        }
        var _proto = ResourceCard.prototype;
        _proto.render = function render() {
          var _this$label$node$pare;
          _ResourceComponent.prototype.render.call(this);
          var labelBgSprite = (_this$label$node$pare = this.label.node.parent) == null ? void 0 : _this$label$node$pare.getComponent(Sprite);
          if (labelBgSprite) {
            labelBgSprite.color = this.color;
          }
          updateNodeLayout(this);
        };
        _createClass(ResourceCard, [{
          key: "color",
          get: function get() {
            if (this.count < 0) {
              return ResourceComponent.NEGATIVE_COLOR;
            }
            if (this.count > 0) {
              return ResourceComponent.NEUTRAL_COLOR;
            }
            return ResourceComponent.POSITIVE_COLOR;
          }
        }]);
        return ResourceCard;
      }(ResourceComponent), _class3.template = 'ResourceCard', _class3), _applyDecoratedDescriptor(_class2.prototype, "color", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './assets.ts', './EResource.ts', './ResourcesDB.ts', './UiLabel.ts', './Observer.ts', './toCocosEnum.ts', './cocos.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Label, Sprite, Color, assets, EResource, ResourcesDB, UiLabel, Observer, toCocosEnum, property, action, computed, observable;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Sprite = module.Sprite;
      Color = module.Color;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      EResource = module.EResource;
    }, function (module) {
      ResourcesDB = module.ResourcesDB;
    }, function (module) {
      UiLabel = module.UiLabel;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      toCocosEnum = module.toCocosEnum;
    }, function (module) {
      property = module.property;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class2;
      cclegacy._RF.push({}, "f075cc2IUlN+6AEJEmzx53q", "ResourceComponent", undefined);
      var ResourceComponent = exports('ResourceComponent', (_dec = property(Label), _dec2 = property(UiLabel), _dec3 = property(Sprite), _dec4 = property({
        type: toCocosEnum(EResource)
      }), _dec5 = action.bound, (_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(ResourceComponent, _Observer);
        function ResourceComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resource", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "count", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ResourceComponent.prototype;
        _proto.initialize = function initialize(_ref) {
          var resource = _ref.resource,
            count = _ref.count;
          this.resource = resource;
          this.count = count;
        };
        _proto.render = function render() {
          this.sprite.spriteFrame = this.spriteFrame;
          this.label.string = this.str;
          if (this.title) {
            this.title.string = this.titleStr;
          }
        };
        _createClass(ResourceComponent, [{
          key: "resourceKey",
          get: function get() {
            if (this.resource) {
              return this.resource;
            }
            return null;
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            if (!this.resourceKey) {
              return null;
            }
            var resourceDb = ResourcesDB[this.resourceKey];
            return assets.getSprites(resourceDb.icon);
          }
        }, {
          key: "str",
          get: function get() {
            if (this.count > 0) {
              return "+" + this.count;
            }
            return "" + this.count;
          }
        }, {
          key: "titleStr",
          get: function get() {
            if (!this.resourceKey) {
              return '';
            }
            return ResourcesDB[this.resourceKey].title;
          }
        }]);
        return ResourceComponent;
      }(Observer), _class2.NEGATIVE_COLOR = new Color(219, 84, 97), _class2.POSITIVE_COLOR = new Color(0, 177, 134), _class2.NEUTRAL_COLOR = new Color(224, 202, 60), _class2), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "label", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "resource", [_dec4, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "count", [property, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class.prototype, "spriteFrame", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "spriteFrame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "str", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "str"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initialize", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "titleStr", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "titleStr"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesDB.ts", ['cc', './EResource.ts'], function (exports) {
  var cclegacy, EResource;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EResource = module.EResource;
    }],
    execute: function () {
      var _ResourcesDB;
      cclegacy._RF.push({}, "db2c83c43tCBKG6DQziIpHG", "ResourcesDB", undefined);
      var ResourcesDB = exports('ResourcesDB', (_ResourcesDB = {}, _ResourcesDB[EResource.Log] = {
        title: 'Logs',
        icon: 'Log_128'
      }, _ResourcesDB[EResource.Plank] = {
        title: 'Planks',
        icon: 'Plank_128'
      }, _ResourcesDB[EResource.Stone] = {
        title: 'Stones',
        icon: 'Stone_128'
      }, _ResourcesDB));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesRoute.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractRoute.ts', './ERouteName.ts', './ResourcesScreen.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractRoute, ERouteName, ResourcesScreen;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractRoute = module.AbstractRoute;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      ResourcesScreen = module.ResourcesScreen;
    }],
    execute: function () {
      cclegacy._RF.push({}, "58311C5WSlL07Cg9USm4ZD1", "ResourcesRoute", undefined);
      var ResourcesRoute = exports('ResourcesRoute', /*#__PURE__*/function (_AbstractRoute) {
        _inheritsLoose(ResourcesRoute, _AbstractRoute);
        function ResourcesRoute() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractRoute.call.apply(_AbstractRoute, [this].concat(args)) || this;
          _this.name = ERouteName.Resources;
          _this.screen = ResourcesScreen;
          return _this;
        }
        var _proto = ResourcesRoute.prototype;
        _proto.serialize = function serialize() {
          return {};
        };
        return ResourcesRoute;
      }(AbstractRoute));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceCard.ts', './factoryTemplateComponent.ts', './cocos.ts', './AbstractScreen.ts', './ERouteName.ts', './router.ts', './state.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Node, UITransform, ResourceCard, factoryTemplateComponent, ccclass, property, AbstractScreen, ERouteName, router, state, observable, action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
    }, function (module) {
      ResourceCard = module.ResourceCard;
    }, function (module) {
      factoryTemplateComponent = module.factoryTemplateComponent;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      AbstractScreen = module.AbstractScreen;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }, function (module) {
      state = module.state;
    }, function (module) {
      observable = module.observable;
      action = module.action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "0729fzt/eRCtabIAGN4NSDT", "ResourcesScreen", undefined);
      var DEFAULT_CARD_HEIGHT = 148;
      var PADDING_DIFF = 2 * 16 + 2 * 16;
      var ResourcesScreen = exports('ResourcesScreen', (_dec = ccclass('ResourcesScreen'), _dec2 = property(Node), _dec3 = property(UITransform), _dec4 = observable.shallow, _dec5 = action.bound, _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AbstractScreen) {
        _inheritsLoose(ResourcesScreen, _AbstractScreen);
        function ResourcesScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractScreen.call.apply(_AbstractScreen, [this].concat(args)) || this;
          _this.routeName = ERouteName.Resources;
          _initializerDefineProperty(_this, "resourcesNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourcesWrapperTransform", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resourceCards", _descriptor3, _assertThisInitialized(_this));
          _this.disposeResourcesListen = void 0;
          return _this;
        }
        var _proto = ResourcesScreen.prototype;
        _proto.render = function render() {
          var _this2 = this,
            _this$resourceCards$,
            _this$resourceCards$2;
          this.resourcesNode.removeAllChildren();
          var resources = state.resourcesState.resources;
          this.resourceCards = Object.entries(resources).sort(function (_ref, _ref2) {
            var a = _ref[1];
            var b = _ref2[1];
            return a - b;
          }).map(function (_ref3) {
            var resource = _ref3[0],
              count = _ref3[1];
            var card = factoryTemplateComponent(ResourceCard, _this2.resourcesNode, {
              resource: resource,
              count: count
            });
            return card;
          });
          var dimension = (_this$resourceCards$ = (_this$resourceCards$2 = this.resourceCards[0].node.getComponent(UITransform)) == null ? void 0 : _this$resourceCards$2.height) != null ? _this$resourceCards$ : DEFAULT_CARD_HEIGHT;
          this.resourcesWrapperTransform.height = Math.ceil(this.resourceCards.length / Math.floor(this.resourcesWrapperTransform.width / dimension)) * dimension + PADDING_DIFF;
        };
        _proto.onCancelClick = function onCancelClick() {
          var isNavigated = router.navigateBack();
          if (!isNavigated) {
            router.navigate(ERouteName.World);
          }
        };
        return ResourcesScreen;
      }(AbstractScreen), _class3.template = 'ResourcesScreen', _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resourcesNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resourcesWrapperTransform", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resourceCards", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "render", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "render"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesStart.ts", ['cc', './EResource.ts'], function (exports) {
  var cclegacy, EResource;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EResource = module.EResource;
    }],
    execute: function () {
      var _ResourcesStart;
      cclegacy._RF.push({}, "39720JDHZJK06YVKw8zR2I7", "ResourcesStart", undefined);
      var ResourcesStart = exports('ResourcesStart', (_ResourcesStart = {}, _ResourcesStart[EResource.Log] = 0, _ResourcesStart));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesStart.ts', './AbstractState.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _extends, _createForOfIteratorHelperLoose, cclegacy, ResourcesStart, AbstractState, computed;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ResourcesStart = module.ResourcesStart;
    }, function (module) {
      AbstractState = module.AbstractState;
    }, function (module) {
      computed = module.computed;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "2788dJAq2lBK7a6STE8GVJ9", "ResourcesState", undefined);
      var ResourcesState = exports('ResourcesState', (_class = /*#__PURE__*/function (_AbstractState) {
        _inheritsLoose(ResourcesState, _AbstractState);
        function ResourcesState() {
          return _AbstractState.apply(this, arguments) || this;
        }
        var _proto = ResourcesState.prototype;
        _proto.serialize = function serialize() {
          return {};
        };
        _proto.initialize = function initialize(data) {
          return _AbstractState.prototype.initialize.call(this, data);
        };
        _createClass(ResourcesState, [{
          key: "resources",
          get: function get() {
            var resources = _extends({}, ResourcesStart);
            var applyReasons = function applyReasons(reasons) {
              for (var _iterator = _createForOfIteratorHelperLoose(reasons), _step; !(_step = _iterator()).done;) {
                var _step$value = _step.value,
                  resource = _step$value[0],
                  value = _step$value[1];
                resources[resource] = (resources[resource] || 0) + value;
              }
            };
            applyReasons(this.resourcesFromBuildings);
            applyReasons(this.priceFromBuildQueue);
            return resources;
          }
        }, {
          key: "resourcesFromBuildings",
          get: function get() {
            var worldState = this.state.worldState;
            return worldState.activeBuildings.reduce(function (result, building) {
              var buildingDb = building.buildingDb;
              for (var _i = 0, _Object$entries = Object.entries(buildingDb.resources); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _Object$entries[_i],
                  resource = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];
                result.push([resource, value]);
              }
              return result;
            }, []);
          }
        }, {
          key: "priceFromBuildQueue",
          get: function get() {
            var worldState = this.state.worldState;
            return worldState.buildQueue.reduce(function (result, building) {
              var buildingDb = building.buildingDb;
              for (var _i2 = 0, _Object$entries2 = Object.entries(buildingDb.buildOptions.price); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _Object$entries2[_i2],
                  resource = _Object$entries2$_i[0],
                  value = _Object$entries2$_i[1];
                result.push([resource, value]);
              }
              return result;
            }, []);
          }
        }]);
        return ResourcesState;
      }(AbstractState), (_applyDecoratedDescriptor(_class.prototype, "resources", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "resources"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resourcesFromBuildings", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "resourcesFromBuildings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "priceFromBuildQueue", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "priceFromBuildQueue"), _class.prototype)), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/router.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './WorldRoute.ts', './PauseRoute.ts', './ERouteName.ts', './BuildRoute.ts', './ResourcesRoute.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, cclegacy, computed, action, observable, makeObservable, WorldRoute, PauseRoute, ERouteName, BuildRoute, ResourcesRoute;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      computed = module.computed;
      action = module.action;
      observable = module.observable;
      makeObservable = module.makeObservable;
    }, function (module) {
      WorldRoute = module.WorldRoute;
    }, function (module) {
      PauseRoute = module.PauseRoute;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      BuildRoute = module.BuildRoute;
    }, function (module) {
      ResourcesRoute = module.ResourcesRoute;
    }],
    execute: function () {
      var _routes, _class, _descriptor;
      cclegacy._RF.push({}, "cd7f6FLaQ5EZp22cx6hRl3m", "router", undefined);
      var MAX_HISTORY_LENGTH = 10;
      var NAVIGATION_DEBOUNCE = 200;
      var routes = (_routes = {}, _routes[ERouteName.World] = WorldRoute, _routes[ERouteName.Pause] = PauseRoute, _routes[ERouteName.Build] = BuildRoute, _routes[ERouteName.Resources] = ResourcesRoute, _routes);
      var Router = (_class = /*#__PURE__*/function () {
        function Router() {
          this.history = [{
            route: ERouteName.Pause
          }];
          // default route is Pause
          _initializerDefineProperty(this, "route", _descriptor, this);
          this.navigateTimeout = null;
          makeObservable(this);
        }
        var _proto = Router.prototype;
        _proto.navigate = function navigate(route, options, navigateOptions) {
          var _this = this;
          if (this.navigateTimeout) {
            clearTimeout(this.navigateTimeout);
            this.navigateTimeout = null;
          }
          this.navigateTimeout = setTimeout(action(function () {
            if (!(navigateOptions != null && navigateOptions.back) && _this.history.length) {
              _this.history[_this.history.length - 1].options = _this.route.serialize();
            }
            _this.route.destroy();
            var Route = routes[route];
            _this.route = new Route().initialize(options);
            if (navigateOptions != null && navigateOptions.back) {
              _this.history.pop();
            } else {
              var historyLength = _this.history.push({
                route: route,
                options: options
              });
              if (historyLength > MAX_HISTORY_LENGTH) {
                _this.history = _this.history.slice(MAX_HISTORY_LENGTH - historyLength);
              }
            }
            _this.navigateTimeout = null;
          }), NAVIGATION_DEBOUNCE);
        };
        _proto.navigateBack = function navigateBack() {
          var record = this.history[this.history.length - 2];
          if (!record) {
            return false;
          }
          this.navigate(record.route, record.options, {
            back: true
          });
          return true;
        };
        _proto.getRoute = function getRoute(name) {
          if (this.routeName === name) {
            return this.route;
          }
          return null;
        };
        _createClass(Router, [{
          key: "routeName",
          get: function get() {
            return this.route.name;
          }
        }]);
        return Router;
      }(), (_applyDecoratedDescriptor(_class.prototype, "routeName", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "routeName"), _class.prototype), _descriptor = _applyDecoratedDescriptor(_class.prototype, "route", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new PauseRoute().initialize({
            isIntro: true
          });
        }
      })), _class);
      var router = exports('router', new Router());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Semaphore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b78d7MwyNxMSZbwrO+yQgqH", "Semaphore", undefined);
      var Semaphore = exports('Semaphore', /*#__PURE__*/function () {
        function Semaphore(maxConcurrency) {
          if (maxConcurrency === void 0) {
            maxConcurrency = 1;
          }
          this.maxConcurrency = void 0;
          this.currentConcurrency = 0;
          this.queue = [];
          this.maxConcurrency = maxConcurrency;
        }
        var _proto = Semaphore.prototype;
        _proto.acquire = /*#__PURE__*/function () {
          var _acquire = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.currentConcurrency < this.maxConcurrency)) {
                    _context.next = 3;
                    break;
                  }
                  this.currentConcurrency++;
                  return _context.abrupt("return");
                case 3:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    _this.queue.push(resolve);
                  }));
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function acquire() {
            return _acquire.apply(this, arguments);
          }
          return acquire;
        }();
        _proto.release = function release() {
          this.currentConcurrency--;
          if (this.queue.length > 0) {
            var resolve = this.queue.shift();
            this.currentConcurrency++;
            resolve == null || resolve();
          }
        };
        _proto.execute = /*#__PURE__*/function () {
          var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(task) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.acquire();
                case 2:
                  _context2.prev = 2;
                  _context2.next = 5;
                  return task();
                case 5:
                  return _context2.abrupt("return", _context2.sent);
                case 6:
                  _context2.prev = 6;
                  this.release();
                  return _context2.finish(6);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[2,, 6, 9]]);
          }));
          function execute(_x) {
            return _execute.apply(this, arguments);
          }
          return execute;
        }();
        return Semaphore;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/setNodeLayer.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('setNodeLayer', setNodeLayer);
      cclegacy._RF.push({}, "49987ASMhxHGZnKzrX53ol6", "setNodeLayer", undefined);
      function setNodeLayer(node, layer, _temp) {
        var _ref = _temp === void 0 ? {} : _temp,
          _ref$deep = _ref.deep,
          deep = _ref$deep === void 0 ? true : _ref$deep;
        node.layer = layer;
        if (deep) {
          node.children.forEach(function (node) {
            return setNodeLayer(node, layer, {
              deep: deep
            });
          });
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/sortCoords.ts", ['cc', './consts5.ts'], function (exports) {
  var cclegacy, Vec3, WORLD_CENTER;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      WORLD_CENTER = module.WORLD_CENTER;
    }],
    execute: function () {
      exports('sortCoords', sortCoords);
      cclegacy._RF.push({}, "b913aYAJ/lCPp1Kx/1Sf0+4", "sortCoords", undefined);
      function sortCoords(coords) {
        return coords.slice().sort(function (a, b) {
          return Vec3.distance(a, WORLD_CENTER) - Vec3.distance(b, WORLD_CENTER);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/state.ts", ['cc', './GameState.ts'], function (exports) {
  var cclegacy, GameState;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameState = module.GameState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2bb2gDJwtCQocFL1Q2wDn1", "state", undefined);
      var state = exports('state', new GameState({
        turnState: {},
        worldState: {},
        resourcesState: {}
      }));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TBiomeSizeMap.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1cf90uVo1J0pRS4jT/0bHH", "TBiomeSizeMap", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TComponentClass.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5fa36jCB6xJUb3JUljtacKZ", "TComponentClass", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TemplateComponent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44164HayQ9Mkr90Vh6cFnsP", "TemplateComponent", undefined);
      var TemplateComponent = exports('TemplateComponent', function TemplateComponent() {});
      TemplateComponent.template = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TGenerator.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d0d6ysnOhGyKU17zcJ0pPO", "TGenerator", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './BiomeObject.ts', './BiomeTile.ts', './biomeTiles.ts', './Building.ts', './TileTest.ts', './consts9.ts', './Observer.ts', './factoryComponent.ts', './cached.ts', './cocos.ts', './getBuildRoute.ts', './toVec3.ts', './BuildingPreview.ts', './state.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Vec3, action, computed, observable, BiomeObject, BiomeTile, biomeTiles, Building, TileTest, TILE_HEIGHT_MULTIPLIER, Observer, factoryComponent, cached, ccclass, getBuildRoute, toVec3, BuildingPreview, state;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }, function (module) {
      BiomeObject = module.BiomeObject;
    }, function (module) {
      BiomeTile = module.BiomeTile;
    }, function (module) {
      biomeTiles = module.biomeTiles;
    }, function (module) {
      Building = module.Building;
    }, function (module) {
      TileTest = module.TileTest;
    }, function (module) {
      TILE_HEIGHT_MULTIPLIER = module.TILE_HEIGHT_MULTIPLIER;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      getBuildRoute = module.getBuildRoute;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      BuildingPreview = module.BuildingPreview;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "493fbN2t0ZDeaQ+Cfxxi1J2", "Tile", undefined);
      var Tile = exports('Tile', (_dec = ccclass('Tile'), _dec2 = action.bound, _dec3 = action.bound, _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Tile, _Observer);
        function Tile() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.hex = void 0;
          _this.chunk = void 0;
          _initializerDefineProperty(_this, "data", _descriptor, _assertThisInitialized(_this));
          _this.tileTest = void 0;
          _this.biomeTile = void 0;
          _this.buildingPreview = void 0;
          _this.building = void 0;
          _this.biomeObject = void 0;
          return _this;
        }
        var _proto = Tile.prototype;
        _proto.initialize = function initialize(_ref) {
          var coords = _ref.coords,
            chunk = _ref.chunk,
            data = _ref.data;
          var tilesMap = state.worldState.tilesMap;
          this.chunk = chunk;
          this.data = data;
          this.hex = tilesMap.add(coords, this);
        };
        _proto.onTap = function onTap() {
          var _this$tileTest;
          if ((_this$tileTest = this.tileTest) != null && _this$tileTest.isActive) {
            var route = getBuildRoute();
            if (route) {
              route.buildingCoords = toVec3(this.data.coords);
            }
            return;
          }
          if (this.previewBuilding) {
            var _route = getBuildRoute();
            if (_route) {
              _route.buildingRotate = ((_route.buildingRotate || 0) + 60) % 360;
            }
            return;
          }
        };
        _proto.renderBiomeTile = function renderBiomeTile() {
          var props = {
            tile: this,
            data: this.data.biomeTile,
            onTap: this.onTap
          };
          if (this.biomeTile && !(this.biomeTile instanceof this.biomeTileComponent)) {
            this.biomeTile.node.destroy();
            this.biomeTile = undefined;
          }
          if (!this.biomeTile) {
            this.biomeTile = factoryComponent(this.biomeTileComponent, this.node, props);
          } else {
            this.biomeTile.initialize(props);
          }
        };
        _proto.renderBuildingPreview = function renderBuildingPreview() {
          if (this.previewBuilding) {
            var props = {
              tile: this,
              onTap: this.onTap,
              data: this.previewBuilding
            };
            if (!this.buildingPreview) {
              this.buildingPreview = factoryComponent(BuildingPreview, this.node, props);
            } else {
              this.buildingPreview.initialize(props);
            }
          } else {
            if (this.buildingPreview) {
              this.buildingPreview.node.destroy();
              this.buildingPreview = undefined;
            }
          }
        };
        _proto.renderBuilding = function renderBuilding() {
          if (this.data.building) {
            var props = {
              data: this.data.building,
              tile: this,
              onTap: this.onTap
            };
            if (!this.building) {
              this.building = factoryComponent(Building, this.node, props);
            } else {
              this.building.initialize(props);
            }
          } else {
            if (this.building) {
              this.building.node.destroy();
              this.building = undefined;
            }
          }
        };
        _proto.renderBiomeObject = function renderBiomeObject() {
          if (this.data.biomeObject) {
            var props = {
              data: this.data.biomeObject,
              tile: this,
              onTap: this.onTap
            };
            if (!this.biomeObject) {
              this.biomeObject = factoryComponent(BiomeObject, this.node, props);
            } else {
              this.biomeObject.initialize(props);
            }
          } else {
            if (this.biomeObject) {
              this.biomeObject.node.destroy();
              this.biomeObject = undefined;
            }
          }
        };
        _proto.renderTileTest = function renderTileTest() {
          if (!this.tileTest) {
            this.tileTest = factoryComponent(TileTest, this.node, {
              tile: this
            });
          }
        };
        _proto.render = function render() {
          this.renderBiomeTile();
          this.renderBuildingPreview();
          this.renderBuilding();
          this.renderBiomeObject();
          this.renderTileTest();
        };
        _proto.onLoad = function onLoad() {
          this.node.setWorldPosition(new Vec3(this.hex.positionX, 0, this.hex.positionZ));
        };
        _createClass(Tile, [{
          key: "neighborsTiles",
          get: function get() {
            return this.hex.neighbors.reduce(function (result, coords) {
              var tilesMap = state.worldState.tilesMap;
              var hex = tilesMap.get(coords);
              if (hex) {
                result.push(hex.self);
              }
              return result;
            }, []);
          }
        }, {
          key: "groundY",
          get: function get() {
            return this.data.height * TILE_HEIGHT_MULTIPLIER + 1;
          }
        }, {
          key: "biomeTileComponent",
          get: function get() {
            return this.data.biomeTile && biomeTiles[this.data.biomeTile.key] || BiomeTile;
          }
        }, {
          key: "previewBuilding",
          get: function get() {
            var route = getBuildRoute();
            if ((route == null ? void 0 : route.buildingTile) === this) {
              return route.buildingData;
            }
            return null;
          }
        }]);
        return Tile;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "neighborsTiles", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "neighborsTiles"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "groundY", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "groundY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "biomeTileComponent", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "biomeTileComponent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "previewBuilding", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "previewBuilding"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "initialize", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "initialize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onTap", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "onTap"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tileHasBiomeObjects.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('tileHasBiomeObjects', tileHasBiomeObjects);
      cclegacy._RF.push({}, "0e001ue/E5FBJ68aUNL6Yck", "tileHasBiomeObjects", undefined);
      function tileHasBiomeObjects(tile, biomes) {
        var data = tile.data;
        return data.biomeObject && biomes.includes(data.biomeObject.key);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tileHasBiomeTiles.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('tileHasBiomeTiles', tileHasBiomeTiles);
      cclegacy._RF.push({}, "7008bxWIIlIP5ww0a2MYRel", "tileHasBiomeTiles", undefined);
      function tileHasBiomeTiles(tile, biomes) {
        var data = tile.data;
        return data.biomeTile && biomes.includes(data.biomeTile.key);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tileNotWater.ts", ['cc', './EBiome.ts', './tileHasBiomeTiles.ts'], function (exports) {
  var cclegacy, EBiomeTile, tileHasBiomeTiles;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }, function (module) {
      tileHasBiomeTiles = module.tileHasBiomeTiles;
    }],
    execute: function () {
      exports('tileNotWater', tileNotWater);
      cclegacy._RF.push({}, "7ccd176oL1LrYej1Coco25P", "tileNotWater", undefined);
      function tileNotWater(tile) {
        return !tile.data.biomeTile || !tileHasBiomeTiles(tile, [EBiomeTile.River, EBiomeTile.Sea, EBiomeTile.Lake]);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Observer.ts', './createPrefabNode.ts', './cocos.ts', './assets.ts', './getBuildRoute.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, cclegacy, Vec3, computed, Observer, createPrefabNode, ccclass, assets, getBuildRoute;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      computed = module.computed;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      createPrefabNode = module.createPrefabNode;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      getBuildRoute = module.getBuildRoute;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "cc834UUq+1NL7rgW0QmvKdx", "TileTest", undefined);
      var SCALE = new Vec3(0.96, 1, 0.96);
      var TileTest = exports('TileTest', (_dec = ccclass('TileTest'), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(TileTest, _Observer);
        function TileTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.tile = void 0;
          _this.testNode = void 0;
          return _this;
        }
        var _proto = TileTest.prototype;
        _proto.initialize = function initialize(_ref) {
          var tile = _ref.tile;
          this.tile = tile;
        };
        _proto.render = function render() {
          if (this.testNode) {
            this.testNode.active = Boolean(this.isActive);
          }
        };
        _proto.onLoad = function onLoad() {
          var prefab = assets.getPrefabs('hex_plane');
          var material = assets.getMaterials('ui-white-50');
          this.testNode = createPrefabNode(prefab, {
            parent: this.node,
            materials: [material],
            scale: SCALE,
            position: new Vec3(0, this.tile.groundY + 0.01, 0)
          });
          this.testNode.active = false;
        };
        _createClass(TileTest, [{
          key: "isActive",
          get: function get() {
            var _page$buildingDb;
            var page = getBuildRoute();
            return Boolean(page && !page.buildingCoords && ((_page$buildingDb = page.buildingDb) == null || _page$buildingDb.tileTest == null ? void 0 : _page$buildingDb.tileTest(this.tile)));
          }
        }]);
        return TileTest;
      }(Observer), _applyDecoratedDescriptor(_class2.prototype, "isActive", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "isActive"), _class2.prototype), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tileWithoutObject.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('tileWithoutObject', tileWithoutObject);
      cclegacy._RF.push({}, "62332yzFVNH4aF/epqPWhLI", "tileWithoutObject", undefined);
      function tileWithoutObject(tile) {
        var data = tile.data;
        return !data.building && !data.biomeObject;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toCocosEnum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('toCocosEnum', toCocosEnum);
      cclegacy._RF.push({}, "97177ldb15AFrasqdQ5ZefK", "toCocosEnum", undefined);
      function toCocosEnum(enumValue) {
        var newEnum = {
          __enums__: []
        };
        Object.keys(enumValue).forEach(function (key) {
          var value = enumValue[key];
          newEnum[key] = value;
          newEnum.__enums__.push({
            name: key,
            value: value
          });
        });
        return newEnum;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toFixedNumber.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('toFixedNumber', toFixedNumber);
      cclegacy._RF.push({}, "1f71fpsU01PWoFgJzye25j0", "toFixedNumber", undefined);
      function toFixedNumber(num, digits, base) {
        if (base === void 0) {
          base = 10;
        }
        var pow = Math.pow(base, digits);
        return Math.round(num * pow) / pow;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toQuat.ts", ['cc'], function (exports) {
  var cclegacy, Quat;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Quat = module.Quat;
    }],
    execute: function () {
      exports('toQuat', toQuat);
      cclegacy._RF.push({}, "3cb4aS35J1C24RkXayQJiAc", "toQuat", undefined);
      function toQuat(rotation) {
        return Quat.fromEuler(new Quat(), rotation.x, rotation.y, rotation.z);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toVec3.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      exports('toVec3', toVec3);
      cclegacy._RF.push({}, "90f30yGi89GeIpUMRAlKT09", "toVec3", undefined);
      function toVec3(vec) {
        return new Vec3(vec.x, vec.y, vec.z);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './i18n.ts', './AbstractState.ts', './consts7.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, i18n, AbstractState, START_MONTH, YEAR_LENGTH, START_YEAR, MONTHS, action, computed, observable;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      i18n = module.i18n;
    }, function (module) {
      AbstractState = module.AbstractState;
    }, function (module) {
      START_MONTH = module.START_MONTH;
      YEAR_LENGTH = module.YEAR_LENGTH;
      START_YEAR = module.START_YEAR;
      MONTHS = module.MONTHS;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      observable = module.observable;
    }],
    execute: function () {
      var _dec, _class, _descriptor;
      cclegacy._RF.push({}, "e2755MHcyJFeoI+ARdb1udd", "TurnState", undefined);
      var TurnState = exports('TurnState', (_dec = action.bound, (_class = /*#__PURE__*/function (_AbstractState) {
        _inheritsLoose(TurnState, _AbstractState);
        function TurnState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractState.call.apply(_AbstractState, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "turn", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TurnState.prototype;
        _proto.initialize = function initialize(data) {
          var turn = data.turn;
          if (turn !== undefined) {
            this.turn = turn;
          }
          return _AbstractState.prototype.initialize.call(this, data);
        };
        _proto.serialize = function serialize() {
          return {
            turn: this.turn
          };
        };
        _createClass(TurnState, [{
          key: "month",
          get: function get() {
            return (START_MONTH + this.turn) % YEAR_LENGTH;
          }
        }, {
          key: "year",
          get: function get() {
            return START_YEAR + Math.floor((START_MONTH + this.turn) / YEAR_LENGTH);
          }
        }, {
          key: "date",
          get: function get() {
            return i18n(MONTHS[this.month]) + " " + this.year;
          }
        }]);
        return TurnState;
      }(AbstractState), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "turn", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class.prototype, "month", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "month"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "year", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "year"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "date", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "date"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initialize", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype)), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Ui.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './cocos.ts', './listen.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, Node, Size, screen, view, ResolutionPolicy, Camera, Widget, sys, Observer, ccclass, property, listen;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Size = module.Size;
      screen = module.screen;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      Camera = module.Camera;
      Widget = module.Widget;
      sys = module.sys;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      listen = module.listen;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6e379eGpdlMtoiF6bV3YqAW", "Ui", undefined);
      var Ui = exports('Ui', (_dec = ccclass('Ui'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Ui, _Observer);
        function Ui() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "padding", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));
          _this.disposeListenResolution = void 0;
          _this.size = new Size(720, 1600);
          return _this;
        }
        var _proto = Ui.prototype;
        _proto.__preload = function __preload() {
          var _this2 = this;
          this.updateResolution();
          this.disposeListenResolution = listen(function () {
            screen.on('window-resize', _this2.updateResolution, _this2);
            return function () {
              screen.off('window-resize', _this2.updateResolution, _this2);
            };
          });
          this.updateSafearea();
          _Observer.prototype.__preload.call(this);
        };
        _proto.updateResolution = function updateResolution() {
          var realSize = screen.windowSize;
          var ratio = realSize.height / realSize.width;
          var width = ratio > 1 ? this.size.width : Math.max(realSize.width, this.size.width);
          var newSize = [width, Math.round(width * ratio)];
          view.setDesignResolutionSize(newSize[0], newSize[1], ResolutionPolicy.FIXED_WIDTH);
          var cameras = this.getComponentsInChildren(Camera);
          for (var _iterator = _createForOfIteratorHelperLoose(cameras), _step; !(_step = _iterator()).done;) {
            var camera = _step.value;
            camera.orthoHeight = newSize[1] / 2;
            if (camera.targetTexture) {
              camera.targetTexture.reset({
                width: newSize[0],
                height: newSize[1]
              });
            }
          }
        };
        _proto.updateSafearea = function updateSafearea() {
          var _this$contentNode;
          var widget = (_this$contentNode = this.contentNode) == null ? void 0 : _this$contentNode.getComponent(Widget);
          if (widget) {
            var safeArea = sys.getSafeAreaRect();
            var _view$getVisibleSize = view.getVisibleSize(),
              screenWidth = _view$getVisibleSize.width,
              screenHeight = _view$getVisibleSize.height;
            widget.top = this.padding + (Math.floor(screenHeight - safeArea.y - safeArea.height) || this.padding);
            widget.bottom = this.padding + (safeArea.y || this.padding);
            widget.left = this.padding + (safeArea.x || this.padding);
            widget.right = this.padding + (Math.floor(screenWidth - safeArea.x - safeArea.width) || this.padding);
            widget.updateAlignment();
          }
        };
        return Ui;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "padding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Ui3D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './consts6.ts', './DiWorld.ts', './Observer.ts', './EEventName.ts', './ELayer.ts', './bound.ts', './cocos.ts', './assets.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Vec3, Vec2, tween, SpriteRenderer, BoxCollider, BUTTON_TRANSITION_TIME, BUTTON_TRANSITION_SCALE, DiWorld, Observer, EEventName, ELayer, bound, ccclass, property, assets, observable, action, computed, reaction, autorun;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      tween = module.tween;
      SpriteRenderer = module.SpriteRenderer;
      BoxCollider = module.BoxCollider;
    }, function (module) {
      BUTTON_TRANSITION_TIME = module.BUTTON_TRANSITION_TIME;
      BUTTON_TRANSITION_SCALE = module.BUTTON_TRANSITION_SCALE;
    }, function (module) {
      DiWorld = module.DiWorld;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      EEventName = module.EEventName;
    }, function (module) {
      ELayer = module.ELayer;
    }, function (module) {
      bound = module.bound;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      assets = module.assets;
    }, function (module) {
      observable = module.observable;
      action = module.action;
      computed = module.computed;
      reaction = module.reaction;
      autorun = module.autorun;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "75cc9pVJktEkJNm8ZtaVkcp", "Ui3D", undefined);
      var Ui3D = exports('Ui3D', (_dec = ccclass('Ui3D'), _dec2 = property(Vec3), _dec3 = observable.ref, _dec4 = property(Vec3), _dec5 = observable.ref, _dec6 = action.bound, _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(Ui3D, _Observer);
        function Ui3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "position", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotation", _descriptor3, _assertThisInitialized(_this));
          _this.onTap = void 0;
          _this.spriteSize = void 0;
          _this.spriteRenderer = void 0;
          _this.collider = void 0;
          _this.disposeTweenScale = null;
          _this.disposeSpriteChange = void 0;
          _this.disposeCameraListen = void 0;
          return _this;
        }
        var _proto = Ui3D.prototype;
        _proto.getSpriteSize = function getSpriteSize() {
          var _this$spriteRenderer$;
          var result = new Vec2();
          var bounds = (_this$spriteRenderer$ = this.spriteRenderer.model) == null ? void 0 : _this$spriteRenderer$.worldBounds;
          if (bounds) {
            var minVec = new Vec3();
            var maxVec = new Vec3();
            bounds.getBoundary(minVec, maxVec);
            Vec2.subtract(result, new Vec2(maxVec.x, maxVec.y), new Vec2(minVec.x, minVec.y));
          }
          return result;
        };
        _proto.initialize = function initialize(_ref) {
          var sprite = _ref.sprite,
            onTap = _ref.onTap,
            position = _ref.position,
            rotation = _ref.rotation;
          this.sprite = sprite;
          this.onTap = onTap;
          this.position = position;
          this.rotation = rotation;
        };
        _proto.onClick = function onClick(event) {
          var _this$disposeTweenSca,
            _this2 = this,
            _this$onTap;
          (_this$disposeTweenSca = this.disposeTweenScale) == null || _this$disposeTweenSca.call(this);
          var scale = this.node.scale;
          var tweenScale = tween(this.node).to(BUTTON_TRANSITION_TIME, {
            scale: scale.clone().multiplyScalar(BUTTON_TRANSITION_SCALE)
          }).to(BUTTON_TRANSITION_TIME, {
            scale: scale.clone()
          }).call(function () {
            _this2.disposeTweenScale = null;
          }).start();
          this.disposeTweenScale = function () {
            tweenScale.stop();
            _this2.disposeTweenScale = null;
            _this2.node.setScale(scale.clone());
          };
          (_this$onTap = this.onTap) == null || _this$onTap.call(this, event);
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          var spriteMaterial = assets.getMaterials('ui-sprite');
          this.spriteRenderer = this.node.addComponent(SpriteRenderer);
          this.spriteRenderer.setSharedMaterial(spriteMaterial, 0);
          this.spriteRenderer.spriteFrame = this.spriteFrame;
          this.spriteSize = this.getSpriteSize();
          this.collider = this.node.addComponent(BoxCollider);
          this.collider.size = new Vec3(this.spriteSize.x, this.spriteSize.y, 0.01);
          this.collider.isTrigger = true;
          this.node.layer = ELayer.UI_3D;
          this.node.on(EEventName.Tap, this.onClick);
          this.disposeSpriteChange = reaction(function () {
            return _this3.spriteFrame;
          }, function (spriteFrame) {
            var rotation = _this3.node.eulerAngles.clone();
            _this3.node.setRotationFromEuler(new Vec3(0, 0, 0));
            _this3.spriteRenderer.spriteFrame = spriteFrame;
            _this3.spriteSize = _this3.getSpriteSize();
            _this3.collider.size = new Vec3(_this3.spriteSize.x, _this3.spriteSize.y, 0.01);
            _this3.node.setRotationFromEuler(rotation);
          });
          this.disposeCameraListen = autorun(function () {
            var _camera$cameraRotatio, _camera$targetRotatio, _camera$targetRotatio2;
            if (_this3.rotation) {
              return;
            }
            var camera = DiWorld.worldCamera;
            _this3.node.setRotationFromEuler(new Vec3(((_camera$cameraRotatio = camera.cameraRotation) == null ? void 0 : _camera$cameraRotatio.x) || 0, ((_camera$targetRotatio = camera.targetRotation) == null ? void 0 : _camera$targetRotatio.y) || 0, ((_camera$targetRotatio2 = camera.targetRotation) == null ? void 0 : _camera$targetRotatio2.z) || 0));
          });
        };
        _proto.render = function render() {
          if (this.position) {
            var _this$spriteSize;
            this.node.setPosition(!this.rotation ? this.position.clone().add3f(0, (((_this$spriteSize = this.spriteSize) == null ? void 0 : _this$spriteSize.y) || 0) * 0.75, 0) : this.position);
          }
          if (this.rotation) {
            this.node.setRotationFromEuler(this.rotation);
          }
        };
        _createClass(Ui3D, [{
          key: "spriteFrame",
          get: function get() {
            return assets.getSprites(this.sprite);
          }
        }]);
        return Ui3D;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [property, observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec2, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec4, _dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "initialize", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "initialize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClick", [bound], Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiActive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ComponentPath.ts', './Observer.ts', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, ComponentPath, Observer, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ComponentPath = module.ComponentPath;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "67c31KqBEVFk79EzylgIMTD", "UiActive", undefined);
      var UiActive = exports('UiActive', (_dec = ccclass('UiActive'), _dec2 = property(ComponentPath), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(UiActive, _Observer);
        function UiActive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isActive", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isReversed", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiActive.prototype;
        _proto.render = function render() {
          var isActive = Boolean(this.isActive.exec());
          if (this.isReversed) {
            isActive = !isActive;
          }
          this.node.active = isActive;
        };
        return UiActive;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isActive", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isReversed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiActiveAnimate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, tween, Observer, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "9c832uJtg9KyrQ9eDEJNRiz", "UiActiveAnimate", undefined);
      var UiActiveAnimate = exports('UiActiveAnimate', (_dec = ccclass('UiActiveAnimate'), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(UiActiveAnimate, _Observer);
        function UiActiveAnimate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "from", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "to", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delay", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiActiveAnimate.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.active = this.from;
          tween(this.node).delay(this.delay).to(this.duration, {}).call(function () {
            return _this2.node.active = _this2.to;
          }).start();
        };
        return UiActiveAnimate;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "from", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "to", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiBackground.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ELayer.ts', './factoryChildNode.ts', './factorySprite.ts', './cached.ts', './cocos.ts', './assets.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, SpriteFrame, Color, UITransform, Widget, Component, ELayer, factoryChildNode, factorySprite, cached, ccclass, property, assets;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
      UITransform = module.UITransform;
      Widget = module.Widget;
      Component = module.Component;
    }, function (module) {
      ELayer = module.ELayer;
    }, function (module) {
      factoryChildNode = module.factoryChildNode;
    }, function (module) {
      factorySprite = module.factorySprite;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      assets = module.assets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4489bY5gZVNGrIZkUi5M7ZU", "UiBackground", undefined);
      var UiBackground = exports('UiBackground', (_dec = ccclass('UiBackground'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Color), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiBackground, _Component);
        function UiBackground() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "startSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endSprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color", _descriptor3, _assertThisInitialized(_this));
          _this.width = void 0;
          _this.height = void 0;
          _initializerDefineProperty(_this, "isVertical", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "castShadow", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiBackground.prototype;
        _proto.addBackgroundChild = function addBackgroundChild(spriteFrame, options) {
          var isVertical = this.isVertical;
          var size = options.size,
            alignStart = options.alignStart,
            alignEnd = options.alignEnd;
          var node = factoryChildNode(this.node);
          var uiTransform = node.addComponent(UITransform);
          if (isVertical) {
            uiTransform.width = this.realWidth;
            uiTransform.height = size;
          } else {
            uiTransform.width = size;
            uiTransform.height = this.realHeight;
          }
          var widget = node.addComponent(Widget);
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
        };
        _proto.onLoad = function onLoad() {
          if (this.castShadow) {
            this.node.layer = ELayer.UI_2D_SHADOW_CAST;
          }
          if (!this.getComponent(Widget)) {
            var widget = this.node.addComponent(Widget);
            widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true;
            widget.left = widget.right = widget.bottom = widget.top = 0;
            widget.updateAlignment();
          }
          var center = assets.getSprites('BgPixel');
          var startSprite = this.startSprite,
            endSprite = this.endSprite,
            realWidth = this.realWidth,
            realHeight = this.realHeight,
            isVertical = this.isVertical;
          var startSize = isVertical ? startSprite.rect.height : startSprite.rect.width;
          var endSize = isVertical ? endSprite.rect.height : endSprite.rect.width;
          var realSize = isVertical ? realHeight : realWidth;
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
        };
        _proto.initialize = function initialize(props) {
          Object.assign(this, props);
        };
        _createClass(UiBackground, [{
          key: "uiTransform",
          get: function get() {
            return this.getComponent(UITransform);
          }
        }, {
          key: "realWidth",
          get: function get() {
            var _this$uiTransform;
            return ((_this$uiTransform = this.uiTransform) == null ? void 0 : _this$uiTransform.width) || this.width || 0;
          }
        }, {
          key: "realHeight",
          get: function get() {
            var _this$uiTransform2;
            return ((_this$uiTransform2 = this.uiTransform) == null ? void 0 : _this$uiTransform2.height) || this.height || 0;
          }
        }]);
        return UiBackground;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isVertical", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "castShadow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "uiTransform", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "uiTransform"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './i18n.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Label, ccclass, i18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      i18n = module.i18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "32daaQ63V1AqZ1vS/qU7Wuq", "UiLabel", undefined);
      var UiLabel = exports('UiLabel', (_dec = ccclass('UiLabel'), _dec(_class = /*#__PURE__*/function (_Label) {
        _inheritsLoose(UiLabel, _Label);
        function UiLabel() {
          return _Label.apply(this, arguments) || this;
        }
        _createClass(UiLabel, [{
          key: "string",
          get: function get() {
            return i18n(this._string);
          },
          set: function set(value) {
            var _Object$getOwnPropert;
            var set = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(Label.prototype, 'string')) == null ? void 0 : _Object$getOwnPropert.set;
            set == null || set.call(this, value);
          }
        }]);
        return UiLabel;
      }(Label)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiOpacityAnimate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './cached.ts', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, tween, UIOpacity, Observer, cached, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      cached = module.cached;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d2b4eWkCJpJ2qskHdYrlY3g", "UiOpacityAnimate", undefined);
      var UiOpacityAnimate = exports('UiOpacityAnimate', (_dec = ccclass('UiOpacityAnimate'), _dec2 = property({
        min: 0,
        max: 255
      }), _dec3 = property({
        min: 0,
        max: 255
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(UiOpacityAnimate, _Observer);
        function UiOpacityAnimate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "from", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "to", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delay", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "easing", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "once", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiOpacityAnimate.prototype;
        _proto.animate = function animate(value) {
          var _this$opacityComponen;
          if (((_this$opacityComponen = this.opacityComponent) == null ? void 0 : _this$opacityComponen.opacity) !== value) {
            return tween(this.opacityComponent).delay(this.delay).to(this.duration, {
              opacity: value
            }, {
              easing: this.easing
            });
          }
        };
        _proto.hide = function hide() {
          var _this2 = this;
          if (!this.once && this.opacityComponent) {
            var animate = this.animate(this.from);
            if (animate) {
              animate.call(function () {
                return _this2.node.active = false;
              }).start();
              return;
            }
          }
          this.node.active = false;
        };
        _proto.onLoad = function onLoad() {
          var _this$animate;
          (_this$animate = this.animate(this.to)) == null || _this$animate.start();
        };
        _proto.onEnable = function onEnable() {
          if (!this.once && this.opacityComponent) {
            var _this$animate2;
            (_this$animate2 = this.animate(this.to)) == null || _this$animate2.start();
          }
        };
        _proto.onDisable = function onDisable() {
          if (!this.once && this.opacityComponent) {
            this.opacityComponent.opacity = this.from;
          }
        };
        _createClass(UiOpacityAnimate, [{
          key: "opacityComponent",
          get: function get() {
            return this.getComponent(UIOpacity) || this.addComponent(UIOpacity);
          }
        }]);
        return UiOpacityAnimate;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "from", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "to", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "easing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'cubicIn';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "once", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "opacityComponent", [cached], Object.getOwnPropertyDescriptor(_class2.prototype, "opacityComponent"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiPositionAnimate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Observer.ts', './cocos.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Vec3, tween, Observer, ccclass, property;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c2d09LtA3lI+pD4vX6DRAmf", "UiPositionAnimate", undefined);
      var UiPositionAnimate = exports('UiPositionAnimate', (_dec = ccclass('UiPositionAnimate'), _dec2 = property(Vec3), _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(UiPositionAnimate, _Observer);
        function UiPositionAnimate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "by", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delay", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "easing", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiPositionAnimate.prototype;
        _proto.onLoad = function onLoad() {
          var pos = this.node.position.clone();
          this.node.setPosition(pos.clone().add(this.by));
          tween(this.node).to(this.duration, {
            position: pos
          }, {
            easing: this.easing
          }).start();
        };
        return UiPositionAnimate;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "by", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "easing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'cubicIn';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/updateNodeLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './waitForFrame.ts', './getAllComponents.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, Layout, Widget, waitForFrame, getAllComponents;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Layout = module.Layout;
      Widget = module.Widget;
    }, function (module) {
      waitForFrame = module.waitForFrame;
    }, function (module) {
      getAllComponents = module.getAllComponents;
    }],
    execute: function () {
      exports('updateNodeLayout', updateNodeLayout);
      cclegacy._RF.push({}, "8bc33f3mYpBbZKXXjYaS6k2", "updateNodeLayout", undefined);
      function updateNodeLayout(_x) {
        return _updateNodeLayout.apply(this, arguments);
      }
      function _updateNodeLayout() {
        _updateNodeLayout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(component) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return waitForFrame();
              case 2:
                if (!(!component.node || !component.node.activeInHierarchy)) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");
              case 4:
                getAllComponents(component.node, Layout).forEach(function (layout) {
                  return layout.updateLayout();
                });
                getAllComponents(component.node, Widget).forEach(function (widget) {
                  return widget.updateAlignment();
                });
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _updateNodeLayout.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wait.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('wait', wait);
      cclegacy._RF.push({}, "18235RRUXtFfo5tF1gtFCav", "wait", undefined);
      function wait(_x) {
        return _wait.apply(this, arguments);
      }
      function _wait() {
        _wait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(timeout) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, timeout);
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _wait.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/waitForFrame.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('waitForFrame', waitForFrame);
      cclegacy._RF.push({}, "9d957XNQnRFd7/Bzc9l9pxR", "waitForFrame", undefined);
      function waitForFrame(frames) {
        if (frames === void 0) {
          frames = 1;
        }
        return new Promise(function (resolve) {
          var count = frames;
          var onFrame = function onFrame() {
            count--;
            if (!count) {
              resolve();
            } else {
              requestAnimationFrame(onFrame);
            }
          };
          requestAnimationFrame(onFrame);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/waterTiles.ts", ['cc', './EBiome.ts'], function (exports) {
  var cclegacy, EBiomeTile;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EBiomeTile = module.EBiomeTile;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f9125pwMYRC77EjMgq7Vzms", "waterTiles", undefined);
      var waterTiles = exports('waterTiles', [EBiomeTile.Lake, EBiomeTile.Sea]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/World.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Chunk.ts', './consts5.ts', './generateWorldCenterChunk.ts', './Observer.ts', './factoryComponent.ts', './cocos.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Chunk, WORLD_CENTER, generateWorldCenterChunk, Observer, factoryComponent, ccclass;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Chunk = module.Chunk;
    }, function (module) {
      WORLD_CENTER = module.WORLD_CENTER;
    }, function (module) {
      generateWorldCenterChunk = module.generateWorldCenterChunk;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      factoryComponent = module.factoryComponent;
    }, function (module) {
      ccclass = module.ccclass;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "84a89e9iPxMErnCjRvaF7CE", "World", undefined);
      var World = exports('World', (_dec = ccclass('World'), _dec(_class = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(World, _Observer);
        function World() {
          return _Observer.apply(this, arguments) || this;
        }
        var _proto = World.prototype;
        _proto.onLoad = function onLoad() {
          var node = this.node;
          var centerChunk = generateWorldCenterChunk(WORLD_CENTER.clone());
          var chunk = factoryComponent(Chunk, node, {
            coords: WORLD_CENTER.clone(),
            data: centerChunk
          });
          chunk.draw();
        };
        return World;
      }(Observer)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './consts4.ts', './EMoveType.ts', './Observer.ts', './cocos.ts', './isNumber.ts', './listen.ts', './clamp.ts', './degreeToRadian.ts', './easeOutSine.ts', './fromQuat.ts', './fromVec3.ts', './fromVec3ToVec2.ts', './toFixedNumber.ts', './toVec3.ts', './state.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, Canvas, Camera, NodeEventType, UITransform, Vec2, PhysicsSystem, action, computed, runInAction, observable, MAX_TOUCH_SIZE, MOVE_DIVIDER, ZOOM_MOVE_INFLUENCE, FIXED_POSITION_LIMIT, LIMITS, IMPULSE_LENGTH, TAP_MAX_MOVED_TIMES, TAP_TIME, DOUBLE_TOUCH_TIME, DEFAULT_NAVIGATE_DURATION, IMPULSE_STRENGTH, IMPULSE_DURATION, ROTATE_SPEED, MOVE_SAFEZONE, FIXED_ROTATE_LIMIT, TARGET_ROTATE_OFFSET, CAMERA_POSITION_OFFSET, CAMERA_ROTATION_OFFSET, EMoveType, Observer, ccclass, property, isNumber, listen, clamp, degreeToRadian, easeOutSine, fromQuat, fromVec3, fromVec3ToVec2, toFixedNumber, toVec3, state;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Canvas = module.Canvas;
      Camera = module.Camera;
      NodeEventType = module.NodeEventType;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      action = module.action;
      computed = module.computed;
      runInAction = module.runInAction;
      observable = module.observable;
    }, function (module) {
      MAX_TOUCH_SIZE = module.MAX_TOUCH_SIZE;
      MOVE_DIVIDER = module.MOVE_DIVIDER;
      ZOOM_MOVE_INFLUENCE = module.ZOOM_MOVE_INFLUENCE;
      FIXED_POSITION_LIMIT = module.FIXED_POSITION_LIMIT;
      LIMITS = module.LIMITS;
      IMPULSE_LENGTH = module.IMPULSE_LENGTH;
      TAP_MAX_MOVED_TIMES = module.TAP_MAX_MOVED_TIMES;
      TAP_TIME = module.TAP_TIME;
      DOUBLE_TOUCH_TIME = module.DOUBLE_TOUCH_TIME;
      DEFAULT_NAVIGATE_DURATION = module.DEFAULT_NAVIGATE_DURATION;
      IMPULSE_STRENGTH = module.IMPULSE_STRENGTH;
      IMPULSE_DURATION = module.IMPULSE_DURATION;
      ROTATE_SPEED = module.ROTATE_SPEED;
      MOVE_SAFEZONE = module.MOVE_SAFEZONE;
      FIXED_ROTATE_LIMIT = module.FIXED_ROTATE_LIMIT;
      TARGET_ROTATE_OFFSET = module.TARGET_ROTATE_OFFSET;
      CAMERA_POSITION_OFFSET = module.CAMERA_POSITION_OFFSET;
      CAMERA_ROTATION_OFFSET = module.CAMERA_ROTATION_OFFSET;
    }, function (module) {
      EMoveType = module.EMoveType;
    }, function (module) {
      Observer = module.Observer;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      isNumber = module.isNumber;
    }, function (module) {
      listen = module.listen;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      degreeToRadian = module.degreeToRadian;
    }, function (module) {
      easeOutSine = module.easeOutSine;
    }, function (module) {
      fromQuat = module.fromQuat;
    }, function (module) {
      fromVec3 = module.fromVec3;
    }, function (module) {
      fromVec3ToVec2 = module.fromVec3ToVec2;
    }, function (module) {
      toFixedNumber = module.toFixedNumber;
    }, function (module) {
      toVec3 = module.toVec3;
    }, function (module) {
      state = module.state;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "33eaaIU0o5D8I0ctpi/Us/Q", "WorldCamera", undefined);
      var WorldCamera = exports('WorldCamera', (_dec = ccclass('WorldCamera'), _dec2 = property(Canvas), _dec3 = property(Camera), _dec4 = action.bound, _dec5 = action.bound, _dec6 = action.bound, _dec7 = action.bound, _dec8 = action.bound, _dec9 = action.bound, _dec10 = action.bound, _dec11 = action.bound, _dec12 = action.bound, _dec(_class = (_class2 = /*#__PURE__*/function (_Observer) {
        _inheritsLoose(WorldCamera, _Observer);
        function WorldCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Observer.call.apply(_Observer, [this].concat(args)) || this;
          _this.disposePageListen = void 0;
          _initializerDefineProperty(_this, "canvas", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));
          _this.touchSize = void 0;
          _this.movedTimes = 0;
          _this.raycastTimer = null;
          _initializerDefineProperty(_this, "touchCount", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchTimes", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchImpulse", _descriptor5, _assertThisInitialized(_this));
          _this.impulseDuration = 0;
          _initializerDefineProperty(_this, "targetPosition", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetInitRotation", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cameraInitPosition", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cameraInitRotation", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zooming", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotation", _descriptor11, _assertThisInitialized(_this));
          _this.navigateDuration = 0;
          _this.navigateFrom = null;
          _initializerDefineProperty(_this, "navigateTo", _descriptor12, _assertThisInitialized(_this));
          _this.disposeTouchListen = void 0;
          return _this;
        }
        var _proto = WorldCamera.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.init();
          this.disposeTouchListen = listen(function () {
            _this2.canvas.node.on(NodeEventType.TOUCH_START, _this2.onTouchStart);
            _this2.canvas.node.on(NodeEventType.TOUCH_MOVE, _this2.onTouchMove);
            _this2.canvas.node.on(NodeEventType.TOUCH_END, _this2.onTouchEnd);
            _this2.canvas.node.on(NodeEventType.TOUCH_CANCEL, _this2.onTouchEnd);
            return function () {
              _this2.canvas.node.off(NodeEventType.TOUCH_START, _this2.onTouchStart);
              _this2.canvas.node.off(NodeEventType.TOUCH_MOVE, _this2.onTouchMove);
              _this2.canvas.node.off(NodeEventType.TOUCH_END, _this2.onTouchEnd);
              _this2.canvas.node.off(NodeEventType.TOUCH_CANCEL, _this2.onTouchEnd);
            };
          });
        };
        _proto.init = function init() {
          this.initTarget();
          this.cameraInitPosition = fromVec3(this.camera.node.getPosition());
          this.cameraInitRotation = fromQuat(this.camera.node.getRotation());
          this.targetInitRotation = fromQuat(this.node.getRotation());
          var canvasDimensions = this.canvas.getComponent(UITransform);
          if (!canvasDimensions) {
            throw new Error('Passed bad canvas for WorldCamera');
          }
          this.touchSize = Math.min(canvasDimensions.width, canvasDimensions.height, MAX_TOUCH_SIZE);
        };
        _proto.initTarget = function initTarget() {
          this.targetPosition = fromVec3(this.node.getPosition());
        };
        _proto.parseMoveDelta = function parseMoveDelta(delta) {
          return delta / (this.touchSize / (MOVE_DIVIDER + ZOOM_MOVE_INFLUENCE * this.zooming));
        };
        _proto.move = function move(targetX, targetY) {
          var moveLimit = this.moveLimit,
            targetPosition = this.targetPosition;
          targetPosition.x = clamp(toFixedNumber(targetX, FIXED_POSITION_LIMIT), moveLimit.x);
          targetPosition.z = clamp(toFixedNumber(targetY, FIXED_POSITION_LIMIT), moveLimit.z);
        };
        _proto.moveBy = function moveBy(deltaX, deltaY) {
          var targetRotation = this.targetRotation,
            targetPosition = this.targetPosition;
          if (!targetRotation) {
            return;
          }
          var moveVec = new Vec2(deltaX, deltaY).rotate(degreeToRadian(-targetRotation.y));
          this.move(targetPosition.x + moveVec.x, targetPosition.z + moveVec.y);
        };
        _proto.zoom = function zoom(zooming) {
          this.zooming = clamp(zooming, LIMITS);
        };
        _proto.zoomBy = function zoomBy(delta) {
          this.zoom(this.zooming + delta);
        };
        _proto.rotate = function rotate(rotation) {
          this.rotation = rotation;
          if (this.rotation < LIMITS[0]) {
            this.rotation -= 2 * LIMITS[0];
          }
          if (this.rotation > LIMITS[1]) {
            this.rotation -= 2 * LIMITS[1];
          }
        };
        _proto.rotateBy = function rotateBy(delta) {
          this.rotate(this.rotation + delta);
        };
        _proto.onTouchStart = function onTouchStart(event) {
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
        };
        _proto.onTouchMove = function onTouchMove(event) {
          this.movedTimes += 1;
          var touches = event.getTouches();
          if (this.moveType === EMoveType.Default) {
            var move = touches[0];
            var delta = move.getDelta();
            var touchDelta = {
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
            var zoomA = touches[0],
              zoomB = touches[1];
            var locationA = zoomA.getLocation();
            var locationB = zoomB.getLocation();
            var prevLocationA = zoomA.getPreviousLocation();
            var prevLocationB = zoomB.getPreviousLocation();
            var distance = Vec2.distance(locationA, locationB);
            var prevDistance = Vec2.distance(prevLocationA, prevLocationB);
            var sub = locationA.y > locationB.y ? locationA.subtract(locationB) : locationB.subtract(locationA);
            var prevSub = prevLocationA.y > prevLocationB.y ? prevLocationA.subtract(prevLocationB) : prevLocationB.subtract(prevLocationA);
            var angle = sub.signAngle(prevSub);
            this.touchImpulse = false;
            var zoom = (prevDistance - distance) / this.touchSize;
            var rotate = angle / Math.PI;
            this.zoomBy(zoom);
            this.rotateBy(rotate);
          } else if (this.moveType === EMoveType.DoubleTouch) {
            var _move = touches[0];
            var _delta = _move.getDelta();
            this.touchImpulse = false;
            var _zoom = _delta.y / this.touchSize;
            var _rotate = -_delta.x / this.touchSize;
            if (Math.abs(_zoom) > Math.abs(_rotate)) {
              this.zoomBy(_zoom);
            } else {
              this.rotateBy(_rotate);
            }
          }
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          var _this3 = this;
          if (this.moveType === EMoveType.Rotate) {
            return;
          }
          this.touchCount = Math.max(0, event.getAllTouches().length);
          if (this.movedTimes <= TAP_MAX_MOVED_TIMES && this.touchTimes[1] && Date.now() - this.touchTimes[1] <= TAP_TIME) {
            var position = event.getLocation();
            this.raycastTimer = setTimeout(function () {
              _this3.raycast(position.x, position.y);
            }, DOUBLE_TOUCH_TIME);
          }
        };
        _proto.raycast = function raycast(x, y) {
          var outRay = this.camera.screenPointToRay(x, y);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            var hitPoint = raycastClosestResult.hitPoint,
              hitNormal = raycastClosestResult.hitNormal,
              collider = raycastClosestResult.collider,
              distance = raycastClosestResult.distance;
            collider.node.emit('tap', {
              hitPoint: hitPoint,
              hitNormal: hitNormal,
              distance: distance
            });
          }
        };
        _proto.navigate = function navigate(navigator) {
          this.navigateDuration = 0;
          this.navigateFrom = {
            rotation: this.rotation,
            zooming: this.zooming,
            position: fromVec3ToVec2(this.targetPosition)
          };
          this.navigateTo = navigator;
        };
        _proto.render = function render() {
          if (!this.moveType) {
            return;
          }
          var node = this.node,
            camera = this.camera,
            targetPosition = this.targetPosition,
            targetRotation = this.targetRotation,
            cameraPosition = this.cameraPosition,
            cameraRotation = this.cameraRotation;
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
        };
        _proto.update = function update(dt) {
          var _this4 = this;
          if (this.moveType === EMoveType.Navigate) {
            runInAction(function () {
              var navigateFrom = _this4.navigateFrom,
                navigateTo = _this4.navigateTo;
              if (navigateFrom && navigateTo) {
                _this4.navigateDuration += dt;
                var navigateProgress = _this4.navigateDuration / (navigateTo.time || DEFAULT_NAVIGATE_DURATION);
                var progress = easeOutSine(navigateProgress);
                var wrap = function wrap(fromValue, toValue) {
                  return fromValue + progress * (toValue - fromValue);
                };
                if (navigateTo.position && navigateFrom.position) {
                  _this4.move(wrap(navigateFrom.position.x, navigateTo.position.x), wrap(navigateFrom.position.y, navigateTo.position.y));
                }
                if (isNumber(navigateTo.rotation) && isNumber(navigateFrom.rotation)) {
                  _this4.rotate(wrap(navigateFrom.rotation, navigateTo.rotation));
                }
                if (isNumber(navigateTo.zooming) && isNumber(navigateFrom.zooming)) {
                  _this4.zoom(wrap(navigateFrom.zooming, navigateTo.zooming));
                }
              } else {
                _this4.navigateFrom = null;
                _this4.navigateTo = null;
                _this4.navigateDuration = 0;
              }
            });
          } else if (this.moveType === EMoveType.Impulse) {
            runInAction(function () {
              if (!_this4.touchImpulse) {
                return;
              }
              _this4.moveBy(IMPULSE_STRENGTH * _this4.touchImpulse.x, IMPULSE_STRENGTH * _this4.touchImpulse.y);
              if (_this4.impulseDuration >= IMPULSE_DURATION) {
                _this4.touchImpulse = null;
                _this4.impulseDuration = 0;
              } else {
                _this4.impulseDuration += dt;
                var impulseProgress = _this4.impulseDuration / IMPULSE_DURATION;
                var progress = 1 - easeOutSine(impulseProgress);
                _this4.touchImpulse.x *= progress;
                _this4.touchImpulse.y *= progress;
              }
            });
          } else if (this.moveType === EMoveType.Rotate) {
            this.rotateBy(dt / ROTATE_SPEED);
          }
        };
        _createClass(WorldCamera, [{
          key: "moveLimit",
          get: function get() {
            var chunksMap = state.worldState.chunksMap;
            return {
              x: [chunksMap.minX - MOVE_SAFEZONE, chunksMap.maxX + MOVE_SAFEZONE],
              z: [chunksMap.minZ - MOVE_SAFEZONE, chunksMap.maxZ + MOVE_SAFEZONE]
            };
          }
        }, {
          key: "moveType",
          get: function get() {
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
        }, {
          key: "targetRotation",
          get: function get() {
            var init = this.targetInitRotation;
            if (!init) {
              return null;
            }
            var delta = toFixedNumber(this.rotation * TARGET_ROTATE_OFFSET, FIXED_ROTATE_LIMIT);
            return {
              x: init.x,
              y: init.y + delta,
              z: init.z
            };
          }
        }, {
          key: "cameraPosition",
          get: function get() {
            var init = this.cameraInitPosition;
            if (!init) {
              return null;
            }
            var delta = toFixedNumber(this.zooming * CAMERA_POSITION_OFFSET, FIXED_POSITION_LIMIT);
            return {
              x: init.x,
              y: init.y + delta,
              z: init.z + delta
            };
          }
        }, {
          key: "cameraRotation",
          get: function get() {
            var init = this.cameraInitRotation;
            if (!init) {
              return null;
            }
            var delta = toFixedNumber(-this.zooming * CAMERA_ROTATION_OFFSET, FIXED_ROTATE_LIMIT);
            return {
              x: init.x + delta,
              y: init.y,
              z: init.z
            };
          }
        }]);
        return WorldCamera;
      }(Observer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "moveLimit", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "moveLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "moveType", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "moveType"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "touchCount", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touchTimes", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [null, null];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "touchImpulse", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetPosition", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {
            x: 0,
            y: 0,
            z: 0
          };
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cameraInitPosition", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cameraInitRotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "zooming", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rotation", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "navigateTo", [observable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "targetRotation", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "targetRotation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cameraPosition", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "cameraPosition"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cameraRotation", [computed], Object.getOwnPropertyDescriptor(_class2.prototype, "cameraRotation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "init", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "init"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "initTarget", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "initTarget"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "move", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "move"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "zoom", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "zoom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rotate", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "rotate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onTouchStart", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "onTouchStart"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onTouchMove", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "onTouchMove"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onTouchEnd", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "onTouchEnd"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "navigate", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "navigate"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldRoute.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WorldScreen.ts', './AbstractRoute.ts', './ERouteName.ts'], function (exports) {
  var _inheritsLoose, cclegacy, WorldScreen, AbstractRoute, ERouteName;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      WorldScreen = module.WorldScreen;
    }, function (module) {
      AbstractRoute = module.AbstractRoute;
    }, function (module) {
      ERouteName = module.ERouteName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "274e9fEFpBHxphBcC2DxifD", "WorldRoute", undefined);
      var WorldRoute = exports('WorldRoute', /*#__PURE__*/function (_AbstractRoute) {
        _inheritsLoose(WorldRoute, _AbstractRoute);
        function WorldRoute() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractRoute.call.apply(_AbstractRoute, [this].concat(args)) || this;
          _this.name = ERouteName.World;
          _this.screen = WorldScreen;
          return _this;
        }
        var _proto = WorldRoute.prototype;
        _proto.serialize = function serialize() {
          return {};
        };
        return WorldRoute;
      }(AbstractRoute));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './AbstractScreen.ts', './ERouteName.ts', './router.ts', './state.ts', './index.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, ccclass, AbstractScreen, ERouteName, router, state, action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ccclass = module.ccclass;
    }, function (module) {
      AbstractScreen = module.AbstractScreen;
    }, function (module) {
      ERouteName = module.ERouteName;
    }, function (module) {
      router = module.router;
    }, function (module) {
      state = module.state;
    }, function (module) {
      action = module.action;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _class3;
      cclegacy._RF.push({}, "fa173Vc259NOIofsPPDtmv4", "WorldScreen", undefined);
      var WorldScreen = exports('WorldScreen', (_dec = ccclass('WorldScreen'), _dec2 = action.bound, _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AbstractScreen) {
        _inheritsLoose(WorldScreen, _AbstractScreen);
        function WorldScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractScreen.call.apply(_AbstractScreen, [this].concat(args)) || this;
          _this.routeName = ERouteName.World;
          return _this;
        }
        var _proto = WorldScreen.prototype;
        _proto.onTurnClick = function onTurnClick() {
          state.turnState.turn++;
        };
        _proto.onPauseClick = function onPauseClick() {
          router.navigate(ERouteName.Pause);
        };
        _proto.onBuildClick = function onBuildClick() {
          router.navigate(ERouteName.Build);
        };
        _proto.onResourcesClick = function onResourcesClick() {
          router.navigate(ERouteName.Resources);
        };
        return WorldScreen;
      }(AbstractScreen), _class3.template = 'WorldScreen', _class3), _applyDecoratedDescriptor(_class2.prototype, "onTurnClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onTurnClick"), _class2.prototype), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractState.ts', './HexagonMap.ts', './HexagonTile.ts', './consts8.ts', './HexagonChunk.ts', './index.ts', './clamp.ts', './consts.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, AbstractState, HexagonMap, HexagonTile, HEX_OPTIONS, HexagonChunk, computed, reaction, action, clamp, BUILD_PROGRESS_LIMITS;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractState = module.AbstractState;
    }, function (module) {
      HexagonMap = module.HexagonMap;
    }, function (module) {
      HexagonTile = module.HexagonTile;
    }, function (module) {
      HEX_OPTIONS = module.HEX_OPTIONS;
    }, function (module) {
      HexagonChunk = module.HexagonChunk;
    }, function (module) {
      computed = module.computed;
      reaction = module.reaction;
      action = module.action;
    }, function (module) {
      clamp = module.clamp;
    }, function (module) {
      BUILD_PROGRESS_LIMITS = module.BUILD_PROGRESS_LIMITS;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "d3088ex/EpA9Kc8wVKG4vzk", "WorldState", undefined);
      var WorldState = exports('WorldState', (_class = /*#__PURE__*/function (_AbstractState) {
        _inheritsLoose(WorldState, _AbstractState);
        function WorldState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AbstractState.call.apply(_AbstractState, [this].concat(args)) || this;
          _this.chunksMap = new HexagonMap(HexagonChunk, HEX_OPTIONS);
          _this.tilesMap = new HexagonMap(HexagonTile, HEX_OPTIONS);
          _this.disposeTurnListen = reaction(function () {
            return _this.state.turnState.turn;
          }, action(function () {
            for (var _iterator = _createForOfIteratorHelperLoose(_this.buildQueue), _step; !(_step = _iterator()).done;) {
              var building = _step.value;
              var buildingData = building.buildingData,
                constructionSpeed = building.constructionSpeed;
              buildingData.progress = clamp(buildingData.progress + constructionSpeed, BUILD_PROGRESS_LIMITS);
            }
          }));
          return _this;
        }
        var _proto = WorldState.prototype;
        _proto.calculateBuildingsCount = function calculateBuildingsCount(buildings) {
          return buildings.reduce(function (result, building) {
            result[building.buildingKey] = (result[building.buildingKey] || 0) + 1;
            return result;
          }, {});
        };
        _proto.destroy = function destroy() {
          this.disposeTurnListen();
        };
        _proto.initialize = function initialize(data) {
          return _AbstractState.prototype.initialize.call(this, data);
        };
        _proto.serialize = function serialize() {
          return {};
        };
        _createClass(WorldState, [{
          key: "buildings",
          get: function get() {
            return this.tilesMap.values.reduce(function (result, hex) {
              var building = hex.self.building;
              if (building) {
                result.push(building);
              }
              return result;
            }, []);
          }
        }, {
          key: "buildQueue",
          get: function get() {
            return this.buildings.filter(function (_ref) {
              var isConstructing = _ref.isConstructing;
              return isConstructing;
            });
          }
        }, {
          key: "buildedBuildings",
          get: function get() {
            return this.buildings.filter(function (_ref2) {
              var isConstructing = _ref2.isConstructing;
              return !isConstructing;
            });
          }
        }, {
          key: "activeBuildings",
          get: function get() {
            return this.buildedBuildings.filter(function (_ref3) {
              var buildingData = _ref3.buildingData;
              return !buildingData.isDisabled;
            });
          }
        }, {
          key: "buildedCount",
          get: function get() {
            return this.calculateBuildingsCount(this.buildedBuildings);
          }
        }, {
          key: "buildQueueCount",
          get: function get() {
            return this.calculateBuildingsCount(this.buildQueue);
          }
        }]);
        return WorldState;
      }(AbstractState), (_applyDecoratedDescriptor(_class.prototype, "buildings", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildQueue", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildQueue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildedBuildings", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildedBuildings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "activeBuildings", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "activeBuildings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildedCount", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildedCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buildQueueCount", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "buildQueueCount"), _class.prototype)), _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldUi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocos.ts', './router.ts', './Ui.ts', './factoryTemplateComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Node, Component, ccclass, property, router, Ui, factoryTemplateComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ccclass = module.ccclass;
      property = module.property;
    }, function (module) {
      router = module.router;
    }, function (module) {
      Ui = module.Ui;
    }, function (module) {
      factoryTemplateComponent = module.factoryTemplateComponent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "1163aYwDaxNmInm7PfApb6R", "WorldUi", undefined);
      var WorldUi = exports('WorldUi', (_dec = ccclass('WorldUi'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Component), _dec(_class = (_class2 = /*#__PURE__*/function (_Ui) {
        _inheritsLoose(WorldUi, _Ui);
        function WorldUi() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Ui.call.apply(_Ui, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "overlayNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shadowNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headerNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bodyNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screen", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = WorldUi.prototype;
        _proto.updateUiOverlay = function updateUiOverlay() {
          this.overlayNode.active = router.route.hasUiOverlay;
        };
        _proto.updateUiHeader = function updateUiHeader() {
          this.headerNode.active = router.route.hasUiHeader;
        };
        _proto.updateUiBody = function updateUiBody() {
          var ScreenClass = router.route.screen;
          if (!this.screen || !(this.screen instanceof ScreenClass)) {
            var _this$screen;
            (_this$screen = this.screen) == null || _this$screen.node.destroy();
            this.screen = factoryTemplateComponent(ScreenClass, this.bodyNode, {});
          }
        };
        _proto.render = function render() {
          this.updateUiOverlay();
          this.updateUiHeader();
          this.updateUiBody();
        };
        return WorldUi;
      }(Ui), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "overlayNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shadowNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headerNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bodyNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "screen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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
//# sourceMappingURL=index.js.map