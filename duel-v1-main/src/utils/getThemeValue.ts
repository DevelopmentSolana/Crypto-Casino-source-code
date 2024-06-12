import { DefaultTheme } from 'styled-components';
import get from 'lodash/get';
import { lighten, darken } from 'polished';
import { ChartArea } from 'chart.js';

export const getColor =
  (color: string, path: string = '') =>
  (prop: any) => {
    if (path === '') return getThemeValue(`colors.${color}`, color)(prop.theme);
    return getThemeValue(`${path}.${color}`, color)(prop.theme);
  };

export const getGradient = (gradient: string) => (prop: any) => {
  return getThemeValue(`gradients.${gradient}`, gradient)(prop.theme);
};

export const getBreakpoint = (breakpoint: string) => (prop: any) => {
  return getThemeValue(`breakpoints.${breakpoint}`, breakpoint)(prop.theme);
};

export const getSpacing = (space: string) => (prop: any) => {
  return getThemeValue(`spaces.${space}`, space)(prop.theme);
};

export const getDarken = (color: string, rate: number) => (prop: any) => {
  return darken(rate, getColor(color)(prop));
};

export const getLighten = (color: string, rate: number) => (prop: any) => {
  return lighten(rate, getColor(color)(prop));
};

const getThemeValue =
  (path: string, fallback?: string | number) =>
  (theme: DefaultTheme): string =>
    get(theme, path, fallback);

interface GradientStopProps {
  percent: number;
  color: string;
}

interface Area {
  left: number;
  right: number;
  bottom: number;
  top: number;
}

export const getChartGradient = (
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea,
  area: Area,
  gradientStop: GradientStopProps[]
) => {
  let gradient = ctx.createLinearGradient(
    area.right,
    area.top,
    area.left,
    area.bottom
  );

  gradientStop.forEach(item => {
    gradient.addColorStop(item.percent / 100, item.color);
  });

  return gradient;
};

//background: linear-gradient(230.78deg, rgba(180, 255, 255, 0.25) 2.91%, rgba(255, 255, 255, 0) 86.55%);
