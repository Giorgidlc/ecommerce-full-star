const icons = ['' ]

const DashboardButtons = () => {
  return (
    <>
      <button className="ButtonsDashboard__btn-delete">
        <img src={icons.at(0)} alt="" className="icon-delete" />
      </button>
      <button className="ButtonsDashboard__btn-update">
        <img src={icons.at(1)} alt="" className="icon-update" />
      </button>
      </>
  )
}

export default DashboardButtons