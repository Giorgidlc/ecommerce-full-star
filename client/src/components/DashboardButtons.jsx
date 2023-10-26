import PropTypes from 'prop-types'

const icons = ['../src/assets/icon-delete.svg','../src/assets/icon-update.svg' ]


const DashboardButtons = ({prodId}) => {
  const removeProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        });
        
        if (response.ok) {
        alert(`Artículo con ID ${id} eliminado.`);
        } else {
        console.error(`Error al eliminar el artículo con ID ${id}.`);
        }
    } catch (error) {
        console.error("Error", error);
        }
    }
    
  return (
    <>
      <button className="ButtonsDashboard__btn-delete" onClick={() => removeProduct(prodId)}>
        <img src={icons.at(0)} alt="" className="icon-delete" />
      </button>
      <button className="ButtonsDashboard__btn-update">
        <img src={icons.at(1)} alt="" className="icon-update" />
      </button>
      </>
  )
}

DashboardButtons.propTypes = {
prodId: PropTypes.number,
}

export default DashboardButtons