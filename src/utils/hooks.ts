import type { UseState, UseEffect, UseRef, UseCallback, UseMemo } from '../types/globals';

export function getReactHooks() {
  const {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo
  } = window.React;

  return {
    useState: useState as UseState,
    useEffect: useEffect as UseEffect,
    useRef: useRef as UseRef,
    useCallback: useCallback as UseCallback,
    useMemo: useMemo as UseMemo
  };
}
