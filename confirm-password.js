import React, { PureComponent } from "react";
class confirmpasswordComponent extends PureComponent {
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
        <div className="ResponsiveLayout ">
          <div className="TopNav">
            <div className="TopNav--container u-cf">
              <div className="Icon--logo u-pullLeft">
                <img
                  src={require("../../images/twitter.png")}
                  alt="twitter"
                  onClick={() => this.props.history.goBack()}
                />{" "}
              </div>
              <div className="TopNav-title u-pullLeft">Password Reset</div>
            </div>
          </div>
          <div className="PageContainer">
            <div className="Section">
              <div className="PageHeader Edge">Reset your password</div>

              <div className="user-profile-box">
                <img src={require("../../images/default_profile_normal.png")} />
                <div className="user-name-box">
                  <div className="fullname">Aroke Joshua</div>
                  <div className="screenname">@olyjoshone</div>
                </div>
              </div>
              <p>
                Strong passwords include numbers, letters, and punctuation
                marks.
              </p>
              <div className="Form">
                <label for="password">Type your new password</label>
                <div className="PasswordStrength">
                  <input
                    id="password"
                    className="Form-textbox Edge-textbox is-required"
                    type="password"
                    name="password"
                  />
                  <span className="PasswordStrength-meterContainer">
                    <span className="PasswordStrength-meter" />
                  </span>
                  <span className="Form-message is-errored">
                    <span data-key="weak">Weak</span>
                    <span data-key="good">Good</span>
                    <span data-key="strong">Strong</span>
                    <span data-key="verystrong">Very strong</span>
                    <span data-key="tooshort">Too short</span>
                    <span data-key="obvious">Too obvious</span>
                    <span data-key="tooweak">
                      6 characters or more! Be tricky.
                    </span>
                    <span data-key="required">
                      Please enter a new password.
                    </span>

                    <span data-key="roc" />
                  </span>
                </div>
                <div>
                  <label for="password_confirmation">
                    Type your new password one more time
                  </label>
                  <input
                    className="Form-textbox Edge-textbox"
                    type="password"
                    name="password_confirmation"
                  />
                  <span className="Form-message">
                    <span data-key="mismatch">Passwords do not match.</span>
                  </span>
                </div>
                <div className="Form-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="1"
                      name="remember_me"
                      checked="false"
                    />
                    Remember me
                  </label>
                </div>
                <input
                  onClick=""
                  type="submit"
                  className="Button EdgeButton--primary EdgeButton"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default confirmpasswordComponent;
