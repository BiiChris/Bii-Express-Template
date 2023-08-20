# Bii-Express-Template🚀
This express server framework was made to be scalable and easily retrofitable. This was done by identifying and segmenting the different abstractions of a server using strong OOP principles. This was initially written in Js but a rewrite in TS could be greatly beneficial. Understanding of how the server is configured is necessary but not hard. This is by no means a full, let alone complex, solution. It is instead a better starting point for creating express server instances.

# Out of box Support
- Firebase
- MYSQL

# Server Configuration
- Routes
All routes can be put within the /controller directory. Each controller must have a routes attribute. This attribute is an array containing all the controller routes. A route is broken down like so: { method, path, handler, priv(whether it is a protected route or not)}
- Auth middleware
As stated. Out the box support for Firebase. If this is the auth middleware of choice you can simply getting your serviceAccount.json config file from Firebase and put it into the main project directory. Indicate the route within the .env config
- Database Instance
Out of box the MYSQL2 sql driver is installed. You can put your configurations within the .env file and have it work within the server instance.
- /models
Absolutely unecessary for most but for those who would like t
