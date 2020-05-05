import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Module thad includes all common essences

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
})
export class SharedModule {}
