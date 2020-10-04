class Injector {
  constructor() {
    return this;
  }
  static dependencies = {};
  static addDepency = (dependency, key) => {
    this.dependencies[key] = dependency;
  };
  static getDependency = (key) => {
    return this.dependencies[key];
  };
}

module.exports = Injector;
