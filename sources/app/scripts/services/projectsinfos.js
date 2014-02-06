'use strict';

angular.module('sylTigithubioApp')
	.factory('Project', function Proj()
	{
		function Project(name, langage, link)
			{
				this.name = name;
				this.langage = langage;
				this.link = link;
			}
		return Project;
	});

angular.module('sylTigithubioApp')
	.factory('Projectsinfos',
		function Projectsinfos(Project)
		{
			var projsFull = [],
				projsYear1 = [],
				projsYear2 = [],
				projsYear3 = [],
				projsYear4 = [],
				projsYear5 = [];

			projsYear1.push(new Project('shell', 'C', 'http://github.com/SylTi/'));
			projsYear1.push(new Project('Raytracer', 'C', 'http://github.com/SylTi/'));

			projsYear2.push(new Project('Techweb', 'PHP', 'http://github.com/SylTi/'));
			projsYear2.push(new Project('Zappy', 'C', 'http://github.com/SylTi/'));

			projsYear3.push(new Project('httpd', 'C++', 'http://github.com/SylTi/'));
			projsYear3.push(new Project('Ecommerce Website', 'Java/JSP/JSF', 'http://github.com/SylTi/'));

			projsYear4.push(new Project('MyWMP', 'C#/WMP', 'http://github.com/SylTi/'));

			projsYear5.push(new Project('TeamCode', 'C++/Qt', 'http://github.com/SylTi/'));
			
			projsFull.push(projsYear1);
			projsFull.push(projsYear2);
			projsFull.push(projsYear3);
			projsFull.push(projsYear4);
			projsFull.push(projsYear5);
			return (projsFull);

// AngularJS will instantiate a singleton by calling "new" on this function
		}
	);
