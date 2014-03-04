'use strict';

angular.module('sylTigithubioApp')
	.factory('Project', function Proj()
	{
		function Project(name, langage, description, link)
			{
				this.name = name;
				this.langage = langage;
				this.description = description;
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

			projsYear1.push(new Project('Shell', 'C',
				'Le 42sh est un projet à réaliser en groupe de quatre à six.<br />Ce projet est l\'un des plus importants de première année.<br />Le projet consiste en l\'écriture d\'un Shell du niveau de bash, tcsh et autres.<br /><br /><a href="./images/screens/42sh.jpg"><img src="./images/screens/42sh.jpg" height="130px" width="280px" /></a>',
				'http://github.com/SylTi/'));
			projsYear1.push(new Project('Raytracer', 'C',
				'Le Raytracer est un projet à réaliser en groupe de quatre à six.<br />Ce projet est l\'un des plus importants de première année.<br />Le but de ce projet est de créer une "image de synthèse" à partir de la méthode de Ray-Tracing.<br />La méthode dite de Ray-Tracing est la suivante : pour chaque pixel (point de l\'image), on détermine une couleur en fonction de l’intersection entre l’un des rayons lancés et l’un des objets se trouvant dans la scène que l\'on observe à partir d’un point de celle-ci.<br />Cette couleur est ensuite influencée par des effets ajoutés tels que les lumières, les ombres, la transparence… <br /><br /><a href="./images/screens/rt1.jpg"><img src="./images/screens/rt1.jpg" height="130px" width="280px" /></a>  <a href="./images/screens/rt2.jpg"><img src="./images/screens/rt2.jpg" height="130px" width="280px" /></a>',
				'http://github.com/SylTi/'));

			projsYear2.push(new Project('Techweb', 'PHP',
				'Le techweb est un projet de 2eme année ce deroulant sur toute l\'année.<br />Le but de ce projet est de réaliser une solution de gestion de projet orientée web.<br /><br /><a href="./images/screens/techweb.jpg"><img src="./images/screens/techweb.jpg" height="130px" width="280px" /></a>',
				'<a href="https://github.com/SylTi/school/tree/master/school/second_year/php/techweb">TechWeb</a>'));
			projsYear2.push(new Project('Zappy', 'C',
				'',
				'http://github.com/SylTi/'));
			projsYear2.push(new Project('Vennys Project', 'PHP',
				'Vennys Project était mon projet de fin de 2eme année.<br />Il a été réalisé par un groupe de 6 personnes.<br />Le but de ce projet est de créer un FrontEnd en PHP pour le tracker bitTorrent XBT<br /><br /><a href="./images/screens/vennys.jpg"><img src="./images/screens/vennys.jpg" height="130px" width="280px" /></a>',
				'<a href="https://github.com/SylTi/school/tree/master/school/second_year/php/vennys">Vennys</a>'));


			projsYear3.push(new Project('httpd', 'C++', '', 'http://github.com/SylTi/'));
			projsYear3.push(new Project('Ecommerce Website', 'Java/JSP/JSF',
				'Site de E-commerce réalisé from scratch en Java/JSF/JSP',
				'<a href="https://github.com/SylTi/school/tree/master/school/third_year/java/Epimarket">EpiMarket</a>'));

			projsYear4.push(new Project('MyWMP', 'C#/WMP', '', 'http://github.com/SylTi/'));

			projsYear5.push(new Project('TeamCode', 'C++/Qt',
				'Le projet TeamCode est un environnement de développement (IDE) multi-langage et multiplateforme destiné principalement au monde des développeurs professionnels mais également à celui des développeurs amateurs nécessitant une collaboration poussée entre les différents acteurs. <br />Il a été crée dans le but d\'optimiser le travail en équipe que ce soit sur des projets de taille moyenne ou sur des projets plus conséquents.<br />Basé sur une architecture client/serveur, TeamCode est une solution de développement simple, légère et efficace.<br />Ca particularité vient de l\'ajout d\'une couche réseau permettant un travail collaboratif extrêmement poussé en temps réel, ainsi qu\'un outil de gestion de version des fichiers sur le projet intégré totalement dans la solution TeamCode',
				'Non Disponible <a href="https://www.youtube.com/watch?v=naBTXXypOAQ">Demo Video</a>'));
			
			projsFull.push(projsYear1);
			projsFull.push(projsYear2);
			projsFull.push(projsYear3);
			projsFull.push(projsYear4);
			projsFull.push(projsYear5);
			return (projsFull);

// AngularJS will instantiate a singleton by calling "new" on this function
		}
	);

