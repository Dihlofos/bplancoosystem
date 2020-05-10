import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AuthGuard } from './shared/services/auth.guard';
import { AlertService } from './shared/services/alert.service';
import { AlertComponent } from './shared/components/alert/alert.component';
import { MainComponent } from './pages/main/main.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableDialogComponent } from './components/data-table-dialog/data-table-dialog.component';
import { BNeedService } from './shared/services/bneeds.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AlertComponent,
    MainComponent,
    DataTableComponent,
    DataTableDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [AuthGuard, AlertService, BNeedService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
