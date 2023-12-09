let people =
  [
    {
      id: 1,
      name: "a-reznikov",
      age: 20,
      gender: "male",
    },
    {
      id: 2,
      name: "Hell-Cat",
      age: 5,
      gender: "male",
    },
    {
      id: 3,
      name: "Lqosl",
      age: 18,
      gender: "female",
    },
    {
      id: 4,
      name: "Insanusmokrassar",
      age: 100,
      gender: "male",
    }
  ]

export const getPeople = () => people;

export const getByID = (id) => people.find((person) => person.id === id);

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    gender
  }
  people.push(newPerson);
  return newPerson;
}

export const deletePerson = (id) => {
  const newPeopleList = people.filter((person) => person.id !== id)
  const isDeleted = newPeopleList.length !== people.length
  people = newPeopleList;
  return isDeleted;
}
