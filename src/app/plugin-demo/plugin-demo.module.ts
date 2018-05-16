import { NgModule, Injector } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  declarations: [WelcomeComponent],
  entryComponents: [WelcomeComponent]
})
export class PluginDemoModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
  }
}
