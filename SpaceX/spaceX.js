//In the first line, the URL to the SpaceX is defined.

const url = "https://api.spacexdata.com/v2/launchpads";

//In the second line, d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
d3.json(url).then(receivedData => console.log(receivedData));
