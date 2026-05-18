import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"
import AddedIdeaCard from "./AddedIdeaCard"

export default function AddedIdeasArea({id, addedItemsIds, thisRoute}) {

    const {setNodeRef, isOver} = useDroppable({id: id})

    const addedIdeasElement = thisRoute.cards.map(card => {
        return <AddedIdeaCard id={card.id} key={card.id} name={card.name} city={card.city} country={card.country} address={card.address} imageUrl={card.imageUrl} index={card.index}/>
    })

    return (
        <div className="w-[100%] min-h-[100%]" ref={setNodeRef}>
            <SortableContext items={addedItemsIds} strategy={verticalListSortingStrategy}>
                {addedIdeasElement}
            </SortableContext>
        </div>
    )
}