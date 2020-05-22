const createAnimals = (name, type) => {
  return {
    name,
    type,
    family: [],

    addFamily(member) {
      this.family.push(member)
    }
  };
};

const kongpowchicken = createAnimals('kongpowchicken', 'code');
const more = createAnimals('something else', 'code');