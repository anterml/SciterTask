export const getRandomId = () => Math.random().toString(16).substring(2, 10)

export const initialData = [
  {
    id: getRandomId(),
    value: "todo1",
    complete: false,
  },
  {
    id: getRandomId(),
    value: "two",
    complete: false,
  },
  {
    id: getRandomId(),
    value: "three",
    complete: false,
  },
]
