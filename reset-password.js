import React, { PureComponent } from "react";
class resetPasswordComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <link
          href="https://abs-0.twimg.com/login/password-reset.ef5620c0a0af23edaa5965591adf636e2e1669e4.css"
          rel="stylesheet"
        />
        <div className="ResponsiveLayout">
          <div className="TopNav">
            <div className="TopNav--container u-cf">
              <div class="Icon--logo u-pullLeft">
                <img
                  src={require("../../images/twitter.png")}
                  alt="twitter"
                  onClick={() => this.props.history.goBack()}
                />
              </div>
              <div className="TopNav-title u-pullLeft">
                <strong>Password Reset</strong>
              </div>
            </div>
          </div>
          <div className="PageContainer">
            <div className="Section">
              <div className="PageHeader Edge">
                Find your Simple Twitter Clone account
              </div>
              <p>Enter your email, phone number, or username.</p>

              <div className="Form">
                <input
                  type="text"
                  name="account_identifier"
                  className="Form-textbox Edge-textbox is-required is-validatedRemotely"
                  value=""
                  autofocus
                  autocorrect="off"
                  autocapitalize="off"
                />
                <span className="Form-message">
                  <span data-key="required">
                    We need this information to find your account.
                  </span>
                </span>
                <input
                  type="submit"
                  className="Button EdgeButton--primary EdgeButton"
                  onClick=""
                  value="Search"
                />
              </div>
              <div className="Section-footer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default resetPasswordComponent;
