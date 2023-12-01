import { LinkComponent } from "./LinkComponent"
import { IListItemProps } from "./Type"

/**
 * компонент отображения новостных ссылок 
 * @param param обьект с новостными дынными 
 */
export function NewLink({item}: IListItemProps) {
  return (
    <li>
      <img src={item.icon} alt="..." />
      <LinkComponent item={item}/>
    </li>
  )
}
