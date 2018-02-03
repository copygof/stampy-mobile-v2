package com.stampy;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import com.BV.LinearGradient.LinearGradientPackage;
import com.horcrux.svg.SvgPackage;

import java.util.List;
import java.util.Arrays;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return  Arrays.<ReactPackage>asList(
            new LinearGradientPackage(),
            new SvgPackage()
        );
    }
    

    @Nullable
    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}