const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const ageOldest = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : new Date().getFullYear() - oldest.yearOfBirth;
    const personAge = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;

    return ageOldest > personAge ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
