export type FastifyPluginDoneFunction = (_err?: Error) => void;

export interface FindAndCountAllType<T> {
  data: T[];
  count: number;
}
