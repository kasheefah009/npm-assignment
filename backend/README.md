# Node.js Movement
Node.js helps the frontend and backend communicate with each other. It receives requests from users, sends them to the server, and then sends a response back to the user.

# The .env Protector
The .env file stores private information like secret passwords and database links. It containes sensitive stuffs that shouldnt be pushed to GitHub, if it is pushed to GitHub, anyone can see those secrets, which is dangerous.

# JSON's Role
express.json() helps the server understand JSON data sent from postman. It changes the raw data into a JavaScript object so we can easily use it with req.body.

# Git Ignore
The node_modules folder contains all the packages used in the project and can be very large. We ignore it because other developers can easily reinstall everything using npm install, so uploading it to GitHub is unnecessary.