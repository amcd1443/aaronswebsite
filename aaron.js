
			function myFunction() {
    		document.getElementById("demo").innerHTML = "display bk page";
    		}

    		function bkMustVisits() {
    			var bkLocations = getBKLocations();
    			showLocations(bkLocations);
    		}


    		function getManhattanLocations() {
    			var locations = [];
				locations.push({name: "Blacktail", description:" Located in FiDi, new cocktail spot, prohibition era themed"});
				locations.push({name: "Fioro", description:"Italian spot in Fidi"});
				locations.push({name: "Casa Apicii", description:"good Italian food in a townhouse in Greenwich village"});
				locations.push({name: "Zadie's Oyster Room", description:"oysters any way you want them, east village"});
				locations.push({name: "Mimi", description:"new French restaurant in Greenwich village"});
				locations.push({name: "Pasquale Jones", description:"sister spot from Charlie bird people on Kenmare"});
				locations.push({name: "Gelato & Grand", description:"LES, Italian"});
				locations.push({name: "Kitty's a-Go-Go", description:"off shoot of Kitty's canteen, same type of food, LES"});
				locations.push({name: "The Garret East", description:"cool décor cocktail bar, offshoot of west village bar"});
				locations.push({name: "Visana and Pisa Pizza", description:"speakeasy/dance lounge in the back of a pizza spot"});
				locations.push({name: "Riddling Window", description:"underground bar focusing on bubbly, Greenwich village"});
				locations.push({name: "Cafe Altro Paradiso", description:"Italian food from same people as Estela, on spring street"});
				locations.push({name: "Jams", description:"midtown, chef from Barbuto, famous spot that reopened"});
				locations.push({name: "La Pecora Bianca", description:"Fidi, new cocktail spot, prohibition era themed"});
				locations.push({name: "Manhattan Brew & Vine", description:"if on the UWS, lounge type place for drinks, small bites"});
				locations.push({name: "Broken Spoke Rotisserie", description:"focuses on rotisserie meats, unfortunately in Murray Hill"});
				locations.push({name: "Macchina", description:"new pizza spot on UWS, same owners as The Bedford"});
				locations.push({name: "Drexler's", description:"new drink spot in alphabet city"});
				locations.push({name: "L'Amico", description:"rustic spot in Flatiron, Italian food"});
				locations.push({name: "Bruno Pizza", description:"east village, Neapolitan type pies"});
				locations.push({name: "Quality Eats", description:"great steaks in the west village"});
				locations.push({name: "Sessanta", description:"Classic Italian, inside the SIXTY soho hotel, soho"});
				locations.push({name: "Chef's Club by Food & Wine", description:"open kitchen, soho"});
				locations.push({name: "Vaucluse", description:"French brasserie in midtown, lots of truffles"});
				locations.push({name: "Superiority Burger", description:"east village, veggie burger, not for me but rave reviews"});
				locations.push({name: "Kat & Theo", description:"American/Mediterranean food in flatiron, charred octopus and steak"});
				locations.push({name: "Fuku", description:"fried chicken sandwich"});
				locations.push({name: "Virginia's", description:"heavy food, east village, burger is good, duck risotto"});
				locations.push({name: "Wildair", description:"LES, wine bar with good food"});
				locations.push({name: "Dante", description:"soho, used to be caffe Dante, great to grab a last minute drink and bite"});
				locations.push({name: "La Contenta", description:"Mexican"});
				locations.push({name: "Houseman", description:"good food in soho, burger is supposed to be good"});
				locations.push({name: "Seamore's", description:"fresh seafood made healthy, nolita"});
				locations.push({name: "The Clocktower", description:"British restaurant, second floor of the edition hotel, plan to eat"});
				locations.push({name: "Royale", description:"great burger, in alphabet city, outdoor patio in the back, kind of divey"});
				locations.push({name: "Vol de nuit", description:"two story Belgian spot with an outdoor courtyard in Greenwich village"});
				locations.push({name: "Revival NYC", description:"Irving place, outdoor back patio under trees"});
				locations.push({name: "Tree Bistro", description:"french restaurant in east village with secret back outdoor patio"});
				locations.push({name: "L&W oyster company", description:"on 29th and fifth"});
				locations.push({name: "Babbalucci", description:"new pizza spot in Harlem"});
				locations.push({name: "Lupulo", description:"Portuguese food in flatiron"});
				locations.push({name: "Rebelle", description:"LES, must try"});
				locations.push({name: "Industry Kitchen", description:"FiDi, near the water"});
				locations.push({name: "Santina", description:"under the highline, italian food but mostly seafood and veggies, same people as Dirty French and Carbone"});	
				locations.push({name: "West End Hall", description:"beer garden on west 106 and Broadway"});
				locations.push({name: "Abajo", description:"mezcal speakeasy underneath a mexican spot in Tribeca"});
				locations.push({name: "BEC", description:"all breakfast sandwiches in Hell's Kitchen"});	
				locations.push({name: "Sessanta", description:"new Italian spot in soho"});
				locations.push({name: "Harry and Ida's Meat and Supply Co", description:"east village must go to, all kinds of meats"});
				locations.push({name: "Raclette", description:"grilled cheese, east village"});	
				locations.push({name: "Virginia's", description:"American food, east village, cozy"});
				locations.push({name: "Rosie's", description:"mexican, has outdoor seating, east village"});
				locations.push({name: "Bara", description:"east village, french and japanese food, get the flatiron steak"});	
				locations.push({name: "North End Grill", description:"Battery Park City, get the porterhouse"});
				locations.push({name: "King Bee", description:"east village, grilled oysters and steak"});
				locations.push({name: "Maman", description:"great to take family to brunch here, soho"});	
				locations.push({name: "Petaluma", description:"ues, reopened after being closed for a while"});
				locations.push({name: "Evening Bar", description:"sexy bar in smythe hotel lobby in Tribeca"});
				locations.push({name: "Black Hound Bar", description:"craft cocktails in battery park city"});
				locations.push({name: "Charlie Palmer Steakhouse", description:"midtown east"});
				locations.push({name: "White Street", description:"TriBeCa, American type food, fun night out restaurant, also does brunch"});
				locations.push({name: "Tuome", description:"East village, must try restaurant"});	
				locations.push({name: "Botequim", description:"new Brazilian restaurant on 13th and 4th"});
				locations.push({name: "Holden & Astor", description:"meatpacking, American style food"});
				locations.push({name: "Le Jardin Bistro", description:"alphabet city, French restaurant"});
				locations.push({name: "Marta", description:"pizza spot"});	
				locations.push({name: "Seoul Chicken", description:"rivington and Clinton, fried chicken bar"});
				locations.push({name: "Elan", description:"French restaurant in flatiron, possible date spot?, sea urchin guacamole"});
				locations.push({name: "Bar Sardine", description:"part of chez sardine, great fancy bar snacks, west village"});
				locations.push({name: "Spyglass Rooftop Bar", description:"on 22nd floor of the archer hotel, drink spot overlooking Empire State Building"});	
				locations.push({name: "Fools Gold", description:"beer bar LES"});
				locations.push({name: "Champagne Charlie's", description:"champagne outdoor bar on the terrace of the The Highline Hotel, also serves oysters"});
				locations.push({name: "Subject", description:"Suffolk and Houston, drink spot"});
				locations.push({name: "Huertas", description:"tapas in east village, brand new"});	
				locations.push({name: "Cafe El Presidente", description:"Mexican spot in flatiron"});
				locations.push({name: "The Pavilion", description:"in union square"});
				locations.push({name: "Rintintin", description:"nolita, Mediterranean date spot"});
				locations.push({name: "Horchata", description:"next level Mexican spot in Greenwich village"});	
				locations.push({name: "Batard", description:"TriBeCa, try the octopus pastrami"});
				locations.push({name: "Tender", description:"midtown sexy lounge slash steakhouse slash sushi joint in the sanctuary hotel"});
				locations.push({name: "Chicane", description:"soho, French Riviera type restaurant"});
				locations.push({name: "Brunch at the top of the standard", description:"boom boom room during the day"});	
				locations.push({name: "North River", description:"east village, cocktail bar and brunch"});
				locations.push({name: "Rosette", description:"LES"});
				locations.push({name: "Mission Cantina", description:"follow up to mission Chinese, orchard and Stanton"});
				locations.push({name: "Telepan Local", description:"west village, casual American cuisine"});	
				locations.push({name: "The Clam", description:"west village, looks excellent"});
				locations.push({name: "Wallflower", description:"must do, same owners as mother's ruin, west village"});
				locations.push({name: "Il Principe", description:"tribeca, rustic Italian food, in Hotel Hugo"});	
				locations.push({name: "Heartwood", description:"Chelsea"});
				locations.push({name: "Barchetta", description:"Italian seafood, Chelsea, does brunch as well"});
				locations.push({name: "Sopra", description:"midtown, communal style dining, have to choose from food they are making that week"});	
				locations.push({name: "Mile End Sandwich Shop", description:"go for the smoked meat poutine"});
				locations.push({name: "Little Muenster", description:"LES, all kinds of grilled cheese sandwiches"});
				locations.push({name: "Bobwhite Lunch and Supper Counter", description:"venue C, fried chicken"});	
				locations.push({name: "Ducks Eatery", description:"east village bbq spot, brisket brisket brisket"});
				locations.push({name: "General Assembly", description:"former hurricane club spot, try the steak?, flatiron"});
				locations.push({name: "Good", description:"brunch spot in west village"});	
				locations.push({name: "SixtyFive Bar at the Rainbow Room", description:"cocktail bar and amazing views"});
				locations.push({name: "Bar Hugo", description:"amazing views and year round rooftop, hudson square"});
				locations.push({name: "Cheeky Sandwiches", description:"definitely need to try some of these, LES"});	
				locations.push({name: "Mountain Bird", description:"specializes in poultry, Harlem"});
				locations.push({name: "Le Turtle", description:"LES, sceney restaurant right now, same owners as Freemans and the smile"});
				locations.push({name: "Pizzeria Sirenetta", description:"Neapolitan pizza on the UWS, same owners as mermaid inn"});	
				locations.push({name: "Suffolk Arms", description:"cocktail bar in LES, also food"});
				locations.push({name: "Amanda", description:"battery park, new upscale Spanish tapas spot"});
				locations.push({name: "Baker's Pizza", description:"east village, classic NYC pizza"});	
				locations.push({name: "Springbone Kitchen", description:"Greenwich village, specializing in paleo options"});
				locations.push({name: "Sushi Ginza onodera", description:"chain sushi spot open in midtown"});
				locations.push({name: "Fish Bar at North River Landing", description:"seafood lounge on a boat at Pier 81 on west side"});	
				locations.push({name: "Garfunkel's", description:"book online reservation to get a code, enter through a back room vault, above the restaurant Burgary, for drinks on Clinton St"});
				locations.push({name: "Dinnertable", description:"secret reverse speakeasy in the back of the garret east, food is great, must try"});
				locations.push({name: "City Vineyard at Pier 26", description:"indoor and outdoor bar on west side with great sunset views"});	
				locations.push({name: "Paloma Bar", description:"self serve beer bar in LES"});
				locations.push({name: "Covina", description:"Italian restaurant at the bottom of the Park South hotel"});
				locations.push({name: "Eataly", description:"new downtown location at 4 World Trade Center"});
				return locations;
    		}

    		function showLocations (locations) {

				var locationList = document.getElementById("locationList");

				var googleLinkBase = "https://maps.google.com/maps?q=";
				
				for (i = 0; i < locations.length; i++) {
					var individualLocation = locations[i];

					var elementText = "<li> "+ individualLocation.name + " - " + individualLocation.description;
					elementText += " see on " + "<a href= " + googleLinkBase + individualLocation.name + ">click here</a>" + "  </li>";

					locationList.innerHTML += elementText;
				}	
    		}

    		function getBKLocations() {
    			var brooklynLocations = [];
    			brooklynLocations.push({name: "Barano", description:" southern Italian food"});
    			brooklynLocations.push({name: "Cherrypoint", description:"meat centric restaurant in Greenpoint"});
    			brooklynLocations.push({name: "Lighthouse", description:" fresh light food"});
    			brooklynLocations.push({name: "Sunken Hundred", description:" Welsh Food in Cobble Hill"});
    			brooklynLocations.push({name: "Westlight", description:" new bar atop William Vale Hotel on N 12"});
    			brooklynLocations.push({name: "Lavender Lake", description:" good for day time drinking with friends indoors or outdoors, on Carroll St"});
    			brooklynLocations.push({name: "Allswell", description:" Bedford Ave, great burger and also fried chicken sandwich"});
    			brooklynLocations.push({name: "arla Halls Southern Kitchen", description:" downtown Brooklyn, Nashville hot chicken"});
    			brooklynLocations.push({name: "Midnights", description:" serves food till 4am, good music apparently, lamb burger, N 6th between Berry and Bedford"});
    			brooklynLocations.push({name: "Karasu", description:" secret Japanese izakaya, go to back of Walters restaurant and go through unmarked door, speakeasy, Japanese whiskey and sake, small food menu"});
    			brooklynLocations.push({name: "The Big Whiskey", description:" Williamsburg huge space"});
    			return brooklynLocations
    		}

    	var startLocations = getManhattanLocations();    	
    	showLocations(startLocations);





