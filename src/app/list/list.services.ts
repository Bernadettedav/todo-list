export class ListServices{
    items: string[]= [];
    toAdd(item: string){
        this.items.push(item);
    }
    toDelete(deletedItem: number){
        this.items.splice(deletedItem, 1);  
    }
    getItems():string[]{
        return this.items;
    }
}