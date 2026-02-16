import Board from "./Board"
import Tooltip from "./Tooltip"

function BoardParent() {
  return (
    <div className="board-parent">
      <div className="board-child">
        <div className="tool-top-parent">
          <Tooltip />
        </div>
        <div className="board-canvas">
          <Board />
        </div>
      </div>

      <div className="tool-tip-parent">
        <Tooltip />
      </div>

      <div className="tool-bottom-parent">
        <Tooltip />
      </div>
    </div>
  )
}

export default BoardParent