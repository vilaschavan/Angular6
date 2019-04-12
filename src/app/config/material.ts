import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatMenuModule],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatMenuModule],
})

export class MaterialModule { }
