type StringOrNum = string | number;

type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet1 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};


