import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalWrapper = {
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    left: 0,
    top: 0,
    overflow: "auto",
    zIndex: 9999,
    opacity: 2
};

class Portal extends Component {
    componentDidMount = async () => {
        document.addEventListener("keydown", this.handleKeyPress);
        await this.setState({
            isLoading: false
        });
    };

    handleKeyPress = e => {
        if (e.keyCode === 27) {
            e.preventDefault();
            this.props.onCancel();
        }
    };
    handleModalContainerOuterClick = event => {
        let modal = document.getElementById("modalId");
        if (event.target === modal) {
            this.props.onCancel();
        }
    };

    componentWillUnmount() {
        document.body.classList.remove("modal-open");
        document.querySelector(".modal-backdrop") &&
            document.querySelector(".modal-backdrop").remove();
        document.body.style.overflow = null;
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    render() {
        document.body.classList.add("modal-open");
        return ReactDOM.createPortal(
            <div
                style={modalWrapper}
                id="testId"
                // onClick={e => this.handleModalContainerOuterClick(e)}
            >
                {this.props.body}
            </div>,
            document.querySelector("#commonModal")
        );
    }
}

export default Portal;