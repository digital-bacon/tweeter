# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Disclaimer

This app was built for educational purposes only. Do not use this app in any production environment or provide any sensitive information while using this app. The security and privacy of information you provide is **not** guaranteed.


## Purpose

Learn responsive design and AJAX using a familiar app as inspiration, Twitter.


## Installation

**Node.js:**

`npm install`


## Usage

**Start the server:**

`npm start local`

**Open the app in your web browser:**

http://localhost:8080/(http://localhost:8080/)

If you would like to use a different port from 8080, open `server/index.js` and change the `PORT` variable.

**Stop the server:**

`CTRL^C` in your terminal


## Dependencies

* [body parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.
* [chance](https://github.com/chancejs/chancejs) - Random generator helper for JavaScript.
* [express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for Node.js.
* [jsdoc2md](https://github.com/jsdoc2md) - Generates markdown from js-doc annotated sources.
* [md5](https://github.com/pvorb/node-md5) - JavaScript function for hashing messages with MD5.
* [node 5.10.x or higher](https://github.com/nodejs) - Open-source, cross-platform JavaScript runtime environment.


## Final Product

<img src="https://github.com/digital-bacon/tweeter/blob/master/docs/tweeter_(iPhone%20SE).png" alt="Viewport: iPhone SE (emulated)" width="224" height="400" />
<img src="https://github.com/digital-bacon/tweeter/blob/master/docs/tweeter_(iPad%20Mini).png" alt="Viewport: iPad Mini (emulated)" width="299" height="400" />
<img src="https://github.com/digital-bacon/tweeter/blob/master/docs/tweeter_1024x576.png" alt="Viewport: 1024x576 (emulated)" width="711" height="400" />
<img src="https://github.com/digital-bacon/tweeter/blob/master/docs/tweeter_1536x864.png" alt="Viewport: 1536x864(emulated)" width="711" height="400" />
<img src="https://github.com/digital-bacon/tweeter/blob/master/docs/tweeter_1920x1080.png" alt="Viewport: 1920x1080 (emulated)" width="711" height="400" />


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