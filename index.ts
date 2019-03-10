import { MockFactory } from "ts-auto-mock";

MockFactory.instance.registerFactory((name: string, value: any) => {
	return jest.fn().mockResolvedValue(value);
});

type ReturnType = jest.Mock;

declare module 'ts-auto-mock' {
	interface MockMethod<TR> extends ReturnType {}
}