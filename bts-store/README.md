# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Project Demo
![View a demo](demo.mov)

# Setup and how to run project

Open two terminals, one for react and one for server

Go into the api folder, and find the .env-test and copy it onto a new file called .env, now add your own pangea tokens.

To run react app, use `yarn start` after running `npm install`. Shortly after, a browser window pointing to localhost:3000/ will be loaded. This is where the app is.

To setup flask server:
    - You can setup your venv first: 
    $ python3 -m venv venv
    $ source venv/bin/activate

Then run: `flask run`.

# Note on services used

For this project, I made use of the Python SDK in my Flask backend. The backend itself is only utilized for calling the pangea services, Redact and IP Intel.

# React app usage

When you first load web app, you will see a few images of BTS music albums. A header at the top mentions cities and to the right there is a cart button. If you are located in one of the listed cities, based on the IP Intel service info, that city should be selected and the album price will update according to location. For example, US cities will have the same price, but Canada and Mexico will both have different album prices that you can confirm on the cart screen.

If you hover over a BTS album cover, you will see a "Add to Cart" button. Clicking on this button will take you to the cart screen where you will be able to see the album name and its price, as well as a button at the bottom where you can complete your purchase.

Clicking "Pay Now" should take you to a form screen where you will input the details about where to send your order. On the phone and card number inputs, I have used the redact api. After entering those respective fields and clicking away or moving onto another input, those fields will show the partial phone/card numbers.

# Issues encountered and Future Improvements

An issue encountered while implementing usage of the IP Intel service was that my IP address at my home using Geolocation always returned "reserved". Unfortunately I was not able to test other internet services to test other locations or to confirm that not all locations are indeed marked as "reserved". Had I had a bit more bandwidth I would've like to setup a tool that uses geolocation from IP Intel and then goes further with it by figuring out which of the cities offered is the closest and updating the selected location in that manner. Currently, it defaults to LA if reserved city is found, or if city is not one of the selected locations.