const somethingWilHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Oops!");
    }
  });
};

somethingWilHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWilHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const err = new Error("Oops");
      reject(err);
    }
  });
};

somethingWilHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWilHappen(), somethingWilHappen2()])
  .then((response) => console.log("Array of results", response))
  .catch((err) => console.error(err));
