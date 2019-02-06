import { Injectable, ClassProvider, PLATFORM_ID, FactoryProvider, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";

export const WINDOW = new InjectionToken('WindowToken');

export abstract class WindowService {

  get nativeWindow(): Window | Object {
    throw new Error('Not implemented.');
  }

}

export class WindowServiceImpl extends WindowService {

  constructor() {
    super();
  }

  get nativeWindow(): Window | Object {
    return window;
  }

}

export function windowFactory(WindowService: WindowServiceImpl, platformId: Object): Window | Object {
  if (isPlatformBrowser(platformId)) {
    return WindowService.nativeWindow;
  }
  return new Object();
}

export const browserWindowProvider: ClassProvider = {
  provide: WindowService,
  useClass: WindowServiceImpl
};

export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowService, PLATFORM_ID]
};

export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];
