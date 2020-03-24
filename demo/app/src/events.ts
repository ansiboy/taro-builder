import { Callback } from "maishu-toolkit";

export let events = {
    receiptInfoSave: Callback.create<{ item: ReceiptInfo }>()
}