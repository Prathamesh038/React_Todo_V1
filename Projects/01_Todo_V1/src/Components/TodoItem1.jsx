function TodoItem1() {
    let todoName="Buy Milk";
    let todoDate="20/11/2025";
  return (
    <div class="container">
      <div class="row ps-row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
