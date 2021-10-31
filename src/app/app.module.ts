import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, NoPreloading, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './modules/home/home.component';

registerLocaleData(localeFr);

const routerConfig: ExtraOptions = {
    preloadingStrategy       : NoPreloading,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-center',
            maxOpened: 1,
            autoDismiss: true
          }),
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),

        BrowserAnimationsModule,

        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [ { provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class AppModule
{
}