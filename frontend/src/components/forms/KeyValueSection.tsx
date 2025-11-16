import { Plus, X } from "lucide-react"
import { TextInput, Label } from "../ui/Input"
import Button from "../ui/Button"

type KeyValueSectionProps<T extends Record<string, string>> = {
  title: string
  description: string
  items: T[]
  field1Key: keyof T
  field1Label: string
  field1Placeholder: string
  field2Key: keyof T
  field2Label: string
  field2Placeholder: string
  separator: string
  onAdd: () => void
  onRemove: (index: number) => void
  onUpdate: (index: number, field: keyof T, value: string) => void
}

const GRID_COLS = "grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto]"
const GRID_GAP = "gap-2"

export default function KeyValueSection<T extends Record<string, string>>({
  title,
  description,
  items,
  field1Key,
  field1Label,
  field1Placeholder,
  field2Key,
  field2Label,
  field2Placeholder,
  separator,
  onAdd,
  onRemove,
  onUpdate,
}: KeyValueSectionProps<T>) {
  const renderHeaderRow = () => (
    <div className={`hidden md:grid ${GRID_COLS} ${GRID_GAP}`}>
      <div>
        <Label htmlFor={String(field1Key)}>{field1Label}</Label>
      </div>
      <div className="flex items-center justify-center w-8">
        <div className="h-px" aria-hidden="true"></div>
      </div>
      <div>
        <Label htmlFor={String(field2Key)}>{field2Label}</Label>
      </div>
      <div className="flex items-center justify-end">
        <div className="w-15 h-px" aria-hidden="true"></div>
      </div>
    </div>
  )

  const renderItemRow = (item: T, index: number) => (
    <div key={index} className={`grid ${GRID_COLS} ${GRID_GAP}`}>
      <div>
        <Label
          htmlFor={`${String(field1Key)}-${index}`}
          className="md:hidden"
        >
          {field1Label}
        </Label>
        <TextInput
          id={`${String(field1Key)}-${index}`}
          value={String(item[field1Key] || "")}
          onChange={(value) => onUpdate(index, field1Key, value)}
          required
          placeholder={field1Placeholder}
        />
      </div>
      <div className="hidden md:flex items-center justify-center w-8">
        <span className="text-gray-400 text-xl text-center w-full">
          {separator}
        </span>
      </div>
      <div>
        <Label
          htmlFor={`${String(field2Key)}-${index}`}
          className="md:hidden"
        >
          {field2Label}
        </Label>
        <TextInput
          id={`${String(field2Key)}-${index}`}
          value={String(item[field2Key] || "")}
          onChange={(value) => onUpdate(index, field2Key, value)}
          required
          placeholder={field2Placeholder}
        />
      </div>
      <div className="flex items-center justify-end">
        <button type="button" onClick={() => onRemove(index)}>
          <Button style="ghost" color="red">
            <X />
          </Button>
        </button>
      </div>
    </div>
  )

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <button type="button" onClick={onAdd}>
          <Button style="secondary" color="blue">
            <Plus />
          </Button>
        </button>
      </div>

      {items.length > 0 && (
        <div>
          {renderHeaderRow()}
          <div className="grid gap-2">
            {items.map((item, index) => renderItemRow(item, index))}
          </div>
        </div>
      )}
    </div>
  )
}

