import AddHotelForm from "../components/hotel/AddHotelForm"
import { useParams } from "react-router-dom";


const Hotel = () => {
    const { id } = useParams<{ id: string }>();

  return (
    <div>
        Hotel ID: {id}
        <AddHotelForm />
    </div>
  )
}

export default Hotel