# Develop locally

1. `npm install`
2. `npm run develop`

# Replace Strava Authorization Code

To fetch Strava activities with your own unique token, you will need to follow these steps:

1. Authenticate and allow `activity:read` permission [here](https://www.strava.com/oauth/authorize?client_id=17775&response_type=code&redirect_uri=http://localhost&approval_prompt=force&scope=activity:read)
2. Click "Authorize" ![Imgur](https://imgur.com/8PiSr1A.png)
3. You'll be redirected to localhost, which won't display anything. But in the url, you will get a code string:
   ![img](https://i.imgur.com/hgHpLYe.png)
4. Copy and replace the `uniqueAuthorizationCode` variable in `src/templates/ride.js`, line 41.

```js

  fetchToken() {
    //...
    let uniqueAuthorizationCode = 'c5141474b2c2f0bcaed94be1f28a8e0c6d574071'
    //...
```
