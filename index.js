
module.exports = function() {
  var faker = require('Faker');

  var data = { channels: [], playlists: [], videos: [] };
  // Create 100 users
  for (var i = 0; i < 100; i++) {
    data.channels.push({
        id: i,
        title: faker.internet.userName(),
        description: faker.name.jobDescriptor(),
        publishedAt: Date.now(),
        uploads: i,
        thumbnails: {
            med: faker.image.avatar(),
            high: faker.image.image(),
        }
    });
  }

  function genList(end) {
    var arr = [];
    for (var j = 0, end = 10; j < end; j++) {
      arr.push(Math.round(Math.random() * 1000))
    }
    return arr;
  }

  for (var i = 0; i < 100; i++) {
    data.playlists.push({
        id: i,
        name: faker.internet.userName(),
        channel_id: i,
        videos: genList(10)
    });
  }

  for (var i = 0; i < 1000; i++) {
    data.videos.push({
        id: i,
        title: faker.internet.userName(),
        description: faker.name.jobDescriptor(),
        publishedAt: Date.now(),
        uploads: i,
        thumbnails: {
            med: faker.image.avatar(),
            high: faker.image.cats(),
        },
        channel_id: Math.floor(Math.random(i) * 101)
    });
  }



  return data;
}
