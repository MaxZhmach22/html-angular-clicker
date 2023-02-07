import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit{

  ngOnInit(): void {
    const buildUrl = "assets/demo/Build";
    //@ts-ignore

    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: buildUrl + "/dist.data.unityweb",
      frameworkUrl: buildUrl + "/dist.framework.js.unityweb",
      codeUrl: buildUrl + "/dist.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "MaxZhmach",
      productName: "Clicker",
      productVersion: "0.1",
    });
  }
}
