import Tooltip from "./Tooltip"
import Tooltop from "./Tooltop"

function BoardParent() {
  return (
    <div className="board-parent">
      <div className="tool-top-parent">
        <Tooltop />
      </div>

      <div className="tool-tip-parent">
        <Tooltip />
      </div>
    </div>
  )
}

export default BoardParent