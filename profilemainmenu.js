import React, { PureComponent } from "react";

class profilemainmenuComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="Grid-cell u-size2of3 u-lg-size3of4">
        <div class="Grid Grid--withGutter">
          <div class="Grid-cell">
            <div class="js-profileClusterFollow" />
          </div>
          <div
            class="Grid-cell
                    u-lg-size2of3"
            data-test-selector="ProfileTimeline"
          >
            <div class="ProfileHeading">
              <div class="ProfileHeading-spacer" />
              <div class="ProfileHeading-content">
                <h2
                  id="content-main-heading"
                  class="ProfileHeading-title u-hiddenVisually "
                >
                  Tweets
                </h2>
                <ul class="ProfileHeading-toggle">
                  <li
                    class="ProfileHeading-toggleItem  is-active"
                    data-element-term="tweets_toggle"
                  >
                    <span aria-hidden="true">Tweets</span>
                    <span class="u-hiddenVisually">Tweets, current page.</span>
                  </li>
                  <li
                    class="ProfileHeading-toggleItem  u-textUserColor"
                    data-element-term="tweets_with_replies_toggle"
                  >
                    <a
                      class="ProfileHeading-toggleLink js-nav"
                      href="#"
                      data-nav="tweets_with_replies_toggle"
                    >
                      Tweets &amp; replies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="Grid Grid--withGutter js-empty-timeline">
              <div class="Grid-cell">
                <div class="ProfileEmptyTimeline">
                  <div class="ProfileHeading">
                    <h2 class="ProfileHeading-title">Broadcast to the world</h2>
                  </div>
                  <div class="ProfileEmptyTimeline-prefilledTweetsHeading">
                    You’ve sent a Tweet to someone. Now it’s time to write your
                    own. We’ve even got one ready to go for you!
                  </div>
                  <div class="ProfilePrefilledTweet Arrange Arrange--middle">
                    <div
                      class="tweet u-textBreak js-tweet Arrange-sizeFill"
                      data-tweet-stat-initialized="true"
                    >
                      <div class="content">
                        <div class="stream-item-header">
                          <a
                            class="account-group js-account-group js-action-profile js-user-profile-link js-nav"
                            href="#"
                          >
                            <img
                              class="avatar js-action-profile-avatar"
                              src={require("../../images/default_profile_bigger.png")}
                              alt=""
                            />
                            <span class="FullNameGroup">
                              <strong
                                class="fullname show-popup-with-id u-textTruncate "
                                data-aria-label-part=""
                              >
                                Aroke Joshua
                              </strong>
                              <span>‏</span>
                              <span class="UserBadges" />
                              <span class="UserNameBreak">&nbsp;</span>
                            </span>
                            <span
                              class="username u-dir u-textTruncate"
                              dir="ltr"
                              data-aria-label-part=""
                            >
                              @<b>olyjoshone</b>
                            </span>
                          </a>
                        </div>

                        <p class="TweetTextSize TweetTextSize--xlarge js-tweet-text tweet-text">
                          Hello Twitter!{" "}
                          <span
                            data-query-source="hashtag_click"
                            class="twitter-hashtag pretty-link js-nav"
                            dir="ltr"
                          >
                            <s>#</s>
                            <b>myfirstTweet</b>
                          </span>
                        </p>
                      </div>
                    </div>

                    <div class="ProfilePrefilledTweet-tweetBtn Arrange-sizeFit">
                      <button
                        class="tweet-action EdgeButton EdgeButton--primary js-tweet-btn"
                        type="button"
                      >
                        <span class="button-text tweeting-text">Tweet</span>
                        <span class="button-text replying-text">Reply</span>
                      </button>

                      <span class="ProfilePrefilledTweet-spinner Spinner Spinner--size14" />
                    </div>
                  </div>

                  <div class="ProfileEmptyTimeline-tweetBoxHeading">
                    Or write your own
                  </div>
                  <div class="ProfileEmptyTimeline-tweetBox">
                    <div class="ProfileTweetbox u-bgUserColorLightest u-borderUserColorLight js-profileEmptyTimelineTweetbox">
                      <div
                        class="t1-form tweet-form"
                        target="tweet-post-iframe"
                        data-poll-composer-rows="3"
                      >
                        <div class="reply-users" />

                        <div class="tweet-content">
                          <img
                            class="inline-reply-user-image avatar size32"
                            src={require("../../images/default_profile_normal.png")}
                          />
                          <div class="ComposerDragHelp">
                            <span class="ComposerDragHelp-text" />
                          </div>
                          <span class="visuallyhidden" id="-label">
                            Tweet text
                          </span>

                          <div class="RichEditor RichEditor--emojiPicker">
                            <div class="RichEditor-mozillaCursorWorkaround">
                              &nbsp;
                            </div>
                            <div class="RichEditor-container u-borderRadiusInherit">
                              <div
                                role="listbox"
                                class="dropdown-menu typeahead"
                                id="typeahead-dropdown-4"
                              >
                                <div aria-hidden="true" class="dropdown-caret">
                                  <div class="caret-outer" />
                                  <div class="caret-inner" />
                                </div>
                              </div>

                              <div class="RichEditor-scrollContainer u-borderRadiusInherit">
                                <div
                                  aria-labelledby="-label"
                                  name="tweet"
                                  id=""
                                  class="tweet-box rich-editor is-showPlaceholder"
                                  contenteditable="true"
                                  spellcheck="true"
                                  role="textbox"
                                  aria-multiline="true"
                                  data-placeholder-default="What’s happening?"
                                  data-placeholder-poll-composer-on="Ask a question..."
                                  data-placeholder-reply="Tweet your reply"
                                  dir="ltr"
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-owns="typeahead-dropdown-4"
                                >
                                  <div>
                                    <br />
                                  </div>
                                </div>

                                <div
                                  class="RichEditor-pictographs"
                                  aria-hidden="true"
                                />
                              </div>
                              <div class="RichEditor-rightItems RichEditor-topItems">
                                <div class="EmojiPicker dropdown is-loading">
                                  <button
                                    type="button"
                                    class="EmojiPicker-trigger js-dropdown-toggle js-tooltip u-textUserColorHover"
                                    title="Add emoji"
                                    data-delay="150"
                                    aria-haspopup="true"
                                  >
                                    <span class="Icon Icon--smiley" />
                                    <span class="text u-hiddenVisually">
                                      Add emoji
                                    </span>
                                  </button>
                                  <div
                                    class="EmojiPicker-dropdownMenu dropdown-menu"
                                    tabindex="-1"
                                  >
                                    <div class="EmojiPicker-content Caret Caret--stroked" />
                                  </div>
                                </div>
                              </div>

                              <div class="RichEditor-leftItems RichEditor-bottomItems">
                                <div class="inline-geo-picker geo-picker dropdown">
                                  <button
                                    class="js-geo-search-trigger geo-picker-btn disabled js-dropdown-toggle"
                                    type="button"
                                    data-delay="150"
                                    aria-haspopup="true"
                                    data-original-title="Location disabled"
                                  >
                                    <span class="Icon Icon--geo Icon--small" />
                                    <span class="geo-status">
                                      Location disabled
                                    </span>
                                  </button>
                                  <span class="dropdown-container dropdown-menu" />
                                </div>
                              </div>
                              <div class="RichEditor-rightItems RichEditor-bottomItems">
                                <div class="js-character-counter">
                                  <div class="js-countdown-counter tweet-counter CountdownCounter" />
                                  <svg
                                    class="RadialCounter js-radial-counter"
                                    height="20"
                                    width="20"
                                  >
                                    <circle
                                      class="RadialCounter-progressUnderlay"
                                      cx="50%"
                                      cy="50%"
                                      r="8"
                                      fill="none"
                                      stroke-width="1"
                                    />
                                    <circle
                                      class="js-progress-circle RadialCounter--safe"
                                      cx="50%"
                                      cy="50%"
                                      r="8"
                                      fill="none"
                                      stroke-width="2"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="RichEditor-mozillaCursorWorkaround">
                              &nbsp;
                            </div>
                          </div>

                          <textarea
                            aria-hidden="true"
                            class="tweet-box-shadow hidden"
                            name="status"
                          />
                        </div>

                        <div class="TweetBoxToolbar">
                          <div class="TweetBoxExtras tweet-box-extras">
                            <span class="TweetBoxExtras-item TweetBox-mediaPicker">
                              <div class="photo-selector">
                                <button
                                  aria-hidden="true"
                                  class="btn icon-btn js-tooltip"
                                  type="button"
                                  tabindex="-1"
                                  data-original-title="Add photos or video"
                                >
                                  <span class="tweet-camera Icon Icon--media" />
                                  <span class="text add-photo-label u-hiddenVisually">
                                    Add photos or video
                                  </span>
                                </button>
                                <div class="image-selector">
                                  <div class="multi-photo-data-container hidden" />
                                  <label class="t1-label">
                                    <span class="visuallyhidden">
                                      Add photos or video
                                    </span>
                                    <input
                                      type="file"
                                      name="media[]"
                                      accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
                                      multiple=""
                                      class="file-input js-tooltip"
                                      data-original-title="Add photos or video"
                                      data-delay="150"
                                    />
                                  </label>
                                </div>
                              </div>
                            </span>

                            <span class="TweetBoxExtras-item">
                              <div class="FoundMediaSearch found-media-search dropdown">
                                <button
                                  class="btn js-found-media-search-trigger js-dropdown-toggle icon-btn js-tooltip"
                                  type="button"
                                  title="Add a GIF"
                                  aria-haspopup="true"
                                >
                                  <span class="Icon Icon--gif Icon--large" />
                                  <span class="text u-hiddenVisually">
                                    Add a GIF
                                  </span>
                                </button>
                                <div
                                  class="FoundMediaSearch-dropdownMenu dropdown-menu"
                                  tabindex="-1"
                                >
                                  <div class="FoundMediaSearch-content Caret Caret--stroked">
                                    <div class="FoundMediaSearch-query">
                                      <input
                                        class="FoundMediaSearch-queryInput"
                                        type="text"
                                        autocomplete="off"
                                        placeholder="Search for a GIF"
                                      />
                                      <span class="Icon Icon--search" />
                                    </div>
                                    <div class="FoundMediaSearch-results">
                                      <div class="FoundMediaSearch-items" />
                                      <div class="FoundMediaSearch-pagination" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </span>

                            <span class="TweetBoxExtras-item">
                              <div class="PollCreator">
                                <button
                                  class="btn icon-btn PollCreator-btn js-tooltip"
                                  type="button"
                                  data-delay="150"
                                  data-original-title="Add poll"
                                >
                                  <span class="PollCreator-icon Icon Icon--pollBar" />
                                  <span class="text PollCreator-label u-hiddenVisually">
                                    Poll
                                  </span>
                                </button>
                              </div>
                            </span>

                            <span class="TweetBoxExtras-item">
                              <div class="geo-picker dropdown">
                                <button
                                  class="btn js-geo-search-trigger geo-picker-btn icon-btn js-tooltip disabled js-dropdown-toggle"
                                  type="button"
                                  data-delay="150"
                                  aria-haspopup="true"
                                  data-original-title="Location disabled"
                                >
                                  <span class="Icon Icon--geo" />
                                  <span class="text geo-status u-hiddenVisually">
                                    Location disabled
                                  </span>
                                </button>
                                <span class="dropdown-container dropdown-menu" />
                                <input type="hidden" name="place_id" value="" />
                              </div>
                            </span>

                            <div class="TweetBoxUploadProgress">
                              <div class="TweetBoxUploadProgress-uploading">
                                Uploading
                                <div class="TweetBoxUploadProgress-bar">
                                  <div class="TweetBoxUploadProgress-barPosition" />
                                </div>
                              </div>
                              <div class="TweetBoxUploadProgress-processing">
                                Processing
                                <div class="TweetBoxUploadProgress-spinner Spinner Spinner--size14" />
                              </div>
                            </div>
                          </div>

                          <div class="TweetBoxToolbar-tweetButton tweet-button">
                            <span class="add-tweet-button hidden">
                              <button
                                class="js-add-tweet EdgeButton EdgeButton--secondary EdgeButton--icon EdgeButton--medium js-tooltip"
                                title="Add another Tweet"
                                aria-label="Add another Tweet"
                                data-placement="top"
                              >
                                <span class="Icon Icon--add Icon--medium" />
                              </button>
                            </span>
                            <div class="ProfilePrefilledTweet-tweetBtn Arrange-sizeFit">
                              <button
                                class="tweet-action EdgeButton EdgeButton--primary js-tweet-btn"
                                type="button"
                              >
                                <span class="button-text tweeting-text">
                                  Tweet
                                </span>
                              </button>

                              <span class="ProfilePrefilledTweet-spinner Spinner Spinner--size14" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default profilemainmenuComponent;
