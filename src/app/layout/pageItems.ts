export type PageItem = {
  label: string;
  route: string;
};

const pageItems: ReadonlyArray<PageItem> = [{ label: '다시 시작', route: '/StartOver' }];

export { pageItems };
