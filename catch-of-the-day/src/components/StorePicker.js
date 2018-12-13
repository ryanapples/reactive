import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  formInput = React.createRef();

  // property is bound to the instance rather than nothing
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from the input
    const storeName = this.formInput.value.value;
    // 3. Change the page to /store/input-value
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.formInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
