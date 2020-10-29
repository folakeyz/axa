declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

