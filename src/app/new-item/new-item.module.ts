import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { CommonModule } from "@angular/common";
import { newMediaItemRouting } from "./new-item.routing";

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      newMediaItemRouting
],
  declarations: [
      MediaItemFormComponent
    ],
})
export class NewItemModule {}
