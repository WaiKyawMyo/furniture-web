import { useParams } from "react-router"

export const blogDetail = () => {
   const {postid} = useParams()
    return (
    <div>blogDetail : {postid}</div>
  )
}
