import { IListItemProps } from "./Type"; 

/**
 * Переиспользуемый компонент ссылка, можно использовать в разлинчый блоках  
 * @param item обьект данных для отображения 
 */

export function LinkComponent({ item }: IListItemProps ) {
  const {url, title} = item;
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  )
}
