angular.module('redditApp').factory('RedditFactory', function(RedditService) {

  /**
  * function getData
  * service call pattern using angular $q promises
  * resolve returns response, reject returns error
  * @returns {promise.promise|jQuery.promise}
  */

  var Reddit = function() { // constructor
    this.items = [];
    this.busy = false;
    var after = this.after = '';

    this.nextPage = function() {
      var self = this;
      if (this.busy) {
        return;
      }
      this.busy = true;

      RedditService.nextPage(this.after)
        .then(function (data) {
          var results = data.data.children;
          console.log(results);
          angular.forEach(results, function(item) {
            self.items.push(item.data);
          });
          self.after = 't3_' + self.items[self.items.length - 1].id;
          self.busy = false;
        });
    };
  };

  return Reddit;

});
