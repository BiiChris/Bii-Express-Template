# Bii-Express-Template🚀

# Out of box Support
- Firebase
- MYSQL

# Server Configuration
# Routes
- All routes can be put within the /controller directory. Each controller must have a routes attribute. This attribute is an array containing all the controller routes. A route is broken down like so: { method, path, handler, priv(whether it is a protected route or not)}
# Auth middleware
- As stated. Out the box support for Firebase. If this is the auth middleware of choice you can simply getting your serviceAccount.json config file from Firebase and put it into the main project directory. Indicate the route within the .env config
# Database Instance
- Out of box the MYSQL2 sql driver is installed. You can put your configurations within the .env file and have it work within the server instance.
# /models
- Absolutely unecessary for most but for those who would like to keep models of their database tables, triggers or indexes.
