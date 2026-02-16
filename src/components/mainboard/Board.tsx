import { useEffect, useRef, useState } from "react"

function Board() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [dragging, setDragging] = useState(false)

    return (
        <canvas ref={canvasRef} onDoubleClick={() => {setDragging(true)}}/>
    )
}

export default Board