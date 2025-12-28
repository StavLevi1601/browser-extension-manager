export const stopForwardProps = (...props: string[]) => ({ shouldForwardProp: (prop: string) => !props.includes(prop) });
