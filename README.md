# Bouncing-Ball-on-Websocket-

# Running the Code
 - [Install Node.js and NPM](https://nodejs.org/en/download/)
 - Clone this to your machine
 - cd BouncingBallonWebsocket
 - `npm install`
 - 'node websocket-server.js'
 - Open 'client.html'
 
 # Application flow
 ![alt text](https://github.com/wamalana/Bouncing-Ball-on-Websocket-/blob/master/app_flow.jpg?raw=true)
 - step 1 : server open port
 - step 2 : client requested
 - step 3 : html call javascript
 - step 4 : server send number of client and trigger add newball or delete ball 
 - step 5 : javascript update response
 
  # Bug (27/02/2020)
   (script) can't trigger add/delete ball > problum: transform variables in fn
            window output,client '1' and client 'n' not same! > problum: javascript    
