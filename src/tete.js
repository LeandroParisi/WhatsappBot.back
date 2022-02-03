const openrouteservice = require('openrouteservice-js');

const Geocode = new openrouteservice.Geocode({ api_key: '5b3ce3597851110001cf6248088fc2944d0a4dd0b50d633a4f65dc30' });

Geocode.geocode({
  text: 'Heidelberg',
  boundary_circle: { lat_lng: [49.412388, 8.681247], radius: 50 },
  boundary_bbox: [[49.260929, 8.40063], [49.504102, 8.941707]],
  boundary_country: ['DE'],
})
  .then((response) => {
  // Add your own result handling here
    console.log('response', JSON.stringify(response));
  })
  .catch((err) => {
    const str = `An error occurred: ${err}`;
    console.log(str);
  });

const Matrix = new openrouteservice.Matrix({ api_key: '5b3ce3597851110001cf6248088fc2944d0a4dd0b50d633a4f65dc30' });

Matrix.calculate({
  locations: [[8.690958, 49.404662], [8.687868, 49.390139], [8.687868, 49.390133]],
  profile: 'driving-car',
  sources: ['all'],
  destinations: ['all'],
})
  .then((response) => {
  // Add your own result handling here
    console.log('response', response);
  })
  .catch((err) => {
    const str = `An error occurred: ${err}`;
    console.log(str);
  });
