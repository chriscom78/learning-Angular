import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { TextBoxOneComponent } from './text-box-one/text-box-one.component';
import { TextBoxTwoComponent } from './text-box-two/text-box-two.component';
import { TextBoxThreeComponent } from './text-box-three/text-box-three.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    FlexBoxComponent,
    TextBoxOneComponent,
    TextBoxTwoComponent,
    TextBoxThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
