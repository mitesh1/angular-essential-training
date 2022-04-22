import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name : 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(element => {
        console.log(element);
        if(mediaItems.indexOf(element.category) <= -1){
            categories.push(element.category);
        }
    });
    return categories.join(', ');
}
}