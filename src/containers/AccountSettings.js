import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AccountSettings.css";

export default class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="AccountSettings">
        <LinkContainer to="/account_settings/email">
          <LoaderButton
            block
            bsSize="large"
            text="Change Email"
          />
        </LinkContainer>
        <LinkContainer to="/account_settings/password">
          <LoaderButton
            block
            bsSize="large"
            text="Change Password"
          />
        </LinkContainer>
      </div>
    );
  }
}
