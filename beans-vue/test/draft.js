
db.setSchema([{
        singular: 'item',
        plural: 'items',
        relations: {
            'typo': {
                belongsTo: 'typo'
            },
            'supplierItemDescription': {
                belongsTo: 'supplierItemDescription'
            },
            'varieties': {
                hasMany: 'variety'
            },
            'availableItems': {
                hasMany: 'availableItem'
            }
        }
    },
    {
        singular: 'typo',
        plural: 'typos',
        relations: {
            'items': {
                hasMany: 'item'
            }
        }
    },
    {
        singular: 'variety',
        plural: 'varieties',
        relations: {
            'item': {
                belongsTo: 'item'
            }
        }
    },
    {
        singular: 'supplierItemDescription',
        plural: 'supplierItemDescriptions',
        relations: {
            'items': {
                hasMany: 'item'
            }
        }
    },
    {
        singular: 'availableItem',
        plural: 'availableItems',
        relations: {
            'item': {
                belongsTo: 'item'
            }
        }
    }
]);

db.rel.save('item', {
    itemName: 'banana',
    description: 'over-ripe and going cheap',
    id: 1
});




