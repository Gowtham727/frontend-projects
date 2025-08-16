
   const url = 'https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&alt=43&start=2020-01-01&end=2020-12-31';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '46c76fe8aemsh672814cdbd56d54p1e7492jsne54880b236ae',
		'x-rapidapi-host': 'meteostat.p.rapidapi.com'
	}
};
fetch(url,options)
.then((res ) =>{
    return res.json();
})
.then((data) => {
    console.log(data);
})

