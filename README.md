# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above


## Functions (client.js)

<dl>
<dt><a href="#generateErrorElement">generateErrorElement(errorText)</a> ⇒ <code>Object</code></dt>
<dd><p>Function that builts a jQuery html object containing a form
validation error message</p>
</dd>
<dt><a href="#renderTweets">renderTweets(tweets, outputElement)</a></dt>
<dd><p>Function that receives tweet data and prepends each tweet as html
to an specified existing output element</p>
</dd>
<dt><a href="#createTweetElement">createTweetElement(tweetObject)</a> ⇒ <code>Object</code></dt>
<dd><p>Function that receives tweet data and creates a jQuery html
object for the tweet</p>
</dd>
<dt><a href="#loadTweets">loadTweets(outputElement)</a></dt>
<dd><p>Function that retrieves tweet data from a pre-configured endpoint,
and then generates HTML for each tweet, outputting the HTML to the
specified existing output element</p>
</dd>
</dl>

<a name="generateErrorElement"></a>

## generateErrorElement(errorText) ⇒ <code>Object</code>
Function that builts a jQuery html object containing a form
validation error message

**Kind**: global function
**Returns**: <code>Object</code> - The jQuery html object

| Param | Type | Description |
| --- | --- | --- |
| errorText | <code>string</code> | The error text to include in the html element |

<a name="renderTweets"></a>

## renderTweets(tweets, outputElement)
Function that receives tweet data and prepends each tweet as html
to an specified existing output element

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| tweets | <code>Array.&lt;Object&gt;</code> | An array of tweet objects |
| outputElement | <code>string</code> \| <code>Object</code> | The selector of the html element to which you wish to prepend the resulting html. Accepts any valid jQuery selector |

<a name="createTweetElement"></a>

## createTweetElement(tweetObject) ⇒ <code>Object</code>
Function that receives tweet data and creates a jQuery html
object for the tweet

**Kind**: global function
**Returns**: <code>Object</code> - The jQuery html object

| Param | Type | Description |
| --- | --- | --- |
| tweetObject | <code>Object</code> | An object containing the tweet data |

<a name="loadTweets"></a>

## loadTweets(outputElement)
Function that retrieves tweet data from a pre-configured endpoint,
and then generates HTML for each tweet, outputting the HTML to the
specified existing output element

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| outputElement | <code>string</code> \| <code>Object</code> | The selector of the html element to which you wish to prepend the resulting html. Accepts any valid jQuery selector |


## Functions (composer-char-counter.js)

<dl>
<dt><a href="#getRemainingTweetLength">getRemainingTweetLength(inputSelector, maxLength)</a> ⇒ <code>number</code></dt>
<dd><p>Function that calculates total tweet length remaining</p>
</dd>
<dt><a href="#setCounterClass">setCounterClass(counterSelector, remainingTweetLength)</a> ⇒ <code>undefined</code></dt>
<dd><p>Function that toggles a .danger class on the tweet counter
if the current tweet exceeds the remaining tweet length</p>
</dd>
</dl>

<a name="getRemainingTweetLength"></a>

## getRemainingTweetLength(inputSelector, maxLength) ⇒ <code>number</code>
Function that calculates total tweet length remaining

**Kind**: global function
**Returns**: <code>number</code> - The total tweet length remaining

| Param | Type | Description |
| --- | --- | --- |
| inputSelector | <code>string</code> \| <code>Object</code> | The selector of the counter element. Accepts any valid jQuery selector |
| maxLength | <code>number</code> | The maximum number of characters allowed for this tweet |

<a name="setCounterClass"></a>

## setCounterClass(counterSelector, remainingTweetLength) ⇒ <code>undefined</code>
Function that toggles a .danger class on the tweet counter
if the current tweet exceeds the remaining tweet length

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| counterSelector | <code>string</code> \| <code>Object</code> | The selector of the counter element. Accepts any valid jQuery selector |
| remainingTweetLength | <code>number</code> | The number of characters remaining of allowed maximum for this tweet |