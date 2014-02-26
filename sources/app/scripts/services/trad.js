'use strict';

angular.module('sylTigithubioApp')
  .factory('Trad',
    function () {
      var langs =
      {
        french :
        {
          welcome : 'Bienvenue sur le CV Web de Sylvain Tissier'
        },
        english :
        {
          welcome : 'Welcome on the Web CV of Sylvain Tissier'
        }
      };
      return langs;
    });
