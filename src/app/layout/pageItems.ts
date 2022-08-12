import { routes } from '../shared/routes';

export type PageItem = {
  label: string;
  route: string;
};

const pageItems: ReadonlyArray<PageItem> = [
  { label: '지도', route: routes.Map },
  { label: '다시 시작', route: routes.StartOver }
];

export { pageItems };
