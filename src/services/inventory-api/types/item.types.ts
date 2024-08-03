
export const itemTypes = `
    type Item {
        id: ID
        name: String
    }
    
    type Query{
        item(id: ID): Item
        items: [Item]
    }
`