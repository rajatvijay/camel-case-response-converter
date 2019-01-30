// import camelCase from "lodash.camelcase";

const camelCase = a => a;

// Test data
var users = [
  {
    id: 1,
    na_me: "john",
    nest_ed: { id: 2, na_me: "carl" },
    arr: [1, 2, { id: 2, na_me: "carl" }]
  },
  { id: 2, name: "carl" },
  { id: 3, name: "sean" },
  { id: 4, name: "brad" },
  null,
  undefined,
  "a"
];

const convertArray = arr => arr.map(convertToCamelCase);

const convertHashMap = hashMap => {
  const convertedMap = {};
  for (var key in hashMap) {
    convertedMap[camelCase(key)] = convertToCamelCase(hashMap[key]);
  }
  return convertedMap;
};

function convertToCamelCase(data) {
  const objType = typeof data;

  if (Array.isArray(data)) {
    return convertArray(data);
  }

  if (objType === "object" && data !== null) {
    return convertHashMap(data);
  }

  return data;
}

console.log(convertToCamelCase(users));
