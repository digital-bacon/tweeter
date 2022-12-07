/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetHTML = {
    user: {
      name: $('article.tweet header .user-name'),
      handle: $('article.tweet header .user-handle'),
      avatar: $('article.tweet header .user-image'),
    },
    content: {
      text: $('article.tweet .content-text'),
    },
    stats: {
      tweetAge: $('article.tweet .tweet-age'),
    },
  }

  const calculateDateDiff = (returnMeasurement, date1, date2) => {
    const calculations = {
      milliseconds: function() {
        return date1 - date2;
      },
      seconds: function() {
        return Math.floor(this.milliseconds() / 1000);
      },
      minutes: function() {
        return Math.floor(this.seconds() / 60);
      },
      hours: function() {
        return Math.floor(this.minutes() / 60);
      },
      days: function() {
        return Math.floor(this.hours() / 24);
      },
      years: function() {
        return Math.floor(this.days() / 365);
      },
    }
    const output = calculations[returnMeasurement.toLowerCase()]();
    return output;
  }

  const createTweetElement  = (tweetObject) => {
    const $article = $('<article>').addClass('tweet');
    const $header = $('<header>');
    const $footer = $('<footer>');
    const $userImage = $('<img>').addClass('user-image');
    const $userName = $('<p>').addClass('user-name');
    const $userHandle = $('<p>').addClass('user-handle');
    const $contentText = $('<p>').addClass('content-text');
    const $tweetAge = $('<p>').addClass('tweet-age');
    const $actions = $('<p>').addClass('actions');
    const $actionReportTweet = $('<a>')
      .attr({
        'href': '#',
        'title': 'Report tweet',
      })
      .html(`<i class='fa-solid fa-flag'></i>`);
    const $actionRetweet = $('<a>')
      .attr({
        'href': '#',
        'title': 'Retweet',
      })
      .html(`<i class='fa-solid fa-retweet'></i>`);
      const $actionSaveTweet = $('<a>')
      .attr({
        'href': '#',
        'title': 'Save Tweet',
      })
      .html(`<i class='fa-solid fa-heart'></i>`);

    $($article).append($header);
    $($article).append($contentText);
    $($article).append($footer);
    $($header).append($userImage);
    $($header).append($userName);
    $($header).append($userHandle);
    $($footer).append($tweetAge);
    $($footer).append($actions);
    $($actions).append($actionReportTweet);
    $($actions).append($actionRetweet);
    $($actions).append($actionSaveTweet);

    $($userName).text(tweetObject.user.name);
    $($userHandle).text(tweetObject.user.handle);
    $($userImage).attr({
      'src': tweetObject.user.avatars,
      'alt': `Profile image for ${tweetObject.user.name}`
    });
    $($contentText).text(tweetObject.content.text);
    const tweetAgeInDays = calculateDateDiff('days', Date.now(), new Date(tweetObject.created_at));
    const ageOutput = tweetAgeInDays <= 1 ? 'Today' : `${tweetAgeInDays} days ago`;
    $($tweetAge).text(ageOutput);
    $($actionReportTweet)
      .attr({
        'href': '#',
        'title': 'Report tweet',
      })
      .html(`<i class='fa-solid fa-flag'></i>`);
    $($actionRetweet)
      .attr({
        'href': '#',
        'title': 'Retweet',
      })
      .html(`<i class='fa-solid fa-retweet'></i>`);
    $($actionSaveTweet)
      .attr({
        'href': '#',
        'title': 'Save Tweet',
      })
      .html(`<i class='fa-solid fa-heart'></i>`);
    return $article;
  }

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); 
});

