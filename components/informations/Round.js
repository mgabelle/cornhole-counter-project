export default function Round({round}) {
    return (
        <div style={{
            textAlign: "right",
            marginRight: "15px"
          }}>
            Manche&nbsp;
            <span style={{
                display: "inline-block",
                width: "23px",
                height: "22px",
                borderRadius: "11px",
                textAlign: "center",
                backgroundColor: "black",
                color: "white"
            }}>
                 {round}
            </span>
        </div>
    )
}