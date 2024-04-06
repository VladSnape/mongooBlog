"use client"


import { Button } from '@/components/ui/button'
import { deleteBlog } from '@/lib/actions'

interface DeleteButtnProps {
    id: string
}


const DeleteButtn : React.FC<DeleteButtnProps> = ({id}) => {
  return (
    <Button onClick={ () => deleteBlog(id)}>delete</Button>
)
}

export default DeleteButtn