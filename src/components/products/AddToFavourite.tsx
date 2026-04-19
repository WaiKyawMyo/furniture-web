import { cn } from "@/lib/utils"
import { Icons } from "../icons"
import { Button } from "../ui/button"

interface Favourite extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    productId:string,
    rating:number,
    
}

const AddToFavourite = ({productId,rating,className,...props}:Favourite) => {
  return (
    <Button variant={"secondary" } size={"icon"} className={cn("size-8 shrink-0",className)} {...props}>
        <Icons.heart className="size-4" />
    </Button>
  )
}

export default AddToFavourite