import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        NgbModule,
        ServerModule,
        ...sharedConfig.imports
    ]
})
export class AppModule {
}
