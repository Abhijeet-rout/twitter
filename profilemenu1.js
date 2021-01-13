import React, { PureComponent } from "react";

class profileMenu1Component extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="ProfileCanopy-navBar u-boxShadow">
        <div class="ProfilePage-editingOverlay" />

        <div class="AppContainer">
          <div class="Grid Grid--withGutter">
            <div class="Grid-cell u-size1of3 u-lg-size1of4">
              <div
                class="ProfileCanopy-card"
                role="presentation"
                aria-hidden="true"
              >
                <div class="ProfileCardMini">
                  <a
                    class="ProfileCardMini-avatar profile-picture js-tooltip"
                    rel="noopener"
                    tabindex="-1"
                  >
                    <img
                      class="ProfileCardMini-avatarImage"
                      src={require("../../images/default_profile_normal.png")}
                    />
                  </a>
                  <div class="ProfileCardMini-details">
                    <div class="ProfileNameTruncated account-group">
                      <div class="u-textTruncate u-inlineBlock">
                        <a
                          class="fullname ProfileNameTruncated-link u-textInheritColor js-nav"
                          href="#"
                          data-aria-label-part=""
                          tabindex="-1"
                        >
                          Aroke Joshua
                        </a>
                      </div>
                      <span class="UserBadges" />
                    </div>
                    <div class="ProfileCardMini-screenname">
                      <a
                        href="#"
                        class="ProfileCardMini-screennameLink u-linkComplex js-nav u-dir"
                        dir="ltr"
                        tabindex="-1"
                      >
                        <span class="username u-dir" dir="ltr">
                          @<b class="u-linkComplex-target">olyjoshone</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="Grid-cell u-size2of3 u-lg-size3of4">
              <div class="ProfileCanopy-nav">
                <div class="ProfileNav" role="navigation">
                  <ul class="ProfileNav-list">
                    <li class="ProfileNav-item ProfileNav-item--tweets is-active">
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav"
                        data-nav="tweets"
                        tabindex="0"
                        data-original-title="2 Tweets"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Tweets
                        </span>
                        <span class="u-hiddenVisually">
                          Tweets, current page.
                        </span>
                        <span
                          class="ProfileNav-value"
                          data-count="2"
                          data-is-compact="false"
                        >
                          0
                        </span>
                      </a>
                    </li>
                    <li class="ProfileNav-item ProfileNav-item--following">
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor"
                        data-nav="following"
                        href="#"
                        data-original-title="34 Following"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Following
                        </span>
                        <span class="u-hiddenVisually">Following</span>
                        <span class="ProfileNav-value" data-is-compact="false">
                          0
                        </span>
                      </a>
                    </li>
                    <li class="ProfileNav-item ProfileNav-item--followers">
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor"
                        data-nav="followers"
                        href="#"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Followers
                        </span>
                        <span class="u-hiddenVisually">Followers</span>
                        <span class="ProfileNav-value" data-is-compact="false">
                          0
                        </span>
                      </a>
                    </li>
                    <li
                      class="ProfileNav-item ProfileNav-item--favorites"
                      data-more-item=".ProfileNav-dropdownItem--favorites"
                    >
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor"
                        data-nav="favorites"
                        href="#"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Likes
                        </span>
                        <span class="u-hiddenVisually">Likes</span>
                        <span class="ProfileNav-value" data-is-compact="false">
                          0
                        </span>
                      </a>
                    </li>
                    <li
                      class="ProfileNav-item ProfileNav-item--lists"
                      data-more-item=".ProfileNav-dropdownItem--lists"
                    >
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor"
                        data-nav="all_lists"
                        href="#"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Lists
                        </span>
                        <span class="u-hiddenVisually">Lists</span>
                        <span class="ProfileNav-value" data-is-compact="false">
                          0
                        </span>
                      </a>
                    </li>
                    <li
                      class="ProfileNav-item ProfileNav-item--moments"
                      data-more-item=".ProfileNav-dropdownItem--userMoments"
                    >
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor"
                        data-nav="user_moments"
                        href="#"
                      >
                        <span class="ProfileNav-label" aria-hidden="true">
                          Moments
                        </span>
                        <span class="u-hiddenVisually">Moments</span>
                        <span class="ProfileNav-value" data-is-compact="false">
                          0
                        </span>
                      </a>
                    </li>
                    <li class="ProfileNav-item ProfileNav-item--more dropdown is-hidden">
                      {" "}
                      <a
                        class="ProfileNav-stat ProfileNav-stat--link ProfileNav-stat--moreLink js-dropdown-toggle"
                        role="button"
                        href="#more"
                        aria-haspopup="true"
                      >
                        <span class="ProfileNav-label">&nbsp;</span>
                        <span class="ProfileNav-value">
                          More{" "}
                          <span class="ProfileNav-dropdownCaret Icon Icon--medium Icon--caretDown" />
                        </span>
                      </a>
                      <div class="dropdown-menu">
                        <div class="dropdown-caret">
                          <span class="caret-outer" />
                          <span class="caret-inner" />
                        </div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="ProfileNav-dropdownItem ProfileNav-dropdownItem--favorites is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav"
                            >
                              Likes
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="ProfileNav-dropdownItem ProfileNav-dropdownItem--lists is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav"
                            >
                              Lists
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="ProfileNav-dropdownItem ProfileNav-dropdownItem--userMoments is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav"
                            >
                              Moments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">
                      <div class="UserActions   u-textLeft">
                        <button
                          type="button"
                          class="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary"
                          data-scribe-element="profile_edit_button"
                        >
                          <span class="button-text">Edit profile</span>
                        </button>
                        <div class="ProfilePage-editingButtons">
                          <button
                            class="ProfilePage-cancelButton EdgeButton EdgeButton--tertiary"
                            data-scribe-element="cancel_button"
                            tabindex="4"
                          >
                            Cancel
                          </button>
                          <span class="ProfilePage-savingIndicator">
                            <span class="spinner-small" />
                            Saving...
                          </span>
                          <button
                            class="ProfilePage-saveButton EdgeButton EdgeButton--secondary"
                            tabindex="3"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profileMenu1Component;
