import { ref, watchEffect } from "@vue/composition-api"



    const supplierPreLists = computed(() => {
        get() {
            return $store.getters.supplierPreLists
        }
    })

    watchEffect(() => {
        if (chosenSupplier) {
            // update supplier index

            let cs = chosenSupplier
            let p = supplierPreLists
            let index = supplierPreListIndex
            // find index
            p.some(function (v, i) {
                if (v.supplierPreList.supplier === cs) {
                    index = i
                    return true
                }
            })
            this.supplierPreListIndex = index

            // update supplier mapping 
            if (index > -1) {
                let spl = supplierPreLists[index].supplierPreList.mapping
                mappedFields = new Map(Object.entries(spl))
            }

        } else {
            // clear supplier mapping
            supplierPreListIndex = -1
            clearMappedFields()
        }
    })

    return {
        readFile,
        clearMappedFields,
        handleDrop,
        updatePreLists,
        csvItems,
        csvColumns,
        supplierPreLists,
        watchEffect
    }

}