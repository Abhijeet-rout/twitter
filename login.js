import React, { PureComponent } from "react";
//import { doPost } from "../../util/network/services";
class loginComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  login() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://timtweet.herokuapp.com/api/auth", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        data
      })
    })
      .then(responseJson => {
        alert(
          "Status code:" +
            " " +
            responseJson.status +
            "\n" +
            "Status Message:" +
            " " +
            responseJson.statusText
        );
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://abs.twimg.com/a/1540966379/css/t1/twitter_core.bundle.css"
          class="coreCSSBundles"
        />
        <div className="three-col logged-out ms-windows">
          <div className="route-login login-responsive">
            <div className="topbar js-topbar">
              <div
                className="global-nav global-nav--newLoggedOut"
                data-section-term="top_nav"
              >
                <div className="global-nav-inner">
                  <div className="container">
                    <ul
                      className="nav js-global-actions"
                      role="navigation"
                      id="global-actions"
                    >
                      <li
                        id="global-nav-home"
                        className="home"
                        data-global-action="home"
                      >
                        <a
                          className="js-nav js-tooltip js-dynamic-tooltip"
                          data-placement="bottom"
                          onClick=""
                          data-component-context="home_nav"
                          data-nav="home"
                        >
                          <span className="Icon Icon--bird Icon--large" />
                          <span className="text" aria-hidden="true">
                            Home
                          </span>
                          <span className="u-hiddenVisually a11y-inactive-page-text">
                            Home
                          </span>
                          <span className="u-hiddenVisually a11y-active-page-text">
                            Home, current page.
                          </span>
                        </a>
                      </li>
                      <li id="global-nav-about" className="about">
                        <a
                          className="js-tooltip js-dynamic-tooltip"
                          data-placement="bottom"
                          onClick=""
                          rel="noopener"
                        >
                          <span className="text">About</span>
                        </a>
                      </li>
                    </ul>
                    <div className="pull-right nav-extras" />
                  </div>
                </div>
              </div>
            </div>

            <div id="page-outer">
              <div
                id="page-container"
                className="AppContent wrapper wrapper-login"
              >
                <div className="page-canvas">
                  <div className="signin-wrapper" data-login-message="">
                    <h1>Log in to Simple Twitter Clone</h1>
                    <div className="t1-form clearfix signin js-signin">
                      <fieldset>
                        <legend className="visuallyhidden">Log in</legend>

                        <div className="clearfix field">
                          <input
                            className="js-username-field email-input js-initial-focus"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateInput}
                          />
                        </div>
                        <div className="clearfix field">
                          <input
                            className="js-password-field"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.updateInput}
                          />
                        </div>
                      </fieldset>

                      <div className="clearfix">
                        <button
                          onClick={this.login}
                          className="submit EdgeButton EdgeButton--primary EdgeButtom--medium"
                        >
                          Log in
                        </button>

                        <div className="subchck">
                          <label className="t1-label remember">
                            <input
                              type="checkbox"
                              value="1"
                              name="remember_me"
                              checked="false"
                            />
                            Remember me
                            <span className="separator"> · </span>
                            <a
                              className="forgot"
                              onClick={() =>
                                this.props.history.push("reset-password")
                              }
                            >
                              Forgot password?
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix mobile has-sms">
                    <p className="signup-helper">
                      New to Twitter?
                      <a id="login-signup-link" onClick="">
                        Sign up now &#32; &raquo;
                      </a>
                    </p>
                    <p className="sms-helper">
                      Already using Twitter via text message?
                      <a onClick="">Activate your account &#32; &raquo;</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loginComponent;
