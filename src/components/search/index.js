// a component to search for timezone to add
import { timeZonesNames } from "@vvo/tzdb"


const SearchTimezone = () => {

  return (
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with dropdown button" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SELECT TIMEZONE
        </button>
        <div class="dropdown-menu">
          {
            timeZonesNames.map((tzn, i) => (
              <a class="dropdown-item" href="#" id={'item-' + i}>{tzn}</a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchTimezone
