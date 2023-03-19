import React, { Component } from "react";
import "../styles/styles.css";

class EditFieldsButtons extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="editFieldButtons">
                <button
                    className="editFieldButtons"
                    type="button"
                    onClick={this.props.updateInfo}
                >
                    Enter
                </button>
                <button
                    onClick={this.props.cancelUpdate}
                    className="editFieldButtons"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        );
    }
}

export default EditFieldsButtons;
