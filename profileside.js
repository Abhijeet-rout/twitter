import React, { PureComponent } from "react";

class profilesideComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="MoveableModule">
        <div class="SidebarCommonModules">
          <div class="module wtf-module js-wtf-module roaming-module has-content">
            <div class="flex-module">
              <div class="flex-module-header">
                <h3>Who to follow</h3>
                <small> · </small>
                <button type="button" class="btn-link js-refresh-suggestions">
                  <small>Refresh</small>
                </button>
                <small class="view-all">
                  ·{" "}
                  <a
                    class="js-view-all-link js-nav"
                    href="#"
                    data-element-term="view_all_link"
                  >
                    View all
                  </a>
                </small>
              </div>

              <div
                class="js-recommended-followers dashboard-user-recommendations flex-module-inner"
                data-section-id="wtf"
              >
                <div
                  class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                  data-impression-id=""
                >
                  <div class="UserSmallListItem-context" />

                  <div class="dismiss js-action-dismiss">
                    <span class="Icon Icon--close" />
                  </div>

                  <div class="content">
                    <a
                      class="account-group js-recommend-link js-user-profile-link user-thumb"
                      href="#"
                      rel="noopener"
                    >
                      <img
                        class="avatar js-action-profile-avatar "
                        src={require("../../images/mm3WeutI_bigger.jpeg")}
                        alt=""
                      />
                      <span class="account-group-inner">
                        <strong class="fullname">oiva</strong>
                        <span class="UserBadges" />
                        <span class="UserNameBreak">&nbsp;</span>
                        <span class="username u-dir u-textTruncate" dir="ltr">
                          @<b>oiva</b>
                        </span>
                      </span>
                    </a>

                    <div
                      class="user-actions not-following not-muting"
                      data-screen-name="oiva"
                    >
                      <span class="user-actions-follow-button js-follow-btn follow-button">
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    follow-text"
                        >
                          <span aria-hidden="true">Follow</span>
                          <span class="u-hiddenVisually">
                            Follow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--primary
    EdgeButton--small 
    
    button-text
    following-text"
                        >
                          <span aria-hidden="true">Following</span>
                          <span class="u-hiddenVisually">
                            Following{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unfollow-text"
                        >
                          <span aria-hidden="true">Unfollow</span>
                          <span class="u-hiddenVisually">
                            Unfollow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--invertedDanger
    EdgeButton--small 
    
    button-text
    blocked-text"
                        >
                          <span aria-hidden="true">Blocked</span>
                          <span class="u-hiddenVisually">
                            Blocked{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unblock-text"
                        >
                          <span aria-hidden="true">Unblock</span>
                          <span class="u-hiddenVisually">
                            Unblock{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    pending-text"
                        >
                          <span aria-hidden="true">Pending</span>
                          <span class="u-hiddenVisually">
                            Pending follow request from{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    cancel-text"
                        >
                          <span aria-hidden="true">Cancel</span>
                          <span class="u-hiddenVisually">
                            Cancel your follow request to{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>oiva</b>
                            </span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                  data-feedback-token="110"
                  data-impression-id=""
                >
                  <div class="UserSmallListItem-context" />

                  <div class="dismiss js-action-dismiss">
                    <span class="Icon Icon--close" />
                  </div>

                  <div class="content">
                    <a
                      class="account-group js-recommend-link js-user-profile-link user-thumb"
                      href="/ArvindKejriwal"
                      rel="noopener"
                    >
                      <img
                        class="avatar js-action-profile-avatar "
                        src={require("../../images/REH_LpUJ_bigger.jpg")}
                        alt=""
                      />
                      <span class="account-group-inner">
                        <strong class="fullname">Arvind Kejriwal</strong>
                        <span class="UserBadges">
                          <span class="Icon Icon--verified">
                            <span class="u-hiddenVisually">
                              Verified account
                            </span>
                          </span>
                        </span>
                        <span class="UserNameBreak">&nbsp;</span>
                        <span class="username u-dir u-textTruncate" dir="ltr">
                          @<b>ArvindKejriwal</b>
                        </span>
                      </span>
                    </a>

                    <div
                      class="user-actions not-following not-muting"
                      data-screen-name="ArvindKejriwal"
                    >
                      <span class="user-actions-follow-button js-follow-btn follow-button">
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    follow-text"
                        >
                          <span aria-hidden="true">Follow</span>
                          <span class="u-hiddenVisually">
                            Follow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--primary
    EdgeButton--small 
    
    button-text
    following-text"
                        >
                          <span aria-hidden="true">Following</span>
                          <span class="u-hiddenVisually">
                            Following{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unfollow-text"
                        >
                          <span aria-hidden="true">Unfollow</span>
                          <span class="u-hiddenVisually">
                            Unfollow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--invertedDanger
    EdgeButton--small 
    
    button-text
    blocked-text"
                        >
                          <span aria-hidden="true">Blocked</span>
                          <span class="u-hiddenVisually">
                            Blocked{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unblock-text"
                        >
                          <span aria-hidden="true">Unblock</span>
                          <span class="u-hiddenVisually">
                            Unblock{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    pending-text"
                        >
                          <span aria-hidden="true">Pending</span>
                          <span class="u-hiddenVisually">
                            Pending follow request from{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    cancel-text"
                        >
                          <span aria-hidden="true">Cancel</span>
                          <span class="u-hiddenVisually">
                            Cancel your follow request to{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>ArvindKejriwal</b>
                            </span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user">
                  <div class="UserSmallListItem-context" />

                  <div class="dismiss js-action-dismiss">
                    <span class="Icon Icon--close" />
                  </div>

                  <div class="content">
                    <a
                      class="account-group js-recommend-link js-user-profile-link user-thumb"
                      href="/the_jsf"
                      rel="noopener"
                    >
                      <img
                        class="avatar js-action-profile-avatar "
                        src={require("../../images/7J4QDNJ9_bigger.jpg")}
                        alt=""
                      />
                      <span class="account-group-inner" data-user-id="14538601">
                        <strong class="fullname">JS Foundation</strong>
                        <span class="UserBadges">
                          <span class="Icon Icon--verified">
                            <span class="u-hiddenVisually">
                              Verified account
                            </span>
                          </span>
                        </span>
                        <span class="UserNameBreak">&nbsp;</span>
                        <span class="username u-dir u-textTruncate" dir="ltr">
                          @<b>the_jsf</b>
                        </span>
                      </span>
                    </a>

                    <div
                      class="user-actions not-muting including following"
                      data-screen-name="the_jsf"
                    >
                      <span class="user-actions-follow-button js-follow-btn follow-button">
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    follow-text"
                        >
                          <span aria-hidden="true">Follow</span>
                          <span class="u-hiddenVisually">
                            Follow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--primary
    EdgeButton--small 
    
    button-text
    following-text"
                        >
                          <span aria-hidden="true">Following</span>
                          <span class="u-hiddenVisually">
                            Following{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unfollow-text"
                        >
                          <span aria-hidden="true">Unfollow</span>
                          <span class="u-hiddenVisually">
                            Unfollow{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--invertedDanger
    EdgeButton--small 
    
    button-text
    blocked-text"
                        >
                          <span aria-hidden="true">Blocked</span>
                          <span class="u-hiddenVisually">
                            Blocked{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--danger
    EdgeButton--small 
    
    button-text
    unblock-text"
                        >
                          <span aria-hidden="true">Unblock</span>
                          <span class="u-hiddenVisually">
                            Unblock{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    pending-text"
                        >
                          <span aria-hidden="true">Pending</span>
                          <span class="u-hiddenVisually">
                            Pending follow request from{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
    EdgeButton
    EdgeButton--secondary
    EdgeButton--small 
    
    button-text
    cancel-text"
                        >
                          <span aria-hidden="true">Cancel</span>
                          <span class="u-hiddenVisually">
                            Cancel your follow request to{" "}
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                            >
                              @<b>the_jsf</b>
                            </span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-module import-prompt">
              <div class="flex-module-footer u-table">
                <a
                  href="#"
                  class="js-tooltip u-tableCell u-alignMiddle"
                  title="Find people you know"
                >
                  <span class="Icon Icon--people Icon--small" />
                  <span class="u-hiddenVisually">Find people you know</span>
                </a>
                <a
                  class="u-tableCell u-alignMiddle remove-discover-pymk"
                  href="#"
                >
                  Find people you know
                </a>
              </div>
            </div>
          </div>

          <div class="module Trends trends">
            <div class="trends-inner">
              <div class="flex-module trends-container context-trends-container">
                <div class="flex-module-header">
                  <h3>
                    <span class="trend-location js-trend-location">
                      Trends for you
                    </span>
                  </h3>
                  <span class="middot" aria-hidden="true">
                    ·
                  </span>
                  <a
                    role="button"
                    href="#"
                    data-modal="change-trends"
                    class="btn-link change-trends js-trend-toggle"
                  >
                    <span aria-hidden="true">Change</span>
                    <span class="u-hiddenVisually">Change trend settings</span>
                  </a>
                </div>
                <div class="flex-module-inner">
                  <ul class="trend-items js-trends">
                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="#NyscAllowance"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex"
                        href="#"
                        data-query-source="trend_click"
                        data-original-title=""
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          #NyscAllowance
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats" />
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="#LeadersRecycling"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex"
                        href="#"
                        data-query-source="trend_click"
                        data-original-title=""
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          #LeadersRecycling
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats" />
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="#MondayMotivation"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex"
                        href="#"
                        data-query-source="trend_click"
                        data-original-title=""
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          #MondayMotivation
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">
                          Olamide Adedeji is Tweeting about this
                        </div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="Katsina"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex "
                        href="#"
                        data-query-source="trend_click"
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          Katsina
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">1,092 Tweets</div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="Rio Ferdinand"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex "
                        href="#"
                        data-query-source="trend_click"
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          Rio Ferdinand
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">2,126 Tweets</div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="Annie"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex "
                        href="#"
                        data-query-source="trend_click"
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          Annie
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">27.4K Tweets</div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="#FansMadeOfMore"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex"
                        href=""
                        data-query-source="trend_click"
                        data-original-title=""
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          #FansMadeOfMore
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats" />
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="iPhone XS MAX"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex"
                        href="#"
                        data-query-source="trend_click"
                        data-original-title=""
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          iPhone XS MAX
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">13.5K Tweets</div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="#MeetBBCEastAfrica"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex "
                        href="#"
                        data-query-source="trend_click"
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          #MeetBBCEastAfrica
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">2,061 Tweets</div>
                      </a>
                    </li>

                    <li
                      class="trend-item js-trend-item  context-trend-item"
                      data-trend-name="Nemanja Matic"
                    >
                      <a
                        class="pretty-link js-nav js-tooltip u-linkComplex "
                        href="#"
                        data-query-source="trend_click"
                      >
                        <span class="u-linkComplex-target trend-name" dir="ltr">
                          Nemanja Matic
                        </span>

                        <div class="js-nav trend-item-context" />
                        <div class="js-nav trend-item-stats">5,691 Tweets</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="Footer module roaming-module Footer--slim Footer--blankBackground">
            <div class="flex-module">
              <div class="flex-module-inner js-items-container">
                <ul class="u-cf">
                  <li class="Footer-item Footer-copyright copyright">
                    © 2018 Twitter
                  </li>
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      About
                    </a>
                  </li>
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      Help Center
                    </a>
                  </li>
                  `
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      Terms
                    </a>
                  </li>
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      Privacy policy
                    </a>
                  </li>
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      Cookies
                    </a>
                  </li>
                  <li class="Footer-item">
                    <a class="Footer-link" href="#" rel="noopener">
                      Ads info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profilesideComponent;
