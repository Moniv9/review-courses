export interface ICard {
  id: string;
  title: string;
  image?: string;
  description?: string;
  tags?: string[];
  action: Function;
  actionButtonLabel?: string;
}
