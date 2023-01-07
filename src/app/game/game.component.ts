import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit{

  ngOnInit(): void {
    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/demo/Build/demo.data",
      frameworkUrl: "/assets/demo/Build/demo.framework.js",
      codeUrl: "/assets/demo/Build/demo.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "MaxZhmach",
      productName: "ClickerWebGL",
      productVersion: "0.0.0.1"
    });
  }
}
