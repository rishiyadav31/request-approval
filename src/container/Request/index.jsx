import React, { Component } from "react";
import Header from "../../components/Header";
import Notification from "../../components/Notofication";
import RequestBox from "../../components/RequestBox";
import "./index.css";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: false,
      loading: true,
      request: {},
      notification: {
        type: "Security Message",
        msg:
          "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus."
      }
    };
  }

  componentDidMount() {
    fetch("./data/request1.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ loading: false, request: result });
        },
        err => {
          this.setState({ loading: false, errors: err });
        }
      );
  }

  render() {
    const { request, notification, loading, errors } = this.state;
    if (errors) {
      return <h1 className="centered">{errors.message}</h1>;
    } else if (loading) {
      return <h1 className="centered">Loading...</h1>;
    } else {
      return (
        !this.state.loading && (
          <div className="container">
            <Header></Header>
            <Notification notification={notification}></Notification>
            <RequestBox request={request}></RequestBox>
          </div>
        )
      );
    }
  }
}

export default Request;
