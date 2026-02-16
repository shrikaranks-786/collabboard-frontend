import ActivityBar from "../components/mainboard/ActivityBar"
import BoardParent from "../components/mainboard/BoardParent"
import VideoBoard from "../components/mainboard/VideoBoard"

function MainBoard() {
  return (
    <div className="main-board">
      <ActivityBar />

      <div className="main-content">
        <BoardParent />
        <VideoBoard />
      </div>
    </div>
  )
}

export default MainBoard