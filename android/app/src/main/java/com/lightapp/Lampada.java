package com.lightapp;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.logging.Logger;

import javax.annotation.Nonnull;

public class Lampada extends  ReactContextBaseJavaModule{

    private static Boolean isOn = false;
    public Lampada(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @ReactMethod
    public void getStatus( Callback successCallback){
        successCallback.invoke(null,isOn);
        Log.i("Lampada","Lampada ->"+isOn);
    }

    @ReactMethod
    public void turnOn(){

        isOn = true;
        Log.i("Lampada","Lampada Ligada");
    }

    @ReactMethod
    public void turnOff(){

        isOn = false;
        Log.i("Lampada","Lampada Desligada");
    }

    @Override
    public String getName() {
        return "Lampada";
    }
}
