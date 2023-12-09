import { getPeople, getByID, addPerson, deletePerson } from "./db.js";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getByID(id),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    deletePerson: (_, { id }) => deletePerson(id),
  }
}

export default resolvers;