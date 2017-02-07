import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})

export class FilterPipe {

  transform(items, filterTerms, forceUpdate) {

    // Abbruch wenn kein Filter Objekt vorhanden
	if (filterTerms === undefined) return items;

	// Abbruch wenn kein Filter gesetzt
	var filterCounter = 0;
	for ( var filterGroup in filterTerms ) {
		for ( var filterTerm in filterTerms[filterGroup] ) {
			filterCounter++;
		}
	}
	if (filterCounter === 0) return items;

	return items.filter( function(item) {

		var colorFilter = 1000;
		var priceFilter = 1000;

		for ( var filterGroup in filterTerms ) {
		
			for ( var filterTerm in filterTerms[filterGroup] ) {

				switch (filterGroup) {

					case "color":
						if ( filterTerms[filterGroup][filterTerm] === true && colorFilter >= 1000 ) { colorFilter = 0 }
						if ( filterTerms[filterGroup][filterTerm] === true &&
							item.color.toLowerCase() === filterTerm.toLowerCase() ) { colorFilter++ }
						break;

					case "price":
						if ( filterTerms[filterGroup][filterTerm] === true && priceFilter >= 1000 ) { priceFilter = 0 }
						if ( filterTerms[filterGroup][filterTerm] === true ) {

							switch(filterTerm.toLowerCase()){

								case "p1":
									if ( item.price <= 10 ) { priceFilter++; }
									break;

								case "p2":
									if ( item.price > 10 && item.price <= 100 ) { priceFilter++; }
									break;

								case "p3":
									if ( item.price > 100 && item.price <= 500 ) { priceFilter++; }
									break;

								case "p4":
									if ( item.price > 500 ) { priceFilter++; }
									break;	
							}

						}

						break;


				}

			}
		
		}

    	return (colorFilter > 0) && (priceFilter > 0);

    });

  }

}