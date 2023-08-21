export interface ICategory {
  id?: number;
  parent_id?: number;
  title: string;
  meta_title: string;
  slug: string;
  content?: string;
  sub_categories?: unknown;
}
