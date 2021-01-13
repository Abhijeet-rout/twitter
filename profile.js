import React, { PureComponent } from "react";
import ProfileMenu1 from "./profilemenu1";
import ProfileHeader from "./profileheader";
import ProfileSide from "./profileside";
import ProfileMainMenu from "./profilemainmenu";
class profileComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://abs.twimg.com/a/1541103114/css/t1/twitter_core.bundle.css"
          class="coreCSSBundles"
        />

        <div class="topbar js-topbar">
          <div class="ProfilePage-editingOverlay" />
          <ProfileHeader />
        </div>
        <div class="ProfileCanopy-inner">
          <div class="ProfileCanopy-header u-bgUserColor">
            <div class="ProfileCanopy-headerBg" />

            <div class="AppContainer">
              <div class="ProfileCanopy-avatar">
                <div class="ProfileAvatar">
                  <a
                    class="ProfileAvatar-placeholder u-block js-nav js-tooltip profile-picture"
                    onClick=""
                    title="Add a profile photo"
                  >
                    <img
                      class="ProfileAvatar-placeholderImage u-bgUserColor"
                      data-avatar-placeholder="true"
                      src={require("../../images/owner_empty_avatar.png")}
                    />
                  </a>
                </div>
              </div>
              <div class="Grid Grid--withGutter">
                <div class="Grid-cell u-size1of3 u-lg-size1of4">
                  <div
                    class="ProfileCanopy-card"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <div class="ProfileCardMini">
                      <a class="ProfileCardMini-avatar profile-picture js-tooltip">
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
              </div>
            </div>
            <ProfileMenu1 />
            <div class="Grid Grid--withGutter">
              <div class="Grid-cell u-size1of3 u-lg-size1of4">
                <div class="Grid Grid--withGutter">
                  <div class="Grid-cell">
                    <div class="ProfileSidebar ProfileSidebar--withLeftAlignment">
                      <div class="ProfileHeaderCard">
                        <h1 class="ProfileHeaderCard-name">
                          <a
                            href="#"
                            class="ProfileHeaderCard-nameLink u-textInheritColor js-nav"
                          >
                            Aroke Joshua
                          </a>
                        </h1>

                        <h2
                          class="ProfileHeaderCard-screenname u-inlineBlock u-dir"
                          dir="ltr"
                        >
                          <a
                            class="ProfileHeaderCard-screennameLink u-linkComplex js-nav"
                            href="#"
                          >
                            <span class="username u-dir" dir="ltr">
                              @<b class="u-linkComplex-target">olyjoshone</b>
                            </span>
                          </a>
                        </h2>

                        <p class="ProfileHeaderCard-bio u-dir" dir="ltr" />

                        <div class="ProfileHeaderCard-location ">
                          <span
                            class="Icon Icon--geo Icon--medium"
                            aria-hidden="true"
                            role="presentation"
                          />
                          <span
                            class="ProfileHeaderCard-locationText u-dir"
                            dir="ltr"
                          >
                            Ikeja, Lagos State.
                          </span>
                        </div>

                        <div class="ProfileHeaderCard-url ">
                          <span
                            class="Icon Icon--url Icon--medium"
                            aria-hidden="true"
                            role="presentation"
                          />
                          <span class="ProfileHeaderCard-urlText u-dir">
                            {" "}
                            <a
                              class="u-textUserColor"
                              target="_blank"
                              rel="me nofollow noopener"
                              href="https://codebit.ng"
                              title="http://www.codebit.ng"
                            >
                              codebit.ng
                            </a>
                          </span>
                        </div>

                        <div class="ProfileHeaderCard-joinDate">
                          <span
                            class="Icon Icon--calendar Icon--medium"
                            aria-hidden="true"
                            role="presentation"
                          />
                          <span
                            class="ProfileHeaderCard-joinDateText js-tooltip u-dir"
                            dir="ltr"
                          >
                            Joined July 2007
                          </span>
                        </div>

                        <div class="ProfileHeaderCard-birthdate u-hidden">
                          <span
                            class="Icon Icon--balloon Icon--medium"
                            aria-hidden="true"
                            role="presentation"
                          />
                          <span
                            class="ProfileHeaderCard-birthdateText u-dir"
                            dir="ltr"
                          />
                        </div>
                        <ProfileSide />
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <ProfileMainMenu />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profileComponent;
