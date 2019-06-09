//
//  Lampada.swift
//  LightApp
//
//  Created by Ramon Cruz on 08/06/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Lampada)

class Lampada: NSObject{
  
  @objc
  static var isOn = false;
  
  @objc
  func turnOn(){
    Lampada.isOn = true;
    print("Lampada Ligada");
  }
  
  @objc
  func turnOff(){
    Lampada.isOn = false;
    print("Lampada Desligada");
  }
  
  @objc
  func getStatus(_ callback: RCTResponseSenderBlock){
    print("Lampada %@",Lampada.isOn);
    callback([NSNull(),Lampada.isOn])
    
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
}
