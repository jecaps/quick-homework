function Form({ setStatus }) {
  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setStatus(data.status);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      {/* <label htmlFor="status">Status: </label> */}
      <select name="status" id="status" className="">
        <option value="" hidden>
          -Choose Status-
        </option>
        <option value="Dead">Dead</option>
        <option value="Alive">Alive</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
