import { Component } from '@angular/core';
import  './chat/index-old-school.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  ngAfterViewInit(): void {
    /*new chat*/
    window.onerror = function () { }
    Talk(
        {
            token: "7396b60fbe204a89ae0902092b94d2ad",//from get url which suppuos to be sent by mr abedi
            supportMode: "192221",//tread id
            routerLess: true,
            disableNotification: false,
            small: true,
            chatSupportAutoShowing: true
        }, "app",
        function (instance) {
            //SET TOKEN WHEN YOU GOT FRESH TOKEN
            //instance.setToken("REFRESH_TOKEN");
        });
/*End new chat*/
}


}
