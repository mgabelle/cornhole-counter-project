export default function Background() {
    return (
        <img src="/park-background.jpg" style={{
            zIndex: -1,
            position: "absolute",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            opacity: 0.5,
          }}></img>
    )
}