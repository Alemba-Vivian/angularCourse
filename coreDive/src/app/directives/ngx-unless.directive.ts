import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  //will make sure that the view is created only once and clear method shouldn't clear whenever the view is cleared
  visible=false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { 

                  
  }

  @Input()
  set ngxUnless(condition:boolean){
    if(!condition && !this.visible){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible=true;
    }else if(condition && !this.visible ){
      //clear() method remove anything we might have initiated in the view cointainer
      this.viewContainer.clear();
      this.visible=false;
    }

  }

}
