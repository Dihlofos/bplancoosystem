import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ModalService } from './shared/services/modal.service';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AlertComponent,
    MainComponent,
    DataTableComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [AuthGuard, AlertService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
