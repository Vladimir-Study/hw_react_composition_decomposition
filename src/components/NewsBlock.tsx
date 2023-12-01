import { NewLink } from "./NewLink";
import { IItems } from "./Type";

/**
 * компонент отображения новостей 
 * @param items данные новостного блока
 */
export function NewsBlock({ items }: IItems) {
  const news = <>
    {items.map(item => {
      return (
        <>
          <img src={item.icon} alt="..." />
          <NewLink item={item}/>
        </>
      )
    })}
  </>
  return (
    <ul className="news-block">
      { news }
    </ul>
  )
}
