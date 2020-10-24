function createAgeAnalyzer() {
  const getUpperCamelCase = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };
  return {
    users: {},

    addUser(name, age) {
      this.users[getUpperCamelCase(name)] = age;
    },

    getAge(name, raiseError) {
      name = getUpperCamelCase(name);
      if (!this.users.hasOwnProperty(name)) {
        if (typeof raiseError === 'function') {
          throw raiseError(name);
        }
        throw new Error(`There is no user with name ${name}`);
      }
      return this.users[name];
    },

    meanAge() {
      if (Object.keys(this.users).length === 0) {
        throw new Error('There are no users stored yet');
      }
      const sum = Object.values(this.users).reduce((sum, current) => {
        return sum + Number(current);
      }, 0);
      return sum / Object.keys(this.users).length;
    },
  };
}

function createCamelCaseAgeAnalyzer() {
  const analyzer = createAgeAnalyzer();

  function toCamelCase(name) {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  }

  return {
    addUser(name, age) {
      analyzer.addUser(toCamelCase(name), age);
    },

    getAge(name) {
      return analyzer.getAge(
        toCamelCase(name),
        new Error(`There is no user with name ${name}`)
      );
    },

    meanAge: () => analyzer.meanAge(),
  };
}
