import { IListQuotes } from "./Type";

/**
 * компонент отображения разделов 
 */
export function Quotes({quotes}: IListQuotes) {
  const listQuotes = <>
    {quotes.map(quote => {
      return (
        <li>
          <p>{quote.name}</p>
          <span>{quote.price}</span>
          <span>{quote.correction}</span>
        </li>
      )
    })}
  </>
  return (
    <ul>
      {listQuotes}
    </ul>
  )
}
