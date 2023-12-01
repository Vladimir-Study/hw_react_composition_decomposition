import { Links } from "./Links";
import { ITopLinks } from "./Type";

/**
 * Компонент ссылок в заголовке сайта на новостные ресурсы 
 */
export function TopLinks({items, date}: ITopLinks) {
  return (
    <>
      <Links items={items}/>
      <span className="date-today">{date}</span>
    </>
  )
}
