// if I put the form in the clock,
// it keep render every second which is not good
// so we need to separate the clock and the form
import Clock from '../clock'

const ClockDisplay = ({ tz, canClose }) => {


  return (
    <div class="card">
      <div class="card-body">
        {
          canClose && <button class="close">&times;</button>
        }
        <h5 class="card-title text-info">{tz}</h5>
        <Clock tz={tz} />
      </div>
    </div>
  )
}

export default ClockDisplay
