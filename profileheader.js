import React, { PureComponent } from "react";

class profileheaderComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="global-nav" data-section-term="top_nav">
        <div class="global-nav-inner">
          <div class="container">
            <h1 class="Icon Icon--bird bird-topbar-etched">
              <span class="visuallyhidden">Twitter</span>
            </h1>
            <div class="pushstate-spinner" />

            <div role="navigation">
              <ul class="nav js-global-actions" id="global-actions">
                <li id="global-nav-home" class="home" data-global-action="home">
                  <a
                    class="js-nav js-tooltip js-dynamic-tooltip"
                    data-placement="bottom"
                    onClick=""
                    data-component-context="home_nav"
                    data-nav="home"
                  >
                    <span class="Icon Icon--home Icon--large" />
                    <span class="Icon Icon--homeFilled Icon--large u-textUserColor" />
                    <span class="text" aria-hidden="true">
                      Home
                    </span>
                    <span class="u-hiddenVisually a11y-inactive-page-text">
                      Home
                    </span>
                    <span class="u-hiddenVisually a11y-active-page-text">
                      Home, current page.
                    </span>
                    <span class="u-hiddenVisually hidden-new-items-text">
                      New Tweets available.
                    </span>
                  </a>
                </li>
                <li class="people notifications" data-global-action="connect">
                  <a
                    class="js-nav js-tooltip js-dynamic-tooltip"
                    data-placement="bottom"
                    onClick=""
                    data-component-context="connect_nav"
                    data-nav="connect"
                  >
                    <span class="Icon Icon--notifications Icon--large" />
                    <span class="Icon Icon--notificationsFilled Icon--large u-textUserColor" />
                    <span class="text" aria-hidden="true">
                      Notifications
                    </span>
                    <span class="u-hiddenVisually a11y-inactive-page-text">
                      Notifications
                    </span>
                    <span class="u-hiddenVisually a11y-active-page-text">
                      Notifications, current page.
                    </span>
                    <span class="count new-count">
                      <span class="count-inner">0</span>
                    </span>
                  </a>
                </li>
                <li class="dm-nav">
                  <a
                    role="button"
                    onClick=""
                    class="js-tooltip js-dynamic-tooltip global-dm-nav new with-count"
                    data-placement="bottom"
                  >
                    <span class="Icon Icon--dm Icon--large" />
                    <span class="text">Messages</span>
                    <span class="dm-new">
                      <span class="count-inner">0</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="pull-right nav-extras">
              <div role="search">
                <div
                  class="t1-form form-search js-search-form"
                  id="global-nav-search"
                >
                  <label class="visuallyhidden" for="search-query">
                    Search query
                  </label>
                  <input
                    class="search-input"
                    type="text"
                    id="search-query"
                    placeholder="Search Twitter"
                    name="q"
                    autocomplete="off"
                    spellcheck="false"
                    aria-autocomplete="list"
                    aria-expanded="false"
                    aria-owns="typeahead-dropdown-3"
                  />
                  <span class="search-icon js-search-action">
                    <button
                      type="submit"
                      class="Icon Icon--medium Icon--search nav-search"
                      tabindex="-1"
                    >
                      <span class="visuallyhidden">Search Twitter</span>
                    </button>
                  </span>
                </div>
              </div>

              <img
                class="Avatar Avatar--size32"
                src={require("../../images/default_profile_normal.png")}
                alt="Profile and settings"
              />
              <button
                id="global-new-tweet-button"
                class="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip m-5"
              >
                <span class="text">Tweet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profileheaderComponent;
