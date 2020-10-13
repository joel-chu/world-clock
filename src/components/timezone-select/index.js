// break this dropdown out from each component to change their time zone
import { timeZonesNames } from "@vvo/tzdb"

const TimezoneSelect = ({ initTz, onChangeCallback }) => {

  return (
    <div class="form-group row col-sm-5">
      <select class="form-control " value={initTz} onChange={onChangeCallback}>
      {
        timeZonesNames.map((tz, i) => (
          <option value={tz} id={'option-' + i}>{tz}</option>
        ))
      }
      </select>
    </div>
  )
}

export default TimezoneSelect
