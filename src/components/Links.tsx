import { LinkComponent } from './LinkComponent'
import { IItems, TListItem } from './Type'

/**
 * Компонент переиспользуемый список 
 * @param items обьект ссылок
 */
export function Links({ items }: IItems) {
  return (
    <ul>
      {items.map((item:TListItem ) => < LinkComponent key={item.id} item={item} />)}
    </ul>
  )
}
