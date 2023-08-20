# Bii-Express-Template🚀
This express server framework was made to be scalable and easily retrofitable. This was done by identifying and segmenting the different abstractions of a server using strong OOP principles. This was initially written in Js but a rewrite in TS could be greatly beneficial. Understanding of how the server is configured is necessary but not hard. This is by no means a full, let alone complex, solution. It is instead a better starting point for creating express server instances. Considering making a TS version (This was made before I got into typescript) and integrating a cli config tool on install. Note: This server can still be be further optimised and other features can be implemented.
# Out of box Support
- Firebase Admin with Token authentication middleware
- MYSQL

# Server Configuration
# Routes
- All routes can be put within the /controller directory. Each controller must have a routes attribute. This attribute is an array containing all the controller routes. A route is broken down like so: { method, path, handler, priv(whether it is a protected route or not)}
# Auth middleware
- If auth middleware is not required, modification of the #RouteTable method inside of /app would be needed. You can either set priv = false, or ideally remove it is an argument completely. If Firebase is your auth middleware of choice simply get your serviceAccount.json config file from Firebase and put it into the main project directory. Indicate the file path inside of .env.
- If you would like to use different authentication middleware, set up its functionality as a static function within /config/admin and give it to #Routetable (path: /app).
# Database Instance
- Out of box the MYSQL2 sql driver is installed. You can put your configurations within the .env file and have it work within the server instance.
# /models
- Absolutely unecessary for most but for those who would like to keep models of their database tables, triggers or indexes.
