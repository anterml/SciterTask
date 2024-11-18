export default class TodoCreator extends Element {
  constructor(props) {
    super()
    this.props = props
  }

  componentDidMount() {
    document.$(".todos__btn-add").on("click", e => {
      const input = document.$(".todos__input")
      if (input.value) {
        this.props.addTodo(input.value)
        input.value = ""
      }
    })
  }

  render() {
    return (
      <div>
        <input
          class="todos__input"
          value=""
        />
        <button class="todos__btn-add">add todo</button>
      </div>
    )
  }
}
