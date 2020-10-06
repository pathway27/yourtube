# yourtube

Take control over **your** you**tube** subscriptions.

- Watch all their uploads, chronologically.
- Watch any channels' uploads

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm do `npm i -g npm yarn ember-cli`)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd yourtube`
* `yarn`

Do this while you wait:

Go to [Google Developer Console](https://console.developers.google.com) and:

- Create a project
- `cp .env.sample > .env`
- Create an API Key (Restrict it to Youtube Data API) as `GOOGLE_API_KEY`
- Create an OAuth 2.0 Client ID
  - App. Type: Web App.
  - Name: Dev (Make another one for prod.)
  - URIs: https://localhost:4200
-  as `OAUTH_CLIENT_ID`

Export them into current session:

```
set -a
source .env
set +a
env | grep -i 'google' # make sure those variables are shown
```

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# Notes about Ember.js

It feels overly complicated. And not enough documentation.
