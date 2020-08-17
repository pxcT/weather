import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatToolbarModule],
    exports: [
        ContainerComponent,
        HeaderComponent,
        MenuComponent
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        ContainerComponent,
    ],
    providers: [],
})
export class LayoutModule { }
