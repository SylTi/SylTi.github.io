'use strict';

/**
 * @ngdoc function
 * @name sylTiCvApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the sylTiCvApp
 */
angular.module('sylTiCvApp')
  .controller('ContactCtrl', function ($scope, $http) 
  {
    $scope.msg =
	{
		name: '',
		email: '',
		subject: '',
		content: ''
	};

	$scope.send = function ()
	{
		var data =
		{
			'key': 'Q7DJxTIV5GSpZ-U_BrtIZA',
			'message':
			{
				'html': $scope.msg.content,
				'subject': $scope.msg.subject,
				'from_email': $scope.msg.email,
				//'from_name': $scope.msg.name,
				'to':
				[{
					'email': 'sylvain.tissier@gmail.com',
					'name': 'Sylvain Tissier',
					'type': 'to'
				}]
			}
		};
		$http.post('https://mandrillapp.com/api/1.0/messages/send.json', data)
		.success(function(res)
		{
			if (res[0].status === 'sent')
			{
				$scope.resultgood = 'Message Envoyé';
			}
			else
			{
				$scope.resultbad = 'Erreur lors de l\'envois du message';
			}
		});
	};
  });
