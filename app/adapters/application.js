import DS from 'ember-data';

export default DS.Adapter.extend({
  yourtube: Ember.inject.service('yourtube-api'),

  findAll: function(store, type, sinceToken) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var lsSubs = localStorage.getItem('yt:subs');
      if (!lsSubs) {
        self.get('yourtube').subscriptions().then(function(res) {
          console.log('cant find in localstorage');
          return res.result;
        }).then(function(firstResult) {
          console.log('second');
          var subs = firstResult.items;
          console.log(subs);
          var hasMore = firstResult.nextPageToken;
      
          function recur(hasMore) {
            if (hasMore) {
              self.get('yourtube').subscriptions(hasMore).then(function(res) {
                console.log(hasMore);
                hasMore = res.result.nextPageToken;
                console.log(hasMore);
                subs = subs.concat(res.result.items);
                console.log(subs);
                recur(hasMore);
              });
            } else {
              console.log('gsf');
              console.log(subs);
              
              localStorage.setItem('yt:subs', JSON.stringify(subs));
              resolve(subs);
            }
          }
      
          recur(hasMore);
        });
      } else {
        console.log('found in localstorage');
        resolve(JSON.parse(lsSubs));
      }
    });
  }
});