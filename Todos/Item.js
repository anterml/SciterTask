export default function Todo({ todo: { value, id, complete } }) {
  return (
    <div
      class="todos__item"
      key={id}
    >
      <span
        class="todos__item__value"
        data-done={complete}
      >
        {value}
      </span>
      <button data-complete={id}>toggleComplete</button>
      <button data-remove={id}>remove</button>
    </div>
  )
}
