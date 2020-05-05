export default function prepareAvailability(){
    const chosenSupplier = ref('')
        supplierPreListIndex = ref(-1)
        orderDate = ref('')
        chosenMethod = ref('')
        fileChosen = ref('')
        fileData = ref('')
        toMap = ref(false)
        isComplete = ref(false)
        suppliers = ref([
            "Food Connect",
            "Sovereign Foods",
            "Mt Cotton Organic Farm",
            "Gabrielle Austerberry",
            "Carol Blight"            
        ])
        mappedFields = ref([
            ['product',   []],
            ['unit',      []],
            ['unitPrice', []],
            ['gst',       []],
            ['producer',  []]
        ])
    

    
    function setChosenSupplier(supplier) {
        chosenSupplier.value = supplier
    }

    function setSupplierPreListIndex(index) {
        PreListIndex.value = index
    }

    function setOrderDate(date) {
        orderDate.value = date
    }

    function setChosenMethod(method) {
        chosenMethod.value = method
    }

    function setFileChosen(file) {
        fileChosen.value = file
    }

    function setFileData(fileData) {
        fileData.value = fileData
    }

    function setToMap(bool) {
        toMap.value = bool
    }

    function setIsComplete(bool) {
        isComplete.value = bool
    }

    function setMappedField(field, mapping) {
        const mf = mappedFields.value
        const map = mf.find(f => f[0] == field)
        const i = mf.findIndex(map)
        mappedFields.value[i][1] = mapping   
    }
    function clearMappedFields() {
        const length = mappedFields.value.length
        for (let i = 0; i < length; i++) {
            mappedFields.value[i][1] = [] 
        }
    }

    return {
        chosenSupplier:             computed(() => chosenSupplier.value),
        supplierPreListIndex:       computed(() => supplierPreListIndex.value),
        orderDate:                  computed(() => orderDate.value),
        chosenMethod:               computed(() => chosenMethod.value),
        fileChosen:                 computed(() => fileChosen.value),
        fileData:                   computed(() => fileData.value),
        toMap:                      computed(() => toMap.value),
        isComplete:                 computed(() => isComplete.value),
        suppliers:                  computed(() => suppliers.value),
        mappedFields:               computed(() => mappedFields.value),
        setChosenSupplier,
        setSupplierPreListIndex,
        setOrderDate,
        setChosenMethod,
        setFileChosen,
        setFileData,
        setToMap,
        setIsComplete,
        setMappedField,
        clearMappedFields
    }    
}