//import {computedFrom} from 'aurelia-framework';

export class Welcome {
    cards = new Array<any>();
    
    
    activate() {
        this.spawnItems()
    }   
    
    spawnItems() {
        var i = 1;
        for(var j = 0; j < 50; j++) {
            this.cards.push({
               id: j 
            });
        }        
    }
}