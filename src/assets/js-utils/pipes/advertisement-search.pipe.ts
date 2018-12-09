import { Pipe } from '@angular/core';

@Pipe({
  name: 'advertisementSearch'
})
export class AdvertisementSearchPipe {
  transform(advertisementsList:any[], search:string):any {
    if(!advertisementsList || !search) {
      return advertisementsList;
    }
    return advertisementsList.filter(advertisement => {
      let SearchTag = search.toLowerCase();
      let city = advertisement.city.toLowerCase();
      let state = advertisement.state.toLowerCase();
      let country = advertisement.country.toLowerCase();

      if(city.indexOf(SearchTag) !== -1 || state.indexOf(SearchTag) !== -1 || country.indexOf(SearchTag) !== -1) {
        return advertisement;
      }
    })
  }
}