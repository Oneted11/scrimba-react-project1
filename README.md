# Finished project screenshot
![image](https://user-images.githubusercontent.com/17639178/172549353-e18a0fb4-d5c8-4718-8651-31f4a0836c97.png)

# How to start
- [x] Ensure you have nodejs installed and either npm or yarn 
- [x] pwd into folder
- [x] run `npm install` or `yarn`
- [x] run `npm start` or `yarn start` or `npm run start`
- [ ] have fun with it

# Learnings
## ::marker
A css pseudo-element very useful for adding styling to your lists. In this project it has been used to make the dots big and blue 
```css
.main-content > ul > li::marker {
  color: #61dafb; /* Change the color */

  font-size: 1.4em; /* make bigger*/
}
```
## new render function in react 18

`ReactDOM.render(<app/>,document.getElementById("root"))` is now out of vogue this is the new method called [createRoot](https://reactjs.org/docs/react-dom-client.html)
I've used it as such:
```js
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.render(<App />, document.getElementById("root")); 
 ```




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
