export default function DevList({ devData, selectDev }) {
  const handleClick = (ghUsername) => {
    selectDev(ghUsername)
  }

  return (
    <div className="wrapper">
      {devData.map((dev) => {
        return (
          <div
            key={dev.ghUsername}
            style={{
              height: '100px',
              backgroundColor: '#B1CF5F',
              margin: '10px',
              padding: '5px',
              display: 'grid',
              placeContent: 'center',
              fontSize: '1.5rem',
            }}
            onClick={() => handleClick(dev.ghUsername)}
          >
            {dev.name}
          </div>
        )
      })}
    </div>
  )
}
