console.log(cityGrowths);

// Sort the cities by growth 
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
// Select only the top five cities by population growth using Slice.
var topFiveCities = sortedCities.slice(0,5);
// Create separate arrarys for the city neames and their population growths.
// These 2 arrays will be the x and y axis data of the Plotly chart
var cityNames = cityGrowths.map(function(city){
    return city.City;
});
var cityPopulation= cityGrowths.map(function(pop) {
    return pop.population;
});

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
////////////////SKILL DRILL  
//Use the same dataset to create a bar chart of the seven largest cities by population.

var cityPopulation= cityGrowths.map(function(pop) {
    return pop.population;
});

var topFiveCityNames = topFiveCities.map(city => city.City);
var largestCitiesByPop = topFiveCities.map(city => parseInt(city.population));
var trace2 = {
    x: topFiveCityNames,
    y: largestCitiesByPop,
    name: "Largest Population",
    type: "bar"
  };
  var data = [trace2];
  var layout = {
    title: "Largest Cities by Population",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar2-plot", data, layout);
